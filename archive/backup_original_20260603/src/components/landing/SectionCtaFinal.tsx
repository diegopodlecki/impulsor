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
  variant = 'premium',
}: SectionCtaFinalProps) {
  if (variant === 'minimal') {
    return (
      <section className="relative py-20 bg-gradient-to-b from-slate-950 to-slate-900/50">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            {subtitle && (
              <span className="inline-block text-xs font-bold text-primary uppercase tracking-[0.2em] px-4 py-1.5 bg-primary/10 rounded-full border border-primary/20">
                {subtitle}
              </span>
            )}
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
              {title}
            </h2>
            {description && (
              <p className="text-xl text-white/60 leading-relaxed">
                {description}
              </p>
            )}

            <div className="flex flex-col sm:flex-row gap-5 justify-center pt-4">
              <button
                onClick={onCtaClick}
                className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 text-lg font-bold rounded-2xl bg-gradient-to-r from-primary to-purple-600 text-white shadow-2xl shadow-primary/30 hover:shadow-[0_25px_50px_-12px_rgba(168,85,247,0.5)] hover:scale-105 hover:-translate-y-1 transition-all duration-500 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <MessageCircle className="w-5 h-5" />
                <span>{ctaText}</span>
              </button>
              {ctaSecondaryText && (
                <button
                  onClick={onSecondaryClick}
                  className="inline-flex items-center justify-center gap-2 px-10 py-5 text-lg font-semibold rounded-2xl border-2 border-white/20 text-white/90 hover:border-white/40 hover:bg-white/5 backdrop-blur-sm transition-all duration-300 hover:scale-105"
                >
                  {ctaSecondaryText}
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (variant === 'premium') {
    return (
      <section className="relative py-32 bg-gradient-to-b from-slate-950 to-slate-950/80 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute -top-60 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-primary/30 to-transparent rounded-full blur-[150px]" />
          <div className="absolute -bottom-60 right-1/4 w-[500px] h-[500px] bg-gradient-to-tl from-purple-600/20 to-transparent rounded-full blur-[120px]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            {subtitle && (
              <span className="inline-block text-xs font-bold text-primary uppercase tracking-[0.2em] mb-6 px-5 py-2 bg-primary/10 rounded-full border border-primary/20">
                {subtitle}
              </span>
            )}
            <h2 className="text-5xl sm:text-6xl font-black tracking-tight leading-tight mb-6">
              {title}
            </h2>
            {description && (
              <p className="text-2xl text-white/60 mb-12">
                {description}
              </p>
            )}

            {highlights.length > 0 && (
              <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
                {highlights.map((highlight, i) => (
                  <div key={i} className="flex items-center gap-3 px-5 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    <span className="text-sm font-medium text-white/70">{highlight}</span>
                  </div>
                ))}
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <button
                onClick={onCtaClick}
                className="group relative inline-flex items-center justify-center gap-3 px-12 py-5 text-lg font-bold rounded-2xl bg-gradient-to-r from-primary via-purple-600 to-primary text-white shadow-2xl shadow-primary/40 hover:shadow-[0_25px_50px_-12px_rgba(168,85,247,0.5)] hover:scale-105 hover:-translate-y-1 transition-all duration-500 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <span className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent" />
                <MessageCircle className="w-6 h-6 relative drop-shadow-lg" />
                <span className="relative z-10 drop-shadow-lg">{ctaText}</span>
              </button>
              {ctaSecondaryText && (
                <button
                  onClick={onSecondaryClick}
                  className="group relative inline-flex items-center justify-center gap-2 px-10 py-5 text-lg font-semibold rounded-2xl border-2 border-white/20 text-white/90 hover:border-white/40 hover:bg-white/5 backdrop-blur-sm transition-all duration-300 hover:scale-105"
                >
                  <span className="relative z-10">{ctaSecondaryText}</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-24 bg-gradient-to-b from-slate-950 to-slate-900/50">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center space-y-10">
          {subtitle && (
            <span className="inline-block text-xs font-bold text-primary uppercase tracking-[0.2em] px-4 py-1.5 bg-primary/10 rounded-full border border-primary/20">
              {subtitle}
            </span>
          )}
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
            {title}
          </h2>
          {description && (
            <p className="text-xl text-white/60">
              {description}
            </p>
          )}

          {highlights.length > 0 && (
            <div className="flex flex-wrap justify-center gap-4">
              {highlights.map((highlight, i) => (
                <div key={i} className="px-6 py-3 rounded-xl bg-slate-900/60 border border-white/5">
                  <span className="text-sm font-semibold text-white">{highlight}</span>
                </div>
              ))}
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-5 justify-center pt-4">
            <button
              onClick={onCtaClick}
              className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 text-lg font-bold rounded-2xl bg-gradient-to-r from-primary to-purple-600 text-white shadow-2xl shadow-primary/30 hover:shadow-[0_25px_50px_-12px_rgba(168,85,247,0.5)] hover:scale-105 hover:-translate-y-1 transition-all duration-500 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <MessageCircle className="w-5 h-5" />
              <span>{ctaText}</span>
            </button>
            {ctaSecondaryText && (
              <button
                onClick={onSecondaryClick}
                className="inline-flex items-center justify-center gap-2 px-10 py-5 text-lg font-semibold rounded-2xl border-2 border-white/20 text-white/90 hover:border-white/40 hover:bg-white/5 backdrop-blur-sm transition-all duration-300 hover:scale-105"
              >
                {ctaSecondaryText}
              </button>
            )}
          </div>

          <p className="text-sm text-white/40 pt-6">
            ✓ Respuesta en menos de 24 horas • 100% confidencial • Sin compromiso
          </p>
        </div>
      </div>
    </section>
  );
}
