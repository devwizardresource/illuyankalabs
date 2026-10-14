import { Container } from "@/components/ui/container";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/animations/reveal";
import { PROCESS_STEPS } from "@/constants/process";
import { siteConfig } from "@/config/site";

export function Process() {
  return (
    <section id="proceso" className="scroll-mt-24 py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Nuestro proceso"
            title={
              <>
                De tu reto a una solución{" "}
                <span className="text-gradient">en cuatro pasos</span>
              </>
            }
            description="Sabes en qué punto está tu proyecto en todo momento. Sin sorpresas en tiempos ni en inversión."
          />
        </Reveal>

        <ol className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((step, index) => (
            <Reveal key={step.id} as="li" delay={index * 90} className="h-full">
              <GlassCard className="h-full p-6">
                <span
                  aria-hidden
                  className="text-gradient font-display text-4xl font-bold"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-lg leading-snug font-bold">
                  <span className="sr-only">Paso {index + 1}: </span>
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </GlassCard>
            </Reveal>
          ))}
        </ol>

        <Reveal>
          <p className="mt-10 text-center text-sm text-subtle">
            El primer paso es una conversación: respondemos tu mensaje en{" "}
            {siteConfig.contact.responseTime}.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
