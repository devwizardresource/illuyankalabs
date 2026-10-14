import Image from "next/image";
import { cn } from "@/utils/cn";
import logoMark from "@/assets/images/logo-mark.png";

interface LogoProps {
  size?: "sm" | "lg";
  className?: string;
  /** Carga inmediata (header: visible en todas las páginas). */
  priority?: boolean;
  /** Texto alternativo del isotipo; vacío cuando un enlace ya nombra el logo. */
  alt?: string;
}

/**
 * Isotipo del dragón + wordmark en HTML (texto real: accesible,
 * nítido en cualquier densidad y estilizable por tema).
 */
export function Logo({
  size = "sm",
  className,
  priority = false,
  alt = "",
}: LogoProps) {
  const markSize = size === "sm" ? 40 : 56;
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <Image
        src={logoMark}
        alt={alt}
        width={markSize}
        height={markSize}
        priority={priority}
        className="shrink-0 drop-shadow-[0_0_12px_rgba(19,120,249,0.45)]"
      />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display font-bold tracking-[0.08em] text-chrome",
            size === "sm" ? "text-[1.05rem]" : "text-xl",
          )}
        >
          ILLUYANKA
        </span>
        <span
          className={cn(
            "mt-1 font-display font-medium tracking-[0.42em] text-primary-bright",
            size === "sm" ? "text-[0.6rem]" : "text-[0.7rem]",
          )}
        >
          LABS
        </span>
      </span>
    </span>
  );
}
