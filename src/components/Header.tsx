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
      setIsScrolled(window.scrollY > 20);
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
      className={`sticky top-0 left-0 right-0 z-40 transition-colors duration-200 ${
        isScrolled
          ? 'bg-paper/95 backdrop-blur-md shadow-subtle border-b border-rule py-2.5 sm:py-3'
          : 'bg-paper/95 backdrop-blur-sm border-b border-rule/50 py-3 sm:py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Wordmark */}
          <a
            href="#home"
            onClick={(e) => handleNavLinkClick(e, '#home')}
            className="flex flex-col group text-left focus-visible:outline-none"
            aria-label="Kharari Inn Home"
          >
            <span className="font-display text-xl sm:text-2xl lg:text-3xl font-semibold text-ink group-hover:text-accent transition-colors">
              Kharari Inn
            </span>
            <span className="text-xs text-muted font-normal -mt-0.5">
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
                className="text-sm font-normal text-ink/80 hover:text-accent transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-accent after:transition-transform after:duration-200 after:origin-left after:scale-x-0 hover:after:scale-x-100"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${HOTEL_INFO.contacts.primaryWhatsAppRaw}`}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-ink border border-rule rounded-xl hover:border-accent hover:text-accent transition-colors bg-paper-3/80"
              title="Call Kharari Inn"
            >
              <Phone className="w-3.5 h-3.5 text-accent" />
              <span>{HOTEL_INFO.contacts.primaryWhatsApp}</span>
            </a>

            <button
              type="button"
              onClick={() => onOpenBooking()}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-white bg-accent hover:opacity-90 rounded-xl transition-opacity duration-200 shadow-sm active:scale-[0.98]"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Stay</span>
            </button>
          </div>

          {/* Mobile Right Controls: Book Button + Hamburger Menu */}
          <div className="flex items-center gap-2 sm:hidden">
            <button
              type="button"
              onClick={() => onOpenBooking()}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-accent hover:opacity-90 rounded-xl shadow-sm transition-opacity active:scale-[0.98]"
              aria-label="Open stay booking form"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book</span>
            </button>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-ink hover:text-accent focus-visible:outline-none rounded-xl border border-rule bg-paper-3/80 active:bg-paper-2 transition-colors"
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
        <div className="lg:hidden bg-paper border-b border-rule shadow-soft px-5 pt-3 pb-6 mt-2">
          <nav className="flex flex-col space-y-2.5" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavLinkClick(e, link.href)}
                className="text-base font-display font-medium text-ink hover:text-accent transition-colors py-2 border-b border-rule/40"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mt-5 pt-4 border-t border-rule flex flex-col gap-2.5">
            <a
              href={`tel:${HOTEL_INFO.contacts.primaryWhatsAppRaw}`}
              className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-medium text-ink bg-paper-2 border border-rule/80 rounded-xl"
            >
              <Phone className="w-4 h-4 text-accent" />
              <span>Call: {HOTEL_INFO.contacts.primaryWhatsApp}</span>
            </a>

            <button
              type="button"
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-medium text-white bg-accent hover:opacity-90 rounded-xl transition-opacity shadow-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Enquire on WhatsApp</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
