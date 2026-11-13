/**
 * Única fuente de verdad de la identidad del sitio.
 * Consumida por metadata, JSON-LD, sitemap, robots y secciones.
 */
export const siteConfig = {
  name: "ILLUYANKA LABS",
  legalName: "Illuyanka Labs S.A.S.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://illuyankalabs.com",
  title:
    "Soluciones tecnológicas: software, automatización e IA | ILLUYANKA LABS",
  description:
    "Soluciones tecnológicas para empresas y entidades públicas y privadas: desarrollo de software a la medida, automatización de procesos e inteligencia artificial, nube y ciberseguridad. Empresa de tecnología en Bogotá, Colombia.",
  tagline: "Software · Automatización · IA · Cloud",
  /** Firma del sitio: meta generator, comentario del HTML y humans.txt. */
  generator: "ILLUYANKA LABS · illuyankalabs.com",
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
  keywords: [
    "soluciones tecnológicas",
    "soluciones tecnológicas para empresas",
    "empresa de tecnología en Colombia",
    "empresa de software",
    "desarrollo de software",
    "desarrollo de software a la medida",
    "empresa de desarrollo de software en Bogotá",
    "desarrollo de aplicaciones web y móviles",
    "automatización de procesos",
    "automatización empresarial",
    "RPA",
    "inteligencia artificial",
    "inteligencia artificial para empresas",
    "IA generativa",
    "chatbots con IA",
    "agentes de IA",
    "transformación digital",
    "software para entidades públicas",
    "software para universidades",
    "servicios en la nube",
    "ciberseguridad",
    "ciencia de datos",
    "DevOps",
    "consultoría tecnológica",
  ],
} as const;

export type SiteConfig = typeof siteConfig;
