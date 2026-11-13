import { Container } from "@/components/ui/container";
import { GlassCard } from "@/components/ui/glass-card";
import { IconBox } from "@/components/ui/icon-box";
import { LogoGlyph } from "@/components/ui/logo";
import { Reveal } from "@/components/animations/reveal";
import { BRAND_DNA, BRAND_ORIGIN } from "@/constants/about";

export function BrandDna() {
  return (
    <section
      id="adn"
      aria-labelledby="adn-titulo"
      className="relative scroll-mt-24 pb-24 sm:pb-32"
    >
      <Container>
        <Reveal>
          <GlassCard className="relative overflow-hidden px-6 py-12 sm:px-10 lg:px-14">
            {/* Isotipo gigante como marca de agua */}
            <LogoGlyph className="pointer-events-none absolute -top-10 -right-12 size-72 text-violet opacity-[0.07] sm:size-96" />
            <div
              aria-hidden
              className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_0%_0%,var(--glow-violet),transparent_70%)] opacity-60"
            />

            <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
              <div>
                <p className="inline-flex items-center gap-2 font-display text-xs font-medium tracking-[0.2em] text-violet-bright uppercase">
                  <LogoGlyph className="size-3.5" />
                  ADN de nuestra marca
                </p>
                <h2
                  id="adn-titulo"
                  className="mt-3 font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl"
                >
                  Fuerza de dragón,{" "}
                  <span className="text-gradient">precisión de laboratorio</span>
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
                  {BRAND_ORIGIN}
                </p>
              </div>

              <ul className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
                {BRAND_DNA.map((item, index) => (
                  <Reveal key={item.id} as="li" delay={index * 90}>
                    <div className="flex items-center gap-3">
                      <IconBox icon={item.icon} className="size-10 [&>svg]:size-5" />
                      <span
                        aria-hidden
                        className="font-mono text-xs tracking-widest text-subtle"
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="mt-4 font-display text-base font-bold">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">
                      {item.description}
                    </p>
                  </Reveal>
                ))}
              </ul>
            </div>
          </GlassCard>
        </Reveal>
      </Container>
    </section>
  );
}
