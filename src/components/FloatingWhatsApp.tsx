import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

export default function FloatingWhatsApp() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-40 sm:bottom-6 sm:right-6">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="mb-3 w-80 max-w-[calc(100vw-2.5rem)] overflow-hidden rounded-3xl border border-ink-200 bg-white shadow-2xl shadow-ink-900/20"
          >
            <div className="relative bg-[#075E54] p-4 text-white">
              <button
                onClick={() => setOpen(false)}
                aria-label="Cerrar"
                className="absolute right-3 top-3 grid h-7 w-7 place-items-center rounded-full bg-white/10 transition hover:bg-white/20"
              >
                <X className="h-3.5 w-3.5" />
              </button>
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-full bg-white/15 text-lg">
                  🤖
                </div>
                <div>
                  <div className="font-display text-base font-bold">WebApp Impulsor</div>
                  <div className="flex items-center gap-1.5 text-[11px] text-emerald-200">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Responde al instante
                  </div>
                </div>
              </div>
            </div>

            <div
              className="relative max-h-72 min-h-[180px] overflow-y-auto p-4"
              style={{
                backgroundColor: "#ECE5DD",
                backgroundImage:
                  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><circle cx='10' cy='10' r='1' fill='%2300000010'/><circle cx='30' cy='15' r='1' fill='%2300000010'/></svg>\")",
              }}
            >
              <div className="mb-2 flex justify-center">
                <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-[9px] font-semibold text-amber-900">
                  Hoy
                </span>
              </div>

              <div className="mb-2 flex justify-start">
                <div className="max-w-[88%] rounded-2xl rounded-bl-sm bg-white px-3 py-2 text-[13px] text-ink-900 shadow-sm">
                  ¡Hola! 👋 Soy el asistente de WebApp Impulsor. ¿En qué te puedo ayudar?
                </div>
              </div>
              <div className="flex justify-start">
                <div className="max-w-[88%] rounded-2xl rounded-bl-sm bg-white px-3 py-2 text-[13px] text-ink-900 shadow-sm">
                  <p>Puedo contarte sobre:</p>
                  <ul className="mt-1 list-disc pl-4 text-[12px]">
                    <li>Precios y planes</li>
                    <li>Cómo funciona el bot</li>
                    <li>Agendar una demo</li>
                  </ul>
                </div>
              </div>

              <div className="mt-3 flex flex-col gap-1.5">
                {[
                  "💰 Ver precios",
                  "🎯 Agendar demo",
                  "🤖 Quiero un bot",
                ].map((t) => (
                  <button
                    key={t}
                    className="rounded-full border border-emerald-500/30 bg-emerald-50 px-3 py-1.5 text-left text-[12px] font-semibold text-emerald-700 transition hover:bg-emerald-100"
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <a
              href="https://wa.me/5491100000000?text=Hola%20WebApp%20Impulsor"
              target="_blank"
              rel="noreferrer"
              className="block bg-[#075E54] py-3 text-center text-sm font-semibold text-white transition hover:bg-[#064E45]"
            >
              Abrir conversación en WhatsApp →
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen((o) => !o)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-emerald-500/40 animate-pulse-glow sm:h-16 sm:w-16"
        aria-label="Abrir chat de WhatsApp"
      >
        <MessageCircle className="h-7 w-7 sm:h-8 sm:w-8" strokeWidth={2.2} />
        <span className="absolute -top-1 -right-1 grid h-5 w-5 place-items-center rounded-full bg-rose-500 text-[10px] font-bold text-white ring-2 ring-white">
          1
        </span>
      </motion.button>
    </div>
  );
}
