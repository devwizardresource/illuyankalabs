import type { ReactNode } from "react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";

interface LegalArticleProps {
  eyebrow: string;
  title: string;
  updated: string;
  children: ReactNode;
}

/** Plantilla tipográfica para páginas legales. */
export function LegalArticle({
  eyebrow,
  title,
  updated,
  children,
}: LegalArticleProps) {
  return (
    <main id="contenido" className="pt-36 pb-24">
      <Container className="max-w-3xl">
        <Badge>{eyebrow}</Badge>
        <h1 className="mt-5 font-display text-3xl font-bold tracking-tight sm:text-4xl">
          {title}
        </h1>
        <p className="mt-3 text-sm text-subtle">
          Última actualización: {updated}
        </p>
        <article className="mt-10 space-y-10 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-bold [&_li]:leading-relaxed [&_li]:text-muted [&_p]:mt-3 [&_p]:leading-relaxed [&_p]:text-muted [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
          {children}
        </article>
      </Container>
    </main>
  );
}
