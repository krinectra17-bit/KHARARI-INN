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
      className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-paper/95 backdrop-blur-md border-t border-rule shadow-soft px-4 py-2.5 pb-[max(0.75rem,env(safe-area-inset-bottom))]"
    >
      <div className="flex items-center gap-2.5">
        {/* Call Hotel Button */}
        <a
          href={`tel:${HOTEL_INFO.contacts.primaryWhatsAppRaw}`}
          className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-3 bg-paper-2 active:bg-rule/40 border border-rule rounded-xl text-xs font-medium text-ink transition-colors shadow-subtle"
          aria-label="Call Kharari Inn Front Desk"
        >
          <Phone className="w-4 h-4 text-ink" />
          <span>Call Hotel</span>
        </a>

        {/* Book Your Stay Button */}
        <button
          type="button"
          onClick={onOpenBooking}
          className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-3 bg-ink active:bg-ink-2 text-white rounded-xl text-xs font-medium transition-colors shadow-sm cursor-pointer"
          aria-label="Open stay booking form"
        >
          <Calendar className="w-4 h-4 text-white" />
          <span>Book Your Stay</span>
        </button>
      </div>
    </aside>
  );
};
