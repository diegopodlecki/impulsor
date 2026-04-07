import { ReactNode } from 'react';
import { CheckCircle2 } from 'lucide-react';

export interface Beneficio {
  icon: ReactNode;
  title: string;
  description: string;
  highlight?: string;
}

interface SectionBeneficiosProps {
  title: string;
  subtitle?: string;
  description?: string;
  beneficios: Beneficio[];
  variant?: 'grid' | 'list';
}

export function SectionBeneficios({
  title,
  subtitle,
  description,
  beneficios,
  variant = 'grid',
}: SectionBeneficiosProps) {
  return (
    <section className="section-container section-padding section-premium bg-gradient-to-b from-slate-900/50 to-transparent rounded-3xl">
      <div className="mb-16">
        {subtitle && (
          <p className="text-caption text-emerald-400 mb-2">
            {subtitle}
          </p>
        )}
        <h2 className="title-h2 mb-6">{title}</h2>
        {description && (
          <p className="text-body-lg max-w-3xl">{description}</p>
        )}
      </div>

      {variant === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {beneficios.map((beneficio, index) => (
            <div
              key={index}
              className="card-premium shadow-premium p-8 micro-fade-up group hover-lift"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0 text-4xl icon-hover">
                  {beneficio.icon}
                </div>
                <div className="flex-1">
                  <h3 className="title-h3 mb-3">{beneficio.title}</h3>
                  <p className="text-body mb-3">{beneficio.description}</p>
                  {beneficio.highlight && (
                    <p className="text-sm font-semibold text-emerald-400">{beneficio.highlight}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-6 max-w-3xl">
          {beneficios.map((beneficio, index) => (
            <div
              key={index}
              className="flex gap-4 items-start micro-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex-shrink-0 text-2xl mt-1">{beneficio.icon}</div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white mb-2">{beneficio.title}</h3>
                <p className="text-body">{beneficio.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

/**
 * Beneficios predefinidos por categoría de negocio
 */
export const beneficiosTemplates = {
  gimnasio: [
    {
      icon: '💪',
      title: 'Resultados visibles en 4 semanas',
      description: 'Nuestros clientes ven cambios en su cuerpo y salud en poco tiempo',
      highlight: 'Con seguimiento personalizado',
    },
    {
      icon: '⏰',
      title: 'Flexibilidad de horarios',
      description: 'Entrena a la hora que mejor se adapte a tu rutina',
      highlight: 'Acceso 24/7 a la mayoría de sucursales',
    },
    {
      icon: '👥',
      title: 'Comunidad de apoyo',
      description: 'Conecta con personas con tus mismos objetivos',
      highlight: 'Eventos semanales y clases grupales',
    },
    {
      icon: '📱',
      title: 'Seguimiento digital',
      description: 'Monitorea tu progreso con nuestra app',
      highlight: 'Historial completo de entrenamientos',
    },
  ],
  'personal-trainer': [
    {
      icon: '🎯',
      title: 'Plan personalizado',
      description: 'Cada rutina diseñada según tus objetivos específicos',
      highlight: 'Basado en tu historial y condición física',
    },
    {
      icon: '📈',
      title: 'Garantía de resultados',
      description: 'Te comprometemos con objetivos alcanzables',
      highlight: 'Revisión cada 4 semanas',
    },
    {
      icon: '🏆',
      title: 'Motivación constante',
      description: 'Tu entrenador te impulsa a superar límites',
      highlight: 'Apoyo emocional y técnico',
    },
    {
      icon: '⚡',
      title: 'Eficiencia máxima',
      description: 'Resultados en menos tiempo',
      highlight: 'Entrenamientos optimizados',
    },
  ],
  nutricionista: [
    {
      icon: '🥗',
      title: 'Alimentación práctica',
      description: 'No es dieta, es un estilo de vida real',
      highlight: 'Recetas deliciosas y sostenibles',
    },
    {
      icon: '❤️',
      title: 'Salud integral',
      description: 'Mejora tu energía y bienestar general',
      highlight: 'Más allá de perder peso',
    },
    {
      icon: '🔬',
      title: 'Basado en ciencia',
      description: 'Planes respaldados por evidencia',
      highlight: 'No tendencias, resultados comprobados',
    },
    {
      icon: '👍',
      title: 'Sin privaciones',
      description: 'Come lo que amas de forma inteligente',
      highlight: 'Flexibilidad y realismo',
    },
  ],
};
