"use server";

import { headers } from "next/headers";
import { isRateLimited } from "@/lib/rate-limit";

export interface NewsletterState {
  status: "idle" | "success" | "error";
  message: string;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/**
 * Server Action de suscripción al newsletter.
 * Valida en servidor (la validación del cliente es solo UX) e incluye
 * un honeypot contra bots. El proveedor de email (Resend, Mailchimp,
 * Brevo…) se conecta en el punto de integración indicado.
 */
export async function subscribeToNewsletter(
  _previous: NewsletterState,
  formData: FormData,
): Promise<NewsletterState> {
  const honeypot = formData.get("empresa_web");
  if (typeof honeypot === "string" && honeypot.length > 0) {
    return { status: "success", message: "¡Listo! Te has suscrito correctamente." };
  }

  const email = formData.get("email");
  if (typeof email !== "string" || !EMAIL_PATTERN.test(email.trim())) {
    return {
      status: "error",
      message: "Ingresa un correo electrónico válido.",
    };
  }

  const requestHeaders = await headers();
  const ip =
    requestHeaders.get("x-real-ip") ??
    requestHeaders.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    "desconocido";
  if (isRateLimited(`newsletter:${ip}`, { limit: 5, windowMs: 10 * 60_000 })) {
    return {
      status: "error",
      message: "Demasiados intentos. Intenta de nuevo en unos minutos.",
    };
  }

  const normalized = email.trim().toLowerCase().slice(0, 254);
  // Punto de integración con el proveedor de email marketing
  // (no se registra el correo en los logs para no exponer datos personales).
  void normalized;

  return { status: "success", message: "¡Listo! Te has suscrito correctamente." };
}
