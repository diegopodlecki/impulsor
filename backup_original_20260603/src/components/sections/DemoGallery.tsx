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

const PLAN_PRIORITY: Record<string, number> = {
  "Todo Incluido": 0,
  Profesional: 1,
  "Presencia Básica": 2,
};

const RUBRO_PRIORITY: Record<string, number> = {
  "estetica-corporal": 0,
  psicologo: 1,
  nutricionista: 2,
  "personal-trainer": 3,
  gimnasio: 4,
  "casa-de-comidas": 5,
};

const DEMO_ITEMS: DemoItem[] = [...RUBROS]
  .map((rubro) => ({
  ...rubro,
  screenshot: rubro.previewImage || `/portfolio/${rubro.slug}-preview.jpg`,
  }))
  .sort((a, b) => {
    const planDelta = PLAN_PRIORITY[a.precioSugerido] - PLAN_PRIORITY[b.precioSugerido];
    if (planDelta !== 0) return planDelta;

    return (RUBRO_PRIORITY[a.slug] ?? 99) - (RUBRO_PRIORITY[b.slug] ?? 99);
  });

const DESIRE_MESSAGES: Record<string, string> = {
  "estetica-corporal": "Ideal para llenar la agenda",
  "psicologo": "Ideal para conseguir consultas",
  "nutricionista": "Ideal para retener clientes",
  "personal-trainer": "Listo para captar alumnos",
  "gimnasio": "Optimizado para membresías",
  "casa-de-comidas": "Listo para pedidos online"
};

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
      className="group card-interactive image-container"
      aria-label={`Abrir captura de ${item.nombrePlural}`}
    >
      <img
        src={src}
        alt={`Screenshot de ${item.nombrePlural}`}
        className="h-[240px] w-full object-cover image-hover"
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
        <p className="text-label text-muted-foreground">Catálogo de webs</p>
        <h2 className="mt-3 text-h2">Elegí tu tipo de web</h2>
        <p className="mt-4 text-body text-muted-foreground">
          Soluciones específicas para cada tipo de negocio, con resultados probados
        </p>
      </div>

      <div className="mt-12">
        <div className="mt-4 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {DEMO_ITEMS.map((item) => (
            <a
              key={item.slug}
              href={item.demoUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => analytics.demoClick(item.slug)}
              className="group card-base card-hover flex flex-col"
            >
              <div className={`h-1 bg-gradient-to-r ${item.color}`} />

              <div className="flex items-start justify-between gap-3 p-5">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{item.emoji}</span>
                    <h3 className="text-lg font-semibold text-white">Web para {item.nombre}</h3>
                  </div>
                  <p className="mt-1 text-sm text-white/55">{item.precioSugerido}</p>
                </div>

                {item.badge ? (
                  <Badge 
                    variant="outline" 
                    className={cn(
                      "border-white/20 bg-white/10 text-white/80 font-semibold text-[11px]",
                      item.badge === "Más elegido" && "border-amber-400/30 bg-amber-400/10 text-amber-300",
                      item.badge === "Nuevo" && "border-emerald-400/30 bg-emerald-400/10 text-emerald-300",
                      item.badge === "Ideal para empezar" && "border-blue-400/30 bg-blue-400/10 text-blue-300"
                    )}
                  >
                    {item.badge}
                  </Badge>
                ) : null}
              </div>

              <div className="px-6">
                <div className="group image-container shadow-lg shadow-black/20">
                  <img
                    src={item.screenshot}
                    alt={`Screenshot de Web para ${item.nombre}`}
                    className="w-full aspect-video object-cover image-hover"
                    width={1440}
                    height={900}
                    loading="lazy"
                    decoding="async"
                  />
                  {/* Overlay oscuro en hover con "Ver demo" */}
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm pointer-events-none">
                    <div className="flex flex-col items-center gap-2">
                      <span className="text-white font-semibold text-sm">Ver demo</span>
                      <ExternalLink className="h-4 w-4 text-primary" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-6 pt-4">
                {DESIRE_MESSAGES[item.slug] && (
                  <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1.5">
                    <span className="text-xs font-semibold text-primary">{DESIRE_MESSAGES[item.slug]}</span>
                  </div>
                )}
              </div>

              <div className="flex-1"></div>

              <div className="px-6 pb-6 space-y-4">
                <div className="flex items-center gap-2 mb-3">
                  <span className={cn("rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em]", "border border-white/10 bg-white/5 text-white/65")}>
                    Plan recomendado
                  </span>
                  <span className="text-xs text-white/60">{item.precioSugerido}</span>
                </div>
                <p className="text-sm text-white/70 leading-relaxed">{item.cardDescription || item.descripcion}</p>
                <a
                  href={item.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => analytics.demoClick(item.slug)}
                  className="block w-full rounded-full bg-primary/90 px-4 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary hover:scale-105 text-center"
                >
                  Ver demo
                </a>
              </div>
            </a>
          ))}
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
