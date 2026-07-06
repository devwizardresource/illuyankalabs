"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/utils/cn";

interface TiltProps {
  className?: string;
  /** Inclinación máxima en grados hacia cada eje. */
  maxDegrees?: number;
  children: ReactNode;
}

/**
 * Parallax 3D que sigue al puntero (rotateX/rotateY con perspective).
 * Solo transform → compuesto en GPU a 60 FPS. Se desactiva con
 * `prefers-reduced-motion` y en punteros táctiles.
 */
export function Tilt({ className, maxDegrees = 7, children }: TiltProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    let frame = 0;
    const onPointerMove = (event: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = element.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        element.style.setProperty(
          "--tilt-x",
          `${(-y * maxDegrees).toFixed(2)}deg`,
        );
        element.style.setProperty(
          "--tilt-y",
          `${(x * maxDegrees).toFixed(2)}deg`,
        );
      });
    };
    const onPointerLeave = () => {
      cancelAnimationFrame(frame);
      element.style.setProperty("--tilt-x", "0deg");
      element.style.setProperty("--tilt-y", "0deg");
    };

    element.addEventListener("pointermove", onPointerMove);
    element.addEventListener("pointerleave", onPointerLeave);
    return () => {
      cancelAnimationFrame(frame);
      element.removeEventListener("pointermove", onPointerMove);
      element.removeEventListener("pointerleave", onPointerLeave);
    };
  }, [maxDegrees]);

  return (
    <div
      ref={ref}
      className={cn(
        "will-change-transform [transform:perspective(1000px)_rotateX(var(--tilt-x,0deg))_rotateY(var(--tilt-y,0deg))] transition-transform duration-300 ease-out [transform-style:preserve-3d]",
        className,
      )}
    >
      {children}
    </div>
  );
}
