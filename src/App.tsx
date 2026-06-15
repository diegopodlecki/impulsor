/* eslint-disable react-refresh/only-export-components */
import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import type { RouteRecord } from "vite-react-ssg";

import { SeoHead } from "@/components/SEO/SeoHead";
import { Toaster } from "@/components/ui/sonner.tsx";

const webhookUrl = "https://hook.us2.make.com/5c7xu0k7crcpkg1eeclb395duigmvn14";

export const routes: RouteRecord[] = [
  {
    path: "/",
    element: <WhatsAppAutomationLanding />,
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
    title: "AutomatizaciÃ³n de WhatsApp para odontÃ³logos en Argentina",
    description: "RespondÃ© consultas, coordinÃ¡ turnos y enviÃ¡ recordatorios con un asistente de WhatsApp diseÃ±ado para consultorios odontolÃ³gicos y clÃ­nicas dentales en Argentina.",
    problem: "Las consultas por WhatsApp suelen llegar entre tratamientos, llamadas y pacientes en sala. Si nadie responde a tiempo, el interÃ©s se enfrÃ­a y el turno se pierde.",
    benefits: [
      "Respuestas automÃ¡ticas para primeras consultas, urgencias y derivaciones.",
      "ConfirmaciÃ³n de turnos y recordatorios automÃ¡ticos antes de la cita.",
      "Menos tiempo respondiendo precios, cobertura, direcciÃ³n y horarios.",
    ],
    conversation: {
      client: "Hola, Â¿tienen turno para una limpieza dental esta semana?",
      assistant: "SÃ­, claro. Te paso los horarios disponibles y te dejo el que mejor encaje con tu agenda.",
      followUp: "Te quedÃ³ confirmado el jueves a las 16:00. TambiÃ©n te llega un recordatorio automÃ¡tico.",
      close: "Perfecto, asÃ­ no tengo que estar pendiente del chat.",
    },
    theme: {
      pageBg: "bg-[#06111b]",
      hero: "bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.14),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(125,211,252,0.09),transparent_22%),linear-gradient(180deg,rgba(3,7,18,0.98),rgba(3,7,18,1))]",
      font: "font-sans",
      title: "font-extrabold tracking-[-0.04em]",
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
      imageAlt: "OdontÃ³loga atendiendo una consulta mientras responde WhatsApp en un consultorio moderno",
      imageCaption: "Una experiencia premium para ordenar consultas, transmitir confianza y reducir fricciÃ³n.",
    },
    showcase: {
      eyebrow: "RecepciÃ³n premium",
      title: "Una clÃ­nica que ordena la atenciÃ³n con una experiencia mÃ¡s cuidada y premium",
      description:
        "Pensado para consultorios que quieren transmitir mÃ¡s calidad visual, menos fricciÃ³n y una atenciÃ³n mÃ¡s precisa desde el primer contacto.",
      bullets: [
        "Consulta inicial con respuesta rÃ¡pida",
        "Turnos confirmados y mejor seguimiento",
        "MÃ¡s orden sin perder cercanÃ­a",
      ],
      image: "https://images.unsplash.com/photo-1629909615191-09a4b6c1b78b?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Consultorio odontolÃ³gico moderno con recepciÃ³n digital",
      caption: "Una referencia premium para reforzar confianza, precisiÃ³n y calma.",
    },
  },
  medicos: {
    title: "AutomatizaciÃ³n de WhatsApp para mÃ©dicos y consultorios en Argentina",
    description: "CentralizÃ¡ consultas, turnos y seguimientos con un asistente automÃ¡tico pensado para pacientes y consultorios mÃ©dicos.",
    problem: "La recepciÃ³n atiende llamados, WhatsApp y agenda al mismo tiempo; cuando todo entra junto, las respuestas tardan y se pierden consultas valiosas.",
    benefits: [
      "Filtro inicial de consultas y derivaciÃ³n automÃ¡tica.",
      "Agenda ordenada con turnos confirmados.",
      "Seguimiento y recordatorios sin carga manual.",
    ],
    conversation: {
      client: "Buen dÃ­a, Â¿atienden por obra social y tienen turno esta semana?",
      assistant: "SÃ­, te ayudo con la consulta y te comparto los turnos disponibles.",
      followUp: "Te quedÃ³ reservado el martes a las 11:00 y te llega recordatorio antes del turno.",
      close: "Excelente, me evita estar llamando varias veces.",
    },
    theme: {
      pageBg: "bg-[#070b16]",
      hero: "bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.16),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.08),transparent_24%),linear-gradient(180deg,rgba(5,8,19,0.98),rgba(5,8,19,1))]",
      font: "font-sans",
      title: "font-semibold tracking-[-0.04em]",
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
      badgeText: "Consultorios mÃ©dicos",
      image: "https://images.unsplash.com/photo-1579684453423-f84349ef60b8?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "MÃ©dica revisando una historia clÃ­nica digital en consultorio",
      imageCaption: "Un estilo clÃ­nico y editorial para transmitir claridad, precisiÃ³n y profesionalismo.",
    },
    showcase: {
      eyebrow: "Intake clÃ­nico",
      title: "Una recepciÃ³n mÃ¡s ordenada para consultas, estudios y turnos",
      description:
        "Pensado para consultorios mÃ©dicos donde conviven llamados, derivaciones y pacientes que necesitan respuestas claras sin fricciÃ³n.",
      bullets: [
        "ClasificaciÃ³n de motivo de consulta",
        "DerivaciÃ³n segÃºn especialidad",
        "ConfirmaciÃ³n y recordatorio de turno",
      ],
      image: "https://images.unsplash.com/photo-1586773860416-d37222d8fce3?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Equipo mÃ©dico revisando una agenda de pacientes en una sala luminosa",
      caption: "MÃ¡s sobrio, mÃ¡s clÃ­nico y con foco en continuidad de atenciÃ³n.",
    },
  },
  fonoaudiologos: {
    title: "AutomatizaciÃ³n de WhatsApp para fonoaudiÃ³logos en Argentina",
    description: "RespondÃ© consultas frecuentes, coordinÃ¡ sesiones y simplificÃ¡ el seguimiento con automatizaciÃ³n para consultorios de fonoaudiologÃ­a.",
    problem: "Se repiten consultas sobre horarios, modalidad, duraciÃ³n y cambios de turno, y eso termina consumiendo tiempo todos los dÃ­as en el consultorio.",
    benefits: [
      "Respuestas automÃ¡ticas sobre modalidad y disponibilidad.",
      "GestiÃ³n simple de turnos y reprogramaciones.",
      "Seguimiento mÃ¡s ordenado con menos chats pendientes.",
    ],
    conversation: {
      client: "Hola, querÃ­a saber si hacen atenciÃ³n infantil y cÃ³mo son los turnos.",
      assistant: "SÃ­, te comparto cÃ³mo trabajamos, edades de atenciÃ³n y los horarios disponibles.",
      followUp: "Perfecto, te agendo el miÃ©rcoles a las 10:00 y te llega la confirmaciÃ³n por WhatsApp.",
      close: "Genial, asÃ­ no tengo que insistir por respuesta.",
    },
    theme: {
      pageBg: "bg-[#05130f]",
      hero: "bg-[radial-gradient(circle_at_top,rgba(52,211,153,0.15),transparent_32%),linear-gradient(180deg,rgba(2,6,23,0.98),rgba(2,6,23,1))]",
      font: "font-sans",
      title: "font-black tracking-tight",
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
      badgeText: "Consultorios de fonoaudiologÃ­a",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Profesional de fonoaudiologÃ­a trabajando con un paciente",
      imageCaption: "Un diseÃ±o mÃ¡s calmo y cercano, pensado para acompaÃ±ar familias y procesos de seguimiento.",
    },
    showcase: {
      eyebrow: "Sesiones y seguimiento",
      title: "Una agenda suave, clara y sin mensajes repetidos",
      description:
        "Para profesionales que coordinan sesiones, reprogramaciones y seguimiento con familias y pacientes sin perder tiempo en chats repetidos.",
      bullets: [
        "Horarios, modalidad y edades de atenciÃ³n",
        "Cambios de turno sin fricciÃ³n",
        "Recordatorios automÃ¡ticos a familias",
      ],
      image: "https://images.unsplash.com/photo-1519542537078-4f7b7e1b8b6a?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "SesiÃ³n de fonoaudiologÃ­a en consultorio cÃ¡lido y minimalista",
      caption: "Un estilo mÃ¡s amable y minimalista para una atenciÃ³n cercana.",
    },
  },
  abogados: {
    title: "AutomatizaciÃ³n de WhatsApp para abogados en Argentina",
    description: "FiltrÃ¡ consultas, ordenÃ¡ casos y hacÃ© seguimiento inicial sin perder tiempo en mensajes repetidos para estudios jurÃ­dicos y abogados particulares.",
    problem: "Llegan consultas legales que necesitan una primera respuesta clara; si se demoran, el posible cliente sigue buscando otro estudio.",
    benefits: [
      "Primer contacto profesional y automÃ¡tico.",
      "Captura de consultas desde una landing de servicios legales.",
      "Seguimiento de prospectos sin perder oportunidades.",
    ],
    conversation: {
      client: "Hola, necesito asesoramiento por un alquiler, Â¿puedo coordinar una consulta?",
      assistant: "SÃ­, claro. Te comparto disponibilidad y te explico cÃ³mo es la primera entrevista.",
      followUp: "Te reservÃ© un turno para maÃ±ana a las 17:00 y te envÃ­o la confirmaciÃ³n.",
      close: "Perfecto, asÃ­ no pierdo tiempo escribiendo varias veces.",
    },
    theme: {
      pageBg: "bg-[#080604]",
      hero: "bg-[radial-gradient(circle_at_top,rgba(245,158,11,0.12),transparent_30%),linear-gradient(180deg,rgba(8,5,2,0.99),rgba(8,5,2,1))]",
      font: "font-serif",
      title: "font-semibold tracking-[-0.05em]",
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
      badgeText: "Estudios jurÃ­dicos",
      image: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Abogada en un estudio jurÃ­dico con documentos y notebook",
      imageCaption: "Una estÃ©tica formal, editorial y mÃ¡s cercana al universo jurÃ­dico.",
    },
    showcase: {
      eyebrow: "Dossier inicial",
      title: "Una puerta de entrada mÃ¡s seria para consultas legales",
      description:
        "Pensado para estudios que necesitan filtrar casos, ordenar urgencias y sostener una primera impresiÃ³n de confianza desde el minuto uno.",
      bullets: [
        "Primer filtro por tipo de caso",
        "Toma de datos inicial ordenada",
        "Agenda de entrevista y seguimiento",
      ],
      image: "https://images.unsplash.com/photo-1569525365647-5d6e1b4d3cc8?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Estudio jurÃ­dico con biblioteca, expediente y luz cÃ¡lida",
      caption: "MÃ¡s sobrio, mÃ¡s clÃ¡sico y con presencia de estudio profesional.",
    },
  },
  inmobiliarias: {
    title: "AutomatizaciÃ³n de WhatsApp para inmobiliarias en Argentina",
    description: "RespondÃ© consultas de propiedades, agendÃ¡ visitas y seguÃ­ leads sin perder velocidad de respuesta en inmobiliarias argentinas.",
    problem: "Las consultas llegan por muchos canales y, si no se responde rÃ¡pido, el interesado sigue mirando otras opciones.",
    benefits: [
      "Respuestas automÃ¡ticas para propiedades y zonas.",
      "Agendado de visitas y seguimiento de interesados.",
      "MÃ¡s consultas atendidas sin aumentar equipo.",
    ],
    conversation: {
      client: "Hola, vi un depto en Palermo. Â¿Sigue disponible?",
      assistant: "SÃ­, sigue disponible. Te comparto detalles y puedo agendarte visita.",
      followUp: "Listo, te agendÃ© para el sÃ¡bado a las 12:00 y te llega la confirmaciÃ³n.",
      close: "Genial, me resolviÃ³ todo por WhatsApp.",
    },
    theme: {
      pageBg: "bg-[#11050b]",
      hero: "bg-[radial-gradient(circle_at_top,rgba(244,114,182,0.14),transparent_30%),linear-gradient(180deg,rgba(13,6,10,0.99),rgba(13,6,10,1))]",
      font: "font-sans",
      title: "font-black tracking-tight",
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
      imageCaption: "MÃ¡s energÃ­a comercial, mÃ¡s visitas coordinadas y menos leads frÃ­os.",
    },
    showcase: {
      eyebrow: "Leads y visitas",
      title: "Consultas que no se enfrÃ­an y visitas que quedan agendadas",
      description:
        "Pensado para equipos comerciales que responden varios canales y necesitan velocidad sin perder contexto.",
      bullets: [
        "Disponibilidad de propiedades",
        "CoordinaciÃ³n de visitas",
        "Seguimiento de interesados",
      ],
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "ReuniÃ³n inmobiliaria con una pareja interesada en una propiedad",
      caption: "Un look mÃ¡s vibrante para una experiencia comercial Ã¡gil.",
    },
  },
  nutricionistas: {
    title: "AutomatizaciÃ³n de WhatsApp para nutricionistas en Argentina",
    description: "RespondÃ© consultas, coordinÃ¡ primeras entrevistas y acompaÃ±Ã¡ seguimientos con una experiencia digital mÃ¡s cÃ¡lida y ordenada.",
    problem: "Las consultas de nutriciÃ³n suelen llegar con preguntas sobre planes, horarios, modalidad y seguimiento; si se demora la respuesta, baja el interÃ©s.",
    benefits: [
      "Primer contacto amable y rÃ¡pido.",
      "Agenda simple para entrevistas y controles.",
      "Seguimiento automÃ¡tico entre consultas.",
    ],
    conversation: {
      client: "Hola, querÃ­a saber cÃ³mo trabajan las primeras consultas y si hacen seguimiento.",
      assistant: "SÃ­, claro. Te explico cÃ³mo es la primera entrevista y te comparto los horarios disponibles.",
      followUp: "Listo, te reservÃ© el jueves a las 18:00 y te llega un recordatorio antes del turno.",
      close: "Perfecto, asÃ­ puedo ordenarme mejor sin escribir varias veces.",
    },
    theme: {
      pageBg: "bg-[#07110d]",
      hero: "bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.14),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(250,204,21,0.10),transparent_28%),linear-gradient(180deg,rgba(3,6,14,0.98),rgba(3,6,14,1))]",
      font: "font-sans",
      title: "font-black tracking-tight",
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
      imageCaption: "Una estÃ©tica mÃ¡s cÃ¡lida y editorial para un servicio cercano.",
    },
    showcase: {
      eyebrow: "Seguimiento y hÃ¡bitos",
      title: "Una experiencia mÃ¡s cÃ¡lida para acompaÃ±ar cada proceso",
      description:
        "La propuesta visual busca transmitir bienestar, claridad y un trato mÃ¡s humano, ideal para nutriciÃ³n y acompaÃ±amiento.",
      bullets: [
        "Primera entrevista guiada",
        "Recordatorios de seguimiento",
        "Orden para hÃ¡bitos y controles",
      ],
      image: "https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Profesional de nutriciÃ³n revisando una planificaciÃ³n junto a una paciente",
      caption: "MÃ¡s suave, mÃ¡s cercana y pensada para el largo plazo.",
    },
  },
};

