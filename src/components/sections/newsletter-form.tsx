"use client";

import { useActionState } from "react";
import {
  subscribeToNewsletter,
  type NewsletterState,
} from "@/services/newsletter";
import { IconSend } from "@/icons/ui";
import { cn } from "@/utils/cn";

const INITIAL_STATE: NewsletterState = { status: "idle", message: "" };

export function NewsletterForm() {
  const [state, formAction, isPending] = useActionState(
    subscribeToNewsletter,
    INITIAL_STATE,
  );

  return (
    <form action={formAction} className="mt-4" noValidate>
      <label htmlFor="newsletter-email" className="sr-only">
        Correo electrónico
      </label>
      <div className="flex items-center rounded-full border border-line bg-surface p-1 transition-colors duration-300 focus-within:border-primary">
        <input
          id="newsletter-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="Tu correo electrónico"
          aria-describedby="newsletter-status"
          aria-invalid={state.status === "error" || undefined}
          className="h-10 w-full min-w-0 flex-1 bg-transparent px-4 text-sm text-foreground outline-none placeholder:text-subtle"
        />
        {/* Honeypot antibots: invisible para personas y lectores de pantalla */}
        <input
          type="text"
          name="empresa_web"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="hidden"
        />
        <button
          type="submit"
          disabled={isPending}
          className="inline-flex h-10 shrink-0 items-center justify-center gap-1.5 rounded-full px-4 text-sm font-medium bg-linear-to-r from-primary-strong to-primary text-white transition-all duration-300 hover:brightness-110 disabled:opacity-60"
        >
          Suscribirme
          <IconSend className="size-4" />
        </button>
      </div>
      <p
        id="newsletter-status"
        role="status"
        aria-live="polite"
        className={cn(
          "mt-2 min-h-5 text-xs",
          state.status === "error" ? "text-red-400" : "text-accent",
        )}
      >
        {isPending ? "Enviando…" : state.message}
      </p>
    </form>
  );
}
