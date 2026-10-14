import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { Process } from "@/components/sections/process";
import { Technologies } from "@/components/sections/technologies";
import { Contact } from "@/components/sections/contact";
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
        <Process />
        <Technologies />
        <Contact />
      </main>
    </>
  );
}
