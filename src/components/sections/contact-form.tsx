"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { PROJECT_TYPES } from "@/constants/services";
import { siteConfig } from "@/config/site";
import { IconArrowRight } from "@/icons/ui";
import { cn } from "@/utils/cn";

type Field = "name" | "email" | "phone" | "projectType" | "message";
type Errors = Partial<Record<Field, string>>;

const PROJECT_GROUPS = [...new Set(PROJECT_TYPES.map((type) => type.group))];

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
/** Cualquier país: dígitos con espacios, guiones, puntos o paréntesis y un "+" inicial opcional. */
const PHONE_PATTERN = /^\+?[\d\s().-]+$/;

function isValidPhone(phone: string): boolean {
  const digits = phone.replace(/\D/g, "").length;
  return PHONE_PATTERN.test(phone) && digits >= 7 && digits <= 15;
}

const fieldStyles =
  "w-full rounded-xl border border-white/15 bg-white/5 px-4 text-sm text-white outline-none transition-colors duration-200 placeholder:text-[#8fa9cf] focus:border-[#b48cff] focus:ring-2 focus:ring-[#9d5cff]/30 aria-invalid:border-red-300";
const labelStyles = "mb-1.5 block text-sm font-medium text-white";

function read(data: FormData, key: string): string {
  const value = data.get(key);
  return typeof value === "string" ? value.trim() : "";
}

/**
 * Formulario de contacto sin servidor: al enviarlo abre la aplicación de
 * correo del visitante con la solicitud ya redactada para el buzón del sitio.
 */
