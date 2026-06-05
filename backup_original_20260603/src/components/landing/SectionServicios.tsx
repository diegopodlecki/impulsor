import { ReactNode } from 'react';

export interface Servicio {
  icon?: ReactNode;
  title: string;
  description: string;
  image?: string;
  badge?: string;
}

interface SectionServiciosProps {
  title: string;
  subtitle?: string;
  description?: string;
  servicios: Servicio[];
  showImages?: boolean;
}

export function SectionServicios({
  title,
  subtitle,
  description,
  servicios,
  showImages = true,
}: SectionServiciosProps) {
  return (
    <section className="relative py-32 bg-gradient-to-b from-slate-950 via-slate-900/30 to-slate-950/50">
      <div className="container relative z-10">
        <div className="mx-auto max-w-2xl text-center mb-16">
          {subtitle && (
            <span className="inline-block text-xs font-bold text-primary uppercase tracking-[0.2em] mb-4 px-4 py-1.5 bg-primary/10 rounded-full border border-primary/20">
              {subtitle}
            </span>
          )}
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
            {title}
          </h2>
          {description && (
            <p className="mt-6 text-xl text-white/60">
              {description}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {servicios.map((servicio, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden bg-slate-900/60 border border-white/5 hover:border-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {servicio.image && showImages && (
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={servicio.image}
                    alt={servicio.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              )}

              <div className="p-6">
                {servicio.icon && (
                  <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {servicio.icon}
                  </div>
                )}

                {servicio.badge && (
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-primary/10 text-primary border border-primary/20 mb-3">
                    {servicio.badge}
                  </div>
                )}

                <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                  {servicio.title}
                </h3>

                <p className="text-sm text-white/50 leading-relaxed">
                  {servicio.description}
                </p>

                <div className="mt-4 inline-flex items-center text-primary text-sm font-semibold gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Conocer más</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
