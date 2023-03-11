import { FieldSchema } from "../../../types/field";
import { protectedProcedure } from "../trpc";
import { router } from "../trpc";

export const fieldRouter = router({
  getAllBySchemaId: protectedProcedure
    .input(FieldSchema.pick({ id: true }))
    .query(async ({ ctx, input }) => {
      const { prisma, session } = ctx;
      const fields = await prisma.field.findMany({
        where: {
          schemaId: input.id,
        },
      });
      return fields;
    }),
});