export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState("");
  const projectTypeRef = useRef<HTMLSelectElement>(null);

  // Los enlaces de cada servicio preseleccionan el tipo de proyecto.
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest<HTMLElement>(
        "a[data-project-type]",
      );
      const value = link?.dataset.projectType;
      if (
        value &&
        projectTypeRef.current &&
        PROJECT_TYPES.some((type) => type.value === value)
      ) {
        projectTypeRef.current.value = value;
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = read(data, "name");
    const company = read(data, "company");
    const email = read(data, "email");
    const phone = read(data, "phone");
    const projectType = read(data, "projectType");
    const message = read(data, "message");

    const nextErrors: Errors = {};
    if (name.length < 2) nextErrors.name = "Escribe tu nombre.";
    if (!EMAIL_PATTERN.test(email)) {
      nextErrors.email = "Escribe un correo electrónico válido.";
    }
    if (phone && !isValidPhone(phone)) {
      nextErrors.phone = "Escribe un número válido, con el indicativo de tu país.";
    }
    const project = PROJECT_TYPES.find((type) => type.value === projectType);
    if (!project) nextErrors.projectType = "Elige el tipo de proyecto.";
    if (message.length < 10) {
      nextErrors.message = "Cuéntanos un poco más sobre tu reto (mínimo 10 caracteres).";
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0 || !project) {
      setStatus("Revisa los campos marcados.");
      return;
    }

    const subject = `Solicitud desde el sitio web: ${project.label}`;
    const body = [
      `Nombre: ${name}`,
      `Empresa: ${company || "—"}`,
      `Correo: ${email}`,
      `Teléfono: ${phone || "—"}`,
      `Tipo de proyecto: ${project.label}`,
      "",
      message,
    ].join("\n");

    window.location.href = `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setStatus(
      `Abrimos tu aplicación de correo con la solicitud lista: solo dale "Enviar". Si no se abrió, escríbenos a ${siteConfig.contact.email}.`,
    );
  };

  const describedBy = (field: Field) =>
    errors[field] ? `contacto-${field}-error` : undefined;
  const fieldError = (field: Field) =>
    errors[field] ? (
      <p id={`contacto-${field}-error`} className="mt-1.5 text-xs text-red-300">
        {errors[field]}
      </p>
    ) : null;

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      aria-label="Formulario de contacto"
      className="grid gap-4 text-left sm:grid-cols-2"
    >
      <div>
        <label htmlFor="contacto-name" className={labelStyles}>
          Nombre
        </label>
        <input
          id="contacto-name"
          name="name"
          required
          maxLength={80}
          autoComplete="name"
          aria-invalid={Boolean(errors.name) || undefined}
          aria-describedby={describedBy("name")}
          className={cn(fieldStyles, "h-11")}
        />
        {fieldError("name")}
      </div>

      <div>
        <label htmlFor="contacto-company" className={labelStyles}>
          Empresa u organización{" "}
          <span className="font-normal text-[#9ab8e0]">(opcional)</span>
        </label>
        <input
          id="contacto-company"
          name="company"
          maxLength={100}
          autoComplete="organization"
          className={cn(fieldStyles, "h-11")}
        />
      </div>

      <div>
        <label htmlFor="contacto-email" className={labelStyles}>
          Correo electrónico
        </label>
        <input
          id="contacto-email"
          name="email"
          type="email"
          required
          maxLength={254}
          autoComplete="email"
          aria-invalid={Boolean(errors.email) || undefined}
          aria-describedby={describedBy("email")}
          className={cn(fieldStyles, "h-11")}
        />
        {fieldError("email")}
      </div>

      <div>
        <label htmlFor="contacto-phone" className={labelStyles}>
          Teléfono o WhatsApp{" "}
          <span className="font-normal text-[#9ab8e0]">(opcional)</span>
        </label>
        <input
          id="contacto-phone"
          name="phone"
          type="tel"
          maxLength={24}
          autoComplete="tel"
          inputMode="tel"
          placeholder="Indicativo del país + número"
          aria-invalid={Boolean(errors.phone) || undefined}
          aria-describedby={describedBy("phone")}
          className={cn(fieldStyles, "h-11")}
        />
        {fieldError("phone")}
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="contacto-projectType" className={labelStyles}>
          ¿Qué necesitas?
        </label>
        <select
          id="contacto-projectType"
          ref={projectTypeRef}
          name="projectType"
          required
          defaultValue=""
          aria-invalid={Boolean(errors.projectType) || undefined}
          aria-describedby={describedBy("projectType")}
          className={cn(fieldStyles, "h-11 appearance-none")}
        >
          <option value="" disabled className="bg-[#041226]">
            Elige un tipo de proyecto
          </option>
          {PROJECT_GROUPS.map((group) => (
            <optgroup key={group} label={group} className="bg-[#041226]">
              {PROJECT_TYPES.filter((type) => type.group === group).map((type) => (
                <option key={type.value} value={type.value} className="bg-[#041226]">
                  {type.label}
                </option>
              ))}
            </optgroup>
          ))}
        </select>
        {fieldError("projectType")}
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="contacto-message" className={labelStyles}>
          Cuéntanos tu reto
        </label>
        <textarea
          id="contacto-message"
          name="message"
          required
          rows={4}
          maxLength={1500}
          placeholder="Ej.: Hoy registramos los pedidos a mano y queremos automatizarlo."
          aria-invalid={Boolean(errors.message) || undefined}
          aria-describedby={describedBy("message")}
          className={cn(fieldStyles, "resize-y py-3")}
        />
        {fieldError("message")}
      </div>

      <div className="flex flex-col items-start gap-3 sm:col-span-2">
        <button
          type="submit"
          className="group/button inline-flex h-12 items-center justify-center gap-2 rounded-full bg-linear-to-r from-primary-strong to-violet-strong px-7 font-display text-base font-medium text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.22),0_0_36px_-8px_var(--glow-violet)] transition-all duration-300 hover:brightness-110 active:scale-[0.98]"
        >
          Enviar mi solicitud
          <IconArrowRight className="size-4.5 transition-transform duration-300 group-hover/button:translate-x-1" />
        </button>
        <p
          role="status"
          aria-live="polite"
          className={cn(
            "min-h-5 text-sm",
            Object.keys(errors).length > 0 ? "text-red-300" : "text-[#22d9ee]",
          )}
        >
          {status}
        </p>
      </div>
    </form>
  );
}
