import React from 'react';
import { Shield, Sparkles, HeartHandshake, Compass } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-paper-2/40 border-b border-rule">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section label */}
        <p className="text-xs text-accent font-medium mb-2.5">
          About Kharari Inn
        </p>

        {/* Section Headline */}
        <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-normal text-ink leading-tight mb-4">
          A Welcoming Stay in the Heart of Ayodhya
        </h2>

        {/* Supporting copy */}
        <p className="text-sm sm:text-base text-muted leading-relaxed font-normal mb-8 max-w-2xl">
          Discover a comfortable base for your visit to Ayodhya Dham, with welcoming interiors, practical amenities and convenient access to important local landmarks. Thoughtfully suited for families and pilgrims seeking a restful, authentic stay.
        </p>

        {/* Real photo & editorial layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center mb-8">
          
          {/* Terrace corridor image */}
          <div className="md:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-soft border border-rule bg-paper group">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/images/kharari-inn-corridor-terrace.jpg"
                  alt="Bright open corridor and terrace at Kharari Inn with potted palms and wood ceiling"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
              <div className="p-3 bg-paper border-t border-rule/60">
                <p className="font-display text-xs text-ink">
                  Breezy first-floor passage and terrace lined with verdant plants
                </p>
              </div>
            </div>
          </div>

          {/* Core values list */}
          <div className="md:col-span-6 space-y-3.5">
            
            <div className="flex items-start gap-3 p-3 bg-paper rounded-xl border border-rule shadow-subtle">
              <div className="p-2 bg-paper-3 rounded-lg text-accent shrink-0 border border-rule">
                <Compass className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-display text-sm font-semibold text-ink">Thoughtful Location</h3>
                <p className="text-xs text-muted leading-relaxed mt-0.5">
                  Conveniently situated near Bangai Mandir and Vasudev Ghat, minutes from the sacred ghats and temples.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-paper rounded-xl border border-rule shadow-subtle">
              <div className="p-2 bg-paper-3 rounded-lg text-accent shrink-0 border border-rule">
                <Shield className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-display text-sm font-semibold text-ink">Peace of Mind</h3>
                <p className="text-xs text-muted leading-relaxed mt-0.5">
                  Soundproof Cummins power backup and front parking space for vehicles.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-paper rounded-xl border border-rule shadow-subtle">
              <div className="p-2 bg-paper-3 rounded-lg text-accent shrink-0 border border-rule">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-display text-sm font-semibold text-ink">Hygienic Cleanliness</h3>
                <p className="text-xs text-muted leading-relaxed mt-0.5">
                  Private attached bathrooms, clean sanitized linens, and quiet split air conditioning.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-paper rounded-xl border border-rule shadow-subtle">
              <div className="p-2 bg-paper-3 rounded-lg text-accent shrink-0 border border-rule">
                <HeartHandshake className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-display text-sm font-semibold text-ink">Pilgrim Courtesy</h3>
                <p className="text-xs text-muted leading-relaxed mt-0.5">
                  Helpful guidance on morning snan, Aarti times, and temple darshan routes.
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* Address callout */}
        <div className="p-3.5 bg-paper border border-rule rounded-xl text-xs text-muted">
          <span className="font-medium text-ink">Official address: </span>
          <span>{HOTEL_INFO.address.full}</span>
        </div>

      </div>
    </section>
  );
};
