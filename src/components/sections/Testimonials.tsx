import { useState } from "react";
import { ChevronDown, MessageCircle, ShieldCheck, Star, Target, TrendingUp, Users } from "lucide-react";

import { analytics } from "@/components/analytics/analytics";
import { Badge } from "@/components/ui/badge";
import { TESTIMONIOS, RUBROS_ATENDIDOS, getTestimonialsJsonLd } from "@/lib/testimonios";

type CredibilityMetric = {
  label: string;
  value: string;
  caption: string;
  icon: typeof Target;
};

const credibilityNumbers: CredibilityMetric[] = [
  {
    label: "Años de experiencia",
    value: "5+",
    icon: Target,
    caption: "En proyectos orientados a captar consultas reales",
  },
  {
    label: "Proyectos entregados",
    value: "40+",
    icon: Users,
    caption: "Sitios y landings para negocios de servicios",
  },
  {
    label: "Satisfacción estimada",
    value: "95%",
    icon: Star,
    caption: "Clientes que recomiendan el proceso y el resultado",
  },
  {
    label: "Tiempo promedio",
    value: "10-20 días",
    icon: TrendingUp,
    caption: "Según alcance, contenido y nivel de personalización",
  },
  {
    label: "Rubros atendidos",
    value: "6+",
    icon: ShieldCheck,
    caption: "Profesionales y marcas de servicios",
  },
];

function StarRow({ stars }: { stars: number }) {
  return (
    <div className="flex items-center gap-1 text-amber-400" aria-label={`${stars} estrellas`}>
      {Array.from({ length: stars }).map((_, index) => (
        <Star key={index} className="h-4 w-4 fill-current" />
      ))}
    </div>
  );
}

function TestimonialAvatar({ testimonial }: { testimonial: (typeof TESTIMONIOS)[number] }) {
  const [imageError, setImageError] = useState(false);
  const shouldShowImage = Boolean(testimonial.foto) && !imageError;

  return (
    <div
      className={`flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl ${testimonial.colorAvatar} text-sm font-bold text-white`}
    >
      {shouldShowImage ? (
        <img
          src={testimonial.foto}
          alt={testimonial.nombre}
          className="h-full w-full object-cover"
          width={224}
          height={224}
          loading="lazy"
          decoding="async"
          onError={() => setImageError(true)}
        />
      ) : (
        <span>{testimonial.iniciales}</span>
      )}
    </div>
  );
}

function formatTestimonialDate(date: string) {
  const [year, month] = date.split("-").map((part) => Number(part));
  const months = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
  ];

  if (!year || !month || month < 1 || month > 12) return date;
  return `${months[month - 1]} ${year}`;
}

function TestimonialsJsonLd() {
  const jsonLd = getTestimonialsJsonLd();

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}

