import Redis from "ioredis";
import { redisHost, redisPort } from "../config.js";

const client = new Redis(process.env.REDIS_HOST, {
  retryStrategy: (times) => {
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
