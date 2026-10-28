import React from 'react';
import { MessageSquare } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';
import { createWhatsAppUrl, openWhatsApp } from '../utils/whatsapp';

export const WhatsAppFloatingButton: React.FC = () => {
  const handleClick = () => {
    const message = 'Namaste Kharari Inn, I would like to enquire about room availability and stay tariffs for my visit to Ayodhya Dham.';
    const url = createWhatsAppUrl(message, HOTEL_INFO.contacts.primaryWhatsAppRaw);
    openWhatsApp(url);
  };

  return (
    <div className="fixed bottom-20 right-4 sm:bottom-6 sm:right-6 z-40 flex items-center gap-3">
      {/* Tooltip speech bubble on desktop */}
      <div className="hidden md:flex items-center bg-white/95 backdrop-blur-sm border border-border shadow-soft px-3 py-1.5 rounded-sm text-xs font-medium text-charcoal animate-fadeIn">
        <span>Instant WhatsApp Enquiry</span>
      </div>

      {/* Floating Action Button */}
      <button
        type="button"
        onClick={handleClick}
        aria-label="Enquire with Kharari Inn on WhatsApp"
        className="w-13 h-13 p-3.5 bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-white rounded-full shadow-elevated transition-all duration-200 flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-[#25D366]/40 group"
      >
        <MessageSquare className="w-6 h-6 fill-current text-white transition-transform group-hover:scale-110" />
      </button>
    </div>
  );
};
