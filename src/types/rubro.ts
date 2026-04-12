export interface RubroStat {
  value: string;
  label: string;
}

export interface RubroService {
  icon: string;
  title: string;
  description: string;
}

export interface RubroStep {
  number: string;
  title: string;
  description: string;
}

export interface RubroPlan {
  name: string;
  price: string;
  period: string;
  badge?: string;
  description: string;
  features: string[];
  excluded?: string[];
  ctaText: string;
  highlighted: boolean;
}

export interface RubroTestimonial {
  initials: string;
  avatarColor: string;
  name: string;
  role: string;
  location: string;
  quote: string;
  result: string;
  stars: number;
}

export interface RubroFaqItem {
  question: string;
  answer: string;
}

export interface RubroConfig {
  slug: string;
  rubro: string;
  emoji: string;
  accentColor: string;
  accentColorHex: string;
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    ctaText: string;
    backgroundImage: string;
    stats: RubroStat[];
  };
  services: {
    title: string;
    subtitle: string;
    items: RubroService[];
  };
  howItWorks: {
    title: string;
    subtitle: string;
    steps: RubroStep[];
  };
  pricing: {
    title: string;
    subtitle: string;
    note: string;
    plans: RubroPlan[];
  };
  testimonials: {
    title: string;
    subtitle: string;
    items: RubroTestimonial[];
  };
  faq: {
    title: string;
    items: RubroFaqItem[];
  };
  contact: {
    title: string;
    subtitle: string;
    whatsappNumber: string;
    whatsappMessage: string;
    ctaText: string;
    email?: string;
    hours?: string;
    address?: string;
  };
  demo: {
    ctaText: string;
    whatsappMessage: string;
    whatsappNumber: string;
  };
}