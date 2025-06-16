import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles/variables.scss";`,
      },
    },
  },
  server: {
    allowedHosts: [
      "https://examinator-dev.onrender.com",
      "examinator-dev.onrender.com",
      "https://examinatorr.netlify.app/",
      "https://examinatorr.netlify.app",
      "examinatorr.netlify.app",
    ],
  },
});
