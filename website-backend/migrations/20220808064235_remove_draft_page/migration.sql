/*
  Warnings:

  - You are about to drop the `DraftPage` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_DraftPage_relatedPages` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "DraftPage" DROP CONSTRAINT "DraftPage_published_fkey";

-- DropForeignKey
ALTER TABLE "_DraftPage_relatedPages" DROP CONSTRAINT "_DraftPage_relatedPages_A_fkey";

-- DropForeignKey
ALTER TABLE "_DraftPage_relatedPages" DROP CONSTRAINT "_DraftPage_relatedPages_B_fkey";

-- AlterTable
ALTER TABLE "Article" ADD COLUMN     "pageImage" JSONB;

-- DropTable
DROP TABLE "DraftPage";

-- DropTable
DROP TABLE "_DraftPage_relatedPages";
