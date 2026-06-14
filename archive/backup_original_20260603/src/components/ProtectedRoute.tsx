import { Navigate, Outlet, useLocation } from "react-router-dom";

import { useAuth } from "@/contexts/AuthContext";

export default function ProtectedRoute() {
  // Skip auth on server-side rendering
  if (typeof window === "undefined") {
    return null;
  }

  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <div className="mx-auto max-w-md p-6 text-sm text-muted-foreground">Cargando sesión…</div>;
  }

  if (!user) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return <Outlet />;
}
