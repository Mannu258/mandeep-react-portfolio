import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

// Fix __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Environment variables with defaults
const rawPort: string = process.env.PORT ?? "5173";
const port = Number(rawPort);

if (Number.isNaN(port) || port <= 0) {
  throw new Error(`Invalid PORT value: "${rawPort}"`);
}

const basePath: string = process.env.BASE_PATH ?? "/";

export default defineConfig({
  base: basePath,
  plugins: [
    react(),
    // Tailwind is handled via postcss.config.js, not here
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@assets": path.resolve(__dirname, "assets")
    },
    dedupe: ["react", "react-dom"]
  },
  build: {
    outDir: path.resolve(__dirname, "dist"),
    emptyOutDir: true
  },
  server: {
    port,
    host: "0.0.0.0",
    fs: {
      strict: true
    }
  },
  preview: {
    port,
    host: "0.0.0.0"
  }
});
