import React from 'react';
import { Clock, Info } from 'lucide-react';
import { GUEST_POLICIES, HOTEL_INFO } from '../data/hotelData';

export const GuestPoliciesSection: React.FC = () => {
  return (
    <section id="policies" className="py-16 sm:py-20 lg:py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-px w-8 bg-gold"></span>
            <span className="text-xs uppercase tracking-widest font-semibold text-gold-dark">
              Stay Guidelines & Transparency
            </span>
            <span className="h-px w-8 bg-gold"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-charcoal tracking-tight mb-4">
            Guest Policies & <span className="italic font-serif text-gold-dark">Stay Information</span>
          </h2>

          <p className="text-base sm:text-lg text-warm-grey-dark leading-relaxed font-normal">
            To ensure a serene, safe, and family-oriented environment for all devotees and travellers visiting Ayodhya Dham, we kindly request our guests to review our house guidelines.
          </p>
        </div>

        {/* Timings Quick Banner */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-12">
          <div className="bg-sand-light border border-border rounded-sm p-5 text-center flex items-center justify-center gap-3">
            <Clock className="w-5 h-5 text-gold-dark" />
            <div className="text-left">
              <span className="text-xs text-warm-grey uppercase tracking-wider block">Standard Check-In</span>
              <span className="font-serif text-xl font-bold text-charcoal">{HOTEL_INFO.timings.checkIn} Onwards</span>
            </div>
          </div>

          <div className="bg-sand-light border border-border rounded-sm p-5 text-center flex items-center justify-center gap-3">
            <Clock className="w-5 h-5 text-gold-dark" />
            <div className="text-left">
              <span className="text-xs text-warm-grey uppercase tracking-wider block">Standard Check-Out</span>
              <span className="font-serif text-xl font-bold text-charcoal">Until {HOTEL_INFO.timings.checkOut}</span>
            </div>
          </div>
        </div>

        {/* Detailed Policies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {GUEST_POLICIES.map((policy, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-sm border border-border shadow-subtle flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 pb-3 mb-4 border-b border-border">
                  <Info className="w-4 h-4 text-gold-dark" />
                  <h3 className="font-serif text-xl font-medium text-charcoal">
                    {policy.title}
                  </h3>
                </div>

                <ul className="space-y-3">
                  {policy.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-2.5 text-xs text-warm-grey-dark leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-dark shrink-0 mt-1.5"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-3 border-t border-border/70 text-[11px] text-warm-grey italic">
                Verified with Kharari Inn guest management
              </div>
            </div>
          ))}
        </div>

        {/* Respectful Note */}
        <div className="mt-10 p-4 bg-sand/30 border border-border rounded-sm text-center max-w-2xl mx-auto">
          <p className="text-xs text-warm-grey leading-relaxed">
            Have specific travel requirements, late arrival timings, or elderly assistance needs? Feel free to mention them when sending your WhatsApp booking enquiry so our reception team can assist appropriately.
          </p>
        </div>

      </div>
    </section>
  );
};
