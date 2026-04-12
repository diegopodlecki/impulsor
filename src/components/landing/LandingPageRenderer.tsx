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
    <main className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* HEADER STICKY - Premium Glassmorphism */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="backdrop-blur-2xl bg-slate-950/70 border-b border-white/5 shadow-lg shadow-black/20">
          <div className="container">
            <div className="flex items-center justify-between h-18 py-4">
              <a href="/" className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary via-purple-500 to-blue-600 flex items-center justify-center shadow-lg shadow-primary/30 group-hover:shadow-primary/50 transition-shadow duration-300">
                  <span className="text-white font-bold text-lg">W</span>
                </div>
                <span className="text-white font-bold text-xl tracking-tight hidden sm:block">Impulsor</span>
              </a>

              <nav className="hidden md:flex items-center gap-10">
                <a href="#servicios" className="text-sm font-medium text-white/60 hover:text-white transition-colors duration-200 relative group">
                  Servicios
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                </a>
                <a href="#metodo" className="text-sm font-medium text-white/60 hover:text-white transition-colors duration-200 relative group">
                  Método
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                </a>
                <a href="#casos" className="text-sm font-medium text-white/60 hover:text-white transition-colors duration-200 relative group">
                  Casos
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                </a>
              </nav>

              <a
                href="https://wa.me/541166448389"
                className="group relative inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-full bg-gradient-to-r from-primary to-purple-600 text-white shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative hidden sm:inline">Quiero más clientes</span>
                <span className="relative sm:hidden">WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </header>

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
        <section id="servicios">
          <SectionServicios
            title={config.servicios.title}
            subtitle={config.servicios.subtitle}
            description={config.servicios.description}
            servicios={config.servicios.items}
          />
        </section>
      )}

      {/* 4. Por qué no es una web común - Premium Design */}
      {config.diferencial && config.diferencial.items.length > 0 && (
        <section id="metodo" className="relative py-32 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950/30 border-t border-white/[0.02] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-1/2 -left-64 w-[500px] h-[500px] bg-gradient-to-br from-blue-600/15 to-transparent rounded-full blur-[120px]" />
            <div className="absolute bottom-0 -right-64 w-[400px] h-[400px] bg-gradient-to-tl from-purple-600/15 to-transparent rounded-full blur-[100px]" />
          </div>

          <div className="container relative z-10">
            <div className="mx-auto max-w-3xl text-center mb-20">
              <span className="inline-block text-xs font-bold text-red-400 uppercase tracking-[0.2em] mb-4 px-4 py-1.5 bg-red-500/10 rounded-full border border-red-500/20">
                Esto NO es una web común
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
                {config.diferencial.title || 'Por qué esto no es una web común'}
              </h2>
              {config.diferencial.description && (
                <p className="mt-6 text-xl text-white/60">
                  {config.diferencial.description}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
              {config.diferencial.items.map((item, idx) => (
                <div key={idx} className="relative p-8 rounded-2xl bg-slate-900/80 border border-white/5 hover:border-white/15 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-white/5 group">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-emerald-500/0 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 border border-emerald-500/20">
                        <CheckCircle className="h-6 w-6 text-emerald-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-base text-white/60 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                    <div className="pt-6 border-t border-white/5">
                      <div className="flex items-start gap-3">
                        <XCircle className="h-5 w-5 text-red-400/60 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-white/40 italic leading-relaxed">{item.wrong}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {config.diferencial.resultadoPromesa && (
              <div className="mx-auto max-w-3xl text-center">
                <div className="relative p-10 rounded-3xl bg-gradient-to-b from-emerald-500/10 to-emerald-500/5 border border-emerald-500/30 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-transparent to-emerald-500/5" />
                  <div className="relative z-10">
                    <div className="flex justify-center mb-6">
                      <div className="p-4 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 border border-emerald-500/20">
                        <Target className="h-10 w-10 text-emerald-400" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{config.diferencial.resultadoPromesa}</h3>
                    {config.diferencial.resultadoValor && (
                      <p className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-300 mb-6 tracking-tight">
                        {config.diferencial.resultadoValor}
                      </p>
                    )}
                    <p className="text-lg text-white/60">Medido, no promesses. Así lo conseguimos.</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* 5. Testimonios */}
      {config.testimonios.items.length > 0 && (
        <section id="casos">
          <SectionTestimonios
            title={config.testimonios.title}
            subtitle={config.testimonios.subtitle}
            description={config.testimonios.description}
            testimonios={config.testimonios.items}
            featuredIndex={config.testimonios.featuredIndex || 0}
            variant="featured"
          />
        </section>
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
