import type { ZooAnimal } from "@/schemas/zoo-animal";

const names = [
  "Raja",
  "Kiri",
  "Nova",
  "Bao",
  "Zephyr",
  "Miko",
  "Kito",
  "Nala",
  "Finn",
  "Zara",
  "Orion",
  "Luna",
  "Cairo",
  "Ivy",
  "Rowan",
  "Juno",
  "Atlas",
  "Willow",
  "Kora",
  "Kai",
  "Dante",
] as const;

const species = [
  "Bengal Tiger",
  "Red Panda",
  "African Lion",
  "Snow Leopard",
  "Blue Macaw",
  "Ring-tailed Lemur",
  "Capybara",
  "Giraffe",
  "Blue Poison Dart Frog",
  "African Elephant",
  "Reticulated Python",
  "Sloth",
  "Flamingo",
  "Cheetah",
  "Gorilla",
  "Giant Tortoise",
  "Hippopotamus",
  "Okapi",
] as const;

const enclosures = [
  "Savanna",
  "Rainforest",
  "Alpine",
  "Wetlands",
  "Reptile House",
  "Aviary",
  "Primate Trail",
] as const;

const noteSnippets = [
  "Does ok with the usual routine.",
  "Eats more in the morning before the crowd.",
  "Tried a new box yesterday — went fine.",
  "Shedding / dandruff — keep an eye.",
  "Bit slow on water yesterday afternoon.",
] as const;

function randomItem<T extends readonly string[]>(arr: T): T[number] {
  return arr[Math.floor(Math.random() * arr.length)]!;
}

function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function makeId(): string {
  return crypto.randomUUID();
}

/**
 * Provides a reliable source of mock data for development and testing environments, allowing the team to work on UI components without relying on a functional backend or database.
 */
export function generateAnimals(count: number = 20): ZooAnimal[] {
  return Array.from({ length: count }, () => ({
    id: makeId(),
    name: randomItem(names),
    species: randomItem(species),
    enclosure: randomItem(enclosures),
    hunger: randomInt(0, 100) as ZooAnimal["hunger"],
    thirst: randomInt(0, 100) as ZooAnimal["thirst"],
    hygiene: randomInt(0, 100) as ZooAnimal["hygiene"],
    notes: [randomItem(noteSnippets), randomItem(noteSnippets)].join(" "),
  }));
}
