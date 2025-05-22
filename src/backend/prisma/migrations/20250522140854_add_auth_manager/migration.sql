-- AlterTable
ALTER TABLE "UserProfile" ALTER COLUMN "dateUpdated" DROP DEFAULT;

-- CreateTable
CREATE TABLE "AuthManager" (
    "id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "refreshToken" TEXT,
    "refreshTokenExpiresAt" TIMESTAMP(3),
    "isLoggedIn" BOOLEAN NOT NULL DEFAULT false,
    "lastLoginAt" TIMESTAMP(3),
    "lastActivityAt" TIMESTAMP(3),
    "loginAttempts" INTEGER NOT NULL DEFAULT 0,
    "lockedUntil" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AuthManager_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AuthManager_userId_key" ON "AuthManager"("userId");

-- AddForeignKey
ALTER TABLE "AuthManager" ADD CONSTRAINT "AuthManager_userId_fkey" FOREIGN KEY ("userId") REFERENCES "UserProfile"("id") ON DELETE CASCADE ON UPDATE CASCADE;
