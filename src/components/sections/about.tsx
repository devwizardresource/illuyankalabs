import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { GlassCard } from "@/components/ui/glass-card";
import { IconBox } from "@/components/ui/icon-box";
import { SectionHeading } from "@/components/ui/section-heading";
import { StoryArt } from "@/components/ui/story-art";
import { Reveal } from "@/components/animations/reveal";
import {
  ABOUT_INTRO,
  BENEFITS,
  COMMITMENTS,
  NAME_ORIGIN,
  PURPOSE,
  SEGMENTS,
} from "@/constants/about";
import { IconArrowRight } from "@/icons/ui";

const subheading =
  "font-display text-xl font-bold tracking-tight sm:text-2xl";

export function About() {
  return (
    <section id="nosotros" className="relative scroll-mt-24 py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Nosotros"
            title={
              <>
                El laboratorio detrás del{" "}
                <span className="text-gradient">dragón</span>
              </>
            }
            description={ABOUT_INTRO}
          />
        </Reveal>

        {/* Propósito + cómo trabajamos */}
        <div className="mt-16 grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="flex flex-col gap-6">
            <Reveal className="space-y-4 text-base leading-relaxed text-muted">
              <h3 className={`${subheading} text-foreground`}>
                Tecnología hecha en Colombia, pensada para durar
              </h3>
              {PURPOSE.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </Reveal>

            {/* Panel del origen del nombre */}
            <Reveal delay={100}>
              <figure className="group relative overflow-hidden rounded-2xl border border-line shadow-glow">
                <div className="relative aspect-video">
                  <StoryArt />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-linear-to-t from-[#020a1c]/90 via-[#020a1c]/40 to-transparent"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 p-6">
                    <p className="font-display text-xs font-medium tracking-[0.2em] text-[#4da3ff] uppercase">
                      Por qué Illuyanka
                    </p>
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-white sm:text-base">
                      {NAME_ORIGIN}
                    </p>
                  </figcaption>
                </div>
              </figure>
            </Reveal>
          </div>

          <div className="flex flex-col gap-6">
            <Reveal>
              <h3 className={subheading}>Cómo trabajamos</h3>
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-2">
              {COMMITMENTS.map((item, index) => (
                <Reveal key={item.id} delay={index * 90} className="h-full">
                  <GlassCard interactive className="group h-full p-6">
                    <IconBox
                      icon={item.icon}
                      className="group-hover:border-line-strong group-hover:shadow-glow"
                    />
                    <h4 className="mt-5 font-display text-base font-bold">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {item.description}
                    </p>
                  </GlassCard>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* Qué ganas */}
        <div className="mt-20">
          <Reveal>
            <h3 className={`${subheading} text-center`}>
              Qué ganas al trabajar con nosotros
            </h3>
          </Reveal>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {BENEFITS.map((item, index) => (
              <Reveal key={item.id} as="li" delay={index * 90} className="h-full">
                <GlassCard className="flex h-full gap-4 p-5">
                  <item.icon className="mt-0.5 size-6 shrink-0 text-accent" />
                  <div>
                    <h4 className="font-display text-base font-bold">
                      {item.title}
                    </h4>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">
                      {item.description}
                    </p>
                  </div>
                </GlassCard>
              </Reveal>
            ))}
          </ul>
        </div>

        {/* A quién ayudamos */}
        <div className="mt-20">
          <Reveal>
            <h3 className={`${subheading} text-center`}>A quién ayudamos</h3>
          </Reveal>
          <ul className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
            {SEGMENTS.map((item, index) => (
              <Reveal key={item.id} as="li" delay={index * 90}>
                <IconBox icon={item.icon} />
                <h4 className="mt-4 font-display text-base font-bold">
                  {item.title}
                </h4>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </Reveal>
            ))}
          </ul>
        </div>

        {/* Cierre */}
        <Reveal className="mt-20">
          <GlassCard className="flex flex-col items-center gap-6 px-6 py-10 text-center sm:px-10 lg:flex-row lg:justify-between lg:text-left">
            <div className="max-w-2xl">
              <p className="font-display text-xl font-bold sm:text-2xl">
                ¿Un proceso te quita tiempo o un sistema ya no da más?
              </p>
              <p className="mt-2 text-base leading-relaxed text-muted">
                Cuéntanos qué quieres resolver. Te ayudamos a encontrar el
                camino más corto hacia el resultado.
              </p>
            </div>
            <Button href="#contacto" size="lg" className="shrink-0">
              Cuéntanos tu reto
              <IconArrowRight className="size-4.5 transition-transform duration-300 group-hover/button:translate-x-1" />
            </Button>
          </GlassCard>
        </Reveal>
      </Container>
    </section>
  );
}
