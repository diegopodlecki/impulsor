import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export function AboutModalTrigger() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="btn-primary rounded-full px-8 py-4 font-bold shadow-cyan-500/20">
          Conocé mi historia
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] rounded-[2rem] p-0 overflow-hidden border-none shadow-2xl">
        <div className="bg-slate-950 p-8 lg:p-12 text-white">
          <DialogHeader>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-16 w-16 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 p-0.5 shadow-lg">
                <img
                  src="/lovable-uploads/6007e543-982c-473d-82d2-ca49d47343e0.png"
                  alt="Diego Podlecki"
                  className="h-full w-full rounded-[0.7rem] object-cover"
                />
              </div>
              <div>
                <DialogTitle className="text-2xl font-black tracking-tight">Diego Podlecki</DialogTitle>
                <p className="text-cyan-400 text-sm font-bold uppercase tracking-widest">Estratega de Conversión</p>
              </div>
            </div>
          </DialogHeader>
          
          <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
            <p className="font-bold text-white text-xl">
              "No hago páginas web. Creo herramientas de venta."
            </p>
            <p>
              Empecé en el mundo digital entendiendo que una web "linda" no sirve de nada si no genera resultados. Mi enfoque es 100% pragmático: diseño para que tu cliente te encuentre, confíe en vos y te escriba.
            </p>
            <p>
              He ayudado a más de 40 profesionales y negocios de servicios a profesionalizar su imagen y, lo más importante, a tener un flujo constante de consultas calificadas.
            </p>
            <p>
              Mi compromiso es simple: una web que comunique tu valor real y trabaje por vos las 24 horas del día.
            </p>
          </div>

          <div className="mt-10 flex justify-end">
             <Button asChild className="btn-primary rounded-full">
                <a href="#contacto">Trabajemos juntos</a>
             </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
