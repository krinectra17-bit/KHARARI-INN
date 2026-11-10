import React from 'react';
import { Phone, Mail, MapPin, MessageSquare, ArrowUp, Calendar } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Our Rooms', href: '#rooms' },
    { label: 'Amenities', href: '#amenities' },
    { label: 'Explore Ayodhya', href: '#explore' },
    { label: 'Authentic Gallery', href: '#gallery' },
    { label: 'Guest Policies', href: '#policies' },
    { label: 'Contact Us', href: '#contact' },
  ];

  return (
    <footer className="bg-ink text-white pt-16 pb-28 lg:pb-16 border-t border-rule/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Col (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex flex-col text-left">
              <span className="font-display text-2xl lg:text-3xl font-semibold tracking-wider text-white">
                Kharari Inn
              </span>
              <span className="text-xs text-accent font-medium mt-0.5">
                Ayodhya Dham, Uttar Pradesh
              </span>
            </div>

            <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-normal max-w-sm">
              A comfortable boutique guest house providing welcoming hospitality, quiet air-conditioned rooms, and attached bathrooms for pilgrims and families visiting the holy city of Ayodhya.
            </p>

            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-medium text-ink bg-accent hover:opacity-90 rounded-xl transition-opacity shadow-subtle cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5 text-ink" />
                <span>Enquire stay on WhatsApp</span>
              </button>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display text-lg font-medium text-white/90 pb-2 border-b border-white/10">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs text-white/70">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-accent transition-colors block py-0.5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            <h4 className="font-display text-lg font-medium text-white/90 pb-2 border-b border-white/10">
              Property Location and Contact
            </h4>
            
            <div className="space-y-3 text-xs text-white/70">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span className="leading-relaxed">{HOTEL_INFO.address.full}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-accent shrink-0" />
                <span>WhatsApp: </span>
                <a
                  href={`https://wa.me/${HOTEL_INFO.contacts.primaryWhatsAppRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-accent font-medium"
                >
                  {HOTEL_INFO.contacts.primaryWhatsApp}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <span>Front desk: </span>
                <a
                  href={`tel:${HOTEL_INFO.contacts.alternativePhones[0].raw}`}
                  className="text-white hover:text-accent font-medium"
                >
                  {HOTEL_INFO.contacts.alternativePhones[0].number}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <span>Email: </span>
                <a
                  href={`mailto:${HOTEL_INFO.contacts.email}`}
                  className="text-white hover:text-accent font-medium"
                >
                  {HOTEL_INFO.contacts.email}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={HOTEL_INFO.contacts.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-accent hover:underline"
              >
                <span>View location on Google Maps</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© {currentYear} Kharari Inn (Kharari Guest House). All rights reserved.</p>
          
          <div className="flex items-center gap-6">
            <a href="#policies" className="hover:text-white/80 transition-colors">
              Stay Policies
            </a>
            <span className="text-white/20">•</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 hover:text-accent transition-colors cursor-pointer"
              aria-label="Scroll to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
