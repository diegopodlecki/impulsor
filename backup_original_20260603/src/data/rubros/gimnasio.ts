import { RubroConfig } from '../../types/rubro';

export const gimnasioConfig: RubroConfig = {
  slug: 'gimnasios',
  rubro: 'Gimnasio',
  emoji: '🏋️',
  accentColor: 'bg-orange-500',
  accentColorHex: '#f97316',

  hero: {
    badge: '🏋️ Para gimnasios y centros de fitness',
    title: 'El gimnasio que la gente busca en Google, ese es el tuyo',
    subtitle: 'Mostrá tus planes, instalaciones y horarios. Recibí consultas y nuevos socios directo por WhatsApp, sin intermediarios.',
    ctaText: 'Quiero más socios →',
    backgroundImage: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1400&h=800&fit=crop&q=85',
    stats: [
      { value: '+120', label: 'socios activos' },
      { value: '4.9★', label: 'en Google' },
      { value: '6am–22pm', label: 'horario' },
      { value: '3 sedes', label: 'disponibles' }
    ]
  },

  services: {
    title: 'Todo lo que tu gimnasio puede ofrecer',
    subtitle: 'Mostrá cada servicio de forma clara y atractiva para que el cliente elija antes de llegar',
    items: [
      { icon: '🏋️', title: 'Musculación libre', description: 'Equipamiento de última generación con acceso libre en todos los horarios incluidos en tu plan.' },
      { icon: '🧘', title: 'Clases grupales', description: 'Zumba, spinning, pilates, yoga y más. Consultá el cronograma semanal.' },
      { icon: '💪', title: 'Entrenamiento personalizado', description: 'Nuestros trainers diseñan un plan específico para tus objetivos.' },
      { icon: '🥗', title: 'Asesoramiento nutricional', description: 'Guía de alimentación complementaria a tu entrenamiento.' },
      { icon: '🚿', title: 'Vestuarios completos', description: 'Duchas, lockers y espacios de descanso para antes y después de entrenar.' },
      { icon: '📱', title: 'App de seguimiento', description: 'Registrá tus rutinas, medí tu progreso y coordiná con tu trainer desde el celular.' }
    ]
  },

  howItWorks: {
    title: '¿Cómo empezar?',
    subtitle: 'Sin vueltas. En 3 pasos estás entrenando',
    steps: [
      { number: '01', title: 'Elegí tu plan', description: 'Revisá los planes disponibles y escribinos por WhatsApp. Te respondemos en menos de 2 horas.' },
      { number: '02', title: 'Venís a conocer el gym', description: 'Te mostramos las instalaciones sin compromiso. Primera semana de prueba sin costo.' },
      { number: '03', title: 'Empezás a entrenar', description: 'Activamos tu membresía, te asignamos un trainer inicial y arrancás desde el día 1.' }
    ]
  },

  pricing: {
    title: 'Elegí tu plan',
    subtitle: 'Precios transparentes, sin letra chica',
    note: '* Precios en pesos argentinos. Consultá promociones vigentes.',
    plans: [
      {
        name: 'Básico',
        price: '$18.000',
        period: '/ mes',
        description: 'Ideal para quienes empiezan o van 3 veces por semana',
        features: ['Acceso a sala de musculación', '2 clases grupales por semana', 'Vestuario completo', 'Evaluación inicial gratuita'],
        excluded: ['Clases grupales ilimitadas', 'Entrenador personal', 'Asesoramiento nutricional'],
        ctaText: 'Quiero este plan',
        highlighted: false
      },
      {
        name: 'Pro',
        price: '$28.000',
        period: '/ mes',
        badge: 'Más elegido',
        description: 'El equilibrio perfecto entre precio y beneficios',
        features: ['Acceso libre en todos los horarios', 'Clases grupales ilimitadas', 'Vestuario completo', '1 sesión mensual con trainer', 'App de seguimiento incluida'],
        excluded: ['Entrenador personal dedicado'],
        ctaText: 'Quiero este plan',
        highlighted: true
      },
      {
        name: 'Elite',
        price: '$45.000',
        period: '/ mes',
        description: 'Para quienes van en serio con sus objetivos',
        features: ['Todo el plan Pro', 'Entrenador personal 3x semana', 'Plan nutricional personalizado', 'Acceso las 24hs', 'Freezado sin costo hasta 2 meses/año'],
        ctaText: 'Quiero este plan',
        highlighted: false
      }
    ]
  },

  testimonials: {
    title: 'Lo que dicen nuestros socios',
    subtitle: 'Resultados reales de personas como vos',
    items: [
      { initials: 'MR', avatarColor: '#f97316', name: 'Matías R.', role: 'Socio hace 8 meses', location: 'Palermo, CABA', quote: 'Bajé 12 kilos en 6 meses. El equipo de trainers es increíble y el ambiente te motiva a seguir.', result: '-12kg en 6 meses', stars: 5 },
      { initials: 'LG', avatarColor: '#ea580c', name: 'Laura G.', role: 'Socia hace 1 año', location: 'Villa Crespo, CABA', quote: 'Las clases de zumba me cambiaron la vida. Vengo 4 veces por semana y nunca me falta lugar.', result: '4x por semana', stars: 5 },
      { initials: 'FC', avatarColor: '#c2410c', name: 'Federico C.', role: 'Socio Plan Elite', location: 'Almagro, CABA', quote: 'El entrenador personal vale cada peso. En 3 meses logré más que en 2 años en otros gyms.', result: '+15kg de masa muscular', stars: 5 },
      { initials: 'SV', avatarColor: '#9a3412', name: 'Sofía V.', role: 'Socia Plan Pro', location: 'Boedo, CABA', quote: 'Instalaciones impecables, siempre limpias. La app para registrar el progreso es un plus enorme.', result: 'Asistencia diaria', stars: 5 }
    ]
  },

  faq: {
    title: 'Preguntas frecuentes',
    items: [
      { question: '¿Puedo probar el gimnasio antes de pagar?', answer: 'Sí. Ofrecemos una semana de prueba gratuita sin compromiso. Solo tenés que escribirnos por WhatsApp para coordinar tu visita.' },
      { question: '¿Qué pasa si me lesiono o viajo?', answer: 'Podés freezar tu membresía hasta 2 meses por año sin costo adicional. Solo avisanos con 48hs de anticipación.' },
      { question: '¿Tienen clases para principiantes?', answer: 'Sí. Todas nuestras clases grupales tienen nivel básico, intermedio y avanzado. Además, en tu primera semana te asignamos un trainer que te guía en la sala.' },
      { question: '¿Se puede pagar con tarjeta?', answer: 'Aceptamos efectivo, transferencia bancaria, tarjetas de débito y crédito. También trabajamos con cuotas sin interés en algunas tarjetas.' },
      { question: '¿Cuál es el horario de atención?', answer: 'Lunes a viernes de 6:00 a 22:00hs. Sábados de 8:00 a 18:00hs. Domingos de 10:00 a 15:00hs.' }
    ]
  },

  contact: {
    title: '¿Listo para empezar?',
    subtitle: 'Escribinos y te respondemos en menos de 2 horas. Primera semana gratis.',
    whatsappNumber: '5491100000001',
    whatsappMessage: 'Hola! Vi su web y quiero conocer el gimnasio. ¿Puedo ir a hacer una prueba gratuita?',
    ctaText: 'Quiero mi semana gratis',
    email: 'info@fitmax-gym.com.ar',
    hours: 'Lun–Vie 6:00–22:00 · Sáb 8:00–18:00 · Dom 10:00–15:00',
    address: 'Av. Corrientes 2500, CABA'
  },

  demo: {
    ctaText: 'Quiero esta web para mi gym',
    whatsappMessage: 'Hola! Vi la demo de gimnasio en WebAppImpulsor y quiero saber cómo tener una web así para mi negocio.',
    whatsappNumber: '541166448389'
  }
};