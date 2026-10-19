/**
 * Única fuente de verdad de la identidad del sitio.
 * Consumida por metadata, JSON-LD, sitemap, robots y secciones.
 */
export const siteConfig = {
  name: "ILLUYANKA LABS",
  legalName: "Illuyanka Labs S.A.S.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://illuyankalabs.com",
  title: "Desarrollo de software, IA y automatización en Colombia | ILLUYANKA LABS",
  description:
    "Desarrollo de software a la medida, inteligencia artificial y automatización de procesos en Bogotá. Soluciones seguras y escalables para empresas e instituciones en Colombia.",
  tagline: "Software · IA · Automatización · Cloud",
  language: "es",
  locale: "es_CO",
  foundingYear: 2021,
  contact: {
    email: "hello@illuyankalabs.com",
    /** Usuario de WhatsApp: el enlace se construye a partir de él (sin "@"). */
    whatsapp: {
      username: "@illuyankalabs",
      href: "https://wa.me/illuyankalabs",
    },
    location: "Bogotá, Colombia",
    country: "CO",
    /** Único tiempo de respuesta comprometido en todo el sitio. */
    responseTime: "menos de 24 horas",
  },
  social: {
    github: "https://github.com/illuyankalabs",
    linkedin: "https://www.linkedin.com/company/illuyankalabs",
    x: "https://x.com/illuyankalabs",
    youtube: "https://www.youtube.com/@illuyankalabs",
  },
  keywords: [
    "desarrollo de software a la medida",
    "empresa de desarrollo de software en Bogotá",
    "desarrollo de software en Colombia",
    "inteligencia artificial para empresas",
    "automatización de procesos",
    "software para universidades",
    "transformación digital Colombia",
    "servicios en la nube",
    "ciberseguridad",
    "ciencia de datos",
    "consultoría tecnológica",
  ],
} as const;

export type SiteConfig = typeof siteConfig;
