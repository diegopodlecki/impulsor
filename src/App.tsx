import { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { Toaster } from "./components/ui/sonner.tsx";
import ProtectedRoute from "./components/ProtectedRoute.tsx";
import Index from "./pages/Index.tsx";
import Admin from "./pages/Admin.tsx";
import Login from "./pages/Login.tsx";
import Register from "./pages/Register.tsx";

const baseUrl = (import.meta.env.BASE_URL ?? "/") + "";
// React Router basename should not end with "/" (except root). GitHub Pages can serve `/impulsor` and `/impulsor/`.
const routerBaseName = baseUrl === "/" ? "/" : baseUrl.replace(/\/+$/, "");

const App = () => (
  <AuthProvider>
    <BrowserRouter basename={routerBaseName}>
      <HashCleanup />
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Navigate to="/admin" replace />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/admin" element={<Admin />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  </AuthProvider>
);

export default App;

const HashCleanup = () => {
  useEffect(() => {
    if (window.location.hash === "#diagnostico") {
      window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
    }
  }, []);

  return null;
};
