"use client";

import type { ElementType, ReactNode } from "react";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/utils/cn";

interface RevealProps {
  as?: ElementType;
  className?: string;
  /** Retardo en milisegundos para escalonar grupos de elementos. */
  delay?: number;
  children: ReactNode;
}

/**
 * Revela su contenido al entrar en el viewport (IntersectionObserver
 * + transición CSS de opacity/transform: compuesta en GPU, 60 FPS).
 * Sin JavaScript el contenido permanece visible; con
 * `prefers-reduced-motion` no se anima.
 */
export function Reveal({
  as: Tag = "div",
  className,
  delay = 0,
  children,
}: RevealProps) {
  const [ref, inView] = useInView<HTMLElement>({
    threshold: 0.01,
    rootMargin: "0px 0px -8% 0px",
  });

  return (
    <Tag
      ref={ref}
      data-reveal={inView ? "visible" : ""}
      className={cn(className)}
      style={delay ? { "--reveal-delay": `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
