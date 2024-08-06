import { z } from "zod";

export const personInSpaceSchema = z.object({
  name: z.string(),
  craft: z.string(),
});

export type TPersonInSpace = z.infer<typeof personInSpaceSchema>;
