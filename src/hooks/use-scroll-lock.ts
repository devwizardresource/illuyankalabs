"use client";

import { useEffect } from "react";

/** Bloquea el scroll del documento mientras `locked` sea verdadero. */
export function useScrollLock(locked: boolean) {
  useEffect(() => {
    if (!locked) return;
    const previous = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = previous;
    };
  }, [locked]);
}
