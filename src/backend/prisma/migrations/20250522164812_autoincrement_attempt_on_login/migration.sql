-- AlterTable
ALTER TABLE "AuthManager" ALTER COLUMN "loginAttempts" SET DEFAULT 0,
ALTER COLUMN "loginAttempts" DROP DEFAULT;
DROP SEQUENCE "authmanager_loginattempts_seq";
