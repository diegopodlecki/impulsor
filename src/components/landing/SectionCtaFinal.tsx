import { MessageCircle, CheckCircle2 } from 'lucide-react';

interface SectionCtaFinalProps {
  title: string;
  subtitle?: string;
  description?: string;
  ctaText?: string;
  ctaSecondaryText?: string;
  onCtaClick?: () => void;
  onSecondaryClick?: () => void;
  highlights?: string[];
  whatsappNumber?: string;
  variant?: 'default' | 'minimal' | 'premium';
}

export function SectionCtaFinal({
  title,
  subtitle,
  description,
  ctaText = 'Quiero esta web para mi negocio',
  ctaSecondaryText,
  onCtaClick,
  onSecondaryClick,
  highlights = [
    'Sitio web profesional',
    'Optimizado para conversión',
    'Diseño moderno y responsive',
  ],
  whatsappNumber,
  variant = 'default',
}: SectionCtaFinalProps) {
  if (variant === 'minimal') {
    return (
      <section className="section-container py-16 sm:py-20">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          {subtitle && (
            <p className="text-caption text-blue-400">
              {subtitle}
            </p>
          )}
          <h2 className="title-h2">{title}</h2>
          {description && (
            <p className="text-body-lg leading-relaxed">{description}</p>
          )}

          <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onCtaClick}
              className="group inline-flex items-center justify-center px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold btn-hover-primary"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              {ctaText}
            </button>
            {ctaSecondaryText && (
              <button
                onClick={onSecondaryClick}
                className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-white/20 text-white font-semibold backdrop-blur-sm btn-hover-secondary"
              >
                {ctaSecondaryText}
              </button>
            )}
          </div>
        </div>
      </section>
    );
  }

  if (variant === 'premium') {
    return (
      <section className="relative section-padding overflow-hidden section-premium">
        {/* Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-transparent rounded-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(59,130,246,0.1)_0%,transparent_50%)]" />
        </div>

        <div className="section-container">
          <div className="card-premium shadow-premium-lg p-12 lg:p-16 relative overflow-hidden hover-lift">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 -z-10" />

            <div className="max-w-3xl mx-auto text-center space-y-8">
              {subtitle && (
                <p className="text-caption text-blue-400 micro-fade-up">
                  {subtitle}
                </p>
              )}
              <h2 className="title-h2 micro-fade-up" style={{ animationDelay: '100ms' }}>
                {title}
              </h2>
              {description && (
                <p className="text-body-lg leading-relaxed max-w-2xl mx-auto micro-fade-up" style={{ animationDelay: '200ms' }}>
                  {description}
                </p>
              )}

              {/* Highlights */}
              {highlights.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-8 micro-fade-up" style={{ animationDelay: '300ms' }}>
                  {highlights.map((highlight, i) => (
                    <div key={i} className="flex items-center justify-center gap-2 text-sm font-semibold text-white/90">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                      {highlight}
                    </div>
                  ))}
                </div>
              )}

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 micro-fade-up" style={{ animationDelay: '400ms' }}>
                <button
                  onClick={onCtaClick}
                  className="group inline-flex items-center justify-center px-10 py-5 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold text-lg btn-hover-primary"
                >
                  <MessageCircle className="w-6 h-6 mr-3" />
                  {ctaText}
                </button>
                {ctaSecondaryText && (
                  <button
                    onClick={onSecondaryClick}
                    className="inline-flex items-center justify-center px-10 py-5 rounded-full border-2 border-white/20 text-white font-semibold text-lg backdrop-blur-sm btn-hover-secondary"
                  >
                    {ctaSecondaryText}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Default variant
  return (
    <section className="section-padding section-premium bg-gradient-to-t from-slate-950 to-slate-900/50">
      <div className="section-container max-w-3xl mx-auto text-center space-y-8">
        {subtitle && (
          <p className="text-caption text-blue-400 micro-fade-up">
            {subtitle}
          </p>
        )}
        <h2 className="title-h2 micro-fade-up" style={{ animationDelay: '100ms' }}>
          {title}
        </h2>
        {description && (
          <p className="text-body-lg micro-fade-up" style={{ animationDelay: '200ms' }}>
            {description}
          </p>
        )}

        {/* Highlights Grid */}
        {highlights.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 micro-fade-up" style={{ animationDelay: '300ms' }}>
            {highlights.map((highlight, i) => (
              <div key={i} className="card-premium shadow-premium p-4 hover-lift">
                <p className="text-sm font-semibold text-white">{highlight}</p>
              </div>
            ))}
          </div>
        )}

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 micro-fade-up" style={{ animationDelay: '400ms' }}>
          <button
            onClick={onCtaClick}
            className="group inline-flex items-center justify-center px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold btn-hover-primary"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            {ctaText}
          </button>
          {ctaSecondaryText && (
            <button
              onClick={onSecondaryClick}
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-white/20 text-white font-semibold backdrop-blur-sm btn-hover-secondary"
            >
              {ctaSecondaryText}
            </button>
          )}
        </div>

        {/* Small disclaimer */}
        <p className="text-xs text-white/50 pt-6">
          ✓ Respuesta en menos de 24 horas • 100% confidencial • Sin compromiso
        </p>
      </div>
    </section>
  );
}
