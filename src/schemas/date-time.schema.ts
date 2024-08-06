import { z } from "zod";

export const DateTimeSchema = z.object({
  utcTime: z.string(),
  dayOfTheWeek: z.string(),
  dayOfTheMonth: z.string(),
  month: z.string(),
  year: z.number(),
});

export type TDateTime = z.infer<typeof DateTimeSchema>;
