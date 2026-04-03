import { useMemo } from "react";
import { CheckCircle2, ExternalLink, MessageCircle, Sparkles } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";

import { analytics } from "@/components/analytics/analytics";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { findRubroBySlug } from "@/lib/rubros";
import { buildWhatsAppUrl, cn } from "@/lib/utils";

export default function WebRubro() {
  const { rubro: rubroSlug } = useParams();
  const rubro = useMemo(() => (rubroSlug ? findRubroBySlug(rubroSlug) : undefined), [rubroSlug]);

  if (!rubro) {
    return <Navigate to="/webs" replace />;
  }

  const whatsappMessage = `Hola, soy ${rubro.nombre} y quiero saber más sobre la web para ${rubro.nombrePlural.toLowerCase()}.`;

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="container py-10 sm:py-14">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Inicio</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/webs">Webs por Rubro</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{rubro.nombrePlural}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </section>

      <section className="container pb-12 sm:pb-16 lg:pb-20">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/75">
              <span className="text-xl">{rubro.emoji}</span>
              <span>Precio sugerido: {rubro.precioSugerido}</span>
            </div>

            <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Página web profesional para {rubro.nombrePlural} en Argentina
            </h1>
            <p className="mt-5 max-w-2xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg">
              {rubro.descripcion}
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <Button asChild size="lg" className="bg-[#25D366] text-white hover:bg-[#20bd5a]">
                <a
                  href={buildWhatsAppUrl(whatsappMessage)}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => analytics.whatsappClick("hero_primary")}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Consultar por WhatsApp
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={rubro.demoUrl} target="_blank" rel="noreferrer">
                  Ver demo en vivo
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {rubro.keywords.map((keyword) => (
                <span
                  key={keyword}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium text-white/60"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/70 shadow-[0_18px_50px_-30px_rgba(15,23,42,0.7)]">
            <div className={`h-1 bg-gradient-to-r ${rubro.color}`} />
            <iframe
              title={`Demo de ${rubro.nombrePlural}`}
              src={rubro.demoUrl}
              className="h-[560px] w-full bg-white"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="container py-12 sm:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted-foreground">¿Te suena familiar?</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Los problemas más comunes de {rubro.nombrePlural}
          </h2>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {rubro.problemas.map((problema, index) => (
            <article
              key={problema}
              className="rounded-[1.75rem] border border-white/10 bg-slate-950/70 p-6 shadow-[0_18px_50px_-30px_rgba(15,23,42,0.65)]"
            >
              <div className="flex items-center gap-3">
                <div className={`flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br ${rubro.color} text-white`}>
                  {index + 1}
                </div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/45">Problema</p>
              </div>
              <p className="mt-4 text-sm leading-6 text-white/75">{problema}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container py-12 sm:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted-foreground">Beneficios</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Lo que una web específica le da a {rubro.nombrePlural}
            </h2>

            <ul className="mt-6 space-y-3">
              {rubro.beneficios.map((beneficio) => (
                <li key={beneficio} className="flex items-start gap-3 text-sm leading-6 text-white/78">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                  <span>{beneficio}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-950 to-slate-900 p-6 sm:p-8">
            <div className={cn("inline-flex items-center gap-2 rounded-full bg-gradient-to-r px-4 py-2 text-sm font-semibold text-white", rubro.color)}>
              <Sparkles className="h-4 w-4" />
              Demo en vivo
            </div>

            <div className="mt-5 overflow-hidden rounded-[1.5rem] border border-white/10 bg-white">
              <iframe
                title={`Vista previa de ${rubro.nombrePlural}`}
                src={rubro.demoUrl}
                className="h-[420px] w-full"
                loading="lazy"
              />
            </div>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Button asChild className="bg-[#25D366] text-white hover:bg-[#20bd5a]">
                <a
                  href={buildWhatsAppUrl(whatsappMessage)}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => analytics.whatsappClick("cta_final")}
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Pedir esta propuesta
                </a>
              </Button>
              <Button asChild variant="outline">
                <Link to="/webs">← Ver todos los rubros</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
