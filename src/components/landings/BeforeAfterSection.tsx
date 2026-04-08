import { TrendingUp, Clock, Award } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface BeforeAfterItem {
  before: string;
  after: string;
  name: string;
  result: string;
  timeframe: string;
}

interface BeforeAfterSectionProps {
  title?: string;
  subtitle?: string;
  items: BeforeAfterItem[];
  accentColor?: string;
}

export default function BeforeAfterSection({
  title = "Resultados que hablan por sí solos",
  subtitle = "Transformaciones reales de negocios como el tuyo",
  items,
  accentColor = "orange"
}: BeforeAfterSectionProps) {
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
      { threshold: 0.1 }
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
      border: "border-orange-500/30",
      glow: "bg-orange-500/20",
      badge: "bg-orange-500/20 text-orange-400",
    },
    cyan: {
      gradient: "from-cyan-400 to-blue-600",
      text: "text-cyan-400",
      border: "border-cyan-500/30",
      glow: "bg-cyan-500/20",
      badge: "bg-cyan-500/20 text-cyan-400",
    },
    rose: {
      gradient: "from-rose-500 to-pink-600",
      text: "text-rose-400",
      border: "border-rose-500/30",
      glow: "bg-rose-500/20",
      badge: "bg-rose-500/20 text-rose-400",
    },
  };

  const colors = colorClasses[accentColor as keyof typeof colorClasses] || colorClasses.orange;

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900" />
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r ${colors.glow} to-transparent rounded-full blur-[150px] transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} />

      <div className="container relative z-10">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${colors.badge} border ${colors.border} text-sm font-semibold mb-6`}>
            <TrendingUp className="w-4 h-4" />
            Casos de éxito
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            {title}
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {items.map((item, idx) => (
            <div 
              key={idx}
              className={`group relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative rounded-3xl overflow-hidden border border-slate-700/50 hover:border-slate-600/80 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-900/50 bg-slate-900/80 backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-0.5 img-zoom-premium">
                  <div className="relative">
                    <img 
                      src={item.before} 
                      alt={`Antes - ${item.name}`}
                      className="w-full aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-sm text-slate-300 text-xs font-semibold uppercase tracking-wider">
                        Antes
                      </span>
                    </div>
                  </div>
                  <div className="relative">
                    <img 
                      src={item.after} 
                      alt={`Después - ${item.name}`}
                      className="w-full aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-3 left-3">
                      <span className={`px-3 py-1.5 rounded-full backdrop-blur-sm text-xs font-semibold uppercase tracking-wider bg-gradient-to-r ${colors.gradient} text-white`}>
                        Después
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-slate-900/90 backdrop-blur-sm">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="font-bold text-lg text-white transition-colors duration-300 group-hover:text-orange-200">{item.name}</h3>
                    <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full ${colors.badge} text-xs font-medium transition-transform duration-300 group-hover:scale-105`}>
                      <Clock className="w-3.5 h-3.5" />
                      {item.timeframe}
                    </div>
                  </div>
                  
                  <div className={`flex items-center gap-2 p-4 rounded-xl bg-gradient-to-r ${colors.glow} to-transparent border ${colors.border} transition-all duration-300 group-hover:scale-[1.02]`}>
                    <Award className={`w-5 h-5 ${colors.text} flex-shrink-0 transition-transform duration-300 group-hover:scale-110`} />
                    <p className="text-slate-300 text-sm font-medium">{item.result}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
