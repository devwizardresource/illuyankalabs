import type { ComponentType, SVGProps } from "react";

export type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  capabilities: readonly string[];
  icon: IconComponent;
}

export interface Technology {
  id: string;
  name: string;
  /** Color oficial de la marca, aplicado al hacer hover. */
  brandColor: string;
  icon: IconComponent;
}

export interface CompanyValue {
  id: string;
  title: string;
  description: string;
  icon: IconComponent;
}

export interface Stat {
  id: string;
  value: number;
  decimals: number;
  suffix: string;
  label: string;
  icon: IconComponent;
}

export interface SocialLink {
  id: string;
  label: string;
  href: string;
  icon: IconComponent;
}
