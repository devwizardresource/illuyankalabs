import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/animations/reveal";
import { FAQ_ITEMS } from "@/constants/faq";
import { IconChevronDown } from "@/icons/ui";

/** Acordeón nativo (<details>): accesible y sin JavaScript. */
export function Faq() {
  return (
    <section id="preguntas" className="scroll-mt-24 pb-24 sm:pb-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Preguntas frecuentes"
            title={
              <>
                Lo que suelen preguntarnos{" "}
                <span className="text-gradient">antes de empezar</span>
              </>
            }
          />
        </Reveal>

        <ul className="mx-auto mt-14 flex max-w-3xl flex-col gap-3">
          {FAQ_ITEMS.map((item, index) => (
            <Reveal key={item.id} as="li" delay={(index % 4) * 70}>
              <details className="group rounded-2xl border border-line bg-glass backdrop-blur-md transition-colors duration-300 open:border-line-strong">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-2xl px-6 py-5 font-display text-base font-bold [&::-webkit-details-marker]:hidden">
                  <h3>{item.question}</h3>
                  <IconChevronDown className="size-5 shrink-0 text-primary-bright transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <p className="px-6 pb-6 text-sm leading-relaxed text-muted sm:text-base">
                  {item.answer}
                </p>
              </details>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
