import { z } from "zod";

export const needLevelSchema = z.number().int().min(0).max(100);

export const zooAnimalSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1),
  species: z.string().min(1),
  enclosure: z.string().min(1),
  hunger: needLevelSchema,
  thirst: needLevelSchema,
  hygiene: needLevelSchema,
  notes: z.string(),
});

export const zooAnimalsResponseSchema = z.object({
  animals: z.array(zooAnimalSchema),
  generatedAt: z.string().datetime(),
});

export type ZooAnimal = z.infer<typeof zooAnimalSchema>;
export type NeedLevel = z.infer<typeof needLevelSchema>;
export type ZooAnimalsResponse = z.infer<typeof zooAnimalsResponseSchema>;
