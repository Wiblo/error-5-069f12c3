"use client"

import { useState } from "react"
import { Send, Loader2Icon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Container } from "@/components/layout/Container"
import { SectionWrapper } from "@/components/layout/SectionWrapper"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export interface ContactFormSectionProps {
  title?: string
  description?: string
  className?: string
}

/**
 * Contact form section with form fields
 * Includes name, email, phone, and message fields
 */
export function ContactFormSection({
  title = "Send Us a Message",
  description = "Fill out the form below and we'll get back to you as soon as possible.",
  className,
}: ContactFormSectionProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({ type: null, message: "" })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormStatus({ type: null, message: "" })

    // Get form data
    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    }

    try {
      // Simulate form submission - replace with actual API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // For now, log to console (replace with actual form submission)
      console.log("Form submitted:", data)

      setFormStatus({
        type: "success",
        message: "Thank you for your message! We'll get back to you soon.",
      })

      // Reset form
      e.currentTarget.reset()
    } catch {
      setFormStatus({
        type: "error",
        message: "Something went wrong. Please try again or call us directly.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <SectionWrapper className={cn("bg-background", className)}>
      <Container>
        {/* Section Header */}
        <div className="mb-12 flex w-full flex-col items-center text-center">
          <h2 className="font-heading mb-4 text-balance text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="text-pretty text-base text-muted-foreground md:text-lg max-w-2xl">
            {description}
          </p>
        </div>

        {/* Contact Form */}
        <div className="mx-auto max-w-2xl">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {/* Name Field */}
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-medium text-foreground">
                Name <span className="text-destructive">*</span>
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Your full name"
                required
                disabled={isSubmitting}
              />
            </div>

            {/* Email Field */}
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium text-foreground">
                Email <span className="text-destructive">*</span>
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="your.email@example.com"
                required
                disabled={isSubmitting}
              />
            </div>

            {/* Phone Field */}
            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="text-sm font-medium text-foreground">
                Phone
              </label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="(555) 123-4567"
                disabled={isSubmitting}
              />
            </div>

            {/* Message Field */}
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium text-foreground">
                Message <span className="text-destructive">*</span>
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell us how we can help you..."
                required
                disabled={isSubmitting}
                className="min-h-32"
              />
            </div>

            {/* Submit Button */}
            <div className="flex flex-col gap-4">
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full sm:w-auto sm:self-start"
              >
                {isSubmitting ? (
                  <>
                    <Loader2Icon className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send />
                    Send Message
                  </>
                )}
              </Button>

              {/* Status Message */}
              {formStatus.type && (
                <div
                  className={cn(
                    "rounded-lg border p-4 text-sm",
                    formStatus.type === "success" &&
                      "border-green-500/20 bg-green-500/10 text-green-700",
                    formStatus.type === "error" &&
                      "border-destructive/20 bg-destructive/10 text-destructive"
                  )}
                >
                  {formStatus.message}
                </div>
              )}
            </div>
          </form>
        </div>
      </Container>
    </SectionWrapper>
  )
}
