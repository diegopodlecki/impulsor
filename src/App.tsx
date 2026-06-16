/* eslint-disable react-refresh/only-export-components */
import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import type { RouteRecord } from "vite-react-ssg";

import { SeoHead } from "@/components/SEO/SeoHead";
import { Toaster } from "@/components/ui/sonner.tsx";
import { WhatsAppDemo, type WhatsAppDemoMessage } from "@/components/WhatsAppDemo";
import { HomePage } from "@/components/home/HomePage";

const webhookUrl = "https://hook.us2.make.com/5c7xu0k7crcpkg1eeclb395duigmvn14";

const heroWhatsAppMessages: WhatsAppDemoMessage[] = [
  {
    from: "user",
    text: "Hola, vi la web y quiero saber si automatizan WhatsApp para turnos y seguimiento.",
    delay: 1600,
  },
  {
    from: "bot",
    text: "Sí, claro. Automatizamos respuestas, presupuestos y turnos para que no pierdas consultas.",
    delay: 1900,
  },
  {
    from: "bot",
    text: "Tengo disponibles martes, miércoles y viernes. ¿Cuál te queda mejor?",
    delay: 1700,
    options: ["Miércoles 14:30", "Viernes 18:00"],
  },
  {
    from: "user",
    text: "Perfecto, el miércoles me sirve.",
    delay: 1500,
  },
  {
    from: "bot",
    text: "Listo. Ya quedó reservado y te enviamos recordatorio automático.",
    delay: 2000,
  },
];

export const routes: RouteRecord[] = [
  {
    path: "/",
    element: <HomePage webhookUrl={webhookUrl} messages={heroWhatsAppMessages} />,
  },
  {
    path: "/odontologos",
    element: <NicheLanding nicheKey="odontologos" />,
  },
  {
    path: "/medicos",
    element: <NicheLanding nicheKey="medicos" />,
  },
  {
    path: "/fonoaudiologos",
    element: <NicheLanding nicheKey="fonoaudiologos" />,
  },
  {
    path: "/abogados",
    element: <NicheLanding nicheKey="abogados" />,
  },
  {
    path: "/inmobiliarias",
    element: <NicheLanding nicheKey="inmobiliarias" />,
  },
  {
    path: "/nutricionistas",
    element: <NicheLanding nicheKey="nutricionistas" />,
  },
];

type NicheKey = "odontologos" | "medicos" | "fonoaudiologos" | "abogados" | "inmobiliarias" | "nutricionistas";

type NicheTheme = {
  pageBg: string;
  hero: string;
  font: string;
  title: string;
  body: string;
  accent: string;
  accentSoft: string;
  accentBorder: string;
  accentLine: string;
  dot: string;
  sectionBg: string;
  sectionBgAlt: string;
  sectionBgMuted: string;
  surface: string;
  surfaceStrong: string;
  ctaFrom: string;
  ctaTo: string;
  ctaPanel: string;
  badgeText: string;
  image: string;
  imageAlt: string;
  imageCaption: string;
};

type NicheShowcase = {
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  image: string;
  imageAlt: string;
  caption: string;
  reverse?: boolean;
};

const nicheData: Record<
  NicheKey,
  {
    title: string;
    description: string;
    problem: string;
    benefits: string[];
    conversation: { client: string; assistant: string; followUp: string; close: string };
    theme?: Partial<NicheTheme>;
    showcase?: NicheShowcase;
  }
