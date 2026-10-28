import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { RoomSection } from './components/RoomSection';
import { AmenitiesSection } from './components/AmenitiesSection';
import { ExploreAyodhyaSection } from './components/ExploreAyodhyaSection';
import { GallerySection } from './components/GallerySection';
import { GuestPoliciesSection } from './components/GuestPoliciesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { MobileStickyBookingBar } from './components/MobileStickyBookingBar';

export const App: React.FC = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [prefilledRoom, setPrefilledRoom] = useState<string | undefined>(undefined);

  const handleOpenBooking = (roomType?: string) => {
    setPrefilledRoom(roomType);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setPrefilledRoom(undefined);
  };

  return (
    <div className="min-h-screen flex flex-col bg-ivory text-charcoal selection:bg-gold/20 selection:text-charcoal relative">
      {/* Header */}
      <Header onOpenBooking={handleOpenBooking} />

      {/* Main Content Landmarks */}
      <main id="main-content" className="flex-1">
        <HeroSection onOpenBooking={() => handleOpenBooking()} />
        <AboutSection />
        <RoomSection onOpenBooking={handleOpenBooking} />
        <AmenitiesSection />
        <ExploreAyodhyaSection />
        <GallerySection />
        <GuestPoliciesSection />
        <ContactSection onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* WhatsApp Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        initialRoomType={prefilledRoom}
      />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppFloatingButton />

      {/* Mobile-Only Sticky Booking & Call Bar */}
      <MobileStickyBookingBar onOpenBooking={() => handleOpenBooking()} />
    </div>
  );
};

export default App;
