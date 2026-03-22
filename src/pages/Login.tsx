import React, { useMemo, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";

type LocationState = { from?: { pathname?: string } };

export default function Login() {
  const { user, loading, signIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const redirectTo = useMemo(() => {
    const state = location.state as LocationState | null;
    return state?.from?.pathname && state.from.pathname !== "/login"
      ? state.from.pathname
      : "/dashboard";
  }, [location.state]);

  if (!loading && user) {
    return <Navigate to="/dashboard" replace />;
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const { error: authError } = await signIn(email.trim(), password);
    setSubmitting(false);

    if (authError) {
      setError(authError.message);
      return;
    }

    navigate(redirectTo, { replace: true });
  }

  return (
    <div className="mx-auto flex min-h-[70vh] max-w-md flex-col justify-center px-6 py-10">
      <h1 className="text-2xl font-semibold">Ingresar</h1>
      <p className="mt-1 text-sm text-muted-foreground">
        Accedé con tu email y contraseña.
      </p>

      <form onSubmit={onSubmit} className="mt-6 space-y-4">
        <label className="block space-y-1">
          <span className="text-sm">Email</span>
          <input
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-md border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
          />
        </label>

        <label className="block space-y-1">
          <span className="text-sm">Contraseña</span>
          <input
            type="password"
            autoComplete="current-password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-md border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
          />
        </label>

        {error ? (
          <div className="rounded-md border border-destructive/30 bg-destructive/10 p-3 text-sm text-destructive">
            {error}
          </div>
        ) : null}

        <Button type="submit" className="w-full" disabled={submitting}>
          {submitting ? "Ingresando…" : "Ingresar"}
        </Button>
      </form>

      <p className="mt-4 text-sm text-muted-foreground">
        ¿No tenés cuenta?{" "}
        <Link to="/register" className="text-foreground underline underline-offset-4">
          Crear cuenta
        </Link>
      </p>
    </div>
  );
}

