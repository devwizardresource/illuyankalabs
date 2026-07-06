"use client";

import { useEffect, useState } from "react";
import { useInView } from "@/hooks/use-in-view";

interface CounterProps {
  value: number;
  decimals?: number;
  suffix?: string;
  durationMs?: number;
}

/**
 * Cuenta de 0 al valor final al entrar en viewport (requestAnimationFrame,
 * easing cúbico). Con `prefers-reduced-motion` muestra el valor final
 * de inmediato. El SSR renderiza el valor final para SEO y no-JS.
 */
export function Counter({
  value,
  decimals = 0,
  suffix = "",
  durationMs = 1600,
}: CounterProps) {
  const [ref, inView] = useInView<HTMLSpanElement>({ threshold: 0.6 });
  const [display, setDisplay] = useState(() => value.toFixed(decimals));

  useEffect(() => {
    if (!inView) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reducedMotion) {
      setDisplay(value.toFixed(decimals));
      return;
    }

    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay((value * eased).toFixed(decimals));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value, decimals, durationMs]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
      {suffix}
    </span>
  );
}
