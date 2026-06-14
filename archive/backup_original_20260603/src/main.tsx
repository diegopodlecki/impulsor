import { ViteReactSSG } from "vite-react-ssg";
import { routes } from "./App.tsx";
import "./styles/globals.css";

export const createRoot = ViteReactSSG({ routes }, () => {});