const defaultNicheTheme: NicheTheme = {
  pageBg: "bg-slate-950",
  hero: "bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.16),transparent_35%)]",
  font: "font-sans",
  title: "font-black tracking-tight",
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
  badgeText: "AutomatizaciÃ³n de WhatsApp",
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
                  Argentina Â· {theme.badgeText}
                </p>
                <h1 className={`mt-4 text-4xl sm:text-5xl lg:text-6xl ${theme.title}`}>
                  {content.title}
                </h1>
                <p className={`mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/70 lg:mx-0 ${theme.body}`}>
                  {content.description}
                </p>
                <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
                  <a href="#contacto" className={`inline-flex items-center justify-center rounded-2xl bg-gradient-to-r ${theme.ctaFrom} ${theme.ctaTo} px-6 py-4 text-base font-bold text-white shadow-lg shadow-black/30`}>
                    Solicitar diagnÃ³stico gratuito
                  </a>
                  <a href="#conversacion" className={`inline-flex items-center justify-center rounded-2xl border ${theme.accentBorder} bg-white/5 px-6 py-4 text-base font-semibold text-white/85`}>
                    Ver conversaciÃ³n real
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
                <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                  AutomatizaciÃ³n pensada para la operaciÃ³n diaria de una clÃ­nica dental
                </h2>
                <div className="mt-5 h-px w-24 bg-gradient-to-r from-sky-400/60 to-transparent" />
              </div>

              <div className="grid gap-4 lg:grid-cols-3">
                {[
                  {
                    title: "Primera consulta",
                    text: "Responde motivo de consulta, cobertura, ubicaciÃ³n y disponibilidad sin que alguien tenga que estar mirando WhatsApp todo el tiempo.",
                  },
                  {
                    title: "Turnos y recordatorios",
                    text: "Confirma la cita, reenvÃ­a la direcciÃ³n y manda un aviso previo para bajar ausencias y reprogramaciones de Ãºltimo momento.",
                  },
                  {
                    title: "Seguimiento posterior",
                    text: "DespuÃ©s del tratamiento, mantiene el vÃ­nculo con controles, indicaciones y nuevas consultas sin dejar chats pendientes.",
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
                    AsÃ­ se ve un flujo mÃ¡s creÃ­ble para odontologÃ­a: la consulta entra desde WhatsApp, la respuesta es inmediata y la agenda queda ordenada sin ir y venir de mensajes.
                  </p>
                </div>

                <div className="overflow-hidden rounded-[2rem] border border-sky-400/15 bg-white/[0.03] shadow-[0_24px_80px_-36px_rgba(14,165,233,0.32)]">
                  <div className="grid gap-0 md:grid-cols-[0.9fr_1.1fr]">
                    <div className="relative min-h-[240px]">
                      <img
                        src="https://images.unsplash.com/photo-1622737133809-d95047b9e673?auto=format&fit=crop&w=900&q=80"
                        alt="Consultorio odontolÃ³gico con recepciÃ³n y pantalla de agenda"
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.02),rgba(2,6,23,0.5))]" />
                    </div>
                    <div className="space-y-3 p-5 sm:p-6">
                      <div className="rounded-2xl border border-white/5 bg-white/10 px-4 py-3 text-sm leading-6 text-white/90">
                        Hola, Â¿hacen limpieza dental y tienen turno para esta semana?
                      </div>
                      <div className="rounded-2xl border border-sky-400/20 bg-sky-500/10 px-4 py-3 text-sm leading-6 text-white/90">
                        SÃ­, claro. Te paso horarios disponibles y te confirmo el que te quede mejor.
                      </div>
                      <div className="rounded-2xl border border-sky-400/20 bg-sky-500/10 px-4 py-3 text-sm leading-6 text-white/90">
                        Perfecto, te quedÃ³ el jueves a las 16:00. TambiÃ©n te llega recordatorio automÃ¡tico.
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
                    Flujo clÃ­nico
                  </p>
                  <h2 className={`mt-3 text-3xl sm:text-4xl ${theme.title}`}>
                    Menos caos en recepciÃ³n, mÃ¡s orden en cada consulta
                  </h2>
                  <p className={`mt-4 max-w-xl text-base leading-8 text-white/65 ${theme.body}`}>
                    La agenda mÃ©dica suele mezclar consultas, estudios y derivaciones. Esta vista le da prioridad a la velocidad y a la claridad operativa.
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  {[
                    {
                      title: "Triage",
                      text: "El sistema identifica el motivo de consulta y deriva sin frenar la atenciÃ³n.",
                    },
                    {
                      title: "Agenda",
                      text: "La coordinaciÃ³n de turnos se vuelve mÃ¡s simple y con menos intercambio de mensajes.",
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
                    Intake jurÃ­dico
                  </p>
                  <h2 className={`mt-3 text-3xl sm:text-4xl ${theme.title}`}>
                    Una primera impresiÃ³n mÃ¡s seria para cada consulta
                  </h2>
                  <p className={`mt-4 max-w-xl text-base leading-8 text-white/65 ${theme.body}`}>
                    El objetivo no es vender mÃ¡s texto, sino mostrar orden, criterio y confianza desde el primer contacto con el estudio.
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
                      text: "El tono visual transmite seriedad y cercanÃ­a profesional.",
                    },
                    {
                      title: "Seguimiento",
                      text: "Menos consultas perdidas y mÃ¡s prospectos bien atendidos.",
                    },
                    {
                      title: "Orden",
                      text: "La recepciÃ³n trabaja con un flujo mÃ¡s claro y menos ida y vuelta.",
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
                  Ejemplo real de conversaciÃ³n
                </p>
                <h2 className="mt-3 text-3xl font-black tracking-tight">CÃ³mo se ve una consulta automatizada</h2>
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
                DiagnÃ³stico gratuito
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight">Quiero mi diagnÃ³stico gratuito</h2>
              <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-white/65">
                Analizamos cÃ³mo llegar mÃ¡s rÃ¡pido a tus consultas, cÃ³mo ordenar tu agenda y quÃ© automatizar para vender mejor en Argentina.
              </p>
              <a href="/#contacto" className={`mt-6 inline-flex items-center justify-center rounded-2xl bg-gradient-to-r ${theme.ctaFrom} ${theme.ctaTo} px-6 py-4 text-base font-bold text-white`}>
                Solicitar diagnÃ³stico gratuito
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
                <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                  PÃ¡ginas especÃ­ficas por rubro para captar bÃºsquedas con intenciÃ³n
                </h2>
                <div className={`mt-5 h-px w-24 ${theme.accentLine}`} />
              </div>

              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {[
                  { href: "/odontologos", label: "OdontÃ³logos", text: "AutomatizaciÃ³n de WhatsApp para clÃ­nicas dentales." },
                  { href: "/medicos", label: "MÃ©dicos", text: "Turnos, consultas y seguimiento para consultorios." },
                  { href: "/fonoaudiologos", label: "FonoaudiÃ³logos", text: "Respuestas automÃ¡ticas y agenda de sesiones." },
                  { href: "/nutricionistas", label: "Nutricionistas", text: "Seguimiento, consultas y recordatorios de control." },
                  { href: "/abogados", label: "Abogados", text: "Filtrado de consultas y primer contacto profesional." },
                  { href: "/inmobiliarias", label: "Inmobiliarias", text: "MÃ¡s consultas atendidas y visitas agendadas." },
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
                      <span aria-hidden="true">â†’</span>
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
      setError(submitError instanceof Error ? submitError.message : "OcurriÃ³ un error inesperado.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <SeoHead
        title="AutomatizaciÃ³n de WhatsApp y turnos"
        description="AutomatizÃ¡ WhatsApp con IA, captÃ¡ leads desde landing pages y conectÃ¡ integraciones para responder, agendar y hacer seguimiento 24/7."
      />
      <Toaster position="top-right" />

      <main className="min-h-screen bg-slate-950 text-white">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.16),transparent_30%)]" />
          <header className="relative z-20 border-b border-white/5 bg-slate-950/75 backdrop-blur-2xl">
            <div className="container">
              <div className="flex h-18 items-center justify-between gap-3 py-3 sm:h-20 sm:gap-4 sm:py-0">
                <a href="/" className="inline-flex items-center gap-3">
                  <div className="h-10 w-10 rounded-2xl border border-emerald-400/20 bg-emerald-500/10 shadow-[0_0_30px_-18px_rgba(16,185,129,0.9)]" />
                  <span className="text-xs font-semibold tracking-[0.18em] text-white/90 uppercase sm:text-sm">
                    WhatsApp AI
                  </span>
                </a>

                <nav className="hidden items-center gap-6 text-sm text-white/60 lg:flex xl:gap-8">
                  <a href="#como-funciona" className="transition hover:text-white">
                    CÃ³mo funciona
                  </a>
                  <a href="#casos-de-uso" className="transition hover:text-white">
                    Casos de uso
                  </a>
                  <a href="#landings-seo" className="transition hover:text-white">
                    Landings
                  </a>
                  <a href="#contacto" className="transition hover:text-white">
                    Contacto
                  </a>
                </nav>

                <a
                  href="#contacto"
                  className="inline-flex items-center justify-center rounded-full border border-emerald-300/20 bg-gradient-to-r from-emerald-500 to-green-500 px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-emerald-500/20 transition hover:scale-[1.01] hover:shadow-emerald-500/30 sm:px-5"
                >
                  Solicitar diagnÃ³stico gratuito
                </a>
              </div>
            </div>
          </header>

                    <div className="container relative z-10 flex min-h-[calc(100vh-5rem)] items-center py-16">
            <div className="grid w-full gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="space-y-8"
              >
                <div className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-4 py-2 text-xs font-semibold tracking-[0.18em] text-emerald-200 uppercase">
                  Automatización de WhatsApp
                </div>
                <div className="space-y-5">
                  <h1 className="max-w-3xl text-balance text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">
                    Automatizá WhatsApp y conseguí más clientes sin trabajar más horas
                  </h1>
                  <p className="max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
                    Implementamos asistentes automáticos para profesionales y negocios de servicios que responden consultas, gestionan turnos y hacen seguimiento de clientes 24/7.
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#contacto"
                    className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-emerald-500 to-green-500 px-6 py-4 text-base font-bold text-white shadow-lg shadow-emerald-500/25 transition hover:scale-[1.01] hover:shadow-emerald-500/35"
                  >
                    Solicitar diagnóstico gratuito
                  </a>
                  <a
                    href="#como-funciona"
                    className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-base font-semibold text-white/85 transition hover:border-white/15 hover:bg-white/10"
                  >
                    Ver demostración
                  </a>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  {["Respuesta inmediata", "Turnos confirmados", "Seguimiento automático"].map((item) => (
                    <div key={item} className="rounded-2xl border border-white/5 bg-white/[0.03] px-4 py-3 text-sm font-medium text-white/75">
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 28, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.08 }}
                className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-8"
              >
                <div className="mb-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300/80">
                    Solicitar diagnóstico gratuito
                  </p>
                  <h2 className="mt-3 text-3xl font-black tracking-tight text-white">
                    Completá tus datos y te mostramos dónde automatizar primero
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-white/60">
                    Te enviamos una revisión breve para detectar oportunidades de automatización, landing pages e integraciones.
                  </p>
                </div>

                <div className="relative mb-6 overflow-hidden rounded-[1.75rem] border border-emerald-400/12 bg-[linear-gradient(180deg,rgba(16,185,129,0.08),rgba(255,255,255,0.02))] p-5 shadow-[0_20px_60px_-36px_rgba(16,185,129,0.45)]">
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.16),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(34,197,94,0.08),transparent_35%)]" />
                  <div className="relative">
                    <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold tracking-[0.18em] text-emerald-200 uppercase">
                      Diagnóstico comercial
                    </div>
                    <h3 className="mt-4 text-2xl font-black tracking-tight text-white sm:text-[2rem]">
                      Solicitá tu diagnóstico gratuito
                    </h3>
                    <p className="mt-3 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
                      Analizamos cómo llegan tus consultas, cómo gestionás tus turnos y qué tareas podés automatizar.
                    </p>
                  </div>

                  <div className="relative mt-5 grid gap-3 sm:grid-cols-3">
                    {[
                      {
                        title: "Cómo llegan tus consultas",
                        text: "Revisamos el punto de entrada para ver si perdés oportunidades.",
                      },
                      {
                        title: "Cómo gestionás tus turnos",
                        text: "Detectamos fricciones, demoras y tareas manuales.",
                      },
                      {
                        title: "Qué podés automatizar",
                        text: "Marcamos mensajes, seguimientos y recordatorios.",
                      },
                    ].map((item) => (
                      <div
                        key={item.title}
                        className="rounded-2xl border border-white/5 bg-white/[0.03] p-4"
                      >
                        <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-500/10 text-xs font-black text-emerald-200">
                          ✓
                        </div>
                        <h4 className="text-sm font-semibold text-white">{item.title}</h4>
                        <p className="mt-2 text-sm leading-6 text-white/55">{item.text}</p>
                      </div>
                    ))}
                  </div>
                  <div className="relative mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                    <a
                      href="#contacto"
                      className="inline-flex w-full items-center justify-center rounded-2xl bg-gradient-to-r from-emerald-500 to-green-500 px-5 py-4 text-base font-bold text-white shadow-lg shadow-emerald-500/25 transition hover:scale-[1.01] hover:shadow-emerald-500/35 sm:w-auto sm:min-w-64"
                    >
                      Quiero mi diagnóstico
                    </a>
                    <p className="text-sm leading-6 text-white/45">
                      Sin compromiso. Te devolvemos un mapa claro de oportunidades.
                    </p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4" id="contacto">
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
                    <span className="text-xs text-white/45">Incluí el código de país y tu característica de área.</span>
                  </label>

                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex w-full items-center justify-center rounded-2xl bg-gradient-to-r from-emerald-500 to-green-500 px-5 py-4 text-base font-bold text-white shadow-lg shadow-emerald-500/25 transition hover:scale-[1.01] hover:shadow-emerald-500/35 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {loading ? "Enviando..." : "Solicitá una Demo Gratuita"}
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
                    Sin spam. Solo usamos tus datos para coordinar el diagnóstico de automatización.
                  </p>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="border-t border-white/5 bg-[#090909]">
          <div className="container py-16 sm:py-20">
            <div className="mb-10 max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/40">
                Ver una conversaciÃ³n real
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                AsÃ­ se ve una atenciÃ³n automÃ¡tica en WhatsApp con IA
              </h2>
              <div className="mt-5 h-px w-24 bg-gradient-to-r from-emerald-400/60 to-transparent" />
            </div>

            <div className="mx-auto max-w-3xl">
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#111111] shadow-[0_24px_80px_-32px_rgba(0,0,0,0.9)]">
                <div className="flex items-center gap-3 border-b border-white/5 bg-[#111827] px-5 py-4">
                  <div className="relative flex h-11 w-11 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-300">
                    <span className="text-sm font-black">WA</span>
                    <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-[#111827] bg-emerald-400" />
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-white">Asistente de WhatsApp</p>
                    <p className="text-xs text-emerald-300/80">en lÃ­nea ahora Â· respuesta automÃ¡tica</p>
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
                            Â¡Hola! SÃ­, claro. Te comparto los turnos disponibles y te ayudo a reservar el que mejor te quede.
                          </div>
                          <div className="flex items-center justify-end gap-1 px-1 text-[11px] text-emerald-200/60">
                            <span>10:41</span>
                            <span>â€¢</span>
                            <span className="inline-flex items-center gap-1">
                              <span>âœ“</span>
                              <span>âœ“</span>
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
                            Tengo disponibles el martes 10:00, miÃ©rcoles 14:30 y viernes 18:00. Â¿CuÃ¡l preferÃ­s?
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
                            El miÃ©rcoles a las 14:30 me sirve.
                          </div>
                          <div className="px-1 text-[11px] text-white/35">10:42</div>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-end animate-[fadeUp_.6s_ease-out_both] [animation-delay:560ms]">
                      <div className="flex max-w-[85%] gap-3 sm:max-w-[72%]">
                        <div className="space-y-1 text-right">
                          <div className="rounded-[1.25rem] rounded-br-md border border-emerald-400/20 bg-emerald-500/15 px-4 py-3 text-sm leading-6 text-white/90">
                            Perfecto. Ya te lo dejÃ© reservado para el miÃ©rcoles a las 14:30 y te envÃ­o un recordatorio antes del turno.
                          </div>
                          <div className="flex items-center justify-end gap-1 px-1 text-[11px] text-emerald-200/60">
                            <span>10:42</span>
                            <span>â€¢</span>
                            <span className="inline-flex items-center gap-1">
                              <span>âœ“</span>
                              <span>âœ“</span>
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
                          âœ“
                        </span>
                        <span>
                          ConfirmaciÃ³n enviada
                          <span className="ml-2 text-white/45">Â· calendario actualizado</span>
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
                            Genial, asÃ­ no tengo que estar pendiente de responder yo mismo.
                          </div>
                          <div className="px-1 text-[11px] text-white/35">10:42</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 border-t border-white/5 pt-4">
                    <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/35">
                      <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_16px_rgba(52,211,153,0.8)]" />
                      EscribÃ­ tu consulta y el sistema responde por vos
                      <span className="ml-auto flex items-center gap-1">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white/35 [animation-delay:0ms]" />
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white/35 [animation-delay:180ms]" />
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white/35 [animation-delay:360ms]" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
                <div className="rounded-[1.75rem] border border-white/8 bg-white/[0.03] p-6 sm:p-7">
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

                <div className={`rounded-[1.75rem] border ${homeTheme.accentBorder} bg-white/[0.04] p-6 sm:p-7`}>
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
          <div className="container py-16 sm:py-20">
            <div className="mb-10 max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/40">
                Casos de uso
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                Cada rubro tiene un problema distinto
              </h2>
              <div className="mt-5 h-px w-24 bg-gradient-to-r from-emerald-400/60 to-transparent" />
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {[
                {
                  label: "OdontÃ³logos",
                  problem: "Consultas por turnos, urgencias y mensajes que llegan fuera de horario.",
                  result: "Respuestas automÃ¡ticas y confirmaciÃ³n de turnos sin fricciÃ³n.",
                  href: "/odontologos",
                  accent: "from-cyan-500/20 to-sky-500/10",
                },
                {
                  label: "MÃ©dicos",
                  problem: "Consultas dispersas entre WhatsApp, llamados y agenda manual.",
                  result: "Primer contacto claro, turnos simples y seguimiento automÃ¡tico.",
                  href: "/medicos",
                  accent: "from-violet-500/20 to-fuchsia-500/10",
                },
                {
                  label: "FonoaudiÃ³logos",
                  problem: "Consultas repetidas sobre horarios, modalidad y duraciÃ³n de las sesiones.",
                  result: "Respuestas frecuentes automatizadas y agenda mÃ¡s ordenada.",
                  href: "/fonoaudiologos",
                  accent: "from-lime-500/20 to-emerald-500/10",
                },
                {
                  label: "Abogados",
                  problem: "Consultas legales que requieren una primera respuesta profesional y rÃ¡pida.",
                  result: "Filtrado inicial, contacto ordenado y seguimiento de prospectos.",
                  href: "/abogados",
                  accent: "from-blue-500/20 to-cyan-500/10",
                },
                {
                  label: "Inmobiliarias",
                  problem: "Consultas de propiedades que se enfrÃ­an si no respondÃ©s rÃ¡pido.",
                  result: "MÃ¡s visitas agendadas y seguimiento automÃ¡tico de interesados.",
                  href: "/inmobiliarias",
                  accent: "from-pink-500/20 to-rose-500/10",
                },
              ].map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="group block rounded-[1.75rem] border border-white/8 bg-white/[0.03] p-6 transition-all duration-300 hover:border-white/15 hover:bg-white/[0.05] sm:p-7"
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
                    Ver soluciÃ³n
                    <span aria-hidden="true">â†’</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-white/5 bg-[#0a0a0a]">
          <div className="container py-16 sm:py-20">
            <div className="mb-10 max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/40">
                Problema vs soluciÃ³n
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                De responder tarde a atender 24/7
              </h2>
              <div className="mt-5 h-px w-24 bg-gradient-to-r from-emerald-400/60 to-transparent" />
            </div>

            <div className="grid gap-4 lg:grid-cols-2">
              <div className="rounded-[1.75rem] border border-rose-500/15 bg-rose-500/[0.04] p-6 sm:p-7">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-rose-400/20 bg-rose-500/10 px-3 py-1.5 text-sm font-semibold text-rose-200">
                  <span className="inline-flex h-2.5 w-2.5 rounded-full bg-rose-400" />
                  Problemas actuales del negocio
                </div>

                <div className="space-y-4">
                  {[
                    {
                      icon: "âœ•",
                      title: "Consultas que se enfrÃ­an",
                      text: "La persona escribe, espera y termina comprÃ¡ndole a quien responde primero.",
                    },
                    {
                      icon: "âœ•",
                      title: "Tiempo perdido repitiendo lo mismo",
                      text: "Precios, horarios, ubicaciÃ³n y disponibilidad una y otra vez por WhatsApp.",
                    },
                    {
                      icon: "âœ•",
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

              <div className={`rounded-[1.75rem] border ${homeTheme.accentBorder} bg-white/[0.04] p-6 sm:p-7`}>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1.5 text-sm font-semibold text-emerald-200">
                  <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  Resultados con automatizaciÃ³n
                </div>

                <div className="space-y-4">
                  {[
                    {
                      icon: "âœ“",
                      title: "Respuestas inmediatas",
                      text: "Cada consulta recibe atenciÃ³n al instante, incluso fuera de horario.",
                    },
                    {
                      icon: "âœ“",
                      title: "Agenda y presupuestos automÃ¡ticos",
                      text: "El sistema responde, propone turnos y envÃ­a presupuestos sin fricciÃ³n.",
                    },
                    {
                      icon: "âœ“",
                      title: "Seguimiento que no se olvida",
                      text: "Recordatorios y seguimiento para cerrar mÃ¡s citas con menos esfuerzo.",
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
          <div className="container py-16 sm:py-20">
            <div className="mb-10 max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/40">
                Testimonios
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                Casos reales de automatizaciÃ³n que liberan tiempo y venden mÃ¡s
              </h2>
              <div className="mt-5 h-px w-24 bg-gradient-to-r from-cyan-400/60 to-transparent" />
            </div>

            <div className="grid gap-4 lg:grid-cols-3">
              {[
                {
                  name: "Dra. LucÃ­a Ferreyra",
                  role: "OdontÃ³loga",
                  problem: "RespondÃ­a consultas manualmente despuÃ©s de cada turno y perdÃ­a pacientes por demora.",
                  result: "Con la automatizaciÃ³n, los mensajes entran, se responden y los turnos quedan preconfirmados sin perseguir cada chat.",
                  initials: "LF",
                  accent: "from-cyan-500/20 to-sky-500/10",
                },
                {
                  name: "MartÃ­n Rivas",
                  role: "Nutricionista",
                  problem: "Gastaba demasiado tiempo repitiendo horarios, precios y seguimiento de controles por WhatsApp.",
                  result: "Ahora recibe consultas, agenda controles y envÃ­a recordatorios automÃ¡ticos sin tener que responder lo mismo todo el dÃ­a.",
                  initials: "MR",
                  accent: "from-emerald-500/20 to-green-500/10",
                },
                {
                  name: "SofÃ­a Castro",
                  role: "Centro de estÃ©tica",
                  problem: "Las reservas y reprogramaciones se le mezclaban con mensajes de interÃ©s que se enfriaban rÃ¡pido.",
                  result: "Con el flujo automatizado, cada consulta recibe respuesta inmediata y los turnos quedan mÃ¡s ordenados y confirmados.",
                  initials: "SC",
                  accent: "from-pink-500/20 to-rose-500/10",
                },
              ].map((item) => (
                <article
                  key={item.name}
                  className="rounded-[1.75rem] border border-white/8 bg-white/[0.03] p-6 sm:p-7"
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
          <div className="container py-16 sm:py-20">
            <div className="mb-10 max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/40">
                CÃ³mo funciona
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                Un proceso simple para automatizar sin incertidumbre
              </h2>
              <div className="mt-5 h-px w-24 bg-gradient-to-r from-cyan-400/60 to-transparent" />
            </div>

            <div className="grid gap-4 lg:grid-cols-4">
              {[
                {
                  step: "01",
                  icon: "?",
                  title: "DiagnÃ³stico",
                  description: "Revisamos tu flujo actual y detectamos dÃ³nde se pierden consultas y turnos.",
                },
                {
                  step: "02",
                  icon: "âš™",
                  title: "ConfiguraciÃ³n",
                  description: "Armamos mensajes, reglas y conexiones segÃºn tu negocio.",
                },
                {
                  step: "03",
                  icon: "âš¡",
                  title: "AutomatizaciÃ³n",
                  description: "El asistente responde, agenda y hace seguimiento por WhatsApp.",
                },
                {
                  step: "04",
                  icon: "â†’",
                  title: "Puesta en marcha",
                  description: "Lo dejamos funcionando y listo para recibir consultas reales.",
                },
              ].map((item) => (
                <article
                  key={item.step}
                  className="relative rounded-[1.75rem] border border-white/8 bg-white/[0.03] p-6 transition-all duration-300 hover:border-white/15 hover:bg-white/[0.05] sm:p-7"
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
      </main>
    </>
  );
}

export default function App() {
  return null;
}

