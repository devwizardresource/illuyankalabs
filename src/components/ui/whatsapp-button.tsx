import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { SocialWhatsapp } from "@/icons/social";
import { cn } from "@/utils/cn";

interface WhatsAppButtonProps {
  label?: string;
  size?: "md" | "lg";
  className?: string;
  onClick?: () => void;
}

/** Botón de contacto por WhatsApp, reutilizado en cada punto de contacto. */
export function WhatsAppButton({
  label = "Escríbenos por WhatsApp",
  size = "md",
  className,
  onClick,
}: WhatsAppButtonProps) {
  return (
    <Button
      href={siteConfig.contact.whatsapp.href}
      target="_blank"
      rel="noopener noreferrer"
      variant="secondary"
      size={size}
      onClick={onClick}
      className={cn(
        "hover:border-[#25d366] hover:text-foreground hover:shadow-[0_0_36px_-10px_rgba(37,211,102,0.6)]",
        className,
      )}
    >
      <SocialWhatsapp className="size-4.5 shrink-0 text-[#25d366]" />
      {label}
      <span className="sr-only"> (se abre en una pestaña nueva)</span>
    </Button>
  );
}

/** Acceso flotante a WhatsApp, visible en todas las páginas. */
export function WhatsAppFloat() {
  return (
    <a
      href={siteConfig.contact.whatsapp.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Escríbenos por WhatsApp a ${siteConfig.contact.whatsapp.username} (se abre en una pestaña nueva)`}
      className="group fixed right-4 bottom-4 z-40 flex size-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_8px_30px_-6px_rgba(37,211,102,0.55),0_0_0_1px_rgba(255,255,255,0.12)] transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_40px_-6px_rgba(37,211,102,0.75),0_0_40px_-8px_var(--glow-violet)] sm:right-6 sm:bottom-6"
    >
      <span
        aria-hidden
        className="absolute inset-0 animate-ping rounded-full bg-[#25d366]/40 [animation-duration:2.6s] motion-reduce:hidden"
      />
      <SocialWhatsapp className="relative size-7" />
    </a>
  );
}
