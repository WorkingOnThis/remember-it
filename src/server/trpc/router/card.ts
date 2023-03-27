import { protectedProcedure } from "../trpc";
import { router } from "../trpc";
import { CardSchema } from "../../../types/card";
import { CardPaginationSchema } from "../../../types/card-pagination";
import { z } from "zod";

export const cardRouter = router({
  create: protectedProcedure
    .input(CardSchema)
    .mutation(async ({ ctx, input }) => {
      const { prisma, session } = ctx;
      const { cardValue, ...restValues } = input;
      await prisma.$transaction([
        prisma.card.create({ data: { ...restValues } }),
        prisma.cardValue.createMany({ data: cardValue }),
      ]);
      return "Card created";
    }),
  getValuesByCardId: protectedProcedure
    .input(z.object({ cardId: z.string().uuid() }))
    .query(async ({ ctx, input }) => {
      const { prisma, session } = ctx;
      const { cardId } = input;
      const cardValues = await prisma.cardValue.findMany({
        where: {
          cardId: cardId,
        },
        select: {
          id: true,
          value: true,
          fieldId: true,
        },
      });
      return cardValues;
    }),
  getBatch: protectedProcedure
    .input(CardPaginationSchema)
    .query(async ({ ctx, input }) => {
      const { prisma, session } = ctx;
      const { deckId, limit, skip, cursor } = input;
      const items = await prisma.card.findMany({
        take: limit + 1,
        skip: skip,
        cursor: cursor ? { id: cursor } : undefined,
        orderBy: {
          id: "asc",
        },
        where: {
          deckId,
        },
      });
      let nextCursor: typeof cursor | undefined = undefined;
      if (items.length > limit) {
        const nextItem = items.pop(); // return the last item from the array
        nextCursor = nextItem?.id;
      }
      return {
        items,
        nextCursor,
      };
    }),
});
