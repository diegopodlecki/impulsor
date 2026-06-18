import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Msg = { from: "bot" | "user"; text: string; delay: number };

type Props = {
  title: string;
  initials: string;
  messages: Msg[];
  accent?: string;
};

const PAUSE = 2400;

export default function ChatLoop({ title, initials, messages, accent = "#075E54" }: Props) {
  const [visible, setVisible] = useState(0);
  const [typing, setTyping] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let t: ReturnType<typeof setTimeout>;
    if (visible >= messages.length) {
      t = setTimeout(() => setVisible(0), PAUSE);
      return () => clearTimeout(t);
    }
    const next = messages[visible];
    if (next.from === "bot") setTyping(true);
    t = setTimeout(() => {
      setTyping(false);
      setVisible((v) => v + 1);
    }, next.delay);
    return () => clearTimeout(t);
  }, [visible, messages]);

  useEffect(() => {
    ref.current?.scrollTo({ top: ref.current.scrollHeight, behavior: "smooth" });
  }, [visible, typing]);

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white shadow-xl">
      {/* header */}
      <div className="flex items-center gap-2.5 px-3 py-2.5 text-white" style={{ backgroundColor: accent }}>
        <div className="grid h-8 w-8 place-items-center rounded-full bg-white/15 text-xs font-bold">
          {initials}
        </div>
        <div className="leading-tight">
          <div className="text-xs font-semibold">{title}</div>
          <div className="flex items-center gap-1 text-[9px] text-emerald-200">
            <motion.span
              animate={{ opacity: [1, 0.4, 1] }}
              transition={{ duration: 1.6, repeat: Infinity }}
              className="h-1 w-1 rounded-full bg-emerald-400"
            />
            {typing ? "escribiendo…" : "Bot IA · en línea"}
          </div>
        </div>
      </div>

      {/* body */}
      <div
        ref={ref}
        className="h-44 overflow-y-auto px-2.5 py-2.5"
        style={{ backgroundColor: "#ECE5DD" }}
      >
        <AnimatePresence mode="popLayout">
          {messages.slice(0, visible).map((m, i) => (
            <motion.div
              key={`${i}-${m.text.slice(0, 5)}`}
              layout
              initial={{ opacity: 0, y: 10, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 380, damping: 28 }}
              className={`mb-1.5 flex ${m.from === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[82%] rounded-xl px-2.5 py-1.5 text-[11px] leading-snug shadow-sm ${
                  m.from === "user"
                    ? "rounded-br-sm bg-[#DCF8C6] text-ink-900"
                    : "rounded-bl-sm bg-white text-ink-900"
                }`}
              >
                <p className="whitespace-pre-line">{m.text}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        <AnimatePresence>
          {typing && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mb-1.5 flex justify-start"
            >
              <div className="rounded-xl rounded-bl-sm bg-white px-2.5 py-2 shadow-sm">
                <div className="flex items-center gap-1">
                  <span className="typing-dot h-1 w-1 rounded-full bg-ink-400" />
                  <span className="typing-dot h-1 w-1 rounded-full bg-ink-400" />
                  <span className="typing-dot h-1 w-1 rounded-full bg-ink-400" />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
