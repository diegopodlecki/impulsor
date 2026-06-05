import { RubroConfig } from '../../types/rubro';

export const psicologoConfig: RubroConfig = {
  slug: 'psicologos',
  rubro: 'Psicólogo/a',
  emoji: '🧠',
  accentColor: 'bg-violet-600',
  accentColorHex: '#7c3aed',

  hero: {
    badge: '🧠 Para psicólogos y psicoterapeutas',
    title: 'Pacientes que llegan sabiendo cómo trabajás y listos para empezar',
    subtitle: 'Tu web transmite confianza antes del primer contacto. Mostrá tu enfoque, tus credenciales y tu forma de trabajar.',
    ctaText: 'Solicitar turno →',
    backgroundImage: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1400&h=800&fit=crop&q=85',
    stats: [
      { value: '8 años', label: 'de experiencia' },
      { value: 'Online', label: 'y presencial' },
      { value: 'UBA', label: 'formación' },
      { value: '<48hs', label: 'primer turno' }
    ]
  },

  services: {
    title: 'Áreas de trabajo',
    subtitle: 'Cada proceso es único. Trabajamos juntos a tu ritmo',
    items: [
      { icon: '😔', title: 'Ansiedad y estrés', description: 'Herramientas para manejar la ansiedad cotidiana, los ataques de pánico y el estrés laboral o personal.' },
      { icon: '💔', title: 'Crisis y duelos', description: 'Acompañamiento en rupturas, pérdidas, cambios de vida y situaciones de crisis emocional.' },
      { icon: '👥', title: 'Vínculos y relaciones', description: 'Trabajo sobre patrones relacionales, dificultades de pareja, familia o entorno laboral.' },
      { icon: '🌱', title: 'Desarrollo personal', description: 'Para quienes buscan conocerse mejor, tomar decisiones importantes o dar un giro en su vida.' },
      { icon: '💻', title: 'Sesiones online', description: 'Por videollamada con la misma calidad y confidencialidad que la sesión presencial. Disponible en todo el país.' },
      { icon: '👫', title: 'Terapia de pareja', description: 'Espacio de escucha y trabajo para parejas que quieren mejorar su vínculo o atravesar un momento difícil.' }
    ]
  },

  howItWorks: {
    title: '¿Cómo es el proceso?',
    subtitle: 'Sin presión. El primer paso es el más importante',
    steps: [
      { number: '01', title: 'Me escribís', description: 'Por WhatsApp o email. Me contás brevemente qué te trae y coordinamos una primera entrevista.' },
      { number: '02', title: 'Primera entrevista', description: 'Una sesión de conocimiento mutuo donde te cuento cómo trabajo y evaluamos si somos un buen match terapéutico.' },
      { number: '03', title: 'Empezamos el proceso', description: 'Si decidimos trabajar juntos, acordamos frecuencia y modalidad. Todo a tu ritmo.' }
    ]
  },

  pricing: {
    title: 'Honorarios',
    subtitle: 'Transparencia desde el primer momento',
    note: '* Aceptamos obras sociales y prepagadas. Consultá cobertura.',
    plans: [
      {
        name: 'Sesión individual',
        price: '$22.000',
        period: '/ sesión',
        description: 'Para quienes prefieren flexibilidad sin compromisos fijos',
        features: ['Sesión de 50 minutos', 'Presencial o videollamada', 'Resumen post-sesión por escrito (opcional)', 'Reprogramación con 24hs de aviso'],
        ctaText: 'Reservar sesión',
        highlighted: false
      },
      {
        name: 'Pack mensual',
        price: '$75.000',
        period: '/ mes',
        badge: 'Recomendado',
        description: '4 sesiones mensuales para un proceso continuo',
        features: ['4 sesiones de 50 minutos', 'Presencial o videollamada', 'Seguimiento por WhatsApp entre sesiones', 'Materiales de trabajo opcionales', 'Ahorro vs sesiones sueltas'],
        ctaText: 'Empezar proceso',
        highlighted: true
      },
      {
        name: 'Con obra social',
        price: 'Consultá',
        period: '',
        description: 'Trabajamos con las principales coberturas',
        features: ['OSDE, Swiss Medical, Galeno y más', 'Reintegro total o parcial según plan', 'Factura oficial', 'Misma calidad de atención'],
        ctaText: 'Consultar cobertura',
        highlighted: false
      }
    ]
  },

  testimonials: {
    title: 'Palabras de pacientes',
    subtitle: 'Con su autorización y preservando su privacidad',
    items: [
      { initials: 'M.', avatarColor: '#7c3aed', name: 'M. (nombre reservado)', role: 'Paciente hace 1 año', location: 'Buenos Aires', quote: 'Mi agenda se llenó en 6 semanas. Los pacientes llegan sabiendo cómo trabajo, eso cambia todo desde el primer momento.', result: 'Proceso de 12 meses', stars: 5 },
      { initials: 'L.', avatarColor: '#6d28d9', name: 'L. (nombre reservado)', role: 'Paciente hace 8 meses', location: 'Online desde Córdoba', quote: 'Dudé mucho en empezar terapia. La web me dio confianza antes de escribir. Fue la mejor decisión que tomé.', result: 'Continuidad online', stars: 5 },
      { initials: 'R.', avatarColor: '#5b21b6', name: 'R. (nombre reservado)', role: 'Terapia de pareja', location: 'Buenos Aires', quote: 'Vinimos en un momento muy difícil. El espacio que genera es de mucha seguridad y respeto para los dos.', result: 'Proceso en pareja', stars: 5 },
      { initials: 'F.', avatarColor: '#4c1d95', name: 'F. (nombre reservado)', role: 'Paciente hace 2 años', location: 'Buenos Aires', quote: 'Nunca pensé que la terapia iba a cambiar tanto mi vida cotidiana. Aprendí a conocerme de formas que no imaginaba.', result: '2 años de proceso', stars: 5 }
    ]
  },

  faq: {
    title: 'Preguntas frecuentes',
    items: [
      { question: '¿Cómo sé si la terapia es para mí?', answer: 'Si sentís que algo no está funcionando en tu vida emocional, relacional o en tu bienestar general, la terapia puede ayudarte. La primera entrevista no te compromete a nada.' },
      { question: '¿Cuánto duran los procesos terapéuticos?', answer: 'Cada proceso es diferente. Algunos objetivos puntuales se trabajan en pocos meses; procesos más profundos pueden llevar más tiempo. Lo vamos evaluando juntos.' },
      { question: '¿Las sesiones online tienen la misma efectividad?', answer: 'Sí. La evidencia clínica muestra que la terapia online tiene resultados equiparables a la presencial. Muchos pacientes la prefieren por la comodidad y la privacidad.' },
      { question: '¿Qué pasa si necesito cancelar una sesión?', answer: 'Las sesiones se pueden reprogramar con 24hs de anticipación sin costo. Entiendo que hay situaciones imprevistas.' },
      { question: '¿Trabajás con obra social?', answer: 'Sí. Trabajo con varias obras sociales y prepagadas. Emito factura oficial para que puedas gestionar el reintegro. Consultame por tu cobertura específica.' }
    ]
  },

  contact: {
    title: 'Dar el primer paso es lo más difícil',
    subtitle: 'Escribime cuando quieras. Sin presión, sin formularios, sin esperas largas.',
    whatsappNumber: '5491100000003',
    whatsappMessage: 'Hola! Vi tu web y me gustaría coordinar una primera entrevista. ¿Tenés disponibilidad?',
    ctaText: 'Escribirme por WhatsApp',
    email: 'turnos@psicologia.com.ar',
    hours: 'Lun–Vie 9:00–20:00 · Sáb con turno previo'
  },

  demo: {
    ctaText: 'Quiero esta web para mi consultorio',
    whatsappMessage: 'Hola! Vi la demo de psicólogo en WebAppImpulsor y me interesa tener una web así para mi práctica.',
    whatsappNumber: '541166448389'
  }
};