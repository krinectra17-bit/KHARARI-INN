import React from 'react';
import { MessageSquare, Users, BedDouble, Check, Calendar } from 'lucide-react';
import { ROOMS } from '../data/hotelData';
import { buildQuickRoomEnquiryMessage, createWhatsAppUrl, openWhatsApp } from '../utils/whatsapp';
import { Room } from '../types';

interface RoomSectionProps {
  onOpenBooking: (roomType: string) => void;
}

export const RoomSection: React.FC<RoomSectionProps> = ({ onOpenBooking }) => {
  const handleQuickWhatsApp = (room: Room) => {
    const message = buildQuickRoomEnquiryMessage(room.name);
    const url = createWhatsAppUrl(message);
    openWhatsApp(url);
  };

  return (
    <section id="rooms" className="py-16 sm:py-20 lg:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-px w-8 bg-gold"></span>
            <span className="text-xs uppercase tracking-widest font-semibold text-gold-dark">
              Accommodations
            </span>
            <span className="h-px w-8 bg-gold"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-charcoal tracking-tight mb-4">
            Rooms for a <span className="italic font-serif text-gold-dark">Comfortable Stay</span>
          </h2>

          <p className="text-base sm:text-lg text-warm-grey-dark leading-relaxed font-normal">
            Thoughtfully prepared rooms featuring authentic photographs from Kharari Inn. Every room includes attached private bathrooms, split air conditioning, warm velvet upholstery, and practical conveniences.
          </p>

          <p className="text-xs text-warm-grey italic mt-2">
            *Final room tariff, exact bed configuration, and live dates are confirmed directly via WhatsApp.
          </p>
        </div>

        {/* Room Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-8 items-stretch">
          {ROOMS.map((room) => (
            <article
              key={room.id}
              className="bg-white rounded-sm border border-border shadow-subtle hover:shadow-soft transition-all duration-300 flex flex-col overflow-hidden group"
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
                <div className="absolute top-3 right-3 bg-charcoal/85 backdrop-blur-sm text-white px-2.5 py-1 rounded-sm text-xs font-medium flex items-center gap-1.5 shadow-subtle">
                  <Users className="w-3.5 h-3.5 text-gold-light" />
                  <span>{room.capacity}</span>
                </div>

                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm text-charcoal px-2.5 py-1 rounded-sm text-xs font-semibold flex items-center gap-1.5 border border-border/80">
                  <BedDouble className="w-3.5 h-3.5 text-gold-dark" />
                  <span>{room.bedConfig}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-2xl font-normal text-charcoal mb-1 group-hover:text-gold-dark transition-colors">
                    {room.name}
                  </h3>
                  
                  <p className="text-xs text-gold-dark font-medium uppercase tracking-wider mb-3">
                    {room.tagline}
                  </p>

                  <p className="text-sm text-warm-grey-dark leading-relaxed mb-5">
                    {room.description}
                  </p>

                  {/* Amenities Checklist */}
                  <div className="pt-4 border-t border-border/70 mb-6">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-charcoal/80 mb-2.5">
                      Room Amenities
                    </h4>
                    <ul className="grid grid-cols-1 gap-2">
                      {room.features.slice(0, 5).map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-warm-grey-dark">
                          <Check className="w-3.5 h-3.5 text-gold-dark shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTAs */}
                <div className="pt-4 border-t border-border flex flex-col sm:flex-row gap-2.5">
                  <button
                    type="button"
                    onClick={() => handleQuickWhatsApp(room)}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2.5 text-xs font-semibold text-white bg-charcoal hover:bg-gold-dark rounded-sm transition-colors shadow-subtle active:scale-[0.98]"
                    aria-label={`Enquire about ${room.name} on WhatsApp`}
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-gold-light" />
                    <span>Enquire on WhatsApp</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => onOpenBooking(room.name)}
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 text-xs font-medium text-charcoal hover:text-gold-dark bg-sand/60 hover:bg-sand border border-border rounded-sm transition-colors"
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
        <div className="mt-12 p-4 bg-sand/40 border border-border rounded-sm max-w-2xl mx-auto text-center">
          <p className="text-xs text-warm-grey">
            <strong className="text-charcoal font-medium">Occupancy Note: </strong>
            Room tariffs, extra mattress availability, and peak-season darshan dates are subject to property confirmation. Please share your family details on WhatsApp for immediate assistance.
          </p>
        </div>

      </div>
    </section>
  );
};
