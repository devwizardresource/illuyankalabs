/**
 * Única fuente de verdad de la identidad del sitio.
 * Consumida por metadata, JSON-LD, sitemap, robots y secciones.
 */
export const siteConfig = {
  name: "ILLUYANKA LABS",
  legalName: "Illuyanka Labs",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://illuyankalabs.com",
  title: "ILLUYANKA LABS — Software, IA, Automatización y Cloud",
  description:
    "Laboratorio digital de ingeniería de software, inteligencia artificial, cloud computing, automatización y ciberseguridad. Construimos el futuro con tecnología inteligente desde Colombia.",
  tagline: "Software · IA · Automatización · Cloud",
  language: "es",
  locale: "es_CO",
  foundingYear: 2021,
  contact: {
    email: "hola@illuyankalabs.com",
    phone: "+57 300 123 4567",
    phoneHref: "tel:+573001234567",
    location: "Bogotá, Colombia",
    country: "CO",
  },
  social: {
    github: "https://github.com/illuyankalabs",
    linkedin: "https://www.linkedin.com/company/illuyankalabs",
    x: "https://x.com/illuyankalabs",
    youtube: "https://www.youtube.com/@illuyankalabs",
  },
  keywords: [
    "desarrollo de software",
    "inteligencia artificial",
    "cloud computing",
    "automatización",
    "ciberseguridad",
    "ciencia de datos",
    "DevOps",
    "consultoría tecnológica",
    "Bogotá",
    "Colombia",
  ],
} as const;

export type SiteConfig = typeof siteConfig;
