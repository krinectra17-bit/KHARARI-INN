import React from 'react';
import { MessageSquare, ArrowDown, MapPin, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

interface HeroSectionProps {
  onOpenBooking: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking }) => {
  const scrollToRooms = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById('rooms');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Top Bar / Location Pill */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-border/60 mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-sand/70 border border-border rounded-full text-xs font-medium text-charcoal">
            <MapPin className="w-3.5 h-3.5 text-gold-dark" />
            <span>Ayodhya Dham, Uttar Pradesh • Near Saryu Ghat & Ram Janmabhoomi</span>
          </div>

          <div className="hidden md:flex items-center gap-4 text-xs text-warm-grey">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-gold" />
              Attached Private Bathrooms
            </span>
            <span className="w-1 h-1 rounded-full bg-border-dark"></span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-gold" />
              Air Conditioned Rooms
            </span>
            <span className="w-1 h-1 rounded-full bg-border-dark"></span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-gold" />
              Family & Pilgrim Friendly
            </span>
          </div>
        </div>

        {/* Main Hero Split / Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Editorial Headline & Copy */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-px w-8 bg-gold"></span>
              <span className="text-xs uppercase tracking-widest font-semibold text-gold-dark">
                Boutique Guest House & Hotel
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-normal tracking-tight text-charcoal leading-[1.12] mb-5">
              Your Comfortable Stay in <span className="italic font-serif text-gold-dark">Ayodhya Dham</span>
            </h1>

            <p className="text-base sm:text-lg text-warm-grey-dark leading-relaxed font-normal mb-8 max-w-xl">
              Discover a welcoming stay in Ayodhya, thoughtfully located for your visit to the city's sacred landmarks. Featuring peaceful air-conditioned rooms, attached baths, secure on-site parking, and sincere hospitality for families and pilgrims.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10">
              <button
                type="button"
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm uppercase tracking-wider font-semibold text-white bg-charcoal hover:bg-gold-dark rounded-sm transition-all duration-200 shadow-soft hover:shadow-elevated active:scale-[0.99]"
              >
                <MessageSquare className="w-4 h-4 text-gold-light" />
                <span>Book Your Stay</span>
              </button>

              <a
                href="#rooms"
                onClick={scrollToRooms}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-charcoal hover:text-gold-dark bg-white border border-border hover:border-gold rounded-sm transition-colors shadow-subtle"
              >
                <span>Explore Our Rooms</span>
                <ArrowDown className="w-4 h-4 text-warm-grey" />
              </a>
            </div>

            {/* Key Distance Quick Strip */}
            <div className="pt-6 border-t border-border/70 grid grid-cols-3 gap-2 sm:gap-4">
              <div>
                <p className="text-lg sm:text-xl font-serif font-bold text-charcoal">~1.8 km</p>
                <p className="text-[11px] sm:text-xs text-warm-grey leading-tight mt-0.5">Shri Ram Janmabhoomi</p>
              </div>
              <div className="border-l border-border/70 pl-2 sm:pl-4">
                <p className="text-lg sm:text-xl font-serif font-bold text-charcoal">~1.0 km</p>
                <p className="text-[11px] sm:text-xs text-warm-grey leading-tight mt-0.5">Hanumangarhi & Saryu</p>
              </div>
              <div className="border-l border-border/70 pl-2 sm:pl-4">
                <p className="text-lg sm:text-xl font-serif font-bold text-charcoal">24/7</p>
                <p className="text-[11px] sm:text-xs text-warm-grey leading-tight mt-0.5">Silent Power Backup</p>
              </div>
            </div>

          </div>

          {/* Right Column: Authentic Property Photograph & Editorial Card */}
          <div className="lg:col-span-6 relative">
            
            {/* Outer Decorative Frame */}
            <div className="relative rounded-sm overflow-hidden shadow-elevated border border-border bg-white group">
              <div className="aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-sand/30">
                <img
                  src="/images/kharari-inn-exterior.jpg"
                  alt="Kharari Inn authentic property facade in Ayodhya Dham with arched balcony, front parking and signage"
                  className="w-full h-full object-cover object-center img-zoom transition-transform duration-700"
                  fetchPriority="high"
                  loading="eager"
                />
              </div>

              {/* Floating Caption Ribbon */}
              <div className="p-4 sm:p-5 bg-white border-t border-border flex items-center justify-between">
                <div>
                  <h2 className="font-serif text-base sm:text-lg font-medium text-charcoal flex items-center gap-1.5">
                    <span>Kharari Inn Property Facade</span>
                    <Sparkles className="w-3.5 h-3.5 text-gold inline" />
                  </h2>
                  <p className="text-xs text-warm-grey mt-0.5">
                    Vasudev Ghat, Chhoti Chhawni Road • Ayodhya Dham
                  </p>
                </div>

                <a
                  href={HOTEL_INFO.contacts.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-gold-dark hover:underline"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Map</span>
                </a>
              </div>
            </div>

            {/* Subtle Corner Badge */}
            <div className="absolute -bottom-3 -left-3 hidden sm:block bg-charcoal text-white px-4 py-2 rounded-sm shadow-soft text-xs border border-charcoal-light">
              <p className="font-serif italic text-gold-light text-sm font-normal">Authentic Property Photograph</p>
              <p className="text-[10px] text-white/70">House No. 8/1/13, Bangai Mandir</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
