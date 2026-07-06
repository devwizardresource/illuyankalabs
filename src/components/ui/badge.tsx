import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

interface BadgeProps {
  className?: string;
  children: ReactNode;
}

export function Badge({ className, children }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-4 py-1.5 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-primary-bright backdrop-blur-sm",
        className,
      )}
    >
      {children}
    </span>
  );
}
