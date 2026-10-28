import { Room, Amenity, Landmark, GalleryImage } from '../types';

export const HOTEL_INFO = {
  name: 'Kharari Inn',
  altName: 'Kharari Guest House',
  tagline: 'A Comfortable Stay in Ayodhya Dham',
  subtitle: 'Your welcoming retreat in the sacred heart of Ayodhya Dham',
  address: {
    line1: 'House No. 8/1/13, Bangai Mandir, Vasudev Ghat, Chhoti Chhawni Road',
    line2: 'Near Kathiya Mandir, Nayaghat Road, Karsewakpuram',
    city: 'Ayodhya Dham, Ayodhya',
    state: 'Uttar Pradesh',
    pincode: '224123',
    country: 'India',
    full: 'House No. 8/1/13, Bangai Mandir, Vasudev Ghat, Chhoti Chhawni Road, Near Kathiya Mandir, Nayaghat Road, Karsewakpuram, Ayodhya Dham, Ayodhya, Uttar Pradesh – 224123, India.'
  },
  contacts: {
    primaryWhatsApp: '+91 91407 45522',
    primaryWhatsAppRaw: '919140745522',
    alternativePhones: [
      { number: '+91 70540 66574', raw: '917054066574', label: 'Guest Enquiries' },
      { number: '+91 80043 13467', raw: '918004313467', label: 'Assistance' },
      { number: '+91 84605 02494', raw: '918460502494', label: 'Front Desk' },
    ],
    email: 'kharariayodhya@gmail.com',
    website: 'https://kharariinn.in/',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=House+No+8/1/13+Bangai+Mandir+Vasudev+Ghat+Chhoti+Chhawni+Road+Nayaghat+Road+Ayodhya+Dham+224123'
  },
  timings: {
    checkIn: '1:00 PM',
    checkOut: '11:00 AM'
  }
};

export const ROOMS: Room[] = [
  {
    id: 'double-bed',
    name: 'Double Bed Room',
    tagline: 'Ideal for couples, solo pilgrims, and business visitors',
    description: 'A well-appointed, peaceful room featuring a plush king/double bed with rich burgundy velvet accents, private attached bathroom, quiet split air conditioning, comfortable sofa seating, flat-screen TV, and an electric kettle with tea/coffee amenities.',
    capacity: '2 Guests',
    bedConfig: '1 King / Double Bed',
    features: [
      'Split Air Conditioning',
      'Private Attached Bathroom with Hot Water',
      'Plush Burgundy Velvet Headboard & Linen',
      'Comfortable Cream Sofa Seating',
      'Flat-Screen Television',
      'Electric Kettle & Tea Amenities',
      'Dressing / Work Shelf with Mirror',
      'Daily Housekeeping'
    ],
    image: '/images/kharari-inn-double-room.jpg',
    altText: 'Kharari Inn Double Bed Room with burgundy headboard, clean bedding, sofa and television'
  },
  {
    id: 'triple-bed',
    name: 'Triple Bed Room',
    tagline: 'Generous comfort for small families and pilgrim groups',
    description: 'Thoughtfully designed for three guests, offering a combination of a king bed and an additional single bed. Furnished with comfortable upholstery, dedicated wardrobe storage, split AC, flat-screen entertainment, and attached private washroom.',
    capacity: '3 Guests',
    bedConfig: '1 King Bed + 1 Single Bed',
    features: [
      'Split Air Conditioning',
      'Flexible Bedding for 3 Occupants',
      'Private Attached Bathroom',
      'Wardrobe & Luggage Storage Space',
      'Electric Kettle & Complimentary Water Bottles',
      'Wall-Mounted Television',
      'Cream Loveseat Seating Area',
      'Daily Linen & Room Service'
    ],
    image: '/images/kharari-inn-triple-room.jpg',
    altText: 'Kharari Inn Triple Bed Room showing double and single bed arrangement with burgundy runners'
  },
  {
    id: 'family-quad',
    name: 'Family / Quadruple Room',
    tagline: 'Spacious accommodation for pilgrim families & groups',
    description: 'Designed specifically for families travelling together to Ayodhya Dham. Features expansive multi-bed arrangements, generous floor area, attached bathroom facilities, individual climate control, and space for luggage and devotional relaxation.',
    capacity: '4 Guests (or Family with Children)',
    bedConfig: 'Multiple Beds (Subject to property confirmation)',
    features: [
      'Spacious Multi-Bed Layout',
      'Split Air Conditioning',
      'Attached Bathroom with Modern Fittings',
      'Seating Area for Family Conversations',
      'In-Room Electric Kettle for Warm Beverages',
      'Flat-Screen Television for Leisure',
      'Cummins Silent Generator Power Backup',
      'Priority Darshan & Local Guidance'
    ],
    image: '/images/kharari-inn-triple-room.jpg',
    altText: 'Kharari Inn Family and Quadruple Room accommodation in Ayodhya Dham'
  }
];

