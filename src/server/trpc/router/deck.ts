import { protectedProcedure } from "./../trpc";
import { router } from "../trpc";
import { DeckSchema, listDeckSchema } from "../../../types/deck";

export const deckRouter = router({
  create: protectedProcedure
    .input(DeckSchema)
    .mutation(async ({ ctx, input }) => {
      const { prisma, session } = ctx;
      await prisma.deck.create({
        data: {
          ...input,
          user: {
            connect: {
              id: session.user.id,
            },
          },
        },
      });
      return "Deck created";
    }),
  getAll: protectedProcedure.query(async ({ ctx }) => {
    const { prisma, session } = ctx;
    const defaultDeck = await prisma.defaultDeck.findFirstOrThrow({
      where: {
        userId: session.user.id,
      },
      select: {
        deckId: true,
      },
    });
    const decks = await prisma.deck.findMany({
      where: {
        userId: session.user.id,
      },
      select: {
        id: true,
        name: true,
        description: true,
      },
    });
    return {
      defaultDeck: defaultDeck.deckId,
      decks: decks,
    };
  }),

  updateDefault: protectedProcedure
    .input(DeckSchema.pick({ id: true }))
    .mutation(async ({ ctx, input }) => {
      const { prisma, session } = ctx;
      await prisma.defaultDeck.update({
        where: {
          userId: session.user.id,
        },
        data: {
          deckId: input.id,
        },
      });
      return "default deck updated";
    }),
});
