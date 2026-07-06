import type { Metadata } from "next";
import { LegalArticle } from "@/components/ui/legal-article";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description: `Política de privacidad de ${siteConfig.name}: qué datos recopilamos, cómo los usamos y cuáles son tus derechos.`,
  alternates: { canonical: "/privacidad" },
};

export default function PrivacyPage() {
  return (
    <LegalArticle
      eyebrow="Legal"
      title="Política de privacidad"
      updated="5 de julio de 2026"
    >
      <section>
        <h2>1. Responsable del tratamiento</h2>
        <p>
          {siteConfig.legalName}, con sede en {siteConfig.contact.location}, es
          responsable del tratamiento de los datos personales recogidos a
          través de este sitio web. Puedes contactarnos en{" "}
          {siteConfig.contact.email}.
        </p>
      </section>
      <section>
        <h2>2. Datos que recopilamos</h2>
        <p>Únicamente tratamos los datos que nos proporcionas de forma voluntaria:</p>
        <ul>
          <li>
            Correo electrónico, cuando te suscribes a nuestro newsletter.
          </li>
          <li>
            Datos de contacto e información del proyecto, cuando nos escribes
            por correo o teléfono.
          </li>
        </ul>
        <p>
          Este sitio no utiliza cookies de seguimiento ni herramientas de
          analítica de terceros.
        </p>
      </section>
      <section>
        <h2>3. Finalidad del tratamiento</h2>
        <p>
          Usamos tus datos exclusivamente para responder a tus consultas,
          preparar propuestas comerciales y, si lo autorizaste, enviarte
          nuestro newsletter. No vendemos ni cedemos tus datos a terceros.
        </p>
      </section>
      <section>
        <h2>4. Conservación y seguridad</h2>
        <p>
          Conservamos los datos solo durante el tiempo necesario para las
          finalidades descritas y aplicamos medidas técnicas y organizativas
          alineadas con las mejores prácticas de la industria para
          protegerlos.
        </p>
      </section>
      <section>
        <h2>5. Tus derechos</h2>
        <p>
          Puedes ejercer tus derechos de acceso, rectificación, cancelación y
          oposición en cualquier momento escribiendo a{" "}
          {siteConfig.contact.email}. También puedes darte de baja del
          newsletter desde cualquiera de nuestros correos.
        </p>
      </section>
    </LegalArticle>
  );
}
