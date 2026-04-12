export type FaqCategory = {
  slug: string;
  title: string;
  description: string;
  items: Array<{
    q: string;
    a: string[];
  }>;
};

export const FAQ_CATEGORIES: FaqCategory[] = [
  {
    slug: "proceso",
    title: "Sobre el proceso",
    description: "Cómo trabajamos, qué necesitás preparar y qué pasa durante la creación de tu web.",
    items: [
      {
        q: "¿Cuánto tarda en estar lista mi web?",
        a: [
          "La respuesta honesta es: depende del alcance y de qué tan pronto tengamos el contenido listo. Para una landing simple y bien enfocada, solemos trabajar con una ventana de 7 días hábiles.",
          "Si el proyecto incluye más secciones, ajustes de marca, redacción o integraciones, el plazo se estira un poco. Lo importante es que no te prometemos una fecha irreal: preferimos decirte con claridad qué entra y qué no, y avanzar con un ritmo que nos deje entregar algo sólido.",
        ],
      },
      {
        q: "¿Cómo es el proceso de trabajo?",
        a: [
          "Arrancamos con una charla breve para entender tu negocio, tus objetivos y a quién querés atraer. Con eso definimos qué secciones necesita la web, qué mensaje conviene priorizar y cuál es la mejor forma de llevar al visitante a contactarte.",
          "Después pasamos al diseño y a la construcción del sitio. Te mostramos avances, ajustamos lo necesario y cerramos con una entrega lista para publicar. Si hace falta, también te dejamos una guía simple para que puedas moverte con la web sin depender de nosotros para todo.",
        ],
      },
      {
        q: "¿Qué información necesito tener lista para empezar?",
        a: [
          "No hace falta que tengas todo resuelto. Nos sirve mucho tener tu nombre de marca, una idea general de los servicios, zonas donde trabajás, referencias visuales y, si ya los tenés, fotos o testimonios. Con eso ya se puede construir una base muy buena.",
          "Si no tenés textos definidos, también te ayudamos a ordenarlos. Lo que sí pedimos es disponibilidad para responder algunas preguntas del negocio, porque mientras mejor entendamos tu propuesta, mejor va a comunicar la web.",
        ],
      },
      {
        q: "¿Puedo hacer cambios después de que esté publicada?",
        a: [
          "Sí, pero conviene separar dos cosas: ajustes chicos y cambios de alcance. Un cambio de texto, una imagen o una llamada a la acción se resuelve bastante rápido. Una nueva sección o una funcionalidad extra ya requiere más trabajo y la tratamos como una mejora aparte.",
          "Nos gusta trabajar con criterio y no prometer cambios ilimitados gratis para siempre, porque eso termina afectando la calidad. Lo que sí garantizamos es que la web salga bien armada y que no te quedes tirado si después necesitás evolucionarla.",
        ],
      },
      {
        q: "¿Necesito saber de tecnología o programación?",
        a: [
          "No. La idea es justamente que no tengas que aprender nada técnico para tener una web profesional. Nosotros nos ocupamos de la estructura, el diseño, la puesta online y la parte técnica que no debería distraerte de tu negocio.",
          "Cuando entregamos el sitio, te explicamos lo mínimo necesario para usarlo con tranquilidad. Si preferís delegar también la edición, el soporte queda disponible para eso. La idea es que la tecnología sume y no te complique.",
        ],
      },
    ],
  },
  {
    slug: "precios",
    title: "Sobre los precios",
    description: "Qué incluye cada plan, cómo se paga y por qué nuestra propuesta tiene otro enfoque.",
    items: [
      {
        q: "¿Cuánto cuesta una página web profesional?",
        a: [
          "Depende del tipo de sitio y del nivel de personalización que necesites. Una landing simple no cuesta lo mismo que una web con varias secciones, formularios, SEO local y ajustes más finos de marca.",
          "Preferimos hablar de inversión y alcance, no de un número genérico que después cambia cuando aparecen extras. Si querés una referencia rápida, tenemos planes pensados para distintos niveles de complejidad, pero siempre te vamos a explicar qué estás pagando exactamente.",
        ],
      },
      {
        q: "¿Qué incluye el precio? ¿Hay costos ocultos?",
        a: [
          "El precio incluye el diseño, la implementación, la puesta online y la integración de los elementos acordados en el plan. Si el proyecto requiere texto extra, recursos específicos o funcionalidades fuera del alcance inicial, eso se conversa antes.",
          "No trabajamos con costos sorpresa. Si algo no está incluido, te lo decimos de entrada. Esa claridad es clave para que tomes la decisión con confianza y sin sentir que después te van a ir sumando cosas por el camino.",
        ],
      },
      {
        q: "¿Cómo se paga?",
        a: [
          "La forma de pago depende del plan y del tipo de proyecto. Lo más común es un anticipo para arrancar y el saldo al momento de la entrega o cerca de la publicación. Si el caso lo permite, también podemos organizar pagos por etapas.",
          "No buscamos complicarte con condiciones raras. Queremos que el método de pago sea simple, entendible y proporcional al trabajo que hacemos. Si necesitás que te lo adaptemos a tu flujo, lo conversamos antes de arrancar.",
        ],
      },
      {
        q: "¿Hay cuotas disponibles?",
        a: [
          "En algunos proyectos, sí. Especialmente cuando el alcance es mayor o cuando conviene dividir la inversión en partes más cómodas. No es una regla fija para todos los casos, pero tampoco lo descartamos de entrada.",
          "Lo que no hacemos es venderte cuotas solo para cerrar una venta si eso termina forzando un esquema incómodo. Si hay una forma razonable de pagarlo en cuotas, la armamos. Si no, te lo decimos con honestidad.",
        ],
      },
      {
        q: "¿Por qué es más barato que otras agencias?",
        a: [
          "Porque no vendemos una estructura gigante que después se llena de capas innecesarias. Nuestro foco está en una web que convierta bien, se vea profesional y salga rápido, no en inflar el proyecto con procesos eternos.",
          "Eso no significa hacer algo flojo. Significa trabajar con una metodología más directa, enfocada y pensada para negocios de servicios que necesitan resultados, no presentaciones corporativas con demasiado aparato.",
        ],
      },
    ],
  },
  {
    slug: "resultado",
    title: "Sobre el resultado",
    description: "Qué podés esperar del sitio una vez publicado y qué depende de otros factores.",
    items: [
      {
        q: "¿Voy a aparecer en Google con esta web?",
        a: [
          "La web queda preparada para posicionarse mejor, pero aparecer fuerte en Google no depende solo del diseño. También influyen la competencia del rubro, la autoridad del dominio, la calidad del contenido y el trabajo local que hagas alrededor del sitio.",
          "Lo que sí hacemos es dejar una base técnica y de contenido mucho más sólida que una web genérica. Eso te da más chances de competir bien y de que Google entienda mejor de qué trata tu negocio.",
        ],
      },
      {
        q: "¿La web va a funcionar bien en el celular?",
        a: [
          "Sí, ese es uno de los puntos principales. Hoy la mayoría de las consultas llegan desde el celular, así que el sitio se piensa primero para pantallas chicas y después para escritorio, no al revés.",
          "Revisamos el diseño, los botones, los márgenes y la legibilidad para que la experiencia sea cómoda. Si algo no se ve bien en mobile, no lo damos por cerrado.",
        ],
      },
      {
        q: "¿Puedo editar la web yo mismo después?",
        a: [
          "Depende del tipo de cambio. Si hablamos de textos o imágenes simples, la respuesta suele ser sí, o al menos se puede dejar preparado para que lo hagas sin romper nada. Si ya hablamos de estructura o lógica más técnica, ahí conviene que lo haga alguien del equipo.",
          "No te vendemos una ilusión de autonomía total si después la herramienta se vuelve difícil de mantener. La idea es darte control en lo que realmente importa y sostenerte con soporte en lo demás.",
        ],
      },
      {
        q: "¿Qué pasa con el dominio y el hosting cuando se vence el año incluido?",
        a: [
          "Si el proyecto incluye un año de dominio o hosting, cuando se acerca el vencimiento te avisamos para que lo renueves o coordinemos la continuidad. No queremos que tu sitio quede fuera de línea por una sorpresa administrativa.",
          "En algunos casos el cliente prefiere administrar esos servicios por su cuenta y también está bien. Lo importante es que quede claro desde el principio quién se encarga de cada cosa.",
        ],
      },
      {
        q: "¿Puedo ver cómo va a quedar antes de pagar?",
        a: [
          "Sí, podemos mostrarte referencias, estructura y una propuesta visual para que entiendas hacia dónde va el proyecto antes de cerrar. Lo que no hacemos es entregar una maqueta completa sin haber conversado el alcance, porque eso suele generar expectativas poco útiles.",
          "Nuestra intención es que veas el criterio de diseño y la dirección del trabajo antes de avanzar. Así la decisión se toma con contexto y no a ciegas.",
        ],
      },
    ],
  },
  {
    slug: "garantias",
    title: "Garantías y soporte",
    description: "Qué pasa si algo no te convence, qué soporte queda después y cómo trabajamos los cambios.",
    items: [
      {
        q: "¿Qué pasa si no me gusta el diseño?",
        a: [
          "Si no encaja con lo que tu negocio necesita, lo corregimos en la etapa de revisión. Por eso preferimos mostrar avances antes de dar algo por finalizado: es mejor ajustar sobre camino que descubrir al final que la dirección no era la correcta.",
          "Lo que no hacemos es prometer una estética arbitraria para después resignar claridad. Si una decisión visual no ayuda a convertir o no representa tu marca, la reconsideramos con criterio.",
        ],
      },
      {
        q: "¿Qué soporte tienen después de publicada la web?",
        a: [
          "Después de la entrega no te dejamos solo. Hay una instancia de soporte para resolver ajustes razonables, dudas de uso y eventuales correcciones si aparece algo que necesite pulirse.",
          "El alcance exacto del soporte depende del plan contratado. Lo importante es que sepas de antemano qué ayuda tenés disponible y durante cuánto tiempo.",
        ],
      },
      {
        q: "¿Qué pasa si se rompe algo en la web?",
        a: [
          "Si aparece un problema técnico asociado a lo que desarrollamos nosotros, lo revisamos y lo corregimos. No tiene sentido entregarte un sitio y desaparecer si algo se desacomoda por un detalle de implementación.",
          "Si el problema viene por cambios externos, herramientas de terceros o modificaciones hechas fuera del sitio, lo evaluamos caso por caso. La idea es ayudarte, pero sin inventar responsabilidades que no nos corresponden.",
        ],
      },
      {
        q: "¿Puedo pedir cambios después de la entrega?",
        a: [
          "Sí. Lo normal es que un sitio evolucione con el negocio. Lo que cambia después de la entrega lo tratamos como soporte adicional o como una mejora nueva, según el tamaño del ajuste.",
          "Nos interesa acompañarte en el tiempo, no cerrarte la puerta. Pero también cuidamos el orden del proyecto para que la web no termine siendo un parche infinito.",
        ],
      },
    ],
  },
];

export const FAQ_ITEMS = FAQ_CATEGORIES.flatMap((category) =>
  category.items.map((item) => ({
    q: item.q,
    a: item.a.join("\n\n"),
  })),
);
