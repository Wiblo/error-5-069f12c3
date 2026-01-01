import { Metadata } from "next"
import { generatePageMetadata } from "@/lib/seo/metadata"
import { ContactFormSection } from "@/components/sections/contact/ContactFormSection"
import { LocationSection } from "@/components/sections/location/LocationSection"

export const metadata: Metadata = generatePageMetadata(
  "Get in Touch",
  "Contact Resolve Chiropractic & Wellness for appointments, questions, or to learn more about our services. We're here to help you start your journey to better health."
)

export default function ContactPage() {
  return (
    <main>
      {/* Hero Section - Contact Form */}
      <ContactFormSection
        title="Get in Touch"
        description="Have a question or ready to book an appointment? Fill out the form below and we'll get back to you as soon as possible."
      />

      {/* Location Section */}
      <LocationSection title="Visit Us" bookingText="Book Appointment" />
    </main>
  )
}
