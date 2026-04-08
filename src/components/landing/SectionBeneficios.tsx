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
    <section className="relative py-32 bg-gradient-to-b from-slate-950/50 to-transparent">
      <div className="container relative z-10">
        <div className="mx-auto max-w-2xl text-center mb-16">
          {subtitle && (
            <span className="inline-block text-xs font-bold text-blue-400 uppercase tracking-[0.2em] mb-4 px-4 py-1.5 bg-blue-500/10 rounded-full border border-blue-500/20">
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

        {variant === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {beneficios.map((beneficio, index) => (
              <div
                key={index}
                className="relative p-8 rounded-2xl bg-slate-900/60 border border-white/5 hover:border-blue-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-blue-500/0 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="flex gap-5">
                    <div className="flex-shrink-0 text-4xl transform group-hover:scale-110 transition-transform duration-300">
                      {beneficio.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-3">{beneficio.title}</h3>
                      <p className="text-white/60 leading-relaxed mb-3">{beneficio.description}</p>
                      {beneficio.highlight && (
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                          <span className="text-sm font-semibold text-emerald-400">{beneficio.highlight}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-6 max-w-3xl mx-auto">
            {beneficios.map((beneficio, index) => (
              <div
                key={index}
                className="flex gap-5 items-start p-6 rounded-2xl bg-slate-900/40 border border-white/5 hover:border-white/10 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex-shrink-0 text-3xl mt-1">{beneficio.icon}</div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-2">{beneficio.title}</h3>
                  <p className="text-white/60 leading-relaxed">{beneficio.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
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
