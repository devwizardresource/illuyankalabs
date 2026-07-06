import type { Stat } from "@/types/content";
import { IconCode, IconShield } from "@/icons/services";
import { IconClock, IconUsers } from "@/icons/ui";

export const STATS: readonly Stat[] = [
  {
    id: "clientes",
    value: 1,
    decimals: 0,
    suffix: "",
    label: "Clientes satisfechos",
    icon: IconUsers,
  },
  {
    id: "proyectos",
    value: 2,
    decimals: 0,
    suffix: "",
    label: "Proyectos realizados",
    icon: IconCode,
  },
  {
    id: "respuesta",
    value: 1.2,
    decimals: 1,
    suffix: "h",
    label: "Tiempo de respuesta",
    icon: IconClock,
  },
  {
    id: "disponibilidad",
    value: 99.9,
    decimals: 1,
    suffix: "%",
    label: "Disponibilidad 24/7",
    icon: IconShield,
  },
] as const;
