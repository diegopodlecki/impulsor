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
    <section className="section-container section-padding section-premium">
      <div className="mb-16">
        {subtitle && (
          <p className="text-caption text-blue-400 mb-2">
            {subtitle}
          </p>
        )}
        <h2 className="title-h2 mb-6">{title}</h2>
        {description && (
          <p className="text-body-lg max-w-3xl">{description}</p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicios.map((servicio, index) => (
          <div
            key={index}
            className="card-premium shadow-premium flex flex-col overflow-hidden micro-fade-up group hover-lift"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Service Image */}
            {servicio.image && showImages && (
              <div className="relative overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 h-48">
                <img
                  src={servicio.image}
                  alt={servicio.title}
                  className="w-full h-full object-cover transition-premium img-zoom"
                />
                <div className="absolute inset-0 premium-image-overlay" />
                <div className="premium-hover-overlay" />
              </div>
            )}

            {/* Content */}
            <div className="flex flex-col gap-4 p-6 flex-1">
              {/* Icon */}
              {servicio.icon && (
                <div className="text-4xl icon-hover">
                  {servicio.icon}
                </div>
              )}

              {/* Badge */}
              {servicio.badge && (
                <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-300 border border-blue-500/30 w-fit">
                  {servicio.badge}
                </div>
              )}

              {/* Title */}
              <h3 className="title-h3">{servicio.title}</h3>

              {/* Description */}
              <p className="text-body-sm flex-1">
                {servicio.description}
              </p>

              {/* Learn More Link */}
              <div className="inline-flex items-center text-blue-400 text-sm font-semibold gap-2 mt-2 link-hover group/link cursor-pointer">
                <span>Conocer más</span>
                <span className="transition-transform group-hover/link:translate-x-1">→</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
