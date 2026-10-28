import React from 'react';
import { Users, BedDouble, Check, Calendar, ArrowRight } from 'lucide-react';
import { ROOMS } from '../data/hotelData';
import { buildQuickRoomEnquiryMessage, createWhatsAppUrl, openWhatsApp } from '../utils/whatsapp';
import { Room } from '../types';

interface RoomSectionProps {
  onOpenBooking: (roomType: string) => void;
}

// Custom WhatsApp Icon
const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.63C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.53 7.5C9.36 7.5 9.09 7.57 8.85 7.82C8.62 8.08 7.96 8.69 7.96 9.96C7.96 11.22 8.88 12.44 9 12.6C9.13 12.78 10.7 15.34 13.19 16.31C15.26 17.11 15.68 16.95 16.12 16.91C16.57 16.87 17.55 16.33 17.75 15.75C17.96 15.18 17.96 14.69 17.89 14.58C17.83 14.47 17.65 14.41 17.39 14.28C17.13 14.15 15.83 13.51 15.59 13.43C15.35 13.34 15.17 13.3 15 13.56C14.82 13.82 14.33 14.41 14.18 14.58C14.03 14.75 13.88 14.77 13.62 14.65C13.36 14.51 12.53 14.24 11.54 13.36C10.77 12.67 10.25 11.82 10.1 11.56C9.95 11.3 10.08 11.16 10.21 11.03C10.33 10.91 10.48 10.72 10.62 10.56C10.76 10.39 10.8 10.28 10.89 10.1C10.98 9.93 10.93 9.78 10.87 9.65C10.8 9.52 10.3 8.31 10.09 7.8C9.89 7.3 9.69 7.37 9.53 7.5Z" />
  </svg>
);

export const RoomSection: React.FC<RoomSectionProps> = ({ onOpenBooking }) => {
  const handleQuickWhatsApp = (room: Room) => {
    const message = buildQuickRoomEnquiryMessage(room.name);
    const url = createWhatsAppUrl(message);
    openWhatsApp(url);
  };

  return (
    <section id="rooms" className="py-14 sm:py-20 lg:py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="flex items-center justify-center gap-2 mb-2.5">
            <span className="h-[1.5px] w-6 sm:w-8 bg-[#A6753C]"></span>
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#A6753C]">
              OUR ACCOMMODATIONS
            </span>
            <span className="h-[1.5px] w-6 sm:w-8 bg-[#A6753C]"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-charcoal tracking-tight mb-3">
            Rooms for a <span className="italic font-serif text-[#A6753C]">Comfortable Stay</span>
          </h2>

          <p className="text-xs sm:text-sm text-warm-grey-dark leading-relaxed font-normal">
            Thoughtfully prepared rooms featuring authentic photographs from Kharari Inn. Every room includes attached private bathrooms, split air conditioning, warm velvet upholstery, and practical conveniences.
          </p>
        </div>

        {/* Room Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {ROOMS.map((room) => (
            <article
              key={room.id}
              className="bg-white rounded-2xl border border-border/80 shadow-subtle hover:shadow-soft transition-all duration-300 flex flex-col overflow-hidden group"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/11] overflow-hidden bg-sand/30">
                <img
                  src={room.image}
                  alt={room.altText}
                  className="w-full h-full object-cover img-zoom"
                  loading="lazy"
                />
                
                {/* Capacity Badge */}
                <div className="absolute top-3 right-3 bg-charcoal/85 backdrop-blur-sm text-white px-2.5 py-1 rounded-lg text-xs font-medium flex items-center gap-1.5 shadow-subtle">
                  <Users className="w-3.5 h-3.5 text-gold-light" />
                  <span>{room.capacity}</span>
                </div>

                <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm text-charcoal px-2.5 py-1 rounded-lg text-xs font-semibold flex items-center gap-1.5 border border-border/80">
                  <BedDouble className="w-3.5 h-3.5 text-[#A6753C]" />
                  <span>{room.bedConfig}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-normal text-charcoal mb-1 group-hover:text-gold-dark transition-colors">
                    {room.name}
                  </h3>
                  
                  <p className="text-[11px] text-[#A6753C] font-semibold uppercase tracking-wider mb-2.5">
                    {room.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-warm-grey-dark leading-relaxed mb-4">
                    {room.description}
                  </p>

                  {/* Amenities Checklist */}
                  <div className="pt-3 border-t border-border/70 mb-5">
                    <ul className="grid grid-cols-1 gap-1.5">
                      {room.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-warm-grey-dark">
                          <Check className="w-3.5 h-3.5 text-[#A6753C] shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTAs */}
                <div className="pt-3 border-t border-border/70 flex flex-col sm:flex-row gap-2">
                  <button
                    type="button"
                    onClick={() => handleQuickWhatsApp(room)}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2.5 text-xs font-semibold text-white bg-[#A6753C] hover:bg-[#8F6230] rounded-xl transition-colors shadow-subtle active:scale-[0.98]"
                    aria-label={`Enquire about ${room.name} on WhatsApp`}
                  >
                    <WhatsAppIcon className="w-4 h-4 text-white" />
                    <span>Enquire on WhatsApp</span>
                    <ArrowRight className="w-3.5 h-3.5 text-white/80" />
                  </button>

                  <button
                    type="button"
                    onClick={() => onOpenBooking(room.name)}
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 text-xs font-semibold text-charcoal hover:text-gold-dark bg-[#F5EFE6] hover:bg-[#ECE4D8] border border-border/80 rounded-xl transition-colors"
                    title="Select dates and guest details"
                  >
                    <Calendar className="w-3.5 h-3.5 text-warm-grey" />
                    <span>Stay Form</span>
                  </button>
                </div>

              </div>
            </article>
          ))}
        </div>

        {/* Verification Note */}
        <div className="mt-8 p-3.5 bg-[#FAF6F0] border border-border/80 rounded-xl max-w-xl mx-auto text-center">
          <p className="text-xs text-warm-grey">
            <strong className="text-charcoal font-medium">Occupancy Note: </strong>
            Room tariffs, extra bedding availability, and peak darshan dates are confirmed directly via WhatsApp.
          </p>
        </div>

      </div>
    </section>
  );
};
