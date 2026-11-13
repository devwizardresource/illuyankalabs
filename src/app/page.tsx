import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { BrandDna } from "@/components/sections/brand-dna";
import { Services } from "@/components/sections/services";
import { Process } from "@/components/sections/process";
import { Technologies } from "@/components/sections/technologies";
import { Faq } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";
import {
  faqJsonLd,
  organizationJsonLd,
  serializeJsonLd,
  websiteJsonLd,
} from "@/lib/structured-data";

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(organizationJsonLd()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(websiteJsonLd()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(faqJsonLd()) }}
      />
      <main id="contenido">
        <Hero />
        <About />
        <BrandDna />
        <Services />
        <Process />
        <Technologies />
        <Faq />
        <Contact />
      </main>
    </>
  );
}
