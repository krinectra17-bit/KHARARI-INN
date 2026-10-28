import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryImage } from '../types';

interface LightboxModalProps {
  images: GalleryImage[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrev
}) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        onNext();
      } else if (e.key === 'ArrowLeft') {
        onPrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    // Prevent background scrolling while open
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen) return null;

  const currentImage = images[currentIndex];
  if (!currentImage) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image Lightbox Viewer"
      className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal-dark/95 backdrop-blur-md p-4 sm:p-6"
      onClick={onClose}
    >
      {/* Lightbox Content Container */}
      <div
        className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Bar with title and close button */}
        <div className="w-full flex items-center justify-between text-white pb-3 mb-1 border-b border-white/20">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-gold-light">
              {currentImage.category} • {currentIndex + 1} of {images.length}
            </span>
            <h3 className="font-serif text-lg sm:text-xl font-normal text-white">
              {currentImage.title}
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-gold"
            aria-label="Close Lightbox (Escape)"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Main Image Frame */}
        <div className="relative w-full flex items-center justify-center overflow-hidden my-auto rounded-sm">
          <img
            src={currentImage.image}
            alt={currentImage.alt}
            className="max-h-[70vh] w-auto max-w-full object-contain rounded-sm shadow-2xl transition-all duration-300"
          />

          {/* Left Arrow Button */}
          <button
            type="button"
            onClick={onPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-2.5 bg-black/60 hover:bg-black/80 text-white rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-gold shadow-md"
            aria-label="Previous photograph"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Arrow Button */}
          <button
            type="button"
            onClick={onNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2.5 bg-black/60 hover:bg-black/80 text-white rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-gold shadow-md"
            aria-label="Next photograph"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Caption & Description */}
        <div className="w-full text-center pt-3 text-white/80 text-xs sm:text-sm">
          <p>{currentImage.description}</p>
        </div>

      </div>
    </div>
  );
};
