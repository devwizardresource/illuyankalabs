import type { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement>;

const strokeProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
} satisfies Props;

export function IconArrowRight(props: Props) {
  return (
    <svg {...strokeProps} {...props}>
      <path d="M4 12h16m-6-6 6 6-6 6" />
    </svg>
  );
}

export function IconCheck(props: Props) {
  return (
    <svg {...strokeProps} {...props}>
      <path d="m5 12.5 4.5 4.5L19 7" />
    </svg>
  );
}

export function IconMenu(props: Props) {
  return (
    <svg {...strokeProps} {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function IconClose(props: Props) {
  return (
    <svg {...strokeProps} {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function IconSun(props: Props) {
  return (
    <svg {...strokeProps} {...props}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2.5v2.4m0 14.2v2.4M4.3 4.3l1.7 1.7m12 12 1.7 1.7M2.5 12h2.4m14.2 0h2.4M4.3 19.7 6 18M18 6l1.7-1.7" />
    </svg>
  );
}

export function IconMoon(props: Props) {
  return (
    <svg {...strokeProps} {...props}>
      <path d="M20.5 14.1A8.5 8.5 0 0 1 9.9 3.5a8.5 8.5 0 1 0 10.6 10.6Z" />
    </svg>
  );
}

export function IconSend(props: Props) {
  return (
    <svg {...strokeProps} {...props}>
      <path d="m4 11.5 16-7-4.5 16-4.3-6.3L4 11.5Zm7.2 2.7 8.8-9.7" />
    </svg>
  );
}

export function IconMail(props: Props) {
  return (
    <svg {...strokeProps} {...props}>
      <rect x="3.2" y="5" width="17.6" height="14" rx="2.5" />
      <path d="m4.5 7.5 7.5 5.6 7.5-5.6" />
    </svg>
  );
}

export function IconPhone(props: Props) {
  return (
    <svg {...strokeProps} {...props}>
      <path d="M6.8 3.8 8.9 3c.5-.2 1 .1 1.3.6l1.3 2.9c.2.5.1 1-.3 1.4L9.7 9.2a12.4 12.4 0 0 0 5.1 5.1l1.3-1.5c.4-.4.9-.5 1.4-.3l2.9 1.3c.5.3.8.8.6 1.3l-.8 2.1c-.3.9-1.1 1.5-2 1.4C10.9 19.9 4.1 13.1 3.4 5.8c-.1-.9.5-1.7 1.4-2h2Z" />
    </svg>
  );
}

export function IconMapPin(props: Props) {
  return (
    <svg {...strokeProps} {...props}>
      <path d="M12 21.5s7-6.2 7-11.3A7 7 0 1 0 5 10.2c0 5.1 7 11.3 7 11.3Z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  );
}

export function IconSparkles(props: Props) {
  return (
    <svg {...strokeProps} {...props}>
      <path d="M12 4.5 13.8 9l4.5 1.8-4.5 1.8L12 17l-1.8-4.4L5.7 10.8 10.2 9 12 4.5ZM19 15.5l.9 2.1 2.1.9-2.1.9-.9 2.1-.9-2.1-2.1-.9 2.1-.9.9-2.1Z" />
    </svg>
  );
}

export function IconChevronDown(props: Props) {
  return (
    <svg {...strokeProps} {...props}>
      <path d="m6 9.5 6 6 6-6" />
    </svg>
  );
}

export function IconClock(props: Props) {
  return (
    <svg {...strokeProps} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 6.8V12l3.4 2.4" />
    </svg>
  );
}

export function IconUsers(props: Props) {
  return (
    <svg {...strokeProps} {...props}>
      <circle cx="9.2" cy="8.2" r="3.2" />
      <path d="M3.5 19.5c.6-3.2 2.9-5 5.7-5s5.1 1.8 5.7 5" />
      <path d="M15.4 5.6a3 3 0 0 1 0 5.3M17.6 14.9c1.8.6 2.8 2 3.1 4" />
    </svg>
  );
}
