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
  const renderIcon = (iconName: string) => {
    const props = { className: 'w-5 h-5 text-accent' };
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
    <section id="amenities" className="py-16 sm:py-20 lg:py-24 bg-paper-2/40 border-b border-rule">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <p className="text-xs text-accent font-medium mb-2.5">
            Facilities and conveniences
          </p>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal text-ink tracking-tight mb-4">
            Practical Amenities for a Peaceful Stay
          </h2>

          <p className="text-sm sm:text-base text-muted leading-relaxed font-normal">
            We provide verified, practical in-room comforts and property infrastructure to ensure your spiritual journey in Ayodhya Dham is restful and worry-free.
          </p>
        </div>

        {/* Categorized Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {AMENITIES.map((amenity) => (
            <div
              key={amenity.id}
              className="bg-paper p-6 rounded-2xl border border-rule shadow-subtle hover:border-accent transition-colors duration-200 flex items-start gap-4"
            >
              <div className="p-2.5 bg-paper-3 rounded-xl border border-rule shrink-0">
                {renderIcon(amenity.iconName)}
              </div>
              <div>
                <h3 className="font-display text-lg font-medium text-ink mb-1">
                  {amenity.name}
                </h3>
                <p className="text-xs text-muted leading-relaxed">
                  {amenity.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Banner */}
        <div className="mt-12 bg-paper rounded-2xl border border-rule p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-subtle">
          <div className="flex items-center gap-4 text-left">
            <div className="p-3 bg-paper-2 rounded-xl text-ink shrink-0 border border-rule">
              <Zap className="w-6 h-6 text-accent" />
            </div>
            <div>
              <h4 className="font-display text-lg font-medium text-ink">
                Heavy-Duty Cummins Power Backup on Premises
              </h4>
              <p className="text-xs text-muted mt-0.5 max-w-xl">
                Noticeable in our exterior photograph, our dedicated soundproof generator ensures continuous lighting, air conditioning, and water supply during any municipal power fluctuations.
              </p>
            </div>
          </div>

          <div className="shrink-0">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-paper-3 border border-rule rounded-xl text-xs font-medium text-ink">
              <ShieldCheck className="w-4 h-4 text-accent" />
              Verified On-Site Facility
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
