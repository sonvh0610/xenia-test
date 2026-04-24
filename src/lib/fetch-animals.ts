import { zooAnimalsResponseSchema } from "@/schemas/zoo-animal";

export async function fetchAnimals() {
  const res = await fetch("/api/animals", { cache: "no-store" });
  if (!res.ok) {
    throw new Error(`GET /api/animals → ${res.status}`);
  }
  const data: unknown = await res.json();
  return zooAnimalsResponseSchema.parse(data);
}
