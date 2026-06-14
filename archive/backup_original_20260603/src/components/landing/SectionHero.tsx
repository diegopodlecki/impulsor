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
      <section className="relative min-h-[85vh] overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900/60 to-slate-950">
        <div className="absolute inset-0 z-0">
          {backgroundImage && (
            <div 
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/60 to-slate-950/80" />
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-tl from-purple-600/15 to-transparent rounded-full blur-[100px]" />
        </div>

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[85vh] py-24">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-xs font-bold text-primary uppercase tracking-[0.15em] bg-primary/10 border border-primary/20 mb-8">
                {badge}
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[0.95] mb-8">
                {title.split('\n').map((line, i) => (
                  <span key={i} className="block">{line}</span>
                ))}
              </h1>

              <p className="text-xl text-white/70 font-light leading-relaxed max-w-xl mb-10">
                {subtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-5">
                <button
                  onClick={onCtaClick}
                  className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 text-lg font-bold rounded-2xl bg-gradient-to-r from-primary to-purple-600 text-white shadow-2xl shadow-primary/30 hover:shadow-[0_25px_50px_-12px_rgba(168,85,247,0.5)] hover:scale-105 hover:-translate-y-1 transition-all duration-500 overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <span className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent" />
                  <span className="relative z-10">{ctaText}</span>
                  <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                </button>
                {ctaSecondaryText && (
                  <button
                    onClick={onSecondaryClick}
                    className="group inline-flex items-center justify-center gap-2 px-10 py-5 text-lg font-semibold rounded-2xl border-2 border-white/20 text-white/90 hover:border-white/40 hover:bg-white/5 backdrop-blur-sm transition-all duration-300 hover:scale-105"
                  >
                    {ctaSecondaryText}
                    <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                  </button>
                )}
              </div>

              {stats && stats.length > 0 && (
                <div className="mt-16 grid grid-cols-3 gap-8">
                  {stats.map((stat, i) => (
                    <div key={i} className="p-4 rounded-2xl bg-slate-900/60 border border-white/5 text-center lg:text-left">
                      <p className="text-2xl sm:text-3xl font-bold text-transparent bg-gradient-to-r from-primary to-purple-400 bg-clip-text">
                        {stat.value}
                      </p>
                      <p className="mt-1 text-xs sm:text-sm text-white/50">{stat.label}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="relative hidden lg:block">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/20">
                <img
                  src={heroImage || backgroundImage}
                  alt="Entrenamiento"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
              </div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-purple-600/10 rounded-full blur-3xl" />
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-white/30" />
        </div>
      </section>
    );
  }

  return (
    <section
      className="relative min-h-[85vh] flex items-center justify-center py-24 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900/60 to-slate-950"
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
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-gradient-to-tl from-purple-600/15 to-transparent rounded-full blur-[100px]" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-xs font-bold text-primary uppercase tracking-[0.15em] bg-primary/10 border border-primary/20 mb-8">
            {badge}
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight leading-[0.95] mb-8">
            {title.split('\n').map((line, i) => (
              <span key={i} className="block">{line}</span>
            ))}
          </h1>

          <p className="text-xl text-white/70 font-light leading-relaxed mb-12">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <button
              onClick={onCtaClick}
              className="group relative inline-flex items-center justify-center gap-3 px-12 py-5 text-lg font-bold rounded-2xl bg-gradient-to-r from-primary to-purple-600 text-white shadow-2xl shadow-primary/30 hover:shadow-[0_25px_50px_-12px_rgba(168,85,247,0.5)] hover:scale-105 hover:-translate-y-1 transition-all duration-500 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <span className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent" />
              <span className="relative z-10">{ctaText}</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            </button>
            {ctaSecondaryText && (
              <button
                onClick={onSecondaryClick}
                className="group inline-flex items-center justify-center gap-2 px-10 py-5 text-lg font-semibold rounded-2xl border-2 border-white/20 text-white/90 hover:border-white/40 hover:bg-white/5 backdrop-blur-sm transition-all duration-300 hover:scale-105"
              >
                {ctaSecondaryText}
                <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </button>
            )}
          </div>

          {stats && stats.length > 0 && (
            <div className="mt-20 grid grid-cols-3 gap-6 max-w-2xl mx-auto">
              {stats.map((stat, i) => (
                <div key={i} className="p-6 rounded-2xl bg-slate-900/60 border border-white/5">
                  <p className="text-3xl sm:text-4xl font-bold text-transparent bg-gradient-to-r from-primary to-purple-400 bg-clip-text">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm text-white/50">{stat.label}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-white/30" />
      </div>
    </section>
  );
}
