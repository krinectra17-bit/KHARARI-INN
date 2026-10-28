import React from 'react';
import { Shield, Sparkles, HeartHandshake, Compass } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-sand-light border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Image Composition featuring the peaceful terrace / corridor */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-sm overflow-hidden shadow-soft border border-border bg-white group">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src="/images/kharari-inn-corridor-terrace.jpg"
                  alt="Bright open corridor and terrace at Kharari Inn with potted palms and polished wood ceiling"
                  className="w-full h-full object-cover img-zoom"
                  loading="lazy"
                />
              </div>

              <div className="p-4 bg-white/95 border-t border-border">
                <p className="font-serif italic text-sm text-charcoal">
                  Sunlit first-floor terrace & corridor lined with verdant greenery
                </p>
                <p className="text-[11px] text-warm-grey mt-0.5">
                  Designed for quiet moments before and after temple darshan
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Text & Values */}
          <div className="lg:col-span-7 order-1 lg:order-2 text-left">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-px w-8 bg-gold"></span>
              <span className="text-xs uppercase tracking-widest font-semibold text-gold-dark">
                About Kharari Inn
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-charcoal leading-tight mb-6">
              A Welcoming Stay in the <br className="hidden sm:inline" />
              <span className="italic font-serif text-gold-dark">Heart of Ayodhya</span>
            </h2>

            <div className="space-y-4 text-warm-grey-dark text-base sm:text-lg leading-relaxed font-normal mb-8">
              <p>
                Kharari Inn offers a comfortable base for travellers visiting Ayodhya Dham. With welcoming interiors, practical in-room amenities, and direct access to the city's revered landmarks, our guest house is thoughtfully suited for families, elder pilgrims, and travellers seeking a restful and convenient retreat during their pilgrimage.
              </p>
              <p className="text-sm sm:text-base text-warm-grey">
                Located near Bangai Mandir and Vasudev Ghat along Chhoti Chhawni Road, guests enjoy easy proximity to the holy Saryu River and Shri Ram Janmabhoomi Mandir without being caught in congested commercial avenues.
              </p>
            </div>

            {/* Core Hospitality Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-border">
              
              <div className="flex items-start gap-3">
                <div className="p-2 bg-ivory rounded-sm border border-border text-gold-dark shrink-0">
                  <Compass className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-serif text-base font-semibold text-charcoal">Thoughtful Location</h3>
                  <p className="text-xs text-warm-grey leading-relaxed mt-0.5">
                    Minutes from sacred Ghats and temples with convenient local transport.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-ivory rounded-sm border border-border text-gold-dark shrink-0">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-serif text-base font-semibold text-charcoal">Peace of Mind</h3>
                  <p className="text-xs text-warm-grey leading-relaxed mt-0.5">
                    Soundproof Cummins generator backup and front parking.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-ivory rounded-sm border border-border text-gold-dark shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-serif text-base font-semibold text-charcoal">Hygienic Cleanliness</h3>
                  <p className="text-xs text-warm-grey leading-relaxed mt-0.5">
                    Private attached bathrooms, clean sanitized linens, and fresh air conditioning.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-ivory rounded-sm border border-border text-gold-dark shrink-0">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-serif text-base font-semibold text-charcoal">Pilgrim Courtesy</h3>
                  <p className="text-xs text-warm-grey leading-relaxed mt-0.5">
                    Caring guidance regarding morning snan, Aarti times, and temple darshan schedules.
                  </p>
                </div>
              </div>

            </div>

            {/* Direct Address Callout */}
            <div className="mt-8 p-4 bg-white/80 border border-border rounded-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="text-xs text-warm-grey">
                <span className="font-semibold text-charcoal block sm:inline">Official Property Address: </span>
                <span>{HOTEL_INFO.address.full}</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
