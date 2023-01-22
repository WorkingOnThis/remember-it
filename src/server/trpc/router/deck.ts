import { protectedProcedure } from "./../trpc";
import { router } from "../trpc";
import { DeckSchema } from "../../../types/deck";

export const deckRouter = router({
  create: protectedProcedure.input(DeckSchema).mutation(({ ctx, input }) => {
    const { prisma, session } = ctx;
    return prisma.deck.create({
      data: {
        ...input,
        user: {
          connect: {
            id: session.user.id,
          },
        },
      },
    });
  }),
});
