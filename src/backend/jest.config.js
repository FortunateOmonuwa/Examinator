export default {
  roots: ["../backend/tests"],
  testEnvironment: "node",
  moduleFileExtensions: ["js", "json", "mjs"],
  transformIgnorePatterns: ["/node_modules/(?!(@prisma/client)/)"],
};
