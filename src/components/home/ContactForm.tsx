import { FormEvent, useState } from "react";

type ContactFormProps = {
  webhookUrl: string;
};

export function ContactForm({ webhookUrl }: ContactFormProps) {
  const [nombre, setNombre] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");
    setMessage("");

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre: nombre.trim(),
          whatsapp: whatsapp.trim(),
          origen: "landing_principal",
        }),
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
        <p className="rounded-2xl border border-emerald-400/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200">
          {message}
        </p>
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
