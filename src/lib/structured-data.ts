import { siteConfig } from "@/config/site";
import { SERVICES } from "@/constants/services";
import { FAQ_ITEMS } from "@/constants/faq";

/**
 * Datos estructurados Schema.org (JSON-LD) para buscadores.
 */

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/icons/icon-512.png`,
    image: `${siteConfig.url}/og.png`,
    description: siteConfig.description,
    slogan: siteConfig.tagline,
    foundingDate: String(siteConfig.foundingYear),
    email: siteConfig.contact.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.contact.location.split(",")[0].trim(),
      addressCountry: siteConfig.contact.country,
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: siteConfig.contact.email,
      url: siteConfig.contact.whatsapp.href,
      availableLanguage: ["es", "en"],
    },
    areaServed: [
      { "@type": "Country", name: "Colombia" },
      { "@type": "Place", name: "Latinoamérica" },
      { "@type": "Place", name: "Mundo" },
    ],
    knowsAbout: [...siteConfig.keywords],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Soluciones tecnológicas",
      itemListElement: SERVICES.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: `${service.outcome} ${service.description}`,
          serviceType: service.title,
          provider: { "@id": `${siteConfig.url}/#organization` },
          areaServed: "Colombia",
        },
      })),
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: siteConfig.language,
    publisher: { "@id": `${siteConfig.url}/#organization` },
  };
}

export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

/**
 * Serializa JSON-LD de forma segura para incrustar en <script>:
 * escapa `<` para impedir cierre prematuro de la etiqueta.
 */
export function serializeJsonLd(data: object): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
