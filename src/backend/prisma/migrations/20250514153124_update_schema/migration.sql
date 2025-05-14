/*
  Warnings:

  - You are about to drop the column `isAvailable` on the `Exam` table. All the data in the column will be lost.
  - Added the required column `enforceTimeLimit` to the `Exam` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stipulatedTime` to the `Exam` table without a default value. This is not possible if the table is not empty.
  - Added the required column `timeSpent` to the `Exam` table without a default value. This is not possible if the table is not empty.
  - Added the required column `required` to the `Question` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ExamStatus" AS ENUM ('NOT_STARTED', 'IN_PROGRESS', 'COMPLETED');

-- DropForeignKey
ALTER TABLE "Examiner" DROP CONSTRAINT "Examiner_profileId_fkey";

-- DropForeignKey
ALTER TABLE "Student" DROP CONSTRAINT "Student_profileId_fkey";

-- AlterTable
ALTER TABLE "Exam" DROP COLUMN "isAvailable",
ADD COLUMN     "enforceTimeLimit" BOOLEAN NOT NULL,
ADD COLUMN     "stipulatedTime" INTEGER NOT NULL,
ADD COLUMN     "timeSpent" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Question" ADD COLUMN     "required" BOOLEAN NOT NULL;

-- CreateTable
CREATE TABLE "StudentExam" (
    "id" SERIAL NOT NULL,
    "studentId" INTEGER NOT NULL,
    "examId" INTEGER NOT NULL,
    "status" "ExamStatus" NOT NULL DEFAULT 'NOT_STARTED',
    "startedAt" TIMESTAMP(3),
    "completedAt" TIMESTAMP(3),
    "score" DOUBLE PRECISION,

    CONSTRAINT "StudentExam_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "StudentExam_studentId_examId_key" ON "StudentExam"("studentId", "examId");

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "UserProfile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Examiner" ADD CONSTRAINT "Examiner_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "UserProfile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudentExam" ADD CONSTRAINT "StudentExam_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudentExam" ADD CONSTRAINT "StudentExam_examId_fkey" FOREIGN KEY ("examId") REFERENCES "Exam"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