> = {
  odontologos: {
    title: "Automatización de WhatsApp para odontólogos en Argentina",
    description: "Respondé consultas, coordiná turnos y enviá recordatorios con un asistente de WhatsApp diseñado para consultorios odontológicos y clínicas dentales en Argentina.",
    problem: "Las consultas por WhatsApp suelen llegar entre tratamientos, llamadas y pacientes en sala. Si nadie responde a tiempo, el interés se enfría y el turno se pierde.",
    benefits: [
      "Respuestas automáticas para primeras consultas, urgencias y derivaciones.",
      "Confirmación de turnos y recordatorios automáticos antes de la cita.",
      "Menos tiempo respondiendo precios, cobertura, dirección y horarios.",
    ],
    conversation: {
      client: "Hola, ¿tienen turno para una limpieza dental esta semana?",
      assistant: "Sí, claro. Te paso los horarios disponibles y te dejo el que mejor encaje con tu agenda.",
      followUp: "Te quedó confirmado el jueves a las 16:00. También te llega un recordatorio automático.",
      close: "Perfecto, así no tengo que estar pendiente del chat.",
    },
    theme: {
      pageBg: "bg-[#06111b]",
      hero: "bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.14),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(125,211,252,0.09),transparent_22%),linear-gradient(180deg,rgba(3,7,18,0.98),rgba(3,7,18,1))]",
      font: "font-sans",
      title: "font-heading font-extrabold tracking-[-0.04em]",
      body: "font-normal",
      accent: "text-sky-200",
      accentSoft: "bg-sky-500/10",
      accentBorder: "border-sky-400/20",
      accentLine: "bg-gradient-to-r from-sky-400/60 to-transparent",
      dot: "bg-sky-400",
      sectionBg: "bg-[#081520]",
      sectionBgAlt: "bg-[#0b1723]",
      sectionBgMuted: "bg-[#09111a]",
      surface: "bg-white/[0.035]",
      surfaceStrong: "bg-white/[0.045]",
      ctaFrom: "from-sky-500",
      ctaTo: "to-cyan-500",
      ctaPanel: "bg-[linear-gradient(180deg,rgba(14,165,233,0.09),rgba(255,255,255,0.02))]",
      badgeText: "Consultorios dentales",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Odontóloga atendiendo una consulta mientras responde WhatsApp en un consultorio moderno",
      imageCaption: "Una experiencia premium para ordenar consultas, transmitir confianza y reducir fricción.",
    },
    showcase: {
      eyebrow: "Recepción premium",
      title: "Una clínica que ordena la atención con una experiencia más cuidada y premium",
      description:
        "Pensado para consultorios que quieren transmitir más calidad visual, menos fricción y una atención más precisa desde el primer contacto.",
      bullets: [
        "Consulta inicial con respuesta rápida",
        "Turnos confirmados y mejor seguimiento",
        "Más orden sin perder cercanía",
      ],
      image: "https://images.unsplash.com/photo-1629909615191-09a4b6c1b78b?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Consultorio odontológico moderno con recepción digital",
      caption: "Una referencia premium para reforzar confianza, precisión y calma.",
    },
  },
  medicos: {
    title: "Automatización de WhatsApp para médicos y consultorios en Argentina",
    description: "Centralizá consultas, turnos y seguimientos con un asistente automático pensado para pacientes y consultorios médicos.",
    problem: "La recepción atiende llamados, WhatsApp y agenda al mismo tiempo; cuando todo entra junto, las respuestas tardan y se pierden consultas valiosas.",
    benefits: [
      "Filtro inicial de consultas y derivación automática.",
      "Agenda ordenada con turnos confirmados.",
      "Seguimiento y recordatorios sin carga manual.",
    ],
    conversation: {
      client: "Buen día, ¿atienden por obra social y tienen turno esta semana?",
      assistant: "Sí, te ayudo con la consulta y te comparto los turnos disponibles.",
      followUp: "Te quedó reservado el martes a las 11:00 y te llega recordatorio antes del turno.",
      close: "Excelente, me evita estar llamando varias veces.",
    },
    theme: {
      pageBg: "bg-[#070b16]",
      hero: "bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.16),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.08),transparent_24%),linear-gradient(180deg,rgba(5,8,19,0.98),rgba(5,8,19,1))]",
      font: "font-sans",
      title: "font-heading font-semibold tracking-[-0.04em]",
      body: "font-normal tracking-[-0.01em]",
      accent: "text-indigo-200",
      accentSoft: "bg-indigo-500/10",
      accentBorder: "border-indigo-400/20",
      accentLine: "bg-gradient-to-r from-indigo-400/60 to-transparent",
      dot: "bg-indigo-400",
      sectionBg: "bg-[#090f1d]",
      sectionBgAlt: "bg-[#0b1220]",
      sectionBgMuted: "bg-[#0a1020]",
      surface: "bg-white/[0.03]",
      surfaceStrong: "bg-white/[0.04]",
      ctaFrom: "from-indigo-500",
      ctaTo: "to-violet-500",
      ctaPanel: "bg-[linear-gradient(180deg,rgba(99,102,241,0.09),rgba(255,255,255,0.02))]",
      badgeText: "Consultorios médicos",
      image: "https://images.unsplash.com/photo-1579684453423-f84349ef60b8?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Médica revisando una historia clínica digital en consultorio",
      imageCaption: "Un estilo clínico y editorial para transmitir claridad, precisión y profesionalismo.",
    },
    showcase: {
      eyebrow: "Intake clínico",
      title: "Una recepción más ordenada para consultas, estudios y turnos",
      description:
        "Pensado para consultorios médicos donde conviven llamados, derivaciones y pacientes que necesitan respuestas claras sin fricción.",
      bullets: [
        "Clasificación de motivo de consulta",
        "Derivación según especialidad",
        "Confirmación y recordatorio de turno",
      ],
      image: "https://images.unsplash.com/photo-1586773860416-d37222d8fce3?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Equipo médico revisando una agenda de pacientes en una sala luminosa",
      caption: "Más sobrio, más clínico y con foco en continuidad de atención.",
    },
  },
  fonoaudiologos: {
    title: "Automatización de WhatsApp para fonoaudiólogos en Argentina",
    description: "Respondé consultas frecuentes, coordiná sesiones y simplificá el seguimiento con automatización para consultorios de fonoaudiología.",
    problem: "Se repiten consultas sobre horarios, modalidad, duración y cambios de turno, y eso termina consumiendo tiempo todos los días en el consultorio.",
    benefits: [
      "Respuestas automáticas sobre modalidad y disponibilidad.",
      "Gestión simple de turnos y reprogramaciones.",
      "Seguimiento más ordenado con menos chats pendientes.",
    ],
    conversation: {
      client: "Hola, quería saber si hacen atención infantil y cómo son los turnos.",
      assistant: "Sí, te comparto cómo trabajamos, edades de atención y los horarios disponibles.",
      followUp: "Perfecto, te agendo el miércoles a las 10:00 y te llega la confirmación por WhatsApp.",
      close: "Genial, así no tengo que insistir por respuesta.",
    },
    theme: {
      pageBg: "bg-[#05130f]",
      hero: "bg-[radial-gradient(circle_at_top,rgba(52,211,153,0.15),transparent_32%),linear-gradient(180deg,rgba(2,6,23,0.98),rgba(2,6,23,1))]",
      font: "font-sans",
      title: "font-heading font-black tracking-tight",
      body: "font-normal",
      accent: "text-emerald-200",
      accentSoft: "bg-emerald-500/10",
      accentBorder: "border-emerald-400/20",
      accentLine: "bg-gradient-to-r from-emerald-400/60 to-transparent",
      dot: "bg-emerald-400",
      sectionBg: "bg-[#071813]",
      sectionBgAlt: "bg-[#091b16]",
      sectionBgMuted: "bg-[#06120f]",
      surface: "bg-white/[0.03]",
      surfaceStrong: "bg-white/[0.04]",
      ctaFrom: "from-emerald-500",
      ctaTo: "to-lime-500",
      ctaPanel: "bg-[linear-gradient(180deg,rgba(52,211,153,0.09),rgba(255,255,255,0.02))]",
      badgeText: "Consultorios de fonoaudiología",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Profesional de fonoaudiología trabajando con un paciente",
      imageCaption: "Un diseño más calmo y cercano, pensado para acompañar familias y procesos de seguimiento.",
    },
    showcase: {
      eyebrow: "Sesiones y seguimiento",
      title: "Una agenda suave, clara y sin mensajes repetidos",
      description:
        "Para profesionales que coordinan sesiones, reprogramaciones y seguimiento con familias y pacientes sin perder tiempo en chats repetidos.",
      bullets: [
        "Horarios, modalidad y edades de atención",
        "Cambios de turno sin fricción",
        "Recordatorios automáticos a familias",
      ],
      image: "https://images.unsplash.com/photo-1519542537078-4f7b7e1b8b6a?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Sesión de fonoaudiología en consultorio cálido y minimalista",
      caption: "Un estilo más amable y minimalista para una atención cercana.",
    },
  },
  abogados: {
    title: "Automatización de WhatsApp para abogados en Argentina",
    description: "Filtrá consultas, ordená casos y hacé seguimiento inicial sin perder tiempo en mensajes repetidos para estudios jurídicos y abogados particulares.",
    problem: "Llegan consultas legales que necesitan una primera respuesta clara; si se demoran, el posible cliente sigue buscando otro estudio.",
    benefits: [
      "Primer contacto profesional y automático.",
      "Captura de consultas desde una landing de servicios legales.",
      "Seguimiento de prospectos sin perder oportunidades.",
    ],
    conversation: {
      client: "Hola, necesito asesoramiento por un alquiler, ¿puedo coordinar una consulta?",
      assistant: "Sí, claro. Te comparto disponibilidad y te explico cómo es la primera entrevista.",
      followUp: "Te reservé un turno para mañana a las 17:00 y te envío la confirmación.",
      close: "Perfecto, así no pierdo tiempo escribiendo varias veces.",
    },
    theme: {
      pageBg: "bg-[#080604]",
      hero: "bg-[radial-gradient(circle_at_top,rgba(245,158,11,0.12),transparent_30%),linear-gradient(180deg,rgba(8,5,2,0.99),rgba(8,5,2,1))]",
      font: "font-serif",
      title: "font-heading font-semibold tracking-[-0.05em]",
      body: "font-normal tracking-[-0.01em]",
      accent: "text-amber-200",
      accentSoft: "bg-amber-500/10",
      accentBorder: "border-amber-400/20",
      accentLine: "bg-gradient-to-r from-amber-400/60 to-transparent",
      dot: "bg-amber-400",
      sectionBg: "bg-[#110b07]",
      sectionBgAlt: "bg-[#160f0a]",
      sectionBgMuted: "bg-[#0d0804]",
      surface: "bg-white/[0.025]",
      surfaceStrong: "bg-white/[0.035]",
      ctaFrom: "from-amber-500",
      ctaTo: "to-orange-500",
      ctaPanel: "bg-[linear-gradient(180deg,rgba(245,158,11,0.09),rgba(255,255,255,0.02))]",
      badgeText: "Estudios jurídicos",
      image: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Abogada en un estudio jurídico con documentos y notebook",
      imageCaption: "Una estética formal, editorial y más cercana al universo jurídico.",
    },
    showcase: {
      eyebrow: "Dossier inicial",
      title: "Una puerta de entrada más seria para consultas legales",
      description:
        "Pensado para estudios que necesitan filtrar casos, ordenar urgencias y sostener una primera impresión de confianza desde el minuto uno.",
      bullets: [
        "Primer filtro por tipo de caso",
        "Toma de datos inicial ordenada",
        "Agenda de entrevista y seguimiento",
      ],
      image: "https://images.unsplash.com/photo-1569525365647-5d6e1b4d3cc8?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Estudio jurídico con biblioteca, expediente y luz cálida",
      caption: "Más sobrio, más clásico y con presencia de estudio profesional.",
    },
  },
  inmobiliarias: {
    title: "Automatización de WhatsApp para inmobiliarias en Argentina",
    description: "Respondé consultas de propiedades, agendá visitas y seguí leads sin perder velocidad de respuesta en inmobiliarias argentinas.",
    problem: "Las consultas llegan por muchos canales y, si no se responde rápido, el interesado sigue mirando otras opciones.",
    benefits: [
      "Respuestas automáticas para propiedades y zonas.",
      "Agendado de visitas y seguimiento de interesados.",
      "Más consultas atendidas sin aumentar equipo.",
    ],
    conversation: {
      client: "Hola, vi un depto en Palermo. ¿Sigue disponible?",
      assistant: "Sí, sigue disponible. Te comparto detalles y puedo agendarte visita.",
      followUp: "Listo, te agendé para el sábado a las 12:00 y te llega la confirmación.",
      close: "Genial, me resolvió todo por WhatsApp.",
    },
    theme: {
      pageBg: "bg-[#11050b]",
      hero: "bg-[radial-gradient(circle_at_top,rgba(244,114,182,0.14),transparent_30%),linear-gradient(180deg,rgba(13,6,10,0.99),rgba(13,6,10,1))]",
      font: "font-sans",
      title: "font-heading font-black tracking-tight",
      body: "font-light",
      accent: "text-rose-200",
      accentSoft: "bg-rose-500/10",
      accentBorder: "border-rose-400/20",
      accentLine: "bg-gradient-to-r from-rose-400/60 to-transparent",
      dot: "bg-rose-400",
      sectionBg: "bg-[#1a0910]",
      sectionBgAlt: "bg-[#14080d]",
      sectionBgMuted: "bg-[#12060d]",
      surface: "bg-white/[0.03]",
      surfaceStrong: "bg-white/[0.04]",
      ctaFrom: "from-rose-500",
      ctaTo: "to-fuchsia-500",
      ctaPanel: "bg-[linear-gradient(180deg,rgba(244,114,182,0.09),rgba(255,255,255,0.02))]",
      badgeText: "Inmobiliarias",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Asesor inmobiliario mostrando una propiedad a un cliente",
      imageCaption: "Más energía comercial, más visitas coordinadas y menos leads fríos.",
    },
    showcase: {
      eyebrow: "Leads y visitas",
      title: "Consultas que no se enfrían y visitas que quedan agendadas",
      description:
        "Pensado para equipos comerciales que responden varios canales y necesitan velocidad sin perder contexto.",
      bullets: [
        "Disponibilidad de propiedades",
        "Coordinación de visitas",
        "Seguimiento de interesados",
      ],
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Reunión inmobiliaria con una pareja interesada en una propiedad",
      caption: "Un look más vibrante para una experiencia comercial ágil.",
    },
  },
  nutricionistas: {
    title: "Automatización de WhatsApp para nutricionistas en Argentina",
    description: "Respondé consultas, coordiná primeras entrevistas y acompañá seguimientos con una experiencia digital más cálida y ordenada.",
    problem: "Las consultas de nutrición suelen llegar con preguntas sobre planes, horarios, modalidad y seguimiento; si se demora la respuesta, baja el interés.",
    benefits: [
      "Primer contacto amable y rápido.",
      "Agenda simple para entrevistas y controles.",
      "Seguimiento automático entre consultas.",
    ],
    conversation: {
      client: "Hola, quería saber cómo trabajan las primeras consultas y si hacen seguimiento.",
      assistant: "Sí, claro. Te explico cómo es la primera entrevista y te comparto los horarios disponibles.",
      followUp: "Listo, te reservé el jueves a las 18:00 y te llega un recordatorio antes del turno.",
      close: "Perfecto, así puedo ordenarme mejor sin escribir varias veces.",
    },
    theme: {
      pageBg: "bg-[#07110d]",
      hero: "bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.14),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(250,204,21,0.10),transparent_28%),linear-gradient(180deg,rgba(3,6,14,0.98),rgba(3,6,14,1))]",
      font: "font-sans",
      title: "font-heading font-black tracking-tight",
      body: "font-normal",
      accent: "text-lime-200",
      accentSoft: "bg-lime-500/10",
      accentBorder: "border-lime-400/20",
      accentLine: "bg-gradient-to-r from-lime-400/60 to-transparent",
      dot: "bg-lime-400",
      sectionBg: "bg-[#0b130f]",
      sectionBgAlt: "bg-[#0d1711]",
      sectionBgMuted: "bg-[#09110d]",
      surface: "bg-white/[0.03]",
      surfaceStrong: "bg-white/[0.04]",
      ctaFrom: "from-lime-500",
      ctaTo: "to-emerald-500",
      ctaPanel: "bg-[linear-gradient(180deg,rgba(132,204,22,0.09),rgba(255,255,255,0.02))]",
      badgeText: "Nutricionistas",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Nutricionista trabajando con una paciente en consultorio luminoso",
      imageCaption: "Una estética más cálida y editorial para un servicio cercano.",
    },
    showcase: {
      eyebrow: "Seguimiento y hábitos",
      title: "Una experiencia más cálida para acompañar cada proceso",
      description:
        "La propuesta visual busca transmitir bienestar, claridad y un trato más humano, ideal para nutrición y acompañamiento.",
      bullets: [
        "Primera entrevista guiada",
        "Recordatorios de seguimiento",
        "Orden para hábitos y controles",
      ],
      image: "https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Profesional de nutrición revisando una planificación junto a una paciente",
      caption: "Más suave, más cercana y pensada para el largo plazo.",
    },
  },
};

