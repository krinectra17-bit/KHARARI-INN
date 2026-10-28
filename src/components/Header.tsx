import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare, Calendar } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

interface HeaderProps {
  onOpenBooking: (roomType?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Our Rooms', href: '#rooms' },
    { label: 'Amenities', href: '#amenities' },
    { label: 'Explore Ayodhya', href: '#explore' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Policies', href: '#policies' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-ivory/95 backdrop-blur-md shadow-subtle border-b border-border py-3'
          : 'bg-ivory/80 backdrop-blur-sm border-b border-border/40 py-4 lg:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Wordmark */}
          <a
            href="#home"
            onClick={(e) => handleNavLinkClick(e, '#home')}
            className="flex flex-col group text-left focus:outline-none"
            aria-label="Kharari Inn Home"
          >
            <div className="flex items-center gap-2">
              <span className="font-serif text-2xl sm:text-2xl lg:text-3xl font-semibold tracking-wider text-charcoal group-hover:text-gold-dark transition-colors">
                KHARARI INN
              </span>
              <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-gold"></span>
            </div>
            <span className="text-[10px] sm:text-[11px] font-sans tracking-widest uppercase text-warm-grey font-medium -mt-0.5">
              Ayodhya Dham
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavLinkClick(e, link.href)}
                className="text-sm font-medium text-charcoal/80 hover:text-gold-dark transition-colors tracking-wide relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${HOTEL_INFO.contacts.primaryWhatsAppRaw}`}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-charcoal border border-border rounded-sm hover:border-gold hover:text-gold-dark transition-colors bg-white/60"
              title="Call Kharari Inn"
            >
              <Phone className="w-3.5 h-3.5 text-gold" />
              <span>{HOTEL_INFO.contacts.primaryWhatsApp}</span>
            </a>

            <button
              type="button"
              onClick={() => onOpenBooking()}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-wider font-semibold text-white bg-charcoal hover:bg-gold-dark rounded-sm transition-all duration-200 shadow-subtle hover:shadow-soft active:scale-[0.98]"
            >
              <Calendar className="w-3.5 h-3.5 text-gold-light" />
              <span>Book Stay</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 sm:hidden">
            <button
              type="button"
              onClick={() => onOpenBooking()}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-white bg-charcoal rounded-sm"
              aria-label="Book stay"
            >
              <Calendar className="w-3.5 h-3.5 text-gold-light" />
              <span>Book</span>
            </button>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-charcoal hover:text-gold-dark focus:outline-none focus:ring-2 focus:ring-gold rounded-sm border border-border bg-white/70"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-ivory border-b border-border shadow-soft px-4 pt-4 pb-6 mt-2 animate-fadeIn">
          <nav className="flex flex-col space-y-3" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavLinkClick(e, link.href)}
                className="text-base font-serif font-medium text-charcoal hover:text-gold-dark transition-colors py-1.5 border-b border-border/40"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mt-5 pt-4 border-t border-border flex flex-col gap-3">
            <a
              href={`tel:${HOTEL_INFO.contacts.primaryWhatsAppRaw}`}
              className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-medium text-charcoal bg-sand/60 border border-border rounded-sm"
            >
              <Phone className="w-4 h-4 text-gold-dark" />
              <span>Call: {HOTEL_INFO.contacts.primaryWhatsApp}</span>
            </a>

            <button
              type="button"
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-medium text-white bg-charcoal hover:bg-gold-dark rounded-sm transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-gold-light" />
              <span>Enquire on WhatsApp</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
