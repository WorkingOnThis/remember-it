import { router } from "../trpc";
import { authRouter } from "./auth";
import { deckRouter } from "./deck";
import { fieldRouter } from "./field";
import { schemaRouter } from "./schema";

export const appRouter = router({
  auth: authRouter,
  deck: deckRouter,
  schema: schemaRouter,
  field: fieldRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
