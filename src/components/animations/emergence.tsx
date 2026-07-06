"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { cn } from "@/utils/cn";

interface EmergenceProps {
  /** Intervalo de reaparición automática (ms). */
  intervalMs?: number;
  className?: string;
  children: ReactNode;
}

const CYCLE_DURATION_MS = 2000;

/**
 * Hace emerger su contenido desde la base con una espiral de luz y un
 * haz de energía. Se reproduce al montar, al pasar el cursor por encima
 * y en un intervalo automático. Solo transform/opacity/filter (GPU);
 * inerte con `prefers-reduced-motion` y sin JavaScript.
 */
export function Emergence({
  intervalMs = 70_000,
  className,
  children,
}: EmergenceProps) {
  const [cycle, setCycle] = useState(0);
  const [playing, setPlaying] = useState(false);
  const playingRef = useRef(false);
  const reducedRef = useRef(false);

  const play = useCallback(() => {
    if (reducedRef.current || playingRef.current) return;
    playingRef.current = true;
    setCycle((current) => current + 1);
    setPlaying(true);
  }, []);

  useEffect(() => {
    reducedRef.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reducedRef.current) return;
    play();
    const id = window.setInterval(play, intervalMs);
    return () => window.clearInterval(id);
  }, [intervalMs, play]);

  useEffect(() => {
    if (!playing) return;
    const id = window.setTimeout(() => {
      playingRef.current = false;
      setPlaying(false);
    }, CYCLE_DURATION_MS);
    return () => window.clearTimeout(id);
  }, [playing, cycle]);

  return (
    <div className={cn("relative", className)} onPointerEnter={play}>
      {playing ? (
        <div
          key={cycle}
          aria-hidden
          className="pointer-events-none absolute -inset-[6%]"
        >
          <div className="animate-beam absolute top-[6%] bottom-[8%] left-1/2 w-[30%] origin-bottom -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_50%_100%_at_50%_100%,rgba(34,217,238,0.55),rgba(19,120,249,0.28)_55%,transparent_78%)] blur-md" />
          <div className="animate-spiral absolute inset-[2%] rounded-full bg-[conic-gradient(from_0deg,transparent_0deg,rgba(34,217,238,0.7)_40deg,transparent_82deg,transparent_160deg,rgba(19,120,249,0.6)_205deg,transparent_250deg)] [mask-image:radial-gradient(circle,transparent_52%,black_57%,black_72%,transparent_77%)]" />
          <div className="animate-spiral absolute inset-[12%] rounded-full [animation-direction:reverse] [animation-duration:1.45s] bg-[conic-gradient(from_140deg,transparent_0deg,rgba(77,163,255,0.65)_50deg,transparent_100deg,transparent_205deg,rgba(34,217,238,0.55)_255deg,transparent_305deg)] [mask-image:radial-gradient(circle,transparent_58%,black_63%,black_79%,transparent_84%)]" />
        </div>
      ) : null}
      <div
        key={playing ? `rise-${cycle}` : "static"}
        className={cn("size-full", playing && "animate-emerge")}
      >
        {children}
      </div>
    </div>
  );
}
