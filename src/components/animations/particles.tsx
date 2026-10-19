import type { CSSProperties } from "react";
import { cn } from "@/utils/cn";

interface ParticlesProps {
  count?: number;
  className?: string;
}

/** PRNG determinista: el servidor y el cliente generan el mismo campo
 *  de partículas, evitando errores de hidratación sin usar Math.random. */
function mulberry32(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * Campo de partículas puramente CSS (transform/opacity, GPU).
 * Cero JavaScript en el cliente: se renderiza en el servidor.
 */
export function Particles({ count = 22, className }: ParticlesProps) {
  const random = mulberry32(0x1770ca);

  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className,
      )}
    >
      {Array.from({ length: count }, (_, index) => {
        const size = 1.5 + random() * 3;
        const tone = random();
        const color =
          tone > 0.72 ? "var(--accent)" : tone > 0.46 ? "var(--violet)" : "var(--primary)";
        const glow =
          tone > 0.72 ? "var(--accent)" : tone > 0.46 ? "var(--glow-violet)" : "var(--glow)";
        return (
          <span
            key={index}
            className="animate-drift absolute rounded-full"
            style={{
              left: `${(random() * 100).toFixed(2)}%`,
              top: `${(8 + random() * 84).toFixed(2)}%`,
              width: `${size.toFixed(1)}px`,
              height: `${size.toFixed(1)}px`,
              backgroundColor: color,
              opacity: 0.25 + random() * 0.45,
              boxShadow: `0 0 ${(6 + random() * 8).toFixed(0)}px ${glow}`,
              animationDuration: `${(9 + random() * 12).toFixed(1)}s`,
              animationDelay: `-${(random() * 12).toFixed(1)}s`,
              "--drift-x": `${((random() - 0.5) * 90).toFixed(0)}px`,
              "--drift-y": `${(-30 - random() * 70).toFixed(0)}px`,
            } as CSSProperties}
          />
        );
      })}
    </div>
  );
}
