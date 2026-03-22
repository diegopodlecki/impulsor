import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./styles/globals.css";

console.log("[build]", import.meta.env.VITE_BUILD_ID ?? "sin-build-id");

createRoot(document.getElementById("root")!).render(<App />);
