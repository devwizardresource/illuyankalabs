"use client";

import { useTheme } from "@/hooks/use-theme";
import { IconMoon, IconSun } from "@/icons/ui";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isLight = theme === "light";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isLight ? "Activar modo oscuro" : "Activar modo claro"}
      className="inline-flex size-10 items-center justify-center rounded-full border border-line text-muted transition-colors duration-300 hover:border-line-strong hover:text-foreground"
    >
      {isLight ? <IconMoon className="size-5" /> : <IconSun className="size-5" />}
    </button>
  );
}
