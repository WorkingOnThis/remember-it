import { router } from "../trpc";
import { authRouter } from "./auth";
import { deckRouter } from "./deck";

export const appRouter = router({
  auth: authRouter,
  deck: deckRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
