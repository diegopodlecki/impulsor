import * as React from "react";
import { Download, Mail, ShieldCheck, Sparkles } from "lucide-react";
import { toast } from "sonner";

import { analytics, trackFormSubmit } from "@/components/analytics/analytics";
import { BadgeChip, TextField } from "@/components/design-system";
import { Button } from "@/components/ui/button";
import { leadMagnetOffer } from "@/components/leads/leadCapture";

type LeadMagnetValues = {
  nombre: string;
  email: string;
  negocio: string;
};

const initialValues: LeadMagnetValues = {
  nombre: "",
  email: "",
  negocio: "",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function LeadMagnetSection() {
  const endpoint = import.meta.env.VITE_FORMSPREE_LEADMAGNET_ENDPOINT as string | undefined;
  const [values, setValues] = React.useState<LeadMagnetValues>(initialValues);
  const [submitting, setSubmitting] = React.useState(false);
  const [sent, setSent] = React.useState(false);
  const [error, setError] = React.useState("");

  function updateField(field: keyof LeadMagnetValues, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    if (!values.nombre.trim() || !emailPattern.test(values.email.trim())) {
      toast.error("Completá nombre y email para recibir la guía.");
      return;
    }

    if (!endpoint) {
      const message = "Falta configurar `VITE_FORMSPREE_LEADMAGNET_ENDPOINT`.";
      setError(message);
      toast.error(message);
      return;
    }

    setSubmitting(true);

    try {
      const formData = new FormData();
      formData.append("nombre", values.nombre.trim());
      formData.append("email", values.email.trim());
      formData.append("negocio", values.negocio.trim());
      formData.append(
        "_subject",
        "Nuevo registro - Mini-guía 5 errores que alejan clientes"
      );

      const response = await fetch(endpoint, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (!response.ok) {
        throw new Error("No pudimos registrar tu email.");
      }

      trackFormSubmit({
        formName: "lead_magnet_mini_guia",
        status: "success",
        channel: "formspree",
        label: leadMagnetOffer.title,
      });
      toast.success("Te enviamos la mini-guía");
      setSent(true);
      setValues(initialValues);
    } catch (submitError) {
      const message = submitError instanceof Error ? submitError.message : "No pudimos registrar tu email.";
      trackFormSubmit({
        formName: "lead_magnet_mini_guia",
        status: "failure",
        channel: "formspree",
        label: leadMagnetOffer.title,
        errorMessage: message,
      });
      toast.error(message);
      setError(message);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="recurso-gratuito" className="container py-16 sm:py-20">
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <p className="text-label text-[#0EA5E9]">
            {leadMagnetOffer.eyebrow}
          </p>
          <h2 className="mt-3 text-h2">
            {leadMagnetOffer.title}
          </h2>
          <p className="mt-4 max-w-2xl text-body text-muted-foreground">
            {leadMagnetOffer.description}
          </p>

          <div className="mt-8 container-cards">
            {leadMagnetOffer.bullets.map((item) => (
              <a href="#recurso-gratuito" key={item} className="card-link">
                <div className="card">
                  <div className="card-image flex items-center justify-center p-6 bg-slate-50">
                    <Sparkles className="h-8 w-8 text-[#0EA5E9]" />
                  </div>
                  <div className="card-content">
                    <h3 className="card-title">Recurso</h3>
                    <p className="card-description">{item}</p>
                  </div>
                  <div className="card-footer">
                    <span>Quiero este sistema</span>
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="card-service ring-1 ring-[#0EA5E9]/20 p-6 sm:p-8">
          {sent ? (
            <div className="rounded-[1.5rem] border border-emerald-400/20 bg-emerald-500/10 p-6">
              <BadgeChip className="border-emerald-500/20 bg-emerald-500/10 text-emerald-300">
                <ShieldCheck className="h-3.5 w-3.5" />
                Registro confirmado
              </BadgeChip>
              <h3 className="mt-4 text-h3 text-white">Listo. Te la enviamos por correo.</h3>
              <p className="mt-3 text-small text-white/70">
                Revisá tu bandeja de entrada. Si querés acelerar, también podés escribir por WhatsApp y te oriento según tu caso.
              </p>
              <Button asChild size="lg" className="mt-6 w-full bg-[#25D366] text-white hover:bg-[#20bd5a]">
                <a
                  href="https://wa.me/541166448389"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => analytics.whatsappClick("cta_final")}
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Quiero revisar mi web
                </a>
              </Button>
            </div>
          ) : (
            <>
              <BadgeChip className="border-[#0EA5E9]/20 bg-[#0EA5E9]/10 text-[#7dd3fc]">
                <Download className="h-3.5 w-3.5" />
                Recurso gratuito
              </BadgeChip>
              <h3 className="mt-4 text-h3 text-slate-900">Te lo envío por email</h3>
              <p className="mt-3 text-small text-slate-600">
                Ideal si todavía no querés pedir una propuesta, pero sí querés detectar qué está frenando tus consultas.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
                <TextField
                  label="Tu nombre"
                  value={values.nombre}
                  onChange={(e) => updateField("nombre", e.target.value)}
                  placeholder="María López"
                  className="text-white"
                />

                <TextField
                  label="Tu email"
                  type="email"
                  value={values.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  placeholder="maria@tuempresa.com"
                  className="text-white"
                />

                <TextField
                  label="Rubro del negocio"
                  value={values.negocio}
                  onChange={(e) => updateField("negocio", e.target.value)}
                  placeholder="Psicología, abogacía, consultoría..."
                  className="text-white"
                />

                <Button type="submit" size="lg" className="w-full bg-[#0EA5E9] text-white hover:bg-[#0284C7]" disabled={submitting}>
                  {submitting ? "Enviando..." : "Recibir mini-guía"}
                </Button>

                <p className="text-xs leading-5 text-slate-500">
                  Al registrarte aceptás recibir el material y una secuencia breve de seguimiento. Podés darte de baja cuando quieras.
                </p>
                {error ? <p className="text-xs leading-5 text-rose-300">{error}</p> : null}
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
