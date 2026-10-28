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
    <section id="gallery" className="py-16 sm:py-20 lg:py-24 bg-sand-light border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-px w-8 bg-gold"></span>
            <span className="text-xs uppercase tracking-widest font-semibold text-gold-dark">
              Visual Tour
            </span>
            <span className="h-px w-8 bg-gold"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-charcoal tracking-tight mb-4">
            Authentic Property <span className="italic font-serif text-gold-dark">Gallery</span>
          </h2>

          <p className="text-base sm:text-lg text-warm-grey-dark leading-relaxed font-normal">
            Real, unedited photographs of Kharari Inn showing our property facade, air-conditioned rooms, and green terrace corridor in Ayodhya Dham.
          </p>

          <div className="inline-flex items-center gap-1.5 mt-3 text-xs text-charcoal/70 bg-white px-3 py-1 rounded-full border border-border">
            <Camera className="w-3.5 h-3.5 text-gold-dark" />
            <span>100% Authentic Property Photography • Click any photo to view full-screen</span>
          </div>
        </div>

        {/* Editorial Asymmetric Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Item 1: Exterior (Spans 7 cols on desktop) */}
          <div
            onClick={() => handleOpenLightbox(0)}
            className="lg:col-span-7 bg-white rounded-sm border border-border overflow-hidden shadow-subtle group cursor-pointer relative"
          >
            <div className="aspect-[16/10] overflow-hidden bg-sand/30">
              <img
                src={GALLERY_IMAGES[0].image}
                alt={GALLERY_IMAGES[0].alt}
                className="w-full h-full object-cover img-zoom"
                loading="lazy"
              />
            </div>
            <div className="p-4 bg-white flex items-center justify-between border-t border-border">
              <div>
                <span className="text-[10px] uppercase tracking-wider font-semibold text-gold-dark">
                  {GALLERY_IMAGES[0].category}
                </span>
                <h3 className="font-serif text-lg font-medium text-charcoal">
                  {GALLERY_IMAGES[0].title}
                </h3>
              </div>
              <div className="p-2 text-charcoal/70 group-hover:text-gold-dark group-hover:bg-sand/50 rounded-full transition-colors">
                <Maximize2 className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Item 2: Double Room (Spans 5 cols on desktop) */}
          <div
            onClick={() => handleOpenLightbox(1)}
            className="lg:col-span-5 bg-white rounded-sm border border-border overflow-hidden shadow-subtle group cursor-pointer relative"
          >
            <div className="aspect-[16/10] overflow-hidden bg-sand/30">
              <img
                src={GALLERY_IMAGES[1].image}
                alt={GALLERY_IMAGES[1].alt}
                className="w-full h-full object-cover img-zoom"
                loading="lazy"
              />
            </div>
            <div className="p-4 bg-white flex items-center justify-between border-t border-border">
              <div>
                <span className="text-[10px] uppercase tracking-wider font-semibold text-gold-dark">
                  {GALLERY_IMAGES[1].category}
                </span>
                <h3 className="font-serif text-lg font-medium text-charcoal">
                  {GALLERY_IMAGES[1].title}
                </h3>
              </div>
              <div className="p-2 text-charcoal/70 group-hover:text-gold-dark group-hover:bg-sand/50 rounded-full transition-colors">
                <Maximize2 className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Item 3: Triple Room (Spans 5 cols on desktop) */}
          <div
            onClick={() => handleOpenLightbox(2)}
            className="lg:col-span-5 bg-white rounded-sm border border-border overflow-hidden shadow-subtle group cursor-pointer relative"
          >
            <div className="aspect-[16/10] overflow-hidden bg-sand/30">
              <img
                src={GALLERY_IMAGES[2].image}
                alt={GALLERY_IMAGES[2].alt}
                className="w-full h-full object-cover img-zoom"
                loading="lazy"
              />
            </div>
            <div className="p-4 bg-white flex items-center justify-between border-t border-border">
              <div>
                <span className="text-[10px] uppercase tracking-wider font-semibold text-gold-dark">
                  {GALLERY_IMAGES[2].category}
                </span>
                <h3 className="font-serif text-lg font-medium text-charcoal">
                  {GALLERY_IMAGES[2].title}
                </h3>
              </div>
              <div className="p-2 text-charcoal/70 group-hover:text-gold-dark group-hover:bg-sand/50 rounded-full transition-colors">
                <Maximize2 className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Item 4: Corridor / Terrace (Spans 7 cols on desktop) */}
          <div
            onClick={() => handleOpenLightbox(3)}
            className="lg:col-span-7 bg-white rounded-sm border border-border overflow-hidden shadow-subtle group cursor-pointer relative"
          >
            <div className="aspect-[16/10] overflow-hidden bg-sand/30">
              <img
                src={GALLERY_IMAGES[3].image}
                alt={GALLERY_IMAGES[3].alt}
                className="w-full h-full object-cover img-zoom"
                loading="lazy"
              />
            </div>
            <div className="p-4 bg-white flex items-center justify-between border-t border-border">
              <div>
                <span className="text-[10px] uppercase tracking-wider font-semibold text-gold-dark">
                  {GALLERY_IMAGES[3].category}
                </span>
                <h3 className="font-serif text-lg font-medium text-charcoal">
                  {GALLERY_IMAGES[3].title}
                </h3>
              </div>
              <div className="p-2 text-charcoal/70 group-hover:text-gold-dark group-hover:bg-sand/50 rounded-full transition-colors">
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
