import type { ElementType, ReactNode } from "react";
import { cn } from "@/utils/cn";

interface GlassCardProps {
  as?: ElementType;
  className?: string;
  /** Activa elevación y borde azul al hacer hover. */
  interactive?: boolean;
  children: ReactNode;
}

export function GlassCard({
  as: Tag = "div",
  className,
  interactive = false,
  children,
}: GlassCardProps) {
  return (
    <Tag
      className={cn(
        "rounded-2xl border border-line bg-glass backdrop-blur-md",
        interactive &&
          "transition-all duration-300 hover:-translate-y-1 hover:border-line-strong hover:shadow-glow",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
