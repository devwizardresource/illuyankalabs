import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { Stats } from "@/components/sections/stats";
import { Technologies } from "@/components/sections/technologies";
import { Cta } from "@/components/sections/cta";
import {
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
      <main id="contenido">
        <Hero />
        <About />
        <Services />
        <Stats />
        <Technologies />
        <Cta />
      </main>
    </>
  );
}
