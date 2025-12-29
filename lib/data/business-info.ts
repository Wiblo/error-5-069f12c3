export const businessInfo = {
  // Core business details
  name: "Resolve Chiropractic & Wellness",
  tagline: "Start Your New Year Pain-Free and Aligned",
  logo: "/logo.png",

  // Contact information
  phone: "(555) 2025-NEW",
  phoneSecondary: "(555) 876-5432", // Optional second phone number
  email: "newyear@resolvechiro.com",

  // Location
  address: {
    street: "2025 Resolution Boulevard",
    area: "Suite 100", // Optional (e.g., "Building Name" or "Suite 100")
    city: "New Haven",
    state: "CT",
    zip: "06510",
    country: "US",
  },

  // Optional: Coordinates for map and LocalBusiness schema
  geo: {
    latitude: 41.3083,
    longitude: -72.9279,
  },

  // Business hours
  hours: {
    monday: "8:00am - 7:00pm",
    tuesday: "8:00am - 7:00pm",
    wednesday: "8:00am - 7:00pm",
    thursday: "8:00am - 7:00pm",
    friday: "8:00am - 6:00pm",
    saturday: "9:00am - 3:00pm",
    sunday: "Closed",
  },

  // Social media profiles
  social: {
    facebook: "https://facebook.com/resolvechiro",
    instagram: "https://instagram.com/resolvechiro",
    whatsapp: "https://wa.me/15552025639", // WhatsApp link with number
    // twitter: "https://twitter.com/yourpage",
    // linkedin: "https://linkedin.com/company/yourpage",
  },

  // Site metadata
  url: "https://resolvechiro.com",
  description: "Ring in the New Year with optimal health and alignment. Expert chiropractic care to help you achieve your 2025 wellness resolutions.",
  priceRange: "$$", // $, $$, $$$, or $$$$

  // Schema.org types for JSON-LD structured data
  // Customize based on your business type. Common combinations:
  // - Chiropractor: ['LocalBusiness', 'MedicalBusiness', 'HealthAndBeautyBusiness']
  // - Physical Therapist: ['LocalBusiness', 'MedicalBusiness', 'HealthAndBeautyBusiness']
  // - Massage Spa: ['LocalBusiness', 'HealthAndBeautyBusiness', 'DaySpa']
  // - General Wellness: ['LocalBusiness', 'HealthAndBeautyBusiness']
  // - Acupuncture: ['LocalBusiness', 'MedicalBusiness', 'HealthAndBeautyBusiness']
  schemaTypes: ['LocalBusiness', 'MedicalBusiness', 'HealthAndBeautyBusiness'] as const,

  // Booking/appointment URL
  bookingUrl: "https://resolvechiro.com/booking",

  // Google Maps configuration
  maps: {
    apiKey: "AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8",
    // Location name for Google Maps searches
    locationName: "Resolve Chiropractic & Wellness",
  },
}

// Helper function to get formatted address for Google Maps
export function getGoogleMapsUrl() {
  const { street, city, state, zip } = businessInfo.address
  const query = encodeURIComponent(`${street}, ${city}, ${state} ${zip}`)
  return `https://maps.google.com/?q=${query}`
}

// Helper function to get tel: link
export function getPhoneLink(phoneNumber: string = businessInfo.phone) {
  return `tel:${phoneNumber.replace(/[^0-9+]/g, "")}`
}

// Helper function to get mailto: link
export function getEmailLink() {
  return `mailto:${businessInfo.email}`
}

// Helper function to get Google Maps embed URL
export function getGoogleMapsEmbedUrl() {
  const { street, city, state, zip } = businessInfo.address
  const { apiKey, locationName } = businessInfo.maps
  const query = encodeURIComponent(
    `${locationName},${street},${city},${state},${zip}`
  )
  return `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${query}&zoom=15`
}

// Helper function to get Google Maps directions URL
export function getGoogleMapsDirectionsUrl() {
  const { street, city, state, zip } = businessInfo.address
  const { locationName } = businessInfo.maps
  const destination = encodeURIComponent(
    `${locationName},${street},${city},${state},${zip}`
  )
  return `https://www.google.com/maps/dir/?api=1&destination=${destination}`
}
