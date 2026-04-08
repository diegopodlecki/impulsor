import { ArrowRight, Clock } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface ClosingSectionProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  accentColor?: string;
}

export default function ClosingSection({
  title,
  subtitle = "Tu futuro yo te lo va a agradecer",
  ctaText = "Empezar hoy",
  accentColor = "orange"
}: ClosingSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);
  const colorClasses = {
    orange: {
      gradient: "from-orange-500 to-red-600",
      text: "text-orange-400",
      bg: "bg-orange-500",
      glow: "from-orange-500/20 to-red-500/10",
      border: "border-orange-500/25",
    },
    cyan: {
      gradient: "from-cyan-400 to-blue-600",
      text: "text-cyan-400",
      bg: "bg-cyan-500",
      glow: "from-cyan-500/20 to-blue-500/10",
      border: "border-cyan-500/25",
    },
    indigo: {
      gradient: "from-indigo-500 to-violet-600",
      text: "text-indigo-400",
      bg: "bg-indigo-500",
      glow: "from-indigo-500/20 to-violet-500/10",
      border: "border-indigo-500/25",
    },
    emerald: {
      gradient: "from-emerald-500 to-teal-600",
      text: "text-emerald-400",
      bg: "bg-emerald-500",
      glow: "from-emerald-500/20 to-teal-500/10",
      border: "border-emerald-500/25",
    },
    rose: {
      gradient: "from-rose-500 to-pink-600",
      text: "text-rose-400",
      bg: "bg-rose-500",
      glow: "from-rose-500/20 to-pink-500/10",
      border: "border-rose-500/25",
    },
  };

  const colors = colorClasses[accentColor as keyof typeof colorClasses] || colorClasses.orange;

  return (
    <section 
      ref={sectionRef}
      id="contacto" 
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900" />
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-r ${colors.glow} to-transparent rounded-full blur-[150px] transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`} />

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700/50 text-slate-400 text-sm transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '0ms' }}>
            <Clock className="w-4 h-4 animate-pulse" />
            Solo toma 7 días
          </div>

          <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '100ms' }}>
            {title}
          </h2>

          <p className={`text-xl text-slate-400 max-w-xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>
            {subtitle}
          </p>

          <div className={`pt-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '300ms' }}>
            <a
              href="#contacto"
              className={`group inline-flex items-center justify-center gap-3 px-12 py-5 text-xl font-bold rounded-2xl bg-gradient-to-r ${colors.gradient} text-white shadow-2xl shadow-${accentColor === 'orange' ? 'orange' : accentColor}-500/30 hover:shadow-${accentColor === 'orange' ? 'orange' : accentColor}-500/50 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] active:scale-[0.98]`}
            >
              {ctaText}
              <ArrowRight className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          <p className={`text-sm text-slate-500 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '400ms' }}>
            Sin compromiso. Primera consulta sin cargo.
          </p>
        </div>
      </div>
    </section>
  );
}
