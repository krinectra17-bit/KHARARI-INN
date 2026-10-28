export interface Room {
  id: string;
  name: string;
  tagline: string;
  description: string;
  capacity: string;
  bedConfig: string;
  features: string[];
  image: string;
  altText: string;
}

export interface Amenity {
  id: string;
  name: string;
  description: string;
  iconName: string;
  category: 'room' | 'property' | 'services';
}

export interface Landmark {
  name: string;
  hindiName?: string;
  distance: string;
  approxTravelTime: string;
  description: string;
  significance: string;
}

export interface BookingFormData {
  guestName: string;
  checkInDate: string;
  checkOutDate: string;
  adults: number;
  children: number;
  roomType: string;
  contactNumber: string;
  additionalRequirements: string;
}

export interface GalleryImage {
  id: string;
  title: string;
  category: string;
  image: string;
  alt: string;
  description: string;
}
