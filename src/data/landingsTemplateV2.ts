import type { LandingPageConfig } from '@/components/landing/LandingPageRenderer';
import { beneficiosTemplates } from '@/components/landing/SectionBeneficios';
import { resultadosTemplates } from '@/components/landing/SectionResultados';

/**
 * LANDING PAGES OPTIMIZADAS PARA SEO Y CONVERSIÓN
 * 
 * Estructura: HERO → PROBLEMA → SOLUCIÓN → MÉTODO → CASOS → CTA → FAQ
 * Cada landing ataca un nicho específico con lenguaje personalizado.
 */

export const landingConfigsV2: Record<string, LandingPageConfig> = {
  
  /**
   * ============================================
   * LANDING: PERSONAL TRAINERS
   * Keyword: "web para personal trainer que convierte"
   * ============================================
   */
  'personal-trainer': {
    hero: {
      badge: 'Web para Personal Trainers',
      title: 'Página web para personal trainer que convierte visitas en alumnos',
      subtitle: 'Tu web trabaja 24/7 para conseguir alumnos mientras vos entrenás. Diseños que generan consultas reales, no solo visitas.',
      ctaText: 'Quiero más alumnos',
      ctaSecondaryText: 'Ver ejemplos',
      backgroundImage: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?w=1920&h=1080&fit=crop',
      heroImage: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?w=800&h=1000&fit=crop',
      layout: 'split',
      stats: [
        { value: '8', label: 'Alumnos nuevos/mes' },
        { value: '30 días', label: 'Para primeros resultados' },
        { value: '100%', label: 'Más consultas' },
      ],
    },
    servicios: {
      title: 'Tu web profesional para personal trainers',
      subtitle: 'Cómo conseguimos más alumnos para tu entrenamiento',
      description: 'No es solo una web bonita. Es una máquina de captar alumnos que te encuentran por Google.',
      items: [
        {
          icon: '🎯',
          title: 'Tu perfil de entrenador',
          description: 'Credenciales, especialización y método de entrenamiento. La gente te elige antes de contactarte.',
          badges: 'Autoridad',
          image: 'https://images.pexels.com/photos/4720776/pexels-photo-4720776.jpeg?w=800&h=600&fit=crop',
        },
        {
          icon: '💪',
          title: 'Transformaciones reales',
          description: 'Galería de antes/después con permiso de tus alumnos. Prueba social que convince.',
          image: 'https://images.pexels.com/photos/3823039/pexels-photo-3823039.jpeg?w=800&h=600&fit=crop',
        },
        {
          icon: '📋',
          title: 'Planes y precios claros',
          description: 'No más WhatsApps preguntando "cuánto sale". Todo visible, todo claro.',
          image: 'https://images.pexels.com/photos/6551127/pexels-photo-6551127.jpeg?w=800&h=600&fit=crop',
        },
        {
          icon: '💬',
          title: 'WhatsApp directo',
          description: 'Botón de contacto visible. El alumno te escribe sin fricción, directo a tu WhatsApp.',
          image: 'https://images.pexels.com/photos/3823039/pexels-photo-3823039.jpeg?w=800&h=600&fit=crop',
        },
      ],
    },
    diferencial: {
      title: 'Por qué tu web no convierte (y cómo lo solucionamos)',
      description: 'El problema no es tu web. Es lo que pasa después de crearla.',
      items: [
        {
          icon: '⚡',
          title: 'Automatización integrada',
          description: 'Tu web envía mensajes automáticos, confirma turnos y hace seguimiento. Sin que vos toques nada.',
          wrong: 'Te entregan un formulario que nadie revisa'
        },
        {
          icon: '🔄',
          title: 'Optimización continua',
          description: 'Analizamos qué funciona y ajustamos. Tu web mejora con el tiempo, no se queda obsoleta.',
          wrong: 'Te cobran el desarrollo y después no te atienden más'
        },
        {
          icon: '📊',
          title: 'Enfoque en resultados',
          description: 'No medimos "visitas". Medimos consultas, turnos, alumnos. Eso es lo que te importa.',
          wrong: 'Te muestran estadísticas que no se traducen en dinero'
        },
      ],
      resultadoPromesa: 'El resultado que conseguimos',
      resultadoValor: '+40% más consultas en 30 días',
    },
    beneficios: {
      title: 'Resultados que conseguimos para tu entrenamiento',
      subtitle: 'Lo que lograrás con tu web',
      description: '',
      items: beneficiosTemplates['personal-trainer'] as any,
    },
    galeria: {
      title: 'Ejemplos de webs para trainers',
      subtitle: 'Galería',
      description: 'Así se ve una web profesional para personal trainers',
      images: [
        { src: 'https://images.pexels.com/photos/6551127/pexels-photo-6551127.jpeg?w=800&h=800&fit=crop', alt: 'Perfil de trainer', caption: 'Tu perfil profesional' },
        { src: 'https://images.pexels.com/photos/3823039/pexels-photo-3823039.jpeg?w=800&h=800&fit=crop', alt: 'Transformaciones', caption: 'Antes y después' },
        { src: 'https://images.pexels.com/photos/4720776/pexels-photo-4720776.jpeg?w=800&h=800&fit=crop', alt: 'Planes', caption: 'Planes claros' },
        { src: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?w=800&h=800&fit=crop', alt: 'WhatsApp', caption: 'Contacto directo' },
      ],
    },
    testimonios: {
      title: 'Casos reales: personal trainers que conseguirán más alumnos',
      subtitle: 'Testimonios',
      description: 'De 0 alumnos online a 8 en 30 días. Resultados comprobables.',
      items: [
        {
          quote: 'Pasé de depender del boca a boca a recibir 8 consultas por semana. Mi agenda se llenó sola en 30 días.',
          author: 'Carlos Vega',
          role: 'Personal Trainer · Palermo',
          avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?w=200&h=200&fit=crop&crop=face',
          rating: 5,
          highlight: '8 alumnos nuevos/mes',
        },
        {
          quote: 'No aparecía en Google cuando alguien buscaba "personal trainer Palermo". Ahora sí. Y llegan solos.',
          author: 'Martín Díaz',
          role: 'Coach Online · CABA',
          avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?w=200&h=200&fit=crop&crop=face',
          rating: 5,
          highlight: 'Primera página de Google',
        },
        {
          quote: 'Mi web explica mi método mejor que yo en un mensaje de WhatsApp. Llegan sabiendo qué quiero.',
          author: 'Laura Pérez',
          role: 'Trainer Funcional · Zona Norte',
          avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?w=200&h=200&fit=crop&crop=face',
          rating: 5,
          highlight: 'Leads mejor calificados',
        },
      ],
      featuredIndex: 0,
    },
    ctaFinal: {
      title: 'Empezá a recibir más consultas esta semana',
      subtitle: 'Tu primera clase gratis',
      description: 'Primera consulta sin cargo. Sin compromiso. Mostrame tu situación y te digo cómo ayudarte.',
      ctaText: 'Quiero más alumnos',
      ctaSecondaryText: 'Ver ejemplos',
      highlights: [
        '✓ Primera consulta sin cargo',
        '✓ Sin compromiso',
        '✓ Resultados en 30 días',
      ],
    },
  },

  /**
   * ============================================
   * LANDING: PSICÓLOGOS
   * Keyword: "web para psicólogo que genera consultas"
   * ============================================
   */
  psicologo: {
    hero: {
      badge: 'Web para Psicólogos',
      title: 'Página web para psicólogo que genera consultas de pacientes',
      subtitle: 'Tu consultorio merece ser encontrado. Web profesional que transmite confianza y convierte visitas en turnos.',
      ctaText: 'Quiero más pacientes',
      ctaSecondaryText: 'Ver ejemplos',
      backgroundImage: 'https://images.pexels.com/photos/3792413/pexels-photo-3792413.jpeg?w=1920&h=1080&fit=crop',
      heroImage: 'https://images.pexels.com/photos/4101555/pexels-photo-4101555.jpeg?w=800&h=1000&fit=crop',
      layout: 'split',
      stats: [
        { value: '6', label: 'Consultas nuevas/semana' },
        { value: '100%', label: 'Más confianza' },
        { value: '60 días', label: 'Para agenda llena' },
      ],
    },
    servicios: {
      title: 'Tu web profesional para psicólogos',
      subtitle: 'Cómo conseguimos más pacientes para tu consultorio',
      description: 'No es solo un sitio bonito. Es una presencia online que transmite seguridad y convierte.',
      items: [
        {
          icon: '🎓',
          title: 'Tu formación visible',
          description: 'Universidad, especialidades, años de experiencia. La confianza se construye antes del primer contacto.',
          badges: 'Credenciales',
          image: 'https://images.pexels.com/photos/3792413/pexels-photo-3792413.jpeg?w=800&h=600&fit=crop',
        },
        {
          icon: '🧠',
          title: 'Tu enfoque terapéutico',
          description: 'Explicá tu método: TCC, psicoanálisis, sistémica. Los pacientes eligen según su necesidad.',
          image: 'https://images.pexels.com/photos/4101555/pexels-photo-4101555.jpeg?w=800&h=600&fit=crop',
        },
        {
          icon: '📱',
          title: 'Modalidades claras',
          description: 'Presencial, online, híbrido. Cada uno con horarios y costos visibles.',
          image: 'https://images.pexels.com/photos/3973750/pexels-photo-3973750.jpeg?w=800&h=600&fit=crop',
        },
        {
          icon: '💬',
          title: 'Contacto simple',
          description: 'Formulario o WhatsApp. Sin fricción, sin preguntas innecesarias.',
          image: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?w=800&h=600&fit=crop',
        },
      ],
    },
    diferencial: {
      title: 'Por qué tu consultorio no aparece en Google (y cómo lo solucionamos)',
      description: 'El problema no es tu web. Es lo que pasa después de crearla.',
      items: [
        {
          icon: '⚡',
          title: 'Automatización de turnos',
          description: 'Confirmaciones automáticas, recordatorios y seguimiento. Tu agenda se maneja sola.',
          wrong: 'Te dan un formulario que nadie revisa en días'
        },
        {
          icon: '🔄',
          title: 'Optimización continua',
          description: 'Analizamos qué palabras usan tus pacientes para buscar. Ajustamos tu web para que te encuentren.',
          wrong: 'Te cobran y después no te atienden más'
        },
        {
          icon: '📊',
          title: 'Enfoque en resultados',
          description: 'No medimos visitas. Medimos consultas reales, turnos confirmados, pacientes nuevos.',
          wrong: 'Te muestran analytics que no entendés'
        },
      ],
      resultadoPromesa: 'El resultado que conseguimos',
      resultadoValor: '+40% más consultas en 30 días',
    },
    beneficios: {
      title: 'Resultados que conseguimos para tu consultorio',
      subtitle: 'Lo que lograrás con tu web',
      description: '',
      items: beneficiosTemplates['personal-trainer'] as any,
    },
    galeria: {
      title: 'Ejemplos de webs para psicólogos',
      subtitle: 'Galería',
      description: 'Así se ve una web profesional para psicólogos',
      images: [
        { src: 'https://images.pexels.com/photos/3792413/pexels-photo-3792413.jpeg?w=800&h=800&fit=crop', alt: 'Consultorio', caption: 'Tu espacio profesional' },
        { src: 'https://images.pexels.com/photos/4101555/pexels-photo-4101555.jpeg?w=800&h=800&fit=crop', alt: 'Formación', caption: 'Credenciales visibles' },
        { src: 'https://images.pexels.com/photos/3973750/pexels-photo-3973750.jpeg?w=800&h=800&fit=crop', alt: 'Online', caption: 'Modalidades claras' },
        { src: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?w=800&h=800&fit=crop', alt: 'Contacto', caption: 'Contacto simple' },
      ],
    },
    testimonios: {
      title: 'Casos reales: psicólogos que conseguirán más pacientes',
      subtitle: 'Testimonios',
      description: 'De 1 consulta cada 2 semanas a 6 por semana. Resultados comprobables.',
      items: [
        {
          quote: 'Pasé de 1 consulta cada 2 semanas (casi todas de Instagram) a recibir 6 consultas semanales. La mayoría por Google.',
          author: 'Luciana Pérez',
          role: 'Psicóloga · CABA',
          avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?w=200&h=200&fit=crop&crop=face',
          rating: 5,
          highlight: '6 consultas/semana',
        },
        {
          quote: 'Mi web transmite la confianza que mis pacientes necesitan. Ya no explico todo en el primer WhatsApp.',
          author: 'Roberto Sánchez',
          role: 'Psicoterapeuta · Recoleta',
          avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?w=200&h=200&fit=crop&crop=face',
          rating: 5,
          highlight: 'Leads más calificados',
        },
        {
          quote: 'El tema de modalidad presencial/online lo tengo clarísimo en la web. Pacientes que llegan sabiendo.',
          author: 'Ana García',
          role: 'Psicóloga · Belgrano',
          avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?w=200&h=200&fit=crop&crop=face',
          rating: 5,
          highlight: 'Menos consultas iniciales',
        },
      ],
      featuredIndex: 0,
    },
    ctaFinal: {
      title: 'Empezá a recibir más consultas esta semana',
      subtitle: 'Primera consulta sin cargo',
      description: 'Mostrame tu situación y te digo cómo ayudarte a conseguir más pacientes.',
      ctaText: 'Quiero más pacientes',
      ctaSecondaryText: 'Ver ejemplos',
      highlights: [
        '✓ Primera consulta sin cargo',
        '✓ Sin compromiso',
        '✓ Resultados en 60 días',
      ],
    },
  },

  /**
   * ============================================
   * LANDING: NUTRICIONISTAS
   * Keyword: "web para nutricionista que convierte"
   * ============================================
   */
  nutricionista: {
    hero: {
      badge: 'Web para Nutricionistas',
      title: 'Página web para nutricionista que convierte visitas en pacientes',
      subtitle: 'Tu consultorio online que trabaja 24/7. Web profesional que te encuentran cuando buscan nutricionista en tu zona.',
      ctaText: 'Quiero más pacientes',
      ctaSecondaryText: 'Ver ejemplos',
      backgroundImage: 'https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg?w=1920&h=1080&fit=crop',
      heroImage: 'https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?w=800&h=1000&fit=crop',
      layout: 'split',
      stats: [
        { value: '5', label: 'Pacientes nuevos/mes' },
        { value: '45 días', label: 'Para agenda llena' },
        { value: '100%', label: 'Más visibilidad' },
      ],
    },
    servicios: {
      title: 'Tu web profesional para nutricionistas',
      subtitle: 'Cómo conseguimos más pacientes para tu consultorio',
      description: 'No es solo un sitio bonito. Es presencia online que te diferencia de la competencia.',
      items: [
        {
          icon: '🥗',
          title: 'Tu metodología',
          description: 'Explicá tu enfoque: paleo, keto, intuitivo. Los pacientes eligen según su objetivo.',
          badges: 'Tu método',
          image: 'https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg?w=800&h=600&fit=crop',
        },
        {
          icon: '📊',
          title: 'Planes claros',
          description: 'Consultas, controles, planes. Precios visibles, sin sorpresas.',
          image: 'https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?w=800&h=600&fit=crop',
        },
        {
          icon: '⭐',
          title: 'Testimonios de pacientes',
          description: 'Reviews y experiencias. Prueba social que genera confianza.',
          image: 'https://images.pexels.com/photos/443514/pexels-photo-443514.jpeg?w=800&h=600&fit=crop',
        },
        {
          icon: '📅',
          title: 'Turnos online',
          description: 'Sistema de reserva directa. Agenda llena sin esfuerzo.',
          image: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?w=800&h=600&fit=crop',
        },
      ],
    },
    diferencial: {
      title: 'Por qué tu consultorio no aparece cuando buscan nutricionista (y cómo lo solucionamos)',
      description: 'El problema no es tu web. Es lo que pasa después de crearla.',
      items: [
        {
          icon: '⚡',
          title: 'Automatización de turnos',
          description: 'Confirmaciones, recordatorios y re-agendado automático. Tu agenda se maneja sola.',
          wrong: 'Te dan un formulario que nadie revisa'
        },
        {
          icon: '🔄',
          title: 'Optimización SEO local',
          description: 'Posicionamos tu web para que aparezcas cuando buscan "nutricionista en [tu zona]".',
          wrong: 'Te cobran desarrollo y no optimizan para Google'
        },
        {
          icon: '📊',
          title: 'Enfoque en resultados',
          description: 'No medimos visitas. Medimos pacientes que reservan, no solo gente que entra a tu web.',
          wrong: 'Te muestran dashboards que no se traducen en pacientes'
        },
      ],
      resultadoPromesa: 'El resultado que conseguimos',
      resultadoValor: '+40% más consultas en 30 días',
    },
    beneficios: {
      title: 'Resultados que conseguimos para tu consultorio',
      subtitle: 'Lo que lograrás con tu web',
      description: '',
      items: beneficiosTemplates['personal-trainer'] as any,
    },
    galeria: {
      title: 'Ejemplos de webs para nutricionistas',
      subtitle: 'Galería',
      description: 'Así se ve una web profesional para nutricionistas',
      images: [
        { src: 'https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg?w=800&h=800&fit=crop', alt: 'Metodología', caption: 'Tu enfoque' },
        { src: 'https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?w=800&h=800&fit=crop', alt: 'Planes', caption: 'Planes claros' },
        { src: 'https://images.pexels.com/photos/443514/pexels-photo-443514.jpeg?w=800&h=800&fit=crop', alt: 'Testimonios', caption: 'Reviews' },
        { src: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?w=800&h=800&fit=crop', alt: 'Turnos', caption: 'Reserva online' },
      ],
    },
    testimonios: {
      title: 'Casos reales: nutricionistas que conseguirán más pacientes',
      subtitle: 'Testimonios',
      description: 'De agenda vacía a llena en 45 días. Resultados comprobables.',
      items: [
        {
          quote: 'Mi agenda estaba siempre半 vacía. En 6 semanas ya tenía lista de espera. Mis pacientes me encuentran por Google.',
          author: 'Ana Martínez',
          role: 'Nutricionista · Recoleta',
          avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?w=200&h=200&fit=crop&crop=face',
          rating: 5,
          highlight: 'Agenda llena en 45 días',
        },
        {
          quote: 'Tenía una web fea que no convertía. Ahora los pacientes llegan sabiendo qué ofrezco. Menos WhatsApps innecesarios.',
          author: 'Diego Herrera',
          role: 'Nutricionista · Palermo',
          avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?w=200&h=200&fit=crop&crop=face',
          rating: 5,
          highlight: 'Leads mejor calificados',
        },
        {
          quote: 'Mis planes y precios son claros desde el inicio. Ya no pierdo tiempo en consultas que no convergen.',
          author: 'María López',
          role: 'Nutricionista · Belgrano',
          avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?w=200&h=200&fit=crop&crop=face',
          rating: 5,
          highlight: '100% más consultas',
        },
      ],
      featuredIndex: 0,
    },
    ctaFinal: {
      title: 'Empezá a recibir más consultas esta semana',
      subtitle: 'Primera consulta sin cargo',
      description: 'Mostrame tu situación y te digo cómo ayudarte a conseguir más pacientes.',
      ctaText: 'Quiero más pacientes',
      ctaSecondaryText: 'Ver ejemplos',
      highlights: [
        '✓ Primera consulta sin cargo',
        '✓ Sin compromiso',
        '✓ Resultados en 45 días',
      ],
    },
  },

  /**
   * ============================================
   * LANDING: GIMNASIOS
   * Keyword: "web para gimnasio que convierte socios"
   * ============================================
   */
  gimnasio: {
    hero: {
      badge: 'Web para Gimnasios',
      title: 'Página web para gimnasio que convierte visitas en socios',
      subtitle: 'Tu web trabaja 24/7 inscribiendo socios. Mostrá tus clases, horarios e instalaciones. Dejá que la web haga el trabajo.',
      ctaText: 'Quiero más socios',
      ctaSecondaryText: 'Ver ejemplos',
      backgroundImage: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?w=1920&h=1080&fit=crop',
      heroImage: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?w=800&h=1000&fit=crop',
      layout: 'split',
      stats: [
        { value: '20', label: 'Socios nuevos/mes' },
        { value: '100%', label: 'Más inscripciones' },
        { value: '24/7', label: 'Tu web trabaja siempre' },
      ],
    },
    servicios: {
      title: 'Tu web profesional para gimnasios',
      subtitle: 'Cómo conseguimos más socios para tu gimnasio',
      description: 'No es solo un sitio bonito. Es una máquina de inscripciones que trabaja sola.',
      items: [
        {
          icon: '🏋️',
          title: 'Clases y horarios',
          description: 'Grilla visual con todas tus clases. El socio elige el turno sin preguntarte.',
          badges: 'Más popular',
          image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?w=800&h=600&fit=crop',
        },
        {
          icon: '📸',
          title: 'Galería de instalaciones',
          description: 'Fotos reales de tu espacio. Máquinas, vestuarios, clases. Generá confianza antes de que lleguen.',
          image: 'https://images.pexels.com/photos/3621196/pexels-photo-3621196.jpeg?w=800&h=600&fit=crop',
        },
        {
          icon: '💰',
          title: 'Planes y precios',
          description: 'Todo visible. El socio se anota sin fricción, sin WhatsApps.',
          image: 'https://images.pexels.com/photos/3808991/pexels-photo-3808991.jpeg?w=800&h=600&fit=crop',
        },
        {
          icon: '📱',
          title: 'Formulario de inscripción',
          description: 'Datos del interesado directo a tu email. Tu web inscriбирует, vos entrenás.',
          image: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?w=800&h=600&fit=crop',
        },
      ],
    },
    diferencial: {
      title: 'Por qué tu gimnasio no llena turnos (y cómo lo solucionamos)',
      description: 'El problema no es tu web. Es lo que pasa después de crearla.',
      items: [
        {
          icon: '⚡',
          title: 'Automatización de inscripciones',
          description: 'Confirmaciones automáticas, recordatorios de renewal, follow-up de interesados. Tu web inscriBE, vos entrenás.',
          wrong: 'Te entregan un formulario que nadie revisa'
        },
        {
          icon: '🔄',
          title: 'Optimización continua',
          description: 'Analizamos qué horarios tienen demanda, qué planes convierten mejor. Ajustamos para más inscripciones.',
          wrong: 'Te cobran y después no te atienden más'
        },
        {
          icon: '📊',
          title: 'Enfoque en resultados',
          description: 'No medimos visitas. Medimos socios nuevos, renovaciones, ingresos. Eso es lo que importa.',
          wrong: 'Te muestran visitas que no se traducen en inscripciones'
        },
      ],
      resultadoPromesa: 'El resultado que conseguimos',
      resultadoValor: '+40% más socios en 30 días',
    },
    beneficios: {
      title: 'Resultados que conseguimos para tu gimnasio',
      subtitle: 'Lo que lograrás con tu web',
      description: '',
      items: beneficiosTemplates.gimnasio as any,
    },
    galeria: {
      title: 'Ejemplos de webs para gimnasios',
      subtitle: 'Galería',
      description: 'Así se ve una web profesional para gimnasios',
      images: [
        { src: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?w=800&h=800&fit=crop', alt: 'Entrenamiento', caption: 'Tu espacio' },
        { src: 'https://images.pexels.com/photos/3621196/pexels-photo-3621196.jpeg?w=800&h=800&fit=crop', alt: 'Cardio', caption: 'Equipamiento' },
        { src: 'https://images.pexels.com/photos/3808991/pexels-photo-3808991.jpeg?w=800&h=800&fit=crop', alt: 'Pesas', caption: 'Pesas libres' },
        { src: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?w=800&h=800&fit=crop', alt: 'Clases', caption: 'Clases grupales' },
      ],
    },
    testimonios: {
      title: 'Casos reales: gimnasios que conseguirán más socios',
      subtitle: 'Testimonios',
      description: 'Tu web trabaja 24/7 inscribiendo gente. Resultados comprobables.',
      items: [
        {
          quote: 'Pasé de que me pregunten todo por Instagram a que se inscriban solos. Mi web hace el trabajo.',
          author: 'Marcelo Gómez',
          role: 'Dueño de gimnasio · Villa Urquiza',
          avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?w=200&h=200&fit=crop&crop=face',
          rating: 5,
          highlight: '20 socios nuevos/mes',
        },
        {
          quote: 'Mis horarios y precios son claros. Ya no respondo 50 mensajes por día preguntando lo mismo.',
          author: 'Carlos Ruiz',
          role: 'Gerente · Gimnasio Zona Sur',
          avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?w=200&h=200&fit=crop&crop=face',
          rating: 5,
          highlight: 'Menos consultas repetitivas',
        },
        {
          quote: 'Mi gimnasio se ve profesional. La gente llega convencida, no con dudas.',
          author: 'Patricia Vega',
          role: 'Dueña · Fitness Center',
          avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?w=200&h=200&fit=crop&crop=face',
          rating: 5,
          highlight: 'Tasa de conversión +40%',
        },
      ],
      featuredIndex: 0,
    },
    ctaFinal: {
      title: 'Empezá a recibir más inscripciones esta semana',
      subtitle: 'Primera clase gratis',
      description: 'Tu web trabaja 24/7. Vos entrenás, la web inscriбирует.',
      ctaText: 'Quiero más socios',
      ctaSecondaryText: 'Ver ejemplos',
      highlights: [
        '✓ Primera clase gratis',
        '✓ Sin compromiso',
        '✓ Resultados inmediatos',
      ],
    },
  },

  /**
   * ============================================
   * LANDING: ESTÉTICA CORPORAL
   * Keyword: "web para centro de estética que reserva turnos"
   * ============================================
   */
  'estetica-corporal': {
    hero: {
      badge: 'Web para Centros de Estética',
      title: 'Página web para estética que reserva turnos por WhatsApp',
      subtitle: 'Tu centro de belleza merece ser encontrado. Web premium que muestra tratamientos y genera reservas directo.',
      ctaText: 'Quiero más clientas',
      ctaSecondaryText: 'Ver ejemplos',
      backgroundImage: 'https://images.pexels.com/photos/3932571/pexels-photo-3932571.jpeg?w=1920&h=1080&fit=crop',
      heroImage: 'https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?w=800&h=1000&fit=crop',
      layout: 'split',
      stats: [
        { value: '15', label: 'Clientas nuevas/mes' },
        { value: '100%', label: 'Más reservas' },
        { value: '30 días', label: 'Para agenda llena' },
      ],
    },
    servicios: {
      title: 'Tu web profesional para centros de estética',
      subtitle: 'Cómo conseguimos más clientas para tu centro',
      description: 'No es solo un sitio bonito. Es presencia online premium que genera deseo y reservas.',
      items: [
        {
          icon: '✨',
          title: 'Tratamientos con precios',
          description: 'Galería de cada tratamiento con descripción y valor. La clienta sabe qué quiere antes de escribir.',
          badges: 'Más popular',
          image: 'https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?w=800&h=600&fit=crop',
        },
        {
          icon: '📸',
          title: 'Antes y después',
          description: 'Resultados reales de tus tratamientos. Generá deseo con evidencia.',
          image: 'https://images.pexels.com/photos/3932571/pexels-photo-3932571.jpeg?w=800&h=600&fit=crop',
        },
        {
          icon: '💎',
          title: 'Tu espacio premium',
          description: 'Fotos profesionales de tu centro. La primera impresión se genera antes de llegar.',
          image: 'https://images.pexels.com/photos/3936317/pexels-photo-3936317.jpeg?w=800&h=600&fit=crop',
        },
        {
          icon: '📱',
          title: 'Reserva por WhatsApp',
          description: 'Botón directo a tu WhatsApp. La clienta reserva sin llamar, sin esperar.',
          image: 'https://images.pexels.com/photos/3962575/pexels-photo-3962575.jpeg?w=800&h=600&fit=crop',
        },
      ],
    },
    diferencial: {
      title: 'Por qué tu centro no llena la agenda (y cómo lo solucionamos)',
      description: 'El problema no es tu web. Es lo que pasa después de crearla.',
      items: [
        {
          icon: '⚡',
          title: 'Automatización de reservas',
          description: 'Confirmaciones automáticas, recordatorios y seguimiento. Clientas que reservan y no se olvidan.',
          wrong: 'Te entregan un formulario que nadie revisa'
        },
        {
          icon: '🔄',
          title: 'Optimización visual',
          description: 'Fotos profesionales, antes/después optimizados. Generamos deseo antes de que lleguen.',
          wrong: 'Te cobran fotos de stock genéricas'
        },
        {
          icon: '📊',
          title: 'Enfoque en resultados',
          description: 'No medimos visitas. Medimos reservas confirmadas, clientas nuevas, recurrentes.',
          wrong: 'Te muestran métricas que no se traducen en ingresos'
        },
      ],
      resultadoPromesa: 'El resultado que conseguimos',
      resultadoValor: '+40% más reservas en 30 días',
    },
    beneficios: {
      title: 'Resultados que conseguimos para tu centro',
      subtitle: 'Lo que lograrás con tu web',
      description: '',
      items: beneficiosTemplates['personal-trainer'] as any,
    },
    galeria: {
      title: 'Ejemplos de webs para centros de estética',
      subtitle: 'Galería',
      description: 'Así se ve una web profesional para centros de estética',
      images: [
        { src: 'https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?w=800&h=800&fit=crop', alt: 'Tratamientos', caption: 'Tratamientos' },
        { src: 'https://images.pexels.com/photos/3932571/pexels-photo-3932571.jpeg?w=800&h=800&fit=crop', alt: 'Resultados', caption: 'Antes y después' },
        { src: 'https://images.pexels.com/photos/3936317/pexels-photo-3936317.jpeg?w=800&h=800&fit=crop', alt: 'Espacio', caption: 'Tu espacio' },
        { src: 'https://images.pexels.com/photos/3962575/pexels-photo-3962575.jpeg?w=800&h=800&fit=crop', alt: 'Reserva', caption: 'Reserva online' },
      ],
    },
    testimonios: {
      title: 'Casos reales: centros de estética que conseguirán más clientas',
      subtitle: 'Testimonios',
      description: 'Clientas que reservan sabiendo qué quieren. Sin fricción.',
      items: [
        {
          quote: 'Las clientas llegan sabiendo qué tratamiento quieren. Ya no explico todo desde cero por WhatsApp.',
          author: 'Patricia Solís',
          role: 'Directora · Bella Piel',
          avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?w=200&h=200&fit=crop&crop=face',
          rating: 5,
          highlight: '15 clientas nuevas/mes',
        },
        {
          quote: 'Mi centro se ve premium. Las clientas llegan convencidas, no comparando precios.',
          author: 'Valeria Moyano',
          role: 'Esteticista · Núñez',
          avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?w=200&h=200&fit=crop&crop=face',
          rating: 5,
          highlight: 'Valor percibido +50%',
        },
        {
          quote: 'Mis tratamientos están clarísimos en la web. Las clientas reservan directo por WhatsApp.',
          author: 'Catalina Reyes',
          role: 'Centro de Estética · Palermo',
          avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?w=200&h=200&fit=crop&crop=face',
          rating: 5,
          highlight: 'Reservas sin fricción',
        },
      ],
      featuredIndex: 0,
    },
    ctaFinal: {
      title: 'Empezá a recibir más reservas esta semana',
      subtitle: 'Primera consulta sin cargo',
      description: 'Mostrame tu centro y te digo cómo conseguir más clientas.',
      ctaText: 'Quiero más clientas',
      ctaSecondaryText: 'Ver ejemplos',
      highlights: [
        '✓ Primera consulta sin cargo',
        '✓ Sin compromiso',
        '✓ Resultados en 30 días',
      ],
    },
  },

  /**
   * ============================================
   * LANDING: CASAS DE COMIDAS / EMPRENDEDORES
   * Keyword: "web para delivery que vende sin comisiones"
   * ============================================
   */
  'casa-de-comidas': {
    hero: {
      badge: 'Web para Emprendedores',
      title: 'Página web para delivery que vende sin pagar comisiones',
      subtitle: 'Tu propia app de pedidos sin las comisiones de PedidosYa o Rappi. El 100% es tuyo.',
      ctaText: 'Quiero más pedidos',
      ctaSecondaryText: 'Ver ejemplos',
      backgroundImage: 'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?w=1920&h=1080&fit=crop',
      heroImage: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?w=800&h=1000&fit=crop',
      layout: 'split',
      stats: [
        { value: '30%', label: 'Ahorro en comisiones' },
        { value: '100%', label: 'De cada pedido es tuyo' },
        { value: '7 días', label: 'Para estar online' },
      ],
    },
    servicios: {
      title: 'Tu web profesional para delivery propio',
      subtitle: 'Cómo conseguimos más pedidos para tu emprendimiento',
      description: 'No es solo un menú bonito. Es tu canal de ventas sin comisiones.',
      items: [
        {
          icon: '🍽️',
          title: 'Menú digital',
          description: 'Fotos profesionales de tus platos. Precios claros. Actualizable por vos.',
          badges: 'Más popular',
          image: 'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?w=800&h=600&fit=crop',
        },
        {
          icon: '📍',
          title: 'Zona de entrega visible',
          description: 'Mapa claro de tu radio de entrega. Sin consultas por fuera de rango.',
          image: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?w=800&h=600&fit=crop',
        },
        {
          icon: '💬',
          title: 'Pedidos por WhatsApp',
          description: 'El cliente arma el pedido y te llega directo. Sin apps, sin intermediarios.',
          image: 'https://images.pexels.com/photos/1624479/pexels-photo-1624479.jpeg?w=800&h=600&fit=crop',
        },
        {
          icon: '📱',
          title: 'Presencia en Google',
          description: 'Tu emprendimiento aparece cuando buscan "viandas cerca de mí" o "comida en [tu zona]".',
          image: 'https://images.pexels.com/photos/1559827/pexels-photo-1559827.jpeg?w=800&h=600&fit=crop',
        },
      ],
    },
    diferencial: {
      title: 'Por qué tu delivery no vende (y cómo lo solucionamos)',
      description: 'El problema no es tu menú. Es lo que pasa después de crearlo.',
      items: [
        {
          icon: '⚡',
          title: 'Automatización de pedidos',
          description: 'Confirmaciones automáticas, estado del pedido, seguimiento. El cliente informado es el que repite.',
          wrong: 'Te entregan un formulario que nadie revisa'
        },
        {
          icon: '🔄',
          title: 'Optimización SEO local',
          description: 'Posicionamos tu emprendimiento para cuando busquen "viandas cerca de mí" o "comida en [tu zona]".',
          wrong: 'Te cobran desarrollo y no optimizan para Google Maps'
        },
        {
          icon: '📊',
          title: 'Enfoque en resultados',
          description: 'No medimos visitas. Medimos pedidos, ticket promedio, clientes recurrentes. Eso es tu negocio.',
          wrong: 'Te muestran visitas que no se traducen en pedidos'
        },
      ],
      resultadoPromesa: 'El resultado que conseguimos',
      resultadoValor: '30% ahorro en comisiones en 30 días',
    },
    beneficios: {
      title: 'Resultados que conseguimos para tu emprendimiento',
      subtitle: 'Lo que lograrás con tu web',
      description: '',
      items: beneficiosTemplates['personal-trainer'] as any,
    },
    galeria: {
      title: 'Ejemplos de webs para emprendedores',
      subtitle: 'Galería',
      description: 'Así se ve una web profesional para delivery propio',
      images: [
        { src: 'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?w=800&h=800&fit=crop', alt: 'Platos', caption: 'Tu menú' },
        { src: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?w=800&h=800&fit=crop', alt: 'Zona', caption: 'Zona de entrega' },
        { src: 'https://images.pexels.com/photos/1624479/pexels-photo-1624479.jpeg?w=800&h=800&fit=crop', alt: 'Pedidos', caption: 'Pedidos WhatsApp' },
        { src: 'https://images.pexels.com/photos/1559827/pexels-photo-1559827.jpeg?w=800&h=800&fit=crop', alt: 'Google', caption: 'Visibilidad Google' },
      ],
    },
    testimonios: {
      title: 'Casos reales: emprendimientos que conseguirán más pedidos',
      subtitle: 'Testimonios',
      description: 'Tu propio canal de ventas. Sin comisiones, sin intermediarios.',
      items: [
        {
          quote: 'Dejé de pagarle a PedidosYa el 30% de cada pedido. Ahora el 100% es mío.',
          author: 'Julio Mendoza',
          role: 'Don Julio · Villa Crespo',
          avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?w=200&h=200&fit=crop&crop=face',
          rating: 5,
          highlight: '30% ahorro en comisiones',
        },
        {
          quote: 'Mi menú está siempre actualizado. Los clientes saben qué hay hoy, sin necesidad de preguntar.',
          author: 'María Elena Soto',
          role: 'Casa de Comidas · Almagro',
          avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?w=200&h=200&fit=crop&crop=face',
          rating: 5,
          highlight: 'Menos consultas por menú',
        },
        {
          quote: 'Me encuentran en Google buscando "viandas cerca de mí". Visibilidad que antes no tenía.',
          author: 'Fernando Gómez',
          role: 'Viandas Saludables · Palermo',
          avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?w=200&h=200&fit=crop&crop=face',
          rating: 5,
          highlight: 'Nuevo canal de ventas',
        },
      ],
      featuredIndex: 0,
    },
    ctaFinal: {
      title: 'Empezá a recibir más pedidos esta semana',
      subtitle: 'Sin costo inicial',
      description: 'Tu propio canal de ventas sin comisiones. Primeros 30 días de soporte incluidos.',
      ctaText: 'Quiero más pedidos',
      ctaSecondaryText: 'Ver ejemplos',
      highlights: [
        '✓ Sin costo inicial',
        '✓ 30% ahorro en comisiones',
        '✓ Online en 7 días',
      ],
    },
  },
};
