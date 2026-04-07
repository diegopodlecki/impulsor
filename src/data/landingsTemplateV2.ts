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
      badge: 'Transforma tu vida',
      title: 'Tu gimnasio merece una web que llene cupos',
      subtitle: 'Una página web profesional que muestra tus clases, horarios e instalaciones y convierte visitas en inscripciones todos los días.',
      ctaText: 'Quiero más alumnos',
      ctaSecondaryText: 'Ver demo',
      backgroundImage: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?w=1200&h=800&fit=crop',
      stats: [
        { value: '5,000+', label: 'Alumnos activos' },
        { value: '98%', label: 'Satisfacción' },
        { value: '24/7', label: 'Disponible' },
      ],
    },
    servicios: {
      title: 'Qué incluye tu web',
      subtitle: 'Completo',
      description: 'Todo lo que tu gimnasio necesita para convertir visitas en alumnos nuevos',
      items: [
        {
          icon: '📸',
          title: 'Hero impactante',
          description: 'Foto de tu gimnasio con mensaje claro y botón directo a WhatsApp.',
          image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?w=600&h=400&fit=crop',
        },
        {
          icon: '📅',
          title: 'Clases y horarios',
          description: 'Grilla visual con todas tus clases, turnos y profesores disponibles.',
          image: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?w=600&h=400&fit=crop',
        },
        {
          icon: '🏋️',
          title: 'Instalaciones destacadas',
          description: 'Fotos reales de tus máquinas, areas, y espacios para generar confianza.',
          image: 'https://images.pexels.com/photos/3621196/pexels-photo-3621196.jpeg?w=600&h=400&fit=crop',
        },
        {
          icon: '👥',
          title: 'Testimonios de alumnos',
          description: 'Historias reales de transformación que generan credibilidad.',
          image: 'https://images.pexels.com/photos/3807933/pexels-photo-3807933.jpeg?w=600&h=400&fit=crop',
        },
      ],
    },
    beneficios: {
      title: 'Lo que vas a lograr',
      subtitle: 'Beneficios',
      description: 'Estos son los resultados que verás con tu nueva web',
      items: beneficiosTemplates.gimnasio as any,
    },
    galeria: {
      title: 'Tu gimnasio en fotos reales',
      subtitle: 'Galería',
      description: 'Muestra la realidad de tu espacio para que las personas se sientan seguras',
      images: [
        { src: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?w=600&h=600&fit=crop', alt: 'Piso de entrenamiento' },
        { src: 'https://images.pexels.com/photos/3621196/pexels-photo-3621196.jpeg?w=600&h=600&fit=crop', alt: 'Máquinas cardio' },
        { src: 'https://images.pexels.com/photos/3808991/pexels-photo-3808991.jpeg?w=600&h=600&fit=crop', alt: 'Área de pesas' },
        { src: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?w=600&h=600&fit=crop', alt: 'Clase grupal' },
      ],
    },
    testimonios: {
      title: 'Qué dicen nuestros alumnos',
      subtitle: 'Testimonios',
      description: 'Historias reales de personas que transformaron sus vidas',
      items: [
        {
          quote: 'Conseguí resultados que no imaginaba en tan poco tiempo. El equipo es excelente.',
          author: 'María García',
          role: 'Alumna de 3 meses',
          rating: 5,
          highlight: 'Bajó 8kg en 3 meses',
        },
        {
          quote: 'El ambiente es lo mejor. Me encanta venir cada día.',
          author: 'Juan López',
          role: 'Alumno de 1 año',
          rating: 5,
          highlight: 'Lleva 1 año entrenando',
        },
        {
          quote: 'Las clases grupales me motivaron a seguir adelante.',
          author: 'Carolina Rodríguez',
          role: 'Alumna de spinning',
          rating: 5,
          highlight: 'Quemó 500 calorías por clase',
        },
      ],
      featuredIndex: 0,
    },
    ctaFinal: {
      title: 'Pedí tu web para tu gimnasio',
      subtitle: 'Listos',
      description: 'Completa el formulario y nos contactamos en menos de 24 horas para armar tu presencia digital.',
      highlights: [
        '✓ Diseño moderno y profesional',
        '✓ Optimizado para conversión',
        '✓ SinConfiguracion técnica',
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
          quote: 'Después de多次 dietas fallidas, por fin encontré un método que funciona. No es magia, es seguimiento real.',
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

  nutricionista: {
    hero: {
      badge: 'Alimentación consciente',
      title: 'Tu consultorio necesita presencia online',
      subtitle: 'Una web que muestra tu expertise en nutrición, tranquiliza a tus pacientes y genera consultas todos los días.',
      ctaText: 'Quiero pacientes nuevos',
      ctaSecondaryText: 'Ver demo',
      backgroundImage: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?w=1200&h=800&fit=crop',
      stats: [
        { value: '500+', label: 'Pacientes atendidos' },
        { value: '4.9/5', label: 'Calificación' },
        { value: '15', label: 'Años de experiencia' },
      ],
    },
    servicios: {
      title: 'Tus servicios de nutrición',
      subtitle: 'Tratamientos',
      description: 'Los servicios que ofreces a tus pacientes',
      items: [
        {
          icon: '🥗',
          title: 'Consulta nutricional inicial',
          description: 'Evaluación completa de hábitos y diseño del plan personalizado.',
          image: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?w=600&h=400&fit=crop',
        },
        {
          icon: '📊',
          title: 'Plan nutricional personalizado',
          description: 'Menú semanal diseñado según objetivos, alergias y preferencias.',
          image: 'https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg?w=600&h=400&fit=crop',
        },
        {
          icon: '📱',
          title: 'Seguimiento online',
          description: 'Ajustes del plan según tu progreso con consultas virtuales.',
          image: 'https://images.pexels.com/photos-3807517/pexels-photo-3807517.jpeg?w=600&h=400&fit=crop',
        },
      ],
    },
    beneficios: {
      title: 'Lo que vas a lograr',
      subtitle: 'Resultados',
      description: '',
      items: beneficiosTemplates.nutricionista as any,
    },
    galeria: {
      title: 'Tu consultorio en fotos',
      subtitle: 'Galería',
      description: 'Genera confianza mostrando tu espacio profesional',
      images: [
        { src: 'https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg?w=600&h=600&fit=crop', alt: 'Comidas saludables' },
        { src: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?w=600&h=600&fit=crop', alt: 'Frutas y verduras frescas' },
        { src: 'https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?w=600&h=600&fit=crop', alt: 'Preparación de comidas' },
        { src: 'https://images.pexels.com/photos/443514/pexels-photo-443514.jpeg?w=600&h=600&fit=crop', alt: 'Snacks saludables' },
      ],
    },
    testimonios: {
      title: 'Qué dicen mis pacientes',
      subtitle: 'Testimonios',
      description: 'Personas que lograron sus objetivos de salud',
      items: [
        {
          quote: 'Finalmente entiendo cómo comer bien. Cambió mi vida.",',
          author: 'Gabriela López',
          role: 'Paciente desde hace 1 año',
          rating: 5,
          highlight: 'Bajó 10kg sostenido',
        },
        {
          quote: 'La consulta me dio las herramientas que necesitaba para vivir mejor.',
          author: 'Federico García',
          role: 'Paciente desde hace 6 meses',
          rating: 5,
          highlight: 'Mejoró su digestión',
        },
        {
          quote: 'Excelente profesional, muy dedicada y empática.',
          author: 'Mariana Rodríguez',
          role: 'Paciente desde hace 8 meses',
          rating: 5,
          highlight: 'Recuperó su energía',
        },
      ],
      featuredIndex: 0,
    },
    ctaFinal: {
      title: 'Pedí tu web de nutricionista',
      subtitle: 'Listos',
      description: 'Completa el formulario y nos contactamos para crear tu consultor digital que atrae pacientes nuevos.',
      highlights: [
        '✓ Mostra tu expertise',
        '✓ Tranquiliza a tus pacientes',
        '✓ Genera consultas',
      ],
    },
  },

  psicologo: {
    hero: {
      badge: 'Expandí tu práctica',
      title: 'Tu consultorio merece presencia online profesional',
      subtitle: 'Una web que transmite confianza, muestra tu expertise y genera consultas calificadas todos los días.',
      ctaText: 'Quiero más pacientes',
      ctaSecondaryText: 'Ver demo',
      backgroundImage: 'https://images.pexels.com/photos/3792413/pexels-photo-3792413.jpeg?w=1200&h=800&fit=crop',
      stats: [
        { value: '1000+', label: 'Pacientes tratados' },
        { value: '4.9/5', label: 'Calificación' },
        { value: '20+', label: 'Años de experiencia' },
      ],
    },
    servicios: {
      title: 'Tus servicios terapéuticos',
      subtitle: 'Oferta',
      description: 'Los servicios que ofreces a tus pacientes',
      items: [
        {
          icon: '🧠',
          title: 'Terapia individual',
          description: 'Sesiones personalizadas en consultorio o online.',
          image: 'https://images.pexels.com/photos/3792413/pexels-photo-3792413.jpeg?w=600&h=400&fit=crop',
        },
        {
          icon: '👥',
          title: 'Terapia de pareja',
          description: 'Trabajo especializado en relaciones y conflictos.',
          image: 'https://images.pexels.com/photos/4101555/pexels-photo-4101555.jpeg?w=600&h=400&fit=crop',
        },
        {
          icon: '🌱',
          title: 'Coaching personal',
          description: 'Acompañamiento en procesos de transformación.',
          image: 'https://images.pexels.com/photos-3807517/pexels-photo-3807517.jpeg?w=600&h=400&fit=crop',
        },
      ],
    },
    beneficios: {
      title: 'Lo que vas a lograr',
      subtitle: 'Resultados',
      description: '',
      items: [
        {
          icon: '💎',
          title: 'Pacientes calificados',
          description: 'Atraés personas que realmente necesitan tu ayuda y pueden pagar',
          highlight: 'Sin desperdiciar tiempo en consultas sin intención',
        },
        {
          icon: '🔒',
          title: 'Confianza inmediata',
          description: 'Tu web transmite profesionalismo desde el primer click',
          highlight: 'Credenciales y especialidades destacadas',
        },
        {
          icon: '📱',
          title: 'Consultas online',
          description: 'Expandís tu alcance más allá de tu zona geográfica',
          highlight: 'Sesiones virtuales integradas',
        },
        {
          icon: '⏰',
          title: 'Menos administrativo',
          description: 'Sistema de turnos online reduce tus tareas manuales',
          highlight: 'Confirmaciones automáticas por email/WhatsApp',
        },
      ],
    },
    galeria: {
      title: 'Tu espacio profesional',
      subtitle: 'Galería',
      description: 'Genera confianza mostrando tu ambiente terapéutico',
      images: [
        { src: 'https://images.pexels.com/photos/3792413/pexels-photo-3792413.jpeg?w=600&h=600&fit=crop', alt: 'Consultorio profesional' },
        { src: 'https://images.pexels.com/photos/4101555/pexels-photo-4101555.jpeg?w=600&h=600&fit=crop', alt: 'Sala de espera' },
        { src: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?w=600&h=600&fit=crop', alt: 'Ambiente tranquilo' },
        { src: 'https://images.pexels.com/photos/3973750/pexels-photo-3973750.jpeg?w=600&h=600&fit=crop', alt: 'Detalles profesionales' },
      ],
    },
    testimonios: {
      title: 'Qué dicen mis pacientes',
      subtitle: 'Testimonios',
      description: 'Transformaciones que generan confianza',
      items: [
        {
          quote: 'Finalmente pude procesar mis emociones y seguir adelante. Excelente profesional.',
          author: 'Marcela T.',
          role: 'Paciente desde hace 1 año',
          rating: 5,
          highlight: 'Superó depresión',
        },
        {
          quote: 'Las sesiones me dieron las herramientas que necesitaba para vivir mejor.',
          author: 'Roberto P.',
          role: 'Paciente desde hace 6 meses',
          rating: 5,
          highlight: 'Mejoró relaciones',
        },
        {
          quote: 'El espacio es seguro y la atención muy profesional y empática.',
          author: 'Sylvia L.',
          role: 'Paciente desde hace 8 meses',
          rating: 5,
          highlight: 'Encontró paz',
        },
      ],
      featuredIndex: 0,
    },
    ctaFinal: {
      title: 'Pedí tu web de psicólogo',
      subtitle: 'Listos',
      description: 'Completa el formulario y nos contactamos para crear tu presencia digital que atrae pacientes calificados.',
      highlights: [
        '✓ Transmitís confianza',
        '✓ Sistema de turnos online',
        '✓ Contacto directo',
      ],
    },
  },

  'estetica-corporal': {
    hero: {
      badge: 'Belleza profesional',
      title: 'Tu centro de estética merece una web que atrae clientas',
      subtitle: 'Una página web hermosa que muestra tus tratamientos, resultados y genera consultas todos los días.',
      ctaText: 'Quiero más clientas',
      ctaSecondaryText: 'Ver demo',
      backgroundImage: 'https://images.pexels.com/photos/3932571/pexels-photo-3932571.jpeg?w=1200&h=800&fit=crop',
      stats: [
        { value: '2000+', label: 'Clientas satisfechas' },
        { value: '4.95/5', label: 'Calificación' },
        { value: '15+', label: 'Tratamientos' },
      ],
    },
    servicios: {
      title: 'Tus tratamientos de estética',
      subtitle: 'Servicios',
      description: 'Los tratamientos que ofrecés a tus clientas',
      items: [
        {
          icon: '💆',
          title: 'Tratamientos faciales',
          description: 'Limpiezas, peeling, hidratación y anti-aging especializado.',
          image: 'https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?w=600&h=400&fit=crop',
        },
        {
          icon: '✨',
          title: 'Depilación y cuidado',
          description: 'Métodos modernos y seguros para cuidado de la piel.',
          image: 'https://images.pexels.com/photos/3936317/pexels-photo-3936317.jpeg?w=600&h=400&fit=crop',
        },
        {
          icon: '🧖',
          title: 'Masajes y relajación',
          description: 'Tratamientos relajantes para cuerpo y mente.',
          image: 'https://images.pexels.com/photos/3932571/pexels-photo-3932571.jpeg?w=600&h=400&fit=crop',
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
      title: 'Nuestro espacio premium',
      subtitle: 'Galería',
      description: 'Ambiente que respira calma y lujo',
      images: [
        { src: 'https://images.pexels.com/photos/3932571/pexels-photo-3932571.jpeg?w=600&h=600&fit=crop', alt: 'Spa relajante' },
        { src: 'https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?w=600&h=600&fit=crop', alt: 'Tratamiento facial' },
        { src: 'https://images.pexels.com/photos/3936317/pexels-photo-3936317.jpeg?w=600&h=600&fit=crop', alt: 'Estación de cuidado' },
        { src: 'https://images.pexels.com/photos/3962575/pexels-photo-3962575.jpeg?w=600&h=600&fit=crop', alt: 'Ambiente premium' },
      ],
    },
    testimonios: {
      title: 'Qué dicen nuestras clientas',
      subtitle: 'Testimonios',
      description: 'Transformaciones que se ven en el espejo',
      items: [
        {
          quote: 'Mi piel nunca se vio mejor. El equipo es excelente y muy atento.',
          author: 'Valeria M.',
          role: 'Clienta desde hace 1 año',
          rating: 5,
          highlight: 'Piel radiante',
        },
        {
          quote: 'Es mi lugar de relajación. Vuelvo cada mes sin dudar.',
          author: 'Catalina R.',
          role: 'Clienta desde hace 2 años',
          rating: 5,
          highlight: 'Rutina semanal',
        },
        {
          quote: 'Recomiendo este centro a todas mis amigas. Impecable.',
          author: 'Daniela G.',
          role: 'Clienta desde hace 8 meses',
          rating: 5,
          highlight: 'Muy recomendado',
        },
      ],
      featuredIndex: 0,
    },
    ctaFinal: {
      title: 'Pedí tu web para tu centro de estética',
      subtitle: 'Listos',
      description: 'Completa el formulario y nos contactamos para crear tu presencia digital premium que atrae clientas.',
      highlights: [
        '✓ Galería de antes/después',
        '✓ Sistema de turnos online',
        '✓ Ambiente premium showcase',
      ],
    },
  },

  'casa-de-comidas': {
    hero: {
      badge: 'Comida deliciosa',
      title: 'Tu casa de comidas merece una web que venda',
      subtitle: 'Una página web que muestra tu menú, fotos apetitosas y recibe pedidos sin apps ni comisiones.',
      ctaText: 'Quiero más pedidos',
      ctaSecondaryText: 'Ver demo',
      backgroundImage: 'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?w=1200&h=800&fit=crop',
      stats: [
        { value: '500+', label: 'Pedidos/mes' },
        { value: '4.8/5', label: 'Calificación' },
        { value: '0%', label: 'Comisión' },
      ],
    },
    servicios: {
      title: 'Tu menú por categorías',
      subtitle: 'Servicio',
      description: 'Todos tus platos organizados y fáciles de encontrar',
      items: [
        {
          icon: '🍝',
          title: 'Platos principales',
          description: 'Menú variado con tus especialidades destacadas.',
          image: 'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?w=600&h=400&fit=crop',
        },
        {
          icon: '🥗',
          title: 'Opciones saludables',
          description: 'Ensaladas y platos light para clientas con cuidado.',
          image: 'https://images.pexels.com/photos-1092730/pexels-photo-1092730.jpeg?w=600&h=400&fit=crop',
        },
        {
          icon: '🍰',
          title: 'Postres y bebidas',
          description: 'Cierre perfecto para cada comida.',
          image: 'https://images.pexels.com/photos/1624479/pexels-photo-1624479.jpeg?w=600&h=400&fit=crop',
        },
      ],
    },
    beneficios: {
      title: 'Lo que vas a lograr',
      subtitle: 'Ventajas',
      description: '',
      items: [
        {
          icon: '💰',
          title: 'Sin comisiones de apps',
          description: 'Pedidos directo = 100% de la venta es tuya',
          highlight: 'Ahorras entre 15-30% en comisiones',
        },
        {
          icon: '📱',
          title: 'Pedidos por WhatsApp',
          description: 'Integración directa para recibir orders al instante',
          highlight: 'Sin intermediarios',
        },
        {
          icon: '📍',
          title: 'Zona de entrega clara',
          description: 'Evitás consultas fuera de tu rango',
          highlight: 'Mapa interactivo de cobertura',
        },
        {
          icon: '📸',
          title: 'Menú visual actualizable',
          description: 'Vos actualizás fotos y precios cuando quieras',
          highlight: 'Sin dependencias técnicas',
        },
      ],
    },
    galeria: {
      title: 'Nuestros platos destaca dos',
      subtitle: 'Galería',
      description: 'Fotos apetitosas que venden',
      images: [
        { src: 'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?w=600&h=600&fit=crop', alt: 'Plato principal' },
        { src: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?w=600&h=600&fit=crop', alt: 'Opción saludable' },
        { src: 'https://images.pexels.com/photos/1624479/pexels-photo-1624479.jpeg?w=600&h=600&fit=crop', alt: 'Postre' },
        { src: 'https://images.pexels.com/photos/1559827/pexels-photo-1559827.jpeg?w=600&h=600&fit=crop', alt: 'Ambiente' },
      ],
    },
    testimonios: {
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
      title: 'Pedí tu web para tu casa de comidas',
      subtitle: 'Listos',
      description: 'Completa el formulario y nos contactamos para crear tu menú digital que genera pedidos sin comisiones.',
      highlights: [
        '✓ Menú digital con fotos',
        '✓ Pedidos por WhatsApp',
        '✓ Mapa de cobertura',
      ],
    },
  },
};
