import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "node",
    include: ["tests/**/*.test.js"],
    exclude: ["node_modules", "dist"],
    testTimeout: 60000,
    hookTimeout: 60000,
    teardownTimeout: 60000,
    setupFiles: ["./tests/utils/setup.js"],
    pool: "forks",
    isolate: true,
  },
});
