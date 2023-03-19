import { z } from "zod";

const CardValueSchema = z.object({
  id: z.string().uuid(),
  value: z.string().min(1),
  fieldId: z.string().uuid(),
  cardId: z.string().uuid(),
});

type CardValue = z.infer<typeof CardValueSchema>;
export { CardValueSchema, type CardValue };
