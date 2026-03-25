import * as React from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { enviarEmailFormulario, insertarFormulario } from "@/features/formularios/formularios";

export function ContactForm() {
  const [nombre, setNombre] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [mensaje, setMensaje] = React.useState("");
  const [submitting, setSubmitting] = React.useState(false);
  const [status, setStatus] = React.useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting) return;

    setSubmitting(true);
    setStatus("Enviando...");

    try {
      const { error: insertError } = await insertarFormulario({
        nombre,
        email,
        mensaje,
      });

      if (insertError) throw insertError;
      toast.success("Formulario guardado");

      try {
        const { error: emailError } = await enviarEmailFormulario({
          nombre,
          correo_electronico: email,
          mensaje,
        });

        if (emailError) {
          console.error("ERROR EMAIL:", emailError);
          toast.error("Se guardó el mensaje, pero falló el aviso por email");
          setStatus("Formulario enviado. El aviso por email falló, pero los datos quedaron guardados.");
        } else {
          toast.success("Aviso por email enviado");
          setStatus("Formulario enviado correctamente.");
        }
      } catch (emailError) {
        console.error("ERROR EMAIL:", emailError);
        toast.error("Se guardó el mensaje, pero falló el aviso por email");
        setStatus("Formulario enviado. El aviso por email falló, pero los datos quedaron guardados.");
      }

      setNombre("");
      setEmail("");
      setMensaje("");
    } catch (error) {
      console.error(error);
      toast.error("Error al enviar formulario");
      setStatus("");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <label className="grid gap-2">
        <span className="text-sm font-medium text-foreground/90">Nombre</span>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
          autoComplete="name"
          className="h-11 rounded-xl border border-border bg-background/40 px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          placeholder="Tu nombre"
        />
      </label>

      <label className="grid gap-2">
        <span className="text-sm font-medium text-foreground/90">Email</span>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="email"
          className="h-11 rounded-xl border border-border bg-background/40 px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          placeholder="tu@email.com"
        />
      </label>

      <label className="grid gap-2">
        <span className="text-sm font-medium text-foreground/90">Mensaje</span>
        <textarea
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          required
          rows={5}
          className="resize-none rounded-xl border border-border bg-background/40 px-3 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          placeholder="Escribí tu mensaje"
        />
      </label>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" variant="hero" size="lg" className="justify-center" disabled={submitting}>
          {submitting ? "Enviando..." : "Enviar formulario"}
        </Button>
        <p className="text-xs text-muted-foreground">{status || "Los datos se guardan en la tabla formularios."}</p>
      </div>
    </form>
  );
}
