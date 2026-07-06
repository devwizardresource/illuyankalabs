import type { CompanyValue } from "@/types/content";
import { IconChip, IconEvolve, IconLock, IconTarget } from "@/icons/services";

export const STORY: readonly string[] = [
  "Somos un laboratorio digital que combina innovación, ingeniería y creatividad para desarrollar soluciones inteligentes que conectan personas, procesos y tecnología.",
  "Nuestro nombre nace de Illuyanka, el dragón primigenio de la mitología hitita: símbolo de poder, inteligencia y renovación. Como él, creemos que la tecnología evoluciona en ciclos — y quienes dominan cada ciclo definen el siguiente.",
  "Desde Colombia, trabajamos con equipos y empresas de toda la región construyendo software que perdura: preciso en su ingeniería, seguro por diseño y en evolución constante.",
];

export const MISSION =
  "Impulsar la evolución digital de empresas y organizaciones mediante tecnología innovadora y soluciones confiables.";

export const VISION =
  "Ser reconocidos globalmente como líderes en innovación tecnológica y transformación digital.";

export const VALUES: readonly CompanyValue[] = [
  {
    id: "inteligencia",
    title: "Inteligencia aplicada",
    description:
      "Cada decisión técnica nace de datos, investigación y criterio de ingeniería, no de modas.",
    icon: IconChip,
  },
  {
    id: "precision",
    title: "Precisión",
    description:
      "Código limpio, arquitectura deliberada y detalles cuidados: la excelencia está en lo que no se ve.",
    icon: IconTarget,
  },
  {
    id: "evolucion",
    title: "Evolución constante",
    description:
      "Aprendemos, medimos e iteramos. Lo que construimos hoy está diseñado para mejorar mañana.",
    icon: IconEvolve,
  },
  {
    id: "seguridad",
    title: "Seguridad por diseño",
    description:
      "La protección de datos y operaciones no es una capa final: es el punto de partida de todo proyecto.",
    icon: IconLock,
  },
] as const;
