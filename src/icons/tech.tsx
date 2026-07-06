import type { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement>;

/**
 * Marcas tecnológicas minimalistas dibujadas internamente
 * (geometría icónica propia, sin dependencias de terceros).
 * Monocromas vía currentColor; cada tarjeta muestra el nombre,
 * por lo que la marca funciona como refuerzo visual.
 */

const strokeProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
} satisfies Props;

const fillProps = {
  viewBox: "0 0 24 24",
  fill: "currentColor",
  "aria-hidden": true,
} satisfies Props;

export function TechReact(props: Props) {
  return (
    <svg {...strokeProps} strokeWidth={1.3} {...props}>
      <circle cx="12" cy="12" r="1.9" fill="currentColor" stroke="none" />
      <ellipse cx="12" cy="12" rx="10" ry="4.2" />
      <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" />
    </svg>
  );
}

export function TechNext(props: Props) {
  return (
    <svg {...strokeProps} {...props}>
      <circle cx="12" cy="12" r="9.2" />
      <path d="M9.3 15.5V9l7 8.6" strokeWidth={1.8} />
      <path d="M15.2 9v4.6" strokeWidth={1.8} />
    </svg>
  );
}

export function TechTypeScript(props: Props) {
  return (
    <svg {...strokeProps} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="2.5" />
      <path d="M7 10.2h5.2M9.6 10.2V17" />
      <path d="M17.5 10.8c-.5-.6-1.4-.9-2.2-.7-.9.2-1.4.9-1.3 1.6.3 1.9 3.7 1 3.9 3 .1.8-.6 1.5-1.6 1.6-.9.1-1.8-.2-2.3-.9" />
    </svg>
  );
}

export function TechNode(props: Props) {
  return (
    <svg {...strokeProps} {...props}>
      <path d="M12 2.6 20.3 7.4v9.2L12 21.4l-8.3-4.8V7.4L12 2.6Z" />
      <path d="M8.6 14.8c.4.8 1.2 1.3 2.4 1.3 1.3 0 2.1-.6 2.1-1.5 0-2.1-4.3-1.1-4.3-3.6 0-1.1 1-1.8 2.2-1.8 1 0 1.8.4 2.3 1.1" />
    </svg>
  );
}

