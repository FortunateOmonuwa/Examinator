/*
  Warnings:

  - The primary key for the `Exam` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `timeSpent` on the `Exam` table. All the data in the column will be lost.
  - The primary key for the `Examiner` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Option` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Question` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Response` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Student` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `StudentExam` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `UserProfile` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `_Responses` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Changed the type of `id` on the `Exam` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `creatorId` on the `Exam` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `id` on the `Examiner` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `profileId` on the `Examiner` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `id` on the `Option` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `questionId` on the `Option` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `id` on the `Question` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `examId` on the `Question` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `id` on the `Response` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `studentId` on the `Response` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `questionId` on the `Response` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `id` on the `Student` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `profileId` on the `Student` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `timeSpent` to the `StudentExam` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `id` on the `StudentExam` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `studentId` on the `StudentExam` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `examId` on the `StudentExam` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `id` on the `UserProfile` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `A` on the `_Responses` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `B` on the `_Responses` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Exam" DROP CONSTRAINT "Exam_creatorId_fkey";

-- DropForeignKey
ALTER TABLE "Examiner" DROP CONSTRAINT "Examiner_profileId_fkey";

-- DropForeignKey
ALTER TABLE "Option" DROP CONSTRAINT "Option_questionId_fkey";

-- DropForeignKey
ALTER TABLE "Question" DROP CONSTRAINT "Question_examId_fkey";

-- DropForeignKey
ALTER TABLE "Response" DROP CONSTRAINT "Response_questionId_fkey";

-- DropForeignKey
ALTER TABLE "Response" DROP CONSTRAINT "Response_studentId_fkey";

-- DropForeignKey
ALTER TABLE "Student" DROP CONSTRAINT "Student_profileId_fkey";

-- DropForeignKey
ALTER TABLE "StudentExam" DROP CONSTRAINT "StudentExam_examId_fkey";

-- DropForeignKey
ALTER TABLE "StudentExam" DROP CONSTRAINT "StudentExam_studentId_fkey";

-- DropForeignKey
ALTER TABLE "_Responses" DROP CONSTRAINT "_Responses_A_fkey";

-- DropForeignKey
ALTER TABLE "_Responses" DROP CONSTRAINT "_Responses_B_fkey";

-- AlterTable
ALTER TABLE "Exam" DROP CONSTRAINT "Exam_pkey",
DROP COLUMN "timeSpent",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL,
DROP COLUMN "creatorId",
ADD COLUMN     "creatorId" UUID NOT NULL,
ALTER COLUMN "enforceTimeLimit" SET DEFAULT false,
ADD CONSTRAINT "Exam_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Examiner" DROP CONSTRAINT "Examiner_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL,
DROP COLUMN "profileId",
ADD COLUMN     "profileId" UUID NOT NULL,
ADD CONSTRAINT "Examiner_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Option" DROP CONSTRAINT "Option_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL,
DROP COLUMN "questionId",
ADD COLUMN     "questionId" UUID NOT NULL,
ADD CONSTRAINT "Option_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Question" DROP CONSTRAINT "Question_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL,
DROP COLUMN "examId",
ADD COLUMN     "examId" UUID NOT NULL,
ADD CONSTRAINT "Question_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Response" DROP CONSTRAINT "Response_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL,
DROP COLUMN "studentId",
ADD COLUMN     "studentId" UUID NOT NULL,
DROP COLUMN "questionId",
ADD COLUMN     "questionId" UUID NOT NULL,
ADD CONSTRAINT "Response_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Student" DROP CONSTRAINT "Student_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL,
DROP COLUMN "profileId",
ADD COLUMN     "profileId" UUID NOT NULL,
ADD CONSTRAINT "Student_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "StudentExam" DROP CONSTRAINT "StudentExam_pkey",
ADD COLUMN     "timeSpent" INTEGER NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL,
DROP COLUMN "studentId",
ADD COLUMN     "studentId" UUID NOT NULL,
DROP COLUMN "examId",
ADD COLUMN     "examId" UUID NOT NULL,
ADD CONSTRAINT "StudentExam_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "UserProfile" DROP CONSTRAINT "UserProfile_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL,
ADD CONSTRAINT "UserProfile_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "_Responses" DROP CONSTRAINT "_Responses_AB_pkey",
DROP COLUMN "A",
ADD COLUMN     "A" UUID NOT NULL,
DROP COLUMN "B",
ADD COLUMN     "B" UUID NOT NULL,
ADD CONSTRAINT "_Responses_AB_pkey" PRIMARY KEY ("A", "B");

-- CreateIndex
CREATE UNIQUE INDEX "Examiner_profileId_key" ON "Examiner"("profileId");

-- CreateIndex
CREATE UNIQUE INDEX "Student_profileId_key" ON "Student"("profileId");

-- CreateIndex
CREATE UNIQUE INDEX "StudentExam_studentId_examId_key" ON "StudentExam"("studentId", "examId");

-- CreateIndex
CREATE INDEX "_Responses_B_index" ON "_Responses"("B");

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "UserProfile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Examiner" ADD CONSTRAINT "Examiner_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "UserProfile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Exam" ADD CONSTRAINT "Exam_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "Examiner"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudentExam" ADD CONSTRAINT "StudentExam_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudentExam" ADD CONSTRAINT "StudentExam_examId_fkey" FOREIGN KEY ("examId") REFERENCES "Exam"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_examId_fkey" FOREIGN KEY ("examId") REFERENCES "Exam"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Option" ADD CONSTRAINT "Option_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Question"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Response" ADD CONSTRAINT "Response_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Response" ADD CONSTRAINT "Response_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Question"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Responses" ADD CONSTRAINT "_Responses_A_fkey" FOREIGN KEY ("A") REFERENCES "Option"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Responses" ADD CONSTRAINT "_Responses_B_fkey" FOREIGN KEY ("B") REFERENCES "Response"("id") ON DELETE CASCADE ON UPDATE CASCADE;
