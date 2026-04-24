import type { NeedLevel } from "@/schemas/zoo-animal";

export function needLabel(value: NeedLevel): "low" | "ok" | "high" {
  if (value >= 70) return "high";
  if (value >= 40) return "ok";
  return "low";
}
