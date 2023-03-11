import { protectedProcedure } from "../trpc";
import { router } from "../trpc";
import { TemplateSchema } from "../../../types/schema";

export const schemaRouter = router({
  create: protectedProcedure
    .input(TemplateSchema)
    .mutation(async ({ ctx, input }) => {
      const { prisma, session } = ctx;
      const { id, name, fields } = input;
      await prisma.schema.create({
        data: {
          id,
          name,
          user: {
            connect: {
              id: session.user.id,
            },
          },
          fields: {
            create: fields,
          },
        },
      });
      return "Schema created";
    }),
  getNamesByUser: protectedProcedure.query(async ({ ctx }) => {
    const { prisma, session } = ctx;
    const schemaNames = await prisma.schema.findMany({
      where: {
        userId: session.user.id,
      },
      select: {
        id: true,
        name: true,
      },
    });
    return schemaNames;
  }),
});
