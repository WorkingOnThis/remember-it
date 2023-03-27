import { z } from "zod";

const CardValueSchema = z.object({
  id: z.string().uuid(),
  value: z.string().min(2, { message: "value should have at least 2 letters" }),
  fieldId: z.string().uuid(),
  cardId: z.string().uuid(),
});

const CardValuesSchema = z.object({
  cardValues: z.array(CardValueSchema),
});

type CardValue = z.infer<typeof CardValueSchema>;
export { CardValueSchema, CardValuesSchema, type CardValue };
