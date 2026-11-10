import React from 'react';
import { Phone, Mail, MapPin, MessageSquare, Navigation, ExternalLink, Calendar } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';
import { createWhatsAppUrl, openWhatsApp } from '../utils/whatsapp';

interface ContactSectionProps {
  onOpenBooking: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenBooking }) => {
  const handleGeneralWhatsApp = () => {
    const url = createWhatsAppUrl('Namaste Kharari Inn, I would like to enquire about room availability and stay tariffs.');
    openWhatsApp(url);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-paper-2/40 border-b border-rule">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <p className="text-xs text-accent font-medium mb-2.5">
            Get in touch
          </p>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal text-ink tracking-tight mb-4">
            We Look Forward to Welcoming You
          </h2>

          <p className="text-sm sm:text-base text-muted leading-relaxed font-normal">
            Reach out directly for stay enquiries, family room bookings, and directions to Kharari Inn in Ayodhya Dham.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact & Details (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Primary Booking WhatsApp Banner */}
            <div className="bg-paper p-6 sm:p-8 rounded-2xl border border-rule shadow-soft">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 pb-4 border-b border-rule">
                <div>
                  <p className="text-xs text-accent font-medium mb-0.5">
                    Primary booking and instant assistance
                  </p>
                  <h3 className="font-display text-2xl font-medium text-ink">
                    WhatsApp Booking Desk
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-ink hover:bg-accent text-white text-xs font-medium rounded-xl transition-colors shadow-subtle cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5 text-accent" />
                  <span>Stay enquiry form</span>
                </button>
              </div>

              <p className="text-xs sm:text-sm text-muted mb-4">
                Send your check-in dates, guest count, and preferred room type directly to our front desk for immediate confirmation and tariff details.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={handleGeneralWhatsApp}
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-white bg-whatsapp hover:opacity-90 rounded-xl transition-opacity shadow-subtle cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp: {HOTEL_INFO.contacts.primaryWhatsApp}</span>
                </button>

                <a
                  href={`tel:${HOTEL_INFO.contacts.primaryWhatsAppRaw}`}
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-ink bg-paper-2 hover:bg-rule/40 border border-rule rounded-xl transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-accent" />
                  <span>Direct Call</span>
                </a>
              </div>
            </div>

            {/* Address & Alternative Contacts Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Full Address Card */}
              <div className="bg-paper p-6 rounded-2xl border border-rule shadow-subtle">
                <div className="flex items-center gap-2 pb-3 mb-3 border-b border-rule">
                  <MapPin className="w-4 h-4 text-accent" />
                  <h4 className="font-display text-lg font-medium text-ink">
                    Property Location
                  </h4>
                </div>
                <p className="text-xs text-muted leading-relaxed mb-4">
                  {HOTEL_INFO.address.full}
                </p>
                <a
                  href={HOTEL_INFO.contacts.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-accent hover:underline"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3 ml-0.5" />
                </a>
              </div>

              {/* Email & Alternative Phones Card */}
              <div className="bg-paper p-6 rounded-2xl border border-rule shadow-subtle flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 pb-3 mb-3 border-b border-rule">
                    <Phone className="w-4 h-4 text-accent" />
                    <h4 className="font-display text-lg font-medium text-ink">
                      Alternative Contacts
                    </h4>
                  </div>

                  <div className="space-y-2 mb-4">
                    <p className="text-xs text-muted font-medium">
                      Direct front desk call lines:
                    </p>
                    {HOTEL_INFO.contacts.alternativePhones.map((phone, idx) => (
                      <div key={idx} className="flex items-center justify-between text-xs">
                        <span className="text-muted">{phone.label}:</span>
                        <a
                          href={`tel:${phone.raw}`}
                          className="font-medium text-ink hover:text-accent transition-colors"
                        >
                          {phone.number}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-rule/70 flex items-center justify-between text-xs">
                  <span className="text-muted flex items-center gap-1">
                    <Mail className="w-3.5 h-3.5 text-accent" />
                    Email:
                  </span>
                  <a
                    href={`mailto:${HOTEL_INFO.contacts.email}`}
                    className="font-medium text-ink hover:text-accent transition-colors break-all"
                  >
                    {HOTEL_INFO.contacts.email}
                  </a>
                </div>

              </div>

            </div>

          </div>

          {/* Right Column: Directions & Quick Guide (5 cols) */}
          <div className="lg:col-span-5 bg-paper p-6 sm:p-8 rounded-2xl border border-rule shadow-soft">
            <h3 className="font-display text-2xl font-medium text-ink mb-3">
              How to Reach Kharari Inn
            </h3>

            <p className="text-xs sm:text-sm text-muted leading-relaxed mb-6">
              Our property is situated on Chhoti Chhawni Road, easily accessible from both Nayaghat and Karsewakpuram.
            </p>

            <div className="space-y-4 mb-6">
              <div className="p-3 bg-paper-3 rounded-xl border border-rule">
                <h4 className="text-xs font-semibold text-ink flex items-center gap-1.5 mb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                  From Ayodhya Dham Junction (Railway Station)
                </h4>
                <p className="text-xs text-muted leading-relaxed">
                  Approx. 2–3 km. Take a local battery E-Rickshaw towards Nayaghat Road / Bangai Mandir, Chhoti Chhawni Road (approx. 8–10 mins).
                </p>
              </div>

              <div className="p-3 bg-paper-3 rounded-xl border border-rule">
                <h4 className="text-xs font-semibold text-ink flex items-center gap-1.5 mb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                  From Ayodhya Cantt (Faizabad Railway Station)
                </h4>
                <p className="text-xs text-muted leading-relaxed">
                  Approx. 8.5 km. Direct autorickshaws and cabs are readily available outside the station towards Ayodhya Dham / Vasudev Ghat.
                </p>
              </div>

              <div className="p-3 bg-paper-3 rounded-xl border border-rule">
                <h4 className="text-xs font-semibold text-ink flex items-center gap-1.5 mb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                  From Maharishi Valmiki International Airport
                </h4>
                <p className="text-xs text-muted leading-relaxed">
                  Approx. 8.6 km via the newly expanded 4-lane highway corridor into Ayodhya Dham (approx. 20–25 mins by taxi).
                </p>
              </div>
            </div>

            <a
              href={HOTEL_INFO.contacts.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-medium text-ink bg-paper-2 hover:bg-rule/40 border border-rule rounded-xl transition-colors"
            >
              <Navigation className="w-4 h-4 text-accent" />
              <span>Open navigation route</span>
            </a>

          </div>

        </div>

      </div>
    </section>
  );
};
