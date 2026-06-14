import { RubroConfig } from '../../types/rubro';

export const esteticaConfig: RubroConfig = {
  slug: 'estetica-corporal',
  rubro: 'Estética Corporal',
  emoji: '✨',
  accentColor: 'bg-pink-500',
  accentColorHex: '#ec4899',

  hero: {
    badge: '✨ Para centros de estética y belleza',
    title: 'Tu centro estético en la pantalla de quien busca exactamente lo que ofrecés',
    subtitle: 'Mostrá tus tratamientos, resultados y reservá turnos directo desde la web. Sin llamadas perdidas.',
    ctaText: 'Reservar turno →',
    backgroundImage: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=1400&h=800&fit=crop&q=85',
    stats: [
      { value: '+500', label: 'clientes atendidas' },
      { value: '4.9★', label: 'en Google' },
      { value: '10 años', label: 'de experiencia' },
      { value: '20+', label: 'tratamientos' }
    ]
  },

  services: {
    title: 'Nuestros tratamientos',
    subtitle: 'Tecnología de última generación con atención personalizada',
    items: [
      { icon: '🔆', title: 'Tratamientos faciales', description: 'Hidratación profunda, limpieza de cutis, lifting sin cirugía, radiofrecuencia facial y más.' },
      { icon: '💆', title: 'Corporales reductores', description: 'Cavitación, criolipólisis, presoterapia y vendas frías para reducción localizada.' },
      { icon: '⚡', title: 'Tecnología avanzada', description: 'Equipos de última generación: HIFU, laser diodo, luz pulsada y electroestimulación.' },
      { icon: '🌿', title: 'Tratamientos naturales', description: 'Masajes descontracturantes, drenaje linfático manual y aromaterapia relajante.' },
      { icon: '💅', title: 'Uñas y manos', description: 'Manicuría, esculpido en gel y acrílico, nail art y tratamientos de queratina.' },
      { icon: '👁️', title: 'Depilación definitiva', description: 'Laser diodo de última generación. Efectivo en todo tipo de piel y cabello.' }
    ]
  },

  howItWorks: {
    title: '¿Cómo reservar tu turno?',
    subtitle: 'Simple y sin esperas',
    steps: [
      { number: '01', title: 'Elegí tu tratamiento', description: 'Revisá nuestro catálogo y elegí lo que necesitás. Si tenés dudas, te asesoramos sin cargo.' },
      { number: '02', title: 'Reservás por WhatsApp', description: 'Nos escribís, elegimos juntas el día y horario que mejor te queda. Confirmación inmediata.' },
      { number: '03', title: 'Venís y te mimás', description: 'Solo traés las ganas. Nosotras nos encargamos del resto.' }
    ]
  },

  pricing: {
    title: 'Tratamientos y precios',
    subtitle: 'Sin sorpresas, con resultados',
    note: '* Paquetes con descuento disponibles. Consultá combos y promociones.',
    plans: [
      {
        name: 'Sesión única',
        price: 'Desde $15.000',
        period: '/ sesión',
        description: 'Para probar un tratamiento puntual',
        features: ['Consulta previa sin cargo', 'Tratamiento según elección', 'Productos de primera calidad', 'Asesoramiento post-tratamiento'],
        ctaText: 'Reservar sesión',
        highlighted: false
      },
      {
        name: 'Paquete x5',
        price: 'Desde $60.000',
        period: '/ paquete',
        badge: 'Mejor precio',
        description: '5 sesiones del mismo tratamiento con descuento',
        features: ['5 sesiones del tratamiento elegido', '20% de descuento vs sesiones sueltas', 'Seguimiento de resultados', 'Productos de mantenimiento incluidos', 'Prioridad en turnos'],
        ctaText: 'Quiero el paquete',
        highlighted: true
      },
      {
        name: 'Plan completo',
        price: 'Consultar',
        period: '',
        description: 'Programa integral diseñado para vos',
        features: ['Evaluación estética completa', 'Combinación de tratamientos', 'Plan mensual personalizado', 'Seguimiento fotográfico', 'Productos incluidos'],
        ctaText: 'Quiero mi plan',
        highlighted: false
      }
    ]
  },

  testimonials: {
    title: 'Lo que dicen nuestras clientas',
    subtitle: 'Resultados que hablan solos',
    items: [
      { initials: 'MJ', avatarColor: '#ec4899', name: 'María José T.', role: 'Clienta hace 2 años', location: 'Recoleta, CABA', quote: 'Hice el paquete de cavitación x5 y los resultados fueron increíbles. Me perdí 8cm de cintura en un mes.', result: '-8cm de cintura', stars: 5 },
      { initials: 'GR', avatarColor: '#db2777', name: 'Gabriela R.', role: 'Tratamiento facial', location: 'Palermo, CABA', quote: 'El lifting facial con radiofrecuencia me devolvió la confianza. A los 52 años me siento mejor que nunca.', result: 'Rejuvenecimiento visible', stars: 5 },
      { initials: 'CP', avatarColor: '#be185d', name: 'Carolina P.', role: 'Depilación láser', location: 'Caballito, CABA', quote: 'Después de 6 sesiones prácticamente no tengo más vello. El equipo es de última generación y no duele nada.', result: '-95% vello', stars: 5 },
      { initials: 'VL', avatarColor: '#9d174d', name: 'Valentina L.', role: 'Plan completo', location: 'San Martín, GBA', quote: 'Me hicieron un plan combinado increíble. El trato es excelente y los resultados superaron todas mis expectativas.', result: 'Transformación completa', stars: 5 }
    ]
  },

  faq: {
    title: 'Preguntas frecuentes',
    items: [
      { question: '¿Los tratamientos duelen?', answer: 'La mayoría de los tratamientos son indoloros o generan una leve sensación de calor. En los casos que requieren mayor intensidad, te avisamos de antemano y ajustamos según tu umbral de sensibilidad.' },
      { question: '¿Cuántas sesiones necesito?', answer: 'Depende del tratamiento y del objetivo. En la consulta previa te hacemos una evaluación y te recomendamos el número de sesiones ideal para tu caso específico.' },
      { question: '¿Puedo combinar tratamientos?', answer: 'Sí y de hecho es lo más recomendado. Tenemos planes combinados que potencian los resultados. Te asesoramos sin cargo en la primera visita.' },
      { question: '¿Hay restricciones para ciertos tratamientos?', answer: 'Algunos tratamientos no se recomiendan durante el embarazo, con marcapasos o con ciertas condiciones de salud. En la consulta inicial revisamos tu historial para garantizar tu seguridad.' },
      { question: '¿Con qué formas de pago trabajan?', answer: 'Aceptamos efectivo, transferencia y todas las tarjetas. Los paquetes tienen financiación en cuotas sin interés con tarjetas seleccionadas.' }
    ]
  },

  contact: {
    title: '¿Te reservamos un turno?',
    subtitle: 'Escribinos y coordinamos en el momento. Primera consulta sin cargo.',
    whatsappNumber: '5491100000005',
    whatsappMessage: 'Hola! Vi la web y quiero reservar un turno. ¿Qué disponibilidad tienen?',
    ctaText: 'Reservar mi turno',
    email: 'turnos@estetica.com.ar',
    hours: 'Lun–Sáb 9:00–20:00',
    address: 'Av. Santa Fe 3200, CABA'
  },

  demo: {
    ctaText: 'Quiero esta web para mi centro',
    whatsappMessage: 'Hola! Vi la demo de estética en WebAppImpulsor y quiero saber cómo tener una web así para mi negocio.',
    whatsappNumber: '541166448389'
  }
};