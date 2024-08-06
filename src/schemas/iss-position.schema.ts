import { z } from "zod";

export const ISSPositionSchema = z.object({
  latitude: z.number(),
  longitude: z.number(),
});

export type TISSPosition = z.infer<typeof ISSPositionSchema>;
