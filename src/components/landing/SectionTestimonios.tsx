import { Star } from 'lucide-react';
import { ReactNode } from 'react';

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  avatar?: string;
  rating?: number;
  highlight?: string;
}

interface SectionTestimoniosProps {
  title: string;
  subtitle?: string;
  description?: string;
  testimonios: Testimonial[];
  featuredIndex?: number;
  variant?: 'cards' | 'featured';
}

function StarRating({ rating = 5 }: { rating?: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < (rating || 5) ? 'fill-amber-400 text-amber-400' : 'text-white/20'}`}
        />
      ))}
    </div>
  );
}

export function SectionTestimonios({
  title,
  subtitle,
  description,
  testimonios,
  featuredIndex = 0,
  variant = 'featured',
}: SectionTestimoniosProps) {
  if (variant === 'featured' && testimonios.length > 0) {
    const featured = testimonios[featuredIndex];
    const secondary = testimonios.filter((_, i) => i !== featuredIndex).slice(0, 2);

    return (
      <section className="relative py-32 bg-gradient-to-b from-slate-950/50 to-slate-950/30 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-emerald-600/15 to-transparent rounded-full blur-[100px]" />
          <div className="absolute -bottom-40 left-1/3 w-[500px] h-[500px] bg-gradient-to-tr from-blue-600/10 to-transparent rounded-full blur-[120px]" />
        </div>

        <div className="container relative z-10">
          <div className="mx-auto max-w-2xl text-center mb-16">
            {subtitle && (
              <span className="inline-block text-xs font-bold text-emerald-400 uppercase tracking-[0.2em] mb-4 px-4 py-1.5 bg-emerald-500/10 rounded-full border border-emerald-500/20">
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

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="lg:col-span-2 relative p-10 rounded-3xl bg-slate-900/80 border border-white/5 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="mb-6">
                  <StarRating rating={featured.rating} />
                </div>
                <blockquote className="text-2xl font-semibold text-white/90 mb-6 leading-relaxed">
                  "{featured.quote}"
                </blockquote>
                {featured.highlight && (
                  <p className="text-base font-bold text-primary bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-xl px-5 py-4 text-center border border-primary/20 mb-8">
                    {featured.highlight}
                  </p>
                )}

                <div className="flex items-center gap-5 pt-6 border-t border-white/5">
                  {featured.avatar ? (
                    <img
                      src={featured.avatar}
                      alt={featured.author}
                      className="w-14 h-14 rounded-2xl object-cover shadow-lg"
                    />
                  ) : (
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-lg font-bold text-white shadow-lg">
                      {featured.author.charAt(0)}
                    </div>
                  )}
                  <div>
                    <p className="font-bold text-white text-lg">{featured.author}</p>
                    <p className="text-white/50">{featured.role}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {secondary.map((testimonial, index) => (
                <div
                  key={index}
                  className="relative p-6 rounded-2xl bg-slate-900/60 border border-white/5 hover:border-white/10 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-white/5"
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  <div className="mb-4">
                    <StarRating rating={testimonial.rating} />
                  </div>
                  <p className="text-white/70 text-sm mb-4 leading-relaxed line-clamp-4">"{testimonial.quote}"</p>
                  {testimonial.highlight && (
                    <p className="text-xs font-semibold text-emerald-400 mb-4">{testimonial.highlight}</p>
                  )}
                  <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                    {testimonial.avatar ? (
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        className="w-10 h-10 rounded-xl object-cover"
                      />
                    ) : (
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-sm font-bold text-white">
                        {testimonial.author.charAt(0)}
                      </div>
                    )}
                    <div>
                      <p className="font-semibold text-white text-sm">{testimonial.author}</p>
                      <p className="text-xs text-white/50 truncate">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-32 bg-gradient-to-b from-slate-950/50 to-slate-950/30 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-amber-600/10 to-transparent rounded-full blur-[100px]" />
      </div>

      <div className="container relative z-10">
        <div className="mx-auto max-w-2xl text-center mb-16">
          {subtitle && (
            <span className="inline-block text-xs font-bold text-amber-400 uppercase tracking-[0.2em] mb-4 px-4 py-1.5 bg-amber-500/10 rounded-full border border-amber-500/20">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonios.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-8 rounded-2xl bg-slate-900/60 border border-white/5 hover:border-amber-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-500/10"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-5">
                <StarRating rating={testimonial.rating} />
              </div>

              <blockquote className="text-white/80 text-base leading-relaxed mb-6">
                "{testimonial.quote}"
              </blockquote>

              {testimonial.highlight && (
                <p className="text-sm font-bold text-primary bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-xl px-4 py-3 text-center border border-primary/20 mb-6">
                  {testimonial.highlight}
                </p>
              )}

              <div className="flex items-center gap-4 pt-5 border-t border-white/5">
                {testimonial.avatar ? (
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-xl object-cover"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center font-bold text-white">
                    {testimonial.author.charAt(0)}
                  </div>
                )}
                <div>
                  <p className="font-bold text-white">{testimonial.author}</p>
                  <p className="text-xs text-white/50">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
