"use client";

import { useCallback, useEffect, useState } from "react";

type Theme = "dark" | "light";

const STORAGE_KEY = "il-theme";

/**
 * Lee y alterna el tema aplicado por el script anti-FOUC del layout
 * (atributo `data-theme` en <html>). Oscuro es el tema por defecto.
 */
export function useTheme() {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const current = document.documentElement.dataset.theme;
    setTheme(current === "light" ? "light" : "dark");
  }, []);

  const toggle = useCallback(() => {
    setTheme((previous) => {
      const next: Theme = previous === "dark" ? "light" : "dark";
      document.documentElement.dataset.theme = next;
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        /* almacenamiento no disponible (modo privado): el tema aplica solo a la sesión */
      }
      return next;
    });
  }, []);

  return { theme, toggle };
}
