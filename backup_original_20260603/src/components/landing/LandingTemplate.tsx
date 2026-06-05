import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface LandingTemplateProps {
  children: ReactNode;
  className?: string;
}

export function LandingTemplate({ children, className }: LandingTemplateProps) {
  return <>{children}</>;
}

interface HeroSectionProps {
  badge: string;
  title: string;
  subtitle: string;
  ctaText: string;
  ctaSecondaryText?: string;
  onCtaClick?: () => void;
  onSecondaryCtaClick?: () => void;
  backgroundImage?: string;
  theme: {
    accent: string;
    border: string;
    primary: string;
  };
}

export function HeroSection({
  badge,
  title,
  subtitle,
  ctaText,
  ctaSecondaryText,
  onCtaClick,
  onSecondaryCtaClick,
  backgroundImage,
  theme,
}: HeroSectionProps) {
  return (
    <section
      className="relative section-padding"
      style={
        backgroundImage
          ? {
              backgroundImage: `linear-gradient(135deg, rgba(15,23,42,0.9) 0%, rgba(15,23,42,0.85) 100%), url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }
          : {}
      }
    >
      <div className="section-container relative z-10">
        <div className="max-w-3xl">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium micro-fade-up"
            style={{
              border: `1px solid ${theme.border}`,
              backgroundColor: `${theme.accent}12`,
              color: theme.accent,
            }}
          >
            <span>✨</span>
            {badge}
          </div>

          <h1 className="mt-8 text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl micro-fade-up" style={{ animationDelay: '100ms' }}>
            {title}
          </h1>

          <p className="mt-6 text-lg leading-8 text-white/80 max-w-2xl micro-fade-up" style={{ animationDelay: '200ms' }}>
            {subtitle}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 micro-fade-up" style={{ animationDelay: '300ms' }}>
            <button
              onClick={onCtaClick}
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-2"
            >
              {ctaText}
            </button>
            {ctaSecondaryText && (
              <button
                onClick={onSecondaryCtaClick}
                className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-white/20 text-white font-semibold backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/30"
              >
                {ctaSecondaryText}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

interface StatBoxProps {
  value: string;
  label: string;
}

export function StatBox({ value, label }: StatBoxProps) {
  return (
    <div className="card-base p-6 card-hover text-center">
      <div className="text-3xl font-bold text-white">{value}</div>
      <p className="mt-2 text-sm text-white/70">{label}</p>
    </div>
  );
}

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  image?: string;
  index?: number;
}

export function ServiceCard({ icon, title, description, image, index = 0 }: ServiceCardProps) {
  return (
    <div
      className="card-base card-hover flex flex-col overflow-hidden micro-fade-up group cursor-pointer"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {image && (
        <div className="aspect-video overflow-hidden bg-slate-950 h-40">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
      )}
      <div className="flex flex-col gap-3 p-6">
        <div className="text-3xl">{icon}</div>
        <h3 className="font-semibold text-lg text-white">{title}</h3>
        <p className="text-sm text-white/70 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

interface BenefitCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  index?: number;
}

export function BenefitCard({ title, description, icon, index = 0 }: BenefitCardProps) {
  return (
    <div
      className="card-base card-hover p-6 micro-fade-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {icon && <div className="text-4xl mb-4">{icon}</div>}
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm text-white/70 leading-relaxed">{description}</p>
    </div>
  );
}

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  avatar?: string;
  index?: number;
}

export function TestimonialCard({ quote, author, role, avatar, index = 0 }: TestimonialCardProps) {
  return (
    <div
      className="card-base card-hover p-6 micro-fade-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex items-start gap-4 mb-4">
        {avatar ? (
          <img
            src={avatar}
            alt={author}
            className="h-10 w-10 rounded-full object-cover flex-shrink-0"
          />
        ) : (
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center flex-shrink-0 text-sm font-bold text-white">
            {author.charAt(0)}
          </div>
        )}
        <div>
          <p className="font-semibold text-white text-sm">{author}</p>
          <p className="text-xs text-white/60">{role}</p>
        </div>
      </div>
      <p className="text-sm leading-relaxed text-white/80 italic">"{quote}"</p>
    </div>
  );
}

interface SectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  theme?: {
    accent: string;
    primary: string;
  };
  children: ReactNode;
  className?: string;
}

export function Section({
  title,
  subtitle,
  description,
  theme,
  children,
  className,
}: SectionProps) {
  return (
    <section className={cn('section-container section-padding', className)}>
      <div className="mb-16">
        {subtitle && (
          <p className="text-sm font-semibold uppercase tracking-widest text-white/60 mb-2">
            {subtitle}
          </p>
        )}
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">{title}</h2>
        {description && (
          <p className="text-lg text-white/70 max-w-2xl">{description}</p>
        )}
      </div>
      {children}
    </section>
  );
}
