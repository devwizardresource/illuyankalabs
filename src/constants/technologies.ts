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

export const TECHNOLOGIES: readonly Technology[] = [
  { id: "aws", name: "AWS", brandColor: "#ff9900", icon: TechAws },
  { id: "azure", name: "Azure", brandColor: "#0f80d7", icon: TechAzure },
  { id: "docker", name: "Docker", brandColor: "#2496ed", icon: TechDocker },
  {
    id: "kubernetes",
    name: "Kubernetes",
    brandColor: "#326ce5",
    icon: TechKubernetes,
  },
  { id: "linux", name: "Linux", brandColor: "#f5c518", icon: TechLinux },
  { id: "python", name: "Python", brandColor: "#4b8bbe", icon: TechPython },
  {
    id: "typescript",
    name: "TypeScript",
    brandColor: "#3178c6",
    icon: TechTypeScript,
  },
  { id: "node", name: "Node.js", brandColor: "#5fa04e", icon: TechNode },
  { id: "react", name: "React", brandColor: "#61dafb", icon: TechReact },
  { id: "nextjs", name: "Next.js", brandColor: "#8b98a5", icon: TechNext },
  { id: "openai", name: "OpenAI", brandColor: "#10a37f", icon: TechOpenAi },
  {
    id: "postgresql",
    name: "PostgreSQL",
    brandColor: "#699eca",
    icon: TechPostgres,
  },
  { id: "github", name: "GitHub", brandColor: "#8b98a5", icon: TechGithub },
] as const;
