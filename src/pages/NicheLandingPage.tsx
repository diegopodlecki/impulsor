"use client";
import { LandingPageRenderer } from "@/components/landing/LandingPageRenderer";
import { landingConfigs } from "@/data/landingConfigs";

type NicheLandingPageProps = {
  niche: string;
};

export default function NicheLandingPage({ niche }: NicheLandingPageProps) {
  const config = landingConfigs[niche];
  
  if (!config) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Landing no encontrada</h1>
          <p className="text-white/70">El nicho "{niche}" no está configurado.</p>
        </div>
      </div>
    );
  }
  
  return <LandingPageRenderer config={config} />;
}
