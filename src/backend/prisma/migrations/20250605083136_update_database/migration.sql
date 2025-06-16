-- AlterTable
ALTER TABLE "Question" ADD COLUMN     "score" INTEGER NOT NULL DEFAULT 1;

-- AlterTable
ALTER TABLE "StudentExam" ALTER COLUMN "score" SET DATA TYPE TEXT;
