import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import Services from "./components/Services";
import ProblemSolution from "./components/ProblemSolution";
import SimpleProcess from "./components/SimpleProcess";
import UseCases from "./components/UseCases";
import Benefits from "./components/Benefits";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

export default function App() {
  return (
    <div className="relative min-h-screen text-ink-900 antialiased">
      {/* ===== Capas de fondo globales (evitan el exceso de blanco) ===== */}
      <div className="pointer-events-none fixed inset-0 -z-50">
        {/* base con tinte cálido */}
        <div className="absolute inset-0 bg-[#f6f8f9]" />
        {/* malla de gradientes de color */}
        <div className="absolute inset-0 app-bg-mesh" />
        {/* orbes animados que dan vida y profundidad */}
        <div className="absolute -left-32 top-24 h-[420px] w-[420px] animate-blob rounded-full bg-emerald-300/20 blur-3xl" />
        <div className="absolute right-[-10rem] top-1/3 h-[380px] w-[380px] animate-blob rounded-full bg-cyan-300/20 blur-3xl" style={{ animationDelay: "3s" }} />
        <div className="absolute bottom-24 left-1/3 h-[360px] w-[360px] animate-blob rounded-full bg-teal-300/15 blur-3xl" style={{ animationDelay: "6s" }} />
        {/* grano sutil */}
        <div className="absolute inset-0 app-bg-noise" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <ProblemSolution />
        <CTA />
        <SimpleProcess />
        <UseCases />
        <Benefits />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
