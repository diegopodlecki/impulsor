import { FormEvent, useState } from "react";
import { supabase } from "@/lib/supabase";

type ContactFormProps = {
  webhookUrl: string;
};

export function ContactForm({ webhookUrl }: ContactFormProps) {
  const [nombre, setNombre] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const pathname = typeof window !== "undefined" ? window.location.pathname : "/";
  const searchParams = typeof window !== "undefined" ? new URLSearchParams(window.location.search) : null;
  const leadPayload = {
    nombre: nombre.trim(),
    whatsapp: whatsapp.trim(),
    origen: "landing_principal",
    path: pathname,
    created_at: new Date().toISOString(),
    utm_source: searchParams?.get("utm_source") ?? "",
    utm_medium: searchParams?.get("utm_medium") ?? "",
    utm_campaign: searchParams?.get("utm_campaign") ?? "",
  };

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");
    setMessage("");

    try {
      if (supabase) {
        const { error: supabaseError } = await supabase.from("contactos").insert(leadPayload);

        if (supabaseError) {
          throw new Error("No pudimos guardar tu solicitud.");
        }
      }

      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(leadPayload),
      });

      if (!response.ok) throw new Error("No pudimos enviar tu solicitud.");

      setMessage("Listo. Recibimos tu solicitud y te contactaremos pronto para coordinar la demo.");
      setNombre("");
      setWhatsapp("");
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : "Ocurrió un error inesperado.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-5 space-y-4 rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 shadow-[0_24px_80px_-36px_rgba(0,0,0,0.45)] backdrop-blur-xl" id="contacto">
      <label className="block space-y-2">
        <span className="text-sm font-medium text-white/80">Nombre</span>
        <input
          type="text"
          value={nombre}
          onChange={(event) => setNombre(event.target.value)}
          placeholder="Tu nombre completo"
          className="w-full rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-4 text-white outline-none transition placeholder:text-white/30 focus:border-emerald-400/60 focus:ring-2 focus:ring-emerald-400/20"
          required
        />
      </label>

      <label className="block space-y-2">
        <span className="text-sm font-medium text-white/80">WhatsApp</span>
        <input
          type="tel"
          value={whatsapp}
          onChange={(event) => setWhatsapp(event.target.value)}
          placeholder="+54 11 1234 5678"
          className="w-full rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-4 text-white outline-none transition placeholder:text-white/30 focus:border-emerald-400/60 focus:ring-2 focus:ring-emerald-400/20"
          required
        />
        <span className="text-xs text-white/45">Incluí el código de país y tu característica de área.</span>
      </label>

      <button
        type="submit"
        disabled={loading}
        className="inline-flex w-full items-center justify-center rounded-2xl bg-gradient-to-r from-emerald-500 to-green-500 px-5 py-4 text-base font-bold text-white shadow-lg shadow-emerald-500/25 transition hover:scale-[1.01] hover:shadow-emerald-500/35 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {loading ? "Enviando..." : "Solicitá una Demo Gratuita"}
      </button>

      {message ? (
        <div className="rounded-2xl border border-emerald-400/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200">
          <div className="flex items-start gap-3">
            <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-400 text-[11px] font-black text-slate-950">
              ✓
            </span>
            <div>
              <p className="font-semibold text-emerald-100">Solicitud enviada</p>
              <p className="mt-1 leading-6 text-emerald-200/90">{message}</p>
            </div>
          </div>
        </div>
      ) : null}

      {error ? (
        <p className="rounded-2xl border border-rose-400/20 bg-rose-500/10 px-4 py-3 text-sm text-rose-200">
          {error}
        </p>
      ) : null}

      <p className="text-xs leading-5 text-white/45">
        Sin spam. Solo usamos tus datos para coordinar el diagnóstico de automatización.
      </p>
    </form>
  );
}
