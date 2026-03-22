import { Link } from "react-router-dom";
import { toast } from "sonner";
import React from "react";

import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { insertarFormulario } from "@/features/formularios/formularios";

export default function Dashboard() {
  const { user, signOut } = useAuth();
  const [nombre, setNombre] = React.useState("");
  const [email, setEmail] = React.useState(user?.email ?? "");
  const [mensaje, setMensaje] = React.useState("");
  const [saving, setSaving] = React.useState(false);

  React.useEffect(() => {
    setEmail(user?.email ?? "");
  }, [user?.email]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    const { error } = await insertarFormulario({ nombre, email, mensaje });
    setSaving(false);

    if (error) {
      toast.error(error.message);
      return;
    }

    setNombre("");
    setMensaje("");
    toast.success("Guardado en Supabase");
  }

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

      <div className="mt-8 rounded-lg border bg-card p-5">
        <h2 className="text-lg font-medium">Guardar formulario</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Cada envío se guarda en la tabla <span className="font-mono">formularios</span>.
        </p>

        <form onSubmit={onSubmit} className="mt-6 grid gap-4">
          <label className="grid gap-1">
            <span className="text-sm">Nombre</span>
            <input
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
              className="w-full rounded-md border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
            />
          </label>

          <label className="grid gap-1">
            <span className="text-sm">Email</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded-md border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
            />
          </label>

          <label className="grid gap-1">
            <span className="text-sm">Mensaje</span>
            <textarea
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
              rows={4}
              className="w-full rounded-md border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
            />
          </label>

          <div className="flex gap-2">
            <Button type="submit" disabled={saving}>
              {saving ? "Guardando…" : "Guardar"}
            </Button>
            <Button
              type="button"
              variant="secondary"
              onClick={() => {
                setNombre("");
                setMensaje("");
                setEmail(user?.email ?? "");
              }}
              disabled={saving}
            >
              Limpiar
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
