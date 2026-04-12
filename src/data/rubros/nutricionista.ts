import { RubroConfig } from '../../types/rubro';

export const nutricionistaConfig: RubroConfig = {
  slug: 'nutricionistas',
  rubro: 'Nutricionista',
  emoji: '🥗',
  accentColor: 'bg-lime-600',
  accentColorHex: '#65a30d',

  hero: {
    badge: '🥗 Para nutricionistas y dietistas',
    title: 'Pacientes que llegan con ganas de cambiar, no solo a preguntar',
    subtitle: 'Mostrá tu método, tus resultados y por qué trabajar con vos es diferente. Tu web hace la primera parte del trabajo.',
    ctaText: 'Pedir turno →',
    backgroundImage: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1400&h=800&fit=crop&q=85',
    stats: [
      { value: '+300', label: 'pacientes atendidos' },
      { value: 'Online', label: 'y presencial' },
      { value: '5 años', label: 'de experiencia' },
      { value: '<48hs', label: 'primer turno' }
    ]
  },

  services: {
    title: '¿En qué puedo ayudarte?',
    subtitle: 'Cada plan es único porque cada persona es única',
    items: [
      { icon: '⚖️', title: 'Control de peso', description: 'Planes de descenso o aumento de peso saludables y sostenibles en el tiempo, sin restricciones extremas.' },
      { icon: '🏃', title: 'Nutrición deportiva', description: 'Optimización de la alimentación para rendimiento, recuperación y composición corporal en deportistas.' },
      { icon: '💊', title: 'Enfermedades metabólicas', description: 'Abordaje nutricional de diabetes, hipertensión, colesterol, tiroides y otras condiciones crónicas.' },
      { icon: '🤰', title: 'Nutrición en el embarazo', description: 'Acompañamiento nutricional durante el embarazo y la lactancia para vos y tu bebé.' },
      { icon: '🧒', title: 'Nutrición infantil', description: 'Planes para niños y adolescentes con enfoque en hábitos saludables y crecimiento adecuado.' },
      { icon: '🌿', title: 'Alimentación plant-based', description: 'Planes vegetarianos y veganos nutricionalmente completos, sin carencias.' }
    ]
  },

  howItWorks: {
    title: '¿Cómo trabajamos juntos?',
    subtitle: 'Un proceso claro desde el primer contacto',
    steps: [
      { number: '01', title: 'Primera consulta', description: 'Evaluación completa: hábitos actuales, historial, objetivos y composición corporal. 60 minutos.' },
      { number: '02', title: 'Tu plan personalizado', description: 'En 48hs tenés tu plan alimentario adaptado a tus gustos, tu rutina y tus objetivos.' },
      { number: '03', title: 'Seguimiento continuo', description: 'Consultas de control cada 3-4 semanas con ajustes al plan según tu evolución.' }
    ]
  },

  pricing: {
    title: 'Honorarios',
    subtitle: 'Invertí en tu salud con información clara',
    note: '* Acepto obras sociales. Emito factura oficial.',
    plans: [
      {
        name: 'Consulta inicial',
        price: '$25.000',
        period: '/ consulta',
        description: 'Primera evaluación completa',
        features: ['Consulta de 60 minutos', 'Evaluación antropométrica', 'Análisis de hábitos alimentarios', 'Plan nutricional inicial', 'Presencial u online'],
        ctaText: 'Reservar consulta',
        highlighted: false
      },
      {
        name: 'Seguimiento mensual',
        price: '$55.000',
        period: '/ mes',
        badge: 'Más elegido',
        description: '3 consultas mensuales + soporte continuo',
        features: ['3 consultas mensuales', 'Ajustes continuos al plan', 'Soporte por WhatsApp', 'Recetas y guías de compras', 'Seguimiento de métricas', 'Acceso a app de registro'],
        ctaText: 'Empezar proceso',
        highlighted: true
      },
      {
        name: 'Plan intensivo',
        price: '$90.000',
        period: '/ mes',
        description: 'Para objetivos específicos con máximo seguimiento',
        features: ['Consultas semanales', 'Todo del plan mensual', 'Plan de suplementación', 'Coordinación con médico tratante', 'Análisis de laboratorio incluido'],
        ctaText: 'Quiero el plan intensivo',
        highlighted: false
      }
    ]
  },

  testimonials: {
    title: 'Resultados reales',
    subtitle: 'De pacientes que cambiaron sus hábitos para siempre',
    items: [
      { initials: 'VR', avatarColor: '#65a30d', name: 'Valeria R.', role: 'Paciente hace 8 meses', location: 'Palermo, CABA', quote: 'Bajé 14 kilos en 6 meses sin pasar hambre. Por primera vez siento que aprendí a comer, no a hacer dieta.', result: '-14kg sostenibles', stars: 5 },
      { initials: 'DM', avatarColor: '#4d7c0f', name: 'Diego M.', role: 'Nutrición deportiva', location: 'Villa del Parque, CABA', quote: 'Como crossfitero necesitaba alguien que entendiera el rendimiento deportivo. Los resultados fueron inmediatos.', result: '+8% rendimiento', stars: 5 },
      { initials: 'AM', avatarColor: '#3f6212', name: 'Andrea M.', role: 'Paciente con diabetes', location: 'Ramos Mejía, GBA', quote: 'Mi médica me recomendó consultar y fue la mejor decisión. Mis valores de glucemia mejoraron notablemente.', result: 'Control metabólico', stars: 5 },
      { initials: 'MF', avatarColor: '#365314', name: 'Martina F.', role: 'Plan plant-based', location: 'Online desde Mendoza', quote: 'Me ayudó a transicionar a una alimentación vegana sin carencias. Finalmente lo hice bien y con respaldo profesional.', result: 'Transición vegana exitosa', stars: 5 }
    ]
  },

  faq: {
    title: 'Preguntas frecuentes',
    items: [
      { question: '¿Tengo que hacer dietas restrictivas?', answer: 'No. Mi enfoque es la alimentación flexible y sostenible. No elimino grupos de alimentos sin justificación clínica. El objetivo es que aprendas a comer bien para toda la vida.' },
      { question: '¿Cuánto tarda en verse resultados?', answer: 'Los primeros cambios se notan en 3-4 semanas. Los resultados sostenibles en peso y composición corporal suelen verse a los 2-3 meses con adherencia al plan.' },
      { question: '¿Puedo hacer las consultas online?', answer: 'Sí. Las consultas online son igualmente completas. Usamos herramientas digitales para el seguimiento y la evaluación.' },
      { question: '¿Trabajás con obras sociales?', answer: 'Sí. Trabajo con OSDE, Swiss Medical, Galeno, IOMA y varias más. Consultolos cobertura específica de tu plan.' },
      { question: '¿El plan incluye recetas?', answer: 'Sí. Cada plan incluye recetas adaptadas a tus gustos y a tu nivel de cocina, además de guías de compras para facilitar la adherencia.' }
    ]
  },

  contact: {
    title: '¿Empezamos?',
    subtitle: 'Primera consulta con evaluación completa. Respondemos en menos de 2 horas.',
    whatsappNumber: '5491100000004',
    whatsappMessage: 'Hola! Vi tu web y quiero pedir turno para una primera consulta nutricional.',
    ctaText: 'Pedir mi turno',
    email: 'turnos@nutricion.com.ar',
    hours: 'Lun–Vie 9:00–19:00 · Sáb 9:00–13:00'
  },

  demo: {
    ctaText: 'Quiero esta web para mi consultorio',
    whatsappMessage: 'Hola! Vi la demo de nutricionista en WebAppImpulsor y quiero saber cómo tener una web así.',
    whatsappNumber: '541166448389'
  }
};