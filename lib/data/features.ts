export interface FeatureBlock {
  id: string
  title: string
  description: string
  image: string
  imageAlt: string
  imagePosition: 'left' | 'right'
}

/**
 * Features section content
 * Highlighting key features, benefits, or unique aspects of the practice
 */
export const featureBlocks: FeatureBlock[] = [
  {
    id: 'feature-1',
    title: 'Resolution-Focused Care',
    description:
      "Most New Year resolutions fail by February. Not at Resolve. Our unique approach combines expert chiropractic adjustments with accountability support, progress tracking, and personalized wellness coaching to ensure your 2025 health goals become lasting habits, not abandoned dreams.",
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80',
    imageAlt: 'Person writing wellness goals in journal with determination',
    imagePosition: 'right',
  },
  {
    id: 'feature-2',
    title: 'Pain-Free Performance',
    description:
      'Whether your 2025 goal is running your first 5K, hitting the gym consistently, or simply playing with your kids without discomfort, optimal alignment is the foundation. We eliminate the pain and restrictions holding you back, giving you the physical freedom to achieve everything on your resolution list.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80',
    imageAlt: 'Athletic person stretching pain-free with confidence',
    imagePosition: 'left',
  },
  {
    id: 'feature-3',
    title: 'Celebratory Wellness Experience',
    description:
      'The New Year should be celebrated, not stressed over. Our festive, uplifting clinic atmosphere makes wellness appointments something to look forward to. From our Champagne Adjustment Special to complimentary wellness journals, we make your health journey feel like the celebration it deserves to be.',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80',
    imageAlt: 'Golden champagne toast with celebration lights',
    imagePosition: 'right',
  },
]
