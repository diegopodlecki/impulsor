import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

import { RUBROS } from "@/lib/rubros";

const breadcrumbs = [
  { label: "Inicio", href: "/" },
  { label: "Webs por Rubro", href: "/webs" },
];

export default function WebsIndex() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="container py-14 sm:py-18 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/15 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300">
            <Sparkles className="h-4 w-4" />
            Webs pensadas para rankear por rubro
          </div>

          <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Webs profesionales para cada rubro
          </h1>
          <p className="mt-5 text-pretty text-base leading-7 text-muted-foreground sm:text-lg">
            Diseñadas específicamente para tu tipo de negocio
          </p>

          <nav className="mt-6 flex flex-wrap items-center justify-center gap-2 text-sm text-white/55">
            {breadcrumbs.map((item, index) => (
              <span key={item.href} className="inline-flex items-center gap-2">
                <Link to={item.href} className="transition-colors hover:text-white">
                  {item.label}
                </Link>
                {index < breadcrumbs.length - 1 ? <span>·</span> : null}
              </span>
            ))}
          </nav>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {RUBROS.map((rubro) => (
            <Link
              key={rubro.slug}
              to={`/webs/${rubro.slug}`}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/70 p-5 shadow-[0_18px_50px_-30px_rgba(15,23,42,0.7)] transition-all duration-300 hover:-translate-y-1 hover:border-white/20"
            >
              <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${rubro.color}`} />

              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${rubro.color} text-xl shadow-lg`}>
                    {rubro.emoji}
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-white">{rubro.nombrePlural}</h2>
                    <p className="text-sm text-white/55">{rubro.precioSugerido}</p>
                  </div>
                </div>

                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>

              <p className="mt-4 text-sm leading-6 text-white/70">{rubro.descripcion}</p>

              <ul className="mt-5 space-y-2">
                {rubro.beneficios.slice(0, 3).map((beneficio) => (
                  <li key={beneficio} className="flex items-start gap-2 text-sm text-white/75">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                    <span>{beneficio}</span>
                  </li>
                ))}
              </ul>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
