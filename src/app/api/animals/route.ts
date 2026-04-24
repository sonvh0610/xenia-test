import { NextResponse } from "next/server";

import { generateAnimals } from "@/lib/generate-animals";
import { zooAnimalsResponseSchema } from "@/schemas/zoo-animal";

// always dynamic — nothing to cache
export const dynamic = "force-dynamic";

export function GET() {
  const body = {
    animals: generateAnimals(20),
    generatedAt: new Date().toISOString(),
  };
  return NextResponse.json(zooAnimalsResponseSchema.parse(body));
}
