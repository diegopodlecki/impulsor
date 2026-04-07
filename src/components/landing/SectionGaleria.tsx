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
    <section className="section-container section-padding section-premium">
      <div className="mb-16">
        {subtitle && (
          <p className="text-caption text-purple-400 mb-2">
            {subtitle}
          </p>
        )}
        <h2 className="title-h2 mb-6">{title}</h2>
        {description && (
          <p className="text-body-lg max-w-3xl">{description}</p>
        )}
      </div>

      {/* Gallery Grid */}
      <div className={`grid ${gridClass} gap-6 mb-8`}>
        {images.map((image, index) => (
          <div
            key={index}
            className="card-premium shadow-premium overflow-hidden group cursor-pointer micro-fade-up hover-lift"
            onClick={() => setSelectedImage(index)}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="relative aspect-square overflow-hidden bg-slate-800">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-premium img-zoom"
              />
              <div className="absolute inset-0 premium-image-overlay" />

              {/* Hover overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20 backdrop-premium">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 transition-transform duration-300 group-hover:scale-110">
                  <span className="text-2xl text-white">🔍</span>
                </div>
              </div>

              {/* Caption */}
              {image.caption && (
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                  <p className="text-sm text-white font-semibold">{image.caption}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          {/* Image Container */}
          <div className="relative w-full max-w-4xl max-h-[90vh] flex flex-col">
            {/* Image */}
            <img
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              className="w-full h-full object-contain rounded-xl"
            />

            {/* Caption */}
            {images[selectedImage].caption && (
              <p className="mt-4 text-center text-white text-sm">
                {images[selectedImage].caption}
              </p>
            )}

            {/* Navigation */}
            <div className="absolute inset-0 flex items-center justify-between px-4 pointer-events-none">
              <button
                onClick={handlePrev}
                className="pointer-events-auto p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={handleNext}
                className="pointer-events-auto p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>

            {/* Image Counter */}
            <div className="absolute top-4 right-4 bg-black/50 px-4 py-2 rounded-full text-white text-sm font-semibold">
              {selectedImage + 1} / {images.length}
            </div>

            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 left-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
            >
              <X className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
