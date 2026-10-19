import { siteConfig } from "@/config/site";

/**
 * Datos estructurados Schema.org (JSON-LD) para buscadores.
 */

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/icons/icon-512.png`,
    description: siteConfig.description,
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
    sameAs: [...Object.values(siteConfig.social), siteConfig.contact.whatsapp.href],
    knowsAbout: [...siteConfig.keywords],
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

/**
 * Serializa JSON-LD de forma segura para incrustar en <script>:
 * escapa `<` para impedir cierre prematuro de la etiqueta.
 */
export function serializeJsonLd(data: object): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
