/*
  Warnings:

  - You are about to drop the column `backCamera` on the `Products` table. All the data in the column will be lost.
  - You are about to drop the column `battery` on the `Products` table. All the data in the column will be lost.
  - You are about to drop the column `charging` on the `Products` table. All the data in the column will be lost.
  - You are about to drop the column `displaySize` on the `Products` table. All the data in the column will be lost.
  - You are about to drop the column `displaytype` on the `Products` table. All the data in the column will be lost.
  - You are about to drop the column `frontCamera` on the `Products` table. All the data in the column will be lost.
  - You are about to drop the column `network` on the `Products` table. All the data in the column will be lost.
  - You are about to drop the column `os` on the `Products` table. All the data in the column will be lost.
  - You are about to drop the column `processor` on the `Products` table. All the data in the column will be lost.
  - You are about to drop the column `refreshRate` on the `Products` table. All the data in the column will be lost.
  - You are about to drop the column `resolution` on the `Products` table. All the data in the column will be lost.
  - You are about to drop the column `sim` on the `Products` table. All the data in the column will be lost.
  - You are about to drop the column `storage` on the `Products` table. All the data in the column will be lost.
  - You are about to drop the column `untututu` on the `Products` table. All the data in the column will be lost.
  - You are about to drop the column `usbPort` on the `Products` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Products" DROP COLUMN "backCamera",
DROP COLUMN "battery",
DROP COLUMN "charging",
DROP COLUMN "displaySize",
DROP COLUMN "displaytype",
DROP COLUMN "frontCamera",
DROP COLUMN "network",
DROP COLUMN "os",
DROP COLUMN "processor",
DROP COLUMN "refreshRate",
DROP COLUMN "resolution",
DROP COLUMN "sim",
DROP COLUMN "storage",
DROP COLUMN "untututu",
DROP COLUMN "usbPort",
ADD COLUMN     "specs" JSONB,
ALTER COLUMN "price" DROP NOT NULL,
ALTER COLUMN "salePrice" DROP NOT NULL,
ALTER COLUMN "stock" DROP NOT NULL,
ALTER COLUMN "stockStatus" DROP NOT NULL;
