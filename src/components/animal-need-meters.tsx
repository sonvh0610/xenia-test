"use client";

import { needLabel } from "@/lib/need-label";
import type { NeedLevel } from "@/schemas/zoo-animal";

type AnimalNeedMetersProps = {
  hunger: NeedLevel;
  thirst: NeedLevel;
  hygiene: NeedLevel;
  compact?: boolean;
};

const barColor: Record<ReturnType<typeof needLabel>, string> = {
  low: "bg-emerald-500/80",
  ok: "bg-amber-400/80",
  high: "bg-rose-500/85",
};

function Meter({ label, value }: { label: string; value: NeedLevel }) {
  // Grab the right color category based on how high the need is
  const level = needLabel(value);
  return (
    <div>
      <div className="mb-1 flex items-center justify-between text-xs text-[var(--muted)]">
        <span>{label}</span>
        <span className="uppercase tabular-nums text-[--foreground]">
          {value}%
        </span>
      </div>
      <div
        className="h-1.5 w-full overflow-hidden rounded-full bg-white/5"
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${label} need`}
      >
        <div
          className={`h-full ${barColor[level]} transition-[width] duration-300`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

/**
 * Visualizes the various physical needs of an animal (hunger, thirst, hygiene) using progress bars or compact numerical displays to aid zookeepers in prioritizing care.
 */
export function AnimalNeedMeters({
  hunger,
  thirst,
  hygiene,
  compact = false,
}: AnimalNeedMetersProps) {
  // The compact view is just text, used in the small cards to save space
  if (compact) {
    return (
      <div className="grid grid-cols-3 gap-2 text-xs">
        <div>
          <p className="text-[var(--muted)]">Hunger</p>
          <p className="font-medium tabular-nums">{hunger}</p>
        </div>
        <div>
          <p className="text-[var(--muted)]">Thirst</p>
          <p className="font-medium tabular-nums">{thirst}</p>
        </div>
        <div>
          <p className="text-[var(--muted)]">Hygiene</p>
          <p className="font-medium tabular-nums">{hygiene}</p>
        </div>
      </div>
    );
  }
  return (
    <div className="space-y-3">
      <Meter label="Hunger" value={hunger} />
      <Meter label="Thirst" value={thirst} />
      <Meter label="Hygiene" value={hygiene} />
    </div>
  );
}
