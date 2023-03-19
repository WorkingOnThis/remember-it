/*
  Warnings:

  - You are about to drop the `FieldValue` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "FieldValue" DROP CONSTRAINT "FieldValue_cardId_fkey";

-- DropForeignKey
ALTER TABLE "FieldValue" DROP CONSTRAINT "FieldValue_fieldId_fkey";

-- DropTable
DROP TABLE "FieldValue";

-- CreateTable
CREATE TABLE "CardValue" (
    "id" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "fieldId" TEXT NOT NULL,
    "cardId" TEXT NOT NULL,

    CONSTRAINT "CardValue_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CardValue" ADD CONSTRAINT "CardValue_fieldId_fkey" FOREIGN KEY ("fieldId") REFERENCES "Field"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CardValue" ADD CONSTRAINT "CardValue_cardId_fkey" FOREIGN KEY ("cardId") REFERENCES "Card"("id") ON DELETE CASCADE ON UPDATE CASCADE;
