import React from 'react';
import { Phone, Calendar } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

interface MobileStickyBookingBarProps {
  onOpenBooking: () => void;
}

export const MobileStickyBookingBar: React.FC<MobileStickyBookingBarProps> = ({ onOpenBooking }) => {
  return (
    <aside
      aria-label="Mobile quick booking and call bar"
      className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-border/80 shadow-[0_-4px_16px_rgba(41,37,31,0.08)] px-4 py-2.5 pb-[max(0.75rem,env(safe-area-inset-bottom))]"
    >
      <div className="flex items-center gap-2.5">
        {/* Call Hotel Button matching reference */}
        <a
          href={`tel:${HOTEL_INFO.contacts.primaryWhatsAppRaw}`}
          className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-3 bg-[#F5EFE6] active:bg-[#ECE4D8] border border-border/80 rounded-xl text-xs font-semibold text-charcoal transition-colors shadow-subtle"
          aria-label="Call Kharari Inn Front Desk"
        >
          <Phone className="w-4 h-4 text-charcoal" />
          <span>Call Hotel</span>
        </a>

        {/* Book Your Stay Button matching reference */}
        <button
          type="button"
          onClick={onOpenBooking}
          className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-3 bg-[#221F1B] active:bg-[#38332D] text-white rounded-xl text-xs font-semibold tracking-wide transition-colors shadow-sm"
          aria-label="Open stay booking form"
        >
          <Calendar className="w-4 h-4 text-white" />
          <span>Book Your Stay</span>
        </button>
      </div>
    </aside>
  );
};
