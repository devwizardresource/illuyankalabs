import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/utils/cn";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

interface BaseProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
}

type AnchorProps = BaseProps &
  Omit<ComponentPropsWithoutRef<"a">, keyof BaseProps> & { href: string };

type NativeButtonProps = BaseProps &
  Omit<ComponentPropsWithoutRef<"button">, keyof BaseProps> & {
    href?: undefined;
  };

type ButtonProps = AnchorProps | NativeButtonProps;

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-linear-to-r from-primary-strong to-violet-strong text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.22),0_0_36px_-8px_var(--glow),0_0_48px_-14px_var(--glow-violet)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.22),0_0_60px_-8px_var(--glow),0_0_70px_-12px_var(--glow-violet)] hover:brightness-110",
  secondary:
    "border border-line-strong bg-glass text-foreground backdrop-blur-md hover:border-violet hover:text-violet-bright hover:shadow-glow-violet",
  ghost: "text-muted hover:text-foreground",
};

const sizeStyles: Record<Size, string> = {
  md: "h-11 px-6 text-sm",
  lg: "h-12 px-7 text-base",
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: ButtonProps) {
  const styles = cn(
    "group/button inline-flex select-none items-center justify-center gap-2 rounded-full font-display font-medium transition-all duration-300 active:scale-[0.98]",
    variantStyles[variant],
    sizeStyles[size],
    className,
  );

  if (rest.href !== undefined) {
    const { href, ...anchorRest } = rest as AnchorProps;
    const isInternalRoute = href.startsWith("/");
    if (isInternalRoute) {
      return (
        <Link href={href} className={styles} {...anchorRest}>
          {children}
        </Link>
      );
    }
    return (
      <a href={href} className={styles} {...anchorRest}>
        {children}
      </a>
    );
  }

  const { type = "button", ...buttonRest } = rest as NativeButtonProps;
  return (
    <button type={type} className={styles} {...buttonRest}>
      {children}
    </button>
  );
}
