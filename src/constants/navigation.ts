import type { NavItem, SocialLink } from "@/types/content";
import { siteConfig } from "@/config/site";
import { SocialWhatsapp } from "@/icons/social";

/**
 * Rutas absolutas ("/#seccion"): en la home desplazan a la sección y desde
 * las páginas legales (o la 404) regresan al inicio en esa misma sección.
 */
export const NAV_ITEMS: readonly NavItem[] = [
  { label: "Inicio", href: "/#inicio" },
  { label: "Nosotros", href: "/#nosotros" },
  { label: "Servicios", href: "/#servicios" },
  { label: "Proceso", href: "/#proceso" },
  { label: "Tecnologías", href: "/#tecnologias" },
  { label: "Contacto", href: "/#contacto" },
] as const;

/** Canales oficiales activos: por ahora solo el sitio web y WhatsApp. */
export const SOCIAL_LINKS: readonly SocialLink[] = [
  {
    id: "whatsapp",
    label: "WhatsApp",
    href: siteConfig.contact.whatsapp.href,
    icon: SocialWhatsapp,
  },
] as const;