export function TechPython(props: Props) {
  return (
    <svg {...strokeProps} {...props}>
      <path d="M11.9 3.2c-2.3 0-3.6 1-3.6 2.5v2.1h4.3v.9H6.4c-1.7 0-3 1.4-3 3.3s1.3 3.3 3 3.3h1.9v-2.2c0-1.6 1.4-2.9 3.1-2.9h3.5c1.4 0 2.5-1.1 2.5-2.5V5.7c0-1.5-1.7-2.5-3.6-2.5h-1.9Z" />
      <path d="M12.1 20.8c2.3 0 3.6-1 3.6-2.5v-2.1h-4.3v-.9h6.2c1.7 0 3-1.4 3-3.3s-1.3-3.3-3-3.3h-1.9v2.2c0 1.6-1.4 2.9-3.1 2.9h-3.5c-1.4 0-2.5 1.1-2.5 2.5v2.1c0 1.5 1.7 2.4 3.6 2.4h1.9Z" />
      <circle cx="9.7" cy="5.8" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="14.3" cy="18.2" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function TechDocker(props: Props) {
  return (
    <svg {...strokeProps} strokeWidth={1.4} {...props}>
      <path d="M2.6 12.7h16.1c1.5 0 2.6-.7 3-1.5-1-.5-2.4-.5-3.1.1.1-1.5-.6-2.5-1.5-3.1-.9.8-1.3 2.1-.9 3.1H2.6c-.2 3.9 2 7.2 6.9 7.2 4.4 0 7.4-2.1 8.7-5.1" />
      <path d="M5.2 12.7V10h2.5v2.7m0-2.7V7.3h2.5V10m0 2.7V10h2.5v2.7m0-2.7V7.3h2.5V10" />
    </svg>
  );
}

export function TechKubernetes(props: Props) {
  return (
    <svg {...strokeProps} strokeWidth={1.4} {...props}>
      <path d="m12 2.4 8.4 4v7.3L15 20.9H9L3.6 13.7V6.4l8.4-4Z" />
      <circle cx="12" cy="11.8" r="3.2" />
      <path d="M12 4.6v4m-6.9 1.1 3.8 1.2m-2.3 7 2.5-3.1m5.8 3.1-2.5-3.1m6.5-5.1-3.8 1.2" />
    </svg>
  );
}

export function TechLinux(props: Props) {
  return (
    <svg {...strokeProps} strokeWidth={1.4} {...props}>
      <path d="M12 2.8c-2.6 0-3.9 1.9-3.9 4.2 0 1.9-.7 3.1-1.7 4.7-1 1.6-1.9 3.4-1.9 5.2 0 .9.6 1.6 1.5 1.6h1.2c.5 1 1.5 1.7 4.8 1.7s4.3-.7 4.8-1.7H18c.9 0 1.5-.7 1.5-1.6 0-1.8-.9-3.6-1.9-5.2-1-1.6-1.7-2.8-1.7-4.7 0-2.3-1.3-4.2-3.9-4.2Z" />
      <circle cx="10.3" cy="8" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="13.7" cy="8" r="0.8" fill="currentColor" stroke="none" />
      <path d="M10.3 10.4c.9.9 2.5.9 3.4 0" />
    </svg>
  );
}

export function TechAws(props: Props) {
  return (
    <svg {...strokeProps} {...props}>
      <path d="M5.4 8.2c-.6.5-1 1.2-1 2 0 1.5 1.2 2.4 2.6 2.4 1.5 0 2.5-1 2.5-2.4V7.6c0-1.5-1.1-2.4-2.5-2.4-1 0-1.8.4-2.3 1M12.2 5.4l1.6 6.9 1.7-6.9 1.7 6.9 1.6-6.9" />
      <path d="M2.8 16.4c5.7 3.4 12.7 3.3 18-.1" />
      <path d="m18.6 15.1 2.2 1.2-1.9 1.6" />
    </svg>
  );
}

export function TechAzure(props: Props) {
  return (
    <svg {...fillProps} {...props}>
      <path d="M13.3 3.2 7.1 17.9l-4.6.01L9.9 5.1l3.4-1.9Z" opacity="0.75" />
      <path d="m14.3 5.4 7.2 15.4H8.3l7.8-2.4-4.2-5 2.4-8Z" />
    </svg>
  );
}

export function TechOpenAi(props: Props) {
  return (
    <svg {...strokeProps} strokeWidth={1.5} {...props}>
      {[0, 60, 120, 180, 240, 300].map((angle) => (
        <path
          key={angle}
          d="M12 3.4a4.7 4.7 0 0 1 4.7 4.7v3.2"
          transform={`rotate(${angle} 12 12)`}
        />
      ))}
    </svg>
  );
}

export function TechPostgres(props: Props) {
  return (
    <svg {...strokeProps} strokeWidth={1.4} {...props}>
      <path d="M12 3C7.4 3 4.8 6.2 4.8 10.2c0 3 1.3 5.3 2.7 6.8.8.9.9 2.2.5 3.2.9.3 1.9-.1 2.5-.9.5.1 1 .2 1.5.2s1-.1 1.5-.2c.6.8 1.6 1.2 2.5.9-.4-1-.3-2.3.5-3.2 1.4-1.5 2.7-3.8 2.7-6.8C19.2 6.2 16.6 3 12 3Z" />
      <path d="M9.2 9.3c.5-.6 1.4-.7 2 -.2M14.8 9.3c-.5-.6-1.4-.7-2-.2" />
      <path d="M10 13.2c.6 1 2.4 1.3 3.4.3" />
    </svg>
  );
}

export function TechGithub(props: Props) {
  return (
    <svg {...fillProps} {...props}>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}
