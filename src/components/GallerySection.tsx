import React, { useState } from 'react';
import { Maximize2, Camera } from 'lucide-react';
import { GALLERY_IMAGES } from '../data/hotelData';
import { LightboxModal } from './LightboxModal';

export const GallerySection: React.FC = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const handleOpenLightbox = (index: number) => {
    setSelectedImageIndex(index);
  };

  const handleCloseLightbox = () => {
    setSelectedImageIndex(null);
  };

  const handleNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % GALLERY_IMAGES.length);
    }
  };

  const handlePrev = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
    }
  };

  return (
    <section id="gallery" className="py-16 sm:py-20 lg:py-24 bg-paper-2/40 border-b border-rule">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <p className="text-xs text-accent font-medium mb-2.5">
            Visual tour
          </p>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal text-ink tracking-tight mb-4">
            Authentic Property Gallery
          </h2>

          <p className="text-sm sm:text-base text-muted leading-relaxed font-normal">
            Real photographs of Kharari Inn showing our property facade, air-conditioned rooms, and green terrace corridor in Ayodhya Dham.
          </p>

          <div className="inline-flex items-center gap-1.5 mt-4 text-xs text-ink/75 bg-paper px-3 py-1 rounded-full border border-rule">
            <Camera className="w-3.5 h-3.5 text-accent" />
            <span>Authentic property photography. Select any photo to view full-screen</span>
          </div>
        </div>

        {/* Editorial Asymmetric Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Item 1: Exterior (Spans 7 cols on desktop) */}
          <div
            onClick={() => handleOpenLightbox(0)}
            className="lg:col-span-7 bg-paper rounded-2xl border border-rule overflow-hidden shadow-subtle hover:border-accent group cursor-pointer relative transition-colors duration-200"
          >
            <div className="aspect-[16/10] overflow-hidden bg-paper-2">
              <img
                src={GALLERY_IMAGES[0].image}
                alt={GALLERY_IMAGES[0].alt}
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
            <div className="p-4 bg-paper flex items-center justify-between border-t border-rule">
              <div>
                <p className="text-xs text-accent font-medium mb-0.5">
                  {GALLERY_IMAGES[0].category}
                </p>
                <h3 className="font-display text-lg font-medium text-ink">
                  {GALLERY_IMAGES[0].title}
                </h3>
              </div>
              <div className="p-2 text-ink/70 group-hover:text-accent group-hover:bg-paper-2 rounded-full transition-colors">
                <Maximize2 className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Item 2: Double Room (Spans 5 cols on desktop) */}
          <div
            onClick={() => handleOpenLightbox(1)}
            className="lg:col-span-5 bg-paper rounded-2xl border border-rule overflow-hidden shadow-subtle hover:border-accent group cursor-pointer relative transition-colors duration-200"
          >
            <div className="aspect-[16/10] overflow-hidden bg-paper-2">
              <img
                src={GALLERY_IMAGES[1].image}
                alt={GALLERY_IMAGES[1].alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-4 bg-paper flex items-center justify-between border-t border-rule">
              <div>
                <p className="text-xs text-accent font-medium mb-0.5">
                  {GALLERY_IMAGES[1].category}
                </p>
                <h3 className="font-display text-lg font-medium text-ink">
                  {GALLERY_IMAGES[1].title}
                </h3>
              </div>
              <div className="p-2 text-ink/70 group-hover:text-accent group-hover:bg-paper-2 rounded-full transition-colors">
                <Maximize2 className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Item 3: Triple Room (Spans 5 cols on desktop) */}
          <div
            onClick={() => handleOpenLightbox(2)}
            className="lg:col-span-5 bg-paper rounded-2xl border border-rule overflow-hidden shadow-subtle hover:border-accent group cursor-pointer relative transition-colors duration-200"
          >
            <div className="aspect-[16/10] overflow-hidden bg-paper-2">
              <img
                src={GALLERY_IMAGES[2].image}
                alt={GALLERY_IMAGES[2].alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-4 bg-paper flex items-center justify-between border-t border-rule">
              <div>
                <p className="text-xs text-accent font-medium mb-0.5">
                  {GALLERY_IMAGES[2].category}
                </p>
                <h3 className="font-display text-lg font-medium text-ink">
                  {GALLERY_IMAGES[2].title}
                </h3>
              </div>
              <div className="p-2 text-ink/70 group-hover:text-accent group-hover:bg-paper-2 rounded-full transition-colors">
                <Maximize2 className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Item 4: Corridor / Terrace (Spans 7 cols on desktop) */}
          <div
            onClick={() => handleOpenLightbox(3)}
            className="lg:col-span-7 bg-paper rounded-2xl border border-rule overflow-hidden shadow-subtle hover:border-accent group cursor-pointer relative transition-colors duration-200"
          >
            <div className="aspect-[16/10] overflow-hidden bg-paper-2">
              <img
                src={GALLERY_IMAGES[3].image}
                alt={GALLERY_IMAGES[3].alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-4 bg-paper flex items-center justify-between border-t border-rule">
              <div>
                <p className="text-xs text-accent font-medium mb-0.5">
                  {GALLERY_IMAGES[3].category}
                </p>
                <h3 className="font-display text-lg font-medium text-ink">
                  {GALLERY_IMAGES[3].title}
                </h3>
              </div>
              <div className="p-2 text-ink/70 group-hover:text-accent group-hover:bg-paper-2 rounded-full transition-colors">
                <Maximize2 className="w-4 h-4" />
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Lightbox Component */}
      <LightboxModal
        images={GALLERY_IMAGES}
        currentIndex={selectedImageIndex ?? 0}
        isOpen={selectedImageIndex !== null}
        onClose={handleCloseLightbox}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </section>
  );
};
