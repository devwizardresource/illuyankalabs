<div align="center">

# ILLUYANKA LABS — Landing Page oficial

**Software · IA · Automatización · Cloud**

Landing page de producción construida con Next.js 15, React 19, TypeScript y Tailwind CSS v4, desde Colombia.
Identidad visual derivada del logo del dragón: cromo metálico, azul eléctrico `#1378f9` y cian de energía `#22d9ee` sobre navy profundo.

</div>

---

## Stack

| Capa | Tecnología | Justificación |
|---|---|---|
| Framework | Next.js 15 (App Router) | SSG total, metadata API, optimización de imágenes y fuentes integradas |
| UI | React 19 | Server Components (JS mínimo al cliente) + `useActionState` para formularios |
| Lenguaje | TypeScript (strict) | Seguridad de tipos end-to-end |
| CSS | Tailwind CSS v4 | Config CSS-first (`@theme`), design tokens como variables nativas |
| Animación | CSS + IntersectionObserver | 60 FPS garantizados (solo `transform`/`opacity`), **0 KB** de librerías |

**Dependencias runtime: 3** (`next`, `react`, `react-dom`). Sin Framer Motion, sin clsx, sin librerías de componentes: todo lo demás se implementó con APIs nativas — criterio: si la plataforma lo resuelve, no se añade dependencia.

## Arquitectura

```
src/
├── app/            Rutas, layout raíz, SEO (robots, sitemap, manifest, iconos), 404, legales
├── components/
│   ├── ui/         Átomos reutilizables: Button, Badge, Container, GlassCard,
│   │               SectionHeading, IconBox, Logo, StoryArt, ThemeToggle
│   ├── sections/   Organismos de la landing: Header, Hero, About, Services, Stats,
│   │               Technologies, Cta, Footer, NewsletterForm
│   └── animations/ Reveal (IO + CSS), Particles (seed determinista), Counter,
│                   Tilt (parallax 3D), Emergence (dragón emergiendo en espiral)
├── hooks/          use-in-view, use-theme, use-scroll-lock
├── icons/          SVG propios: ui, services, tech (marcas geométricas), social
├── lib/            structured-data (JSON-LD Organization + WebSite)
├── constants/      Contenido tipado: navigation, services, technologies, about, stats
├── config/         site.ts — única fuente de verdad (nombre, URL, contacto, redes)
├── services/       newsletter.ts — Server Action (validación + honeypot)
├── types/          Contratos de contenido (Service, CaseStudy, Testimonial…)
├── utils/          cn() — composición de clases
├── styles/         globals.css — design tokens, temas, keyframes
└── assets/         Isotipo procesado desde resources/
```

**Principios aplicados**: separación contenido/presentación (editar textos = tocar solo `constants/`), Atomic Design (ui → sections → page), SOLID (componentes de responsabilidad única), datos tipados como `readonly`.

## Decisiones técnicas clave

- **Server Components por defecto.** Solo los componentes interactivos envían JS al cliente (Header, Reveal, Counter, Tilt, Emergence, ThemeToggle, NewsletterForm). First Load JS de la home: **~112 kB** (~100 kB son React/Next base).
- **Animaciones sin librerías.** `Reveal` usa IntersectionObserver + transiciones CSS; el dragón del hero combina flotación, parallax 3D al puntero (`Tilt`) y una emergencia con espiral de luz (`Emergence`, al hacer hover y cada 70 s). Sin JavaScript el contenido es visible; con `prefers-reduced-motion` no se anima nada.
- **Partículas renderizadas en servidor** con PRNG determinista (mulberry32): mismo HTML en servidor y cliente → sin errores de hidratación y 0 KB de JS.
- **Tema oscuro por defecto, claro opcional.** Variables CSS semánticas conmutadas por `data-theme`; script inline anti-FOUC lee `localStorage` antes del primer paint.
- **Contraste verificado**: auditoría axe-core (WCAG 2A/2AA/2.1AA) con **cero violaciones en ambos temas**. Los botones primarios usan `#0d63d8` (5.5:1 con texto blanco).
- **Marcas tecnológicas propias**: SVG geométricos minimalistas + etiqueta de texto (sin reproducir assets de terceros con licencias inciertas).
- **Server Action del newsletter** con honeypot antibots y validación en servidor; funciona incluso sin JavaScript (progressive enhancement). El proveedor de email se conecta en `src/services/newsletter.ts`.
- **Seguridad**: CSP restrictiva, `X-Frame-Options: DENY`, `nosniff`, `Referrer-Policy`, `Permissions-Policy` en `next.config.ts`; JSON-LD serializado con escape de `<`.

## SEO

Metadata completa (title template, description, keywords, canonical), Open Graph + Twitter Cards con imagen 1200×630, `robots.ts`, `sitemap.ts`, `manifest.ts` (PWA), JSON-LD (`Organization`, `WebSite`), `lang="es"`, favicons e iconos maskable generados desde el logo.

## Desarrollo

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # build de producción (11 rutas estáticas)
npm run start      # servir el build
npm run lint       # ESLint
npm run typecheck  # TypeScript sin emitir
```

### Variables de entorno

Copia `.env.example` → `.env` y ajusta `NEXT_PUBLIC_SITE_URL` con el dominio real (usado por canonical, sitemap, robots y JSON-LD).

## Despliegue

Compatible con cualquier plataforma Node/Next (Vercel, Netlify, Cloudflare, contenedor propio). Todas las rutas se prerenderizan como estáticas; el único endpoint dinámico es el POST del Server Action del newsletter.

## Riesgos conocidos y mitigación

| Riesgo | Mitigación |
|---|---|
| `next/font` descarga Google Fonts en build | Solo afecta a CI sin red; en local/Vercel funciona. Alternativa: migrar a `next/font/local` |
| Newsletter sin proveedor real | Punto de integración documentado en `services/newsletter.ts` (hoy valida y registra) |
| CSP usa `'unsafe-inline'` en scripts | Requerido por el script anti-FOUC e hidratación de Next; el resto de la política bloquea orígenes externos |
| Contenido editable | Todos los textos y cifras viven en `src/constants/` y `src/config/site.ts` (ciudad de contacto incluida) |

---

© 2026 ILLUYANKA LABS · Construido desde Colombia 🐉
