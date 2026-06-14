import type { RubroConfig } from "@/types/rubro";

interface RubroTestimonialsProps {
  config: RubroConfig;
}

export default function RubroTestimonials({ config }: RubroTestimonialsProps) {
  return (
    <section className="py-20 bg-slate-900">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            {config.testimonials.title}
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            {config.testimonials.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {config.testimonials.items.map((testimonial, idx) => (
            <div 
              key={idx}
              className="p-8 rounded-2xl bg-slate-800/50 border border-white/5"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <span key={i} className="text-amber-400">★</span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-white/80 text-lg mb-6 leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold"
                  style={{ backgroundColor: testimonial.avatarColor }}
                >
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-sm text-white/50">{testimonial.role}</p>
                  <p className="text-xs text-white/40">{testimonial.location}</p>
                </div>
              </div>

              {/* Result badge */}
              <div className="mt-4">
                <span className="inline-block px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm font-bold">
                  {testimonial.result}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}