import type { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement>;

const strokeProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
} satisfies Props;

/** Desarrollo de software */
export function IconCode(props: Props) {
  return (
    <svg {...strokeProps} {...props}>
      <path d="m8 8.5-4.5 3.5L8 15.5m8-7 4.5 3.5L16 15.5M13.7 5l-3.4 14" />
    </svg>
  );
}

/** Inteligencia artificial — red neuronal */
export function IconNeural(props: Props) {
  return (
    <svg {...strokeProps} {...props}>
      <circle cx="12" cy="5" r="1.9" />
      <circle cx="5" cy="12" r="1.9" />
      <circle cx="19" cy="12" r="1.9" />
      <circle cx="8.5" cy="19" r="1.9" />
      <circle cx="15.5" cy="19" r="1.9" />
      <path d="M10.4 6.1 6.4 10.5m7.2-4.4 4 4.4M6 13.8l1.8 3.6m10.2-3.6-1.8 3.6m-5.9 1.6h3.4" />
    </svg>
  );
}

/** Cloud computing */
export function IconCloud(props: Props) {
  return (
    <svg {...strokeProps} {...props}>
      <path d="M7 18.5a4.5 4.5 0 0 1-.6-8.96A6 6 0 0 1 18 11.05a3.8 3.8 0 0 1-.8 7.45H7Z" />
    </svg>
  );
}

/** Automatización — bot */
export function IconBot(props: Props) {
  return (
    <svg {...strokeProps} {...props}>
      <rect x="4.5" y="8" width="15" height="11" rx="3" />
      <path d="M12 8V4.8M12 4.8a1.4 1.4 0 1 0 0-2.8 1.4 1.4 0 0 0 0 2.8ZM2 12.5v3m20-3v3" />
      <circle cx="9" cy="13" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="15" cy="13" r="1.2" fill="currentColor" stroke="none" />
      <path d="M9.5 16.3h5" />
    </svg>
  );
}

/** Ciencia de datos */
export function IconData(props: Props) {
  return (
    <svg {...strokeProps} {...props}>
      <path d="M4 4v15.5h16" />
      <path d="m7 15 3.5-4 3 2.5L19 7" />
      <circle cx="7" cy="15" r="1.3" fill="currentColor" stroke="none" />
      <circle cx="10.5" cy="11" r="1.3" fill="currentColor" stroke="none" />
      <circle cx="13.5" cy="13.5" r="1.3" fill="currentColor" stroke="none" />
      <circle cx="19" cy="7" r="1.3" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** DevOps — flujo continuo */
export function IconInfinity(props: Props) {
  return (
    <svg {...strokeProps} {...props}>
      <path d="M12 12c-1.8 2.4-3.3 4-5.4 4a4 4 0 0 1 0-8c2.1 0 3.6 1.6 5.4 4Zm0 0c1.8-2.4 3.3-4 5.4-4a4 4 0 0 1 0 8c-2.1 0-3.6-1.6-5.4-4Z" />
    </svg>
  );
}

/** Consultoría tecnológica — brújula */
export function IconCompass(props: Props) {
  return (
    <svg {...strokeProps} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" />
    </svg>
  );
}

/** Ciberseguridad */
export function IconShield(props: Props) {
  return (
    <svg {...strokeProps} {...props}>
      <path d="M12 2.8 4.5 5.6v5.2c0 4.6 3 8.9 7.5 10.4 4.5-1.5 7.5-5.8 7.5-10.4V5.6L12 2.8Z" />
      <path d="m8.8 11.8 2.3 2.3 4.1-4.4" />
    </svg>
  );
}

/** Valor: inteligencia aplicada */
export function IconChip(props: Props) {
  return (
    <svg {...strokeProps} {...props}>
      <rect x="6.5" y="6.5" width="11" height="11" rx="2" />
      <rect x="10" y="10" width="4" height="4" rx="0.8" />
      <path d="M9 3.5v3m6-3v3M9 17.5v3m6-3v3M3.5 9h3m-3 6h3M17.5 9h3m-3 6h3" />
    </svg>
  );
}

/** Valor: precisión de ingeniería */
export function IconTarget(props: Props) {
  return (
    <svg {...strokeProps} {...props}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** Valor: evolución constante */
export function IconEvolve(props: Props) {
  return (
    <svg {...strokeProps} {...props}>
      <path d="M4 17.5c4-1 5.5-3.6 6.5-6.5 1-3 3-5.5 9-5.5" />
      <path d="m16 2.5 3.5 3-3.5 3" />
      <path d="M4 9.5c2.5 0 4.3.9 5.6 2.3M13 18c1.6 1 3.8 1.5 7 1.5" />
    </svg>
  );
}

/** Valor: seguridad por diseño */
export function IconLock(props: Props) {
  return (
    <svg {...strokeProps} {...props}>
      <rect x="5" y="10.5" width="14" height="10" rx="2.5" />
      <path d="M8 10.5V7.8a4 4 0 0 1 8 0v2.7" />
      <circle cx="12" cy="15.3" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** Misión */
export function IconMission(props: Props) {
  return (
    <svg {...strokeProps} {...props}>
      <path d="M12 3.5a8.5 8.5 0 1 0 8.5 8.5" />
      <path d="M12 8a4 4 0 1 0 4 4" />
      <path d="M12 12 18.5 5.5M18.5 5.5V2.9m0 2.6h2.6" />
    </svg>
  );
}

/** Visión */
export function IconVision(props: Props) {
  return (
    <svg {...strokeProps} {...props}>
      <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
