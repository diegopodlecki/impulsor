import { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

export interface ImageItem {
  src: string;
  alt: string;
  caption?: string;
}

interface SectionGaleriaProps {
  title: string;
  subtitle?: string;
  description?: string;
  images: ImageItem[];
  columns?: 2 | 3 | 4;
}

export function SectionGaleria({
  title,
  subtitle,
  description,
  images,
  columns = 2,
}: SectionGaleriaProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const gridClass = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  }[columns];

  const handlePrev = () => {
    if (selectedImage === null) return;
    setSelectedImage((selectedImage - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    if (selectedImage === null) return;
    setSelectedImage((selectedImage + 1) % images.length);
  };

  return (
    <section className="relative py-32 bg-gradient-to-b from-slate-950/60 to-slate-950/40 overflow-hidden">
      <div className="container relative z-10">
        <div className="mx-auto max-w-2xl text-center mb-16">
          {subtitle && (
            <span className="inline-block text-xs font-bold text-purple-400 uppercase tracking-[0.2em] mb-4 px-4 py-1.5 bg-purple-500/10 rounded-full border border-purple-500/20">
              {subtitle}
            </span>
          )}
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
            {title}
          </h2>
          {description && (
            <p className="mt-6 text-xl text-white/60">
              {description}
            </p>
          )}
        </div>

        <div className={`grid ${gridClass} gap-8 max-w-6xl mx-auto`}>
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10"
              onClick={() => setSelectedImage(index)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-square overflow-hidden bg-slate-900">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30 backdrop-blur-sm">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-xl flex items-center justify-center border border-white/20 transition-transform duration-300 group-hover:scale-110">
                    <span className="text-2xl">🔍</span>
                  </div>
                </div>

                {image.caption && (
                  <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                    <p className="text-sm font-semibold text-white">{image.caption}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-4">
          <div className="relative w-full max-w-5xl max-h-[90vh] flex flex-col">
            <img
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              className="w-full h-full object-contain rounded-2xl"
            />

            {images[selectedImage].caption && (
              <p className="mt-6 text-center text-white text-lg font-medium">
                {images[selectedImage].caption}
              </p>
            )}

            <div className="absolute inset-0 flex items-center justify-between px-4 pointer-events-none">
              <button
                onClick={handlePrev}
                className="pointer-events-auto p-4 rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/20 transition-all duration-300 hover:scale-110"
              >
                <ChevronLeft className="w-8 h-8 text-white" />
              </button>
              <button
                onClick={handleNext}
                className="pointer-events-auto p-4 rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/20 transition-all duration-300 hover:scale-110"
              >
                <ChevronRight className="w-8 h-8 text-white" />
              </button>
            </div>

            <div className="absolute top-6 right-6 bg-black/50 px-5 py-2 rounded-full text-white text-sm font-semibold backdrop-blur-xl border border-white/10">
              {selectedImage + 1} / {images.length}
            </div>

            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 left-6 p-4 rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/20 transition-all duration-300 hover:scale-110 z-10"
            >
              <X className="w-8 h-8 text-white" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
