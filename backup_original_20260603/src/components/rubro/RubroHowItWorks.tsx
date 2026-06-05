import type { RubroConfig } from "@/types/rubro";

interface RubroHowItWorksProps {
  config: RubroConfig;
}

export default function RubroHowItWorks({ config }: RubroHowItWorksProps) {
  return (
    <section className="py-20 bg-slate-900">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            {config.howItWorks.title}
          </h2>
          <p className="text-white/50 text-lg">
            {config.howItWorks.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto relative">
          {/* Connector line for desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-1/2 z-0" />

          {config.howItWorks.steps.map((step, idx) => (
            <div 
              key={idx}
              className="relative text-center p-8 rounded-2xl bg-slate-800/50 border border-white/5 overflow-hidden z-10"
            >
              <div className="absolute top-4 left-4 text-6xl font-black text-white/10 select-none">
                {step.number}
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-white/50 text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}