export const AMENITIES: Amenity[] = [
  {
    id: 'ac',
    name: 'Air Conditioning',
    description: 'Modern split air conditioners installed in rooms for year-round climate comfort.',
    iconName: 'Wind',
    category: 'room'
  },
  {
    id: 'wifi',
    name: 'Complimentary Wi-Fi',
    description: 'High-speed wireless internet access across all rooms and common guest areas.',
    iconName: 'Wifi',
    category: 'property'
  },
  {
    id: 'tv',
    name: 'Flat-Screen Television',
    description: 'Wall-mounted flat-screen TV in every room for family news and entertainment.',
    iconName: 'Tv',
    category: 'room'
  },
  {
    id: 'kettle',
    name: 'Electric Kettle & Tea Setup',
    description: 'In-room electric kettle with tea and coffee facilities for a refreshing start.',
    iconName: 'Coffee',
    category: 'room'
  },
  {
    id: 'bathroom',
    name: 'Private Attached Bathroom',
    description: 'Clean attached bathrooms with modern sanitaryware, mirrors, and hot water supply.',
    iconName: 'Bath',
    category: 'room'
  },
  {
    id: 'power-backup',
    name: 'Silent Power Backup',
    description: 'Heavy-duty Cummins soundproof generator on site ensuring uninterrupted power.',
    iconName: 'Zap',
    category: 'property'
  },
  {
    id: 'parking',
    name: 'On-Site Vehicle Parking',
    description: 'Spacious, secure open-air parking directly in front of the hotel entrance.',
    iconName: 'Car',
    category: 'property'
  },
  {
    id: 'housekeeping',
    name: 'Daily Housekeeping',
    description: 'Attentive daily cleaning, fresh linens, and tidy room maintenance.',
    iconName: 'Sparkles',
    category: 'services'
  },
  {
    id: 'reception',
    name: 'Reception & Assistance',
    description: 'Warm, hospitable front desk assistance ready to support your stay requirements.',
    iconName: 'UserCheck',
    category: 'services'
  },
  {
    id: 'luggage',
    name: 'Luggage Storage',
    description: 'Secure luggage holding facility if you arrive early or explore Ayodhya before departure.',
    iconName: 'Luggage',
    category: 'services'
  },
  {
    id: 'darshan-assistance',
    name: 'Darshan & Local Guidance',
    description: 'Helpful recommendations on temple timings, aarti schedules, and e-rickshaw routes.',
    iconName: 'Compass',
    category: 'services'
  },
  {
    id: 'transfers',
    name: 'Station / Airport Transfers',
    description: 'Convenient pickup and drop arrangements (available upon advance request & tariff).',
    iconName: 'Navigation',
    category: 'services'
  }
];

