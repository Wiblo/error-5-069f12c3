import { HeroWithImage } from "@/components/sections/hero/HeroWithImage"
import { FeaturedServices } from "@/components/sections/services/FeaturedServices"
import { AboutSection } from "@/components/sections/about/AboutSection"
import { FeaturesSection } from "@/components/sections/features/FeaturesSection"
import { CTASection } from "@/components/sections/cta/CTASection"
import { LocationSection } from "@/components/sections/location/LocationSection"
import { FaqSection } from "@/components/sections/faq/FaqSection"
import { businessInfo } from "@/lib/data/business-info"

export default function Home() {
  return (
    <>
      <HeroWithImage
        subtitle="Ring in 2025 with Optimal Health"
        title="Start Your Year Pain-Free, Aligned, and Ready for Anything"
        backgroundImage="https://images.unsplash.com/photo-1467810563316-b5476525c0f9?w=1920&q=80"
        backgroundImageAlt="Spectacular fireworks illuminating the night sky for New Year celebration"
        ctaText="Book Your New Year Reset"
        ctaUrl={businessInfo.bookingUrl}
      />
      <FeaturedServices />
      <AboutSection />
      <FeaturesSection />
      <CTASection />
      <LocationSection />
      <FaqSection />
    </>
  )
}
