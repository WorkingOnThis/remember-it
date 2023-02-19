import { z } from "zod";

const DeckSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(2, { message: "Name should have at least 2 letters" }),
  description: z.string().nullable(),
});
const NoIDDeckSchema = DeckSchema.omit({ id: true });

type Deck = z.infer<typeof DeckSchema>;

const listDeckSchema = z.object({
  defaultDeck: z.string().uuid(),
  decks: z.array(DeckSchema),
});

type ListDecks = z.infer<typeof listDeckSchema>;

export {
  DeckSchema,
  NoIDDeckSchema,
  listDeckSchema,
  type Deck,
  type ListDecks,
};
