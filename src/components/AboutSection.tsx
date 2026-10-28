import React from 'react';
import { Shield, Sparkles, HeartHandshake, Compass } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-sand-light/50 border-b border-border/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow matching reference mockup */}
        <div className="flex items-center gap-2.5 mb-2.5">
          <span className="h-[1.5px] w-6 sm:w-8 bg-[#A6753C]"></span>
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#A6753C]">
            ABOUT KHARARI INN
          </span>
        </div>

        {/* Section Headline matching reference mockup */}
        <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-charcoal leading-tight mb-4">
          A Welcoming Stay <br className="hidden sm:inline" />
          <span className="italic font-serif text-[#A6753C]">in the Heart of Ayodhya</span>
        </h2>

        {/* Supporting copy from prompt */}
        <p className="text-sm sm:text-base text-warm-grey-dark leading-relaxed font-normal mb-8 max-w-2xl">
          Discover a comfortable base for your visit to Ayodhya Dham, with welcoming interiors, practical amenities and convenient access to important local landmarks. Thoughtfully suited for families and pilgrims seeking a restful, authentic stay.
        </p>

        {/* Real photo & editorial layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center mb-8">
          
          {/* Terrace corridor image */}
          <div className="md:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-soft border border-border/80 bg-white group">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/images/kharari-inn-corridor-terrace.jpg"
                  alt="Bright open corridor and terrace at Kharari Inn with potted palms and wood ceiling"
                  className="w-full h-full object-cover img-zoom"
                  loading="lazy"
                />
              </div>
              <div className="p-3 bg-white border-t border-border/60">
                <p className="font-serif italic text-xs text-charcoal">
                  Breezy first-floor passage & terrace lined with verdant plants
                </p>
              </div>
            </div>
          </div>

          {/* Core values list */}
          <div className="md:col-span-6 space-y-4">
            
            <div className="flex items-start gap-3 p-3 bg-white rounded-xl border border-border/70 shadow-subtle">
              <div className="p-2 bg-[#FAF6F0] rounded-lg text-[#A6753C] shrink-0 border border-border/50">
                <Compass className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-serif text-sm font-semibold text-charcoal">Thoughtful Location</h3>
                <p className="text-[11px] text-warm-grey leading-relaxed mt-0.5">
                  Conveniently situated near Bangai Mandir and Vasudev Ghat, minutes from the sacred ghats and temples.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-white rounded-xl border border-border/70 shadow-subtle">
              <div className="p-2 bg-[#FAF6F0] rounded-lg text-[#A6753C] shrink-0 border border-border/50">
                <Shield className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-serif text-sm font-semibold text-charcoal">Peace of Mind</h3>
                <p className="text-[11px] text-warm-grey leading-relaxed mt-0.5">
                  Soundproof Cummins power backup and front parking space for vehicles.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-white rounded-xl border border-border/70 shadow-subtle">
              <div className="p-2 bg-[#FAF6F0] rounded-lg text-[#A6753C] shrink-0 border border-border/50">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-serif text-sm font-semibold text-charcoal">Hygienic Cleanliness</h3>
                <p className="text-[11px] text-warm-grey leading-relaxed mt-0.5">
                  Private attached bathrooms, clean sanitized linens, and quiet split air conditioning.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-white rounded-xl border border-border/70 shadow-subtle">
              <div className="p-2 bg-[#FAF6F0] rounded-lg text-[#A6753C] shrink-0 border border-border/50">
                <HeartHandshake className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-serif text-sm font-semibold text-charcoal">Pilgrim Courtesy</h3>
                <p className="text-[11px] text-warm-grey leading-relaxed mt-0.5">
                  Helpful guidance on morning snan, Aarti times, and temple darshan routes.
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* Address callout */}
        <div className="p-3.5 bg-white/90 border border-border/80 rounded-xl text-xs text-warm-grey">
          <span className="font-semibold text-charcoal">Official Address: </span>
          <span>{HOTEL_INFO.address.full}</span>
        </div>

      </div>
    </section>
  );
};
