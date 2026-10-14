import type { ProcessStep } from "@/types/content";

export const PROCESS_STEPS: readonly ProcessStep[] = [
  {
    id: "diagnostico",
    title: "Diagnóstico",
    description:
      "Escuchamos tu reto, revisamos tus procesos y definimos qué resultado debe lograr la solución.",
  },
  {
    id: "arquitectura",
    title: "Arquitectura y diseño",
    description:
      "Diseñamos una base segura y escalable. Antes de empezar, te mostramos el plan, los tiempos y la inversión.",
  },
  {
    id: "desarrollo",
    title: "Desarrollo y pruebas en laboratorio",
    description:
      "Construimos con entregas parciales que puedes ver y probar. Nada sale sin pasar por nuestro laboratorio.",
  },
  {
    id: "entrega",
    title: "Entrega y acompañamiento",
    description:
      "Ponemos la solución en marcha, capacitamos a tu equipo y la seguimos mejorando contigo.",
  },
] as const;
