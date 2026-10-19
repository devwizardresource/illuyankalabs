"use client";

import { useEffect, useRef, useState } from "react";
import {
  IconPause,
  IconPlay,
  IconVolume,
  IconVolumeOff,
} from "@/icons/ui";

const controlStyles =
  "inline-flex size-10 items-center justify-center rounded-full border border-white/20 bg-[#0a0620]/60 text-white backdrop-blur-md transition-all duration-300 hover:border-[#b48cff] hover:shadow-[0_0_24px_-4px_rgba(157,92,255,0.7)]";

/**
 * Video de marca: arranca en silencio solo mientras está en pantalla
 * (ahorra datos y batería), con controles propios de sonido y pausa.
 * Con `prefers-reduced-motion` no se reproduce solo.
 */
export function BrandVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(false);
  const userPausedRef = useRef(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !userPausedRef.current) {
          video.play().catch(() => {});
        } else if (!entry.isIntersecting) {
          video.pause();
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      userPausedRef.current = false;
      video.play().catch(() => {});
    } else {
      userPausedRef.current = true;
      video.pause();
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
    if (!video.muted && video.paused) {
      userPausedRef.current = false;
      video.play().catch(() => {});
    }
  };

  return (
    <div className="relative size-full">
      <video
        ref={videoRef}
        className="size-full object-cover"
        poster="/videos/illuyanka-intro-poster.jpg"
        muted
        loop
        playsInline
        preload="metadata"
        aria-label="Video de presentación de ILLUYANKA LABS"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      >
        <source src="/videos/illuyanka-intro.mp4" type="video/mp4" />
      </video>
      <div className="absolute right-4 bottom-4 flex gap-2">
        <button
          type="button"
          onClick={togglePlay}
          aria-label={playing ? "Pausar video" : "Reproducir video"}
          className={controlStyles}
        >
          {playing ? (
            <IconPause className="size-4.5" />
          ) : (
            <IconPlay className="size-4.5" />
          )}
        </button>
        <button
          type="button"
          onClick={toggleMute}
          aria-label={muted ? "Activar sonido" : "Silenciar video"}
          aria-pressed={!muted}
          className={controlStyles}
        >
          {muted ? (
            <IconVolumeOff className="size-4.5" />
          ) : (
            <IconVolume className="size-4.5" />
          )}
        </button>
      </div>
    </div>
  );
}
