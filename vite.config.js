import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { componentTagger } from "lovable-tagger";
import { visualizer } from "rollup-plugin-visualizer";

const rootDir = path.dirname(fileURLToPath(import.meta.url));
const shouldAnalyze = process.env.ANALYZE === "true";

export default defineConfig(({ mode }) => ({
  build: {
    outDir: process.env.HOSTINGER === "true" ? "hostinger/public_html" : "dist",
    emptyOutDir: process.env.HOSTINGER !== "true",
  },
  base: process.env.GITHUB_PAGES === "true" ? "/impulsor/" : "/",
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    shouldAnalyze &&
      visualizer({
        filename: "dist/bundle-report.html",
        template: "treemap",
        gzipSize: true,
        brotliSize: true,
        open: false,
      }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(rootDir, "./src"),
    },
  },
}));
