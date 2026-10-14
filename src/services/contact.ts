"use server";

import { headers } from "next/headers";
import { siteConfig } from "@/config/site";
import { PROJECT_TYPES } from "@/constants/services";
import { isRateLimited } from "@/lib/rate-limit";

export type ContactField =
  | "name"
  | "company"
  | "email"
  | "phone"
  | "projectType"
  | "message"
  | "consent";

type ContactValues = Partial<Record<Exclude<ContactField, "consent">, string>>;

export interface ContactState {
  status: "idle" | "success" | "error";
  message: string;
  errors?: Partial<Record<ContactField, string>>;
  /** Valores enviados, para no perder lo escrito cuando hay errores. */
  values?: ContactValues;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_PATTERN = /^\+?[\d\s().-]{7,20}$/;
// Caracteres de control: se eliminan de todo campo (en el mensaje se conservan los saltos de línea).
const CONTROL_CHARS = /[\u0000-\u001F\u007F]/g;
const CONTROL_CHARS_EXCEPT_NEWLINE = /[\u0000-\u0009\u000B-\u001F\u007F]/g;

const LIMITS = {
  name: 80,
  company: 100,
  email: 254,
  phone: 20,
  message: 2000,
} as const;

const SUCCESS_MESSAGE = `¡Gracias! Recibimos tu mensaje y te responderemos en ${siteConfig.contact.responseTime}.`;
const DELIVERY_ERROR = `No pudimos enviar tu mensaje. Escríbenos directamente a ${siteConfig.contact.email}.`;

function readLine(formData: FormData, key: string, max: number): string {
  const value = formData.get(key);
  if (typeof value !== "string") return "";
  return value.replace(CONTROL_CHARS, " ").trim().slice(0, max);
}

function readText(formData: FormData, key: string, max: number): string {
  const value = formData.get(key);
  if (typeof value !== "string") return "";
  return value
    .replace(/\r\n?/g, "\n")
    .replace(CONTROL_CHARS_EXCEPT_NEWLINE, " ")
    .trim()
    .slice(0, max);
}

async function clientKey(): Promise<string> {
  const requestHeaders = await headers();
  // Detrás de un proxy de confianza (Vercel, Nginx) estas cabeceras traen la IP real.
  const forwarded = requestHeaders.get("x-forwarded-for")?.split(",")[0];
  return (requestHeaders.get("x-real-ip") ?? forwarded ?? "desconocido").trim();
}

/**
 * Entrega el mensaje vía la API HTTP de Resend (sin dependencias).
 * Requiere RESEND_API_KEY y CONTACT_FROM_EMAIL (remitente de un dominio verificado).
 */
async function deliver(values: Required<ContactValues>): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL ?? siteConfig.contact.email;

  if (!apiKey || !from) {
    if (process.env.NODE_ENV !== "production") {
      console.info("[contacto] Envío omitido: falta RESEND_API_KEY o CONTACT_FROM_EMAIL.");
      return true;
    }
    console.error("[contacto] Formulario sin proveedor de correo configurado.");
    return false;
  }

  const projectLabel =
    PROJECT_TYPES.find((type) => type.value === values.projectType)?.label ??
    values.projectType;

  const text = [
    `Nombre: ${values.name}`,
    `Empresa: ${values.company || "—"}`,
    `Correo: ${values.email}`,
    `Teléfono: ${values.phone || "—"}`,
    `Tipo de proyecto: ${projectLabel}`,
    "",
    values.message,
  ].join("\n");

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: values.email,
        subject: `Nuevo contacto web: ${projectLabel}`,
        text,
      }),
      cache: "no-store",
      signal: AbortSignal.timeout(8000),
    });
    if (!response.ok) {
      console.error(`[contacto] El proveedor respondió ${response.status}.`);
    }
    return response.ok;
  } catch {
    console.error("[contacto] No se pudo contactar al proveedor de correo.");
    return false;
  }
}

/**
 * Server Action del formulario de contacto.
 * Toda la validación ocurre en servidor; incluye honeypot antibots
 * y límite de envíos por IP. Funciona sin JavaScript.
 */
export async function sendContactRequest(
  _previous: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const honeypot = formData.get("sitio_web");
  if (typeof honeypot === "string" && honeypot.length > 0) {
    return { status: "success", message: SUCCESS_MESSAGE };
  }

  const values: Required<ContactValues> = {
    name: readLine(formData, "name", LIMITS.name),
    company: readLine(formData, "company", LIMITS.company),
    email: readLine(formData, "email", LIMITS.email).toLowerCase(),
    phone: readLine(formData, "phone", LIMITS.phone),
    projectType: readLine(formData, "projectType", 40),
    message: readText(formData, "message", LIMITS.message),
  };

  const errors: ContactState["errors"] = {};
  if (values.name.length < 2) errors.name = "Escribe tu nombre.";
  if (!EMAIL_PATTERN.test(values.email)) {
    errors.email = "Escribe un correo electrónico válido.";
  }
  if (values.phone && !PHONE_PATTERN.test(values.phone)) {
    errors.phone = "Escribe un teléfono válido (solo números, espacios y +).";
  }
  if (!PROJECT_TYPES.some((type) => type.value === values.projectType)) {
    errors.projectType = "Elige el tipo de proyecto.";
  }
  if (values.message.length < 10) {
    errors.message = "Cuéntanos un poco más sobre tu reto (mínimo 10 caracteres).";
  }
  if (formData.get("consent") !== "on") {
    errors.consent = "Necesitamos tu autorización para responderte.";
  }

  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      message: "Revisa los campos marcados.",
      errors,
      values,
    };
  }

  if (isRateLimited(`contacto:${await clientKey()}`, { limit: 5, windowMs: 10 * 60_000 })) {
    return {
      status: "error",
      message: `Recibimos varios mensajes seguidos. Intenta de nuevo en unos minutos o escríbenos a ${siteConfig.contact.email}.`,
      values,
    };
  }

  const delivered = await deliver(values);
  if (!delivered) {
    return { status: "error", message: DELIVERY_ERROR, values };
  }

  return { status: "success", message: SUCCESS_MESSAGE };
}
