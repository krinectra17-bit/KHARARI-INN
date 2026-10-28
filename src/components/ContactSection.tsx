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
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-sand-light border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-px w-8 bg-gold"></span>
            <span className="text-xs uppercase tracking-widest font-semibold text-gold-dark">
              Get in Touch
            </span>
            <span className="h-px w-8 bg-gold"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-charcoal tracking-tight mb-4">
            We Look Forward to <span className="italic font-serif text-gold-dark">Welcoming You</span>
          </h2>

          <p className="text-base sm:text-lg text-warm-grey-dark leading-relaxed font-normal">
            Reach out directly for stay enquiries, family room bookings, and directions to Kharari Inn in Ayodhya Dham.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact & Details (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Primary Booking WhatsApp Banner */}
            <div className="bg-white p-6 sm:p-8 rounded-sm border border-gold/40 shadow-soft">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 pb-4 border-b border-border">
                <div>
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-gold-dark block">
                    Primary Booking & Instant Assistance
                  </span>
                  <h3 className="font-serif text-2xl font-medium text-charcoal">
                    WhatsApp Booking Desk
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-charcoal hover:bg-gold-dark text-white text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors shadow-subtle"
                >
                  <Calendar className="w-3.5 h-3.5 text-gold-light" />
                  <span>Stay Enquiry Form</span>
                </button>
              </div>

              <p className="text-xs sm:text-sm text-warm-grey-dark mb-4">
                Send your check-in dates, guest count, and preferred room type directly to our front desk for immediate confirmation and tariff details.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={handleGeneralWhatsApp}
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#25D366] hover:bg-[#20ba59] rounded-sm transition-colors shadow-subtle cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp: {HOTEL_INFO.contacts.primaryWhatsApp}</span>
                </button>

                <a
                  href={`tel:${HOTEL_INFO.contacts.primaryWhatsAppRaw}`}
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-charcoal bg-sand/60 hover:bg-sand border border-border rounded-sm transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-gold-dark" />
                  <span>Direct Call</span>
                </a>
              </div>
            </div>

            {/* Address & Alternative Contacts Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Full Address Card */}
              <div className="bg-white p-6 rounded-sm border border-border shadow-subtle">
                <div className="flex items-center gap-2 pb-3 mb-3 border-b border-border">
                  <MapPin className="w-4 h-4 text-gold-dark" />
                  <h4 className="font-serif text-lg font-medium text-charcoal">
                    Property Location
                  </h4>
                </div>
                <p className="text-xs text-warm-grey-dark leading-relaxed mb-4">
                  {HOTEL_INFO.address.full}
                </p>
                <a
                  href={HOTEL_INFO.contacts.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold-dark hover:underline"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3 ml-0.5" />
                </a>
              </div>

              {/* Email & Alternative Phones Card */}
              <div className="bg-white p-6 rounded-sm border border-border shadow-subtle flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 pb-3 mb-3 border-b border-border">
                    <Phone className="w-4 h-4 text-gold-dark" />
                    <h4 className="font-serif text-lg font-medium text-charcoal">
                      Alternative Contacts
                    </h4>
                  </div>

                  <div className="space-y-2 mb-4">
                    <p className="text-[11px] text-warm-grey uppercase tracking-wider font-semibold">
                      Direct Front Desk Call Lines:
                    </p>
                    {HOTEL_INFO.contacts.alternativePhones.map((phone, idx) => (
                      <div key={idx} className="flex items-center justify-between text-xs">
                        <span className="text-warm-grey">{phone.label}:</span>
                        <a
                          href={`tel:${phone.raw}`}
                          className="font-medium text-charcoal hover:text-gold-dark transition-colors"
                        >
                          {phone.number}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-border/70 flex items-center justify-between text-xs">
                  <span className="text-warm-grey flex items-center gap-1">
                    <Mail className="w-3.5 h-3.5 text-gold-dark" />
                    Email:
                  </span>
                  <a
                    href={`mailto:${HOTEL_INFO.contacts.email}`}
                    className="font-medium text-charcoal hover:text-gold-dark transition-colors break-all"
                  >
                    {HOTEL_INFO.contacts.email}
                  </a>
                </div>

              </div>

            </div>

          </div>

          {/* Right Column: Directions & Quick Guide (5 cols) */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-sm border border-border shadow-soft">
            <h3 className="font-serif text-2xl font-medium text-charcoal mb-3">
              How to Reach Kharari Inn
            </h3>

            <p className="text-xs sm:text-sm text-warm-grey-dark leading-relaxed mb-6">
              Our property is situated on Chhoti Chhawni Road, easily accessible from both Nayaghat and Karsewakpuram.
            </p>

            <div className="space-y-4 mb-6">
              <div className="p-3 bg-ivory rounded-sm border border-border">
                <h4 className="text-xs font-semibold text-charcoal flex items-center gap-1.5 mb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-dark"></span>
                  From Ayodhya Dham Junction (Railway Station)
                </h4>
                <p className="text-xs text-warm-grey leading-relaxed">
                  Approx. 2–3 km. Take a local battery E-Rickshaw towards Nayaghat Road / Bangai Mandir, Chhoti Chhawni Road (approx. 8–10 mins).
                </p>
              </div>

              <div className="p-3 bg-ivory rounded-sm border border-border">
                <h4 className="text-xs font-semibold text-charcoal flex items-center gap-1.5 mb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-dark"></span>
                  From Ayodhya Cantt (Faizabad Railway Station)
                </h4>
                <p className="text-xs text-warm-grey leading-relaxed">
                  Approx. 8.5 km. Direct autorickshaws and cabs are readily available outside the station towards Ayodhya Dham / Vasudev Ghat.
                </p>
              </div>

              <div className="p-3 bg-ivory rounded-sm border border-border">
                <h4 className="text-xs font-semibold text-charcoal flex items-center gap-1.5 mb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-dark"></span>
                  From Maharishi Valmiki International Airport
                </h4>
                <p className="text-xs text-warm-grey leading-relaxed">
                  Approx. 8.6 km via the newly expanded 4-lane highway corridor into Ayodhya Dham (approx. 20–25 mins by taxi).
                </p>
              </div>
            </div>

            <a
              href={HOTEL_INFO.contacts.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-xs uppercase tracking-wider font-semibold text-charcoal bg-sand/70 hover:bg-sand border border-border rounded-sm transition-colors"
            >
              <Navigation className="w-4 h-4 text-gold-dark" />
              <span>Open Exact Navigation Route</span>
            </a>

          </div>

        </div>

      </div>
    </section>
  );
};
