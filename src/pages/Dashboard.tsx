import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";

export default function Dashboard() {
  const { user, signOut } = useAuth();

  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Dashboard</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Sesión iniciada como{" "}
            <span className="font-medium text-foreground">{user?.email ?? "—"}</span>
          </p>
        </div>

        <div className="flex gap-2">
          <Button variant="secondary" asChild>
            <Link to="/">Inicio</Link>
          </Button>
          <Button
            variant="destructive"
            onClick={() => {
              void signOut();
            }}
          >
            Logout
          </Button>
        </div>
      </div>

      <div className="mt-8 rounded-lg border bg-card p-5">
        <h2 className="text-lg font-medium">Tu usuario</h2>
        <dl className="mt-4 grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
          <div>
            <dt className="text-muted-foreground">User ID</dt>
            <dd className="mt-1 font-mono">{user?.id ?? "—"}</dd>
          </div>
          <div>
            <dt className="text-muted-foreground">Email</dt>
            <dd className="mt-1">{user?.email ?? "—"}</dd>
          </div>
        </dl>

        <p className="mt-6 text-sm text-muted-foreground">
          Base lista para guardar datos por usuario usando <span className="font-mono">user.id</span>{" "}
          como clave/owner en tus tablas.
        </p>
      </div>
    </div>
  );
}

