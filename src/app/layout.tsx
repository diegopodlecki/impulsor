/* eslint-disable react-refresh/only-export-components */
import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import Link from "next/link";
import type { ReactNode } from "react";
import { MessageCircle } from "lucide-react";

import { JsonLd } from "@/components/JsonLd";
import { SITE_CONFIG } from "@/lib/constants";
import "./globals.css";

type SiteConfig = {
  name?: string;
  url?: string;
  description?: string;
  phone?: string;
  whatsapp?: string;
};

const site = SITE_CONFIG as SiteConfig;

const SITE_NAME = site.name ?? "WebAppImpulsor";
const SITE_URL = (site.url ?? "https://webappimpulsor.com").replace(/\/+$/, "");
const SITE_DESCRIPTION =
  site.description ??
  "Creación de páginas web profesionales para entrenadores, psicólogos, nutricionistas y profesionales independientes en Argentina. Webs diseñadas para recibir consultas por WhatsApp.";
const WHATSAPP_NUMBER = (site.phone ?? site.whatsapp ?? "+541166448389").replace(/\D/g, "");
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
const SITE_TITLE = "WebAppImpulsor | Tu web profesional en 72 horas";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s | WebAppImpulsor",
  },
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "WebAppImpulsor | Tu web profesional en 72 horas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "",
  },
};

const navigation = [
  { href: "/#servicios", label: "Servicios" },
  { href: "/#testimonios", label: "Testimonios" },
  { href: "/#precios", label: "Precios" },
  { href: "/webs", label: "Rubros" },
  { href: "/#contacto", label: "Contacto" },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "WebAppImpulsor",
  url: "https://webappimpulsor.com",
  description:
    "Creación de páginas web profesionales para entrenadores, psicólogos, nutricionistas y profesionales independientes en Argentina. Webs diseñadas para recibir consultas por WhatsApp.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Buenos Aires",
    addressRegion: "CABA",
    addressCountry: "AR",
  },
  telephone: "+541166448389",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    telephone: "+541166448389",
    availableLanguage: "Spanish",
  },
  areaServed: {
    "@type": "Country",
    name: "Argentina",
  },
  serviceType: [
    "Diseño web",
    "Desarrollo web",
    "Páginas web para profesionales",
    "Integración con WhatsApp",
  ],
  priceRange: "$$",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
};

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[hsl(var(--primary))] to-emerald-400 text-white shadow-[0_18px_50px_-20px_rgba(14,165,233,0.55)]">
            W
          </span>
          <span className="text-sm font-semibold tracking-[0.18em] text-foreground sm:text-base">
            WEBAPP<span className="text-[hsl(var(--primary))]">IMPULSOR</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
        >
          <MessageCircle className="mr-2 h-4 w-4" />
          Consultar
        </a>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
        <div>
          <p className="text-lg font-semibold text-foreground">WebAppImpulsor</p>
          <p className="mt-2 max-w-xl text-sm leading-6 text-white/60">
            Diseño web para profesionales independientes en Argentina. Sitios pensados para generar consultas
            reales por WhatsApp y formulario.
          </p>
        </div>

        <div className="flex flex-col gap-3 text-sm text-white/60 lg:items-end">
          <p>Buenos Aires, Argentina</p>
          <a href="mailto:info@webappimpulsor.com" className="transition-colors hover:text-white">
            info@webappimpulsor.com
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-white"
          >
            +54 11 6644-8389
          </a>
        </div>
      </div>
    </footer>
  );
}

function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Hablar por WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_18px_50px_-18px_rgba(34,197,94,0.7)] transition-transform duration-300 hover:scale-110"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="es-AR" className={`${inter.variable} ${jakarta.variable}`}>
      <head>
        <meta name="geo.region" content="AR-C" />
        <meta name="geo.placename" content="Buenos Aires, Argentina" />
      </head>
      <body className={inter.className}>
        <JsonLd data={schema} />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
