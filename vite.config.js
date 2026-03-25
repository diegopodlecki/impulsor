import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { componentTagger } from "lovable-tagger";

const rootDir = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig(({ mode }) => ({
  build:
    process.env.HOSTINGER === "true"
      ? {
          outDir: "hostinger/public_html",
          emptyOutDir: false,
        }
      : undefined,
  base: process.env.GITHUB_PAGES === "true" ? "/impulsor/" : "/",
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(rootDir, "./src"),
    },
  },
}));
