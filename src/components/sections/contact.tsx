import { Container } from "@/components/ui/container";
import { Particles } from "@/components/animations/particles";
import { Reveal } from "@/components/animations/reveal";
import { ContactForm } from "@/components/sections/contact-form";
import { IconMail, IconPhone } from "@/icons/ui";
import { siteConfig } from "@/config/site";

export function Contact() {
  return (
    <section id="contacto" aria-labelledby="contacto-titulo" className="scroll-mt-24 py-24 sm:py-32">
      <Container>
        <Reveal>
          {/* Panel con fondo dinámico fijo en oscuro (independiente del tema) */}
          <div className="relative overflow-hidden rounded-3xl border border-line-strong px-6 py-12 sm:px-12 sm:py-14">
            <div
              aria-hidden
              className="animate-gradient-pan absolute inset-0 bg-[linear-gradient(115deg,#041226,#0a3a7a,#062a56,#0b2d66,#041226)] bg-[length:240%_240%]"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-[radial-gradient(ellipse_55%_60%_at_50%_0%,rgba(34,217,238,0.18),transparent_70%)]"
            />
            <div aria-hidden className="bg-grid absolute inset-0 opacity-60" />
            <Particles count={14} />

            <div className="relative grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
              <div>
                <p className="font-display text-xs font-medium tracking-[0.2em] text-[#4da3ff] uppercase">
                  Contacto
                </p>
                <h2
                  id="contacto-titulo"
                  className="mt-3 font-display text-3xl font-bold tracking-tight text-balance text-white sm:text-4xl"
                >
                  Cuéntanos qué quieres{" "}
                  <span className="bg-linear-to-r from-[#4da3ff] to-[#22d9ee] bg-clip-text text-transparent">
                    resolver
                  </span>
                </h2>
                <p className="mt-4 max-w-md text-base leading-relaxed text-[#b7cdec] sm:text-lg">
                  Te respondemos en {siteConfig.contact.responseTime} con una
                  primera orientación. Sin costo y sin compromiso.
                </p>

                <ul className="mt-8 space-y-3 text-sm">
                  <li className="flex items-center gap-3">
                    <IconMail className="size-4.5 shrink-0 text-[#22d9ee]" />
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-white transition-colors hover:text-[#4da3ff]"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <IconPhone className="size-4.5 shrink-0 text-[#22d9ee]" />
                    <a
                      href={siteConfig.contact.phoneHref}
                      className="text-white transition-colors hover:text-[#4da3ff]"
                    >
                      {siteConfig.contact.phone}
                    </a>
                  </li>
                </ul>
              </div>

              <ContactForm />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
