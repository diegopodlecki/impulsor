import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Download, Eye, EyeOff, Search, ShieldCheck } from "lucide-react";
import { toast } from "sonner";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import {
  actualizarFormularioLeido,
  listarFormularios,
  toCsv,
  type Formulario,
} from "@/features/formularios/formularios";

function formatDate(value: string) {
  return new Intl.DateTimeFormat("es-AR", {
    dateStyle: "short",
    timeStyle: "short",
  }).format(new Date(value));
}

function downloadCsv(filename: string, csv: string) {
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

export default function Admin() {
  const { signOut, user } = useAuth();
  const navigate = useNavigate();
  const [formularios, setFormularios] = React.useState<Formulario[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [savingId, setSavingId] = React.useState<string | null>(null);
  const [error, setError] = React.useState<string | null>(null);
  const [search, setSearch] = React.useState("");
  const [statusFilter, setStatusFilter] = React.useState<"all" | "read" | "unread">("all");
  const [dateFrom, setDateFrom] = React.useState("");
  const [dateTo, setDateTo] = React.useState("");
  const [selectedId, setSelectedId] = React.useState<string | null>(null);
  const deferredSearch = React.useDeferredValue(search);

  React.useEffect(() => {
    let mounted = true;

    async function load() {
      const { data, error: fetchError } = await listarFormularios();

      if (!mounted) return;

      if (fetchError) {
        setError(fetchError.message);
        setFormularios([]);
      } else {
        setFormularios(data);
        setError(null);
        setSelectedId((current) => current ?? data[0]?.id ?? null);
      }

      setLoading(false);
    }

    void load();

    return () => {
      mounted = false;
    };
  }, []);

  const filteredFormularios = React.useMemo(() => {
    const term = deferredSearch.trim().toLowerCase();
    const from = dateFrom ? new Date(`${dateFrom}T00:00:00`) : null;
    const to = dateTo ? new Date(`${dateTo}T23:59:59.999`) : null;

    return formularios.filter((formulario) => {
      const matchesSearch =
        !term ||
        formulario.nombre.toLowerCase().includes(term) ||
        formulario.email.toLowerCase().includes(term) ||
        (formulario.mensaje ?? "").toLowerCase().includes(term);

      const createdAt = new Date(formulario.created_at);
      const matchesFrom = !from || createdAt >= from;
      const matchesTo = !to || createdAt <= to;
      const matchesStatus =
        statusFilter === "all" ||
        (statusFilter === "read" && formulario.leido) ||
        (statusFilter === "unread" && !formulario.leido);

      return matchesSearch && matchesFrom && matchesTo && matchesStatus;
    });
  }, [dateFrom, dateTo, deferredSearch, formularios, statusFilter]);

  const selectedFormulario = React.useMemo(
    () => filteredFormularios.find((formulario) => formulario.id === selectedId) ?? filteredFormularios[0] ?? null,
    [filteredFormularios, selectedId],
  );

  async function handleLogout() {
    await signOut();
    navigate("/login", { replace: true });
  }

  async function handleToggleLeido(formulario: Formulario) {
    setSavingId(formulario.id);
    const { error: updateError } = await actualizarFormularioLeido(formulario.id, !formulario.leido);
    setSavingId(null);

    if (updateError) {
      toast.error(updateError.message);
      return;
    }

    setFormularios((current) =>
      current.map((item) =>
        item.id === formulario.id
          ? {
              ...item,
              leido: !item.leido,
              leido_at: !item.leido ? new Date().toISOString() : null,
            }
          : item,
      ),
    );
    toast.success(!formulario.leido ? "Marcado como leído" : "Marcado como no leído");
  }

  function handleExportCsv() {
    const csv = toCsv(filteredFormularios);
    downloadCsv(`formularios-${new Date().toISOString().slice(0, 10)}.csv`, csv);
    toast.success("CSV exportado");
  }

  const unreadCount = React.useMemo(
    () => formularios.filter((formulario) => !formulario.leido).length,
    [formularios],
  );

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="container py-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 border-b border-border/60 pb-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Panel</p>
              <h1 className="mt-1 text-3xl font-semibold tracking-tight">Formularios</h1>
              <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
                Panel privado con búsqueda, filtros, exportación y estado leído/no leído.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <Badge variant="secondary">Total: {formularios.length}</Badge>
                <Badge variant="outline">Sin leer: {unreadCount}</Badge>
                <Badge variant="secondary">Sesión: {user?.email ?? "-"}</Badge>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button type="button" variant="outline" onClick={handleExportCsv} disabled={loading || filteredFormularios.length === 0}>
                <Download /> Exportar CSV
              </Button>
              <Link
                to="/"
                className="inline-flex items-center justify-center rounded-full border border-border/70 bg-background/30 px-4 py-2 text-sm font-medium transition-colors hover:bg-background/50"
              >
                Volver al inicio
              </Link>
              <Button type="button" variant="secondary" onClick={handleLogout}>
                Cerrar sesión
              </Button>
            </div>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-12">
            <section className="lg:col-span-8">
              <div className="rounded-3xl border border-border/70 bg-gradient-card p-5 shadow-card">
                <div className="grid gap-3 md:grid-cols-4">
                  <label className="grid gap-2 md:col-span-2">
                    <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Buscar</span>
                    <div className="relative">
                      <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Nombre, correo o mensaje"
                        className="h-11 w-full rounded-xl border border-border bg-background/40 pl-10 pr-3 text-sm outline-none focus:ring-2 focus:ring-ring"
                      />
                    </div>
                  </label>

                  <label className="grid gap-2">
                    <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Estado</span>
                    <select
                      value={statusFilter}
                      onChange={(e) => setStatusFilter(e.target.value as typeof statusFilter)}
                      className="h-11 rounded-xl border border-border bg-background/40 px-3 text-sm outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="all">Todos</option>
                      <option value="unread">No leídos</option>
                      <option value="read">Leídos</option>
                    </select>
                  </label>

                  <label className="grid gap-2">
                    <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Desde</span>
                    <input
                      type="date"
                      value={dateFrom}
                      onChange={(e) => setDateFrom(e.target.value)}
                      className="h-11 rounded-xl border border-border bg-background/40 px-3 text-sm outline-none focus:ring-2 focus:ring-ring"
                    />
                  </label>

                  <label className="grid gap-2">
                    <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Hasta</span>
                    <input
                      type="date"
                      value={dateTo}
                      onChange={(e) => setDateTo(e.target.value)}
                      className="h-11 rounded-xl border border-border bg-background/40 px-3 text-sm outline-none focus:ring-2 focus:ring-ring"
                    />
                  </label>
                </div>
              </div>

              <div className="mt-4 rounded-3xl border border-border/70 bg-gradient-card shadow-card">
                {loading ? (
                  <div className="p-6 text-sm text-muted-foreground">Cargando registros...</div>
                ) : error ? (
                  <div className="p-6 text-sm text-destructive">{error}</div>
                ) : filteredFormularios.length === 0 ? (
                  <div className="p-6 text-sm text-muted-foreground">No hay registros con esos filtros.</div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="min-w-full text-left text-sm">
                      <thead className="border-b border-border/70 text-muted-foreground">
                        <tr>
                          <th className="px-6 py-4 font-medium">Estado</th>
                          <th className="px-6 py-4 font-medium">Nombre</th>
                          <th className="px-6 py-4 font-medium">Correo</th>
                          <th className="px-6 py-4 font-medium">Mensaje</th>
                          <th className="px-6 py-4 font-medium">Fecha</th>
                          <th className="px-6 py-4 font-medium">Acción</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredFormularios.map((formulario) => {
                          const active = formulario.id === selectedId;
                          return (
                            <tr
                              key={formulario.id}
                              onClick={() => setSelectedId(formulario.id)}
                              className={`cursor-pointer border-b border-border/50 last:border-b-0 transition-colors hover:bg-background/40 ${
                                active ? "bg-background/50" : ""
                              }`}
                            >
                              <td className="px-6 py-4">
                                <Badge variant={formulario.leido ? "secondary" : "default"}>
                                  {formulario.leido ? "Leído" : "Nuevo"}
                                </Badge>
                              </td>
                              <td className="px-6 py-4 font-medium">{formulario.nombre}</td>
                              <td className="px-6 py-4 text-muted-foreground">{formulario.email}</td>
                              <td className="px-6 py-4 whitespace-pre-wrap text-muted-foreground">
                                {formulario.mensaje || "Sin mensaje"}
                              </td>
                              <td className="px-6 py-4 text-muted-foreground">{formatDate(formulario.created_at)}</td>
                              <td className="px-6 py-4">
                                <Button
                                  type="button"
                                  variant="ghost"
                                  size="sm"
                                  disabled={savingId === formulario.id}
                                  onClick={(event) => {
                                    event.stopPropagation();
                                    void handleToggleLeido(formulario);
                                  }}
                                >
                                  {formulario.leido ? <EyeOff /> : <Eye />}
                                  {formulario.leido ? "No leído" : "Leído"}
                                </Button>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </section>

            <aside className="lg:col-span-4">
              <div className="sticky top-6 rounded-3xl border border-border/70 bg-gradient-card p-5 shadow-card">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-[hsl(var(--neon-cyan))]" />
                  <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">Detalle</p>
                </div>

                {selectedFormulario ? (
                  <div className="mt-4 space-y-4">
                    <div>
                      <h2 className="text-2xl font-semibold tracking-tight">{selectedFormulario.nombre}</h2>
                      <p className="mt-1 text-sm text-muted-foreground">{selectedFormulario.email}</p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <Badge variant={selectedFormulario.leido ? "secondary" : "default"}>
                        {selectedFormulario.leido ? "Leído" : "Nuevo"}
                      </Badge>
                      <Badge variant="outline">{formatDate(selectedFormulario.created_at)}</Badge>
                    </div>

                    <div className="rounded-2xl border border-border/70 bg-background/30 p-4 text-sm leading-relaxed text-foreground/90 whitespace-pre-wrap">
                      {selectedFormulario.mensaje || "Sin mensaje"}
                    </div>

                    <div className="grid gap-2 text-sm text-muted-foreground">
                      <div>
                        <span className="font-medium text-foreground">ID:</span> {selectedFormulario.id}
                      </div>
                      <div>
                        <span className="font-medium text-foreground">Estado leído:</span> {selectedFormulario.leido ? "Sí" : "No"}
                      </div>
                      {selectedFormulario.leido_at ? (
                        <div>
                          <span className="font-medium text-foreground">Leído en:</span> {formatDate(selectedFormulario.leido_at)}
                        </div>
                      ) : null}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <Button
                        type="button"
                        variant="secondary"
                        onClick={() => void handleToggleLeido(selectedFormulario)}
                        disabled={savingId === selectedFormulario.id}
                      >
                        {selectedFormulario.leido ? "Marcar como no leído" : "Marcar como leído"}
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="mt-4 text-sm text-muted-foreground">Seleccioná un registro para ver el detalle.</div>
                )}
              </div>
            </aside>
          </div>
        </div>
      </div>
    </main>
  );
}
