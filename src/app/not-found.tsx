import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { IconArrowRight } from "@/icons/ui";

export const metadata: Metadata = {
  title: "Página no encontrada",
};

export default function NotFound() {
  return (
    <main id="contenido" className="flex min-h-dvh items-center py-32">
      <Container className="flex flex-col items-center gap-6 text-center">
        <p className="text-gradient font-display text-8xl font-bold">404</p>
        <h1 className="font-display text-2xl font-bold sm:text-3xl">
          Esta página no existe (todavía)
        </h1>
        <p className="max-w-md text-muted">
          La ruta que buscas no existe o fue movida. Te llevamos de vuelta
          al inicio.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button href="/" size="lg">
            Volver al inicio
            <IconArrowRight className="size-4.5" />
          </Button>
          <WhatsAppButton size="lg" />
        </div>
      </Container>
    </main>
  );
}
