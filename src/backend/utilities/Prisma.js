import { PrismaClient } from "../generated/prisma/index.js";
import { environment } from "../config.js";

const global = globalThis;

const database =
  global.prisma ||
  new PrismaClient({
    log: ["query", "error", "warn"],
  });

if (environment !== "production") {
  global.prisma = database;
}

export default database;
