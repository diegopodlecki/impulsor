import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Hostinger can serve from `hostinger/public_html/`. To keep PHP files (.htaccess, enviar.php, etc.),
  // we build into that directory without emptying it.
  build:
    process.env.HOSTINGER === "true"
      ? {
          outDir: "hostinger/public_html",
          emptyOutDir: false,
        }
      : undefined,
  // GitHub Pages serves this repo at `/impulsor/`:
  // https://diegopodlecki.github.io/impulsor/
  // The workflow sets `GITHUB_PAGES=true` during build.
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
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
