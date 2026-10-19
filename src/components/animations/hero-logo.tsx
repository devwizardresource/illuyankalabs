"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { Emergence } from "@/components/animations/emergence";
import { IconVolume, IconVolumeOff } from "@/icons/ui";
import { cn } from "@/utils/cn";

const VIDEO_SRC = "/videos/logo-entrada.webm";
const FINAL_FRAME_SRC = "/videos/logo-entrada-final.webp";
const REPLAY_MS = 60_000;
const SOUND_KEY = "il-logo-sound";
const ALT = "Logo animado de ILLUYANKA LABS: dragón envolviendo la letra I";

/** El encuadre 16:9 del video desborda el escenario cuadrado: al no tener
 *  fondo, el desborde es invisible y el logo ocupa el espacio del hero. */
const mediaClass =
  "pointer-events-none absolute top-1/2 left-1/2 aspect-video w-[165%] max-w-none -translate-x-1/2 -translate-y-1/2";

/**
 * Safari (y cualquier navegador en iOS, que usa WebKit) no compone el canal
 * alfa de WebM VP9: ahí se muestra el fotograma final con fondo transparente.
 */
function supportsAlphaVideo(): boolean {
  const ua = navigator.userAgent;
  const isIOS =
    /iP(hone|ad|od)/.test(ua) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  const isSafari = /^((?!chrome|chromium|android|crios|fxios|edg).)*safari/i.test(ua);
  const video = document.createElement("video");
  return !isIOS && !isSafari && video.canPlayType('video/webm; codecs="vp9"') !== "";
}

/**
 * Logo del hero: animación de entrada sin fondo (VP9 con alfa) que se
 * reproduce al cargar, cada minuto y al pasar el cursor (o tocarlo).
 * El sonido suena cuando el navegador lo permite, es decir, después de
 * la primera interacción del visitante con la página; se puede apagar.
 */
export function HeroLogo() {
  const [mode, setMode] = useState<"image" | "video">("image");
  const [soundOn, setSoundOn] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const soundRef = useRef(true);
  const visibleRef = useRef(true);

  useEffect(() => {
    try {
      if (localStorage.getItem(SOUND_KEY) === "off") {
        soundRef.current = false;
        setSoundOn(false);
      }
    } catch {}
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reduced && supportsAlphaVideo()) setMode("video");
  }, []);

  const play = useCallback(() => {
    const video = videoRef.current;
    if (!video || (!video.paused && !video.ended)) return;
    const activated = navigator.userActivation?.hasBeenActive ?? false;
    video.muted = !(soundRef.current && activated);
    video.currentTime = 0;
    video.play().catch(() => {
      // Sonido bloqueado por el navegador: se repite en silencio.
      video.muted = true;
      video.play().catch(() => {});
    });
  }, []);

  useEffect(() => {
    if (mode !== "video") return;
    const video = videoRef.current;
    if (!video) return;

    play();
    const observer = new IntersectionObserver(([entry]) => {
      visibleRef.current = entry.isIntersecting;
    });
    observer.observe(video.parentElement ?? video);
    const id = window.setInterval(() => {
      if (document.visibilityState === "visible" && visibleRef.current) play();
    }, REPLAY_MS);
    return () => {
      observer.disconnect();
      window.clearInterval(id);
    };
  }, [mode, play]);

  const toggleSound = () => {
    const next = !soundRef.current;
    soundRef.current = next;
    setSoundOn(next);
    try {
      localStorage.setItem(SOUND_KEY, next ? "on" : "off");
    } catch {}
    const video = videoRef.current;
    if (!video) return;
    if (!video.paused && !video.ended) {
      video.muted = !next;
    } else if (next) {
      play();
    }
  };

  if (mode === "image") {
    return (
      <Emergence className="size-full">
        <div className="relative size-full">
          <Image
            src={FINAL_FRAME_SRC}
            alt={ALT}
            width={1280}
            height={720}
            priority
            fetchPriority="high"
            sizes="(min-width: 1024px) 860px, 165vw"
            className={cn(mediaClass, "h-auto")}
          />
        </div>
      </Emergence>
    );
  }

  return (
    <div
      onPointerEnter={play}
      onClick={play}
      className="relative size-full cursor-pointer"
    >
      <video
        ref={videoRef}
        className={mediaClass}
        poster={FINAL_FRAME_SRC}
        muted
        playsInline
        preload="auto"
        aria-label={ALT}
      >
        <source src={VIDEO_SRC} type='video/webm; codecs="vp9,opus"' />
      </video>
      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          toggleSound();
        }}
        aria-label={soundOn ? "Silenciar el logo" : "Activar el sonido del logo"}
        aria-pressed={soundOn}
        className="absolute right-[6%] bottom-[2%] z-10 inline-flex size-9 items-center justify-center rounded-full border border-line bg-glass text-muted backdrop-blur-md transition-all duration-300 hover:border-violet hover:text-violet-bright hover:shadow-glow-violet"
      >
        {soundOn ? (
          <IconVolume className="size-4" />
        ) : (
          <IconVolumeOff className="size-4" />
        )}
      </button>
    </div>
  );
}
