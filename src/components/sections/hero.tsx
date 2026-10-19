import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { GlassCard } from "@/components/ui/glass-card";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { Emergence } from "@/components/animations/emergence";
import { Particles } from "@/components/animations/particles";
import { Reveal } from "@/components/animations/reveal";
import { Tilt } from "@/components/animations/tilt";
import {
  IconArrowRight,
  IconCheck,
  IconChevronDown,
  IconSparkles,
} from "@/icons/ui";
import { IconShield } from "@/icons/services";
import logoMark from "@/assets/images/logo-mark.png";

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

        {/* Escena: el dragón sobre una plataforma holográfica */}
        <Reveal delay={200} className="relative mx-auto w-full max-w-130">
          <Tilt className="relative">
            <div className="relative aspect-square">
              {/* Glow que respira detrás del dragón */}
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

              {/* Plataforma: disco de energía + anillos elípticos */}
              <div aria-hidden className="absolute inset-x-[14%] bottom-[3%]">
                <div className="h-14 rounded-[100%] bg-[radial-gradient(ellipse_at_center,rgba(19,120,249,0.55),rgba(124,58,237,0.28)_45%,rgba(34,217,238,0.1)_62%,transparent_74%)] blur-md" />
                <div className="absolute top-1/2 left-1/2 h-12 w-[96%] -translate-x-1/2 -translate-y-1/2 rounded-[100%] border border-violet/40" />
                <div className="absolute top-1/2 left-1/2 h-16 w-[116%] -translate-x-1/2 -translate-y-1/2 rounded-[100%] border border-line" />
                <div className="absolute top-[calc(50%+4px)] left-1/2 h-1.5 w-[62%] -translate-x-1/2 rounded-[100%] bg-accent/50 blur-[3px]" />
              </div>

              <div className="animate-float absolute inset-x-[13%] top-[4%] h-[88%]">
                <Emergence className="size-full">
                  <Image
                    src={logoMark}
                    alt="Dragón de ILLUYANKA LABS envolviendo la letra I"
                    priority
                    fetchPriority="high"
                    sizes="(min-width: 1024px) 480px, (min-width: 640px) 60vw, 82vw"
                    className="size-full object-contain drop-shadow-[0_0_45px_rgba(19,120,249,0.45)]"
                  />
                </Emergence>
              </div>

              <GlassCard className="absolute top-[13%] -right-2 hidden items-center gap-3 px-4 py-3 sm:flex lg:-right-4">
                <IconShield className="size-5 text-violet-bright" />
                <div className="text-xs leading-tight">
                  <p className="font-semibold text-foreground">
                    Probado en laboratorio
                  </p>
                  <p className="text-subtle">Antes de cada entrega</p>
                </div>
              </GlassCard>
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
