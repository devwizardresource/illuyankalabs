import type { ElementType, ReactNode } from "react";
import { cn } from "@/utils/cn";

interface ContainerProps {
  as?: ElementType;
  className?: string;
  children: ReactNode;
}

export function Container({
  as: Tag = "div",
  className,
  children,
}: ContainerProps) {
  return (
    <Tag className={cn("mx-auto w-full max-w-6xl px-6 sm:px-8", className)}>
      {children}
    </Tag>
  );
}
