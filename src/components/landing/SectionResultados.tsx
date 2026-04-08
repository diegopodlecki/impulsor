import { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

export interface Resultado {
  id: number;
  name: string;
  description: string;
  resultado: string;
  duracion: string;
  antesImage: string;
  despuesImage: string;
}

interface SectionResultadosProps {
  title: string;
  subtitle?: string;
  description?: string;
  resultados: Resultado[];
  onCtaClick?: () => void;
}

export function SectionResultados({
  title,
  subtitle,
  description,
  resultados,
  onCtaClick,
}: SectionResultadosProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const visibleResults = resultados.slice(currentIndex, currentIndex + 3);
  const hasMore = currentIndex + 3 < resultados.length;
  const hasPrev = currentIndex > 0;

  const handlePrev = () => {
    setCurrentIndex(Math.max(0, currentIndex - 3));
  };

  const handleNext = () => {
    setCurrentIndex(Math.min(resultados.length - 3, currentIndex + 3));
  };

  return (
    <section className="relative py-32 bg-gradient-to-b from-slate-950/80 to-slate-950/60 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 -left-64 w-[500px] h-[500px] bg-gradient-to-br from-emerald-600/15 to-transparent rounded-full blur-[120px]" />
        <div className="absolute bottom-0 -right-64 w-[400px] h-[400px] bg-gradient-to-tl from-blue-600/10 to-transparent rounded-full blur-[100px]" />
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

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {visibleResults.map((resultado, index) => (
            <div
              key={resultado.id}
              className="relative rounded-2xl overflow-hidden bg-slate-900/80 border border-white/5 hover:border-emerald-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/10 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Before/After Images */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 flex">
                  <div className="relative w-1/2 overflow-hidden">
                    <img
                      src={resultado.antesImage}
                      alt={`${resultado.name} antes`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1.5 bg-black/70 backdrop-blur-xl rounded-full text-xs font-bold text-white border border-white/10">
                      ANTES
                    </div>
                  </div>
                  <div className="relative w-1/2 overflow-hidden">
                    <img
                      src={resultado.despuesImage}
                      alt={`${resultado.name} después`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 px-3 py-1.5 bg-gradient-to-r from-emerald-600 to-emerald-500 rounded-full text-xs font-bold text-white shadow-lg">
                      DESPUÉS
                    </div>
                  </div>
                </div>
              
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-5 py-2.5 bg-gradient-to-r from-emerald-600 to-emerald-500 rounded-full shadow-xl shadow-emerald-500/30 z-10 border border-emerald-400/20">
                  <span className="text-white font-bold text-sm">{resultado.resultado}</span>
                </div>
              </div>

              <div className="pt-10 pb-8 px-6 text-center">
                <h3 className="text-xl font-bold text-white mb-2">{resultado.name}</h3>
                <p className="text-white/60 text-sm mb-2">{resultado.description}</p>
                <p className="text-emerald-400 font-semibold text-sm">{resultado.duracion}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        {(hasMore || hasPrev) && (
          <div className="flex justify-center gap-4 mt-16">
            <button
              onClick={handlePrev}
              disabled={!hasPrev}
              className={`p-4 rounded-2xl border transition-all duration-300 ${
                hasPrev
                  ? 'border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/40 hover:scale-110'
                  : 'border-white/5 bg-white/5 opacity-50 cursor-not-allowed'
              }`}
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={handleNext}
              disabled={!hasMore}
              className={`p-4 rounded-2xl border transition-all duration-300 ${
                hasMore
                  ? 'border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/40 hover:scale-110'
                  : 'border-white/5 bg-white/5 opacity-50 cursor-not-allowed'
              }`}
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-12">
          <button 
            onClick={onCtaClick}
            className="inline-flex items-center gap-3 text-emerald-400 font-semibold text-lg hover:gap-4 transition-all cursor-pointer group"
          >
            Ver todas las transformaciones 
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}

export const resultadosTemplates = {
  'personal-trainer': [
    {
      id: 1,
      name: 'Juan M.',
      description: 'Ejecutivo, 35 años',
      resultado: '-14kg',
      duracion: '3 meses',
      antesImage: 'https://images.pexels.com/photos/5327523/pexels-photo-5327523.jpeg?w=600&h=800&fit=crop',
      despuesImage: 'https://images.pexels.com/photos/4720776/pexels-photo-4720776.jpeg?w=600&h=800&fit=crop',
    },
    {
      id: 2,
      name: 'María L.',
      description: 'Arquitecta, 28 años',
      resultado: '+5kg músculo',
      duracion: '4 meses',
      antesImage: 'https://images.pexels.com/photos/3823039/pexels-photo-3823039.jpeg?w=600&h=800&fit=crop',
      despuesImage: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?w=600&h=800&fit=crop',
    },
    {
      id: 3,
      name: 'Carlos R.',
      description: 'Ingeniero, 42 años',
      resultado: '-18kg',
      duracion: '5 meses',
      antesImage: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?w=600&h=800&fit=crop',
      despuesImage: 'https://images.pexels.com/photos/3621196/pexels-photo-3621196.jpeg?w=600&h=800&fit=crop',
    },
    {
      id: 4,
      name: 'Ana S.',
      description: 'Diseñadora, 31 años',
      resultado: '-8kg + definición',
      duracion: '3 meses',
      antesImage: 'https://images.pexels.com/photos/6389854/pexels-photo-6389854.jpeg?w=600&h=800&fit=crop',
      despuesImage: 'https://images.pexels.com/photos/6456138/pexels-photo-6456138.jpeg?w=600&h=800&fit=crop',
    },
    {
      id: 5,
      name: 'Roberto D.',
      description: 'Emprendedor, 45 años',
      resultado: '-22kg',
      duracion: '6 meses',
      antesImage: 'https://images.pexels.com/photos/3888342/pexels-photo-3888342.jpeg?w=600&h=800&fit=crop',
      despuesImage: 'https://images.pexels.com/photos/6551127/pexels-photo-6551127.jpeg?w=600&h=800&fit=crop',
    },
    {
      id: 6,
      name: 'Laura K.',
      description: 'Abogada, 29 años',
      resultado: '+3kg músculo',
      duracion: '2 meses',
      antesImage: 'https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg?w=600&h=800&fit=crop',
      despuesImage: 'https://images.pexels.com/photos/1638336/pexels-photo-1638336.jpeg?w=600&h=800&fit=crop',
    },
  ],
};