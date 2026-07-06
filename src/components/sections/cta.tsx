import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Particles } from "@/components/animations/particles";
import { Reveal } from "@/components/animations/reveal";
import { IconArrowRight } from "@/icons/ui";
import { siteConfig } from "@/config/site";

const QUOTE_MAILTO = `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(
  "Cotización de proyecto — ILLUYANKA LABS",
)}`;

export function Cta() {
  return (
    <section aria-label="Llamado a la acción" className="py-24 sm:py-32">
      <Container>
        <Reveal>
          {/* Panel con fondo dinámico fijo en oscuro (independiente del tema) */}
          <div className="relative overflow-hidden rounded-3xl border border-line-strong px-6 py-14 text-center sm:px-14 sm:py-16">
            <div
              aria-hidden
              className="animate-gradient-pan absolute inset-0 bg-[linear-gradient(115deg,#041226,#0a3a7a,#062a56,#0b2d66,#041226)] bg-[length:240%_240%]"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-[radial-gradient(ellipse_55%_60%_at_50%_0%,rgba(34,217,238,0.18),transparent_70%)]"
            />
            <div
              aria-hidden
              className="bg-grid absolute inset-0 opacity-60"
            />
            <Particles count={14} />

            <div className="relative flex flex-col items-center gap-8 lg:flex-row lg:justify-between lg:gap-10 lg:text-left">
              <h2 className="max-w-md font-display text-3xl font-bold tracking-tight text-balance text-white sm:text-4xl lg:text-[2.5rem] lg:leading-[1.15]">
                ¿Listo para llevar tu negocio al{" "}
                <span className="bg-linear-to-r from-[#4da3ff] to-[#22d9ee] bg-clip-text text-transparent">
                  siguiente nivel?
                </span>
              </h2>
              <p className="max-w-sm text-base leading-relaxed text-[#b7cdec] sm:text-lg">
                Hablemos de tu proyecto y construyamos juntos el futuro de tu
                empresa.
              </p>
              <div className="flex shrink-0 flex-col items-center gap-3 lg:items-end">
                <Button href={QUOTE_MAILTO} size="lg">
                  Cotiza tu proyecto ahora
                  <IconArrowRight className="size-4.5 transition-transform duration-300 group-hover/button:translate-x-1" />
                </Button>
                <p className="text-xs tracking-wide text-[#9ab8e0]">
                  Respuesta en menos de 24 horas · Sin compromiso
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
