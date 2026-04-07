import type { LandingPageConfig } from '@/components/landing/LandingPageRenderer';
import { beneficiosTemplates } from '@/components/landing/SectionBeneficios';
import { resultadosTemplates } from '@/components/landing/SectionResultados';

/**
 * PLANTILLA PREMIUM - PERSONAL TRAINER
 * 
 * Esta landing es el modelo base premium del sistema.
 * Estructura: HERO → RESULTADOS → SERVICIOS → TESTIMONIOS → SOBRE MÍ → BENEFICIOS → GALERÍA → CTA
 * 
 * Para replicar a otros rubros:
 * 1. Copiar toda la sección 'personal-trainer'
 * 2. Reemplazar imágenes por fotos reales del rubro
 * 3. Ajustar textos según el servicio
 * 4. Mantener estructura y clases CSS
 */

/**
 * Configuraciones de landing pages para cada rubro
 * Cada una sigue la estructura optimizada de conversión
 */

export const landingConfigsV2: Record<string, LandingPageConfig> = {
  gimnasio: {
    hero: {
      badge: 'Resultados reales',
      title: 'Transformá tu cuerpo en el mejor gimnasio de la ciudad',
      subtitle: 'Entrená con los mejores equipos, instructores profesionales y una comunidad que te motiva a dar lo mejor de vos cada día.',
      ctaText: 'Vení a probar gratis',
      ctaSecondaryText: 'Ver instalaciones',
      backgroundImage: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?w=1920&h=1080&fit=crop',
      heroImage: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?w=800&h=1000&fit=crop',
      layout: 'split',
      stats: [
        { value: '500+', label: 'Transformaciones' },
        { value: '98%', label: 'Logro objetivos' },
        { value: '90 días', label: 'Para cambios visibles' },
      ],
    },
    servicios: {
      title: 'Por qué elegirnos',
      subtitle: 'Nuestra propuesta',
      description: 'No te conformes con un gimnasio cualquiera. Acá Encontrás el espacio, los profesionales y la motivación que necesitás.',
      items: [
        {
          icon: '🏋️',
          title: 'Equipamiento de última generación',
          description: 'Máquinas modernas, pesas libres y zona de entrenamiento funcional para que tu entrenamiento sea efectivo y seguro.',
          badges: 'Lo mejor',
          image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?w=800&h=600&fit=crop',
        },
        {
          icon: '👨‍🏫',
          title: 'Instructores certificados',
          description: 'Equipo de profesionales que te ayudan a usar correctamente los equipos y diseñar tu rutina según tus objetivos.',
          image: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?w=800&h=600&fit=crop',
        },
        {
          icon: '🕐',
          title: 'Horarios flexibles',
          description: 'Abrimos temprano y cerramos tarde. Encontrá el turno que se adapte a tu rutina, sin rush ni esperas.',
          image: 'https://images.pexels.com/photos/3621196/pexels-photo-3621196.jpeg?w=800&h=600&fit=crop',
        },
        {
          icon: '💪',
          title: 'Comunidad que motiva',
          description: 'No entrenás solo. Te rodeás de personas con los mismos objetivos que te pushes a dar siempre más.',
          image: 'https://images.pexels.com/photos/3807933/pexels-photo-3807933.jpeg?w=800&h=600&fit=crop',
        },
      ],
    },
    beneficios: {
      title: 'Lo que vas a lograr',
      subtitle: 'Resultados',
      description: '',
      items: beneficiosTemplates.gimnasio as any,
    },
    galeria: {
      title: 'Nuestras instalaciones',
      subtitle: 'Galería',
      description: 'Un espacio diseñado para que tu entrenamiento sea efectivo y placentero',
      images: [
        { src: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?w=800&h=800&fit=crop', alt: 'Piso de entrenamiento', caption: 'Zona de entrenamiento' },
        { src: 'https://images.pexels.com/photos/3621196/pexels-photo-3621196.jpeg?w=800&h=800&fit=crop', alt: 'Máquinas cardio', caption: 'Sector cardio' },
        { src: 'https://images.pexels.com/photos/3808991/pexels-photo-3808991.jpeg?w=800&h=800&fit=crop', alt: 'Área de pesas', caption: 'Pesas libres' },
        { src: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?w=800&h=800&fit=crop', alt: 'Clase grupal', caption: 'Clases grupales' },
      ],
    },
    testimonios: {
      title: 'Lo que dicen mis alumnos',
      subtitle: 'Testimonios',
      description: 'Personas reales que transformaron sus cuerpos y su vida',
      items: [
        {
          quote: 'Nunca había logrado mantener constancia en el gym. En 2 meses ya veo cambios reales que me motivan a seguir.',
          author: 'Martín Herrera',
          role: 'Alumno desde hace 4 meses',
          avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?w=200&h=200&fit=crop&crop=face',
          rating: 5,
          highlight: '-10kg',
        },
        {
          quote: 'Después de varios meses de intento, por fin encontré un lugar que me hace querer volver. El ambiente es increíble.',
          author: 'Carla Benítez',
          role: 'Alumna desde hace 6 meses',
          avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?w=200&h=200&fit=crop&crop=face',
          rating: 5,
          highlight: '+5kg músculo',
        },
        {
          quote: 'Mi marido me dice que parezco otra persona. Pero lo mejor es cómo me siento yo misma. Totalmente recomendado.',
          author: 'Patricia Romero',
          role: 'Alumna desde hace 5 meses',
          avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?w=200&h=200&fit=crop&crop=face',
          rating: 5,
          highlight: 'Más energía',
        },
      ],
      featuredIndex: 0,
    },
    ctaFinal: {
      title: 'Listo para transformar tu cuerpo?',
      subtitle: 'Empezá hoy',
      description: 'Vení a probar gratis y descubrí por qué tantos lograron sus objetivos acá.',
      ctaText: 'Hablar por WhatsApp',
      ctaSecondaryText: 'Ver instalaciones',
      highlights: [
        '✓ Clase de prueba sin costo',
        '✓ Sin compromiso',
        '✓ Resultados visibles',
      ],
    },
  },

  'personal-trainer': {
    hero: {
      badge: 'Resultados reales',
      title: 'Transformá tu cuerpo en 90 días',
      subtitle: 'Planes personalizados, seguimiento real y resultados visibles desde el primer mes. Dejá de intentar solo: entrená con un profesional que te acompaña.',
      ctaText: 'Agendar clase de prueba',
      ctaSecondaryText: 'Reservar cupo',
      backgroundImage: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?w=1920&h=1080&fit=crop',
      heroImage: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?w=800&h=1000&fit=crop',
      layout: 'split',
      stats: [
        { value: '500+', label: 'Transformaciones' },
        { value: '98%', label: 'Logro objetivos' },
        { value: '90 días', label: 'Para cambios visibles' },
      ],
    },
    servicios: {
      title: 'Cómo trabajo',
      subtitle: 'Mi metodología',
      description: 'No te vendo promesas vacías. Te entrego un sistema probado que funciona.',
      items: [
        {
          icon: '📋',
          title: 'Plan de entrenamiento a medida',
          description: 'Diseñado exclusivamente para vos, considerando tu edad, lesiones, tiempo disponible y objetivos reales.',
          badges: 'Más popular',
          image: 'https://images.pexels.com/photos/4720776/pexels-photo-4720776.jpeg?w=800&h=600&fit=crop',
        },
        {
          icon: '📈',
          title: 'Seguimiento semanal',
          description: 'Cada semana revisamos progreso, ajustamos lo que no funciona y celebramos lo que sí.',
          image: 'https://images.pexels.com/photos/3823039/pexels-photo-3823039.jpeg?w=800&h=600&fit=crop',
        },
        {
          icon: '🕐',
          title: 'Rutinas adaptadas a tu tiempo',
          description: '¿Tenés 20 minutos o 1 hora? Las adaptamos a tu realidad, no al revés.',
          image: 'https://images.pexels.com/photos/6551127/pexels-photo-6551127.jpeg?w=800&h=600&fit=crop',
        },
        {
          icon: '🍎',
          title: 'Asesoramiento nutricional básico',
          description: 'Sin dietas extrema. Te enseño a comer bien sin privarte ni contar calorías.',
          image: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?w=800&h=600&fit=crop',
        },
      ],
    },
    beneficios: {
      title: 'Lo que vas a lograr',
      subtitle: 'Resultados',
      description: '',
      items: beneficiosTemplates['personal-trainer'] as any,
    },
    sobre: {
      title: 'Sobre mí',
      subtitle: 'Mi trayectoria',
      description: 'Entiendo porque hablo: llevo más de 10 años ayudando a personas como vos a transformar sus cuerpos y su relación con el ejercicio.',
      nombre: 'Tu Entrenador',
      experiencia: 'Lo que me diferencia es que no te doy una rutina y te veo en 1 mes. Estoy ahí, semana a semana, ajustando, motivando y celebrando cada pequeño progreso contigo.',
      image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?w=800&h=1000&fit=crop',
      credentials: [
        'Certificado en Entrenamiento Personal',
        'Especialista en Transformación Física',
        'Más de 500 clientes transformados',
      ],
    },
    galeria: {
      title: 'Transformaciones reales',
      subtitle: 'Galería',
      description: 'Fotos de antes y después que hablan por sí solas',
      images: [
        { src: 'https://images.pexels.com/photos/6551127/pexels-photo-6551127.jpeg?w=800&h=800&fit=crop', alt: 'Transformación hombre entrenando', caption: 'Juan - Transformación completa' },
        { src: 'https://images.pexels.com/photos/5327523/pexels-photo-5327523.jpeg?w=800&h=800&fit=crop', alt: 'Mujer entrenando en gym', caption: 'María - Nuevo estilo de vida' },
        { src: 'https://images.pexels.com/photos/6456138/pexels-photo-6456138.jpeg?w=800&h=800&fit=crop', alt: 'Atleta haciendo pushups', caption: 'Carlos - Fuerza ganada' },
        { src: 'https://images.pexels.com/photos/3888342/pexels-photo-3888342.jpeg?w=800&h=800&fit=crop', alt: 'Entrenamiento con kettlebell', caption: 'Ana - Cuerpo definido' },
      ],
    },
    testimonios: {
      title: 'Lo que dicen mis clientes',
      subtitle: 'Testimonios',
      description: 'Personas reales que transformaron sus cuerpos y su vida',
      items: [
        {
          quote: 'Nunca había logrado mantener constancia en el gym. En 2 meses ya veo cambios reales que me motivan a seguir.',
          author: 'Martín Herrera',
          role: 'Cliente desde hace 4 meses',
          avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?w=200&h=200&fit=crop&crop=face',
          rating: 5,
          highlight: '-10kg',
        },
        {
          quote: 'Después de varias dietas fallidas, por fin encontré un método que funciona. No es magia, es seguimiento real.',
          author: 'Carla Benítez',
          role: 'Cliente desde hace 6 meses',
          avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?w=200&h=200&fit=crop&crop=face',
          rating: 5,
          highlight: '-15kg',
        },
        {
          quote: 'Mi marido me dice que parezco otra persona. Pero lo mejor es cómo me siento yo misma. Totalmente recomendado.',
          author: 'Patricia Romero',
          role: 'Cliente desde hace 5 meses',
          avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?w=200&h=200&fit=crop&crop=face',
          rating: 5,
          highlight: '+3kg músculo',
        },
      ],
      featuredIndex: 0,
    },
    resultados: {
      title: 'Resultados reales',
      subtitle: 'Transformaciones',
      description: 'Estas son personas reales que entrenaron conmigo. Sus resultados hablan por sí solos.',
      items: resultadosTemplates['personal-trainer'] as any,
    },
    ctaFinal: {
      title: 'Listo para transformar tu cuerpo?',
      subtitle: 'Empezá hoy',
      description: 'Agendá tu clase de prueba y empezá hoy tu camino hacia el cuerpo que siempre quisiste.',
      ctaText: 'Hablar por WhatsApp',
      ctaSecondaryText: 'Ver resultados',
      highlights: [
        '✓ Clase de prueba sin costo',
        '✓ Plan personalizado',
        '✓ Resultados visibles',
      ],
    },
  },

  nutricionalista: {
    hero: {
      badge: 'Resultados reales',
      title: 'Transformá tu alimentación',
      subtitle: 'Planes personalizados, seguimiento real y resultados visibles desde el primer mes. Dejá de intentar solo: trabajá con un profesional que te acompaña.',
      ctaText: 'Agendar consulta gratuita',
      ctaSecondaryText: 'Ver resultados de pacientes',
      backgroundImage: 'https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg?w=1920&h=1080&fit=crop',
      heroImage: 'https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?w=800&h=1000&fit=crop',
      layout: 'split',
      stats: [
        { value: '500+', label: 'Pacientes atendidos' },
        { value: '98%', label: 'Logro objetivos' },
        { value: '30 días', label: 'Para cambios visibles' },
      ],
    },
    servicios: {
      title: 'Cómo trabajo',
      subtitle: 'Mi metodología',
      description: 'No te vendo promesas vacías. Te entrego un sistema probado que funciona.',
      items: [
        {
          icon: '📋',
          title: 'Plan nutricional a medida',
          description: 'Diseñado exclusivamente para vos, considerando tu edad, alergias, preferencias y objetivos reales.',
          badges: 'Más popular',
          image: 'https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg?w=800&h=600&fit=crop',
        },
        {
          icon: '📈',
          title: 'Seguimiento semanal',
          description: 'Cada semana revisamos progreso, ajustamos lo que no funciona y celebramos lo que sí.',
          image: 'https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?w=800&h=600&fit=crop',
        },
        {
          icon: '🕐',
          title: 'Menú adaptado a tu tiempo',
          description: '¿Tenés 20 minutos o 1 hora para cocinar? Los adaptamos a tu realidad, no al revés.',
          image: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?w=800&h=600&fit=crop',
        },
        {
          icon: '🥗',
          title: 'Asesoramiento en compras',
          description: 'Sin dietas extremas. Te enseño a elegir bien en el supermercado sin privarte.',
          image: 'https://images.pexels.com/photos/443514/pexels-photo-443514.jpeg?w=800&h=600&fit=crop',
        },
      ],
    },
    testimonios: {
      title: 'Lo que dicen mis pacientes',
      subtitle: 'Testimonios',
      description: 'Personas reales que transformaron su relación con la comida',
      items: [
        {
          quote: 'Nunca había logrado mantener una alimentación sana. En 2 meses ya veo cambios reales que me motivan a seguir.',
          author: 'Martín Herrera',
          role: 'Paciente desde hace 4 meses',
          avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?w=200&h=200&fit=crop&crop=face',
          rating: 5,
          highlight: '-10kg',
        },
        {
          quote: 'Después de varias dietas fallidas, por fin encontré un método que funciona. No es magia, es seguimiento real.',
          author: 'Carla Benítez',
          role: 'Paciente desde hace 6 meses',
          avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?w=200&h=200&fit=crop&crop=face',
          rating: 5,
          highlight: '-15kg',
        },
        {
          quote: 'Mi familia dice que parezco otra persona. Pero lo mejor es cómo me siento yo misma. Totalmente recomendado.',
          author: 'Patricia Romero',
          role: 'Paciente desde hace 5 meses',
          avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?w=200&h=200&fit=crop&crop=face',
          rating: 5,
          highlight: '+energía',
        },
      ],
      featuredIndex: 0,
    },
    sobre: {
      title: 'Sobre mí',
      subtitle: 'Mi trayectoria',
      description: 'Entiendo porque hablo: llevo más de 10 años ayudando a personas como vos a transformar su alimentación y su salud.',
      nombre: 'Tu Nutricionista',
      experiencia: 'Lo que me diferencia es que no te doy un plan y te veo en 1 mes. Estoy ahí, semana a semana, ajustando, motivando y celebrando cada pequeño progreso contigo.',
      image: 'https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg?w=800&h=1000&fit=crop',
      credentials: [
        'Licenciado en Nutrición',
        'Especialista en Alimentación Saludable',
        'Más de 500 pacientes atendidos',
      ],
    },
    ctaFinal: {
      title: 'Listo para transformar tu alimentación?',
      subtitle: 'Empezá hoy',
      description: 'Agendá tu consulta gratuita y empezá hoy tu camino hacia una vida más saludable.',
      ctaText: 'Hablar por WhatsApp',
      ctaSecondaryText: 'Ver resultados',
      highlights: [
        '✓ Consulta sin costo',
        '✓ Plan personalizado',
        '✓ Resultados visibles',
      ],
    },
    beneficios: {
      title: 'Lo que vas a lograr',
      subtitle: 'Resultados',
      description: '',
      items: beneficiosTemplates['personal-trainer'] as any,
    },
  },

  psicologo: {
    hero: {
      badge: 'Resultados reales',
      title: 'Encontrá tu equilibrio emocional',
      subtitle: 'Acompañamiento profesional personalizado, seguimiento real y herramientas concretas desde la primera sesión. Dejá de intentar solo: trabajá con un profesional que te acompaña.',
      ctaText: 'Agendar primera sesión',
      ctaSecondaryText: 'Ver testimonios de pacientes',
      backgroundImage: 'https://images.pexels.com/photos/3792413/pexels-photo-3792413.jpeg?w=1920&h=1080&fit=crop',
      heroImage: 'https://images.pexels.com/photos/4101555/pexels-photo-4101555.jpeg?w=800&h=1000&fit=crop',
      layout: 'split',
      stats: [
        { value: '1000+', label: 'Pacientes acompañados' },
        { value: '98%', label: 'Logro objetivos' },
        { value: '15+', label: 'Años de experiencia' },
      ],
    },
    servicios: {
      title: 'Cómo trabajo',
      subtitle: 'Mi metodología',
      description: 'No te vendo promesas vacías. Te entrego un sistema probado que funciona.',
      items: [
        {
          icon: '📋',
          title: 'Evaluación inicial',
          description: 'Diseño exclusivo para vos, considerando tu historia, objetivos y situación actual.',
          badges: 'Primera sesión',
          image: 'https://images.pexels.com/photos/3792413/pexels-photo-3792413.jpeg?w=800&h=600&fit=crop',
        },
        {
          icon: '📈',
          title: 'Seguimiento continuo',
          description: 'Cada sesión revisamos progreso, ajustamos lo que no funciona y celebramos lo que sí.',
          image: 'https://images.pexels.com/photos/4101555/pexels-photo-4101555.jpeg?w=800&h=600&fit=crop',
        },
        {
          icon: '🕐',
          title: 'Sesiones adaptadas a tu tiempo',
          description: '¿Presencial o online? Sesiones de 50 o 80 minutos según tu necesidad.',
          image: 'https://images.pexels.com/photos/3973750/pexels-photo-3973750.jpeg?w=800&h=600&fit=crop',
        },
        {
          icon: '🌱',
          title: 'Herramientas prácticas',
          description: 'Técnicas concretas que podés usar en tu vida diaria para manejar el estrés y la ansiedad.',
          image: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?w=800&h=600&fit=crop',
        },
      ],
    },
    testimonios: {
      title: 'Lo que dicen mis pacientes',
      subtitle: 'Testimonios',
      description: 'Personas reales que encontraron su camino hacia el bienestar',
      items: [
        {
          quote: 'Nunca había logrado entender mis emociones. En 3 meses ya tengo herramientas que me acompañan diario.',
          author: 'Martín Herrera',
          role: 'Paciente desde hace 4 meses',
          avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?w=200&h=200&fit=crop&crop=face',
          rating: 5,
          highlight: 'Superó ansiedad',
        },
        {
          quote: 'Después de años de therapy sin resultados, encontré un método que funciona. No es magia, es seguimiento real.',
          author: 'Carla Benítez',
          role: 'Paciente desde hace 6 meses',
          avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?w=200&h=200&fit=crop&crop=face',
          rating: 5,
          highlight: 'Encontró paz',
        },
        {
          quote: 'Mi familia dice que parezco otra persona. Pero lo mejor es cómo me siento yo misma. Totalmente recomendado.',
          author: 'Patricia Romero',
          role: 'Paciente desde hace 5 meses',
          avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?w=200&h=200&fit=crop&crop=face',
          rating: 5,
          highlight: 'Mejoró relaciones',
        },
      ],
      featuredIndex: 0,
    },
    sobre: {
      title: 'Sobre mí',
      subtitle: 'Mi trayectoria',
      description: 'Entiendo porque hablo: llevo más de 15 años ayudando a personas como vos a encontrar su equilibrio emocional.',
      nombre: 'Tu Psicólogo',
      experiencia: 'Lo que me diferencia es que no te doy técnicas y te veo en 1 mes. Estoy ahí, sesión a sesión, acompañándote en cada paso de tu proceso.',
      image: 'https://images.pexels.com/photos/3792413/pexels-photo-3792413.jpeg?w=800&h=1000&fit=crop',
      credentials: [
        'Licenciado en Psicología',
        'Especialista en Terapia Cognitivo-Conductual',
        'Más de 1000 pacientes acompañados',
      ],
    },
    ctaFinal: {
      title: 'Listo para encontrar tu equilibrio?',
      subtitle: 'Empezá hoy',
      description: 'Agendá tu primera sesión y empezá hoy tu camino hacia el bienestar que merecés.',
      ctaText: 'Hablar por WhatsApp',
      ctaSecondaryText: 'Ver testimonios',
      highlights: [
        '✓ Primera sesión de evaluación',
        '✓ Enfoque personalizado',
        '✓ Resultados visibles',
      ],
    },
    beneficios: {
      title: 'Lo que vas a lograr',
      subtitle: 'Resultados',
      description: '',
      items: beneficiosTemplates['personal-trainer'] as any,
    },
    galeria: {
      title: 'Mi espacio de trabajo',
      subtitle: 'Galería',
      description: 'Un ambiente seguro y profesional para tu proceso',
      images: [
        { src: 'https://images.pexels.com/photos/3792413/pexels-photo-3792413.jpeg?w=800&h=800&fit=crop', alt: 'Consultorio', caption: 'Consultorio privado' },
        { src: 'https://images.pexels.com/photos/4101555/pexels-photo-4101555.jpeg?w=800&h=800&fit=crop', alt: 'Sala de espera', caption: 'Sala de espera' },
        { src: 'https://images.pexels.com/photos/3973750/pexels-photo-3973750.jpeg?w=800&h=800&fit=crop', alt: 'Sesión online', caption: 'Modalidad online' },
        { src: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?w=800&h=800&fit=crop', alt: 'Ambiente profesional', caption: 'Ambiente seguro' },
      ],
    },
  },

  'estetica-corporal': {
    hero: {
      badge: 'Belleza profesional',
      title: 'Tu piel merece los mejores cuidados',
      subtitle: 'Tratamientos especializados, productos de primera línea y resultados visibles desde la primera sesión. Dejá de experimentar: ponete en manos de profesionales que te recomiendan.',
      ctaText: 'Reservar turno',
      ctaSecondaryText: 'Ver tratamientos',
      backgroundImage: 'https://images.pexels.com/photos/3932571/pexels-photo-3932571.jpeg?w=1920&h=1080&fit=crop',
      heroImage: 'https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?w=800&h=1000&fit=crop',
      layout: 'split',
      stats: [
        { value: '2000+', label: 'Clientas satisfechas' },
        { value: '4.95/5', label: 'Calificación' },
        { value: '15+', label: 'Tratamientos' },
      ],
    },
    servicios: {
      title: 'Cómo trabajo',
      subtitle: 'Mi metodología',
      description: 'No te vendo promesas vacías. Te entrego resultados reales con productos de primera línea.',
      items: [
        {
          icon: '✨',
          title: 'Tratamientos faciales',
          description: 'Limpiezas profundas, peelings, hidratación y anti-aging con productos profesionales.',
          badges: 'Más popular',
          image: 'https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?w=800&h=600&fit=crop',
        },
        {
          icon: '💆',
          title: 'Masajes y relajación',
          description: 'Masajes terapeúticos y relajantes que alivian el estrés y mejoran tu bienestar.',
          image: 'https://images.pexels.com/photos/3932571/pexels-photo-3932571.jpeg?w=800&h=600&fit=crop',
        },
        {
          icon: '🧖',
          title: 'Tratamientos corporales',
          description: 'Modelado, reducción y tratamientos reductores que ves resultados reales.',
          image: 'https://images.pexels.com/photos/3936317/pexels-photo-3936317.jpeg?w=800&h=600&fit=crop',
        },
        {
          icon: '🌟',
          title: 'Depilación permanente',
          description: 'Tecnología de última generación para una depilación efectiva y duradera.',
          image: 'https://images.pexels.com/photos/3962575/pexels-photo-3962575.jpeg?w=800&h=600&fit=crop',
        },
      ],
    },
    beneficios: {
      title: 'Lo que van a lograr tus clientas',
      subtitle: 'Beneficios',
      description: '',
      items: [
        {
          icon: '😍',
          title: 'Piel radiante',
          description: 'Resultados visibles desde la primera sesión',
          highlight: 'Tratamientos efectivos y seguros',
        },
        {
          icon: '🧘',
          title: 'Relajación completa',
          description: 'Un espacio para desconectar del estrés',
          highlight: 'Ambiente spa profesional',
        },
        {
          icon: '💪',
          title: 'Confianza renovada',
          description: 'Sentirse bien con la piel es sentirse bien con uno mismo',
          highlight: 'Transformación desde adentro',
        },
        {
          icon: '⏳',
          title: 'Resultados sostenidos',
          description: 'Consejos para mantener los resultados en casa',
          highlight: 'Plan de mantenimiento personalizado',
        },
      ],
    },
    galeria: {
      title: 'Mis resultados',
      subtitle: 'Galería',
      description: 'Tratamientos reales con resultados visibles',
      images: [
        { src: 'https://images.pexels.com/photos/3932571/pexels-photo-3932571.jpeg?w=800&h=800&fit=crop', alt: 'Tratamiento facial', caption: 'Piel radiante' },
        { src: 'https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?w=800&h=800&fit=crop', alt: 'Limpieza facial', caption: 'Limpieza profunda' },
        { src: 'https://images.pexels.com/photos/3936317/pexels-photo-3936317.jpeg?w=800&h=800&fit=crop', alt: 'Tratamiento corporal', caption: ' Corporal' },
        { src: 'https://images.pexels.com/photos/3962575/pexels-photo-3962575.jpeg?w=800&h=800&fit=crop', alt: 'Ambiente spa', caption: 'Espacio de relax' },
      ],
    },
    testimonios: {
      title: 'Lo que dicen mis clientas',
      subtitle: 'Testimonios',
      description: 'Mujeres reales que confiaron en mi trabajo',
      items: [
        {
          quote: 'Mi piel nunca se vio mejor. Después de años probando productos, por fin encontré alguien que realmente sabe.',
          author: 'Valeria M.',
          role: 'Clienta desde hace 1 año',
          avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?w=200&h=200&fit=crop&crop=face',
          rating: 5,
          highlight: 'Piel radiante',
        },
        {
          quote: 'Es mi lugar de relajación. Vuelvo cada mes sin dudar. El ambiente es increíble y los resultados speak por sí solos.',
          author: 'Catalina R.',
          role: 'Clienta desde hace 2 años',
          avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?w=200&h=200&fit=crop&crop=face',
          rating: 5,
          highlight: 'Rutina semanal',
        },
        {
          quote: 'Recomiendo este lugar a todas mis amigas. Impecable desde la atención hasta los resultados.',
          author: 'Daniela G.',
          role: 'Clienta desde hace 8 meses',
          avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?w=200&h=200&fit=crop&crop=face',
          rating: 5,
          highlight: 'Muy recomendado',
        },
      ],
      featuredIndex: 0,
    },
    sobre: {
      title: 'Sobre mí',
      subtitle: 'Mi trayectoria',
      description: 'Entiendo porque hablo: llevo años ayudando a mujeres como vos a verse y sentirse mejor.',
      nombre: 'Tu especialista en estética',
      experiencia: 'Lo que me diferencia es que no te vendo tratamientos. Te explico qué necesita tu piel y por qué. Cada clienta es única y merece un tratamiento personalizado.',
      image: 'https://images.pexels.com/photos/3932571/pexels-photo-3932571.jpeg?w=800&h=1000&fit=crop',
      credentials: [
        'Técnica en estética',
        'Especialista en tratamientos faciales',
        'Más de 2000 clientas atendidas',
      ],
    },
    ctaFinal: {
      title: 'Listo para transformar tu piel?',
      subtitle: 'Empezá hoy',
      description: 'Reservá tu turno y descubrí por qué tantas mujeres ya confían en mi trabajo.',
      ctaText: 'Hablar por WhatsApp',
      ctaSecondaryText: 'Ver resultados',
      highlights: [
        '✓ Primera consulta sin costo',
        '✓ Tratamientos personalizados',
        '✓ Resultados visibles',
      ],
    },
  },

  'casa-de-comidas': {
    hero: {
      badge: 'Comida casera real',
      title: 'La comida que hacías en casa, ahora online',
      subtitle: 'Platos elaborados con ingredientes frescos, recetas de familia y el sabor que no encontrás en ningún delivery. Sin conservantes, sin magia: solo comida bien hecha.',
      ctaText: 'Ver el menú',
      ctaSecondaryText: 'Hacer un pedido',
      backgroundImage: 'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?w=1920&h=1080&fit=crop',
      heroImage: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?w=800&h=1000&fit=crop',
      layout: 'split',
      stats: [
        { value: '500+', label: 'Pedidos/mes' },
        { value: '4.8/5', label: 'Calificación' },
        { value: '0%', label: 'Comisión' },
      ],
    },
    servicios: {
      title: 'Qué vas a encontrar',
      subtitle: 'Mi carta',
      description: 'Platos hechos como en casa, con ingredientes frescos y recetas que sabían a hogar.',
      items: [
        {
          icon: '🍝',
          title: 'Platos principales',
          description: 'Pastas, guisos, asados y especialidades de la casa que rendían más que cualquier delivery.',
          badges: 'Más pedido',
          image: 'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?w=800&h=600&fit=crop',
        },
        {
          icon: '🥗',
          title: 'Opciones saludables',
          description: 'Ensaladas, pochoclos y platos light para quien quiere comer bien sin lourdeza.',
          image: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?w=800&h=600&fit=crop',
        },
        {
          icon: '🍰',
          title: 'Postres caseros',
          description: 'Dulces de la abuela, tartas y budines que cierran cualquier comida.',
          image: 'https://images.pexels.com/photos/1624479/pexels-photo-1624479.jpeg?w=800&h=600&fit=crop',
        },
        {
          icon: '🥤',
          title: 'Bebidas y combos',
          description: 'Refrescos, jugos naturales y menúes familiares para compartir.',
          image: 'https://images.pexels.com/photos/1559827/pexels-photo-1559827.jpeg?w=800&h=600&fit=crop',
        },
      ],
    },
    beneficios: {
      title: 'Por qué pedir directo',
      subtitle: 'Ventajas',
      description: '',
      items: [
        {
          icon: '💰',
          title: 'Sin comisiones',
          description: 'Pedís directo = el 100% va para la cocina, no para las apps',
          highlight: 'Ahorrás 15-30% por pedido',
        },
        {
          icon: '📱',
          title: 'Pedís por WhatsApp',
          description: 'Sin esperar que alguien conteste. Mandás el pedido y listo.',
          highlight: 'Más rápido que cualquier app',
        },
        {
          icon: '🚚',
          title: 'Envío rápido',
          description: 'Delivery propio o cadetes de confianza que conocen tu zona.',
          highlight: 'Llega caliente a tu puerta',
        },
        {
          icon: '📋',
          title: 'Menú actualizado',
          description: 'Lo que hay hoy, lo ves hoy. Sin platos agotados ni confusiones.',
          highlight: ' Siempre fresco',
        },
      ],
    },
    galeria: {
      title: 'Mis platos',
      subtitle: 'Galería',
      description: 'Fotos reales de lo que vas a comer',
      images: [
        { src: 'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?w=800&h=800&fit=crop', alt: 'Plato principal', caption: 'Platos abundantes' },
        { src: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?w=800&h=800&fit=crop', alt: 'Ensalada', caption: 'Fresco y liviano' },
        { src: 'https://images.pexels.com/photos/1624479/pexels-photo-1624479.jpeg?w=800&h=800&fit=crop', alt: 'Postre', caption: 'Dulce de casa' },
        { src: 'https://images.pexels.com/photos/1559827/pexels-photo-1559827.jpeg?w=800&h=800&fit=crop', alt: 'Ambiente', caption: 'Como en casa' },
      ],
    },
    testimonios: {
      title: 'Lo que dicen mis clientes',
      subtitle: 'Testimonios',
      description: 'Gente que ya probó y volvió',
      items: [
        {
          quote: 'La mejor comida casera que encontré. Pido cada semana y nunca defrauda.',
          author: 'Juan P.',
          role: 'Cliente desde hace 1 año',
          avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?w=200&h=200&fit=crop&crop=face',
          rating: 5,
          highlight: 'Cliente fiel',
        },
        {
          quote: 'La comida llega siempre caliente y exactamente como la foto. Eso es raro.',
          author: 'María G.',
          role: 'Cliente desde hace 6 meses',
          avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?w=200&h=200&fit=crop&crop=face',
          rating: 5,
          highlight: 'Recomendadora',
        },
        {
          quote: 'Mejor que cualquier delivery. Es como comer en casa de la abuela pero sin hacer nada.',
          author: 'Carlos L.',
          role: 'Cliente desde hace 4 meses',
          avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?w=200&h=200&fit=crop&crop=face',
          rating: 5,
          highlight: 'Ahora viene la familia',
        },
      ],
      featuredIndex: 0,
    },
    ctaFinal: {
      title: 'Listo para probar?',
      subtitle: 'Pedí ahora',
      description: 'Mirá el menú y hacé tu pedido. Te lo llevo a tu casa en poco tiempo.',
      ctaText: 'Hacer pedido',
      ctaSecondaryText: 'Ver menú completo',
      highlights: [
        '✓ Envío sin cargo',
        '✓ Pedido mínimo bajo',
        '✓ Aceptamos todos los medios',
      ],
    },
  },
      title: 'Qué dicen nuestros clientes',
      subtitle: 'Testimonios',
      description: 'Pidiendo una y otra vez',
      items: [
        {
          quote: 'Excelente calidad a muy buen precio. Pido cada semana.',
          author: 'Juan P.',
          role: 'Cliente desde hace 1 año',
          rating: 5,
          highlight: 'Cliente fiel',
        },
        {
          quote: 'La comida llega siempre caliente y deliciosa. Muy recomendable.',
          author: 'María G.',
          role: 'Cliente desde hace 6 meses',
          rating: 5,
          highlight: 'Recomendadora',
        },
        {
          quote: 'Mejor que cualquier app de delivery. Fresquísimo.',
          author: 'Carlos L.',
          role: 'Cliente desde hace 4 meses',
          rating: 5,
          highlight: 'Nuevo cliente satisfecho',
        },
      ],
      featuredIndex: 0,
    },
    ctaFinal: {
      title: 'Listo para probar?',
      subtitle: 'Pedí ahora',
      description: 'Mirá el menú y hacé tu pedido. Te lo llevo a tu casa en poco tiempo.',
      ctaText: 'Hacer pedido',
      ctaSecondaryText: 'Ver menú completo',
      highlights: [
        '✓ Envío sin cargo',
        '✓ Pedido mínimo bajo',
        '✓ Aceptamos todos los medios',
      ],
    },
  },
};
