import type { ComponentType, SVGProps } from "react";

export type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  title: string;
  /** Resultado para el cliente: abre la tarjeta. */
  outcome: string;
  description: string;
  capabilities: readonly string[];
  /** Llamado a la acción específico del servicio. */
  cta: string;
  icon: IconComponent;
}

export interface Technology {
  id: string;
  name: string;
  /** Color oficial de la marca, aplicado al hacer hover. */
  brandColor: string;
  icon: IconComponent;
}

/** Bloque de texto breve con icono: compromisos, beneficios, segmentos. */
export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: IconComponent;
}

export interface ProcessStep {
  id: string;
  title: string;
  description: string;
}

export interface SocialLink {
  id: string;
  label: string;
  href: string;
  icon: IconComponent;
}
