import type { Metadata } from "next";
import { LegalArticle } from "@/components/ui/legal-article";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Términos y condiciones",
  description: `Términos y condiciones de uso del sitio web de ${siteConfig.name}.`,
  alternates: { canonical: "/terminos" },
};

export default function TermsPage() {
  return (
    <LegalArticle
      eyebrow="Legal"
      title="Términos y condiciones"
      updated="5 de julio de 2026"
    >
      <section>
        <h2>1. Aceptación</h2>
        <p>
          Al acceder y utilizar el sitio web de {siteConfig.legalName} aceptas
          estos términos y condiciones. Si no estás de acuerdo con alguno de
          ellos, te pedimos no utilizar el sitio.
        </p>
      </section>
      <section>
        <h2>2. Uso del sitio</h2>
        <p>
          El contenido de este sitio tiene fines informativos sobre nuestros
          servicios de ingeniería de software, inteligencia artificial, cloud,
          automatización y ciberseguridad. Te comprometes a usarlo de forma
          lícita y a no intentar vulnerar su seguridad o disponibilidad.
        </p>
      </section>
      <section>
        <h2>3. Propiedad intelectual</h2>
        <p>
          La marca ILLUYANKA LABS, su logotipo, los textos, gráficos y el
          código de este sitio son propiedad de {siteConfig.legalName} o de
          sus licenciantes. No está permitida su reproducción sin autorización
          expresa por escrito.
        </p>
      </section>
      <section>
        <h2>4. Propuestas y servicios</h2>
        <p>
          La información publicada no constituye una oferta contractual. Las
          condiciones específicas de cada proyecto (alcance, plazos, tarifas y
          acuerdos de nivel de servicio) se pactan en propuestas y contratos
          individuales.
        </p>
      </section>
      <section>
        <h2>5. Limitación de responsabilidad</h2>
        <p>
          Trabajamos para que la información del sitio sea precisa y esté
          actualizada; no obstante, {siteConfig.legalName} no garantiza la
          ausencia de errores ni se hace responsable de decisiones tomadas
          únicamente con base en este contenido.
        </p>
      </section>
      <section>
        <h2>6. Legislación aplicable</h2>
        <p>
          Estos términos se rigen por la legislación de la República de
          Colombia. Cualquier controversia se someterá a los jueces y
          tribunales competentes de Bogotá, Colombia.
        </p>
      </section>
    </LegalArticle>
  );
}
