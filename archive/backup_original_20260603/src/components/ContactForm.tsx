import * as React from "react";
import { CheckCircle2, Mail, MessageCircle, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { useLocation } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { analytics, trackFormSubmit } from "@/components/analytics/analytics";
import { BadgeChip, TextAreaField, TextField } from "@/components/design-system";
import {
  formatBudgetLabel,
  getContextualWhatsappMessage,
  leadBusinessOptions,
  leadBudgetOptions,
  whatsappLink,
} from "@/components/leads/leadCapture";

type ContactFormProps = {
  title?: string;
  description?: string;
  buttonLabel?: string;
  trustText?: string;
  eyebrow?: string;
  sourceLabel?: string;
  id?: string;
};

type ContactValues = {
  nombre: string;
  email: string;
  negocio: string;
  problema: string;
  presupuesto: string;
};

type FieldKey = keyof ContactValues;

const initialValues: ContactValues = {
  nombre: "",
  email: "",
  negocio: "",
  problema: "",
  presupuesto: "",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateField(field: FieldKey, value: string) {
  const trimmed = value.trim();

  switch (field) {
    case "nombre":
      return trimmed.length >= 2 ? "" : "Ingresá tu nombre completo.";
    case "email":
      return emailPattern.test(trimmed) ? "" : "Ingresá un email válido.";
    case "negocio":
      return trimmed ? "" : "Elegí el rubro de tu negocio.";
    case "problema":
      return trimmed.length >= 15 ? "" : "Contanos un poco más sobre el problema que querés resolver.";
    case "presupuesto":
      return trimmed ? "" : "Seleccioná un rango aproximado.";
    default:
      return "";
  }
}

function validateAll(values: ContactValues) {
  return (Object.keys(values) as FieldKey[]).reduce<Record<string, string>>((acc, field) => {
    const error = validateField(field, values[field]);
    if (error) acc[field] = error;
    return acc;
  }, {});
}

export function ContactForm({
  title = "Pedí una propuesta pensada para tu negocio",
  description = "Dejanos tus datos y te respondo con una propuesta clara, sin vueltas y alineada a tu tipo de servicio.",
  buttonLabel = "Quiero más clientes",
  trustText = "Te respondo en menos de 24 hs hábiles.",
  eyebrow = "Propuesta personalizada",
  sourceLabel = "sitio principal",
  id = "contact-form",
}: ContactFormProps) {
  const location = useLocation();
  const [values, setValues] = React.useState<ContactValues>(initialValues);
  const [errors, setErrors] = React.useState<Partial<Record<FieldKey, string>>>({});
  const [touched, setTouched] = React.useState<Record<FieldKey, boolean>>({
    nombre: false,
    email: false,
    negocio: false,
    problema: false,
    presupuesto: false,
  });
  const [submitting, setSubmitting] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [apiError, setApiError] = React.useState("");

  const endpoint = import.meta.env.VITE_FORMSPREE_CONTACT_ENDPOINT as string | undefined;

  function updateField(field: FieldKey, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    if (touched[field]) {
      setErrors((current) => ({ ...current, [field]: validateField(field, value) }));
    }
  }

  function markTouched(field: FieldKey) {
    setTouched((current) => ({ ...current, [field]: true }));
    setErrors((current) => ({ ...current, [field]: validateField(field, values[field]) }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setApiError("");

    const nextErrors = validateAll(values);
    setErrors(nextErrors);
    setTouched({
      nombre: true,
      email: true,
      negocio: true,
      problema: true,
      presupuesto: true,
    });

    if (Object.keys(nextErrors).length > 0) {
      toast.error("Revisá los campos marcados antes de enviar.");
      return;
    }

    if (!endpoint) {
      toast.error("Falta configurar Formspree en el entorno.");
      setApiError("Configurá `VITE_FORMSPREE_CONTACT_ENDPOINT` para activar el envío.");
      return;
    }

    setSubmitting(true);

    try {
      const formData = new FormData();
      formData.append("nombre", values.nombre.trim());
      formData.append("email", values.email.trim());
      formData.append("negocio", values.negocio.trim());
      formData.append("problema", values.problema.trim());
      formData.append("presupuesto", values.presupuesto.trim());
      formData.append("source", sourceLabel);
      formData.append("page", location.pathname);
      formData.append(
        "_subject",
        `Nueva consulta desde WebAppImpulsor - ${values.negocio.trim() || "sin rubro"}`
      );
      formData.append("_replyto", values.email.trim());

      const response = await fetch(endpoint, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        let message = "No pudimos enviar tu consulta.";

        try {
          const payload = (await response.json()) as { error?: string; message?: string };
          message = payload.error ?? payload.message ?? message;
        } catch {
          // keep default message
        }

        throw new Error(message);
      }

      trackFormSubmit({
        formName: "contacto_principal",
        status: "success",
        channel: "formspree",
        label: buttonLabel,
      });
      toast.success("Consulta enviada");
      setSuccess(true);
      setValues(initialValues);
      setErrors({});
      setTouched({
        nombre: false,
        email: false,
        negocio: false,
        problema: false,
        presupuesto: false,
      });
    } catch (error) {
      const message = error instanceof Error ? error.message : "No pudimos enviar tu consulta.";
      trackFormSubmit({
        formName: "contacto_principal",
        status: "failure",
        channel: "formspree",
        label: buttonLabel,
        errorMessage: message,
      });
      toast.error(message);
      setApiError(message);
    } finally {
      setSubmitting(false);
    }
  }

  if (success) {
    return (
      <div className="card-service p-1">
        <div className="card-service">
          <BadgeChip className="border-emerald-500/20 bg-emerald-500/10 text-emerald-300">
            <CheckCircle2 className="h-3.5 w-3.5" />
            Consulta enviada
          </BadgeChip>
          <h3 className="mt-4 text-h3">Gracias. Ya recibimos tu consulta.</h3>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            Te respondo en menos de 24 hs hábiles con una propuesta concreta para tu negocio.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <Button asChild variant="hero" size="lg" className="justify-center">
              <a
                href={whatsappLink(getContextualWhatsappMessage(location.pathname, "contacto"))}
                target="_blank"
                rel="noreferrer"
                data-whatsapp-origin="form-success"
                data-analytics-cta="form-success-whatsapp"
                onClick={() => analytics.whatsappClick("cta_final")}
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Seguir por WhatsApp
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="justify-center border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white">
              <a href="#precios" data-analytics-cta="form-success-plans">
                <Sparkles className="mr-2 h-4 w-4" />
                Ver planes
              </a>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="card-service p-1">
      <div className="card-service">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-label text-muted-foreground">{eyebrow}</p>
            <h3 className="mt-2 text-h3">{title}</h3>
          </div>
          <BadgeChip className="border-emerald-500/20 bg-emerald-500/10 text-emerald-300 normal-case tracking-normal">
            <Mail className="mr-1 inline h-3.5 w-3.5" />
            {trustText}
          </BadgeChip>
        </div>

        <p className="mt-4 text-sm leading-6 text-muted-foreground">{description}</p>
        <p className="mt-3 text-sm font-medium text-foreground/90">
          También podés escribir por WhatsApp, pero este formulario me ayuda a responderte con una propuesta más precisa y mejor alineada a tu negocio.
        </p>

        <form onSubmit={handleSubmit} id={id} className="mt-6 grid gap-4">
          <div className="grid gap-4 md:grid-cols-2">
            <TextField
              label="Tu nombre"
              value={values.nombre}
              onChange={(e) => updateField("nombre", e.target.value)}
              onBlur={() => markTouched("nombre")}
              required
              autoComplete="name"
              placeholder="Ej. María López"
              error={touched.nombre ? errors.nombre : undefined}
            />

            <TextField
              label="Tu email"
              type="email"
              value={values.email}
              onChange={(e) => updateField("email", e.target.value)}
              onBlur={() => markTouched("email")}
              required
              autoComplete="email"
              placeholder="maria@tuempresa.com"
              error={touched.email ? errors.email : undefined}
            />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <label className="grid gap-2">
              <span className="text-label text-white/80">Rubro del negocio</span>
              <select
                value={values.negocio}
                onChange={(e) => updateField("negocio", e.target.value)}
                onBlur={() => markTouched("negocio")}
                className="input-shell"
                data-state={touched.negocio && errors.negocio ? "error" : undefined}
              >
                <option value="">Elegí tu rubro</option>
                {leadBusinessOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {touched.negocio && errors.negocio ? <span className="text-xs text-[var(--color-error)]">{errors.negocio}</span> : null}
            </label>

            <label className="grid gap-2">
              <span className="text-label text-white/80">Presupuesto aproximado</span>
              <select
                value={values.presupuesto}
                onChange={(e) => updateField("presupuesto", e.target.value)}
                onBlur={() => markTouched("presupuesto")}
                className="input-shell"
                data-state={touched.presupuesto && errors.presupuesto ? "error" : undefined}
              >
                <option value="">Elegí un rango</option>
                {leadBudgetOptions.map((option) => (
                  <option key={option} value={option}>
                    {formatBudgetLabel(option)}
                  </option>
                ))}
              </select>
              {touched.presupuesto && errors.presupuesto ? <span className="text-xs text-[var(--color-error)]">{errors.presupuesto}</span> : null}
            </label>
          </div>

          <TextAreaField
            label="Qué problema querés resolver"
            value={values.problema}
            onChange={(e) => updateField("problema", e.target.value)}
            onBlur={() => markTouched("problema")}
            required
            rows={4}
            placeholder="Ej. Necesito más consultas, una imagen más profesional y un sitio que convierta mejor."
            error={touched.problema ? errors.problema : undefined}
            helperText="Contanos el contexto para darte una propuesta más precisa."
          />
          <div className="flex items-center justify-between gap-3">
            <span className="text-xs text-muted-foreground">{values.problema.length}/240</span>
            <div className="flex items-center justify-between gap-3">
              {apiError ? <span className="text-xs text-[var(--color-error)]">{apiError}</span> : null}
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <Button
              type="submit"
              variant="hero"
              size="lg"
              className="justify-center"
              data-analytics-cta="contact-form-submit"
              disabled={submitting || !values.nombre.trim() || !values.email.trim() || !values.negocio.trim() || !values.problema.trim() || !values.presupuesto.trim()}
            >
              {submitting ? "Analizando..." : buttonLabel}
            </Button>
            <p className="text-xs text-muted-foreground">
              {apiError || trustText}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
