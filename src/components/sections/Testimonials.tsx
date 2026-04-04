import { useState } from "react";
import { ChevronDown, MessageCircle, ShieldCheck, Star, Target, TrendingUp, Users } from "lucide-react";

import { analytics } from "@/components/analytics/analytics";
import { Badge } from "@/components/ui/badge";
import { TESTIMONIOS, RUBROS_ATENDIDOS, getTestimonialsJsonLd } from "@/lib/testimonios";
import { TestimonialModal } from "../TestimonialModal";

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

export function StarRow({ stars }: { stars: number }) {
  return (
    <div className="flex items-center gap-1 text-amber-400" aria-label={`${stars} estrellas`}>
      {Array.from({ length: stars }).map((_, index) => (
        <Star key={index} className="h-4 w-4 fill-current" />
      ))}
    </div>
  );
}

export function TestimonialAvatar({ testimonial }: { testimonial: (typeof TESTIMONIOS)[number] }) {
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
  const featuredTestimonials = TESTIMONIOS.slice(0, 3);

  return (
    <section id="testimonios" className="section-container container bg-slate-50/50 border-y border-slate-100">
      <TestimonialsJsonLd />

      <div className="mx-auto max-w-4xl text-center">
        <span className="text-label">Prueba social</span>
        <h2 className="text-h2 mt-2 text-slate-900">La confianza de quienes ya escalaron</h2>
        <p className="text-subtitle mt-6 mx-auto">
          No lo decimos nosotros, lo dicen profesionales que ya transformaron su presencia digital.
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {featuredTestimonials.map((item) => (
          <TestimonialModal key={item.id} testimonial={item}>
            <article className="card !p-8 flex flex-col cursor-pointer transition-transform hover:scale-[1.03]">
              <div className="flex items-center gap-4 mb-6">
                <TestimonialAvatar testimonial={item} />
                <div>
                  <h3 className="font-bold text-slate-900 leading-tight">{item.nombre}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <StarRow stars={item.rating} />
                  </div>
                </div>
              </div>
              
              <p className="card-text italic leading-relaxed line-clamp-3">
                "{item.texto}"
              </p>

              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.1em]">{item.rubro}</span>
                <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#0EA5E9]">
                    <Target className="h-3 w-3" />
                    Caso verificado
                </div>
              </div>
            </article>
          </TestimonialModal>
        ))}
      </div>

      <div className="mt-16 flex flex-wrap justify-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
         {RUBROS_ATENDIDOS.slice(0, 5).map((rubro) => (
           <span key={rubro.label} className="text-sm font-bold text-slate-500">{rubro.label}</span>
         ))}
      </div>
    </section>
  );
}
