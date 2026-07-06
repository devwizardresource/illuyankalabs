import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { NewsletterForm } from "@/components/sections/newsletter-form";
import { NAV_ITEMS, SOCIAL_LINKS } from "@/constants/navigation";
import { SERVICES } from "@/constants/services";
import { siteConfig } from "@/config/site";
import { IconMail, IconMapPin, IconPhone } from "@/icons/ui";

const CONTACT_ITEMS = [
  {
    id: "email",
    icon: IconMail,
    label: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
  },
  {
    id: "phone",
    icon: IconPhone,
    label: siteConfig.contact.phone,
    href: siteConfig.contact.phoneHref,
  },
  {
    id: "location",
    icon: IconMapPin,
    label: siteConfig.contact.location,
    href: undefined,
  },
] as const;

const footerHeading =
  "font-display text-xs font-bold tracking-[0.2em] text-foreground uppercase";
const footerLink =
  "text-sm text-muted transition-colors duration-200 hover:text-primary-bright";

export function Footer() {
  return (
    <footer
      id="contacto"
      className="scroll-mt-24 border-t border-line bg-background-soft"
    >
      <Container className="py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.8fr_1fr_1.2fr]">
          <div>
            <Logo size="lg" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
              Innovamos, desarrollamos y transformamos ideas en soluciones
              tecnológicas que impulsan el futuro.
            </p>
            <ul className="mt-6 flex gap-3" aria-label="Redes sociales">
              {SOCIAL_LINKS.map((social) => (
                <li key={social.id}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${social.label} de ILLUYANKA LABS (se abre en una pestaña nueva)`}
                    className="flex size-10 items-center justify-center rounded-full border border-line text-muted transition-all duration-300 hover:border-line-strong hover:text-primary-bright hover:shadow-glow"
                  >
                    <social.icon className="size-4.5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Mapa del sitio">
            <h3 className={footerHeading}>Mapa del sitio</h3>
            <ul className="mt-5 space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className={footerLink}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Servicios">
            <h3 className={footerHeading}>Servicios</h3>
            <ul className="mt-5 space-y-3">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <a href="#servicios" className={footerLink}>
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className={footerHeading}>Contacto</h3>
            <ul className="mt-5 space-y-3">
              {CONTACT_ITEMS.map((item) => (
                <li key={item.id} className="flex items-center gap-3">
                  <item.icon className="size-4.5 shrink-0 text-primary-bright" />
                  {item.href ? (
                    <a href={item.href} className={footerLink}>
                      {item.label}
                    </a>
                  ) : (
                    <span className="text-sm text-muted">{item.label}</span>
                  )}
                </li>
              ))}
            </ul>

            <h3 className={`${footerHeading} mt-9`}>Newsletter</h3>
            <p className="mt-3 text-xs leading-relaxed text-subtle">
              Tendencias de IA, cloud e ingeniería, una vez al mes. Sin spam.
            </p>
            <NewsletterForm />
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-line pt-8 sm:flex-row">
          <p className="text-xs text-subtle">
            © {new Date().getFullYear()} {siteConfig.name}. Todos los derechos
            reservados.
          </p>
          <nav aria-label="Legal">
            <ul className="flex gap-6">
              <li>
                <Link
                  href="/privacidad"
                  className="text-xs text-subtle transition-colors hover:text-foreground"
                >
                  Política de privacidad
                </Link>
              </li>
              <li>
                <Link
                  href="/terminos"
                  className="text-xs text-subtle transition-colors hover:text-foreground"
                >
                  Términos y condiciones
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </footer>
  );
}
