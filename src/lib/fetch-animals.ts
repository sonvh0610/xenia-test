import { zooAnimalsResponseSchema } from "@/schemas/zoo-animal";

/**
 * Abstracts the network request and schema validation layer for retrieving zoo animals, ensuring that any external data entering the application is strictly typed and validated before use.
 */
export async function fetchAnimals() {
  const res = await fetch("/api/animals", { cache: "no-store" });
  if (!res.ok) {
    throw new Error(`GET /api/animals → ${res.status}`);
  }
  const data: unknown = await res.json();
  return zooAnimalsResponseSchema.parse(data);
}
