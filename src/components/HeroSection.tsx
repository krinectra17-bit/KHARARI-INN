import React from 'react';
import { ArrowRight, MapPin, Zap, Compass } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';
import { createWhatsAppUrl, openWhatsApp } from '../utils/whatsapp';

interface HeroSectionProps {
  onOpenBooking?: () => void;
}

// Authentic temple icon
const TempleIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5 text-accent" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M12 2v2" />
    <path d="M10 4h4" />
    <path d="M12 4l3.5 5H8.5L12 4z" />
    <path d="M6 9h12v3H6z" />
    <path d="M7 12v7" />
    <path d="M17 12v7" />
    <path d="M12 12v7" />
    <path d="M4 19h16" />
    <circle cx="12" cy="2" r="0.75" fill="currentColor" />
  </svg>
);

// WhatsApp icon
const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.63C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.53 7.5C9.36 7.5 9.09 7.57 8.85 7.82C8.62 8.08 7.96 8.69 7.96 9.96C7.96 11.22 8.88 12.44 9 12.6C9.13 12.78 10.7 15.34 13.19 16.31C15.26 17.11 15.68 16.95 16.12 16.91C16.57 16.87 17.55 16.33 17.75 15.75C17.96 15.18 17.96 14.69 17.89 14.58C17.83 14.47 17.65 14.41 17.39 14.28C17.13 14.15 15.83 13.51 15.59 13.43C15.35 13.34 15.17 13.3 15 13.56C14.82 13.82 14.33 14.41 14.18 14.58C14.03 14.75 13.88 14.77 13.62 14.65C13.36 14.51 12.53 14.24 11.54 13.36C10.77 12.67 10.25 11.82 10.1 11.56C9.95 11.3 10.08 11.16 10.21 11.03C10.33 10.91 10.48 10.72 10.62 10.56C10.76 10.39 10.8 10.28 10.89 10.1C10.98 9.93 10.93 9.78 10.87 9.65C10.8 9.52 10.3 8.31 10.09 7.8C9.89 7.3 9.69 7.37 9.53 7.5Z" />
  </svg>
);

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking: _onOpenBooking }) => {
  const scrollToRooms = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById('rooms');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookOnWhatsApp = () => {
    const defaultMsg = 'Namaste Kharari Inn, I would like to enquire about room availability and best tariffs for my visit to Ayodhya Dham.';
    const url = createWhatsAppUrl(defaultMsg, HOTEL_INFO.contacts.primaryWhatsAppRaw);
    openWhatsApp(url);
  };

  return (
    <section id="home" className="relative pt-6 sm:pt-8 lg:pt-10 pb-8 sm:pb-12 bg-paper">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Destination label in body face, sentence case, untracked */}
        <p className="text-xs text-accent font-medium mb-2.5">
          A boutique stay in Ayodhya Dham
        </p>

        {/* Full Visible Headline without mixed roman/italic */}
        <h1 className="font-display text-[2.2rem] leading-[1.12] sm:text-4xl md:text-5xl lg:text-6xl font-normal text-ink mb-3 tracking-tight">
          Your Comfortable Stay in Ayodhya Dham
        </h1>

        {/* Supporting copy */}
        <p className="text-sm sm:text-base text-muted leading-relaxed font-normal mb-6 max-w-xl">
          Comfortable rooms, warm hospitality and a convenient location for your spiritual journey.
        </p>

        {/* CTA Buttons */}
        <div className="flex items-center gap-3 mb-6 sm:mb-8">
          <button
            type="button"
            onClick={handleBookOnWhatsApp}
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-medium text-white bg-accent hover:opacity-90 rounded-xl transition-opacity duration-200 shadow-sm active:scale-[0.98]"
          >
            <WhatsAppIcon className="w-4 h-4 text-white shrink-0" />
            <span>Book on WhatsApp</span>
            <ArrowRight className="w-3.5 h-3.5 text-white/80 shrink-0" />
          </button>

          <a
            href="#rooms"
            onClick={scrollToRooms}
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-medium text-ink hover:text-accent bg-paper border border-rule hover:border-accent rounded-xl transition-colors shadow-subtle"
          >
            <span>Explore Rooms</span>
            <ArrowRight className="w-3.5 h-3.5 text-muted shrink-0" />
          </a>
        </div>

        {/* Prominent Hotel Exterior Photograph */}
        <div className="relative rounded-2xl overflow-hidden shadow-soft border border-rule bg-paper mb-6">
          <div className="aspect-[4/3] sm:aspect-[16/10] overflow-hidden bg-paper-2">
            <img
              src="/images/kharari-inn-exterior.jpg"
              alt="Kharari Inn authentic boutique hotel exterior in Ayodhya Dham with arched balcony, front parking and official signage"
              className="w-full h-full object-cover object-center"
              fetchPriority="high"
              loading="eager"
            />
          </div>

          {/* Carousel indicator dots */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 px-2.5 py-1 bg-ink/70 rounded-full">
            <span className="w-2.5 h-2.5 rounded-full bg-accent" aria-hidden="true"></span>
            <span className="w-2 h-2 rounded-full bg-white/70" aria-hidden="true"></span>
            <span className="w-2 h-2 rounded-full bg-white/70" aria-hidden="true"></span>
          </div>
        </div>

        {/* Location Strip */}
        <div className="bg-paper-3 border border-rule rounded-2xl p-3 sm:p-4 mb-6 shadow-subtle flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 text-left min-w-0">
            <div className="w-9 h-9 rounded-full bg-paper-2 text-accent flex items-center justify-center shrink-0 border border-rule">
              <MapPin className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <p className="font-medium text-xs sm:text-sm text-ink truncate">
                Ayodhya Dham, Uttar Pradesh
              </p>
              <p className="text-xs text-muted truncate">
                Near Saryu Ghat and Ram Janmabhoomi
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <div className="h-8 w-px bg-rule hidden sm:block"></div>
            <a
              href={HOTEL_INFO.contacts.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-paper-2 hover:bg-rule/40 text-ink rounded-full text-xs font-medium transition-colors shadow-subtle"
            >
              <Compass className="w-3.5 h-3.5 text-accent" />
              <span className="whitespace-nowrap">Get Directions</span>
            </a>
          </div>
        </div>

        {/* Key Property Highlights Strip */}
        <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-2 pb-6 border-b border-rule text-center">
          
          {/* Highlight 1: Shri Ram Janmabhoomi */}
          <div className="flex flex-col items-center justify-center px-1">
            <div className="mb-1.5">
              <TempleIcon className="w-6 h-6 text-accent" />
            </div>
            <p className="font-display text-base sm:text-lg font-bold text-ink leading-tight">
              ~1.8 km
            </p>
            <p className="text-xs text-muted leading-tight mt-0.5">
              Shri Ram Janmabhoomi
            </p>
          </div>

          {/* Highlight 2: Hanumangarhi & Saryu */}
          <div className="flex flex-col items-center justify-center border-x border-rule px-1">
            <div className="mb-1.5">
              <TempleIcon className="w-6 h-6 text-accent" />
            </div>
            <p className="font-display text-base sm:text-lg font-bold text-ink leading-tight">
              ~1.0 km
            </p>
            <p className="text-xs text-muted leading-tight mt-0.5">
              Hanumangarhi and Saryu Ghat
            </p>
          </div>

          {/* Highlight 3: Power Backup */}
          <div className="flex flex-col items-center justify-center px-1">
            <div className="mb-1.5">
              <Zap className="w-6 h-6 text-accent" />
            </div>
            <p className="font-display text-base sm:text-lg font-bold text-ink leading-tight">
              24/7
            </p>
            <p className="text-xs text-muted leading-tight mt-0.5">
              Power Backup
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
