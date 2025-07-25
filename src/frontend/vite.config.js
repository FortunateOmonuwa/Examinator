import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import fs from "fs";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [
    react(),
    {
      name: "copy-redirects",
      closeBundle() {
        const src = path.resolve(__dirname, "public/_redirects");
        const dest = path.resolve(__dirname, "dist/_redirects");
        fs.copyFileSync(src, dest);
        console.log("✅ Copied _redirects to dist");
      },
    },
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@shared": path.resolve(__dirname, "./shared"),
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
