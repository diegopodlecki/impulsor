import { useState } from 'react';
import { XCircle, CheckCircle, Target } from 'lucide-react';
import {
  SectionHero,
  SectionServicios,
  SectionBeneficios,
  SectionGaleria,
  SectionTestimonios,
  SectionResultados,
  SectionCtaFinal,
  type Servicio,
  type Beneficio,
  type ImageItem,
  type Testimonial,
  type Resultado,
  beneficiosTemplates,
} from './index';

/**
 * Configuración completa de un landing page profesional
 * Puede ser usado para cualquier tipo de negocio/rubro
 */
export interface LandingPageConfig {
  // Hero Section
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    ctaText: string;
    ctaSecondaryText?: string;
    backgroundImage?: string;
    heroImage?: string;
    layout?: 'center' | 'split';
    stats?: Array<{ value: string; label: string }>;
  };

  // Servicios Section
  servicios: {
    title: string;
    subtitle?: string;
    description?: string;
    items: Servicio[];
  };

  // Beneficios Section
  beneficios: {
    title: string;
    subtitle?: string;
    description?: string;
    items: Beneficio[];
  };

  // Galería Section
  galeria: {
    title: string;
    subtitle?: string;
    description?: string;
    images: ImageItem[];
  };

  // Testimonios Section
  testimonios: {
    title: string;
    subtitle?: string;
    description?: string;
    items: Testimonial[];
    featuredIndex?: number;
  };

  // Resultados Section
  resultados?: {
    title: string;
    subtitle?: string;
    description?: string;
    items: Resultado[];
  };

  // Sobre Section
  sobre?: {
    title: string;
    subtitle?: string;
    description?: string;
    image?: string;
    nombre?: string;
    credentials?: string[];
    experiencia?: string;
  };

  // CTA Final Section
  ctaFinal: {
    title: string;
    subtitle?: string;
    description?: string;
    ctaText?: string;
    ctaSecondaryText?: string;
    highlights?: string[];
  };

  // Sección Diferencial (Por qué no es una web común)
  diferencial?: {
    title?: string;
    subtitle?: string;
    description?: string;
    items: Array<{
      icon: string;
      title: string;
      description: string;
      wrong: string;
    }>;
    resultadoPromesa?: string;
    resultadoValor?: string;
  };

  // Metadata
  theme?: {
    accent: string;
    primary: string;
  };
}

interface LandingPageRendererProps {
  config: LandingPageConfig;
  onCtaClick?: () => void;
  onSecondaryCtaClick?: () => void;
}

/**
 * Landing Page Template Renderer
 * Renderiza un landing page completo basado en una configuración
 * Cada sección es opciona l y puede ser personalizada
 */
