import { MessageCircle } from "lucide-react";

interface DemoBannerProps {
  ctaText: string;
  whatsappMessage: string;
  whatsappNumber: string;
}

export default function DemoBanner({ ctaText, whatsappMessage, whatsappNumber }: DemoBannerProps) {
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="bg-gradient-to-r from-blue-900 to-violet-900 px-6 py-3">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-white text-sm">
            <span>👀</span>
            <span className="font-medium">Esto es una demo. ¿Querés esta web para tu negocio?</span>
          </div>
          <a
            href={whatsappLink}
            className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white font-semibold rounded-full text-sm hover:bg-green-600 transition-colors"
          >
            <MessageCircle className="h-4 w-4" />
            {ctaText}
          </a>
        </div>
      </div>
      <div className="h-14" />
    </div>
  );
}