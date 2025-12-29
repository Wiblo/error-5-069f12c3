export interface FaqItem {
  id: string
  question: string
  answer: string
}

/**
 * Frequently Asked Questions
 * Update this array to modify FAQs shown on the site
 */
export const faqs: FaqItem[] = [
  {
    id: 'new-year-special',
    question: 'What makes the New Year Reset different from a regular consultation?',
    answer:
      "The 2025 New Year Reset is specifically designed to align your wellness journey with your New Year resolutions. It includes a comprehensive spinal assessment, personalized 2025 wellness roadmap, resolution planning strategies, and your first adjustment. You'll also receive a complimentary wellness journal to track your progress throughout the year. It's perfect for anyone committed to making 2025 their healthiest year yet.",
  },
  {
    id: 'resolution-commitment',
    question: 'How does chiropractic care help me keep my New Year resolutions?',
    answer:
      "Many New Year resolutions involve physical wellness - losing weight, exercising more, reducing stress, or living pain-free. Regular chiropractic care optimizes your nervous system function, reduces pain that might limit activity, improves mobility, and helps manage stress. Our Resolution Maintenance Care includes accountability check-ins to keep you motivated and on track throughout 2025.",
  },
  {
    id: 'first-time-patients',
    question: 'Is this suitable for first-time chiropractic patients?',
    answer:
      "Absolutely! The New Year Reset is perfect for first-time patients. We designed it specifically to welcome new patients who want to start 2025 with optimal health. We'll explain everything, answer all your questions, and ensure you're comfortable every step of the way. Many people choose the New Year as the perfect time to try chiropractic care for the first time.",
  },
  {
    id: 'pricing-insurance',
    question: 'Do you accept insurance for these New Year services?',
    answer:
      'Yes, we work with most major insurance providers. Our New Year services are priced competitively and many patients find their insurance covers a significant portion. We process claims on your behalf and will verify your coverage before your first visit. Payment plans are also available to help you invest in your 2025 wellness goals.',
  },
  {
    id: 'champagne-special',
    question: 'What is included in the Champagne Adjustment Special?',
    answer:
      "The Champagne Adjustment Special is our premium celebration service. It includes a 45-minute premium adjustment session in our festive treatment room, relaxation and stress relief techniques, a complimentary wellness consultation, and a take-home celebration kit with wellness tools to support your journey. It's perfect for treating yourself or gifting to someone special who deserves exceptional care.",
  },
  {
    id: 'maintenance-frequency',
    question: 'How often should I come for Resolution Maintenance Care?',
    answer:
      "The frequency depends on your individual goals and condition. Most patients benefit from weekly or bi-weekly visits initially, transitioning to monthly maintenance care as they progress. During your New Year Reset, we'll create a personalized schedule that aligns with your 2025 resolutions and ensures you stay on track throughout the year.",
  },
  {
    id: 'booking-availability',
    question: 'How do I book my New Year appointment?',
    answer:
      'Book online through our website, call us at (555) 2025-NEW, or email newyear@resolvechiro.com. We have extended hours through January to accommodate everyone starting their wellness journey. Early morning and evening appointments are available for busy schedules. Book soon - our New Year Reset appointments fill up quickly!',
  },
  {
    id: 'what-to-expect',
    question: 'Will adjustments hurt? What should I expect?',
    answer:
      "Chiropractic adjustments are generally comfortable and not painful. You may feel slight pressure or hear a popping sound (like cracking your knuckles), but most patients find the experience relaxing and immediately relieving. We use gentle techniques adapted to your comfort level and always communicate throughout your treatment. Many patients leave feeling lighter, looser, and ready to conquer their 2025 goals!",
  },
]

/**
 * Get all FAQs
 */
export function getAllFaqs(): FaqItem[] {
  return faqs
}

/**
 * Get a single FAQ by ID
 */
export function getFaqById(id: string): FaqItem | undefined {
  return faqs.find((faq) => faq.id === id)
}