export function LandingPageRenderer({
  config,
  onCtaClick,
  onSecondaryCtaClick,
}: LandingPageRendererProps) {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const handleCtaClick = () => {
    onCtaClick?.();
    const whatsappNumber = '5491155555555';
    const message = 'Hola, quiero empezar entrenamiento personalizado';
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      '_blank'
    );
  };

  const handleSecondaryCtaClick = () => {
    onSecondaryCtaClick?.();
    const whatsappNumber = '5491155555555';
    const message = 'Hola, quiero ver los resultados de alumnos';
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      '_blank'
    );
  };

  return (
    <main className="overflow-hidden">
      {/* 1. Hero Section - Impacto */}
      <SectionHero
        badge={config.hero.badge}
        title={config.hero.title}
        subtitle={config.hero.subtitle}
        ctaText={config.hero.ctaText}
        ctaSecondaryText={config.hero.ctaSecondaryText}
        onCtaClick={handleCtaClick}
        backgroundImage={config.hero.backgroundImage}
        heroImage={config.hero.heroImage}
        layout={config.hero.layout}
        stats={config.hero.stats}
      />

      {/* 2. Resultados - Prueba social inmediata */}
      {config.resultados && config.resultados.items.length > 0 && (
        <SectionResultados
          title={config.resultados.title}
          subtitle={config.resultados.subtitle}
          description={config.resultados.description}
          resultados={config.resultados.items}
          onCtaClick={handleSecondaryCtaClick}
        />
      )}

      {/* 3. Servicios */}
      {config.servicios.items.length > 0 && (
        <SectionServicios
          title={config.servicios.title}
          subtitle={config.servicios.subtitle}
          description={config.servicios.description}
          servicios={config.servicios.items}
        />
      )}

      {/* 4. Por qué no es una web común */}
      {config.diferencial && config.diferencial.items.length > 0 && (
        <section className="section-padding bg-gradient-to-b from-slate-900 to-slate-950">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-sm font-semibold mb-4">
                <XCircle className="h-4 w-4" />
                Esto NO es una web común
              </div>
              <h2 className="title-h2">
                {config.diferencial.title || 'Por qué esto no es una web común'}
              </h2>
              {config.diferencial.description && (
                <p className="text-body-lg text-white/70 mt-4">
                  {config.diferencial.description}
                </p>
              )}
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
              {config.diferencial.items.map((item, idx) => (
                <div 
                  key={idx} 
                  className="card-base p-6 hover:border-white/20 transition-colors"
                >
                  <div className="flex items-start gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-emerald-500/20">
                      <CheckCircle className="h-5 w-5 text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{item.title}</h3>
                      <p className="mt-1 text-sm text-white/70">{item.description}</p>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-white/10">
                    <div className="flex items-start gap-2">
                      <XCircle className="h-4 w-4 text-red-400/60 flex-shrink-0 mt-0.5" />
                      <p className="text-xs text-white/50 italic">{item.wrong}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {config.diferencial.resultadoPromesa && (
              <div className="max-w-3xl mx-auto">
                <div className="card-base p-8 border-emerald-500/30 bg-emerald-500/5 text-center">
                  <div className="flex justify-center gap-3 mb-4">
                    <Target className="h-8 w-8 text-emerald-400" />
                  </div>
                  <h3 className="title-h3 text-white mb-2">{config.diferencial.resultadoPromesa}</h3>
                  {config.diferencial.resultadoValor && (
                    <p className="text-2xl font-bold text-emerald-400 mb-2">
                      {config.diferencial.resultadoValor}
                    </p>
                  )}
                  <p className="text-white/70">Medido, no promesses. Así lo conseguimos.</p>
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* 5. Testimonios */}
      {config.testimonios.items.length > 0 && (
        <SectionTestimonios
          title={config.testimonios.title}
          subtitle={config.testimonios.subtitle}
          description={config.testimonios.description}
          testimonios={config.testimonios.items}
          featuredIndex={config.testimonios.featuredIndex || 0}
          variant="featured"
        />
      )}

      {/* 6. Sobre el Entrenador */}
      {config.sobre && (
        <section className="section-container section-padding section-premium">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {config.sobre.subtitle && (
                <p className="text-caption text-blue-400 mb-2">{config.sobre.subtitle}</p>
              )}
              <h2 className="title-h2 mb-6">{config.sobre.title}</h2>
              <p className="text-body-lg mb-6">{config.sobre.description}</p>
              
              {config.sobre.experiencia && (
                <p className="text-body mb-6">{config.sobre.experiencia}</p>
              )}

              {config.sobre.credentials && config.sobre.credentials.length > 0 && (
                <div className="space-y-3">
                  {config.sobre.credentials.map((cred, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-400" />
                      <span className="text-white/80">{cred}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {config.sobre.image && (
              <div className="relative">
                <img
                  src={config.sobre.image}
                  alt={config.sobre.nombre || 'Entrenador'}
                  className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-blue-600 to-cyan-600 p-6 rounded-2xl">
                  <p className="text-white font-bold text-lg">{config.sobre.nombre}</p>
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* 7. Beneficios (oculto si no hay) */}
      {config.beneficios.items.length > 0 && (
        <SectionBeneficios
          title={config.beneficios.title}
          subtitle={config.beneficios.subtitle}
          description={config.beneficios.description}
          beneficios={config.beneficios.items}
          variant="grid"
        />
      )}

      {/* Galería (opcional, al final) */}
      {config.galeria.images.length > 0 && (
        <SectionGaleria
          title={config.galeria.title}
          subtitle={config.galeria.subtitle}
          description={config.galeria.description}
          images={config.galeria.images}
          columns={2}
        />
      )}

      {/* 7. CTA Final */}
      <SectionCtaFinal
        title={config.ctaFinal.title}
        subtitle={config.ctaFinal.subtitle}
        description={config.ctaFinal.description}
        ctaText={config.ctaFinal.ctaText || 'Hablar por WhatsApp'}
        ctaSecondaryText={config.ctaFinal.ctaSecondaryText}
        highlights={config.ctaFinal.highlights}
        onCtaClick={handleCtaClick}
        onSecondaryClick={handleSecondaryCtaClick}
        variant="premium"
      />
    </main>
  );
}

/**
 * Presets de configuración para diferentes rubros
 */
export const landingPresets = {
  gimnasio: {
    hero: {
      badge: 'Transforma tu vida',
      title: 'Entrena con los mejores',
      subtitle: 'Somos más que un gimnasio. Somos tu aliado en el camino hacia la mejor versión de ti.',
      ctaText: 'Comenzar ahora',
      ctaSecondaryText: 'Ver planes',
      stats: [
        { value: '5000+', label: 'Miembros activos' },
        { value: '98%', label: 'Satisfacción' },
        { value: '24/7', label: 'Disponible' },
      ],
    },
    servicios: {
      title: 'Nuestros servicios',
      subtitle: 'Completo',
      description: 'Todo lo que necesitas para alcanzar tus objetivos fitness',
      items: [
        {
          icon: '💪',
          title: 'Entrenamiento personalizado',
          description: 'Planes diseñados por entrenadores certificados según tus objetivos',
          badge: 'Popular',
        },
        {
          icon: '🧘',
          title: 'Clases grupales',
          description: 'Yoga, CrossFit, spinning y más. Encuentra tu comunidad.',
        },
        {
          icon: '🥗',
          title: 'Nutrición',
          description: 'Asesoramiento dietético incluido en tu membresía.',
        },
      ],
    },
    beneficios: beneficiosTemplates.gimnasio,
  } as unknown as LandingPageConfig,
};
