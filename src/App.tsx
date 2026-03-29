import { useEffect, useLayoutEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { Toaster } from "./components/ui/sonner.tsx";
import ProtectedRoute from "./components/ProtectedRoute.tsx";
import Index from "./pages/Index.tsx";
import Admin from "./pages/Admin.tsx";
import Login from "./pages/Login.tsx";
import Gimnasios from "./pages/Gimnasios.tsx";
import PersonalTrainers from "./pages/PersonalTrainers.tsx";
import Nutricionistas from "./pages/Nutricionistas.tsx";
import Psicologos from "./pages/Psicologos.tsx";
import EsteticaCorporal from "./pages/EsteticaCorporal.tsx";
import IronFitness from "./pages/IronFitness.tsx";
import Emprendedores from "./pages/Emprendedores.tsx";
import Register from "./pages/Register.tsx";

const baseUrl = (import.meta.env.BASE_URL ?? "/") + "";
// React Router basename should not end with "/" (except root). GitHub Pages can serve `/impulsor` and `/impulsor/`.
const routerBaseName = baseUrl === "/" ? "/" : baseUrl.replace(/\/+$/, "");

const clearDiagnosticHash = () => {
  if (window.location.hash === "#diagnostico") {
    window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
  }
};

const App = () => (
  <AuthProvider>
    <BrowserRouter basename={routerBaseName}>
      <ScrollToTop />
      <HashCleanup />
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/gimnasios" element={<Gimnasios />} />
        <Route path="/entrenadores" element={<PersonalTrainers />} />
        <Route path="/personal-trainers" element={<Navigate to="/entrenadores" replace />} />
        <Route path="/nutricionistas" element={<Nutricionistas />} />
        <Route path="/psicologos" element={<Psicologos />} />
        <Route path="/estetica-corporal" element={<EsteticaCorporal />} />
        <Route path="/iron-fitness" element={<IronFitness />} />
        <Route path="/emprendedores" element={<Emprendedores />} />
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

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const HashCleanup = () => {
  useEffect(() => {
    clearDiagnosticHash();

    window.addEventListener("hashchange", clearDiagnosticHash);
    window.addEventListener("popstate", clearDiagnosticHash);

    return () => {
      window.removeEventListener("hashchange", clearDiagnosticHash);
      window.removeEventListener("popstate", clearDiagnosticHash);
    };
  }, []);

  return null;
};