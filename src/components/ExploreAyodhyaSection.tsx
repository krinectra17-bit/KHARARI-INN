import React from 'react';
import { MapPin, Navigation, ExternalLink, Clock, Compass } from 'lucide-react';
import { NEARBY_LANDMARKS, HOTEL_INFO } from '../data/hotelData';

export const ExploreAyodhyaSection: React.FC = () => {
  return (
    <section id="explore" className="py-16 sm:py-20 lg:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-px w-8 bg-gold"></span>
            <span className="text-xs uppercase tracking-widest font-semibold text-gold-dark">
              Ayodhya Dham Location & Pilgrimage Guide
            </span>
            <span className="h-px w-8 bg-gold"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-charcoal tracking-tight mb-4">
            Discover the <span className="italic font-serif text-gold-dark">Spiritual Heart</span> of Ayodhya
          </h2>

          <p className="text-base sm:text-lg text-warm-grey-dark leading-relaxed font-normal">
            From sacred temples to the peaceful banks of the Saryu River, Ayodhya offers meaningful experiences for pilgrims and travellers alike. Kharari Inn provides a convenient starting point for exploring the city.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href={HOTEL_INFO.contacts.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-wider font-semibold text-white bg-charcoal hover:bg-gold-dark rounded-sm transition-colors shadow-subtle"
            >
              <Navigation className="w-4 h-4 text-gold-light" />
              <span>Get Directions on Google Maps</span>
              <ExternalLink className="w-3 h-3 ml-1 opacity-70" />
            </a>
          </div>
        </div>

        {/* Landmarks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {NEARBY_LANDMARKS.map((landmark, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-sm border border-border shadow-subtle hover:shadow-soft transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div>
                    <h3 className="font-serif text-xl font-medium text-charcoal">
                      {landmark.name}
                    </h3>
                    {landmark.hindiName && (
                      <p className="text-xs text-warm-grey font-serif">
                        {landmark.hindiName}
                      </p>
                    )}
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-gold-dark bg-ivory px-2.5 py-1 rounded-sm border border-border shrink-0">
                    <MapPin className="w-3 h-3" />
                    {landmark.distance}
                  </span>
                </div>

                <p className="text-xs text-warm-grey-dark leading-relaxed mt-3 mb-4">
                  {landmark.description}
                </p>
              </div>

              <div className="pt-3 border-t border-border/70 flex items-center justify-between text-[11px] text-warm-grey">
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3 text-gold-dark" />
                  <span>{landmark.approxTravelTime}</span>
                </span>
                <span className="italic text-charcoal/70">
                  {landmark.significance}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Local Travel Advice Box */}
        <div className="mt-12 bg-sand-light border border-border rounded-sm p-6 sm:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 text-left">
              <h4 className="font-serif text-lg font-medium text-charcoal flex items-center gap-2">
                <Compass className="w-4 h-4 text-gold-dark" />
                <span>Pilgrim & Commute Advisory for Ayodhya Dham</span>
              </h4>
              <p className="text-xs text-warm-grey-dark leading-relaxed max-w-3xl">
                Distances listed above are approximate and measured along standard roads. During festival days and peak Aarti hours, vehicular traffic on temple roads is frequently regulated by local authorities. Eco-friendly battery E-Rickshaws are readily available outside the property for swift, convenient transit to Ram Janmabhoomi and Saryu Ghat.
              </p>
            </div>

            <div className="shrink-0">
              <a
                href={HOTEL_INFO.contacts.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-charcoal bg-white border border-border hover:border-gold rounded-sm transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 text-gold-dark" />
                <span>View Exact Property Pin</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
