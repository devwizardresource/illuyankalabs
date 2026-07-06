"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { NAV_ITEMS } from "@/constants/navigation";
import { useScrollLock } from "@/hooks/use-scroll-lock";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { IconClose, IconMenu } from "@/icons/ui";
import { cn } from "@/utils/cn";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useScrollLock(menuOpen);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    firstLinkRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* El blur vive en un hijo: backdrop-filter en el propio header
          convertiría al header en containing block del menú fixed. */}
      <div
        className={cn(
          "transition-all duration-300",
          scrolled || menuOpen
            ? "border-b border-line bg-background/75 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <div className="mx-auto flex h-18 w-full max-w-6xl items-center justify-between gap-4 px-6 sm:px-8">
        <Link
          href="#inicio"
          aria-label="ILLUYANKA LABS — ir al inicio"
          onClick={closeMenu}
          className="rounded-lg"
        >
          <Logo size="sm" priority />
        </Link>

        <nav aria-label="Navegación principal" className="hidden lg:block">
          <ul className="flex items-center gap-2">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-full px-3.5 py-2 text-sm font-medium text-muted transition-colors duration-200 hover:bg-surface/80 hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <div className="hidden sm:block">
            <Button href="#contacto">Cotiza tu proyecto</Button>
          </div>
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="menu-movil"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            className="inline-flex size-10 items-center justify-center rounded-full border border-line text-foreground lg:hidden"
          >
            {menuOpen ? (
              <IconClose className="size-5" />
            ) : (
              <IconMenu className="size-5" />
            )}
          </button>
        </div>
        </div>
      </div>

      {menuOpen ? (
        <div
          id="menu-movil"
          role="dialog"
          aria-modal="true"
          aria-label="Menú de navegación"
          className="fixed inset-x-0 top-18 bottom-0 z-40 overflow-y-auto bg-background/95 backdrop-blur-xl lg:hidden"
        >
          <nav
            aria-label="Navegación móvil"
            className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-6 py-8 sm:px-8"
          >
            {NAV_ITEMS.map((item, index) => (
              <a
                key={item.href}
                ref={index === 0 ? firstLinkRef : undefined}
                href={item.href}
                onClick={closeMenu}
                className="rounded-xl border border-transparent px-4 py-3.5 font-display text-xl font-medium text-foreground transition-colors duration-200 hover:border-line hover:bg-surface"
              >
                {item.label}
              </a>
            ))}
            <Button
              href="#contacto"
              size="lg"
              className="mt-6"
              onClick={closeMenu}
            >
              Cotiza tu proyecto
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
