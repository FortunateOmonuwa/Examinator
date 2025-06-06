import {
  CreateHash,
  CompareHash,
  Generate64BaeHexString,
} from "../utilities/Encrypt.js";
import Response from "../utilities/Response.js";
import { nameRegex, passwordRegex, emailRegex } from "../utilities/Regex.js";
import database from "../utilities/Prisma.js";
const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://yourdomain.com"
    : "http://localhost:5173";
export {
  CreateHash,
  Response,
  nameRegex,
  passwordRegex,
  emailRegex,
  database,
  CompareHash,
  Generate64BaeHexString,
  baseUrl,
};
