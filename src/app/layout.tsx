import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Inter, Ubuntu } from "next/font/google";
import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { siteConfig } from "@/config/site";
import "@/styles/globals.css";

const ubuntu = Ubuntu({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-ubuntu",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — ${siteConfig.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/og.png"],
    creator: "@illuyankalabs",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#020610",
};

/**
 * Aplica el tema persistido y marca el runtime con JS antes del primer
 * paint: sin FOUC de tema y sin contenido oculto cuando no hay JS.
 */
const bootstrapScript = `(function(){var d=document.documentElement;d.classList.add("js");try{if(localStorage.getItem("il-theme")==="light"){d.dataset.theme="light"}}catch(e){}})();`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="es"
      data-theme="dark"
      suppressHydrationWarning
      className={`${ubuntu.variable} ${inter.variable}`}
    >
      <body className="min-h-dvh overflow-x-clip bg-background font-sans text-foreground antialiased">
        <script dangerouslySetInnerHTML={{ __html: bootstrapScript }} />
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:rounded-full focus:bg-primary-strong focus:px-5 focus:py-2.5 focus:text-sm focus:font-medium focus:text-white"
        >
          Saltar al contenido principal
        </a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
