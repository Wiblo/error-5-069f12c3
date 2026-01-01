import { Zap, Sparkles, Target, Heart } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface Service {
  id: string
  slug: string
  name: string
  description: string
  duration: string
  price: string
  image: string
  imageAlt: string
  icon: LucideIcon
  benefits?: string[]
  featured?: boolean
  // Full treatment details for dedicated pages
  shortDescription?: string
  fullDescription?: string
  idealFor?: string[]
}

/**
 * All services offered by the practice
 * Update this array to add/modify services shown throughout the site
 */
export const services: Service[] = [
  {
    id: 'new-year-reset',
    slug: 'new-year-reset',
    name: '2025 New Year Reset',
    description:
      'Kickstart your New Year wellness journey with a comprehensive spinal assessment, personalized resolution planning, and your first alignment adjustment to set you up for success in 2025.',
    duration: '60 min',
    price: '$199',
    image: 'https://images.unsplash.com/photo-1467810563316-b5476525c0f9?w=800&q=80',
    imageAlt: 'Fireworks lighting up the night sky celebrating New Year',
    icon: Sparkles,
    benefits: [
      'Complete spinal and postural assessment',
      'Personalized 2025 wellness roadmap',
      'First chiropractic adjustment',
      'Resolution success strategies',
      'Complimentary wellness journal',
    ],
    featured: true,
    shortDescription:
      'Start 2025 aligned, pain-free, and ready to achieve your wellness resolutions',
    fullDescription:
      'The New Year Reset is designed to help you start 2025 with optimal health and alignment. This comprehensive session includes a thorough spinal assessment, postural analysis, and discussion of your wellness goals for the year ahead.\n\nWe create a personalized wellness roadmap tailored to your New Year resolutions, whether that is living pain-free, improving athletic performance, or simply feeling your best. Your first adjustment is included, setting the foundation for a healthy, aligned 2025.',
    idealFor: [
      'New Year resolution seekers',
      'First-time chiropractic patients',
      'Those with chronic pain',
      'Athletes starting training programs',
      'Anyone seeking preventative care',
      'Wellness-focused individuals',
    ],
  },
  {
    id: 'resolution-maintenance',
    slug: 'resolution-maintenance',
    name: 'Resolution Maintenance Care',
    description:
      'Stay committed to your 2025 wellness goals with ongoing adjustments, progress tracking, and accountability support to ensure you achieve lasting results throughout the year.',
    duration: '30 min',
    price: '$129',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80',
    imageAlt: 'Sparkler creating light trails in the dark',
    icon: Target,
    benefits: [
      'Progress evaluation and tracking',
      'Targeted spinal adjustments',
      'Resolution accountability check-ins',
      'Therapeutic interventions',
      'Home care and exercise guidance',
    ],
    featured: true,
    shortDescription:
      'Ongoing support to maintain momentum and achieve your 2025 wellness resolutions',
    fullDescription:
      'Resolution Maintenance Care keeps you on track with your health goals throughout 2025. Each session includes progress assessment, targeted adjustments, and accountability support to ensure you stay committed to your wellness journey.\n\nWe monitor your improvements, adjust your care plan as needed, and provide guidance on exercises and lifestyle modifications. This ongoing support helps transform your New Year resolutions into lasting healthy habits that carry you through the entire year.',
    idealFor: [
      'Ongoing wellness maintenance',
      'Resolution progress tracking',
      'Chronic pain management',
      'Athletic performance optimization',
      'Stress and tension relief',
      'Long-term health investment',
    ],
  },
  {
    id: 'champagne-adjustment',
    slug: 'champagne-adjustment',
    name: 'Champagne Adjustment Special',
    description:
      'Celebrate your commitment to wellness with our premium adjustment experience. Pop into 2025 with perfect alignment and a celebratory atmosphere.',
    duration: '45 min',
    price: '$159',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&q=80',
    imageAlt: 'Champagne bottle with golden sparkles and confetti',
    icon: Zap,
    benefits: [
      'Premium adjustment session',
      'Relaxation and stress relief techniques',
      'Celebratory wellness experience',
      'Complimentary wellness consultation',
      'Take-home celebration kit',
    ],
    featured: true,
    shortDescription:
      'A premium wellness experience to toast your health and celebrate new beginnings',
    fullDescription:
      'The Champagne Adjustment Special is our most celebratory wellness service, designed to help you ring in the New Year with style and optimal health. This premium session combines expert chiropractic care with a luxurious, festive atmosphere.\n\nEnjoy a thorough adjustment in our specially decorated treatment room, complete with calming ambiance and celebration-themed wellness consultation. Perfect for treating yourself or gifting to someone special as they embark on their 2025 wellness journey.',
    idealFor: [
      'Special occasion wellness',
      'Gift for loved ones',
      'Stress relief seekers',
      'Premium care enthusiasts',
      'New Year celebration',
      'Self-care advocates',
    ],
  },
  {
    id: 'wellness-transformation',
    slug: 'wellness-transformation',
    name: 'Total Wellness Transformation Package',
    description:
      'A comprehensive 12-week program designed to transform your health from the inside out. Includes weekly adjustments, personalized exercise plans, nutritional guidance, and lifestyle coaching to help you achieve lasting wellness results.',
    duration: '12 weeks',
    price: '$1,499',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80',
    imageAlt: 'Person stretching outdoors in sunrise showing wellness and vitality',
    icon: Heart,
    benefits: [
      '12 weekly chiropractic adjustment sessions',
      'Personalized exercise and stretching program',
      'Nutritional consultation and meal planning',
      'Monthly progress assessments',
      'Lifestyle coaching and habit formation support',
      'Access to online wellness resources',
      'Priority scheduling throughout the program',
    ],
    featured: true,
    shortDescription:
      'Transform your life with our comprehensive 12-week wellness program',
    fullDescription:
      'The Total Wellness Transformation Package is our most comprehensive offering, designed for those ready to commit to lasting change. This 12-week program goes beyond simple adjustments to address every aspect of your health and wellness.\n\nYou will receive weekly chiropractic care tailored to your specific needs, along with personalized exercise programs, nutritional guidance, and one-on-one lifestyle coaching. We track your progress monthly and adjust your plan to ensure you are achieving your goals. This holistic approach addresses not just your symptoms, but the root causes of discomfort and limitation, helping you build sustainable healthy habits that last long after the program ends.',
    idealFor: [
      'Chronic pain sufferers seeking lasting relief',
      'Those committed to significant lifestyle change',
      'Athletes wanting performance optimization',
      'Individuals with complex health challenges',
      'Anyone seeking comprehensive wellness support',
      'People ready to invest in their long-term health',
    ],
  },
]

/**
 * Get all services
 */
export function getAllServices(): Service[] {
  return services
}

/**
 * Get featured services only
 */
export function getFeaturedServices(): Service[] {
  return services.filter((service) => service.featured)
}

/**
 * Get a single service by slug
 */
export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug)
}

/**
 * Get a single service by ID
 */
export function getServiceById(id: string): Service | undefined {
  return services.find((service) => service.id === id)
}
