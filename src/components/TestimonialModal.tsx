import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { TESTIMONIOS } from "@/lib/testimonios";
import { StarRow, TestimonialAvatar } from "./sections/Testimonials";
import { Target, Quote } from "lucide-react";

type Testimonial = (typeof TESTIMONIOS)[number];

export function TestimonialModal({ 
  testimonial, 
  children 
}: { 
  testimonial: Testimonial; 
  children: React.ReactNode 
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="cursor-pointer h-full">
          {children}
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[550px] rounded-[2rem] p-0 overflow-hidden border-none shadow-2xl">
        <div className="bg-slate-950 p-8 lg:p-12 text-white relative">
          {/* Decorative Quote Icon */}
          <Quote className="absolute top-8 right-8 h-20 w-20 text-white/5 -rotate-12" />
          
          <DialogHeader>
            <div className="flex items-center gap-5 mb-8 relative z-10">
              <TestimonialAvatar testimonial={testimonial} />
              <div>
                <DialogTitle className="text-xl font-black tracking-tight text-white">{testimonial.nombre}</DialogTitle>
                <div className="flex items-center gap-2 mt-1.5">
                  <StarRow stars={testimonial.rating} />
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-2">{testimonial.rubro}</span>
                </div>
              </div>
            </div>
          </DialogHeader>
          
          <div className="relative z-10">
            <p className="text-xl font-medium leading-relaxed text-slate-200 italic">
              "{testimonial.texto}"
            </p>
            
            <div className="mt-10 p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-3 text-[#0EA5E9] mb-2">
                <Target className="h-5 w-5" />
                <span className="text-sm font-black uppercase tracking-widest">Resultado Real</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                {testimonial.resultado || "Este proyecto logró profesionalizar su imagen digital y establecer un sistema de captación de consultas automático e independiente de redes sociales."}
              </p>
            </div>
          </div>

          <div className="mt-10 flex items-center justify-between text-[11px] font-bold text-slate-500 uppercase tracking-widest">
            <span>Plan: {testimonial.plan}</span>
            <span>Verificado por WebAppImpulsor</span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
