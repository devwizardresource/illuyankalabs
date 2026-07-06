import type { CSSProperties } from "react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/animations/reveal";
import { TECHNOLOGIES } from "@/constants/technologies";
import type { Technology } from "@/types/content";
import { cn } from "@/utils/cn";

function TechTile({
  technology,
  decorative = false,
}: {
  technology: Technology;
  decorative?: boolean;
}) {
  const Icon = technology.icon;
  return (
    <li
      aria-hidden={decorative || undefined}
      style={{ "--brand": technology.brandColor } as CSSProperties}
      className={cn(
        "group/tile flex shrink-0 items-center gap-3 rounded-xl border border-line bg-surface/80 px-5 py-3.5 backdrop-blur-sm transition-all duration-300 hover:border-line-strong hover:shadow-glow",
        decorative && "motion-reduce:hidden",
      )}
    >
      <Icon className="size-7 shrink-0 text-subtle transition-colors duration-300 group-hover/tile:text-(--brand)" />
      <span className="text-sm font-medium whitespace-nowrap text-muted transition-colors duration-300 group-hover/tile:text-foreground">
        {technology.name}
      </span>
    </li>
  );
}

export function Technologies() {
  return (
    <section id="tecnologias" className="scroll-mt-24 py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Tecnologías"
            title={
              <>
                Trabajamos con <span className="text-gradient">lo mejor</span>
              </>
            }
            description="Un stack moderno, estable y ampliamente adoptado por la industria: la base de cada solución que entregamos."
          />
        </Reveal>
      </Container>

      <Reveal delay={120} className="relative mt-14 overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-linear-to-r from-background to-transparent sm:w-32"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-linear-to-l from-background to-transparent sm:w-32"
        />
        <ul
          aria-label="Tecnologías que utilizamos"
          className="animate-marquee flex w-max gap-4 px-4 hover:[animation-play-state:paused] motion-reduce:w-full motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:animate-none"
        >
          {TECHNOLOGIES.map((technology) => (
            <TechTile key={technology.id} technology={technology} />
          ))}
          {/* Copia decorativa para el bucle infinito del marquee */}
          {TECHNOLOGIES.map((technology) => (
            <TechTile
              key={`${technology.id}-dup`}
              technology={technology}
              decorative
            />
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
