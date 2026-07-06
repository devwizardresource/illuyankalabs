import { Container } from "@/components/ui/container";
import { GlassCard } from "@/components/ui/glass-card";
import { Counter } from "@/components/animations/counter";
import { Reveal } from "@/components/animations/reveal";
import { STATS } from "@/constants/stats";

export function Stats() {
  return (
    <section aria-label="Indicadores de la empresa" className="py-16 sm:py-20">
      <Container>
        <Reveal>
          <GlassCard className="grid grid-cols-1 gap-x-6 gap-y-8 px-8 py-10 sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.id} className="flex items-center gap-4">
                <span className="flex size-14 shrink-0 items-center justify-center rounded-full border border-line-strong bg-surface text-primary-bright shadow-[inset_0_0_18px_rgba(19,120,249,0.15)]">
                  <stat.icon className="size-6" />
                </span>
                <div>
                  <p className="text-gradient font-display text-3xl font-bold sm:text-4xl">
                    <Counter
                      value={stat.value}
                      decimals={stat.decimals}
                      suffix={stat.suffix}
                    />
                  </p>
                  <p className="mt-1 text-sm text-muted">{stat.label}</p>
                </div>
              </div>
            ))}
          </GlassCard>
        </Reveal>
      </Container>
    </section>
  );
}
