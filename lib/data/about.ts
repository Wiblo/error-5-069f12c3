export interface AboutPreview {
  title: string
  description: string
  image: string
  imageAlt: string
}

export interface AboutFull {
  title: string
  paragraphs: string[]
  image: string
  imageAlt: string
}

/**
 * About section preview for homepage
 * Brief introduction with link to full about page
 */
export const aboutPreview: AboutPreview = {
  title: 'Your 2025 Wellness Partner',
  description:
    "At Resolve Chiropractic & Wellness, we believe the New Year is the perfect time to reset your health and align your body for success. Our expert team specializes in helping you transform wellness resolutions into lasting results through personalized chiropractic care, accountability support, and proven strategies that actually work.",
  image: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=800&q=80',
  imageAlt: 'Modern chiropractic clinic with New Year celebration atmosphere',
}

/**
 * Full about content for dedicated about page
 * Comprehensive information about the practice
 */
export const aboutFull: AboutFull = {
  title: 'Making 2025 Your Healthiest Year Yet',
  paragraphs: [
    "Welcome to Resolve Chiropractic & Wellness, where we specialize in turning New Year wellness resolutions into year-round healthy habits. We understand that January brings renewed motivation, and we're here to channel that energy into real, lasting results for your health and wellbeing.",
    'Our approach combines expert chiropractic care with resolution accountability support, personalized wellness planning, and ongoing motivation to help you achieve your 2025 health goals. Whether you want to live pain-free, improve athletic performance, reduce stress, or simply feel your best, we create customized care plans that align perfectly with your New Year resolutions.',
    "What sets us apart is our commitment to your success beyond the initial adjustment. Our Resolution Maintenance Care program includes progress tracking, accountability check-ins, and adaptive treatment plans that evolve with you throughout the year. We celebrate your wins, support you through challenges, and ensure you don't become another abandoned resolution statistic.",
    'At Resolve Chiropractic & Wellness, we believe optimal health is the foundation for achieving all your other goals. When your body is aligned and pain-free, you have the energy and confidence to pursue everything else on your 2025 list. Let us help you make this your healthiest, most successful year yet.',
  ],
  image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80',
  imageAlt: 'Professional chiropractor with patient planning wellness goals',
}
