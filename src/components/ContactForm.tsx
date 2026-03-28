import * as React from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { enviarEmailFormulario, insertarFormulario } from "@/features/formularios/formularios";

const businessOptions = [
  "Gimnasio",
  "Personal Trainer",
  "Nutricionista",
  "Psicólogo",
  "Estética corporal",
  "Otro",
];

function normalizeWhatsApp(value: string) {
  return value.replace(/[^\d+]/g, "").trim();
}

function buildSyntheticEmail(whatsapp: string) {
  const digits = whatsapp.replace(/\D/g, "");
  const safeValue = digits || "contacto";
  return `${safeValue}@whatsapp.local`;
}

export function ContactForm() {
  const [nombre, setNombre] = React.useState("");
  const [whatsapp, setWhatsapp] = React.useState("");
  const [tipoNegocio, setTipoNegocio] = React.useState(businessOptions[0]);
  const [submitting, setSubmitting] = React.useState(false);
  const [status, setStatus] = React.useState("");

  const clearDiagnosticHash = React.useCallback(() => {
    if (window.location.hash === "#diagnostico") {
      window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
    }
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting) return;

    const cleanWhatsapp = normalizeWhatsApp(whatsapp);
    const syntheticEmail = buildSyntheticEmail(cleanWhatsapp);
    const mensaje = `Tipo de negocio: ${tipoNegocio}. WhatsApp: ${whatsapp.trim()}.`;

    clearDiagnosticHash();
    setSubmitting(true);
    setStatus("Enviando...");

    try {
      const { error: insertError } = await insertarFormulario({
        nombre,
        email: syntheticEmail,
        mensaje,
      });

      if (insertError) throw insertError;
      toast.success("Tu consulta quedó guardada");

      const { error: emailError } = await enviarEmailFormulario({
        nombre,
        correo_electronico: syntheticEmail,
        mensaje,
      });

      if (emailError) {
        console.error("ERROR EMAIL:", emailError);
        toast.error(`Se guardó el mensaje, pero falló el aviso por correo: ${emailError.message}`);
        setStatus(`Tu consulta quedó guardada. El aviso por correo falló: ${emailError.message}`);
      } else {
        toast.success("Te respondimos por correo");
        setStatus("Tu consulta fue enviada correctamente.");
      }

      setNombre("");
      setWhatsapp("");
      setTipoNegocio(businessOptions[0]);
      clearDiagnosticHash();
    } catch (error) {
      console.error(error);
      toast.error("No pudimos enviar tu consulta");
      setStatus("");
      clearDiagnosticHash();
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="rounded-[1.75rem] border border-border/70 bg-background/30 p-1">
      <div className="rounded-[1.5rem] border border-border/60 bg-gradient-card p-5 shadow-card sm:p-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">Formulario de contacto</p>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight">Pedí tu web y empezá a recibir clientes</h3>
          </div>
          <div className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-300">
            Te respondo en menos de 24 hs
          </div>
        </div>

        <p className="mt-4 text-sm leading-6 text-muted-foreground">
          Dejanos tus datos y te mando una propuesta pensada para vender más.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
          <div className="grid gap-4 md:grid-cols-2">
            <label className="grid gap-2">
              <span className="text-sm font-medium text-foreground/90">Tu nombre</span>
              <input
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
                autoComplete="name"
                className="h-11 rounded-2xl border border-border bg-background/40 px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="Ej. María López"
              />
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-medium text-foreground/90">Tu WhatsApp</span>
              <input
                type="tel"
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                required
                autoComplete="tel"
                className="h-11 rounded-2xl border border-border bg-background/40 px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="+54 11 1234 5678"
              />
            </label>
          </div>

          <label className="grid gap-2">
            <span className="text-sm font-medium text-foreground/90">Tipo de negocio</span>
            <select
              value={tipoNegocio}
              onChange={(e) => setTipoNegocio(e.target.value)}
              required
              className="h-11 rounded-2xl border border-border bg-background/40 px-4 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            >
              {businessOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <Button type="submit" variant="hero" size="lg" className="justify-center" disabled={submitting || !nombre.trim() || !whatsapp.trim()}>
              {submitting ? "Enviando..." : "Quiero mi web"}
            </Button>
            <p className="text-xs text-muted-foreground">
              {status || "Te respondo en menos de 24 hs y sin compromiso."}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