export const NEARBY_LANDMARKS: Landmark[] = [
  {
    name: 'Shri Ram Janmabhoomi Mandir',
    hindiName: 'श्री राम जन्मभूमि मंदिर',
    distance: 'Approx. 1.8 – 2.0 km',
    approxTravelTime: '5–8 mins by E-Rickshaw',
    description: 'The monumental sacred temple commemorating the birthplace of Bhagwan Shri Ram, featuring world-renowned stone architecture and spiritual sanctum.',
    significance: 'Primary pilgrim destination in Ayodhya'
  },
  {
    name: 'Hanumangarhi Mandir',
    hindiName: 'हनुमान गढ़ी',
    distance: 'Approx. 1.0 – 1.5 km',
    approxTravelTime: '4–6 mins by E-Rickshaw',
    description: 'A historic 10th-century fortress-temple dedicated to Lord Hanuman, traditionally visited by devotees before proceeding to the Ram Mandir.',
    significance: 'Spiritual protector of the holy city'
  },
  {
    name: 'Saryu Ghat / Naya Ghat',
    hindiName: 'सरयू घाट / नया घाट',
    distance: 'Approx. 1.0 – 1.5 km',
    approxTravelTime: '4–5 mins (Walking / E-Rickshaw)',
    description: 'Holy bathing ghats along the sacred Saryu river, where thousands gather for peaceful morning snan and the mesmerizing evening Saryu Maha Aarti.',
    significance: 'Evening river aarti & sacred snan'
  },
  {
    name: 'Ayodhya Dham Junction & Bus Stand',
    hindiName: 'अयोध्या धाम जंक्शन',
    distance: 'Approx. 2.0 – 3.0 km',
    approxTravelTime: '8–12 mins by Auto / Taxi',
    description: 'The newly redeveloped temple-inspired railway terminal and interstate bus station connecting Ayodhya to major Indian cities.',
    significance: 'Primary transport hub for visitors'
  },
  {
    name: 'Faizabad Railway Station (Ayodhya Cantt)',
    hindiName: 'अयोध्या कैंट रेलवे स्टेशन',
    distance: 'Approx. 8.5 km',
    approxTravelTime: '20–25 mins by Cab / Auto',
    description: 'Major junction on the Northern Railway network offering express connections to Delhi, Lucknow, Varanasi, and Mumbai.',
    significance: 'Express railway access'
  },
  {
    name: 'Maharishi Valmiki International Airport',
    hindiName: 'महर्षि वाल्मीकि अंतर्राष्ट्रीय हवाई अड्डा',
    distance: 'Approx. 8.6 km',
    approxTravelTime: '20–25 mins by Taxi',
    description: 'Modern airport providing direct domestic flights to New Delhi, Mumbai, Ahmedabad, Bengaluru, and other major hubs.',
    significance: 'Direct air connectivity'
  }
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 'exterior',
    title: 'Property Facade & Welcome Entrance',
    category: 'Exterior',
    image: '/images/kharari-inn-exterior.jpg',
    alt: 'Exterior view of Kharari Inn showing white architectural facade, traditional arches, and secure parking area in Ayodhya Dham',
    description: 'The distinctive white and warm-wood facade of Kharari Inn, featuring welcoming archways, comfortable access, and dedicated front parking.'
  },
  {
    id: 'double-room',
    title: 'Double Bed Room Comfort',
    category: 'Rooms',
    image: '/images/kharari-inn-double-room.jpg',
    alt: 'Kharari Inn spacious Double Bed Room with plush tufted burgundy headboard, clean linen, sofa seating, and AC',
    description: 'Generous private double bedroom with elegant burgundy velvet accents, comfortable lounge seating, attached bath, and quiet split air conditioning.'
  },
  {
    id: 'triple-room',
    title: 'Triple / Family Bed Arrangement',
    category: 'Rooms',
    image: '/images/kharari-inn-triple-room.jpg',
    alt: 'Kharari Inn Triple Bed Room showing double and single bed configuration with wardrobe and sofa',
    description: 'Flexible multi-bed room ideal for pilgrim families and small groups, equipped with individual climate control and thoughtful amenities.'
  },
  {
    id: 'corridor-terrace',
    title: 'Lush Balcony Corridor & Natural Light',
    category: 'Property',
    image: '/images/kharari-inn-corridor-terrace.jpg',
    alt: 'Bright upper corridor and terrace at Kharari Inn lined with leafy potted plants, polished wood ceilings, and large windows',
    description: 'Breezy first-floor passage and terrace adorned with verdant potted plants, polished wood ceiling soffits, and peaceful sunlight.'
  }
];

export const GUEST_POLICIES = [
  {
    title: 'Check-In & Check-Out',
    items: [
      'Standard Check-in time is from 1:00 PM onwards.',
      'Standard Check-out time is until 11:00 AM.',
      'Early check-in or late check-out is subject to room availability and may incur nominal charges, confirmed with the hotel desk.'
    ]
  },
  {
    title: 'Guest Identification',
    items: [
      'In compliance with government safety regulations, all adult staying guests must present valid government-issued photo ID upon check-in (Aadhaar Card, Passport, Voter ID, or Driving License).',
      'The primary guest registering the booking must be at least 18 years of age.',
      'PAN cards are not accepted as valid proof of address as per local guidelines.'
    ]
  },
  {
    title: 'Property Guidelines',
    items: [
      'Couples Policy: In accordance with property guidelines, unmarried couples are kindly not accommodated. Please verify current policy with front desk.',
      'Food Policy: Outside food is not permitted inside guest rooms to maintain hygiene and property cleanliness.',
      'Pets Policy: For the comfort and serenity of all staying guests, pets are strictly not permitted.',
      'Peaceful Atmosphere: Kharari Inn maintains a peaceful, family-friendly spiritual ambiance. Disruptive parties, loud gatherings, and illegal substances are strictly prohibited.'
    ]
  }
];
