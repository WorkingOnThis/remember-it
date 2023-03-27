import { protectedProcedure } from "../trpc";
import { router } from "../trpc";
import { z } from "zod";

export const studySessionRouter = router({
  getCards: protectedProcedure
    .input(z.object({ studySessionId: z.string() }))
    .query(async ({ ctx, input }) => {
      const { prisma, session } = ctx;
      const { studySessionId } = input;

      const studySession = await prisma.studySession.findUnique({
        where: {
          id: studySessionId,
        },
        select: {
          deckId: true,
        },
      });

      if (!studySession) {
        throw new Error("Study session not found");
      }

      const listCardId = await prisma.card.findMany({
        where: {
          deckId: studySession.deckId,
        },
        select: {
          id: true,
        },
      });

      return listCardId;
    }),
});
