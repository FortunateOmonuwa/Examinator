/*
  Warnings:

  - Added the required column `type` to the `Question` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "QuestionType" AS ENUM ('SINGLE_CHOICE', 'MULTICHOICE', 'TEXT');

-- AlterTable
ALTER TABLE "Question" ADD COLUMN     "expectedAnswer" TEXT,
ADD COLUMN     "type" "QuestionType" NOT NULL;
