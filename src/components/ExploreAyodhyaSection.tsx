import React from 'react';
import { MapPin, Navigation, ExternalLink, Clock, Compass } from 'lucide-react';
import { NEARBY_LANDMARKS, HOTEL_INFO } from '../data/hotelData';

export const ExploreAyodhyaSection: React.FC = () => {
  return (
    <section id="explore" className="py-16 sm:py-20 lg:py-24 bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <p className="text-xs text-accent font-medium mb-2.5">
            Ayodhya Dham location and pilgrimage guide
          </p>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal text-ink tracking-tight mb-4">
            Discover the Spiritual Heart of Ayodhya
          </h2>

          <p className="text-sm sm:text-base text-muted leading-relaxed font-normal">
            From sacred temples to the peaceful banks of the Saryu River, Ayodhya offers meaningful experiences for pilgrims and travellers alike. Kharari Inn provides a convenient starting point for exploring the city.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href={HOTEL_INFO.contacts.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-medium text-white bg-accent hover:opacity-90 rounded-xl transition-opacity shadow-subtle"
            >
              <Navigation className="w-4 h-4 text-white" />
              <span>Get directions on Google Maps</span>
              <ExternalLink className="w-3 h-3 ml-1 opacity-70" />
            </a>
          </div>
        </div>

        {/* Landmarks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {NEARBY_LANDMARKS.map((landmark, idx) => (
            <div
              key={idx}
              className="bg-paper p-6 rounded-2xl border border-rule shadow-subtle hover:shadow-soft transition-shadow duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div>
                    <h3 className="font-display text-xl font-medium text-ink">
                      {landmark.name}
                    </h3>
                    {landmark.hindiName && (
                      <p className="text-xs text-muted font-display">
                        {landmark.hindiName}
                      </p>
                    )}
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-accent bg-paper-3 px-2.5 py-1 rounded-lg border border-rule shrink-0">
                    <MapPin className="w-3 h-3" />
                    {landmark.distance}
                  </span>
                </div>

                <p className="text-xs text-muted leading-relaxed mt-3 mb-4">
                  {landmark.description}
                </p>
              </div>

              <div className="pt-3 border-t border-rule/70 flex items-center justify-between text-xs text-muted">
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3 text-accent" />
                  <span>{landmark.approxTravelTime}</span>
                </span>
                <span className="text-ink/70">
                  {landmark.significance}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Local Travel Advice Box */}
        <div className="mt-12 bg-paper-2/50 border border-rule rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 text-left">
              <h4 className="font-display text-lg font-medium text-ink flex items-center gap-2">
                <Compass className="w-4 h-4 text-accent" />
                <span>Pilgrim and commute advisory for Ayodhya Dham</span>
              </h4>
              <p className="text-xs text-muted leading-relaxed max-w-3xl">
                Distances listed above are approximate and measured along standard roads. During festival days and peak Aarti hours, vehicular traffic on temple roads is frequently regulated by local authorities. Eco-friendly battery E-Rickshaws are readily available outside the property for swift, convenient transit to Ram Janmabhoomi and Saryu Ghat.
              </p>
            </div>

            <div className="shrink-0">
              <a
                href={HOTEL_INFO.contacts.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-ink bg-paper border border-rule hover:border-accent rounded-xl transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 text-accent" />
                <span>View exact property pin</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
