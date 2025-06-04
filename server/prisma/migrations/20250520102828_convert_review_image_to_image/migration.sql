/*
  Warnings:

  - You are about to drop the column `reviewImage` on the `ProductReview` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ProductReview" DROP COLUMN "reviewImage",
ADD COLUMN     "images" TEXT[];
