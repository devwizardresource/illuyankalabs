import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { HeroLogo } from "@/components/animations/hero-logo";
import { Particles } from "@/components/animations/particles";
import { Reveal } from "@/components/animations/reveal";
import { Tilt } from "@/components/animations/tilt";
import {
  IconArrowRight,
  IconCheck,
  IconChevronDown,
  IconSparkles,
} from "@/icons/ui";

const TRUST_MARKERS = [
  "Código 100 % original",
  "Probado en laboratorio",
  "Seguro desde el diseño",
  "Listo para crecer",
] as const;

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-dvh items-center overflow-hidden pt-28 pb-16 sm:pt-32"
    >
      {/* Fondo: doble glow radial + rejilla técnica + partículas */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_55%_50%_at_72%_32%,var(--glow),transparent_68%),radial-gradient(ellipse_45%_40%_at_88%_82%,var(--glow-violet),transparent_70%),radial-gradient(ellipse_40%_35%_at_12%_78%,rgba(34,217,238,0.08),transparent_70%),radial-gradient(ellipse_35%_30%_at_18%_12%,rgba(124,58,237,0.14),transparent_70%)]"
      />
      <div aria-hidden className="bg-grid absolute inset-0" />
      <Particles count={24} />

      <Container className="relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        <div className="flex max-w-2xl flex-col items-start gap-6">
          <Reveal>
            <Badge>
              <IconSparkles className="size-3.5" />
              Software · IA · Automatización · Bogotá, Colombia
            </Badge>
          </Reveal>

          <Reveal delay={90}>
            <h1 className="font-display text-[2.1rem] leading-[1.12] font-bold tracking-tight text-balance uppercase sm:text-5xl xl:text-[3.4rem]">
              <span className="text-chrome">
                Construimos el futuro con tecnología
              </span>{" "}
              <span className="text-gradient">inteligente</span>
            </h1>
          </Reveal>

          <Reveal delay={180}>
            <p className="max-w-xl text-lg leading-relaxed text-muted">
              Creamos software a la medida, inteligencia artificial y
              automatización para empresas, instituciones y startups de
              Colombia y del mundo, para que tu organización trabaje más
              rápido, gaste menos y crezca con seguridad.
            </p>
          </Reveal>

          <Reveal delay={270} className="flex flex-wrap items-center gap-4">
            <Button href="#servicios" size="lg">
              Ver soluciones
              <IconArrowRight className="size-4.5 transition-transform duration-300 group-hover/button:translate-x-1" />
            </Button>
            <Button href="#contacto" size="lg" variant="secondary">
              Habla con nuestro equipo
            </Button>
            <WhatsAppButton size="lg" label="WhatsApp" />
          </Reveal>

          <Reveal delay={360} as="ul" className="mt-2 flex flex-wrap gap-x-6 gap-y-2">
            {TRUST_MARKERS.map((marker) => (
              <li
                key={marker}
                className="flex items-center gap-2 text-sm text-subtle"
              >
                <IconCheck className="size-4 text-accent" />
                {marker}
              </li>
            ))}
          </Reveal>
        </div>

        {/* Escena: logo animado sin fondo entre anillos orbitales */}
        <Reveal delay={200} className="relative mx-auto w-full max-w-130">
          <Tilt className="relative">
            <div className="relative aspect-square">
              {/* Glow que respira detrás del logo */}
              <div
                aria-hidden
                className="animate-breathe absolute inset-[10%] rounded-full bg-[radial-gradient(circle,var(--glow),var(--glow-violet)_38%,transparent_64%)] blur-2xl"
              />
              {/* Anillos orbitales */}
              <div
                aria-hidden
                className="animate-orbit absolute inset-[3%] rounded-full border border-line"
              >
                <span className="absolute top-0 left-1/2 size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_12px_var(--accent)]" />
              </div>
              <div
                aria-hidden
                className="animate-orbit-reverse absolute inset-[13%] rounded-full border border-line/70"
              >
                <span className="absolute bottom-[14%] left-[8%] size-2 rounded-full bg-violet shadow-[0_0_12px_var(--violet)]" />
              </div>

              <div className="animate-float absolute inset-0">
                <HeroLogo />
              </div>

            </div>
          </Tilt>
        </Reveal>
      </Container>

      <a
        href="#nosotros"
        aria-label="Bajar a la sección Sobre nosotros"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-subtle transition-colors hover:text-foreground lg:block"
      >
        <IconChevronDown className="animate-pulse-soft size-6" />
      </a>
    </section>
  );
}
