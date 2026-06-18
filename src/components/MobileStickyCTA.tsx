export default function MobileStickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-ink-200 bg-white/95 px-4 py-3 shadow-[0_-10px_30px_rgba(15,23,42,0.08)] backdrop-blur md:hidden">
      <div className="mx-auto flex max-w-7xl items-center gap-3">
        <a
          href="#contacto"
          className="inline-flex flex-1 items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/25"
        >
          Solicitar diagnóstico gratis
        </a>
        <a
          href="https://wa.me/5491100000000?text=Hola%20WebApp%20Impulsor"
          target="_blank"
          rel="noreferrer"
          className="inline-flex flex-shrink-0 items-center justify-center rounded-full border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700"
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
}
