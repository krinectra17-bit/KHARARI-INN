import React, { useState, useEffect } from 'react';
import { X, Calendar, User, Users, Phone, MessageSquare, AlertCircle, Info } from 'lucide-react';
import { BookingFormData } from '../types';
import { HOTEL_INFO, ROOMS } from '../data/hotelData';
import { buildWhatsAppBookingMessage, createWhatsAppUrl, openWhatsApp } from '../utils/whatsapp';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialRoomType?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialRoomType
}) => {
  // Format today's date as YYYY-MM-DD for min date attribute
  const getTodayDateString = (): string => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const getTomorrowDateString = (): string => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const year = tomorrow.getFullYear();
    const month = String(tomorrow.getMonth() + 1).padStart(2, '0');
    const day = String(tomorrow.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const [formData, setFormData] = useState<BookingFormData>({
    guestName: '',
    checkInDate: getTodayDateString(),
    checkOutDate: getTomorrowDateString(),
    adults: 2,
    children: 0,
    roomType: initialRoomType || 'Double Bed Room',
    contactNumber: '',
    additionalRequirements: ''
  });

  const [errors, setErrors] = useState<Partial<Record<keyof BookingFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sync initialRoomType when modal opens with a specific room
  useEffect(() => {
    if (initialRoomType) {
      setFormData((prev) => ({ ...prev, roomType: initialRoomType }));
    }
  }, [initialRoomType]);

  // Handle escape key and lock body scroll
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof BookingFormData, string>> = {};
    const todayStr = getTodayDateString();

    if (!formData.guestName.trim()) {
      newErrors.guestName = 'Please enter the primary guest name.';
    } else if (formData.guestName.trim().length < 2) {
      newErrors.guestName = 'Guest name should be at least 2 characters.';
    }

    if (!formData.checkInDate) {
      newErrors.checkInDate = 'Please select a check-in date.';
    } else if (formData.checkInDate < todayStr) {
      newErrors.checkInDate = 'Check-in date cannot be in the past.';
    }

    if (!formData.checkOutDate) {
      newErrors.checkOutDate = 'Please select a check-out date.';
    } else if (formData.checkOutDate <= formData.checkInDate) {
      newErrors.checkOutDate = 'Check-out date must be later than check-in date.';
    }

    if (!formData.adults || formData.adults < 1) {
      newErrors.adults = 'Please specify at least 1 adult guest.';
    }

    if (!formData.roomType) {
      newErrors.roomType = 'Please select a preferred room type.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    try {
      const message = buildWhatsAppBookingMessage(formData);
      const url = createWhatsAppUrl(message, HOTEL_INFO.contacts.primaryWhatsAppRaw);
      openWhatsApp(url);
      setTimeout(() => {
        setIsSubmitting(false);
        onClose();
      }, 500);
    } catch {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/80 p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative bg-paper rounded-2xl border border-rule shadow-elevated w-full max-w-xl my-8 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-paper-2/60 px-6 py-5 border-b border-rule flex items-center justify-between">
          <div>
            <p className="text-xs text-accent font-medium mb-1">
              WhatsApp booking enquiry
            </p>
            <h2 id="booking-modal-title" className="font-display text-2xl font-normal text-ink">
              Book Your Stay at Kharari Inn
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-muted hover:text-ink hover:bg-rule/40 rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label="Close booking modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Process Explanation Alert */}
        <div className="bg-paper-3 px-6 py-3 border-b border-rule text-xs text-muted flex items-center gap-2.5">
          <Info className="w-4 h-4 text-accent shrink-0" />
          <span>
            Submitting this form prepares your stay enquiry in WhatsApp. Hotel staff will confirm room availability and tariff directly.
          </span>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          
          {/* Guest Name */}
          <div>
            <label className="block text-xs font-medium text-ink mb-1.5">
              Guest name <span className="text-accent">*</span>
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-muted absolute left-3 top-3" />
              <input
                type="text"
                placeholder="e.g. Ramesh Chandra Sharma"
                value={formData.guestName}
                onChange={(e) => setFormData({ ...formData, guestName: e.target.value })}
                className={`w-full pl-9 pr-3 py-2.5 text-sm bg-paper border ${
                  errors.guestName ? 'border-accent ring-1 ring-accent' : 'border-rule focus:border-accent'
                } rounded-xl focus:outline-none text-ink`}
                required
              />
            </div>
            {errors.guestName && (
              <p className="mt-1 text-xs text-accent flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                {errors.guestName}
              </p>
            )}
          </div>

          {/* Dates Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Check-in */}
            <div>
              <label className="block text-xs font-medium text-ink mb-1.5">
                Check-in date <span className="text-accent">*</span>
              </label>
              <div className="relative">
                <Calendar className="w-4 h-4 text-muted absolute left-3 top-3 pointer-events-none" />
                <input
                  type="date"
                  min={getTodayDateString()}
                  value={formData.checkInDate}
                  onChange={(e) => setFormData({ ...formData, checkInDate: e.target.value })}
                  className={`w-full pl-9 pr-3 py-2.5 text-sm bg-paper border ${
                    errors.checkInDate ? 'border-accent ring-1 ring-accent' : 'border-rule focus:border-accent'
                  } rounded-xl focus:outline-none text-ink`}
                  required
                />
              </div>
              {errors.checkInDate && (
                <p className="mt-1 text-xs text-accent flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.checkInDate}
                </p>
              )}
            </div>

            {/* Check-out */}
            <div>
              <label className="block text-xs font-medium text-ink mb-1.5">
                Check-out date <span className="text-accent">*</span>
              </label>
              <div className="relative">
                <Calendar className="w-4 h-4 text-muted absolute left-3 top-3 pointer-events-none" />
                <input
                  type="date"
                  min={formData.checkInDate || getTodayDateString()}
                  value={formData.checkOutDate}
                  onChange={(e) => setFormData({ ...formData, checkOutDate: e.target.value })}
                  className={`w-full pl-9 pr-3 py-2.5 text-sm bg-paper border ${
                    errors.checkOutDate ? 'border-accent ring-1 ring-accent' : 'border-rule focus:border-accent'
                  } rounded-xl focus:outline-none text-ink`}
                  required
                />
              </div>
              {errors.checkOutDate && (
                <p className="mt-1 text-xs text-accent flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.checkOutDate}
                </p>
              )}
            </div>
          </div>

          {/* Guests & Room Selection */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            
            {/* Adults */}
            <div>
              <label className="block text-xs font-medium text-ink mb-1.5">
                Adults (12+ years) <span className="text-accent">*</span>
              </label>
              <div className="relative">
                <Users className="w-4 h-4 text-muted absolute left-3 top-3" />
                <select
                  value={formData.adults}
                  onChange={(e) => setFormData({ ...formData, adults: Number(e.target.value) })}
                  className="w-full pl-9 pr-3 py-2.5 text-sm bg-paper border border-rule focus:border-accent rounded-xl focus:outline-none text-ink"
                >
                  <option value={1}>1 adult</option>
                  <option value={2}>2 adults</option>
                  <option value={3}>3 adults</option>
                  <option value={4}>4 adults</option>
                  <option value={5}>5 adults</option>
                  <option value={6}>6+ adults (group)</option>
                </select>
              </div>
            </div>

            {/* Children */}
            <div>
              <label className="block text-xs font-medium text-ink mb-1.5">
                Children <span className="text-muted">(optional)</span>
              </label>
              <select
                value={formData.children}
                onChange={(e) => setFormData({ ...formData, children: Number(e.target.value) })}
                className="w-full px-3 py-2.5 text-sm bg-paper border border-rule focus:border-accent rounded-xl focus:outline-none text-ink"
              >
                <option value={0}>0 children</option>
                <option value={1}>1 child</option>
                <option value={2}>2 children</option>
                <option value={3}>3+ children</option>
              </select>
            </div>

            {/* Preferred Room Type */}
            <div>
              <label className="block text-xs font-medium text-ink mb-1.5">
                Room category <span className="text-accent">*</span>
              </label>
              <select
                value={formData.roomType}
                onChange={(e) => setFormData({ ...formData, roomType: e.target.value })}
                className="w-full px-3 py-2.5 text-sm bg-paper border border-rule focus:border-accent rounded-xl focus:outline-none text-ink"
              >
                {ROOMS.map((r) => (
                  <option key={r.id} value={r.name}>
                    {r.name}
                  </option>
                ))}
              </select>
            </div>

          </div>

          {/* Optional Contact Number */}
          <div>
            <label className="block text-xs font-medium text-ink mb-1.5">
              Contact phone number <span className="text-muted">(optional)</span>
            </label>
            <div className="relative">
              <Phone className="w-4 h-4 text-muted absolute left-3 top-3" />
              <input
                type="tel"
                placeholder="e.g. +91 98765 43210"
                value={formData.contactNumber}
                onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
                className="w-full pl-9 pr-3 py-2.5 text-sm bg-paper border border-rule focus:border-accent rounded-xl focus:outline-none text-ink"
              />
            </div>
          </div>

          {/* Additional Requirements */}
          <div>
            <label className="block text-xs font-medium text-ink mb-1.5">
              Special requests or note <span className="text-muted">(optional)</span>
            </label>
            <textarea
              rows={2}
              placeholder="e.g. Ground floor preference for senior citizens, early morning temple darshan arrival, parking space requirement..."
              value={formData.additionalRequirements}
              onChange={(e) => setFormData({ ...formData, additionalRequirements: e.target.value })}
              className="w-full px-3 py-2 text-sm bg-paper border border-rule focus:border-accent rounded-xl focus:outline-none text-ink"
            />
          </div>

          {/* Submit Action */}
          <div className="pt-3 border-t border-rule flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="text-xs text-muted text-left">
              Official WhatsApp: <strong>{HOTEL_INFO.contacts.primaryWhatsApp}</strong>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                type="button"
                onClick={onClose}
                className="w-1/2 sm:w-auto px-4 py-2.5 text-xs font-medium text-ink hover:bg-paper-2 border border-rule rounded-xl transition-colors cursor-pointer"
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-1/2 sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-medium text-white bg-whatsapp hover:opacity-90 rounded-xl transition-opacity shadow-subtle active:scale-[0.98] cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{isSubmitting ? 'Opening WhatsApp...' : 'Send on WhatsApp'}</span>
              </button>
            </div>
          </div>

        </form>

      </div>
    </div>
  );
};
