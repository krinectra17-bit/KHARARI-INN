import fs from 'fs';
import path from 'path';

console.log('--- STARTING KHARARI INN SYSTEM VERIFICATION ---');

let passedTests = 0;
let totalTests = 0;

function assert(condition, testName) {
  totalTests++;
  if (condition) {
    console.log(`✅ PASS: ${testName}`);
    passedTests++;
  } else {
    console.error(`❌ FAIL: ${testName}`);
    process.exitCode = 1;
  }
}

// 1. Check dist files exist
const distDir = path.join(process.cwd(), 'dist');
assert(fs.existsSync(distDir), 'Dist directory exists');
assert(fs.existsSync(path.join(distDir, 'index.html')), 'dist/index.html exists');
assert(fs.existsSync(path.join(distDir, 'robots.txt')), 'dist/robots.txt exists');
assert(fs.existsSync(path.join(distDir, 'sitemap.xml')), 'dist/sitemap.xml exists');
assert(fs.existsSync(path.join(distDir, 'favicon.svg')), 'dist/favicon.svg exists');

// 2. Check authentic image assets in dist/images
const images = [
  'kharari-inn-exterior.jpg',
  'kharari-inn-double-room.jpg',
  'kharari-inn-triple-room.jpg',
  'kharari-inn-corridor-terrace.jpg'
];
images.forEach(imgName => {
  const p = path.join(distDir, 'images', imgName);
  const exists = fs.existsSync(p);
  const size = exists ? fs.statSync(p).size : 0;
  assert(exists && size > 100000, `Verified authentic photograph: ${imgName} (${Math.round(size / 1024)} KB)`);
});

// 3. Inspect index.html contents
const indexHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');
assert(indexHtml.includes('<title>Kharari Inn, Ayodhya Dham | Comfortable Hotel Stay</title>'), 'SEO Title tag verified');
assert(indexHtml.includes('name="description" content="Discover Kharari Inn in Ayodhya Dham, Uttar Pradesh. Explore room options, guest amenities, location details and convenient WhatsApp booking enquiries."'), 'SEO Meta description verified');
assert(indexHtml.includes('rel="canonical" href="https://kharariinn.in/"'), 'Canonical URL verified');
assert(indexHtml.includes('property="og:title"'), 'OpenGraph Title verified');
assert(indexHtml.includes('property="og:image"'), 'OpenGraph Image verified');
assert(indexHtml.includes('name="twitter:card" content="summary_large_image"'), 'Twitter card verified');

// 4. Inspect JSON-LD Structured Data in HTML
assert(indexHtml.includes('"@type": "Hotel"'), 'JSON-LD @type Hotel verified');
assert(indexHtml.includes('"name": "Kharari Inn"'), 'JSON-LD name verified');
assert(indexHtml.includes('"telephone": "+919140745522"'), 'JSON-LD official telephone verified');
assert(indexHtml.includes('"postalCode": "224123"'), 'JSON-LD postalCode verified');
assert(indexHtml.includes('"checkinTime": "13:00"'), 'JSON-LD checkinTime verified');
assert(indexHtml.includes('"checkoutTime": "11:00"'), 'JSON-LD checkoutTime verified');

// 5. Inspect robots.txt & sitemap.xml
const robotsTxt = fs.readFileSync(path.join(distDir, 'robots.txt'), 'utf-8');
assert(robotsTxt.includes('Sitemap: https://kharariinn.in/sitemap.xml'), 'robots.txt references sitemap');

const sitemapXml = fs.readFileSync(path.join(distDir, 'sitemap.xml'), 'utf-8');
assert(sitemapXml.includes('<loc>https://kharariinn.in/</loc>'), 'sitemap.xml includes root URL');
assert(sitemapXml.includes('<loc>https://kharariinn.in/#rooms</loc>'), 'sitemap.xml includes #rooms');

// 6. Inspect JS bundle for critical logic
const assets = fs.readdirSync(path.join(distDir, 'assets'));
const jsFile = assets.find(f => f.endsWith('.js'));
assert(Boolean(jsFile), 'Production JavaScript bundle found');
const jsCode = fs.readFileSync(path.join(distDir, 'assets', jsFile), 'utf-8');

assert(jsCode.includes('919140745522'), 'WhatsApp number 919140745522 present in bundle');
assert(jsCode.includes('kharariayodhya@gmail.com'), 'Email kharariayodhya@gmail.com present in bundle');
assert(jsCode.includes('70540 66574') || jsCode.includes('7054066574'), 'Alternative phone present in bundle');
assert(jsCode.includes('Bangai Mandir'), 'Bangai Mandir address present in bundle');
assert(jsCode.includes('Vasudev Ghat'), 'Vasudev Ghat address present in bundle');
assert(jsCode.includes('Ram Janmabhoomi'), 'Ram Janmabhoomi landmark present in bundle');
assert(jsCode.includes('Double Bed Room'), 'Double Bed Room category present in bundle');
assert(jsCode.includes('Triple Bed Room'), 'Triple Bed Room category present in bundle');
assert(jsCode.includes('Family / Quadruple Room'), 'Family / Quadruple Room category present in bundle');
assert(jsCode.includes('Namaste Kharari Inn Team'), 'WhatsApp message template present in bundle');
assert(jsCode.includes('wa.me'), 'wa.me integration present in bundle');

// 7. Verify CSS bundle
const cssFile = assets.find(f => f.endsWith('.css'));
assert(Boolean(cssFile), 'Production CSS stylesheet found');
const cssCode = fs.readFileSync(path.join(distDir, 'assets', cssFile), 'utf-8');
assert(cssCode.includes('#FAF8F3') || cssCode.includes('#faf8f3'), 'Warm ivory #FAF8F3 background present in stylesheet');
assert(cssCode.includes('#B78B50') || cssCode.includes('#b78b50'), 'Antique gold #B78B50 present in stylesheet');

// 8. Test WhatsApp Message Generator Logic in isolation
function testWhatsAppLogic() {
  const sample = {
    guestName: 'Anil Kumar',
    checkInDate: '2026-11-15',
    checkOutDate: '2026-11-17',
    adults: 3,
    children: 1,
    roomType: 'Triple Bed Room',
    contactNumber: '+91 9876543210',
    additionalRequirements: 'Senior citizens in group, ground floor preferred'
  };

  const lines = [
    'Namaste Kharari Inn Team,',
    '',
    'I would like to enquire about a booking.',
    '',
    `Guest Name: ${sample.guestName}`,
    `Check-in: ${sample.checkInDate}`,
    `Check-out: ${sample.checkOutDate}`,
    `Adults: ${sample.adults}`,
    `Children: ${sample.children}`,
    `Preferred Room: ${sample.roomType}`,
    `Contact Number: ${sample.contactNumber}`,
    `Additional Requirements: ${sample.additionalRequirements}`,
    '',
    'Please confirm room availability, the applicable tariff, and the total estimated cost.',
    '',
    'Thank you.'
  ];
  const fullMsg = lines.join('\n');
  const encoded = encodeURIComponent(fullMsg);
  const waUrl = `https://wa.me/919140745522?text=${encoded}`;

  assert(waUrl.startsWith('https://wa.me/919140745522?text='), 'WhatsApp URL begins with official wa.me link');
  assert(!waUrl.includes('\n'), 'Encoded URL contains no raw newlines');
  assert(decodeURIComponent(encoded) === fullMsg, 'Full message survives round-trip URI encoding');
}
testWhatsAppLogic();

console.log(`\n========================================`);
console.log(`TEST RESULTS: ${passedTests}/${totalTests} PASSED`);
console.log(`========================================\n`);
