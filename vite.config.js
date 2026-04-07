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
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("@supabase")) return "supabase";
            if (id.includes("framer-motion")) return "motion";
            if (id.includes("recharts")) return "charts";
            if (id.includes("lucide-react")) return "icons";
            if (id.includes("@radix-ui")) return "radix";
            // react-router-dom goes with vendor to avoid circular dependency
            return "vendor";
          }
        },
      },
    },
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
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom"],
  },
  resolve: {
    alias: {
      "@": path.resolve(rootDir, "./src"),
    },
  },
}));
