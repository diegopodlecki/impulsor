import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Download, Eye, EyeOff, Filter, Search, ShieldCheck, Sparkles } from "lucide-react";
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

type DateFilter = "today" | "week" | "all";

const dateFilterOptions: Array<{ value: DateFilter; label: string; hint: string }> = [
  { value: "today", label: "Hoy", hint: "Últimas 24 horas" },
  { value: "week", label: "Últimos 7 días", hint: "Semana actual" },
  { value: "all", label: "Todos", hint: "Sin filtro" },
];

function normalizeText(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat("es-AR", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

function formatDayLabel(value: string) {
  return new Intl.DateTimeFormat("es-AR", {
    weekday: "short",
    day: "2-digit",
    month: "short",
  }).format(new Date(value));
}

function getLocalDayBoundary(date: Date, endOfDay = false) {
  const boundary = new Date(date);
  boundary.setHours(endOfDay ? 23 : 0, endOfDay ? 59 : 0, endOfDay ? 59 : 0, endOfDay ? 999 : 0);
  return boundary;
}

function getDateRange(filter: DateFilter) {
  if (filter === "all") {
    return { from: null as Date | null, to: null as Date | null };
  }

  const today = new Date();
  const startOfToday = getLocalDayBoundary(today);
  const endOfToday = getLocalDayBoundary(today, true);

  if (filter === "today") {
    return { from: startOfToday, to: endOfToday };
  }

  const from = new Date(startOfToday);
  from.setDate(from.getDate() - 6);
  return { from, to: endOfToday };
}

function csvDownload(filename: string, csv: string) {
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

function statusBadgeClass(leido: boolean) {
  return leido
    ? "border-emerald-500/20 bg-emerald-500/15 text-emerald-700 dark:text-emerald-300"
    : "border-rose-500/20 bg-rose-500/15 text-rose-700 dark:text-rose-300";
}

function StatCard({
  label,
  value,
  detail,
  icon,
}: {
  label: string;
  value: string | number;
  detail: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl border border-border/70 bg-gradient-card p-5 shadow-card">
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-medium text-muted-foreground">{label}</p>
        <div className="rounded-full border border-border/60 bg-background/40 p-2 text-[hsl(var(--neon-cyan))]">{icon}</div>
      </div>
      <div className="mt-3 text-3xl font-semibold tracking-tight">{value}</div>
      <p className="mt-2 text-sm text-muted-foreground">{detail}</p>
    </div>
  );
}

export default function Admin() {
  const { signOut, user } = useAuth();
  const navigate = useNavigate();
  const [formularios, setFormularios] = React.useState<Formulario[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [savingId, setSavingId] = React.useState<string | null>(null);
  const [error, setError] = React.useState<string | null>(null);
  const [search, setSearch] = React.useState("");
  const [dateFilter, setDateFilter] = React.useState<DateFilter>("all");
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
    const term = normalizeText(deferredSearch.trim());
    const { from, to } = getDateRange(dateFilter);

    return formularios.filter((formulario) => {
      const matchesSearch =
        !term ||
        normalizeText(formulario.nombre).includes(term) ||
        normalizeText(formulario.email).includes(term);

      const createdAt = new Date(formulario.created_at);
      const matchesDate = !from || !to || (createdAt >= from && createdAt <= to);

      return matchesSearch && matchesDate;
    });
  }, [dateFilter, deferredSearch, formularios]);

  const selectedFormulario = React.useMemo(
    () => filteredFormularios.find((formulario) => formulario.id === selectedId) ?? filteredFormularios[0] ?? null,
    [filteredFormularios, selectedId],
  );

  const totals = React.useMemo(() => {
    const total = formularios.length;
    const unread = formularios.filter((formulario) => !formulario.leido).length;
    const read = total - unread;
    const filtered = filteredFormularios.length;

    return { total, unread, read, filtered };
  }, [filteredFormularios, formularios]);

  const dateFilterLabel = React.useMemo(
    () => dateFilterOptions.find((option) => option.value === dateFilter)?.label ?? "Todos",
    [dateFilter],
  );

  const dateFilterDetail = React.useMemo(() => {
    const active = dateFilterOptions.find((option) => option.value === dateFilter);
    return active?.hint ?? "Sin filtro";
  }, [dateFilter]);

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
    csvDownload(`contactos-${new Date().toISOString().slice(0, 10)}.csv`, csv);
    toast.success("CSV exportado");
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.12),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.12),transparent_28%)]" />
      </div>

      <div className="container py-8 sm:py-10">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[2rem] border border-border/70 bg-gradient-card p-6 shadow-card sm:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/30 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  <Sparkles className="h-4 w-4 text-[hsl(var(--neon-cyan))]" />
                  Panel de contactos
                </div>
                <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Dashboard profesional para gestionar leads
                </h1>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
                  Buscador en tiempo real, filtros por fecha, estado leído/no leído, exportación CSV y detalle del mensaje
                  en un solo lugar.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge className="border-transparent bg-background/50 text-foreground" variant="secondary">
                    Sesión: {user?.email ?? "-"}
                  </Badge>
                  <Badge className="border-transparent bg-background/50 text-foreground" variant="secondary">
                    Filtro: {dateFilterLabel}
                  </Badge>
                  <Badge className="border-transparent bg-background/50 text-foreground" variant="secondary">
                    {loading ? "Cargando..." : `${totals.filtered} visibles`}
                  </Badge>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <Button type="button" variant="outline" onClick={handleExportCsv} disabled={loading || filteredFormularios.length === 0}>
                  <Download className="h-4 w-4" />
                  Exportar CSV
                </Button>
                <Link
                  to="/"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border/70 bg-background/30 px-4 py-2 text-sm font-medium transition-colors hover:bg-background/50"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Volver al inicio
                </Link>
                <Button type="button" variant="secondary" onClick={handleLogout}>
                  Cerrar sesión
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <StatCard
              label="Total contactos"
              value={totals.total}
              detail="Todos los registros guardados en Supabase."
              icon={<ShieldCheck className="h-4 w-4" />}
            />
            <StatCard
              label="No leídos"
              value={totals.unread}
              detail="Mensajes pendientes de revisión."
              icon={<EyeOff className="h-4 w-4" />}
            />
            <StatCard
              label="Leídos"
              value={totals.read}
              detail="Contactos ya revisados."
              icon={<Eye className="h-4 w-4" />}
            />
            <StatCard
              label="Filtrados"
              value={totals.filtered}
              detail="Resultados actuales según búsqueda y fecha."
              icon={<Filter className="h-4 w-4" />}
            />
          </div>

          <div className="mt-6 grid gap-6 xl:grid-cols-[1.8fr_1fr]">
            <section className="space-y-6">
              <div className="rounded-3xl border border-border/70 bg-gradient-card p-5 shadow-card">
                <div className="grid gap-4 lg:grid-cols-[1.4fr_1fr]">
                  <label className="grid gap-2">
                    <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Buscar</span>
                    <div className="relative">
                      <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Buscar por nombre o correo"
                        className="h-12 w-full rounded-2xl border border-border bg-background/50 pl-10 pr-3 text-sm outline-none ring-0 transition focus:border-[hsl(var(--neon-cyan))] focus:ring-2 focus:ring-[hsl(var(--neon-cyan))/20]"
                      />
                    </div>
                  </label>

                  <div className="grid gap-2">
                    <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Fecha</span>
                    <div className="grid grid-cols-3 gap-2">
                      {dateFilterOptions.map((option) => {
                        const active = dateFilter === option.value;
                        return (
                          <button
                            key={option.value}
                            type="button"
                            onClick={() => setDateFilter(option.value)}
                            className={`rounded-2xl border px-3 py-3 text-left transition-all ${
                              active
                                ? "border-[hsl(var(--neon-cyan))] bg-[hsl(var(--neon-cyan))/10] text-foreground shadow-glow"
                                : "border-border/70 bg-background/40 text-muted-foreground hover:bg-background/60"
                            }`}
                          >
                            <div className="text-sm font-semibold">{option.label}</div>
                            <div className="mt-1 text-[11px]">{option.hint}</div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              <div className="overflow-hidden rounded-3xl border border-border/70 bg-gradient-card shadow-card">
                {loading ? (
                  <div className="p-6 text-sm text-muted-foreground">Cargando contactos...</div>
                ) : error ? (
                  <div className="p-6 text-sm text-destructive">{error}</div>
                ) : filteredFormularios.length === 0 ? (
                  <div className="p-6 text-sm text-muted-foreground">No hay contactos con esos filtros.</div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="min-w-full text-left text-sm">
                      <thead className="border-b border-border/70 bg-background/30 text-muted-foreground">
                        <tr>
                          <th className="px-6 py-4 font-medium">Estado</th>
                          <th className="px-6 py-4 font-medium">Contacto</th>
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
                              className={`cursor-pointer border-b border-border/50 transition-colors last:border-b-0 hover:bg-background/40 ${
                                active ? "bg-background/50" : ""
                              }`}
                            >
                              <td className="px-6 py-4 align-top">
                                <Badge className={statusBadgeClass(formulario.leido)}>
                                  <span className="mr-1 inline-block size-2 rounded-full bg-current" />
                                  {formulario.leido ? "Leído" : "No leído"}
                                </Badge>
                              </td>
                              <td className="px-6 py-4 align-top">
                                <div className="font-medium">{formulario.nombre}</div>
                                <div className="mt-1 text-xs text-muted-foreground">{formulario.email}</div>
                              </td>
                              <td className="px-6 py-4 align-top text-muted-foreground">
                                <p className="max-w-md whitespace-pre-wrap">
                                  {formulario.mensaje || "Sin mensaje"}
                                </p>
                              </td>
                              <td className="px-6 py-4 align-top text-muted-foreground">{formatDate(formulario.created_at)}</td>
                              <td className="px-6 py-4 align-top">
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
                                  {formulario.leido ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                  {formulario.leido ? "Marcar como no leído" : "Marcar como leído"}
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

            <aside className="space-y-6">
              <div className="rounded-3xl border border-border/70 bg-gradient-card p-5 shadow-card">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-[hsl(var(--neon-cyan))]" />
                  <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Detalle</p>
                </div>

                {selectedFormulario ? (
                  <div className="mt-5 space-y-4">
                    <div>
                      <h2 className="text-2xl font-semibold tracking-tight">{selectedFormulario.nombre}</h2>
                      <p className="mt-1 text-sm text-muted-foreground">{selectedFormulario.email}</p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <Badge className={statusBadgeClass(selectedFormulario.leido)}>
                        {selectedFormulario.leido ? "Leído" : "No leído"}
                      </Badge>
                      <Badge className="border-border/70 bg-background/30 text-foreground" variant="outline">
                        {formatDate(selectedFormulario.created_at)}
                      </Badge>
                    </div>

                    <div className="rounded-2xl border border-border/70 bg-background/30 p-4 text-sm leading-relaxed text-foreground/90 whitespace-pre-wrap">
                      {selectedFormulario.mensaje || "Sin mensaje"}
                    </div>

                    <div className="grid gap-2 text-sm text-muted-foreground">
                      <div>
                        <span className="font-medium text-foreground">Creado:</span>{" "}
                        {formatDayLabel(selectedFormulario.created_at)}
                      </div>
                      <div>
                        <span className="font-medium text-foreground">ID:</span> {selectedFormulario.id}
                      </div>
                      <div>
                        <span className="font-medium text-foreground">Estado:</span>{" "}
                        {selectedFormulario.leido ? "Leído" : "No leído"}
                      </div>
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
                  <div className="mt-5 text-sm text-muted-foreground">Seleccioná un contacto para ver el detalle.</div>
                )}
              </div>

              <div className="rounded-3xl border border-border/70 bg-gradient-card p-5 shadow-card">
                <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Resumen rápido</p>
                <div className="mt-4 space-y-3">
                  <div className="flex items-center justify-between rounded-2xl border border-border/60 bg-background/30 px-4 py-3">
                    <span className="text-sm text-muted-foreground">Búsqueda actual</span>
                    <span className="text-sm font-medium">{deferredSearch.trim() || "Sin texto"}</span>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl border border-border/60 bg-background/30 px-4 py-3">
                    <span className="text-sm text-muted-foreground">Filtro de fecha</span>
                    <span className="text-sm font-medium">{dateFilterLabel}</span>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl border border-border/60 bg-background/30 px-4 py-3">
                    <span className="text-sm text-muted-foreground">Detalle del rango</span>
                    <span className="text-sm font-medium">{dateFilterDetail}</span>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl border border-border/60 bg-background/30 px-4 py-3">
                    <span className="text-sm text-muted-foreground">Visibles</span>
                    <span className="text-sm font-medium">{totals.filtered}</span>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </main>
  );
}
