-- CreateTable
CREATE TABLE "DefaultDeck" (
    "userId" TEXT NOT NULL,
    "deckId" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "DefaultDeck_userId_key" ON "DefaultDeck"("userId");

-- AddForeignKey
ALTER TABLE "DefaultDeck" ADD CONSTRAINT "DefaultDeck_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DefaultDeck" ADD CONSTRAINT "DefaultDeck_deckId_fkey" FOREIGN KEY ("deckId") REFERENCES "Deck"("id") ON DELETE CASCADE ON UPDATE CASCADE;
