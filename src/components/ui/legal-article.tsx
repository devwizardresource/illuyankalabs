import type { ReactNode } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { IconArrowRight } from "@/icons/ui";

interface LegalArticleProps {
  eyebrow: string;
  title: string;
  updated: string;
  children: ReactNode;
}

/** Plantilla tipográfica para páginas legales, con regreso al inicio. */
export function LegalArticle({
  eyebrow,
  title,
  updated,
  children,
}: LegalArticleProps) {
  return (
    <main id="contenido" className="pt-32 pb-24">
      <Container className="max-w-3xl">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-violet-bright"
        >
          <IconArrowRight className="size-4 rotate-180 transition-transform duration-300 group-hover:-translate-x-1" />
          Volver al inicio
        </Link>
        <div className="mt-6">
          <Badge>{eyebrow}</Badge>
        </div>
        <h1 className="mt-5 font-display text-3xl font-bold tracking-tight sm:text-4xl">
          {title}
        </h1>
        <p className="mt-3 text-sm text-subtle">
          Última actualización: {updated}
        </p>
        <article className="mt-10 space-y-10 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-bold [&_li]:leading-relaxed [&_li]:text-muted [&_p]:mt-3 [&_p]:leading-relaxed [&_p]:text-muted [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
          {children}
        </article>
        <div className="mt-14 flex flex-col items-start gap-4 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted">¿Tienes dudas? Escríbenos.</p>
          <div className="flex flex-wrap gap-3">
            <Button href="/" variant="secondary">
              Volver al inicio
            </Button>
            <Button href="/#contacto">
              Contáctanos
              <IconArrowRight className="size-4 transition-transform duration-300 group-hover/button:translate-x-1" />
            </Button>
            <WhatsAppButton label="WhatsApp" />
          </div>
        </div>
      </Container>
    </main>
  );
}
