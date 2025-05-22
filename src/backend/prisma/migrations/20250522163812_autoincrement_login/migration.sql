-- AlterTable
CREATE SEQUENCE authmanager_loginattempts_seq;
ALTER TABLE "AuthManager" ALTER COLUMN "loginAttempts" SET DEFAULT nextval('authmanager_loginattempts_seq');
ALTER SEQUENCE authmanager_loginattempts_seq OWNED BY "AuthManager"."loginAttempts";
