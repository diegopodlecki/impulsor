import { Link } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import React from "react";
import { format } from "date-fns";

import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import type { Formulario } from "@/features/formularios/formularios";
import { insertarFormulario, listarFormulariosPorUsuario } from "@/features/formularios/formularios";

export default function Dashboard() {
  const { user, signOut } = useAuth();
  const queryClient = useQueryClient();
  const [nombre, setNombre] = React.useState("");
  const [email, setEmail] = React.useState(user?.email ?? "");
  const [mensaje, setMensaje] = React.useState("");

  React.useEffect(() => {
    setEmail(user?.email ?? "");
  }, [user?.email]);

  const formulariosQuery = useQuery({
    queryKey: ["formularios", user?.id],
    enabled: Boolean(user?.id),
    queryFn: async () => {
      const { data, error } = await listarFormulariosPorUsuario(user!.id);
      if (error) throw error;
      return data;
    },
  });

  const insertarMutation = useMutation({
    mutationFn: async () => {
      const { error } = await insertarFormulario({ nombre, email, mensaje });
      if (error) throw error;
      return true;
    },
    onSuccess: async () => {
      setNombre("");
      setMensaje("");
      toast.success("Guardado en Supabase");
      await queryClient.invalidateQueries({ queryKey: ["formularios", user?.id] });
    },
    onError: (err: unknown) => {
      const message =
        typeof err === "object" && err && "message" in err ? String((err as { message: unknown }).message) : "Error";
      toast.error(message);
    },
  });

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    insertarMutation.mutate();
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
            <Button type="submit" disabled={insertarMutation.isPending}>
              {insertarMutation.isPending ? "Guardando…" : "Guardar"}
            </Button>
            <Button
              type="button"
              variant="secondary"
              onClick={() => {
                setNombre("");
                setMensaje("");
                setEmail(user?.email ?? "");
              }}
              disabled={insertarMutation.isPending}
            >
              Limpiar
            </Button>
          </div>
        </form>
      </div>

      <div className="mt-8 rounded-lg border bg-card p-5">
        <h2 className="text-lg font-medium">Tus envíos</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Solo ves los registros cuyo <span className="font-mono">user_id</span> coincide con tu sesión.
        </p>

        {formulariosQuery.isLoading ? (
          <div className="mt-4 text-sm text-muted-foreground">Cargando envíos…</div>
        ) : formulariosQuery.isError ? (
          <div className="mt-4 rounded-md border border-destructive/30 bg-destructive/10 p-3 text-sm text-destructive">
            {String((formulariosQuery.error as { message?: string } | undefined)?.message ?? "Error al cargar")}
          </div>
        ) : (
          <FormulariosList items={formulariosQuery.data ?? []} />
        )}
      </div>
    </div>
  );
}

function FormulariosList({ items }: { items: Formulario[] }) {
  if (!items.length) {
    return <div className="mt-4 text-sm text-muted-foreground">Todavía no tenés envíos guardados.</div>;
  }

  return (
    <div className="mt-5 grid gap-3">
      {items.map((item) => (
        <div key={item.id} className="rounded-lg border bg-background/40 p-4">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-sm font-medium">
              {item.nombre} · <span className="text-muted-foreground">{item.email}</span>
            </div>
            <div className="text-xs text-muted-foreground">
              {format(new Date(item.created_at), "yyyy-MM-dd HH:mm")}
            </div>
          </div>
          {item.mensaje ? <div className="mt-2 whitespace-pre-wrap text-sm">{item.mensaje}</div> : null}
          <div className="mt-3 text-xs text-muted-foreground">
            ID: <span className="font-mono">{item.id}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
