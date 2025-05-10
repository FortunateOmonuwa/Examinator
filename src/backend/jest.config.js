export default {
  roots: ["../backend/tests"],
  testEnvironment: "node",
  moduleFileExtensions: ["js", "ts", "json", "mjs"],
  transform: {
    "^.+\\.(js|ts)$": "ts-jest",
  },
  transformIgnorePatterns: ["/node_modules/(?!(@prisma/client)/)"],
};
