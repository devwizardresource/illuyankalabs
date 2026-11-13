import type { FaqItem } from "@/types/content";

/**
 * Preguntas frecuentes: resuelven dudas reales antes del contacto y
 * alimentan el JSON-LD FAQPage (búsquedas sobre soluciones tecnológicas).
 */
export const FAQ_ITEMS: readonly FaqItem[] = [
  {
    id: "que-hacen",
    question: "¿Qué soluciones tecnológicas ofrece ILLUYANKA LABS?",
    answer:
      "Desarrollamos software a la medida (web, móvil e integraciones), automatizamos procesos, implementamos inteligencia artificial, migramos y operamos sistemas en la nube, hacemos ciencia de datos, ciberseguridad, DevOps y consultoría tecnológica.",
  },
  {
    id: "para-quien",
    question: "¿Trabajan con empresas privadas y con entidades públicas?",
    answer:
      "Sí. Acompañamos a empresas privadas de cualquier tamaño, entidades públicas, instituciones educativas y startups, en Colombia y en otros países.",
  },
  {
    id: "automatizacion",
    question: "¿Qué procesos de mi empresa se pueden automatizar?",
    answer:
      "Casi cualquier tarea repetitiva: registro de pedidos, facturación, conciliaciones, reportes, lectura de documentos, respuestas a clientes y conexión entre aplicaciones que hoy se alimentan a mano.",
  },
  {
    id: "ia",
    question: "¿Cómo puede la inteligencia artificial ayudar a mi negocio?",
    answer:
      "Con asistentes que responden usando la información de tu empresa, agentes que ejecutan tareas, chatbots para web o WhatsApp y lectura automática de documentos e imágenes. Siempre con un objetivo medible.",
  },
  {
    id: "ia-humana",
    question: "¿Cómo combinan la IA con su equipo de desarrollo?",
    answer:
      "Trabajamos con IA e inteligencia humana: la IA acelera el desarrollo y nuestro equipo diseña la arquitectura, revisa el código, lo prueba en laboratorio y responde por el resultado.",
  },
  {
    id: "terceros",
    question: "¿Usan tecnologías de terceros?",
    answer:
      "Sí, construimos sobre tecnologías líderes como AWS, Azure, OpenAI, Python o React, pero no revendemos productos de terceros: desarrollamos la solución que tu organización necesita.",
  },
  {
    id: "costo",
    question: "¿Cuánto cuesta un proyecto de software o automatización?",
    answer:
      "Depende del alcance. Tras una primera conversación sin costo te presentamos el plan, los tiempos y la inversión antes de empezar, sin sorpresas.",
  },
] as const;
