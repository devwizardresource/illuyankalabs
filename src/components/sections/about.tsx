import { Container } from "@/components/ui/container";
import { GlassCard } from "@/components/ui/glass-card";
import { IconBox } from "@/components/ui/icon-box";
import { SectionHeading } from "@/components/ui/section-heading";
import { StoryArt } from "@/components/ui/story-art";
import { Reveal } from "@/components/animations/reveal";
import { MISSION, STORY, VALUES, VISION } from "@/constants/about";
import { IconMission, IconVision } from "@/icons/services";
import { IconPlay } from "@/icons/ui";

export function About() {
  return (
    <section id="nosotros" className="relative scroll-mt-24 py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Sobre nosotros"
            title={
              <>
                El laboratorio detrás del{" "}
                <span className="text-gradient">dragón</span>
              </>
            }
            description={STORY[0]}
          />
        </Reveal>

        <div className="mt-16 grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal className="flex flex-col gap-6">
            <div className="space-y-4 text-base leading-relaxed text-muted">
              {STORY.slice(1).map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>

            <GlassCard className="flex gap-5 p-6">
              <IconBox icon={IconMission} />
              <div>
                <h3 className="font-display text-lg font-bold">Misión</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  {MISSION}
                </p>
              </div>
            </GlassCard>
            <GlassCard className="flex gap-5 p-6">
              <IconBox icon={IconVision} />
              <div>
                <h3 className="font-display text-lg font-bold">Visión</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  {VISION}
                </p>
              </div>
            </GlassCard>
          </Reveal>

          <div className="flex flex-col gap-6">
            {/* Panel de historia (estilo video de la referencia) */}
            <Reveal delay={100}>
              <div className="group relative overflow-hidden rounded-2xl border border-line shadow-glow">
                <div className="relative aspect-video">
                  <StoryArt />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-linear-to-t from-[#020a1c]/80 via-transparent to-transparent"
                  />
                  <div className="absolute inset-0 flex items-center justify-center gap-4 px-6">
                    <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-linear-to-r from-primary-strong to-primary text-white shadow-[0_0_30px_var(--glow)] transition-transform duration-300 group-hover:scale-110">
                      <IconPlay className="ml-0.5 size-5" />
                    </span>
                    <span className="max-w-45 font-display text-base leading-snug font-medium text-white">
                      Conoce más sobre nuestra historia
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>

            <div className="grid gap-4 sm:grid-cols-2">
              {VALUES.map((value, index) => (
                <Reveal key={value.id} delay={index * 90} className="h-full">
                  <GlassCard interactive className="group h-full p-6">
                    <IconBox
                      icon={value.icon}
                      className="group-hover:border-line-strong group-hover:shadow-glow"
                    />
                    <h3 className="mt-5 font-display text-base font-bold">
                      {value.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {value.description}
                    </p>
                  </GlassCard>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
