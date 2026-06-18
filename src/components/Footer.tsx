import { MessageCircle, MapPin } from "lucide-react";

const cols = [
  {
    title: "Servicios",
    links: [
      "Asistentes de IA",
      "Agenda de turnos",
      "Cobro de señas",
      "CRM para leads",
      "Automatizaciones a medida",
    ],
  },
  {
    title: "Empresa",
    links: ["Sobre nosotros", "Casos de éxito", "Blog", "Trabajá con nosotros"],
  },
  {
    title: "Soporte",
    links: ["Centro de ayuda", "Documentación API", "Status", "Contacto"],
  },
];

const socials = [{ label: "Instagram" }, { label: "LinkedIn" }, { label: "WhatsApp" }];

export default function Footer() {
  return (
    <footer className="relative bg-ink-950 text-ink-300">
      <div className="absolute inset-0 bg-grid-dark opacity-30" />
      <div className="absolute -top-32 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-emerald-500/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2.5">
              <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-emerald-400 to-teal-600 shadow-lg shadow-emerald-500/25">
                <MessageCircle className="h-5 w-5 text-white" strokeWidth={2.4} />
              </div>
              <div className="font-display text-lg font-extrabold text-white">
                WebApp<span className="text-emerald-400"> Impulsor</span>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-400">
              Automatizaciones de WhatsApp y asistentes virtuales con IA para profesionales de Buenos Aires, CABA, GBA y Zona Sur. Atendé 24/7, vendé más, sin contratar más gente.
            </p>
            <div className="mt-5 flex items-center gap-2 text-sm text-ink-400">
              <MapPin className="h-4 w-4" />
              Palermo, Ciudad Autónoma de Buenos Aires
            </div>
            <div className="mt-6 flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 text-xs font-bold text-ink-300 transition hover:border-emerald-400/50 hover:bg-emerald-500/10 hover:text-emerald-400"
                >
                  {s.label.charAt(0)}
                </a>
              ))}
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title} className="lg:col-span-2">
              <div className="text-sm font-semibold text-white">{c.title}</div>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-ink-400 transition hover:text-emerald-400">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:col-span-1">
            <div className="text-sm font-semibold text-white">Legal</div>
            <ul className="mt-4 space-y-2.5">
              {["Términos", "Privacidad", "Cookies"].map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm text-ink-400 transition hover:text-emerald-400">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <div className="text-xs text-ink-500">
            © {new Date().getFullYear()} WebApp Impulsor · Hecho con 💚 en Buenos Aires, Argentina.
          </div>
          <div className="flex items-center gap-4 text-xs text-ink-500">
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Todos los sistemas operativos
            </span>
            <span>·</span>
            <span>CUIT 30-12345678-9</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
