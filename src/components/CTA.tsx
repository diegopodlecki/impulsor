import { motion } from "framer-motion";
import { MessageCircle, Calendar, MapPin, Mail, Send, Sparkles } from "lucide-react";
import { useState } from "react";

const WEBHOOK_URL = "https://hook.us2.make.com/eu6lkhi3zwlyv3pmpvs6p9t98hgunn8v";

export default function CTA() {
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [sendError, setSendError] = useState("");

  return (
    <section id="contacto" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/70 via-transparent to-teal-100/70" />
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald-300/30 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-stretch gap-8 lg:grid-cols-5">
          {/* Left: copy + channels */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-white px-3 py-1 text-xs font-semibold text-emerald-700">
              <Sparkles className="h-3 w-3" />
              Empezá hoy
            </span>
            <h2 className="font-display mt-4 text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl lg:text-5xl">
              Tu bot puede estar{" "}
              <span className="bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">
                listo esta semana
              </span>
            </h2>
            <p className="mt-4 text-lg text-ink-600">
              Escribinos por el canal que prefieras. Te respondemos en menos de 2 horas hábiles.
            </p>

            <div className="mt-8 space-y-3">
              <a
                href="https://wa.me/5491100000000?text=Hola%20WebApp%20Impulsor%2C%20quiero%20impulsar%20mi%20negocio"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-ink-200 bg-white p-4 transition hover:border-emerald-300 hover:shadow-lg hover:shadow-emerald-500/5"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-[#25D366] text-white shadow-lg shadow-emerald-500/20">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-semibold text-ink-900">WhatsApp</div>
                  <div className="text-xs text-ink-500">+54 9 11 0000-0000</div>
                </div>
                <div className="text-xs font-semibold text-emerald-600">Online</div>
              </a>

              <a
                href="mailto:hola@webappimpulsor.com.ar"
                className="group flex items-center gap-4 rounded-2xl border border-ink-200 bg-white p-4 transition hover:border-emerald-300 hover:shadow-lg hover:shadow-emerald-500/5"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-ink-900 text-white">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-semibold text-ink-900">Email</div>
                  <div className="text-xs text-ink-500">hola@webappimpulsor.com.ar</div>
                </div>
                <svg viewBox="0 0 24 24" className="h-4 w-4 text-ink-400" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7M8 7h9v9" />
                </svg>
              </a>

              <a
                href="#contacto"
                className="group flex items-center gap-4 rounded-2xl border border-ink-200 bg-white p-4 transition hover:border-emerald-300 hover:shadow-lg hover:shadow-emerald-500/5"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 text-white">
                  <Calendar className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-semibold text-ink-900">Agendar videollamada</div>
                  <div className="text-xs text-ink-500">30 min · Sin compromiso</div>
                </div>
                <svg viewBox="0 0 24 24" className="h-4 w-4 text-ink-400" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7M8 7h9v9" />
                </svg>
              </a>
            </div>

            <div className="mt-8 flex items-center gap-2 text-sm text-ink-500">
              <MapPin className="h-4 w-4" />
              Oficinas en Palermo, CABA · Atención en toda la provincia
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative lg:col-span-3"
          >
            <div className="relative overflow-hidden rounded-3xl border border-ink-200 bg-white p-7 shadow-xl shadow-ink-900/5 sm:p-9">
              <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-gradient-to-br from-emerald-300/30 to-teal-300/30 blur-3xl" />

              <div className="relative">
                <h3 className="font-display text-2xl font-extrabold text-ink-900">
                  Pedí tu diagnóstico gratis
                </h3>
                <p className="mt-2 text-sm text-ink-600">
                  En 30 minutos te decimos qué automatizar primero para recuperar la inversión rápido.
                </p>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mt-8 flex flex-col items-center justify-center rounded-2xl border border-emerald-200 bg-emerald-50 p-10 text-center"
                  >
                    <div className="grid h-14 w-14 place-items-center rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-500/30">
                      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <h4 className="font-display mt-4 text-xl font-bold text-ink-900">
                      ¡Listo! Mensaje recibido
                    </h4>
                    <p className="mt-2 max-w-sm text-sm text-ink-600">
                      Te contactamos por WhatsApp en las próximas 2 horas hábiles. ¡Gracias por confiar en WebApp Impulsor!
                    </p>
                  </motion.div>
                ) : (
                  <form
                    onSubmit={async (e) => {
                      e.preventDefault();
                      setIsSending(true);
                      setSendError("");

                      const form = e.currentTarget;
                      const formData = new FormData(form);
                      const payload = {
                        nombre: String(formData.get("nombre") ?? ""),
                        telefono: String(formData.get("telefono") ?? ""),
                        email: String(formData.get("email") ?? ""),
                        rubro: String(formData.get("rubro") ?? ""),
                        automatizacion: String(formData.get("automatizacion") ?? ""),
                      };

                      try {
                        const response = await fetch(WEBHOOK_URL, {
                          method: "POST",
                          headers: {
                            "Content-Type": "application/json",
                          },
                          body: JSON.stringify(payload),
                        });

                        if (!response.ok) {
                          throw new Error(`Webhook responded with ${response.status}`);
                        }

                        form.reset();
                        setSubmitted(true);
                      } catch {
                        setSendError("No pudimos enviar el formulario. Probá de nuevo en un momento.");
                      } finally {
                        setIsSending(false);
                      }
                    }}
                    className="mt-7 grid gap-4 sm:grid-cols-2"
                  >
                    <div>
                      <label className="mb-1.5 block text-xs font-semibold text-ink-700">Nombre</label>
                      <input
                        name="nombre"
                        type="text"
                        required
                        placeholder="Tu nombre"
                        className="w-full rounded-xl border border-ink-200 bg-white px-3.5 py-2.5 text-sm text-ink-900 placeholder:text-ink-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs font-semibold text-ink-700">Teléfono / WhatsApp</label>
                      <input
                        name="telefono"
                        type="tel"
                        required
                        placeholder="+54 9 11 ..."
                        className="w-full rounded-xl border border-ink-200 bg-white px-3.5 py-2.5 text-sm text-ink-900 placeholder:text-ink-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="mb-1.5 block text-xs font-semibold text-ink-700">Email</label>
                      <input
                        name="email"
                        type="email"
                        required
                        placeholder="tu@email.com"
                        className="w-full rounded-xl border border-ink-200 bg-white px-3.5 py-2.5 text-sm text-ink-900 placeholder:text-ink-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="mb-1.5 block text-xs font-semibold text-ink-700">Rubro / Profesión</label>
                      <select
                        name="rubro"
                        required
                        className="w-full rounded-xl border border-ink-200 bg-white px-3.5 py-2.5 text-sm text-ink-900 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                        defaultValue=""
                      >
                        <option value="" disabled>Elegí una opción</option>
                        <option>Salud / Odontología / Estética</option>
                        <option>Estudio jurídico</option>
                        <option>Inmobiliaria</option>
                        <option>Gimnasio / Bienestar</option>
                        <option>Educación / Cursos</option>
                        <option>Comercio / Gastronomía</option>
                        <option>Otro</option>
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label className="mb-1.5 block text-xs font-semibold text-ink-700">
                        ¿Qué te gustaría automatizar? <span className="font-normal text-ink-400">(opcional)</span>
                      </label>
                      <textarea
                        name="automatizacion"
                        rows={3}
                        placeholder="Ej: Quiero que el bot agende turnos y mande recordatorios..."
                        className="w-full resize-none rounded-xl border border-ink-200 bg-white px-3.5 py-2.5 text-sm text-ink-900 placeholder:text-ink-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <button
                        type="submit"
                        disabled={isSending}
                        className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-500/30 transition hover:shadow-xl hover:shadow-emerald-500/40"
                      >
                        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                        <Send className="h-4 w-4" />
                        {isSending ? "Enviando..." : "Solicitar diagnóstico gratis"}
                      </button>
                      {sendError ? (
                        <p className="mt-3 text-center text-sm font-medium text-rose-600">{sendError}</p>
                      ) : null}
                      <p className="mt-3 text-center text-[11px] text-ink-500">
                        Al enviar aceptás nuestra política de privacidad. No spam, jamás.
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
