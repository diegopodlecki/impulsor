import { RubroConfig } from '../../types/rubro';

export const entrenadorConfig: RubroConfig = {
  slug: 'entrenadores',
  rubro: 'Personal Trainer',
  emoji: '💪',
  accentColor: 'bg-emerald-600',
  accentColorHex: '#059669',

  hero: {
    badge: '💪 Para personal trainers y coaches',
    title: 'Tu agenda llena de clientes que ya saben que sos el indicado',
    subtitle: 'Mostrá tus transformaciones, tu metodología y tu disponibilidad. Cerrá clientes sin llamadas en frío, sin intermediarios.',
    ctaText: 'Quiero más clientes →',
    backgroundImage: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1400&h=800&fit=crop&q=85',
    stats: [
      { value: '+40', label: 'alumnos activos' },
      { value: '4.8★', label: 'calificación' },
      { value: '5 años', label: 'de experiencia' },
      { value: '200+', label: 'transformaciones' }
    ]
  },

  services: {
    title: '¿Qué incluye el entrenamiento?',
    subtitle: 'Un programa diseñado 100% para vos, no una rutina genérica',
    items: [
      { icon: '📋', title: 'Plan de entrenamiento personalizado', description: 'Rutina diseñada según tus objetivos, tu nivel actual y el tiempo que tenés disponible.' },
      { icon: '🥗', title: 'Guía nutricional', description: 'Orientación alimentaria complementaria al entrenamiento para potenciar tus resultados.' },
      { icon: '📊', title: 'Seguimiento de progreso', description: 'Mediciones mensuales y ajustes al plan para que nunca te estanques.' },
      { icon: '📱', title: 'Soporte por WhatsApp', description: 'Respondemos tus dudas entre sesiones. No entrenás solo.' },
      { icon: '🏠', title: 'Online o presencial', description: 'Podemos entrenar en tu casa, en un parque, en un gimnasio o por videollamada.' },
      { icon: '🎯', title: 'Objetivos reales', description: 'Pérdida de grasa, ganancia muscular, rendimiento deportivo o simplemente sentirte mejor.' }
    ]
  },

  howItWorks: {
    title: '¿Cómo empezamos?',
    subtitle: 'Del primer mensaje a tu primera sesión en 48hs',
    steps: [
      { number: '01', title: 'Evaluación inicial gratis', description: 'Conversamos sobre tus objetivos, tu historial y qué esperás del entrenamiento. Sin compromiso.' },
      { number: '02', title: 'Tu plan en 48hs', description: 'Diseño tu plan personalizado y te lo envío para que lo revises antes de arrancar.' },
      { number: '03', title: 'Arrancamos', description: 'Primera sesión, ajustes finales al plan y ya estás en camino hacia tus objetivos.' }
    ]
  },

  pricing: {
    title: 'Planes de entrenamiento',
    subtitle: 'Invertí en resultados reales',
    note: '* Precios en pesos argentinos. Consultas online disponibles para todo el país.',
    plans: [
      {
        name: 'Online',
        price: '$35.000',
        period: '/ mes',
        description: 'Entrenamiento guiado desde donde estés',
        features: ['Plan de entrenamiento mensual', 'Guía nutricional básica', 'Seguimiento por WhatsApp', 'Ajustes semanales al plan', 'Videollamada quincenal de revisión'],
        excluded: ['Sesiones presenciales', 'Mediciones físicas mensuales'],
        ctaText: 'Empezar online',
        highlighted: false
      },
      {
        name: 'Presencial',
        price: '$85.000',
        period: '/ mes',
        badge: 'Más elegido',
        description: '3 sesiones semanales con seguimiento total',
        features: ['3 sesiones presenciales por semana', 'Plan de entrenamiento personalizado', 'Guía nutricional completa', 'Mediciones físicas mensuales', 'Soporte diario por WhatsApp', 'Acceso a app de seguimiento'],
        ctaText: 'Quiero este plan',
        highlighted: true
      },
      {
        name: 'VIP',
        price: '$140.000',
        period: '/ mes',
        description: 'Máxima dedicación para máximos resultados',
        features: ['5 sesiones presenciales por semana', 'Todo lo del plan Presencial', 'Plan nutricional profesional con nutricionista', 'Sesiones de movilidad y recuperación', 'Disponibilidad prioritaria de horarios'],
        ctaText: 'Quiero atención VIP',
        highlighted: false
      }
    ]
  },

  testimonials: {
    title: 'Transformaciones reales',
    subtitle: 'De alumnos que ya dieron el paso',
    items: [
      { initials: 'NA', avatarColor: '#059669', name: 'Nicolás A.', role: 'Alumno Plan Presencial', location: 'Belgrano, CABA', quote: 'Llené mi agenda en 3 semanas. Pasé de 4 a 12 alumnos sin hacer publicidad. La web me dio la autoridad que necesitaba.', result: '+200% alumnos', stars: 5 },
      { initials: 'PL', avatarColor: '#047857', name: 'Paula L.', role: 'Alumna hace 6 meses', location: 'Nuñez, CABA', quote: 'Bajé 8 kilos y gané confianza. Por primera vez en mi vida mantengo una rutina de entrenamiento constante.', result: '-8kg en 5 meses', stars: 5 },
      { initials: 'JM', avatarColor: '#065f46', name: 'Javier M.', role: 'Alumno Plan VIP', location: 'San Isidro, GBA', quote: 'Entrené con varios trainers antes y nunca había visto resultados así. La personalización hace toda la diferencia.', result: '+18kg masa muscular', stars: 5 },
      { initials: 'CR', avatarColor: '#064e3b', name: 'Carolina R.', role: 'Alumna Online', location: 'Rosario, Santa Fe', quote: 'Desde Rosario, entrenando online. Jamás pensé que un plan a distancia pudiera funcionar tan bien.', result: 'Consistencia diaria', stars: 5 }
    ]
  },

  faq: {
    title: 'Preguntas frecuentes',
    items: [
      { question: '¿Necesito tener experiencia previa?', answer: 'No. Trabajo con principiantes absolutos y con personas que ya entrenan pero quieren mejorar sus resultados. El plan se adapta a tu nivel.' },
      { question: '¿Dónde son las sesiones presenciales?', answer: 'Puedo ir a tu domicilio, a un parque cercano o a un gimnasio de tu elección. También tengo acceso a espacios propios en CABA.' },
      { question: '¿Qué pasa si no puedo asistir a una sesión?', answer: 'Las sesiones se reprograman con 12hs de anticipación sin costo. Entiendo que la vida pasa.' },
      { question: '¿El plan nutricional es de un nutricionista?', answer: 'La guía nutricional que incluyo es orientativa y basada en mis 5 años de experiencia. Para un plan nutricional clínico, trabajo en conjunto con nutricionistas certificadas.' },
      { question: '¿Puedo pausar el plan si viajo?', answer: 'Sí. Los planes se pueden pausar por hasta 2 semanas por mes sin costo adicional. Para viajes largos, podemos pasar temporalmente al plan Online.' }
    ]
  },

  contact: {
    title: '¿Arrancamos juntos?',
    subtitle: 'Evaluación inicial gratuita. Sin compromiso. Respondemos en menos de 1 hora.',
    whatsappNumber: '5491100000002',
    whatsappMessage: 'Hola! Vi tu web y me interesa hacer la evaluación inicial gratuita. ¿Cuándo tenés disponibilidad?',
    ctaText: 'Quiero mi evaluación gratis',
    email: 'info@trainer.com.ar',
    hours: 'Lun–Sáb 7:00–21:00 · Dom con turno previo',
    address: 'CABA y zona norte GBA'
  },

  demo: {
    ctaText: 'Quiero esta web para mi negocio',
    whatsappMessage: 'Hola! Vi la demo de Personal Trainer en WebAppImpulsor y quiero saber cómo tener una web así.',
    whatsappNumber: '541166448389'
  }
};