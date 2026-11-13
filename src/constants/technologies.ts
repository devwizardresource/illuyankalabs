import type { Technology } from "@/types/content";
import {
  TechAws,
  TechAzure,
  TechDocker,
  TechGithub,
  TechKubernetes,
  TechLinux,
  TechNext,
  TechNode,
  TechOpenAi,
  TechPostgres,
  TechPython,
  TechReact,
  TechTypeScript,
} from "@/icons/tech";

/**
 * `brandColor`: color oficial del logo, ajustado para leerse en ambos temas
 * (las marcas negras usan el color de texto del tema).
 */
export const TECHNOLOGIES: readonly Technology[] = [
  { id: "aws", name: "AWS", brandColor: "#ff9900", icon: TechAws },
  { id: "azure", name: "Azure", brandColor: "#0089d6", icon: TechAzure },
  { id: "docker", name: "Docker", brandColor: "#2496ed", icon: TechDocker },
  {
    id: "kubernetes",
    name: "Kubernetes",
    brandColor: "#326ce5",
    icon: TechKubernetes,
  },
  { id: "linux", name: "Linux", brandColor: "#fcc624", icon: TechLinux },
  { id: "python", name: "Python", brandColor: "#4b8bbe", icon: TechPython },
  {
    id: "typescript",
    name: "TypeScript",
    brandColor: "#3178c6",
    icon: TechTypeScript,
  },
  { id: "node", name: "Node.js", brandColor: "#5fa04e", icon: TechNode },
  { id: "react", name: "React", brandColor: "#61dafb", icon: TechReact },
  { id: "nextjs", name: "Next.js", brandColor: "var(--fg)", icon: TechNext },
  { id: "openai", name: "OpenAI", brandColor: "var(--fg)", icon: TechOpenAi },
  {
    id: "postgresql",
    name: "PostgreSQL",
    brandColor: "#4f8be8",
    icon: TechPostgres,
  },
  { id: "github", name: "GitHub", brandColor: "var(--fg)", icon: TechGithub },
] as const;
