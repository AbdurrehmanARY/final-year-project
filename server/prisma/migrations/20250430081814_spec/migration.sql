/*
  Warnings:

  - You are about to drop the column `productImage` on the `Products` table. All the data in the column will be lost.
  - Added the required column `battery` to the `Products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `category` to the `Products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `charging` to the `Products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sku` to the `Products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stockStatus` to the `Products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `usbPort` to the `Products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Products" DROP COLUMN "productImage",
ADD COLUMN     "backCamera" TEXT,
ADD COLUMN     "battery" TEXT NOT NULL,
ADD COLUMN     "category" TEXT NOT NULL,
ADD COLUMN     "charging" TEXT NOT NULL,
ADD COLUMN     "colors" TEXT[],
ADD COLUMN     "displaySize" TEXT,
ADD COLUMN     "displaytype" TEXT,
ADD COLUMN     "frontCamera" TEXT,
ADD COLUMN     "image" TEXT[],
ADD COLUMN     "network" TEXT,
ADD COLUMN     "os" TEXT,
ADD COLUMN     "processor" TEXT,
ADD COLUMN     "refreshRate" TEXT,
ADD COLUMN     "resolution" TEXT,
ADD COLUMN     "sim" TEXT,
ADD COLUMN     "sku" TEXT NOT NULL,
ADD COLUMN     "stockStatus" TEXT NOT NULL,
ADD COLUMN     "storage" TEXT,
ADD COLUMN     "untututu" TEXT,
ADD COLUMN     "usbPort" TEXT NOT NULL;
