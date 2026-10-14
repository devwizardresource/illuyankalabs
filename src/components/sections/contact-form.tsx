"use client";

import Link from "next/link";
import { useActionState, useEffect, useRef } from "react";
import {
  sendContactRequest,
  type ContactField,
  type ContactState,
} from "@/services/contact";
import { PROJECT_TYPES } from "@/constants/services";
import { IconArrowRight } from "@/icons/ui";
import { cn } from "@/utils/cn";

const INITIAL_STATE: ContactState = { status: "idle", message: "" };

const fieldStyles =
  "w-full rounded-xl border border-white/15 bg-white/5 px-4 text-sm text-white outline-none transition-colors duration-200 placeholder:text-[#8fa9cf] focus:border-[#4da3ff] focus:ring-2 focus:ring-[#4da3ff]/30 aria-invalid:border-red-300";
const labelStyles = "mb-1.5 block text-sm font-medium text-white";

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    sendContactRequest,
    INITIAL_STATE,
  );
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

  const values = state.values ?? {};
  const errorFor = (field: ContactField) => state.errors?.[field];
  const describedBy = (field: ContactField) =>
    errorFor(field) ? `contacto-${field}-error` : undefined;
  const fieldError = (field: ContactField) =>
    errorFor(field) ? (
      <p id={`contacto-${field}-error`} className="mt-1.5 text-xs text-red-300">
        {errorFor(field)}
      </p>
    ) : null;

  return (
    <form
      action={formAction}
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
          defaultValue={values.name}
          aria-invalid={Boolean(errorFor("name")) || undefined}
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
          defaultValue={values.company}
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
          defaultValue={values.email}
          aria-invalid={Boolean(errorFor("email")) || undefined}
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
          maxLength={20}
          autoComplete="tel"
          placeholder="+57"
          defaultValue={values.phone}
          aria-invalid={Boolean(errorFor("phone")) || undefined}
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
          defaultValue={values.projectType ?? ""}
          aria-invalid={Boolean(errorFor("projectType")) || undefined}
          aria-describedby={describedBy("projectType")}
          className={cn(fieldStyles, "h-11 appearance-none")}
        >
          <option value="" disabled className="bg-[#041226]">
            Elige un tipo de proyecto
          </option>
          {PROJECT_TYPES.map((type) => (
            <option key={type.value} value={type.value} className="bg-[#041226]">
              {type.label}
            </option>
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
          maxLength={2000}
          placeholder="Ej.: Hoy registramos los pedidos a mano y queremos automatizarlo."
          defaultValue={values.message}
          aria-invalid={Boolean(errorFor("message")) || undefined}
          aria-describedby={describedBy("message")}
          className={cn(fieldStyles, "resize-y py-3")}
        />
        {fieldError("message")}
      </div>

      {/* Honeypot antibots: invisible para personas y lectores de pantalla */}
      <input
        type="text"
        name="sitio_web"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <div className="sm:col-span-2">
        <div className="flex items-start gap-3">
          <input
            id="contacto-consent"
            name="consent"
            type="checkbox"
            required
            defaultChecked={state.status === "error" && !errorFor("consent")}
            aria-invalid={Boolean(errorFor("consent")) || undefined}
            aria-describedby={describedBy("consent")}
            className="mt-0.5 size-4 shrink-0 accent-[#1378f9]"
          />
          <label htmlFor="contacto-consent" className="text-xs leading-relaxed text-[#b7cdec]">
            Autorizo a Illuyanka Labs a tratar mis datos para responder mi
            solicitud, según la{" "}
            <Link href="/privacidad" className="text-white underline underline-offset-2">
              Política de privacidad
            </Link>{" "}
            (Ley 1581 de 2012).
          </label>
        </div>
        {fieldError("consent")}
      </div>

      <div className="flex flex-col items-start gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={isPending}
          className="group/button inline-flex h-12 items-center justify-center gap-2 rounded-full bg-linear-to-r from-primary-strong to-primary px-7 font-display text-base font-medium text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.22),0_0_36px_-8px_var(--glow)] transition-all duration-300 hover:brightness-110 active:scale-[0.98] disabled:opacity-60"
        >
          {isPending ? "Enviando…" : "Enviar mi solicitud"}
          <IconArrowRight className="size-4.5 transition-transform duration-300 group-hover/button:translate-x-1" />
        </button>
        <p
          role="status"
          aria-live="polite"
          className={cn(
            "min-h-5 text-sm",
            state.status === "error" ? "text-red-300" : "text-[#22d9ee]",
          )}
        >
          {state.message}
        </p>
      </div>
    </form>
  );
}
