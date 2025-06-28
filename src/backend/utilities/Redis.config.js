// redisClient.ts (or .js if you're not on TS)
import Redis from "ioredis";
import { redisHost, redisPort } from "../../../shared/Config.js";
const client = new Redis({
  host: redisHost,
  port: redisPort,
  // password: process.env.REDIS_PASSWORD || undefined,
  retryStrategy: (times) => {
    // reconnect after
    const delay = Math.min(times * 50, 2000);
    return delay;
  },
});

client.on("connect", () => {
  console.log("✅ Connected to Redis");
});

client.on("error", (err) => {
  console.error("❌ Redis Client Error:", err);
});

export default client;
