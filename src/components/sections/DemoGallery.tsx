import { useEffect, useMemo, useState } from "react";
import { ArrowRight, ExternalLink, Maximize2, Phone, X } from "lucide-react";

import { analytics } from "@/components/analytics/analytics";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { RUBROS, type Rubro } from "@/lib/rubros";
import { whatsappLink, previewSvg } from "@/components/landing/landingVisuals";
import { cn } from "@/lib/utils";

type DemoItem = Rubro & {
  screenshot: string;
};

const DEMO_ITEMS: DemoItem[] = RUBROS.map((rubro) => ({
  ...rubro,
  screenshot: `/portfolio/${rubro.slug}-preview.jpg`,
}));

function DemoImage({ item, onOpen }: { item: DemoItem; onOpen: () => void }) {
  const [hasError, setHasError] = useState(false);

  const fallbackImage = useMemo(() => {
    const accentA = item.color.includes("blue")
      ? "#0EA5E9"
      : item.color.includes("purple")
        ? "#8B5CF6"
        : item.color.includes("green")
          ? "#22C55E"
          : item.color.includes("orange")
            ? "#F97316"
            : item.color.includes("red")
              ? "#EF4444"
              : "#EC4899";

    return previewSvg(item.nombrePlural, item.descripcion, accentA, "#0f172a");
  }, [item.color, item.descripcion, item.nombrePlural]);

  const src = hasError ? fallbackImage : item.screenshot;

  return (
    <button
      type="button"
      onClick={onOpen}
      className="group relative block w-full overflow-hidden rounded-[1.4rem] border border-white/10 bg-slate-950/60 text-left"
      aria-label={`Abrir captura de ${item.nombrePlural}`}
    >
      <img
        src={src}
        alt={`Screenshot de ${item.nombrePlural}`}
        className="h-[240px] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        width={1440}
        height={900}
        loading="lazy"
        decoding="async"
        onError={() => setHasError(true)}
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/60">Screenshot real</p>
          <p className="mt-1 text-sm font-medium text-white">Abrir en pantalla completa</p>
        </div>
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white">
          <Maximize2 className="h-4 w-4" />
        </span>
      </div>
    </button>
  );
}

