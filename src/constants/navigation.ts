import type { NavItem, SocialLink } from "@/types/content";
import { siteConfig } from "@/config/site";
import {
  SocialGithub,
  SocialLinkedin,
  SocialWhatsapp,
  SocialX,
  SocialYoutube,
} from "@/icons/social";

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

export const SOCIAL_LINKS: readonly SocialLink[] = [
  {
    id: "github",
    label: "GitHub",
    href: siteConfig.social.github,
    icon: SocialGithub,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: siteConfig.social.linkedin,
    icon: SocialLinkedin,
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    href: siteConfig.contact.whatsapp.href,
    icon: SocialWhatsapp,
  },
  { id: "x", label: "X (Twitter)", href: siteConfig.social.x, icon: SocialX },
  {
    id: "youtube",
    label: "YouTube",
    href: siteConfig.social.youtube,
    icon: SocialYoutube,
  },
] as const;
