import { z } from "zod";

export const personInISSSchema = z.object({
  name: z.string(),
  craft: z.literal("ISS"),
});

export type TPersonInISS = z.infer<typeof personInISSSchema>;
