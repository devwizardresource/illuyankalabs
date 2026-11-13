import type { Feature } from "@/types/content";
import {
  IconBot,
  IconBuilding,
  IconChip,
  IconEvolve,
  IconGraduation,
  IconLandmark,
  IconLock,
  IconRocket,
  IconShield,
  IconTarget,
} from "@/icons/services";
import { IconUsers } from "@/icons/ui";

/** Entrada: el problema del cliente y cómo lo resolvemos. */
export const ABOUT_INTRO =
  "Procesos lentos, sistemas que no escalan y herramientas que no se hablan entre sí frenan a cualquier organización. Lo resolvemos con software a la medida, automatización e inteligencia artificial. Construido para durar y probado antes de llegar a tus manos.";

/** Lo que representa nuestro trabajo. */
export const PURPOSE: readonly string[] = [
  "Hacemos tecnología en Colombia, pensada para durar y para dar resultados que se puedan medir: tiempo ahorrado, costos más bajos y equipos más productivos.",
  "Queremos demostrar que aquí se construye software de clase mundial. Y que tu organización puede tenerlo sin depender de soluciones genéricas.",
];

/** Cómo trabajamos: los valores, convertidos en compromisos con el cliente. */
export const COMMITMENTS: readonly Feature[] = [
  {
    id: "inteligencia",
    title: "Inteligencia aplicada a tu negocio",
    description:
      "Trabajamos con IA e inteligencia humana: la IA acelera el desarrollo y nuestro equipo diseña, revisa y responde por cada línea de código de tu solución.",
    icon: IconChip,
  },
  {
    id: "precision",
    title: "Precisión probada en laboratorio",
    description:
      "Todo lo que entregamos pasa antes por nuestro laboratorio de pruebas. A tu equipo llega funcionando.",
    icon: IconTarget,
  },
  {
    id: "seguridad",
    title: "Seguridad desde el diseño",
    description:
      "Arquitectura segura y escalable desde el primer día, lista para sumar IA, automatización y nube sin rehacer nada.",
    icon: IconLock,
  },
  {
    id: "evolucion",
    title: "Evolución a tu lado",
    description:
      "Después de la entrega seguimos contigo: damos soporte, medimos resultados y mejoramos la solución.",
    icon: IconEvolve,
  },
] as const;

/** Qué gana el cliente al trabajar con nosotros. */
export const BENEFITS: readonly Feature[] = [
  {
    id: "menos-manual",
    title: "Menos tareas manuales",
    description:
      "Automatizamos lo repetitivo para que tu equipo dedique su tiempo a lo que genera valor.",
    icon: IconBot,
  },
  {
    id: "crecimiento",
    title: "Sistemas que crecen contigo",
    description:
      "Tu tecnología acompaña el crecimiento del negocio en lugar de frenarlo.",
    icon: IconEvolve,
  },
  {
    id: "proteccion",
    title: "Información protegida",
    description:
      "Cuidamos tus datos y los de tus clientes en cada capa de la solución.",
    icon: IconLock,
  },
  {
    id: "acompanamiento",
    title: "Un equipo que no desaparece",
    description:
      "Seguimos a tu lado después de la entrega, con soporte y mejoras continuas.",
    icon: IconUsers,
  },
] as const;

/** A quién ayudamos y qué problema le resolvemos. */
export const SEGMENTS: readonly Feature[] = [
  {
    id: "empresas",
    title: "Empresas en transformación digital",
    description:
      "Pymes y grandes empresas: conectamos sistemas, automatizamos procesos y convertimos datos en decisiones.",
    icon: IconBuilding,
  },
  {
    id: "educacion",
    title: "Instituciones educativas y universidades",
    description:
      "Plataformas que simplifican la gestión académica y administrativa.",
    icon: IconGraduation,
  },
  {
    id: "publico",
    title: "Entidades públicas y privadas",
    description:
      "Trámites y servicios digitales más ágiles, seguros y fáciles de usar para ciudadanos, clientes y afiliados.",
    icon: IconLandmark,
  },
  {
    id: "startups",
    title: "Startups",
    description:
      "Productos con una base sólida para validar rápido y escalar sin rehacer el código.",
    icon: IconRocket,
  },
] as const;

/** Origen del nombre: abre el bloque "ADN de nuestra marca". */
export const BRAND_ORIGIN =
  "Nuestra marca nace de las cualidades del dragón: un guardián fuerte, sabio y siempre alerta que protege lo que más valora. Así cuidamos la tecnología y la información de nuestros clientes: con la seguridad como base de todo lo que construimos.";

/** Cualidades del dragón convertidas en compromisos: la seguridad, primero. */
export const BRAND_DNA: readonly Feature[] = [
  {
    id: "proteccion",
    title: "Protección",
    description:
      "Como un dragón guardián, protegemos tus datos y tu operación con seguridad desde el diseño en cada capa de la solución.",
    icon: IconShield,
  },
  {
    id: "vigilancia",
    title: "Vigilancia",
    description:
      "Siempre alerta: monitoreamos, probamos y cerramos brechas antes de que alguien pueda aprovecharlas.",
    icon: IconTarget,
  },
  {
    id: "fortaleza",
    title: "Fortaleza",
    description:
      "Sistemas robustos y confiables que resisten la carga del día a día y crecen sin perder estabilidad.",
    icon: IconLock,
  },
  {
    id: "sabiduria",
    title: "Sabiduría",
    description:
      "IA para ir más rápido y criterio humano para decidir bien: inteligencia aplicada con responsabilidad.",
    icon: IconChip,
  },
] as const;
