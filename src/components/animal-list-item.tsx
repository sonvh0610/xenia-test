import type { ZooAnimal } from "@/schemas/zoo-animal";
import { AnimalNeedMeters } from "@/components/animal-need-meters";

type AnimalListItemProps = {
  animal: ZooAnimal;
  onSelect: (animal: ZooAnimal) => void;
};

export function AnimalListItem({ animal, onSelect }: AnimalListItemProps) {
  return (
    <li>
      <button
        type="button"
        onClick={() => onSelect(animal)}
        className="group w-full cursor-pointer rounded-xl border border-[var(--border)] bg-[var(--card)]/80 p-5 text-left transition hover:border-sky-500/40 hover:bg-[var(--card)]"
      >
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-lg font-medium">{animal.name}</p>
            <p className="text-sm text-[var(--muted)]">{animal.species}</p>
            <p className="mt-1 text-xs uppercase tracking-wide text-sky-300/80">
              {animal.enclosure}
            </p>
          </div>
          <span className="text-xs text-[var(--muted)]">more</span>
        </div>
        <div className="mt-4">
          <AnimalNeedMeters
            compact
            hunger={animal.hunger}
            thirst={animal.thirst}
            hygiene={animal.hygiene}
          />
        </div>
      </button>
    </li>
  );
}
