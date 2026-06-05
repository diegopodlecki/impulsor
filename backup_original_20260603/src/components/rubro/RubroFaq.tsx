import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { RubroConfig } from "@/types/rubro";

interface RubroFaqProps {
  config: RubroConfig;
}

export default function RubroFaq({ config }: RubroFaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 bg-slate-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            {config.faq.title}
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {config.faq.items.map((item, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden"
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
              >
                <span className="font-bold text-slate-900 pr-8">{item.question}</span>
                <ChevronDown 
                  className={`h-5 w-5 text-slate-400 flex-shrink-0 transition-transform ${
                    openIndex === idx ? "rotate-180" : ""
                  }`} 
                />
              </button>
              {openIndex === idx && (
                <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}