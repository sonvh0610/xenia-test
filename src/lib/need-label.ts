import type { NeedLevel } from "@/schemas/zoo-animal";

/**
 * Maps a numerical need score to a categorized severity level to provide a quick visual or logical indicator of an animal's status.
 */
export function needLabel(value: NeedLevel): "low" | "ok" | "high" {
  if (value >= 70) return "high";
  if (value >= 40) return "ok";
  return "low";
}
