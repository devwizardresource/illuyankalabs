import type { NavItem, SocialLink } from "@/types/content";
import { siteConfig } from "@/config/site";
import {
  SocialGithub,
  SocialLinkedin,
  SocialX,
  SocialYoutube,
} from "@/icons/social";

export const NAV_ITEMS: readonly NavItem[] = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Tecnologías", href: "#tecnologias" },
  { label: "Contacto", href: "#contacto" },
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
  { id: "x", label: "X (Twitter)", href: siteConfig.social.x, icon: SocialX },
  {
    id: "youtube",
    label: "YouTube",
    href: siteConfig.social.youtube,
    icon: SocialYoutube,
  },
] as const;
