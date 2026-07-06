"use client";

import { useEffect, useRef, useState, type RefObject } from "react";

/**
 * Observa un elemento y devuelve `true` la primera vez que entra
 * en el viewport. Se desconecta tras el primer disparo (one-shot).
 */
export function useInView<T extends HTMLElement>(
  options: IntersectionObserverInit = { threshold: 0.2 },
): [RefObject<T | null>, boolean] {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || inView) return;

    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      // Revela al intersectar o si el elemento ya quedó por encima del
      // viewport (deep links a anclas, saltos con teclado): nunca debe
      // quedar contenido oculto tras un desplazamiento brusco.
      if (entry.isIntersecting || entry.boundingClientRect.bottom < 0) {
        setInView(true);
        observer.disconnect();
      }
    }, options);

    observer.observe(element);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return [ref, inView];
}
