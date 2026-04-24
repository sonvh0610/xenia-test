import { AnimalListItem } from "@/components/animal-list-item";
import type { ZooAnimal } from "@/schemas/zoo-animal";

type AnimalListProps = {
  animals: ZooAnimal[];
  onSelect: (animal: ZooAnimal) => void;
};

export function AnimalList({ animals, onSelect }: AnimalListProps) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2" aria-label="Zoo animals">
      {animals.map((animal) => (
        <AnimalListItem
          key={animal.id}
          animal={animal}
          onSelect={onSelect}
        />
      ))}
    </ul>
  );
}
