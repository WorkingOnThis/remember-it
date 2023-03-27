-- CreateTable
CREATE TABLE "StudySession" (
    "id" TEXT NOT NULL,
    "deckId" TEXT NOT NULL,
    "evaluationType" TEXT,

    CONSTRAINT "StudySession_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "StudySession" ADD CONSTRAINT "StudySession_deckId_fkey" FOREIGN KEY ("deckId") REFERENCES "Deck"("id") ON DELETE CASCADE ON UPDATE CASCADE;
