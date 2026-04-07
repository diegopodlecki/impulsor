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
    <section className="section-container section-padding section-premium bg-gradient-to-b from-slate-900/80 to-slate-950">
      <div className="mb-16 text-center">
        {subtitle && (
          <p className="text-caption text-emerald-400 mb-2">
            {subtitle}
          </p>
        )}
        <h2 className="title-h2 mb-4">{title}</h2>
        {description && (
          <p className="text-body-lg max-w-2xl mx-auto">{description}</p>
        )}
      </div>

      {/* Results Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {visibleResults.map((resultado, index) => (
          <div
            key={resultado.id}
            className="card-premium shadow-premium-lg overflow-hidden micro-fade-up hover-lift group"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Before/After Images */}
            <div className="relative h-64 overflow-hidden">
              <div className="absolute inset-0 flex">
                {/* Before */}
                <div className="relative w-1/2 overflow-hidden">
                  <img
                    src={resultado.antesImage}
                    alt={`${resultado.name} antes`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 px-2 py-1 bg-black/70 rounded text-xs font-semibold text-white">
                    ANTES
                  </div>
                </div>
                {/* After */}
                <div className="relative w-1/2 overflow-hidden">
                  <img
                    src={resultado.despuesImage}
                    alt={`${resultado.name} después`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3 px-2 py-1 bg-emerald-600 rounded text-xs font-semibold text-white">
                    DESPUÉS
                  </div>
                </div>
              </div>
              
              {/* Result Badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-full shadow-lg z-10">
                <span className="text-white font-bold text-sm">{resultado.resultado}</span>
              </div>
            </div>

            {/* Content */}
            <div className="pt-8 pb-6 px-6 text-center">
              <h3 className="text-xl font-bold text-white mb-2">{resultado.name}</h3>
              <p className="text-white/70 text-sm mb-1">{resultado.description}</p>
              <p className="text-emerald-400 font-semibold text-sm">{resultado.duracion}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation */}
      {(hasMore || hasPrev) && (
        <div className="flex justify-center gap-4 mt-12">
          <button
            onClick={handlePrev}
            disabled={!hasPrev}
            className={`p-3 rounded-full border transition-all duration-300 ${
              hasPrev
                ? 'border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/40'
                : 'border-white/5 bg-white/5 opacity-50 cursor-not-allowed'
            }`}
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={handleNext}
            disabled={!hasMore}
            className={`p-3 rounded-full border transition-all duration-300 ${
              hasMore
                ? 'border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/40'
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
          className="inline-flex items-center gap-2 text-emerald-400 font-semibold hover:gap-3 transition-all cursor-pointer"
        >
          Ver todas las transformaciones <ArrowRight className="w-5 h-5" />
        </button>
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