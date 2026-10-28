import React from 'react';
import { ArrowRight, MapPin, Zap, Compass } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';
import { createWhatsAppUrl, openWhatsApp } from '../utils/whatsapp';

interface HeroSectionProps {
  onOpenBooking?: () => void;
}

// Custom authentic temple icon matching the reference mockup
const TempleIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5 text-[#A6753C]" }) => (
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

// Custom WhatsApp icon
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
    <section id="home" className="relative pt-18 sm:pt-22 lg:pt-28 pb-8 sm:pb-12 bg-ivory">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow matching reference mockup */}
        <div className="flex items-center gap-2.5 mb-2 sm:mb-3">
          <span className="h-[1.5px] w-6 sm:w-8 bg-[#A6753C]"></span>
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#A6753C]">
            A BOUTIQUE STAY IN
          </span>
        </div>

        {/* Headline matching reference mockup */}
        <h1 className="font-serif text-[2.5rem] leading-[1.08] sm:text-5xl lg:text-6xl font-normal text-charcoal mb-3 tracking-tight">
          Ayodhya Dham
        </h1>

        {/* Short, elegant supporting copy */}
        <p className="text-sm sm:text-base text-warm-grey-dark leading-relaxed font-normal mb-5 max-w-xl">
          Comfortable rooms, warm hospitality and a convenient location for your spiritual journey.
        </p>

        {/* CTA Buttons side-by-side matching reference mockup */}
        <div className="flex items-center gap-2.5 sm:gap-3.5 mb-6 sm:mb-8">
          <button
            type="button"
            onClick={handleBookOnWhatsApp}
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-semibold text-white bg-[#A6753C] hover:bg-[#8F6230] rounded-xl transition-all duration-200 shadow-sm active:scale-[0.98]"
          >
            <WhatsAppIcon className="w-4 h-4 text-white shrink-0" />
            <span>Book on WhatsApp</span>
            <ArrowRight className="w-3.5 h-3.5 text-white/80 shrink-0" />
          </button>

          <a
            href="#rooms"
            onClick={scrollToRooms}
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-semibold text-charcoal hover:text-gold-dark bg-white border border-border/80 hover:border-gold rounded-xl transition-colors shadow-subtle"
          >
            <span>Explore Rooms</span>
            <ArrowRight className="w-3.5 h-3.5 text-warm-grey shrink-0" />
          </a>
        </div>

        {/* Prominent Hotel Exterior Photograph immediately visible on mobile */}
        <div className="relative rounded-2xl overflow-hidden shadow-soft border border-border/80 bg-white group mb-6">
          <div className="aspect-[4/3] sm:aspect-[16/10] overflow-hidden bg-sand/30">
            <img
              src="/images/kharari-inn-exterior.jpg"
              alt="Kharari Inn authentic boutique hotel exterior in Ayodhya Dham with arched balcony, front parking and official signage"
              className="w-full h-full object-cover object-center img-zoom transition-transform duration-700"
              fetchPriority="high"
              loading="eager"
            />
          </div>

          {/* Carousel Pagination Dots matching reference */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 px-2.5 py-1 bg-black/25 backdrop-blur-sm rounded-full">
            <span className="w-2.5 h-2.5 rounded-full bg-[#A6753C]" aria-hidden="true"></span>
            <span className="w-2 h-2 rounded-full bg-white/70" aria-hidden="true"></span>
            <span className="w-2 h-2 rounded-full bg-white/70" aria-hidden="true"></span>
          </div>
        </div>

        {/* Location Strip matching reference mockup */}
        <div className="bg-[#FAF6F0] border border-border/80 rounded-2xl p-3 sm:p-4 mb-6 shadow-subtle flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 text-left min-w-0">
            <div className="w-9 h-9 rounded-full bg-[#EFE6D8] text-[#A6753C] flex items-center justify-center shrink-0 border border-border/50">
              <MapPin className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <p className="font-semibold text-xs sm:text-sm text-charcoal truncate">
                Ayodhya Dham, Uttar Pradesh
              </p>
              <p className="text-[11px] sm:text-xs text-warm-grey truncate">
                Near Saryu Ghat & Ram Janmabhoomi
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <div className="h-8 w-px bg-border/80 hidden xs:block"></div>
            <a
              href={HOTEL_INFO.contacts.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#EFE8DC] hover:bg-[#E5DDCF] active:bg-[#DCD3C4] text-charcoal rounded-full text-xs font-semibold transition-colors shadow-subtle"
            >
              <Compass className="w-3.5 h-3.5 text-[#A6753C]" />
              <span className="whitespace-nowrap">Get Directions</span>
            </a>
          </div>
        </div>

        {/* Key Property Highlights Strip matching reference mockup */}
        <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-2 pb-6 border-b border-border/60 text-center">
          
          {/* Highlight 1: Shri Ram Janmabhoomi */}
          <div className="flex flex-col items-center justify-center px-1">
            <div className="mb-1.5">
              <TempleIcon className="w-6 h-6 text-[#A6753C]" />
            </div>
            <p className="font-serif text-base sm:text-lg font-bold text-charcoal leading-tight">
              ~1.8 km
            </p>
            <p className="text-[10px] sm:text-xs text-warm-grey leading-tight mt-0.5">
              Shri Ram Janmabhoomi
            </p>
          </div>

          {/* Highlight 2: Hanumangarhi & Saryu */}
          <div className="flex flex-col items-center justify-center border-x border-border/80 px-1">
            <div className="mb-1.5">
              <TempleIcon className="w-6 h-6 text-[#A6753C]" />
            </div>
            <p className="font-serif text-base sm:text-lg font-bold text-charcoal leading-tight">
              ~1.0 km
            </p>
            <p className="text-[10px] sm:text-xs text-warm-grey leading-tight mt-0.5">
              Hanumangarhi & Saryu Ghat
            </p>
          </div>

          {/* Highlight 3: Power Backup */}
          <div className="flex flex-col items-center justify-center px-1">
            <div className="mb-1.5">
              <Zap className="w-6 h-6 text-[#A6753C]" />
            </div>
            <p className="font-serif text-base sm:text-lg font-bold text-charcoal leading-tight">
              24/7
            </p>
            <p className="text-[10px] sm:text-xs text-warm-grey leading-tight mt-0.5">
              Power Backup
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
