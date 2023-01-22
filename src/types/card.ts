import { z } from "zod";

const CardSchema = z.object({
  id: z.string().min(1),
  deckId: z.string().min(1),
  front: z.string().min(1),
  back: z.string().min(1),
  metadata: z.object({
    type: z.string().min(1),
    priority: z.number().min(1),
    refined: z.string().min(1),
    version: z.string().min(1),
  }),
});

type Card = z.infer<typeof CardSchema>;
export { CardSchema, type Card };
