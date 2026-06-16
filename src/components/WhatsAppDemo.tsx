import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

export type WhatsAppDemoMessage = {
  from: "bot" | "user";
  text: string;
  delay: number;
  options?: string[];
};

type WhatsAppDemoProps = {
  messages: WhatsAppDemoMessage[];
  title: string;
  subtitle?: string;
  accentLabel?: string;
  className?: string;
};

export function WhatsAppDemo({ messages, title, subtitle, accentLabel = "Demo en vivo", className = "" }: WhatsAppDemoProps) {
  const [step, setStep] = useState(0);
  const [typed, setTyped] = useState(0);
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const currentMessages = useMemo(() => messages.slice(0, step), [messages, step]);
  const activeMessage = messages[step];

  useEffect(() => {
    if (!messages.length) return;

    let timer: ReturnType<typeof setTimeout>;

    if (step >= messages.length) {
      timer = setTimeout(() => {
        setStep(0);
        setTyped(0);
      }, 2400);
      return () => clearTimeout(timer);
    }

    const current = messages[step];
    const typingDuration = Math.max(500, current.delay - 350);

    setTyping(true);
    setTyped(0);

    const typingInterval = current.from === "bot"
      ? setInterval(() => {
          setTyped((value) => Math.min(current.text.length, value + Math.max(1, Math.ceil(current.text.length / 18))));
        }, Math.max(25, Math.floor(typingDuration / Math.max(10, current.text.length / 2))))
      : null;

    timer = setTimeout(() => {
      if (typingInterval) clearInterval(typingInterval);
      setTyping(false);
      setTyped(current.text.length);
      setStep((value) => value + 1);
    }, current.delay);

    return () => {
      clearTimeout(timer);
      if (typingInterval) clearInterval(typingInterval);
    };
  }, [messages, step]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [step, typing]);

  return (
    <div className={`relative mx-auto w-full max-w-[520px] ${className}`}>
      <motion.div
        animate={{ opacity: [0.55, 0.9, 0.55], scale: [1, 1.05, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -inset-8 -z-10 rounded-[3rem] bg-gradient-to-br from-emerald-400/30 via-teal-400/20 to-cyan-400/30 blur-3xl"
      />

      <div className="absolute -top-3 left-1/2 z-30 -translate-x-1/2">
        <div className="flex items-center gap-1.5 rounded-full bg-slate-950/90 px-3 py-1 text-[10px] font-semibold text-white shadow-lg backdrop-blur">
          <motion.span
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.2, repeat: Infinity }}
            className="h-1.5 w-1.5 rounded-full bg-rose-500"
          />
          {accentLabel}
        </div>
      </div>

      <div className="relative overflow-hidden rounded-[2.5rem] border-[10px] border-slate-950 bg-slate-950 shadow-[0_30px_100px_-42px_rgba(0,0,0,0.85)]">
        <div className="absolute left-1/2 top-0 z-20 h-6 w-32 -translate-x-1/2 rounded-b-2xl bg-slate-950" />

        <div className="flex items-center justify-between bg-slate-950 px-6 pt-2 pb-1 text-[10px] font-semibold text-white">
          <span>9:41</span>
          <div className="flex items-center gap-1">
            <span>5G</span>
            <span>100%</span>
          </div>
        </div>

        <div className="flex items-center gap-3 bg-[#075E54] px-4 py-3 text-white">
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
          <div className="grid h-9 w-9 place-items-center rounded-full bg-white/15 text-sm font-bold">
            WA
          </div>
          <div className="flex-1 leading-tight">
            <div className="text-sm font-semibold">{title}</div>
            <div className="flex items-center gap-1 text-[10px] text-emerald-200">
              <motion.span
                animate={{ opacity: [1, 0.4, 1] }}
                transition={{ duration: 1.6, repeat: Infinity }}
                className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400"
              />
              {typing ? "escribiendo..." : subtitle ?? "en línea · Bot IA"}
            </div>
          </div>
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z" />
          </svg>
        </div>

        <div
          ref={scrollRef}
          className="relative h-[440px] overflow-y-auto px-3 py-4"
          style={{
            backgroundColor: "#ECE5DD",
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'><circle cx='10' cy='10' r='1' fill='%2300000010'/><circle cx='30' cy='15' r='1' fill='%2300000010'/><circle cx='20' cy='30' r='1' fill='%2300000010'/></svg>\")",
          }}
        >
          <div className="mb-3 flex justify-center">
            <span className="rounded-full bg-amber-100/90 px-3 py-1 text-[10px] font-medium text-amber-900 shadow-sm">
              Mensajes cifrados de extremo a extremo
            </span>
          </div>

          <AnimatePresence mode="popLayout">
            {currentMessages.map((m, index) => (
              <motion.div
                key={`${index}-${m.text.slice(0, 8)}`}
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
                      ? "rounded-br-sm bg-[#DCF8C6] text-slate-900"
                      : "rounded-bl-sm bg-white text-slate-900"
                  }`}
                >
                  <p className="whitespace-pre-line">{index === step && m.from === "bot" ? m.text.slice(0, typed) : m.text}</p>
                  {m.options?.length ? (
                    <div className="mt-2 flex flex-col gap-1.5">
                      {m.options.map((option, optionIndex) => (
                        <motion.button
                          key={optionIndex}
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.15 + optionIndex * 0.08 }}
                          className="rounded-lg border border-emerald-500/40 bg-emerald-50 px-3 py-1.5 text-[12px] font-semibold text-emerald-700 transition hover:bg-emerald-100"
                        >
                          {option}
                        </motion.button>
                      ))}
                    </div>
                  ) : null}
                  <div className="mt-1 flex items-center justify-end gap-1 text-[9px] text-slate-500">
                    9:41
                    {m.from === "user" ? (
                      <svg viewBox="0 0 16 16" className="h-3 w-3 text-sky-500" fill="currentColor">
                        <path d="M11.4 4.2L6.6 9l-2-2L3.2 8.4l3.4 3.4 6.2-6.2z" />
                        <path d="M14 6.6L9.2 11.4l-.7-.7L13.3 5.9z" />
                      </svg>
                    ) : null}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          <AnimatePresence>
            {typing ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mb-2 flex justify-start"
              >
                <div className="rounded-2xl rounded-bl-sm bg-white px-3 py-2.5 shadow-sm">
                  <div className="flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
                  </div>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>

          {activeMessage?.from === "bot" && activeMessage.text.toLowerCase().includes("reserv") ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-3 flex justify-end"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/15 px-4 py-2 text-[11px] font-semibold text-emerald-700">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Confirmación de turno
              </div>
            </motion.div>
          ) : null}
        </div>

        <div className="flex items-center gap-2 bg-[#F0F0F0] px-3 py-2.5">
          <div className="flex h-9 flex-1 items-center rounded-full bg-white px-3 text-[12px] text-slate-400">
            Escribí un mensaje
          </div>
          <div className="grid h-9 w-9 place-items-center rounded-full bg-[#075E54]">
            <svg viewBox="0 0 24 24" className="h-4 w-4 text-white" fill="currentColor">
              <path d="M2 21l21-9L2 3v7l15 2-15 2z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
