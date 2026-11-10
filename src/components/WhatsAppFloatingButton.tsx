import React from 'react';
import { HOTEL_INFO } from '../data/hotelData';
import { createWhatsAppUrl, openWhatsApp } from '../utils/whatsapp';

export const WhatsAppFloatingButton: React.FC = () => {
  const handleClick = () => {
    const message = 'Namaste Kharari Inn, I would like to enquire about room availability and stay tariffs for my visit to Ayodhya Dham.';
    const url = createWhatsAppUrl(message, HOTEL_INFO.contacts.primaryWhatsAppRaw);
    openWhatsApp(url);
  };

  return (
    <div className="fixed bottom-24 sm:bottom-6 right-4 sm:right-6 z-40 flex items-center gap-3">
      {/* Desktop Tooltip */}
      <div className="hidden md:flex items-center bg-paper/95 backdrop-blur-sm border border-rule shadow-soft px-3 py-1.5 rounded-xl text-xs font-medium text-ink">
        <span>Instant WhatsApp enquiry</span>
      </div>

      {/* Floating Action Button */}
      <button
        type="button"
        onClick={handleClick}
        aria-label="Chat with Kharari Inn on WhatsApp"
        className="w-12 h-12 sm:w-13 sm:h-13 bg-whatsapp hover:opacity-90 active:scale-95 text-white rounded-full shadow-soft transition-opacity duration-200 flex items-center justify-center focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-whatsapp/40 cursor-pointer"
      >
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 text-white"
          aria-hidden="true"
        >
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.63C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.53 7.5C9.36 7.5 9.09 7.57 8.85 7.82C8.62 8.08 7.96 8.69 7.96 9.96C7.96 11.22 8.88 12.44 9 12.6C9.13 12.78 10.7 15.34 13.19 16.31C15.26 17.11 15.68 16.95 16.12 16.91C16.57 16.87 17.55 16.33 17.75 15.75C17.96 15.18 17.96 14.69 17.89 14.58C17.83 14.47 17.65 14.41 17.39 14.28C17.13 14.15 15.83 13.51 15.59 13.43C15.35 13.34 15.17 13.3 15 13.56C14.82 13.82 14.33 14.41 14.18 14.58C14.03 14.75 13.88 14.77 13.62 14.65C13.36 14.51 12.53 14.24 11.54 13.36C10.77 12.67 10.25 11.82 10.1 11.56C9.95 11.3 10.08 11.16 10.21 11.03C10.33 10.91 10.48 10.72 10.62 10.56C10.76 10.39 10.8 10.28 10.89 10.1C10.98 9.93 10.93 9.78 10.87 9.65C10.8 9.52 10.3 8.31 10.09 7.8C9.89 7.3 9.69 7.37 9.53 7.5Z" />
        </svg>
      </button>
    </div>
  );
};
