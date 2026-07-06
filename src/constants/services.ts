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

export const SERVICES: readonly Service[] = [
  {
    id: "software",
    title: "Desarrollo de Software",
    description:
      "Productos web, móviles y APIs a la medida, diseñados para escalar con tu negocio desde el primer despliegue.",
    capabilities: ["Web y móvil", "APIs y microservicios", "Arquitectura evolutiva"],
    icon: IconCode,
  },
  {
    id: "ia",
    title: "Inteligencia Artificial",
    description:
      "Integramos modelos de lenguaje, visión computacional y agentes inteligentes que generan valor medible.",
    capabilities: ["LLMs y RAG", "Visión computacional", "Copilotos a medida"],
    icon: IconNeural,
  },
  {
    id: "cloud",
    title: "Cloud Computing",
    description:
      "Infraestructura segura, elástica y de alto rendimiento en AWS y Azure, con costos bajo control.",
    capabilities: ["Migraciones", "Serverless e IaC", "FinOps"],
    icon: IconCloud,
  },
  {
    id: "automatizacion",
    title: "Automatización",
    description:
      "Orquestamos procesos y flujos de trabajo inteligentes que eliminan tareas repetitivas y errores humanos.",
    capabilities: ["RPA e integraciones", "Orquestación", "Flujos con IA"],
    icon: IconBot,
  },
  {
    id: "data-science",
    title: "Ciencia de Datos",
    description:
      "Convertimos datos dispersos en analítica accionable, modelos predictivos y tableros ejecutivos.",
    capabilities: ["Pipelines de datos", "ML predictivo", "Dashboards"],
    icon: IconData,
  },
  {
    id: "devops",
    title: "DevOps y Plataforma",
    description:
      "Entrega continua con Kubernetes, observabilidad y prácticas SRE para desplegar sin fricción ni downtime.",
    capabilities: ["CI/CD", "Kubernetes", "Observabilidad y SRE"],
    icon: IconInfinity,
  },
  {
    id: "consultoria",
    title: "Consultoría Tecnológica",
    description:
      "Acompañamos decisiones estratégicas: arquitectura, roadmap tecnológico y auditorías de plataformas.",
    capabilities: ["Arquitectura", "Roadmap digital", "Due diligence"],
    icon: IconCompass,
  },
  {
    id: "ciberseguridad",
    title: "Ciberseguridad",
    description:
      "Protegemos tu operación con auditorías, pruebas de penetración y seguridad por diseño en cada capa.",
    capabilities: ["Pentesting", "Hardening", "Cumplimiento"],
    icon: IconShield,
  },
] as const;