const defaultNicheTheme: NicheTheme = {
  pageBg: "bg-slate-950",
  hero: "bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.16),transparent_35%)]",
  font: "font-sans",
  title: "font-heading font-black tracking-tight",
  body: "font-normal",
  accent: "text-emerald-200/80",
  accentSoft: "bg-emerald-500/10",
  accentBorder: "border-emerald-400/20",
  accentLine: "bg-gradient-to-r from-emerald-400/60 to-transparent",
  dot: "bg-emerald-400",
  sectionBg: "bg-[#090909]",
  sectionBgAlt: "bg-[#0a0a0a]",
  sectionBgMuted: "bg-[#0b0b0b]",
  surface: "bg-white/[0.03]",
  surfaceStrong: "bg-white/[0.04]",
  ctaFrom: "from-emerald-500",
  ctaTo: "to-green-500",
  ctaPanel: "bg-[linear-gradient(180deg,rgba(16,185,129,0.08),rgba(255,255,255,0.02))]",
  badgeText: "Automatización de WhatsApp",
  image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
  imageAlt: "Consultorio moderno",
  imageCaption: "Una consulta clara, un turno confirmado y menos mensajes manuales.",
};

function NicheLanding({ nicheKey }: { nicheKey: NicheKey }) {
  const content = nicheData[nicheKey];
  const canonicalPath = `/${nicheKey}`;
  const theme: NicheTheme = { ...defaultNicheTheme, ...(content.theme ?? {}) };
  const heroReverse = nicheKey === "abogados" || nicheKey === "inmobiliarias";
  const showcaseReverse = nicheKey === "fonoaudiologos" || nicheKey === "abogados";
  const heroGridClass = heroReverse ? "lg:grid-cols-[0.95fr_1.05fr]" : "lg:grid-cols-[1.05fr_0.95fr]";

  return (
    <>
      <SeoHead title={content.title} description={content.description} canonical={canonicalPath} />
      <main className={`min-h-screen ${theme.pageBg} ${theme.font} text-white`}>
        <section className={`border-b border-white/5 ${theme.hero}`}>
          <div className="container py-16 sm:py-20">
            <div className={`mx-auto grid max-w-6xl gap-10 lg:items-center ${heroGridClass}`}>
              <motion.div
                initial={{ opacity: 0, x: heroReverse ? 20 : -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className={`text-center ${heroReverse ? "lg:order-2 lg:text-left" : "lg:text-left"}`}
              >
                <p className={`text-sm font-semibold uppercase tracking-[0.22em] ${theme.accent}`}>
                  Argentina · {theme.badgeText}
                </p>
                <h1 className={`mt-4 text-4xl sm:text-5xl lg:text-6xl ${theme.title}`}>
                  {content.title}
                </h1>
                <p className={`mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/70 lg:mx-0 ${theme.body}`}>
                  {content.description}
                </p>
                <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
                  <a href="#contacto" className={`inline-flex items-center justify-center rounded-2xl bg-gradient-to-r ${theme.ctaFrom} ${theme.ctaTo} px-6 py-4 text-base font-bold text-white shadow-lg shadow-black/30`}>
                    Solicitar diagnóstico gratuito
                  </a>
                  <a href="#conversacion" className={`inline-flex items-center justify-center rounded-2xl border ${theme.accentBorder} bg-white/5 px-6 py-4 text-base font-semibold text-white/85`}>
                    Ver conversación real
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: heroReverse ? -20 : 20, scale: 0.98 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.08 }}
                className={`overflow-hidden rounded-[2rem] border ${theme.accentBorder} ${theme.surface} shadow-[0_28px_80px_-40px_rgba(14,165,233,0.5)] ${heroReverse ? "lg:order-1" : ""}`}
              >
                <div className="relative aspect-[4/3]">
                  <img
                    src={theme.image}
                    alt={theme.imageAlt}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.08),rgba(2,6,23,0.56))]" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                    <div className={`inline-flex rounded-full border ${theme.accentBorder} ${theme.accentSoft} px-3 py-1 text-xs font-semibold ${theme.accent}`}>
                      {theme.badgeText}
                    </div>
                    <p className="mt-3 max-w-md text-sm leading-6 text-white/85">
                      {theme.imageCaption}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className={`border-t border-white/5 ${theme.sectionBg}`}>
          <div className="container py-16 sm:py-20">
            <div className="grid gap-4 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.5 }}
                className={`rounded-[1.75rem] border ${theme.accentBorder} ${theme.surface} p-6 sm:p-7`}
              >
                <p className={`text-sm font-semibold uppercase tracking-[0.2em] ${theme.accent}`}>
                  Problema principal
                </p>
                <p className="mt-3 text-lg leading-8 text-white/75">
                  {content.problem}
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.5, delay: 0.06 }}
                className={`rounded-[1.75rem] border ${theme.accentBorder} ${theme.surfaceStrong} p-6 sm:p-7`}
              >
                <p className={`text-sm font-semibold uppercase tracking-[0.2em] ${theme.accent}`}>
                  Beneficios de automatizar
                </p>
                <div className="mt-4 space-y-3">
                  {content.benefits.map((benefit) => (
                    <p key={benefit} className="flex items-start gap-3 text-sm leading-7 text-white/70">
                      <span className={`mt-2 h-2 w-2 rounded-full ${theme.dot}`} />
                      {benefit}
                    </p>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {content.showcase ? (
          <section className={`border-t border-white/5 ${theme.sectionBgAlt}`}>
            <div className="container py-16 sm:py-20">
              <div
                className={`grid gap-8 lg:items-center ${
                  showcaseReverse ? "lg:grid-cols-[0.95fr_1.05fr]" : "lg:grid-cols-[1.05fr_0.95fr]"
                }`}
              >
                <div className={showcaseReverse ? "lg:order-2" : ""}>
                  <p className={`text-sm font-semibold uppercase tracking-[0.2em] ${theme.accent}`}>
                    {content.showcase.eyebrow}
                  </p>
                  <h2 className={`mt-3 text-3xl sm:text-4xl ${theme.title}`}>
                    {content.showcase.title}
                  </h2>
                  <p className={`mt-4 max-w-xl text-base leading-8 text-white/65 ${theme.body}`}>
                    {content.showcase.description}
                  </p>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {content.showcase.bullets.map((bullet) => (
                      <div key={bullet} className={`rounded-2xl border ${theme.accentBorder} ${theme.surface} px-4 py-3 text-sm leading-6 text-white/80`}>
                        {bullet}
                      </div>
                    ))}
                  </div>
                </div>

                <div className={`overflow-hidden rounded-[2rem] border ${theme.accentBorder} ${theme.surface} shadow-[0_24px_80px_-36px_rgba(0,0,0,0.6)]`}>
                  <div className="relative aspect-[4/3]">
                    <img
                      src={content.showcase.image}
                      alt={content.showcase.imageAlt}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.05),rgba(2,6,23,0.58))]" />
                    <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                      <div className={`inline-flex rounded-full border ${theme.accentBorder} ${theme.accentSoft} px-3 py-1 text-xs font-semibold ${theme.accent}`}>
                        {content.showcase.caption}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : null}

        {nicheKey === "odontologos" && (
          <section className="border-t border-white/5 bg-[#0a0f16]">
            <div className="container py-16 sm:py-20">
              <div className="mb-10 max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-200/80">
                  Servicios que suele atender el consultorio
                </p>
                <h2 className="font-heading mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                  Automatización pensada para la operación diaria de una clínica dental
                </h2>
                <div className="mt-5 h-px w-24 bg-gradient-to-r from-sky-400/60 to-transparent" />
              </div>

              <div className="grid gap-4 lg:grid-cols-3">
                {[
                  {
                    title: "Primera consulta",
                    text: "Responde motivo de consulta, cobertura, ubicación y disponibilidad sin que alguien tenga que estar mirando WhatsApp todo el tiempo.",
                  },
                  {
                    title: "Turnos y recordatorios",
                    text: "Confirma la cita, reenvía la dirección y manda un aviso previo para bajar ausencias y reprogramaciones de último momento.",
                  },
                  {
                    title: "Seguimiento posterior",
                    text: "Después del tratamiento, mantiene el vínculo con controles, indicaciones y nuevas consultas sin dejar chats pendientes.",
                  },
                ].map((item) => (
                  <article
                    key={item.title}
                    className="rounded-[1.75rem] border border-sky-400/15 bg-white/[0.035] p-6 sm:p-7"
                  >
                    <p className={`text-sm font-semibold uppercase tracking-[0.18em] ${theme.accent}`}>
                      {item.title}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-white/65">{item.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {nicheKey === "odontologos" && (
          <section className="border-t border-white/5 bg-[#08131c]">
            <div className="container py-16 sm:py-20">
              <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-200/80">
                    Caso real de uso
                  </p>
                  <h2 className={`mt-3 text-3xl sm:text-4xl ${theme.title}`}>
                    Una paciente escribe, el sistema responde y el turno queda confirmado
                  </h2>
                  <p className={`mt-4 max-w-xl text-base leading-8 text-white/65 ${theme.body}`}>
                    Así se ve un flujo más creíble para odontología: la consulta entra desde WhatsApp, la respuesta es inmediata y la agenda queda ordenada sin ir y venir de mensajes.
                  </p>
                </div>

                <div className="overflow-hidden rounded-[2rem] border border-sky-400/15 bg-white/[0.03] shadow-[0_24px_80px_-36px_rgba(14,165,233,0.32)]">
                  <div className="grid gap-0 md:grid-cols-[0.9fr_1.1fr]">
                    <div className="relative min-h-[240px]">
                      <img
                        src="https://images.unsplash.com/photo-1622737133809-d95047b9e673?auto=format&fit=crop&w=900&q=80"
                        alt="Consultorio odontológico con recepción y pantalla de agenda"
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.02),rgba(2,6,23,0.5))]" />
                    </div>
                    <div className="space-y-3 p-5 sm:p-6">
                      <div className="rounded-2xl border border-white/5 bg-white/10 px-4 py-3 text-sm leading-6 text-white/90">
                        Hola, ¿hacen limpieza dental y tienen turno para esta semana?
                      </div>
                      <div className="rounded-2xl border border-sky-400/20 bg-sky-500/10 px-4 py-3 text-sm leading-6 text-white/90">
                        Sí, claro. Te paso horarios disponibles y te confirmo el que te quede mejor.
                      </div>
                      <div className="rounded-2xl border border-sky-400/20 bg-sky-500/10 px-4 py-3 text-sm leading-6 text-white/90">
                        Perfecto, te quedó el jueves a las 16:00. También te llega recordatorio automático.
                      </div>
                      <div className="rounded-2xl border border-white/5 bg-white/10 px-4 py-3 text-sm leading-6 text-white/90">
                        Genial, me resolvieron todo por WhatsApp.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {nicheKey === "medicos" && (
          <section className="border-t border-white/5 bg-[#08101c]">
            <div className="container py-16 sm:py-20">
              <div className="grid gap-6 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-200/80">
                    Flujo clínico
                  </p>
                  <h2 className={`mt-3 text-3xl sm:text-4xl ${theme.title}`}>
                    Menos caos en recepción, más orden en cada consulta
                  </h2>
                  <p className={`mt-4 max-w-xl text-base leading-8 text-white/65 ${theme.body}`}>
                    La agenda médica suele mezclar consultas, estudios y derivaciones. Esta vista le da prioridad a la velocidad y a la claridad operativa.
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  {[
                    {
                      title: "Triage",
                      text: "El sistema identifica el motivo de consulta y deriva sin frenar la atención.",
                    },
                    {
                      title: "Agenda",
                      text: "La coordinación de turnos se vuelve más simple y con menos intercambio de mensajes.",
                    },
                    {
                      title: "Seguimiento",
                      text: "Recordatorios y confirmaciones ayudan a sostener continuidad y menos ausencias.",
                    },
                  ].map((item) => (
                    <article key={item.title} className="rounded-[1.5rem] border border-indigo-400/15 bg-white/[0.03] p-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-200/80">{item.title}</p>
                      <p className="mt-3 text-sm leading-7 text-white/65">{item.text}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {nicheKey === "abogados" && (
          <section className="border-t border-white/5 bg-[#120b08]">
            <div className="container py-16 sm:py-20">
              <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                <div className="rounded-[2rem] border border-amber-400/15 bg-white/[0.03] p-6 sm:p-7">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-200/80">
                    Intake jurídico
                  </p>
                  <h2 className={`mt-3 text-3xl sm:text-4xl ${theme.title}`}>
                    Una primera impresión más seria para cada consulta
                  </h2>
                  <p className={`mt-4 max-w-xl text-base leading-8 text-white/65 ${theme.body}`}>
                    El objetivo no es vender más texto, sino mostrar orden, criterio y confianza desde el primer contacto con el estudio.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    {
                      title: "Filtro",
                      text: "Clasifica el tipo de caso antes de agendar una entrevista.",
                    },
                    {
                      title: "Confianza",
                      text: "El tono visual transmite seriedad y cercanía profesional.",
                    },
                    {
                      title: "Seguimiento",
                      text: "Menos consultas perdidas y más prospectos bien atendidos.",
                    },
                    {
                      title: "Orden",
                      text: "La recepción trabaja con un flujo más claro y menos ida y vuelta.",
                    },
                  ].map((item) => (
                    <article key={item.title} className="rounded-[1.5rem] border border-amber-400/15 bg-white/[0.025] p-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">{item.title}</p>
                      <p className="mt-3 text-sm leading-7 text-white/65">{item.text}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        <section id="conversacion" className={`border-t border-white/5 ${theme.sectionBgMuted}`}>
          <div className="container py-16 sm:py-20">
            <div className={`mx-auto max-w-3xl rounded-[2rem] border ${theme.accentBorder} ${theme.surfaceStrong} p-6 shadow-[0_24px_80px_-32px_rgba(0,0,0,0.9)] sm:p-8`}>
              <div className="mb-6">
                <p className={`text-sm font-semibold uppercase tracking-[0.2em] ${theme.accent}`}>
                  Ejemplo real de conversación
                </p>
                <h2 className="font-heading mt-3 text-3xl font-black tracking-tight">Cómo se ve una consulta automatizada</h2>
              </div>
              <div className="space-y-4">
                <div className="rounded-2xl border border-white/5 bg-white/10 px-4 py-3 text-sm leading-6 text-white/90">
                  {content.conversation.client}
                </div>
                <div className={`rounded-2xl border ${theme.accentBorder} ${theme.accentSoft} px-4 py-3 text-sm leading-6 text-white/90`}>
                  {content.conversation.assistant}
                </div>
                <div className={`rounded-2xl border ${theme.accentBorder} ${theme.accentSoft} px-4 py-3 text-sm leading-6 text-white/90`}>
                  {content.conversation.followUp}
                </div>
                <div className="rounded-2xl border border-white/5 bg-white/10 px-4 py-3 text-sm leading-6 text-white/90">
                  {content.conversation.close}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={`border-t border-white/5 ${theme.sectionBg}`}>
          <div className="container py-16 sm:py-20">
            <div className={`mx-auto max-w-4xl rounded-[2rem] border ${theme.accentBorder} ${theme.ctaPanel} p-6 text-center shadow-[0_20px_60px_-36px_rgba(14,165,233,0.35)] sm:p-8`}>
              <p className={`text-sm font-semibold uppercase tracking-[0.2em] ${theme.accent}`}>
                Diagnóstico gratuito
              </p>
              <h2 className="font-heading mt-3 text-3xl font-black tracking-tight">Quiero mi diagnóstico gratuito</h2>
              <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-white/65">
                Analizamos cómo llegar más rápido a tus consultas, cómo ordenar tu agenda y qué automatizar para vender mejor en Argentina.
              </p>
              <a href="/#contacto" className={`mt-6 inline-flex items-center justify-center rounded-2xl bg-gradient-to-r ${theme.ctaFrom} ${theme.ctaTo} px-6 py-4 text-base font-bold text-white`}>
                Solicitar diagnóstico gratuito
              </a>
            </div>
          </div>
        </section>

        {nicheKey !== "medicos" && nicheKey !== "abogados" ? (
          <section className={`border-t border-white/5 ${theme.sectionBgAlt}`}>
            <div className="container py-16 sm:py-20">
              <div className="mb-10 max-w-2xl">
                <p className={`text-sm font-semibold uppercase tracking-[0.2em] ${theme.accent}`}>
                  Landings SEO
                </p>
                <h2 className="font-heading mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                  Páginas específicas por rubro para captar búsquedas con intención
                </h2>
                <div className={`mt-5 h-px w-24 ${theme.accentLine}`} />
              </div>

              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {[
                  { href: "/odontologos", label: "Odontólogos", text: "Automatización de WhatsApp para clínicas dentales." },
                  { href: "/medicos", label: "Médicos", text: "Turnos, consultas y seguimiento para consultorios." },
                  { href: "/fonoaudiologos", label: "Fonoaudiólogos", text: "Respuestas automáticas y agenda de sesiones." },
                  { href: "/nutricionistas", label: "Nutricionistas", text: "Seguimiento, consultas y recordatorios de control." },
                  { href: "/abogados", label: "Abogados", text: "Filtrado de consultas y primer contacto profesional." },
                  { href: "/inmobiliarias", label: "Inmobiliarias", text: "Más consultas atendidas y visitas agendadas." },
                ].map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`group rounded-[1.75rem] border ${theme.accentBorder} ${theme.surface} p-6 transition-all duration-300 hover:bg-white/[0.05] sm:p-7`}
                  >
                    <p className={`text-sm font-semibold uppercase tracking-[0.18em] ${theme.accent}`}>
                      {item.label}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-white/60">{item.text}</p>
                    <div className={`mt-5 inline-flex items-center gap-2 text-sm font-semibold ${theme.accent} transition-transform group-hover:translate-x-1`}>
                      Ver landing
                      <span aria-hidden="true">→</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>
        ) : null}
      </main>
    </>
  );
}

function WhatsAppAutomationLanding() {
  const [nombre, setNombre] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const homeTheme = {
    accentBorder: "border-emerald-400/20",
    accentSoft: "bg-emerald-500/10",
    accent: "text-emerald-200",
  };

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");
    setMessage("");

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre: nombre.trim(),
          whatsapp: whatsapp.trim(),
          origen: "landing_principal",
        }),
      });

      if (!response.ok) {
        throw new Error("No pudimos enviar tu solicitud.");
      }

      setMessage("Listo. Recibimos tu solicitud y te contactaremos pronto para coordinar la demo.");
      setNombre("");
      setWhatsapp("");
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : "Ocurrió un error inesperado.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <SeoHead
        title="Automatización de WhatsApp y turnos"
        description="Automatizá WhatsApp con IA, captá leads desde landing pages y conectá integraciones para responder, agendar y hacer seguimiento 24/7."
      />
      <Toaster position="top-right" />

      <main className="min-h-screen bg-slate-950 text-white">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.18),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(34,197,94,0.14),transparent_30%),radial-gradient(circle_at_left,rgba(14,165,233,0.08),transparent_28%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.25),rgba(2,6,23,0.55))]" />
          <header className="relative z-20 border-b border-white/5 bg-slate-950/70 backdrop-blur-2xl">
            <div className="container">
              <div className="flex h-18 items-center justify-between gap-3 py-3 sm:h-20 sm:gap-4 sm:py-0">
                <a href="#top" className="inline-flex items-center gap-3">
                  <div className="relative grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-600 shadow-[0_0_30px_-18px_rgba(16,185,129,0.8)]">
                    <span className="text-[10px] font-black tracking-[0.16em] text-white">WA</span>
                    <span className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-emerald-300 ring-2 ring-slate-950" />
                  </div>
                  <div className="leading-none">
                    <span className="font-heading text-lg font-extrabold tracking-tight text-white">
                      WebAppImpulsor
                    </span>
                    <span className="mt-0.5 block text-[9px] font-semibold uppercase tracking-[0.18em] text-white/45">
                      Automatización con IA
                    </span>
                  </div>
                </a>

                <nav className="hidden items-center gap-6 text-sm text-white/60 md:flex xl:gap-8">
                  <a href="#como-funciona" className="transition hover:text-white">
                    Cómo funciona
                  </a>
                  <a href="#casos-de-uso" className="transition hover:text-white">
                    Casos de uso
                  </a>
                  <a href="#faq" className="transition hover:text-white">
                    FAQ
                  </a>
                </nav>

                <div className="hidden items-center gap-2.5 md:flex">
                  <a
                    href="#contacto"
                    className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-green-500 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-emerald-500/20 transition hover:translate-y-[-1px] hover:shadow-emerald-500/30"
                  >
                    Solicitar diagnóstico
                  </a>
                </div>

                <button
                  aria-label="Abrir menú"
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-white md:hidden"
                  onClick={() => setMenuOpen((value) => !value)}
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    {menuOpen ? (
                      <path d="M6 6l12 12M18 6L6 18" />
                    ) : (
                      <>
                        <path d="M4 7h16" />
                        <path d="M4 12h16" />
                        <path d="M4 17h16" />
                      </>
                    )}
                  </svg>
                </button>
              </div>

              <div
                className={`overflow-hidden border-t border-white/5 md:hidden ${
                  menuOpen ? "max-h-64 pb-4 opacity-100" : "max-h-0 opacity-0"
                } transition-all duration-300`}
              >
                <div className="flex flex-col gap-2 pt-4 text-sm text-white/70">
                  <a href="#como-funciona" onClick={() => setMenuOpen(false)} className="rounded-2xl border border-white/5 bg-white/[0.03] px-4 py-3">
                    Cómo funciona
                  </a>
                  <a href="#casos-de-uso" onClick={() => setMenuOpen(false)} className="rounded-2xl border border-white/5 bg-white/[0.03] px-4 py-3">
                    Casos de uso
                  </a>
                  <a href="#faq" onClick={() => setMenuOpen(false)} className="rounded-2xl border border-white/5 bg-white/[0.03] px-4 py-3">
                    FAQ
                  </a>
                  <a
                    href="#contacto"
                    onClick={() => setMenuOpen(false)}
                    className="mt-1 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-green-500 px-4 py-3 font-bold text-white"
                  >
                    Solicitar diagnóstico
                  </a>
                </div>
              </div>
            </div>
          </header>

          <div className="container relative z-10 flex min-h-[calc(100vh-5rem)] items-center py-16 sm:py-20">
            <div className="grid w-full gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="space-y-8 pt-2"
              >
                <div className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-300/15 bg-emerald-500/10 px-4 py-2 text-[11px] font-semibold tracking-[0.22em] text-emerald-200 uppercase shadow-[0_0_0_1px_rgba(16,185,129,0.04)]">
                  MVP de automatización de WhatsApp
                </div>

                <div className="space-y-6">
                  <h1 className="font-heading max-w-3xl text-balance text-5xl font-black leading-[0.95] tracking-[-0.05em] sm:text-6xl lg:text-[4.6rem]">
                    Automatizá WhatsApp y conseguí más clientes sin trabajar más horas
                  </h1>
                  <p className="max-w-2xl text-lg leading-8 text-white/68 sm:text-xl">
                    Implementamos asistentes automáticos para profesionales y negocios de servicios que responden consultas, gestionan turnos y hacen seguimiento de clientes 24/7.
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#contacto"
                    className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-green-500 px-6 py-4 text-base font-bold text-white shadow-lg shadow-emerald-500/25 transition hover:translate-y-[-1px] hover:shadow-emerald-500/35"
                  >
                    Solicitar diagnóstico gratuito
                  </a>
                  <a
                    href="#como-funciona"
                    className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-4 text-base font-semibold text-white/85 transition hover:border-white/15 hover:bg-white/10"
                  >
                    Ver demostración
                  </a>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  {["Respuesta inmediata", "Turnos confirmados", "Seguimiento automático"].map((item) => (
                    <div key={item} className="ds-card-soft px-4 py-3 text-sm font-medium text-white/75">
                      {item}
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-2 text-sm text-white/55">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_0_6px_rgba(16,185,129,0.12)]" />
                    Respuesta en menos de 10 segundos
                  </div>
                  <div className="hidden h-5 w-px bg-white/10 sm:block" />
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_0_6px_rgba(34,211,238,0.12)]" />
                    Turnos, presupuestos y seguimiento
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 28, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.08 }}
                className="relative lg:sticky lg:top-8"
              >
                <WhatsAppDemo
                  title="WebAppImpulsor"
                  subtitle="en línea · respuesta automática"
                  accentLabel="DEMO EN VIVO"
                  messages={heroWhatsAppMessages}
                />

                <form onSubmit={handleSubmit} className="mt-5 space-y-4 rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 shadow-[0_24px_80px_-36px_rgba(0,0,0,0.45)] backdrop-blur-xl" id="contacto">
                  <label className="block space-y-2">
                    <span className="text-sm font-medium text-white/80">Nombre</span>
                    <input
                      type="text"
                      value={nombre}
                      onChange={(event) => setNombre(event.target.value)}
                      placeholder="Tu nombre completo"
                      className="w-full rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-4 text-white outline-none transition placeholder:text-white/30 focus:border-emerald-400/60 focus:ring-2 focus:ring-emerald-400/20"
                      required
                    />
                  </label>

                  <label className="block space-y-2">
                    <span className="text-sm font-medium text-white/80">WhatsApp</span>
                    <input
                      type="tel"
                      value={whatsapp}
                      onChange={(event) => setWhatsapp(event.target.value)}
                      placeholder="+54 11 1234 5678"
                      className="w-full rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-4 text-white outline-none transition placeholder:text-white/30 focus:border-emerald-400/60 focus:ring-2 focus:ring-emerald-400/20"
                      required
                    />
                    <span className="text-xs text-white/45">Inclu� el c�digo de pa�s y tu caracter�stica de �rea.</span>
                  </label>

                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex w-full items-center justify-center rounded-2xl bg-gradient-to-r from-emerald-500 to-green-500 px-5 py-4 text-base font-bold text-white shadow-lg shadow-emerald-500/25 transition hover:scale-[1.01] hover:shadow-emerald-500/35 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {loading ? "Enviando..." : "Solicit� una Demo Gratuita"}
                  </button>

                  {message ? (
                    <p className="rounded-2xl border border-emerald-400/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200">
                      {message}
                    </p>
                  ) : null}

                  {error ? (
                    <p className="rounded-2xl border border-rose-400/20 bg-rose-500/10 px-4 py-3 text-sm text-rose-200">
                      {error}
                    </p>
                  ) : null}

                  <p className="text-xs leading-5 text-white/45">
                    Sin spam. Solo usamos tus datos para coordinar el diagn�stico de automatizaci�n.
                  </p>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="border-t border-white/5 bg-[#090909]">
          <div className="container py-20 sm:py-24">
            <div className="mb-10 max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/40">
                Ver una conversación real
              </p>
              <h2 className="font-heading mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                Así se ve una atención automática en WhatsApp con IA
              </h2>
              <div className="mt-5 h-px w-24 bg-gradient-to-r from-emerald-400/60 to-transparent" />
            </div>

            <div className="mx-auto max-w-3xl">
              <div className="overflow-hidden rounded-[2.25rem] border border-white/10 bg-[#111111] shadow-[0_24px_80px_-32px_rgba(0,0,0,0.9)]">
                <div className="flex items-center gap-3 border-b border-white/5 bg-[#111827] px-5 py-4">
                  <div className="relative flex h-11 w-11 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-300">
                    <span className="text-sm font-black">WA</span>
                    <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-[#111827] bg-emerald-400" />
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-white">Asistente de WhatsApp</p>
                    <p className="text-xs text-emerald-300/80">en línea ahora · respuesta automática</p>
                  </div>
                  <div className="ml-auto flex items-center gap-2 text-white/30">
                    <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
                  </div>
                </div>

                <div className="bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.08),transparent_40%)] p-4 sm:p-6">
                  <div className="space-y-4">
                    <div className="flex justify-start animate-[fadeUp_.6s_ease-out_both] [animation-delay:0ms]">
                      <div className="flex max-w-[85%] gap-3 sm:max-w-[72%]">
                        <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-[10px] font-bold text-white/70">
                          CL
                        </div>
                        <div className="space-y-1">
                          <div className="rounded-[1.25rem] rounded-bl-md border border-white/5 bg-white/10 px-4 py-3 text-sm leading-6 text-white/90">
                            Hola, vi su landing y quiero saber si tienen turnos para esta semana.
                          </div>
                          <div className="px-1 text-[11px] text-white/35">10:41</div>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-end animate-[fadeUp_.6s_ease-out_both] [animation-delay:140ms]">
                      <div className="flex max-w-[85%] gap-3 sm:max-w-[72%]">
                        <div className="space-y-1 text-right">
                          <div className="rounded-[1.25rem] rounded-br-md border border-emerald-400/20 bg-emerald-500/15 px-4 py-3 text-sm leading-6 text-white/90">
                            ¡Hola! Sí, claro. Te comparto los turnos disponibles y te ayudo a reservar el que mejor te quede.
                          </div>
                          <div className="flex items-center justify-end gap-1 px-1 text-[11px] text-emerald-200/60">
                            <span>10:41</span>
                            <span>•</span>
                            <span className="inline-flex items-center gap-1">
                              <span>✓</span>
                              <span>✓</span>
                            </span>
                          </div>
                        </div>
                        <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-[10px] font-bold text-emerald-200">
                          WA
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-end animate-[fadeUp_.6s_ease-out_both] [animation-delay:280ms]">
                      <div className="flex max-w-[85%] gap-3 sm:max-w-[72%]">
                        <div className="space-y-1 text-right">
                          <div className="rounded-[1.25rem] rounded-br-md border border-emerald-400/20 bg-emerald-500/15 px-4 py-3 text-sm leading-6 text-white/90">
                            Tengo disponibles el martes 10:00, miércoles 14:30 y viernes 18:00. ¿Cuál preferís?
                          </div>
                          <div className="px-1 text-[11px] text-emerald-200/60">10:42</div>
                        </div>
                        <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-[10px] font-bold text-emerald-200">
                          WA
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-start animate-[fadeUp_.6s_ease-out_both] [animation-delay:420ms]">
                      <div className="flex max-w-[85%] gap-3 sm:max-w-[72%]">
                        <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-[10px] font-bold text-white/70">
                          CL
                        </div>
                        <div className="space-y-1">
                          <div className="rounded-[1.25rem] rounded-bl-md border border-white/5 bg-white/10 px-4 py-3 text-sm leading-6 text-white/90">
                            El miércoles a las 14:30 me sirve.
                          </div>
                          <div className="px-1 text-[11px] text-white/35">10:42</div>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-end animate-[fadeUp_.6s_ease-out_both] [animation-delay:560ms]">
                      <div className="flex max-w-[85%] gap-3 sm:max-w-[72%]">
                        <div className="space-y-1 text-right">
                          <div className="rounded-[1.25rem] rounded-br-md border border-emerald-400/20 bg-emerald-500/15 px-4 py-3 text-sm leading-6 text-white/90">
                            Perfecto. Ya te lo dejé reservado para el miércoles a las 14:30 y te envío un recordatorio antes del turno.
                          </div>
                          <div className="flex items-center justify-end gap-1 px-1 text-[11px] text-emerald-200/60">
                            <span>10:42</span>
                            <span>•</span>
                            <span className="inline-flex items-center gap-1">
                              <span>✓</span>
                              <span>✓</span>
                            </span>
                          </div>
                        </div>
                        <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-[10px] font-bold text-emerald-200">
                          WA
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-end animate-[fadeUp_.6s_ease-out_both] [animation-delay:700ms]">
                      <div className="inline-flex items-center gap-3 rounded-[1.25rem] rounded-br-md border border-emerald-400/20 bg-emerald-500/15 px-4 py-3 text-sm leading-6 text-white/90">
                        <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400 text-[11px] font-black text-slate-950">
                          ✓
                        </span>
                        <span>
                          Confirmación enviada
                          <span className="ml-2 text-white/45">· calendario actualizado</span>
                        </span>
                      </div>
                    </div>

                    <div className="flex justify-start animate-[fadeUp_.6s_ease-out_both] [animation-delay:840ms]">
                      <div className="flex max-w-[85%] gap-3 sm:max-w-[72%]">
                        <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-[10px] font-bold text-white/70">
                          CL
                        </div>
                        <div className="space-y-1">
                          <div className="rounded-[1.25rem] rounded-bl-md border border-white/5 bg-white/10 px-4 py-3 text-sm leading-6 text-white/90">
                            Genial, así no tengo que estar pendiente de responder yo mismo.
                          </div>
                          <div className="px-1 text-[11px] text-white/35">10:42</div>
                        </div>
                      </div>
                    </div>
                  </div>

                <div className="mt-6 border-t border-white/5 pt-4">
                  <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/35">
                      <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_16px_rgba(52,211,153,0.8)]" />
                      Escribí tu consulta y el sistema responde por vos
                      <span className="ml-auto flex items-center gap-1">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white/35 [animation-delay:0ms]" />
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white/35 [animation-delay:180ms]" />
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white/35 [animation-delay:360ms]" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
                <div className="ds-card p-6 sm:p-7">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/40">
                    Prueba social
                  </p>
                  <p className="mt-3 text-lg font-bold text-white">
                    "Pasamos de responder tarde a confirmar turnos incluso fuera del horario de atencion."
                  </p>
                  <p className="mt-3 text-sm leading-7 text-white/60">
                    Ideal para profesionales que quieren menos friccion en el primer contacto, mas turnos confirmados y seguimiento automatico sin depender de estar mirando el celular todo el dia.
                  </p>
                </div>

                <div className={`ds-card ${homeTheme.accentBorder} bg-white/[0.04] p-6 sm:p-7`}>
                  <p className={`text-sm font-semibold uppercase tracking-[0.2em] ${homeTheme.accent}`}>
                    Resultado esperado
                  </p>
                  <div className="mt-4 space-y-3 text-sm leading-7 text-white/70">
                    <p className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-sky-400" />
                      Primera respuesta inmediata, aunque el negocio este cerrado.
                    </p>
                    <p className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-sky-400" />
                      Reserva de turnos con confirmacion clara y seguimiento posterior.
                    </p>
                    <p className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-sky-400" />
                      Menos mensajes repetidos y mas tiempo para atender de verdad.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="casos-de-uso" className="border-t border-white/5 bg-[#0a0a0a]">
          <div className="container py-20 sm:py-24">
            <div className="mb-10 max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/40">
                Casos de uso
              </p>
              <h2 className="font-heading mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                Cada rubro tiene un problema distinto
              </h2>
              <div className="mt-5 h-px w-24 bg-gradient-to-r from-emerald-400/60 to-transparent" />
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {[
                {
                  label: "Odontólogos",
                  problem: "Consultas por turnos, urgencias y mensajes que llegan fuera de horario.",
                  result: "Respuestas automáticas y confirmación de turnos sin fricción.",
                  href: "/odontologos",
                  accent: "from-cyan-500/20 to-sky-500/10",
                },
                {
                  label: "Médicos",
                  problem: "Consultas dispersas entre WhatsApp, llamados y agenda manual.",
                  result: "Primer contacto claro, turnos simples y seguimiento automático.",
                  href: "/medicos",
                  accent: "from-violet-500/20 to-fuchsia-500/10",
                },
                {
                  label: "Fonoaudiólogos",
                  problem: "Consultas repetidas sobre horarios, modalidad y duración de las sesiones.",
                  result: "Respuestas frecuentes automatizadas y agenda más ordenada.",
                  href: "/fonoaudiologos",
                  accent: "from-lime-500/20 to-emerald-500/10",
                },
                {
                  label: "Abogados",
                  problem: "Consultas legales que requieren una primera respuesta profesional y rápida.",
                  result: "Filtrado inicial, contacto ordenado y seguimiento de prospectos.",
                  href: "/abogados",
                  accent: "from-blue-500/20 to-cyan-500/10",
                },
                {
                  label: "Inmobiliarias",
                  problem: "Consultas de propiedades que se enfrían si no respondés rápido.",
                  result: "Más visitas agendadas y seguimiento automático de interesados.",
                  href: "/inmobiliarias",
                  accent: "from-pink-500/20 to-rose-500/10",
                },
              ].map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="group block ds-card p-6 transition-all duration-300 hover:border-white/15 hover:bg-white/[0.05] sm:p-7"
                >
                  <div className={`mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br ${item.accent} text-sm font-bold text-white/80 transition-transform duration-300 group-hover:scale-105`}>
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <h3 className="text-xl font-bold tracking-tight">{item.label}</h3>
                  <div className="mt-4 space-y-3">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/35">
                        Problema principal
                      </p>
                      <p className="mt-1 text-sm leading-7 text-white/60">{item.problem}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/35">
                        Resultado esperado
                      </p>
                      <p className="mt-1 text-sm leading-7 text-white/60">{item.result}</p>
                    </div>
                  </div>
                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-emerald-200 transition-transform group-hover:translate-x-1">
                    Ver solución
                    <span aria-hidden="true">→</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-white/5 bg-[#0a0a0a]">
          <div className="container py-20 sm:py-24">
            <div className="mb-10 max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/40">
                Problema vs solución
              </p>
              <h2 className="font-heading mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                De responder tarde a atender 24/7
              </h2>
              <div className="mt-5 h-px w-24 bg-gradient-to-r from-emerald-400/60 to-transparent" />
            </div>

            <div className="grid gap-4 lg:grid-cols-2">
              <div className="ds-card border-rose-500/15 bg-rose-500/[0.04] p-6 sm:p-7">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-rose-400/20 bg-rose-500/10 px-3 py-1.5 text-sm font-semibold text-rose-200">
                  <span className="inline-flex h-2.5 w-2.5 rounded-full bg-rose-400" />
                  Problemas actuales del negocio
                </div>

                <div className="space-y-4">
                  {[
                    {
                      icon: "✕",
                      title: "Consultas que se enfrían",
                      text: "La persona escribe, espera y termina comprándole a quien responde primero.",
                    },
                    {
                      icon: "✕",
                      title: "Tiempo perdido repitiendo lo mismo",
                      text: "Precios, horarios, ubicación y disponibilidad una y otra vez por WhatsApp.",
                    },
                    {
                      icon: "✕",
                      title: "Seguimiento manual y desordenado",
                      text: "Chats olvidados, turnos sin confirmar y ventas que se caen antes de cerrar.",
                    },
                  ].map((item) => (
                    <article key={item.title} className="flex gap-4 rounded-2xl border border-white/5 bg-black/20 p-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-rose-400/20 bg-rose-500/10 text-sm font-black text-rose-200">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-base font-bold">{item.title}</h3>
                        <p className="mt-1 text-sm leading-6 text-white/60">{item.text}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              <div className={`ds-card ${homeTheme.accentBorder} bg-white/[0.04] p-6 sm:p-7`}>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1.5 text-sm font-semibold text-emerald-200">
                  <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  Resultados con automatización
                </div>

                <div className="space-y-4">
                  {[
                    {
                      icon: "✓",
                      title: "Respuestas inmediatas",
                      text: "Cada consulta recibe atención al instante, incluso fuera de horario.",
                    },
                    {
                      icon: "✓",
                      title: "Agenda y presupuestos automáticos",
                      text: "El sistema responde, propone turnos y envía presupuestos sin fricción.",
                    },
                    {
                      icon: "✓",
                      title: "Seguimiento que no se olvida",
                      text: "Recordatorios y seguimiento para cerrar más citas con menos esfuerzo.",
                    },
                  ].map((item) => (
                    <article key={item.title} className="flex gap-4 rounded-2xl border border-white/5 bg-black/20 p-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-500/10 text-sm font-black text-emerald-200">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-base font-bold">{item.title}</h3>
                        <p className="mt-1 text-sm leading-6 text-white/60">{item.text}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-white/5 bg-[#090909]">
          <div className="container py-20 sm:py-24">
            <div className="mb-10 max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/40">
                Testimonios
              </p>
              <h2 className="font-heading mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                Casos reales de automatización que liberan tiempo y venden más
              </h2>
              <div className="mt-5 h-px w-24 bg-gradient-to-r from-cyan-400/60 to-transparent" />
            </div>

            <div className="grid gap-4 lg:grid-cols-3">
              {[
                {
                  name: "Dra. Lucía Ferreyra",
                  role: "Odontóloga",
                  problem: "Respondía consultas manualmente después de cada turno y perdía pacientes por demora.",
                  result: "Con la automatización, los mensajes entran, se responden y los turnos quedan preconfirmados sin perseguir cada chat.",
                  initials: "LF",
                  accent: "from-cyan-500/20 to-sky-500/10",
                },
                {
                  name: "Martín Rivas",
                  role: "Nutricionista",
                  problem: "Gastaba demasiado tiempo repitiendo horarios, precios y seguimiento de controles por WhatsApp.",
                  result: "Ahora recibe consultas, agenda controles y envía recordatorios automáticos sin tener que responder lo mismo todo el día.",
                  initials: "MR",
                  accent: "from-emerald-500/20 to-green-500/10",
                },
                {
                  name: "Sofía Castro",
                  role: "Centro de estética",
                  problem: "Las reservas y reprogramaciones se le mezclaban con mensajes de interés que se enfriaban rápido.",
                  result: "Con el flujo automatizado, cada consulta recibe respuesta inmediata y los turnos quedan más ordenados y confirmados.",
                  initials: "SC",
                  accent: "from-pink-500/20 to-rose-500/10",
                },
              ].map((item) => (
                <article
                  key={item.name}
                  className="ds-card p-6 sm:p-7"
                >
                  <div className="flex items-start gap-4">
                    <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br ${item.accent} text-sm font-black text-white/80`}>
                      {item.initials}
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-lg font-bold tracking-tight">{item.name}</h3>
                      <p className="text-sm text-emerald-200/80">{item.role}</p>
                    </div>
                  </div>

                  <div className="mt-5 space-y-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/35">
                        Problema
                      </p>
                      <p className="mt-1 text-sm leading-7 text-white/60">{item.problem}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/35">
                        Resultado obtenido
                      </p>
                      <p className="mt-1 text-sm leading-7 text-white/60">{item.result}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="como-funciona" className="border-t border-white/5 bg-[#0a0a0a]">
          <div className="container py-20 sm:py-24">
            <div className="mb-10 max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/40">
                Cómo funciona
              </p>
              <h2 className="font-heading mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                Un proceso simple para automatizar sin incertidumbre
              </h2>
              <div className="mt-5 h-px w-24 bg-gradient-to-r from-cyan-400/60 to-transparent" />
            </div>

            <div className="grid gap-4 lg:grid-cols-4">
              {[
                {
                  step: "01",
                  icon: "?",
                  title: "Diagnóstico",
                  description: "Revisamos tu flujo actual y detectamos dónde se pierden consultas y turnos.",
                },
                {
                  step: "02",
                  icon: "⚙",
                  title: "Configuración",
                  description: "Armamos mensajes, reglas y conexiones según tu negocio.",
                },
                {
                  step: "03",
                  icon: "⚡",
                  title: "Automatización",
                  description: "El asistente responde, agenda y hace seguimiento por WhatsApp.",
                },
                {
                  step: "04",
                  icon: "→",
                  title: "Puesta en marcha",
                  description: "Lo dejamos funcionando y listo para recibir consultas reales.",
                },
              ].map((item) => (
                <article
                  key={item.step}
                  className="relative ds-card p-6 transition-all duration-300 hover:border-white/15 hover:bg-white/[0.05] sm:p-7"
                >
                  {item.step !== "04" ? (
                    <div className="absolute right-[-0.75rem] top-10 hidden h-px w-4 bg-gradient-to-r from-emerald-400/60 to-transparent lg:block" />
                  ) : null}
                  <div className="mb-6 flex items-center gap-3">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-500/10 text-sm font-bold text-emerald-200 shadow-[0_0_24px_-12px_rgba(52,211,153,0.8)]">
                      {item.icon}
                    </div>
                    <div className="h-px flex-1 bg-white/10" />
                    <span className="text-xs font-semibold tracking-[0.2em] text-white/35">
                      {item.step}
                    </span>
                  </div>
                  <div className="mb-5 h-px w-full bg-white/5 lg:hidden" />
                  <h3 className="text-xl font-bold tracking-tight">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/60">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <footer className="border-t border-white/5 bg-[#05070d]">
          <div className="container py-16 sm:py-20">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.95fr_0.95fr_0.95fr]">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-3">
                  <div className="relative grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-600 shadow-[0_0_30px_-18px_rgba(16,185,129,0.8)]">
                    <span className="text-[10px] font-black tracking-[0.16em] text-white">WA</span>
                  </div>
                  <div className="leading-none">
                    <span className="font-heading text-lg font-extrabold tracking-tight text-white">
                      WebAppImpulsor
                    </span>
                    <span className="mt-0.5 block text-[9px] font-semibold uppercase tracking-[0.18em] text-white/45">
                      Automatización con IA
                    </span>
                  </div>
                </div>
                <p className="max-w-sm text-sm leading-7 text-white/55">
                  Automatización de WhatsApp, IA para negocios, landing pages e integraciones para profesionales y servicios.
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/40">
                  Contacto
                </p>
                <div className="mt-4 space-y-3 text-sm text-white/70">
                  <a href="#contacto" className="block transition hover:text-white">Solicitar diagnóstico</a>
                  <a href="https://wa.me/541166448389" className="block transition hover:text-white">WhatsApp</a>
                  <a href="mailto:hola@webappimpulsor.com.ar" className="block transition hover:text-white">hola@webappimpulsor.com.ar</a>
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/40">
                  Servicios
                </p>
                <div className="mt-4 space-y-3 text-sm text-white/70">
                  <a href="#contacto" className="block transition hover:text-white">Automatización de WhatsApp</a>
                  <a href="#contacto" className="block transition hover:text-white">IA para negocios</a>
                  <a href="#contacto" className="block transition hover:text-white">Landing pages</a>
                  <a href="#contacto" className="block transition hover:text-white">Integraciones</a>
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/40">
                  Casos de uso
                </p>
                <div className="mt-4 space-y-3 text-sm text-white/70">
                  <a href="/odontologos" className="block transition hover:text-white">Odontólogos</a>
                  <a href="/medicos" className="block transition hover:text-white">Médicos</a>
                  <a href="/fonoaudiologos" className="block transition hover:text-white">Fonoaudiólogos</a>
                  <a href="/inmobiliarias" className="block transition hover:text-white">Inmobiliarias</a>
                </div>
              </div>
            </div>

            <div className="mt-12 grid gap-4 border-t border-white/5 pt-6 sm:grid-cols-[1fr_auto] sm:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/40">
                  Redes
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <a href="https://wa.me/541166448389" className="ds-badge">WhatsApp</a>
                  <a href="mailto:hola@webappimpulsor.com.ar" className="ds-badge">Email</a>
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/40">
                  Información legal
                </p>
                <div className="mt-3 flex flex-wrap gap-4 text-sm text-white/55">
                  <span>Privacidad</span>
                  <span>Términos</span>
                  <span>Datos de contacto</span>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}

export default function App() {
  return null;
}

