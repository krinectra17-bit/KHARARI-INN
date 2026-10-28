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
      className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-border shadow-elevated px-3 py-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))]"
    >
      <div className="flex items-center gap-2">
        {/* Direct Call Button */}
        <a
          href={`tel:${HOTEL_INFO.contacts.primaryWhatsAppRaw}`}
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 bg-sand/60 active:bg-sand border border-border rounded-sm text-xs font-semibold text-charcoal transition-colors"
          aria-label="Direct Call Kharari Inn"
        >
          <Phone className="w-3.5 h-3.5 text-gold-dark" />
          <span>Call Hotel</span>
        </a>

        {/* WhatsApp Book Button */}
        <button
          type="button"
          onClick={onOpenBooking}
          className="flex-[1.5] inline-flex items-center justify-center gap-1.5 py-2.5 px-3 bg-charcoal active:bg-gold-dark rounded-sm text-xs font-semibold uppercase tracking-wider text-white transition-colors shadow-subtle"
          aria-label="Open stay booking form"
        >
          <Calendar className="w-3.5 h-3.5 text-gold-light" />
          <span>Book Stay</span>
        </button>
      </div>
    </aside>
  );
};
