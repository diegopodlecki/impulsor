'use client';

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

const SCROLL_THRESHOLD = 300;

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop || 0;
      setIsVisible(scrollTop > SCROLL_THRESHOLD);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={handleClick}
      aria-label="Ir al inicio"
      className={cn(
        "fixed bottom-24 right-6 z-[75] h-12 w-12 inline-flex items-center justify-center rounded-full",
        "bg-white/10 hover:bg-white/20 text-white/70 hover:text-white",
        "border border-white/10 hover:border-white/20",
        "shadow-[0_10px_30px_-12px_rgba(15,23,42,0.6)]",
        "transition-all duration-300 hover:scale-110",
        "backdrop-blur-sm"
      )}
    >
      <ArrowUp className="h-5 w-5" />
      <span className="sr-only">Scroll to top</span>
    </button>
  );
}
