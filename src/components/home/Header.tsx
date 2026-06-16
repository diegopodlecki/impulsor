import { useState } from "react";

type HeaderProps = {
  onContactClick?: () => void;
};

export function Header({ onContactClick }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-20 border-b border-white/5 bg-slate-950/70 backdrop-blur-2xl">
      <div className="container">
        <div className="flex h-18 items-center justify-between gap-3 py-3 sm:h-20 sm:gap-4 sm:py-0">
          <a href="#top" className="inline-flex items-center gap-3">
            <div className="relative grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-600 shadow-[0_0_30px_-18px_rgba(16,185,129,0.8)]">
              <span className="text-[10px] font-black tracking-[0.16em] text-white">WA</span>
              <span className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-emerald-300 ring-2 ring-slate-950" />
            </div>
            <div className="leading-none">
              <span className="font-heading text-lg font-extrabold tracking-tight text-white">WebAppImpulsor</span>
              <span className="mt-0.5 block text-[9px] font-semibold uppercase tracking-[0.18em] text-white/45">
                Automatización con IA
              </span>
            </div>
          </a>

          <nav className="hidden items-center gap-6 text-sm text-white/60 md:flex xl:gap-8">
            <a href="#como-funciona" className="transition hover:text-white">Cómo funciona</a>
            <a href="#casos-de-uso" className="transition hover:text-white">Casos de uso</a>
            <a href="#faq" className="transition hover:text-white">FAQ</a>
          </nav>

          <div className="hidden items-center gap-2.5 md:flex">
            <a
              href="#contacto"
              onClick={onContactClick}
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-green-500 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-emerald-500/20 transition hover:translate-y-[-1px] hover:shadow-emerald-500/30"
            >
              Solicitar diagnóstico
            </a>
          </div>

          <button
            aria-label="Abrir menú"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-white md:hidden"
            onClick={() => setMenuOpen((value) => !value)}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {menuOpen ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <>
                  <path d="M4 7h16" />
                  <path d="M4 12h16" />
                  <path d="M4 17h16" />
                </>
              )}
            </svg>
          </button>
        </div>

        <div
          className={`overflow-hidden border-t border-white/5 md:hidden ${
            menuOpen ? "max-h-64 pb-4 opacity-100" : "max-h-0 opacity-0"
          } transition-all duration-300`}
        >
          <div className="flex flex-col gap-2 pt-4 text-sm text-white/70">
            <a href="#como-funciona" onClick={() => setMenuOpen(false)} className="rounded-2xl border border-white/5 bg-white/[0.03] px-4 py-3">
              Cómo funciona
            </a>
            <a href="#casos-de-uso" onClick={() => setMenuOpen(false)} className="rounded-2xl border border-white/5 bg-white/[0.03] px-4 py-3">
              Casos de uso
            </a>
            <a href="#faq" onClick={() => setMenuOpen(false)} className="rounded-2xl border border-white/5 bg-white/[0.03] px-4 py-3">
              FAQ
            </a>
            <a
              href="#contacto"
              onClick={() => {
                setMenuOpen(false);
                onContactClick?.();
              }}
              className="mt-1 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-green-500 px-4 py-3 font-bold text-white"
            >
              Solicitar diagnóstico
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
