import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { IconBox } from "@/components/ui/icon-box";
import { Reveal } from "@/components/animations/reveal";
import { SERVICES } from "@/constants/services";
import { IconArrowRight, IconCheck } from "@/icons/ui";

export function Services() {
  return (
    <section
      id="servicios"
      className="relative scroll-mt-24 border-y border-line bg-background-soft py-24 sm:py-32"
    >
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Servicios"
            title={
              <>
                Soluciones que se notan en tus{" "}
                <span className="text-gradient">resultados</span>
              </>
            }
            description="Desarrollo de software, inteligencia artificial y automatización para empresas e instituciones en Colombia. Cada solución empieza por el resultado que necesitas."
          />
        </Reveal>

        <ul className="mt-16 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {SERVICES.map((service, index) => (
            <Reveal key={service.id} as="li" delay={(index % 4) * 90} className="h-full">
              <article className="group flex h-full flex-col rounded-2xl border border-line bg-surface/80 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-violet/50 hover:shadow-glow-violet">
                <IconBox
                  icon={service.icon}
                  className="group-hover:scale-105 group-hover:border-line-strong group-hover:shadow-glow"
                />
                <h3 className="mt-5 text-xs font-medium tracking-[0.14em] text-primary-bright uppercase">
                  {service.title}
                </h3>
                <p className="mt-2 font-display text-lg leading-snug font-bold">
                  {service.outcome}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
                <ul className="mt-4 space-y-1.5">
                  {service.capabilities.map((capability) => (
                    <li
                      key={capability}
                      className="flex items-start gap-2 text-xs text-subtle"
                    >
                      <IconCheck className="mt-px size-3.5 shrink-0 text-accent" />
                      {capability}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contacto"
                  data-project-type={service.id}
                  className="mt-auto inline-flex items-start gap-1.5 pt-6 text-sm font-medium text-primary-bright transition-colors hover:text-accent"
                >
                  {service.cta}
                  <IconArrowRight className="mt-0.5 size-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </article>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
