import React from 'react';
import { Clock, Info } from 'lucide-react';
import { GUEST_POLICIES, HOTEL_INFO } from '../data/hotelData';

export const GuestPoliciesSection: React.FC = () => {
  return (
    <section id="policies" className="py-16 sm:py-20 lg:py-24 bg-paper border-b border-rule">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <p className="text-xs text-accent font-medium mb-2.5">
            Stay guidelines and transparency
          </p>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal text-ink tracking-tight mb-4">
            Guest Policies and Stay Information
          </h2>

          <p className="text-sm sm:text-base text-muted leading-relaxed font-normal">
            To ensure a serene, safe, and family-oriented environment for all devotees and travellers visiting Ayodhya Dham, we kindly request our guests to review our house guidelines.
          </p>
        </div>

        {/* Timings Banner */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-12">
          <div className="bg-paper-2/50 border border-rule rounded-2xl p-5 text-center flex items-center justify-center gap-3">
            <Clock className="w-5 h-5 text-accent" />
            <div className="text-left">
              <span className="text-xs text-muted block">Standard check-in</span>
              <span className="font-display text-xl font-bold text-ink">{HOTEL_INFO.timings.checkIn} onwards</span>
            </div>
          </div>

          <div className="bg-paper-2/50 border border-rule rounded-2xl p-5 text-center flex items-center justify-center gap-3">
            <Clock className="w-5 h-5 text-accent" />
            <div className="text-left">
              <span className="text-xs text-muted block">Standard check-out</span>
              <span className="font-display text-xl font-bold text-ink">Until {HOTEL_INFO.timings.checkOut}</span>
            </div>
          </div>
        </div>

        {/* Detailed Policies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {GUEST_POLICIES.map((policy, idx) => (
            <div
              key={idx}
              className="bg-paper p-6 rounded-2xl border border-rule shadow-subtle flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 pb-3 mb-4 border-b border-rule">
                  <Info className="w-4 h-4 text-accent" />
                  <h3 className="font-display text-xl font-medium text-ink">
                    {policy.title}
                  </h3>
                </div>

                <ul className="space-y-3">
                  {policy.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-2.5 text-xs text-muted leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-1.5"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-3 border-t border-rule/70 text-xs text-muted">
                Verified with Kharari Inn guest management
              </div>
            </div>
          ))}
        </div>

        {/* Respectful Note */}
        <div className="mt-10 p-4 bg-paper-3 border border-rule rounded-2xl text-center max-w-2xl mx-auto">
          <p className="text-xs text-muted leading-relaxed">
            Have specific travel requirements, late arrival timings, or elderly assistance needs? Feel free to mention them when sending your WhatsApp booking enquiry so our reception team can assist appropriately.
          </p>
        </div>

      </div>
    </section>
  );
};
