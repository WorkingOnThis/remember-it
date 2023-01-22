import { z } from "zod";

const DeckSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(2, { message: "Name should have at least 2 letters" }),
  description: z.string().min(1),
});
const NoIDDeckSchema = DeckSchema.omit({ id: true });

type Deck = z.infer<typeof DeckSchema>;

export { DeckSchema, NoIDDeckSchema, type Deck };
