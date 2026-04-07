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
          className={`w-4 h-4 ${i < (rating || 5) ? 'fill-yellow-400 text-yellow-400' : 'text-white/20'}`}
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
  variant = 'cards',
}: SectionTestimoniosProps) {
  if (variant === 'featured' && testimonios.length > 0) {
    const featured = testimonios[featuredIndex];
    const secondary = testimonios.filter((_, i) => i !== featuredIndex).slice(0, 2);

    return (
      <section className="section-container section-padding section-premium">
        <div className="mb-16">
          {subtitle && (
            <p className="text-caption text-amber-400 mb-2">
              {subtitle}
            </p>
          )}
          <h2 className="title-h2 mb-6">{title}</h2>
          {description && (
            <p className="text-body-lg max-w-3xl">{description}</p>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured Testimonial */}
          <div className="lg:col-span-2 card-premium shadow-premium-lg p-8 lg:p-10 flex flex-col justify-between micro-fade-up hover-lift">
            <div>
              <div className="mb-4">
                <StarRating rating={featured.rating} />
              </div>
              <blockquote className="text-2xl font-semibold text-white mb-6 leading-relaxed">
                "{featured.quote}"
              </blockquote>
              {featured.highlight && (
                <p className="text-base text-amber-400 font-semibold mb-6">{featured.highlight}</p>
              )}
            </div>

            <div className="flex items-center gap-4 pt-6 border-t border-white/10">
              {featured.avatar ? (
                <img
                  src={featured.avatar}
                  alt={featured.author}
                  className="w-14 h-14 rounded-full object-cover"
                />
              ) : (
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center text-lg font-bold text-white">
                  {featured.author.charAt(0)}
                </div>
              )}
              <div>
                <p className="font-semibold text-white">{featured.author}</p>
                <p className="text-sm text-white/60">{featured.role}</p>
              </div>
            </div>
          </div>

          {/* Secondary Testimonials */}
          <div className="space-y-4 flex flex-col">
            {secondary.map((testimonial, index) => (
              <div
                key={index}
                className="card-premium shadow-premium p-6 micro-fade-up hover-lift"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="mb-3">
                  <StarRating rating={testimonial.rating} />
                </div>
                <p className="text-white/80 text-sm mb-4 line-clamp-3">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  {testimonial.avatar ? (
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center text-xs font-bold text-white">
                      {testimonial.author.charAt(0)}
                    </div>
                  )}
                  <div>
                    <p className="font-semibold text-white text-sm">{testimonial.author}</p>
                    <p className="text-xs text-white/60 truncate">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Cards variant
  return (
    <section className="section-container section-padding section-premium">
      <div className="mb-16">
        {subtitle && (
          <p className="text-caption text-amber-400 mb-2">
            {subtitle}
          </p>
        )}
        <h2 className="title-h2 mb-6">{title}</h2>
        {description && (
          <p className="text-body-lg max-w-3xl">{description}</p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonios.map((testimonial, index) => (
          <div
            key={index}
            className="card-premium shadow-premium p-6 micro-fade-up hover-lift"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Rating */}
            <div className="mb-4">
              <StarRating rating={testimonial.rating} />
            </div>

            {/* Quote */}
            <blockquote className="text-white/90 flex-1 mb-6 leading-relaxed">
              "{testimonial.quote}"
            </blockquote>

            {/* Highlight */}
            {testimonial.highlight && (
              <p className="text-sm text-amber-400 font-semibold mb-6">{testimonial.highlight}</p>
            )}

            {/* Author */}
            <div className="flex items-center gap-3 pt-6 border-t border-white/10">
              {testimonial.avatar ? (
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                />
              ) : (
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center font-bold text-white flex-shrink-0">
                  {testimonial.author.charAt(0)}
                </div>
              )}
              <div>
                <p className="font-semibold text-white">{testimonial.author}</p>
                <p className="text-xs text-white/60">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
