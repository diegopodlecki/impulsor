export type SeoLandingConfig = {
  path: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  overview: string;
  benefits: string[];
  useCases: string[];
  faqs: { q: string; a: string }[];
};

export const seoLandingConfigs: SeoLandingConfig[] = [
  {
    path: "/automatizacion-whatsapp",
    title: "Automatización de WhatsApp para profesionales y negocios de Argentina | WebApp Impulsor",
    description:
      "Landing SEO sobre automatización de WhatsApp para profesionales y negocios de Argentina. Respondé más rápido, agendá turnos, cobrá señas y vendé mejor.",
    h1: "Automatización de WhatsApp para profesionales y negocios de Argentina",
    intro:
      "Si atendés consultas por WhatsApp todos los días, sabés que el problema no es solo responder: también hay que ordenar, clasificar, agendar, hacer seguimiento y no perder oportunidades. Esta guía te muestra cómo la automatización puede ayudarte a vender mejor, ahorrar tiempo y sostener una atención más prolija en Buenos Aires, CABA, GBA y Zona Sur.",
    overview:
      "La automatización de WhatsApp es una forma de hacer que tu canal de ventas y atención responda solo, ordene consultas y avance con procesos sin depender de que una persona esté disponible todo el tiempo. En la práctica, significa que el cliente puede escribir, recibir respuesta inmediata, dejar sus datos, agendar una cita o incluso pagar una seña sin salir del chat.",
    benefits: [
      "Respondés más rápido y perdés menos consultas.",
      "Agendás turnos sin intervención manual.",
      "Cobrás señas o reservas dentro del chat.",
      "Derivás a un humano solo cuando hace falta.",
    ],
    useCases: [
      "En salud, sirve para reservar turnos, enviar recordatorios y cobrar señas.",
      "En estudios jurídicos, ayuda a filtrar consultas y coordinar entrevistas.",
      "En inmobiliarias, permite responder propiedades disponibles y agendar visitas.",
      "En gimnasios, estética o educación, ordena consultas frecuentes y mantiene el seguimiento sin saturar el teléfono.",
    ],
    faqs: [
      {
        q: "¿La automatización de WhatsApp sirve para negocios chicos?",
        a: "Sí. De hecho, muchas veces el impacto es más visible en negocios chicos porque cada consulta cuenta y el tiempo del equipo es limitado.",
      },
      {
        q: "¿Necesito cambiar mi número actual?",
        a: "No necesariamente. La implementación se adapta al flujo que tengas y te ayudamos a evaluar la mejor opción técnica y comercial.",
      },
      {
        q: "¿Se puede usar en Buenos Aires, CABA, GBA y Zona Sur?",
        a: "Sí. Trabajamos con clientes de esas zonas y también con negocios de otras provincias en forma remota.",
      },
      {
        q: "¿El sistema reemplaza la atención humana?",
        a: "No. La complementa. Automatiza lo repetitivo y deriva a una persona cuando el caso necesita criterio humano.",
      },
    ],
  },
  {
    path: "/turnos-por-whatsapp",
    title: "Turnos por WhatsApp para negocios de Argentina | WebApp Impulsor",
    description:
      "Sistema SEO para turnos por WhatsApp en Argentina. Agendado automático, recordatorios y menos ausencias para profesionales y comercios locales.",
    h1: "Turnos por WhatsApp para negocios de Argentina",
    intro:
      "Cuando los turnos entran por WhatsApp, el valor no está solo en contestar: está en ordenar la agenda, evitar huecos y hacer que el cliente llegue con todo claro. Esta landing explica cómo automatizar el agendado para que tu negocio funcione mejor en Buenos Aires, CABA, GBA y Zona Sur.",
    overview:
      "Los turnos por WhatsApp permiten que el cliente vea opciones, elija horario y reciba confirmación sin esperar respuesta manual. También podés automatizar recordatorios, preguntas previas y derivación a un humano si el caso requiere atención personalizada.",
    benefits: [
      "Menos llamadas y mensajes de ida y vuelta.",
      "Agenda más ordenada y menos ausencias.",
      "Confirmaciones automáticas sin esfuerzo extra.",
      "Más capacidad operativa sin sumar recepción.",
    ],
    useCases: [
      "Clínicas, consultorios y centros estéticos.",
      "Gimnasios, entrenadores y bienestar.",
      "Estudios y servicios con agenda previa.",
      "Negocios locales que coordinan visitas o reservas.",
    ],
    faqs: [
      {
        q: "¿Los turnos pueden confirmarse solos?",
        a: "Sí, el flujo puede confirmar automáticamente, enviar recordatorios y derivar si surge una excepción.",
      },
      {
        q: "¿Se puede adaptar a mi agenda actual?",
        a: "Sí. La automatización se integra con la agenda o el proceso que ya uses.",
      },
      {
        q: "¿Sirve para equipos pequeños?",
        a: "Sí, especialmente cuando una sola persona maneja muchas consultas y turnos.",
      },
      {
        q: "¿Funciona en CABA y GBA?",
        a: "Sí, y también para negocios de Zona Sur y el resto de Argentina.",
      },
    ],
  },
  {
    path: "/asistente-virtual-whatsapp",
    title: "Asistente virtual de WhatsApp para Argentina | WebApp Impulsor",
    description:
      "Landing SEO sobre asistentes virtuales de WhatsApp para Argentina. Atención 24/7, respuestas inmediatas y derivación inteligente para profesionales.",
    h1: "Asistente virtual de WhatsApp para Argentina",
    intro:
      "Un asistente virtual de WhatsApp te ayuda a responder más rápido, ordenar conversaciones y sostener una atención clara incluso cuando tu equipo está ocupado. Es una solución ideal para profesionales y negocios de Buenos Aires, CABA, GBA y Zona Sur.",
    overview:
      "A diferencia de una respuesta automática simple, un asistente virtual puede entender intenciones, guiar al cliente y llevarlo al próximo paso lógico: agendar, pedir más datos o derivar a una persona. Eso mejora la experiencia y evita perder oportunidades por demora.",
    benefits: [
      "Atención inmediata todos los días.",
      "Menos consultas repetidas para el equipo.",
      "Derivación humana cuando hace falta.",
      "Mejor experiencia para clientes de Argentina.",
    ],
    useCases: [
      "Atención comercial y soporte inicial.",
      "Recepción virtual para agendas y consultas.",
      "Calificación de leads antes de llamar o escribir.",
      "Seguimiento de clientes potenciales en WhatsApp.",
    ],
    faqs: [
      {
        q: "¿El asistente virtual responde como una persona real?",
        a: "Puede hacerlo con un tono natural y alineado a tu negocio, pero siempre con reglas claras.",
      },
      {
        q: "¿Se puede escalar después?",
        a: "Sí, se puede ampliar con más flujos, integraciones y derivaciones.",
      },
      {
        q: "¿Necesita mantenimiento?",
        a: "Sí, como cualquier sistema, pero suele ser mucho más liviano que una operación manual.",
      },
      {
        q: "¿Trabajan con negocios de Zona Sur?",
        a: "Sí, atendemos Buenos Aires, CABA, GBA, Zona Sur y otras zonas de Argentina.",
      },
    ],
  },
  {
    path: "/recordatorios-automaticos-whatsapp",
    title: "Recordatorios automáticos por WhatsApp para Argentina | WebApp Impulsor",
    description:
      "SEO de recordatorios automáticos por WhatsApp en Argentina. Menos ausencias, más confirmaciones y mejor seguimiento para turnos y reservas.",
    h1: "Recordatorios automáticos por WhatsApp para Argentina",
    intro:
      "Si tu negocio depende de turnos, reservas o citas, los recordatorios automáticos por WhatsApp pueden marcar una diferencia enorme. Ayudan a reducir ausencias, ordenar agendas y mantener un seguimiento profesional sin trabajo manual extra.",
    overview:
      "La automatización puede enviar recordatorios antes de una cita, avisar cambios de horario, pedir confirmación y reactivar clientes que dejaron conversaciones pendientes. Eso ordena la operación y mejora la tasa de asistencia.",
    benefits: [
      "Menos no-shows y cancelaciones de último momento.",
      "Confirmaciones automáticas antes del turno.",
      "Seguimiento consistente sin depender de memoria humana.",
      "Mejor percepción de orden y profesionalismo.",
    ],
    useCases: [
      "Consultorios y clínicas.",
      "Reservas de servicios y visitas.",
      "Cursos, talleres y sesiones.",
      "Negocios con agenda alta en Buenos Aires y alrededores.",
    ],
    faqs: [
      {
        q: "¿Los recordatorios son automáticos?",
        a: "Sí, pueden programarse según la fecha, hora o estado del turno.",
      },
      {
        q: "¿Se pueden personalizar?",
        a: "Sí, para que el mensaje refleje el tono y la información de tu negocio.",
      },
      {
        q: "¿Sirve para CABA y GBA?",
        a: "Sí, está pensado para negocios de Argentina, incluyendo CABA, GBA y Zona Sur.",
      },
      {
        q: "¿Puedo combinarlo con agendado?",
        a: "Sí, suele funcionar muy bien combinado con turnos automáticos.",
      },
    ],
  },
  {
    path: "/seguimiento-de-clientes",
    title: "Seguimiento de clientes por WhatsApp para Argentina | WebApp Impulsor",
    description:
      "Landing SEO para seguimiento de clientes por WhatsApp en Argentina. Automatizá el follow-up, recuperá oportunidades y mejorá cierres.",
    h1: "Seguimiento de clientes por WhatsApp para Argentina",
    intro:
      "El seguimiento de clientes por WhatsApp es clave cuando querés que una consulta no se enfríe. Con automatización, podés hacer follow-up, enviar recordatorios, rescatar conversaciones y avanzar oportunidades sin depender de tareas manuales.",
    overview:
      "Un sistema de seguimiento ordena a qué cliente escribir, en qué momento y con qué mensaje. Eso permite sostener el interés, recuperar consultas no cerradas y mejorar la tasa de conversión sin saturar al equipo.",
    benefits: [
      "Más oportunidades recuperadas.",
      "Menos leads olvidados.",
      "Seguimiento consistente y medible.",
      "Mejor orden comercial para equipos de Argentina.",
    ],
    useCases: [
      "Ventas que necesitan seguimiento posterior.",
      "Consultas que quedan abiertas sin respuesta final.",
      "Servicios que requieren múltiples contactos.",
      "Negocios con operaciones en Buenos Aires, CABA, GBA y Zona Sur.",
    ],
    faqs: [
      {
        q: "¿El seguimiento puede ser automático?",
        a: "Sí, se puede disparar según tiempo, estado o respuesta del cliente.",
      },
      {
        q: "¿Se puede segmentar?",
        a: "Sí, para separar clientes activos, pendientes o fríos.",
      },
      {
        q: "¿Sirve para negocios locales?",
        a: "Sí, especialmente si trabajás con consultas frecuentes en Argentina.",
      },
      {
        q: "¿También funciona en Zona Sur?",
        a: "Sí, trabajamos con negocios de Zona Sur, CABA, GBA y otras zonas del país.",
      },
    ],
  },
];

export function getSeoLandingConfig(pathname: string) {
  const normalized = pathname.replace(/\/+$/, "") || "/";
  return seoLandingConfigs.find((item) => item.path === normalized);
}
