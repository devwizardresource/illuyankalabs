import type { Service } from "@/types/content";
import {
  IconBot,
  IconCloud,
  IconCode,
  IconCompass,
  IconData,
  IconInfinity,
  IconNeural,
  IconShield,
} from "@/icons/services";

/** Ordenados por demanda: software, IA y automatización primero. */
export const SERVICES: readonly Service[] = [
  {
    id: "software",
    title: "Desarrollo de software a la medida",
    outcome: "Un sistema hecho para tu forma de trabajar.",
    description:
      "Aplicaciones web, móviles e integraciones que se adaptan a tus procesos y crecen con tu negocio.",
    capabilities: [
      "Aplicaciones web y móviles",
      "Conexión entre tus sistemas (APIs)",
      "Arquitectura lista para crecer",
    ],
    cta: "Quiero mi software a la medida",
    icon: IconCode,
  },
  {
    id: "ia",
    title: "Inteligencia artificial",
    outcome: "Respuestas y decisiones más rápidas.",
    description:
      "Asistentes que responden con la información de tu empresa y agentes que hacen tareas por tu equipo.",
    capabilities: [
      "Asistentes con los datos de tu empresa",
      "Lectura de documentos e imágenes",
      "Agentes que ejecutan tareas",
    ],
    cta: "Quiero aplicar IA en mi empresa",
    icon: IconNeural,
  },
  {
    id: "automatizacion",
    title: "Automatización de procesos",
    outcome: "Menos tareas repetitivas, menos errores.",
    description:
      "Conectamos tus herramientas y automatizamos flujos de trabajo para que tu equipo se enfoque en lo importante.",
    capabilities: [
      "Bots para tareas repetitivas (RPA)",
      "Conexión entre tus aplicaciones",
      "Flujos inteligentes con IA",
    ],
    cta: "Quiero automatizar mis procesos",
    icon: IconBot,
  },
  {
    id: "cloud",
    title: "Nube (cloud)",
    outcome: "Infraestructura que crece sin sorpresas en la factura.",
    description:
      "Llevamos tus sistemas a AWS o Azure de forma segura y con los costos bajo control.",
    capabilities: [
      "Migración a la nube",
      "Servicios que escalan solos (serverless)",
      "Control de costos en la nube (FinOps)",
    ],
    cta: "Quiero llevar mi operación a la nube",
    icon: IconCloud,
  },
  {
    id: "data-science",
    title: "Ciencia de datos",
    outcome: "Decisiones basadas en datos, no en intuición.",
    description:
      "Ordenamos tu información y la convertimos en predicciones y reportes claros para la gerencia.",
    capabilities: [
      "Datos centralizados y confiables",
      "Modelos que anticipan tendencias",
      "Tableros de indicadores (dashboards)",
    ],
    cta: "Quiero sacar valor de mis datos",
    icon: IconData,
  },
  {
    id: "ciberseguridad",
    title: "Ciberseguridad",
    outcome: "Tu información y tu operación, protegidas.",
    description:
      "Encontramos y cerramos las brechas de seguridad antes de que alguien las aproveche.",
    capabilities: [
      "Ataques simulados y controlados (pentesting)",
      "Blindaje de servidores y sistemas (hardening)",
      "Cumplimiento de normas de seguridad",
    ],
    cta: "Quiero evaluar mi seguridad",
    icon: IconShield,
  },
  {
    id: "devops",
    title: "DevOps y plataforma",
    outcome: "Actualizaciones frecuentes sin detener tu operación.",
    description:
      "Automatizamos la publicación de tu software y lo monitoreamos para detectar fallas a tiempo.",
    capabilities: [
      "Publicación automática de versiones (CI/CD)",
      "Contenedores con Kubernetes",
      "Monitoreo continuo y alertas",
    ],
    cta: "Quiero publicar sin interrupciones",
    icon: IconInfinity,
  },
  {
    id: "consultoria",
    title: "Consultoría tecnológica",
    outcome: "Inversiones en tecnología con menos riesgo.",
    description:
      "Te ayudamos a decidir qué construir, en qué orden y con qué arquitectura antes de invertir.",
    capabilities: [
      "Diseño de arquitectura",
      "Hoja de ruta tecnológica",
      "Evaluación técnica de plataformas (due diligence)",
    ],
    cta: "Quiero asesoría antes de invertir",
    icon: IconCompass,
  },
] as const;

/** Opciones del campo "tipo de proyecto" del formulario de contacto. */
export const PROJECT_TYPES: readonly { value: string; label: string }[] = [
  ...SERVICES.map((service) => ({ value: service.id, label: service.title })),
  { value: "otro", label: "Otro / aún no lo sé" },
];
