import { BookingFormData } from '../types';
import { HOTEL_INFO } from '../data/hotelData';

/**
 * Formats a date string (YYYY-MM-DD) into an Indian localized readable format (e.g., 29 Oct 2026)
 */
export function formatDisplayDate(dateStr: string): string {
  if (!dateStr) return '';
  try {
    const [year, month, day] = dateStr.split('-').map(Number);
    const date = new Date(year, month - 1, day);
    return date.toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  } catch {
    return dateStr;
  }
}

/**
 * Builds the prefilled WhatsApp booking message strictly following the required template
 */
export function buildWhatsAppBookingMessage(data: BookingFormData): string {
  const checkInFormatted = formatDisplayDate(data.checkInDate);
  const checkOutFormatted = formatDisplayDate(data.checkOutDate);

  const lines: string[] = [
    'Namaste Kharari Inn Team,',
    '',
    'I would like to enquire about a booking.',
    '',
    `Guest Name: ${data.guestName.trim()}`,
    `Check-in: ${checkInFormatted || data.checkInDate}`,
    `Check-out: ${checkOutFormatted || data.checkOutDate}`,
    `Adults: ${data.adults}`
  ];

  if (data.children && data.children > 0) {
    lines.push(`Children: ${data.children}`);
  }

  lines.push(`Preferred Room: ${data.roomType}`);

  if (data.contactNumber && data.contactNumber.trim()) {
    lines.push(`Contact Number: ${data.contactNumber.trim()}`);
  }

  if (data.additionalRequirements && data.additionalRequirements.trim()) {
    lines.push(`Additional Requirements: ${data.additionalRequirements.trim()}`);
  }

  lines.push('');
  lines.push('Please confirm room availability, the applicable tariff, and the total estimated cost.');
  lines.push('');
  lines.push('Thank you.');

  return lines.join('\n');
}

/**
 * Builds a direct wa.me link with encoded text
 */
export function createWhatsAppUrl(message: string, phoneNumber: string = HOTEL_INFO.contacts.primaryWhatsAppRaw): string {
  const encodedText = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedText}`;
}

/**
 * Creates a quick room enquiry message for single-click room enquiry buttons
 */
export function buildQuickRoomEnquiryMessage(roomName: string): string {
  return `Hello Kharari Inn, I would like to enquire about the ${roomName}. Please share availability and the best available rate for my dates.`;
}

/**
 * Safely opens a WhatsApp URL in a new tab or triggers the app
 */
export function openWhatsApp(url: string): void {
  if (typeof window !== 'undefined') {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}