export function Testimonials() {
  return (
    <section id="prueba-social" className="container py-16 sm:py-20">
      <TestimonialsJsonLd />

      <div className="mx-auto max-w-3xl text-center">
        <p className="text-label text-muted-foreground">Prueba social curada</p>
        <h2 className="mt-3 text-h2">La confianza también se diseña</h2>
        <p className="mt-4 text-body text-muted-foreground">
          Señales concretas que reducen fricción, elevan la percepción de valor y ayudan a decidir con más seguridad.
        </p>
      </div>

      <div className="mt-12 grid gap-6 xl:grid-cols-[1.08fr_0.92fr]">
        <div className="grid gap-5">
          <div className="grid gap-5">
            {TESTIMONIOS.map((item) => (
              <a href="#contacto" key={item.id} className="card-link">
                <article className="card shadow-md p-0">
                  <div className="card-image flex items-center gap-4 p-6 bg-slate-50 border-b border-slate-100 h-auto">
                    <TestimonialAvatar testimonial={item} />
                    <div>
                      <h3 className="card-title text-base">{item.nombre}</h3>
                      <div className="mt-1 flex items-center gap-2">
                        <StarRow stars={item.rating} />
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{item.rubro}</span>
                      </div>
                    </div>
                  </div>

                  <div className="card-content p-6">
                    <p className="card-description line-clamp-3 italic text-slate-600">"{item.texto}"</p>
                    
                    <details
                      className="mt-4 rounded-xl border border-slate-100 bg-white p-3 text-xs"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <summary className="cursor-pointer font-bold text-slate-400 hover:text-slate-600 transition-colors uppercase tracking-widest list-none flex justify-between items-center">
                        Detalles técnicos
                        <ChevronDown className="h-3 w-3" />
                      </summary>
                      <div className="mt-2 space-y-1 text-slate-500">
                        <p>Plan: {item.plan}</p>
                        <p>Fecha: {formatTestimonialDate(item.fecha)}</p>
                      </div>
                    </details>
                  </div>

                  <div className="card-footer p-6 border-t border-slate-100 bg-slate-50/50">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#0EA5E9]">
                      <Target className="h-3.5 w-3.5" />
                      {item.resultado ? `Resultado: ${item.resultado}` : "Caso de éxito verificado"}
                    </div>
                  </div>
                </article>
              </a>
            ))}
          </div>

          <article className="card-service">
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-5 w-5 text-[#0EA5E9]" />
              <h3 className="text-h4 text-white">Casos que ya están activos</h3>
            </div>

            <div className="mt-6 grid gap-6">
              <div className="card p-0">
                <div className="card-image bg-slate-900 p-8 flex flex-col justify-center">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.22em] text-[#0EA5E9] font-bold">Caso de éxito real</p>
                      <h4 className="mt-2 text-2xl font-bold text-white tracking-tight">WebAppImpulsor</h4>
                    </div>
                    <div className="hidden sm:flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-slate-700" />
                      <span className="h-2 w-2 rounded-full bg-slate-700" />
                      <span className="h-2 w-2 rounded-full bg-[#0EA5E9]" />
                    </div>
                  </div>
                </div>

                <div className="card-content p-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <h3 className="card-title text-xs uppercase tracking-widest text-[#0EA5E9]">Problema</h3>
                      <p className="card-description mt-2">Negocios que necesitaban una presencia digital más clara.</p>
                    </div>
                    <div>
                      <h3 className="card-title text-xs uppercase tracking-widest text-[#0EA5E9]">Solución</h3>
                      <p className="card-description mt-2">Mensaje jerarquizado y arquitectura de conversión.</p>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <p className="text-xs font-bold text-slate-900">🎯 Resultado final:</p>
                    <p className="mt-1 text-sm text-slate-600">Más consultas calificadas eliminando la fricción de contacto inicial.</p>
                  </div>
                </div>

                <div className="card-footer p-6">
                  <span>Implementado en menos de 15 días</span>
                  <TrendingUp className="h-4 w-4" />
                </div>
              </div>
            </div>
          </article>
        </div>

        <div className="grid gap-6">
          <article className="card-service">
            <div className="flex items-center gap-3">
              <TrendingUp className="h-5 w-5 text-[#0EA5E9]" />
              <h3 className="text-h4 text-white">Números de credibilidad</h3>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {credibilityNumbers.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.label} className="card p-0 overflow-hidden">
                    <div className="card-image flex items-center justify-center p-4 bg-slate-50 border-b border-slate-100 h-16">
                      <Icon className="h-5 w-5 text-[#0EA5E9]" />
                    </div>
                    <div className="card-content p-4">
                      <h3 className="card-title text-sm">{item.label}</h3>
                      <p className="card-description text-2xl font-bold text-slate-900 mt-1">{item.value}</p>
                    </div>
                    <div className="card-footer p-4 border-t border-slate-100 bg-slate-50/50">
                      <p className="text-[10px] text-slate-500 leading-tight">{item.caption}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </article>

          <article className="card-service">
            <div className="flex items-center gap-3">
              <Users className="h-5 w-5 text-[#0EA5E9]" />
              <h3 className="text-h4 text-white">Ya trabajamos con</h3>
            </div>

            <p className="mt-3 text-small text-muted-foreground">
              Cuando no hay logos, mostrar rubros atendidos sigue siendo una señal clara de especialización y enfoque.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {RUBROS_ATENDIDOS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="inline-flex items-center rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-sm text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
