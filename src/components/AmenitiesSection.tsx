import React from 'react';
import {
  Wind,
  Wifi,
  Tv,
  Coffee,
  Bath,
  Zap,
  Car,
  Sparkles,
  UserCheck,
  Luggage,
  Compass,
  Navigation,
  ShieldCheck
} from 'lucide-react';
import { AMENITIES } from '../data/hotelData';

export const AmenitiesSection: React.FC = () => {
  // Mapping string to Lucide icon components
  const renderIcon = (iconName: string) => {
    const props = { className: 'w-5 h-5 text-gold-dark' };
    switch (iconName) {
      case 'Wind':
        return <Wind {...props} />;
      case 'Wifi':
        return <Wifi {...props} />;
      case 'Tv':
        return <Tv {...props} />;
      case 'Coffee':
        return <Coffee {...props} />;
      case 'Bath':
        return <Bath {...props} />;
      case 'Zap':
        return <Zap {...props} />;
      case 'Car':
        return <Car {...props} />;
      case 'Sparkles':
        return <Sparkles {...props} />;
      case 'UserCheck':
        return <UserCheck {...props} />;
      case 'Luggage':
        return <Luggage {...props} />;
      case 'Compass':
        return <Compass {...props} />;
      case 'Navigation':
        return <Navigation {...props} />;
      default:
        return <ShieldCheck {...props} />;
    }
  };

  return (
    <section id="amenities" className="py-16 sm:py-20 lg:py-24 bg-sand-light border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-px w-8 bg-gold"></span>
            <span className="text-xs uppercase tracking-widest font-semibold text-gold-dark">
              Facilities & Conveniences
            </span>
            <span className="h-px w-8 bg-gold"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-charcoal tracking-tight mb-4">
            Practical Amenities for a <span className="italic font-serif text-gold-dark">Peaceful Stay</span>
          </h2>

          <p className="text-base sm:text-lg text-warm-grey-dark leading-relaxed font-normal">
            We provide verified, practical in-room comforts and property infrastructure to ensure your spiritual journey in Ayodhya Dham is restful and worry-free.
          </p>
        </div>

        {/* Editorial Amenities Layout: Categorized Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {AMENITIES.map((amenity) => (
            <div
              key={amenity.id}
              className="bg-white p-6 rounded-sm border border-border/80 shadow-subtle hover:border-gold/50 transition-all duration-200 flex items-start gap-4"
            >
              <div className="p-2.5 bg-ivory rounded-sm border border-border shrink-0">
                {renderIcon(amenity.iconName)}
              </div>
              <div>
                <h3 className="font-serif text-lg font-medium text-charcoal mb-1">
                  {amenity.name}
                </h3>
                <p className="text-xs text-warm-grey-dark leading-relaxed">
                  {amenity.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Verified Feature Banner */}
        <div className="mt-12 bg-white rounded-sm border border-border p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-subtle">
          <div className="flex items-center gap-4 text-left">
            <div className="p-3 bg-sand rounded-sm text-charcoal shrink-0 border border-border">
              <Zap className="w-6 h-6 text-gold-dark" />
            </div>
            <div>
              <h4 className="font-serif text-lg font-medium text-charcoal">
                Heavy-Duty Cummins Power Backup on Premises
              </h4>
              <p className="text-xs text-warm-grey mt-0.5 max-w-xl">
                Noticeable in our exterior photograph, our dedicated soundproof generator ensures continuous lighting, air conditioning, and water supply during any municipal power fluctuations.
              </p>
            </div>
          </div>

          <div className="shrink-0">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-ivory border border-border rounded-sm text-xs font-medium text-charcoal">
              <ShieldCheck className="w-4 h-4 text-gold-dark" />
              Verified On-Site Facility
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
