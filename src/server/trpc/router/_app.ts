import { router } from "../trpc";
import { authRouter } from "./auth";
import { cardRouter } from "./card";
import { deckRouter } from "./deck";
import { fieldRouter } from "./field";
import { schemaRouter } from "./schema";
import { studySessionRouter } from "./study-session";

export const appRouter = router({
  auth: authRouter,
  deck: deckRouter,
  schema: schemaRouter,
  field: fieldRouter,
  card: cardRouter,
  studySession: studySessionRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
