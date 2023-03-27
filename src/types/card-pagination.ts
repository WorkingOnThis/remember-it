import { z } from "zod";

const CardPaginationSchema = z.object({
  deckId: z.string().uuid(),
  limit: z.number(),
  cursor: z.string().nullish(),
  skip: z.number().optional(),
});

type CardPagination = z.infer<typeof CardPaginationSchema>;

export { CardPaginationSchema, type CardPagination };
