# Kharari Inn, Ayodhya Dham
### Premium Boutique Hotel Website — Design, Development & Optimization

Official production-ready website for **Kharari Inn** (also known as *Kharari Guest House*), situated in **Ayodhya Dham, Uttar Pradesh, India**.

Designed with an art-directed, editorial Indian hospitality aesthetic inspired by independent boutique hotels. Built on Vite, React 18, TypeScript, and Tailwind CSS with genuine property photography, frictionless WhatsApp booking integration, responsive mobile-first architecture, and comprehensive technical SEO.

---

## 1. Verified Brand & Business Information

- **Official Property Name:** Kharari Inn
- **Alternative Property Name:** Kharari Guest House
- **Property Type:** Boutique Hotel / Guest House
- **Location:** Ayodhya Dham, Uttar Pradesh, India
- **Full Address:** House No. 8/1/13, Bangai Mandir, Vasudev Ghat, Chhoti Chhawni Road, Near Kathiya Mandir, Nayaghat Road, Karsewakpuram, Ayodhya Dham, Ayodhya, Uttar Pradesh – 224123, India
- **Official Website:** [https://kharariinn.in/](https://kharariinn.in/)
- **Official Email:** `kharariayodhya@gmail.com`
- **Primary WhatsApp Booking Number:** `+91 91407 45522` (Direct WA: `https://wa.me/919140745522`)
- **Alternative Calling Lines:**
  - `+91 70540 66574` (Front Desk / Enquiries)
  - `+91 80043 13467` (Assistance)
  - `+91 84605 02494` (Guest Support)

---

## 2. Design Vision & Art Direction

The visual language avoids generic AI templates, flash animations, and dark luxury tropes in favor of warm, tranquil, and dignified Indian hospitality:

- **Warm Ivory (`#FAF8F3`):** Primary tranquil background
- **Soft Sand (`#F0E9DE`):** Secondary background and subtle card accents
- **Deep Charcoal Brown (`#29251F`):** High-readability primary text
- **Muted Warm Grey (`#777168`):** Secondary details and labels
- **Antique Gold (`#B78B50`):** Saffron/gold sacred accent
- **Burgundy Velvet (`#7A2234`):** Color matched to the hotel's actual tufted headboards and bed runners
- **Soft Beige (`#E5DED2`):** Thin, crisp architectural borders
- **Typography:**
  - Headings: *Cormorant Garamond* (editorial serif)
  - Body & UI: *Plus Jakarta Sans* / *Inter* (clean, legible sans-serif)

---

## 3. Implemented Components & Features

1. **Header (`Header.tsx`):**
   - Typographic wordmark referencing the actual exterior property signage
   - Smooth transparent-to-solid transition on scroll
   - Working in-page anchor navigation (Home, About, Rooms, Amenities, Explore, Gallery, Policies, Contact)
   - Click-to-call phone pill and "Book Stay" WhatsApp action
   - Mobile responsive drawer with focus trap and auto-closing links

2. **Hero Section (`HeroSection.tsx`):**
   - Authentic property exterior photograph showcasing the white facade, arched balcony, and dedicated parking
   - Verified distance badges to sacred landmarks
   - Primary "Book Your Stay" CTA and secondary "Explore Our Rooms" anchor

3. **About Section (`AboutSection.tsx`):**
   - Editorial introduction titled *"A Welcoming Stay in the Heart of Ayodhya"*
   - Authentic photograph of the sunlit upper corridor/terrace with potted palms
   - Grounded, honest copy highlighting convenience for pilgrims, elder travellers, and families

4. **Room Showcase (`RoomSection.tsx`):**
   - **Double Bed Room:** Air conditioning, plush king/double bed, attached bathroom, cream sofa seating, flat-screen TV, electric kettle
   - **Triple Bed Room:** Suitable for 3 guests with king bed + single bed setup, attached private bathroom, wardrobe storage, AC, TV, kettle
   - **Family / Quadruple Room:** Generous accommodation for pilgrim families and larger groups
   - Single-click **"Enquire on WhatsApp"** button pre-selecting the exact room category
   - **"Stay Form"** button opening the date selection modal

5. **WhatsApp Booking System & Modal (`BookingModal.tsx`):**
   - Compliant with Section 7 requirements
   - Fields: Guest Name, Check-in Date (min today), Check-out Date (> check-in), Adults (>= 1), Children (optional), Preferred Room, Contact Number (optional), Special Requests (optional)
   - Real-time validation preventing past dates or invalid configurations
   - Formats the exact required template:
     ```text
     Namaste Kharari Inn Team,

     I would like to enquire about a booking.

     Guest Name: [Guest Name]
     Check-in: [Check-in Date]
     Check-out: [Check-out Date]
     Adults: [Number of Adults]
     Children: [Number of Children]
     Preferred Room: [Room Type]
     Contact Number: [Guest Contact Number]
     Additional Requirements: [Additional Requirements]

     Please confirm room availability, the applicable tariff, and the total estimated cost.

     Thank you.
     ```
   - Automatically opens WhatsApp with URL encoding via `https://wa.me/919140745522?text=...`

6. **Amenities Section (`AmenitiesSection.tsx`):**
   - Restrained line icons for confirmed amenities: Split AC, High-Speed Wi-Fi, Flat-Screen TV, Electric Kettle & Tea Setup, Private Attached Bathroom, Silent Cummins Generator Backup (visible in exterior photo), On-Site Parking, Daily Housekeeping, Reception Assistance, Luggage Storage, Darshan Guidance, Station Transfers (on request)

7. **Explore Ayodhya Dham (`ExploreAyodhyaSection.tsx`):**
   - Verified approximate distances:
     - Shri Ram Janmabhoomi Mandir: ~1.8–2.0 km (5–8 mins by E-Rickshaw)
     - Hanumangarhi Mandir: ~1.0–1.5 km (4–6 mins by E-Rickshaw)
     - Saryu Ghat / Naya Ghat: ~1.0–1.5 km (Morning Snan & Evening Aarti)
     - Ayodhya Dham Junction: ~2.0–3.0 km
     - Faizabad Railway Station (Ayodhya Cantt): ~8.5 km
     - Maharishi Valmiki International Airport: ~8.6 km
   - "Get Directions" link to Google Maps with exact address

8. **Gallery & Lightbox (`GallerySection.tsx`, `LightboxModal.tsx`):**
   - Asymmetric editorial grid of all 4 authentic photographs
   - Interactive Lightbox with keyboard support (Escape to close, Left/Right arrows to navigate) and touch swipe controls
   - Descriptive captions explaining each real area of the property

9. **Guest Policies (`GuestPoliciesSection.tsx`):**
   - Check-in from 1:00 PM / Check-out until 11:00 AM
   - Government ID requirement (primary guest 18+)
   - Respectful transparency regarding couples policy, outside food, pet restrictions, and peaceful spiritual atmosphere

10. **Contact Section (`ContactSection.tsx`):**
    - Address, direct click-to-call links for all 4 phone numbers, click-to-WhatsApp, mailto email link, and transit advice

11. **Footer (`Footer.tsx`):**
    - Typographic brand wordmark, summary, navigation links, copyright dynamically updated (`© 2026 Kharari Inn`)

12. **WhatsApp Floating Button & Mobile Bottom Bar (`WhatsAppFloatingButton.tsx`, `MobileStickyBookingBar.tsx`):**
    - Floating action button on lower right with zero overlap on mobile
    - Sticky bottom bar on mobile viewports for quick calling and WhatsApp booking

---

## 4. Technical SEO & Schema.org Verification

- **Page Title:** `Kharari Inn, Ayodhya Dham | Comfortable Hotel Stay`
- **Meta Description:** `Discover Kharari Inn in Ayodhya Dham, Uttar Pradesh. Explore room options, guest amenities, location details and convenient WhatsApp booking enquiries.`
- **Canonical URL:** `https://kharariinn.in/`
- **OpenGraph & Twitter Cards:** Configured with real exterior imagery and descriptions
- **Structured Data:** Full `schema.org/Hotel` JSON-LD including exact coordinates, address, checkin/checkout times, amenities, and contact points
- **Search Engine Directives:** Clean `robots.txt` referencing `sitemap.xml` with all core anchors

---

## 5. Local Development Commands

To run and test the project locally:

```bash
# 1. Install dependencies (if not already installed)
npm install

# 2. Start Vite development server
npm run dev

# 3. Build for production (TypeScript compile + Vite build)
npm run build

# 4. Preview production build locally
npm run preview
```

---

## 6. Vercel Deployment Instructions

The project is structured for zero-configuration deployment on **Vercel**:

### Option A: Via Vercel CLI
```bash
# In project root:
npm install -g vercel
vercel
```
Accept the defaults (Root Directory: `./`, Build Command: `npm run build`, Output Directory: `dist`).

### Option B: Via GitHub / GitLab / Bitbucket
1. Initialize git and commit:
   ```bash
   git init
   git add .
   git commit -m "feat: complete Kharari Inn boutique hotel website"
   ```
2. Push to your repository.
3. Import the repository in the Vercel Dashboard.
4. Vercel will automatically detect `vercel.json` and deploy.

---

## 7. Quality Assurance & Verification Summary

The project includes an automated test verification script (`test/verify.mjs`):
- **Total Tests Executed:** 42
- **Passed:** 42 / 42 (100%)
- Verified authentic image integrity, SEO tags, JSON-LD schema, URL encoding, WhatsApp message format, and component styling.