export function DemoGallery() {
  const [activeDemo, setActiveDemo] = useState<DemoItem | null>(null);

  useEffect(() => {
    if (!activeDemo) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveDemo(null);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeDemo]);

  return (
    <section id="demo-gallery" className="container py-16 sm:py-20">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-label text-muted-foreground">Demo gallery</p>
        <h2 className="mt-3 text-h2">Mirá cómo se ven los demos en acción</h2>
        <p className="mt-4 text-body text-muted-foreground">
          Capturas reales o, mientras tanto, vistas de respaldo para que entiendas rápido el nivel de cada demo.
        </p>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
        <article className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <Phone className="h-5 w-5 text-[#0EA5E9]" />
            <h3 className="text-h4 text-white">Así llegan nuestros clientes vs. cómo quedan</h3>
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch">
            <div className="rounded-[1.5rem] border border-white/10 bg-black/25 p-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/60">
                Sin web
              </div>
              <h4 className="mt-4 text-xl font-semibold text-white">Solo WhatsApp sin web</h4>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-white/72">
                <li>• El servicio no se entiende rápido</li>
                <li>• Falta confianza al primer vistazo</li>
                <li>• Dependen solo de redes o recomendaciones</li>
                <li>• Se repiten las mismas preguntas por chat</li>
              </ul>
            </div>

            <div className="flex items-center justify-center py-2 text-[#0EA5E9] lg:px-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-500/10">
                <ArrowRight className="h-5 w-5" />
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-emerald-400/20 bg-emerald-500/10 p-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-200">
                Con WebAppImpulsor
              </div>
              <h4 className="mt-4 text-xl font-semibold text-white">Web profesional funcionando</h4>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-white/78">
                <li>• Propuesta clara y más autoridad</li>
                <li>• CTA visibles para convertir visitas</li>
                <li>• Prueba social y contenido útil</li>
                <li>• Consultas más calificadas por WhatsApp</li>
              </ul>
            </div>
          </div>
        </article>

        <div className="grid gap-5 md:grid-cols-2">
          {DEMO_ITEMS.map((item) => (
            <article
              key={item.slug}
              className="group overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/70 shadow-[0_18px_50px_-30px_rgba(15,23,42,0.7)] transition-all duration-300 hover:-translate-y-1 hover:border-white/20"
            >
              <div className={`h-1 bg-gradient-to-r ${item.color}`} />

              <div className="flex items-start justify-between gap-3 p-5">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{item.emoji}</span>
                    <h3 className="text-lg font-semibold text-white">{item.nombrePlural}</h3>
                  </div>
                  <p className="mt-1 text-sm text-white/55">{item.precioSugerido}</p>
                </div>

                <Badge variant="outline" className="border-white/10 bg-white/5 text-white/65">
                  {item.slug}
                </Badge>
              </div>

              <div className="px-5">
                <DemoImage item={item} onOpen={() => setActiveDemo(item)} />
              </div>

              <div className="flex items-center justify-between gap-3 p-5 pt-4">
                <div className="flex items-center gap-2">
                  <span className={cn("rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em]", "border border-white/10 bg-white/5 text-white/65")}>
                    Plan recomendado
                  </span>
                  <span className="text-sm text-white/70">{item.precioSugerido}</span>
                </div>

                <Button asChild size="sm" className="bg-[#25D366] text-white hover:bg-[#20bd5a]">
                  <a
                    href={item.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => analytics.demoClick(item.slug)}
                  >
                    Ver demo
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-12 rounded-[2rem] border border-cyan-400/20 bg-slate-950 p-8 sm:p-10">
        <div className="grid gap-6 lg:grid-cols-[1.4fr_0.8fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#0EA5E9]">Urgencia suave</p>
            <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              ¿Querés una web así para tu negocio?
            </h3>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70">
              En 72 horas podría estar funcionando. Te respondo por WhatsApp con una propuesta concreta.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <Button asChild size="lg" className="w-full bg-[#25D366] text-white hover:bg-[#20bd5a]">
              <a
                href={whatsappLink("Hola, vi la galería de demos y quiero una web así para mi negocio.")}
                target="_blank"
                rel="noreferrer"
                onClick={() => analytics.whatsappClick("cta_final")}
              >
                Empezar ahora
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      <Dialog open={Boolean(activeDemo)} onOpenChange={(open) => !open && setActiveDemo(null)}>
        <DialogContent className="max-w-[92vw] border-white/10 bg-slate-950 p-0 text-white sm:max-w-5xl">
          {activeDemo ? (
            <>
              <DialogHeader className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                <div>
                  <DialogTitle className="text-lg font-semibold text-white">{activeDemo.nombrePlural}</DialogTitle>
                  <DialogDescription className="text-sm text-white/55">
                    Vista ampliada de la captura del demo
                  </DialogDescription>
                </div>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="h-10 w-10 text-white hover:bg-white/10 hover:text-white"
                  onClick={() => setActiveDemo(null)}
                  aria-label="Cerrar"
                  >
                  <X className="h-4 w-4" />
                </Button>
              </DialogHeader>

              <div className="max-h-[80vh] overflow-auto p-4">
                <img
                  src={activeDemo.screenshot}
                  alt={`Screenshot ampliado de ${activeDemo.nombrePlural}`}
                  className="h-auto w-full rounded-[1.5rem] object-cover"
                  width={1440}
                  height={900}
                  loading="eager"
                  decoding="async"
                  onError={(event) => {
                    event.currentTarget.src = previewSvg(activeDemo.nombrePlural, activeDemo.descripcion, "#0EA5E9", "#0f172a");
                  }}
                />
              </div>
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </section>
  );
}
