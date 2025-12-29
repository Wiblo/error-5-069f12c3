export interface CTAContent {
  title: string
  description: string
  ctaText: string
  ctaUrl: string
  backgroundImage: string
  backgroundImageAlt: string
}

/**
 * CTA (Call-to-Action) section content
 * Update this to modify the CTA section shown on the homepage
 */
export const ctaContent: CTAContent = {
  title: 'Make 2025 Your Year of Wellness',
  description:
    "Don't let another resolution fade away. Book your New Year Reset today and start 2025 aligned, pain-free, and ready to achieve everything on your list. Limited spots available for January!",
  ctaText: 'Book Your New Year Reset',
  ctaUrl: 'https://resolvechiro.com/booking',
  backgroundImage: 'https://images.unsplash.com/photo-1482575832494-771f74bf6857?w=1600&q=80',
  backgroundImageAlt: 'Spectacular fireworks display celebrating New Year',
}
