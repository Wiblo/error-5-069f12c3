import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { HeroWithImage } from "@/components/sections/hero/HeroWithImage"
import { TreatmentDetailSection } from "@/components/sections/treatments/TreatmentDetailSection"
import { Breadcrumb } from "@/components/layout/Breadcrumb"
import { Container } from "@/components/layout/Container"
import { generatePageMetadata } from "@/lib/seo/metadata"
import { generateServiceSchema, JsonLd } from "@/lib/seo/json-ld"
import { getServiceBySlug } from "@/lib/data/services"
import { businessInfo } from "@/lib/data/business-info"

const treatment = getServiceBySlug("wellness-transformation")

if (!treatment) {
  notFound()
}

export const metadata: Metadata = generatePageMetadata(
  treatment.name,
  treatment.description,
  `/treatments/${treatment.slug}`
)

export default function WellnessTransformationPage() {
  if (!treatment) {
    notFound()
  }

  // Omit icon field before passing to client component
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { icon: _icon, ...treatmentData } = treatment

  return (
    <>
      <JsonLd
        data={generateServiceSchema({
          name: treatment.name,
          description: treatment.description,
          url: `${businessInfo.url}/treatments/${treatment.slug}`,
          serviceType: "ChiropracticCare",
          areaServed: `${businessInfo.address.city}, ${businessInfo.address.state}`,
          image: treatment.image,
          offers: {
            price: treatment.price.replace("$", "").replace(",", ""),
            priceCurrency: "USD",
          },
        })}
      />
      <HeroWithImage
        subtitle="12-Week Comprehensive Program"
        title={treatment.name}
        backgroundImage={treatment.image}
        backgroundImageAlt={treatment.imageAlt}
        ctaText="Start Your Transformation"
        ctaUrl={businessInfo.bookingUrl}
        size="medium"
      />
      <div className="py-4 border-b border-border">
        <Container>
          <Breadcrumb
            items={[
              { name: "Home", href: "/" },
              { name: "Treatments", href: "/treatments" },
              { name: treatment.name },
            ]}
          />
        </Container>
      </div>
      <TreatmentDetailSection treatment={treatmentData} />
    </>
  )
}
