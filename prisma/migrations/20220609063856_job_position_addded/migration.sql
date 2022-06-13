/*
  Warnings:

  - Added the required column `jopPosition` to the `Friends` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Friends" ADD COLUMN     "jopPosition" TEXT NOT NULL;
