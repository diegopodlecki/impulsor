import { ArrowRight, ArrowDown } from 'lucide-react';

interface SectionHeroProps {
  badge: string;
  title: string;
  subtitle: string;
  ctaText: string;
  ctaSecondaryText?: string;
  onCtaClick?: () => void;
  onSecondaryClick?: () => void;
  backgroundImage?: string;
  stats?: Array<{ value: string; label: string }>;
  layout?: 'center' | 'split';
  heroImage?: string;
}

export function SectionHero({
  badge,
  title,
  subtitle,
  ctaText,
  ctaSecondaryText,
  onCtaClick,
  onSecondaryClick,
  backgroundImage,
  stats,
  layout = 'center',
  heroImage,
}: SectionHeroProps) {
  if (layout === 'split') {
    return (
      <section className="relative min-h-[90vh] overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 -z-10" />
        
        {/* Background image con overlay si existe */}
        {backgroundImage && (
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        )}

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.08)_0%,transparent_50%)]" />

        <div className="section-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[90vh]">
            {/* Left Content */}
            <div className="max-w-2xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium micro-fade-up border border-blue-500/30 bg-blue-500/10 text-blue-300 mb-6">
                <span className="inline-block h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
                {badge}
              </div>

              {/* Title */}
              <h1 className="mt-6 text-balance title-h1 micro-fade-up leading-tight" style={{ animationDelay: '100ms' }}>
                {title.split('\n').map((line, i) => (
                  <div key={i} className="block">
                    {line}
                  </div>
                ))}
              </h1>

              {/* Subtitle */}
              <p className="mt-6 text-body-lg micro-fade-up max-w-xl" style={{ animationDelay: '200ms' }}>
                {subtitle}
              </p>

              {/* CTA Buttons */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4 micro-fade-up" style={{ animationDelay: '300ms' }}>
                <button
                  onClick={onCtaClick}
                  className="group relative inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold btn-hover-primary"
                >
                  {ctaText}
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </button>
                {ctaSecondaryText && (
                  <button
                    onClick={onSecondaryClick}
                    className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-white/30 text-white font-semibold backdrop-blur-sm bg-white/5 btn-hover-secondary"
                  >
                    {ctaSecondaryText}
                  </button>
                )}
              </div>

              {/* Stats Grid */}
              {stats && stats.length > 0 && (
                <div className="mt-16 grid grid-cols-3 gap-8 micro-fade-up" style={{ animationDelay: '400ms' }}>
                  {stats.map((stat, i) => (
                    <div key={i} className="card-premium shadow-premium p-4 text-center lg:text-left">
                      <p className="text-2xl sm:text-3xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">
                        {stat.value}
                      </p>
                      <p className="mt-1 text-xs sm:text-sm text-white/60">{stat.label}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Right Image */}
            <div className="relative hidden lg:block micro-fade-up" style={{ animationDelay: '250ms' }}>
              <div className="relative">
                {/* Image container con glow */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/20">
                  <img
                    src={heroImage || backgroundImage}
                    alt="Entrenamiento"
                    className="w-full h-[600px] object-cover"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 micro-fade-up" style={{ animationDelay: '600ms' }}>
          <div className="animate-bounce">
            <ArrowDown className="w-6 h-6 text-white/40" />
          </div>
        </div>
      </section>
    );
  }

  // Center layout (existing)
  return (
    <section
      className="relative min-h-[80vh] flex items-center justify-center py-20 overflow-hidden"
      style={
        backgroundImage
          ? {
              backgroundImage: `linear-gradient(135deg, rgba(15,23,42,0.88) 0%, rgba(15,23,42,0.92) 100%), url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }
          : {}
      }
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-slate-950" />
      </div>

      <div className="section-container">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium micro-fade-up border border-blue-500/30 bg-blue-500/10 text-blue-300 mb-6">
            <span className="inline-block h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
            {badge}
          </div>

          {/* Title */}
          <h1 className="mt-6 text-balance title-h1 micro-fade-up" style={{ animationDelay: '100ms' }}>
            {title.split('\n').map((line, i) => (
              <div key={i} className="block">
                {line}
              </div>
            ))}
          </h1>

          {/* Subtitle */}
          <p className="mt-8 text-body-lg micro-fade-up" style={{ animationDelay: '200ms' }}>
            {subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 micro-fade-up" style={{ animationDelay: '300ms' }}>
            <button
              onClick={onCtaClick}
              className="group relative inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold btn-hover-primary"
            >
              {ctaText}
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
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

          {/* Stats Grid */}
          {stats && stats.length > 0 && (
            <div className="mt-20 grid grid-cols-3 gap-6 micro-fade-up" style={{ animationDelay: '400ms' }}>
              {stats.map((stat, i) => (
                <div key={i} className="card-premium shadow-premium">
                  <p className="text-2xl sm:text-4xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-xs sm:text-sm text-white/60">{stat.label}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 micro-fade-up" style={{ animationDelay: '600ms' }}>
        <div className="animate-bounce">
          <ArrowDown className="w-6 h-6 text-white/40" />
        </div>
      </div>
    </section>
  );
}
