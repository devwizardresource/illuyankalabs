import type { IconComponent } from "@/types/content";
import { cn } from "@/utils/cn";

interface IconBoxProps {
  icon: IconComponent;
  className?: string;
}

/** Contenedor de icono con energía de marca (degradado azul + borde). */
export function IconBox({ icon: Icon, className }: IconBoxProps) {
  return (
    <div
      className={cn(
        "flex size-12 shrink-0 items-center justify-center rounded-xl border border-line bg-linear-to-br from-primary/20 to-accent/10 text-primary-bright transition-all duration-300",
        className,
      )}
    >
      <Icon className="size-6" />
    </div>
  );
}
