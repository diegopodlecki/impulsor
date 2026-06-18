import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Message = {
  from: "bot" | "user";
  text: string;
  delay: number;
  options?: string[];
};

const script: Message[] = [
  { from: "user", text: "Hola, quisiera sacar un turno para una limpieza dental", delay: 1300 },
  { from: "bot", text: "¡Hola María! 👋 Soy el asistente virtual de Clínica Dental Sonríe. ¿Qué día te resultaría mejor?", delay: 1700, options: ["📅 Esta semana", "📅 Próxima semana"] },
  { from: "user", text: "Esta semana, jueves o viernes a la tarde", delay: 1500 },
  { from: "bot", text: "Tengo disponible:\n• Jueves 14, 17:00 hs\n• Viernes 15, 16:30 hs\n\n¿Confirmamos alguno?", delay: 1800, options: ["✅ Jueves 17:00", "✅ Viernes 16:30"] },
  { from: "user", text: "El jueves a las 17 perfecto", delay: 1400 },
  { from: "bot", text: "¡Listo! 🎉 Te agendé con la Dra. Pérez. Te enviamos la confirmación y la dirección 24 hs antes. ¡Hasta el jueves María!", delay: 2000 },
];

const PAUSE_AT_END = 2600;

export default function WhatsAppMockup() {
  const [visible, setVisible] = useState(0);
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (visible >= script.length) {
      // Loop: pause then restart -> efecto "video en loop"
      timer = setTimeout(() => {
        setVisible(0);
      }, PAUSE_AT_END);
      return () => clearTimeout(timer);
    }

    const next = script[visible];
    if (next.from === "bot") setTyping(true);

    timer = setTimeout(() => {
      setTyping(false);
      setVisible((v) => v + 1);
    }, next.delay);

    return () => clearTimeout(timer);
  }, [visible]);

  // Auto-scroll al final del chat (como video real)
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [visible, typing]);

  return (
    <div className="relative">
      <div className="relative mx-auto w-[320px] sm:w-[360px]">
        {/* glow animado tipo aura de video */}
        <motion.div
          animate={{ opacity: [0.5, 0.85, 0.5], scale: [1, 1.05, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -inset-10 -z-10 rounded-[3rem] bg-gradient-to-br from-emerald-400/40 via-teal-400/25 to-cyan-400/40 blur-3xl"
        />

        {/* "REC / EN VIVO" badge para reforzar la idea de video */}
        <div className="absolute -top-3 left-1/2 z-30 -translate-x-1/2">
          <div className="flex items-center gap-1.5 rounded-full bg-ink-900/90 px-3 py-1 text-[10px] font-semibold text-white shadow-lg backdrop-blur">
            <motion.span
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.2, repeat: Infinity }}
              className="h-1.5 w-1.5 rounded-full bg-rose-500"
            />
            DEMO EN VIVO
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[2.5rem] border-[10px] border-ink-900 bg-ink-950 shadow-2xl shadow-ink-900/30">
          {/* Notch */}
          <div className="absolute left-1/2 top-0 z-20 h-6 w-32 -translate-x-1/2 rounded-b-2xl bg-ink-900" />

          {/* Status bar */}
          <div className="flex items-center justify-between bg-ink-900 px-6 pt-2 pb-1 text-[10px] font-semibold text-white">
            <span>9:41</span>
            <div className="flex items-center gap-1">
              <span>5G</span>
              <span>100%</span>
            </div>
          </div>

          {/* WhatsApp header */}
          <div className="flex items-center gap-3 bg-[#075E54] px-4 py-3 text-white">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
            <div className="grid h-9 w-9 place-items-center rounded-full bg-white/15 text-sm font-bold">
              CS
            </div>
            <div className="flex-1 leading-tight">
              <div className="text-sm font-semibold">Clínica Sonríe</div>
              <div className="flex items-center gap-1 text-[10px] text-emerald-200">
                <motion.span
                  animate={{ opacity: [1, 0.4, 1] }}
                  transition={{ duration: 1.6, repeat: Infinity }}
                  className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400"
                />
                {typing ? "escribiendo…" : "en línea · Bot IA"}
              </div>
            </div>
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z" />
            </svg>
          </div>

          {/* Chat background */}
          <div
            ref={scrollRef}
            className="relative h-[440px] overflow-y-auto scroll-smooth px-3 py-4"
            style={{
              backgroundColor: "#ECE5DD",
              backgroundImage:
                "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'><circle cx='10' cy='10' r='1' fill='%2300000010'/><circle cx='30' cy='15' r='1' fill='%2300000010'/><circle cx='20' cy='30' r='1' fill='%2300000010'/></svg>\")",
            }}
          >
            <div className="mb-3 flex justify-center">
              <span className="rounded-full bg-amber-100/90 px-3 py-1 text-[10px] font-medium text-amber-900 shadow-sm">
                🔒 Mensajes cifrados de extremo a extremo
              </span>
            </div>

            <AnimatePresence mode="popLayout">
              {script.slice(0, visible).map((m, i) => (
                <motion.div
                  key={`${i}-${m.text.slice(0, 6)}`}
                  layout
                  initial={{ opacity: 0, y: 14, scale: 0.92 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 380, damping: 28 }}
                  className={`mb-2 flex ${m.from === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`relative max-w-[78%] rounded-2xl px-3 py-2 text-[13px] leading-snug shadow-sm ${
                      m.from === "user"
                        ? "rounded-br-sm bg-[#DCF8C6] text-ink-900"
                        : "rounded-bl-sm bg-white text-ink-900"
                    }`}
                  >
                    <p className="whitespace-pre-line">{m.text}</p>
                    {m.options && (
                      <div className="mt-2 flex flex-col gap-1.5">
                        {m.options.map((o, k) => (
                          <motion.button
                            key={k}
                            initial={{ opacity: 0, x: -8 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 + k * 0.1 }}
                            className="rounded-lg border border-emerald-500/40 bg-emerald-50 px-3 py-1.5 text-[12px] font-semibold text-emerald-700 transition hover:bg-emerald-100"
                          >
                            {o}
                          </motion.button>
                        ))}
                      </div>
                    )}
                    <div className="mt-1 flex items-center justify-end gap-1 text-[9px] text-ink-500">
                      9:41
                      {m.from === "user" && (
                        <svg viewBox="0 0 16 16" className="h-3 w-3 text-sky-500" fill="currentColor">
                          <path d="M11.4 4.2L6.6 9l-2-2L3.2 8.4l3.4 3.4 6.2-6.2z" />
                          <path d="M14 6.6L9.2 11.4l-.7-.7L13.3 5.9z" />
                        </svg>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            <AnimatePresence>
              {typing && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mb-2 flex justify-start"
                >
                  <div className="rounded-2xl rounded-bl-sm bg-white px-3 py-2.5 shadow-sm">
                    <div className="flex items-center gap-1">
                      <span className="typing-dot h-1.5 w-1.5 rounded-full bg-ink-400" />
                      <span className="typing-dot h-1.5 w-1.5 rounded-full bg-ink-400" />
                      <span className="typing-dot h-1.5 w-1.5 rounded-full bg-ink-400" />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Input bar */}
          <div className="flex items-center gap-2 bg-[#F0F0F0] px-3 py-2.5">
            <div className="flex h-9 flex-1 items-center rounded-full bg-white px-3 text-[12px] text-ink-400">
              Escribí un mensaje
            </div>
            <div className="grid h-9 w-9 place-items-center rounded-full bg-[#075E54]">
              <svg viewBox="0 0 24 24" className="h-4 w-4 text-white" fill="currentColor">
                <path d="M2 21l21-9L2 3v7l15 2-15 2z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Floating notification */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-4 top-24 hidden w-56 rounded-2xl border border-ink-200 bg-white p-3 shadow-xl shadow-ink-900/10 sm:block"
        >
          <div className="flex items-start gap-2">
            <div className="grid h-8 w-8 flex-shrink-0 place-items-center rounded-lg bg-emerald-100">
              <span className="text-base">📅</span>
            </div>
            <div className="flex-1">
              <div className="text-[11px] font-semibold text-ink-900">Turno confirmado</div>
              <div className="text-[10px] text-ink-500">Jueves 14 · 17:00 hs</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
          className="absolute -left-4 bottom-32 hidden w-52 rounded-2xl border border-ink-200 bg-white p-3 shadow-xl shadow-ink-900/10 sm:block"
        >
          <div className="flex items-center gap-2">
            <div className="grid h-8 w-8 place-items-center rounded-full bg-amber-100 text-base">
              💰
            </div>
            <div className="flex-1">
              <div className="text-[11px] font-semibold text-ink-900">+ $45.000 ARS</div>
              <div className="text-[10px] text-ink-500">Seña cobrada · MercadoPago</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
