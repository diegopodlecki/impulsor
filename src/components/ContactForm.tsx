import * as React from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { enviarEmailFormulario, insertarFormulario } from "@/features/formularios/formularios";

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function ContactForm() {
  const [nombre, setNombre] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [mensaje, setMensaje] = React.useState("");
  const [submitting, setSubmitting] = React.useState(false);
  const [status, setStatus] = React.useState("");
  const [emailError, setEmailError] = React.useState("");

  const clearDiagnosticHash = React.useCallback(() => {
    if (window.location.hash === "#diagnostico") {
      window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
    }
  }, []);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);

    if (value && !isValidEmail(value)) {
      setEmailError("Formato de correo inválido");
      return;
    }

    setEmailError("");
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting) return;

    if (!isValidEmail(email)) {
      setEmailError("Formato de correo inválido");
      return;
    }

    clearDiagnosticHash();
    setSubmitting(true);
    setStatus("Enviando...");

    try {
      const { error: insertError } = await insertarFormulario({
        nombre,
        email,
        mensaje,
      });

      if (insertError) throw insertError;
      toast.success("Tu consulta quedó guardada");

      const { error: emailError } = await enviarEmailFormulario({
        nombre,
        correo_electronico: email,
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
      setEmail("");
      setMensaje("");
      setEmailError("");
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
    <form onSubmit={handleSubmit} className="grid gap-4">
      <label className="grid gap-2">
        <span className="text-sm font-medium text-foreground/90">Tu nombre</span>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
          autoComplete="name"
          className="h-11 rounded-xl border border-border bg-background/40 px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          placeholder="Ej. María López"
        />
      </label>

      <label className="grid gap-2">
        <span className="text-sm font-medium text-foreground/90">Tu correo</span>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          required
          autoComplete="email"
          className={`h-11 rounded-xl border bg-background/40 px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring ${
            emailError ? "border-red-500" : "border-border"
          }`}
          placeholder="tu@email.com"
        />
        {emailError && <p className="text-xs text-red-500">{emailError}</p>}
      </label>

      <label className="grid gap-2">
        <span className="text-sm font-medium text-foreground/90">Contanos qué necesitás</span>
        <textarea
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          required
          rows={5}
          className="resize-none rounded-xl border border-border bg-background/40 px-3 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          placeholder="Contanos qué querés vender, a quién le hablás y qué resultado buscás."
        />
      </label>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" variant="hero" size="lg" className="justify-center" disabled={submitting || Boolean(emailError)}>
          {submitting ? "Enviando..." : "Quiero mi propuesta"}
        </Button>
        <p className="text-xs text-muted-foreground">
          {status || "Te respondemos con una propuesta pensada para conseguirte más clientes."}
        </p>
      </div>
    </form>
  );
}
