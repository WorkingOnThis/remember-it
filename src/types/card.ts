import { z } from "zod";
import { CardValueSchema } from "./card-value";

const CardSchema = z.object({
  id: z.string().uuid(),
  deckId: z.string().uuid(),
  schemaId: z.string().uuid(),
  state: z.string().min(1),
  cardValue: z.object(CardValueSchema.shape).array(),
});

type Card = z.infer<typeof CardSchema>;
export { CardSchema, type Card };
