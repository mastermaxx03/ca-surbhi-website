import { HeroModern, WhatsNew, ImportantLinks, SocialMedia, Testimonials, CallToAction } from '@/components/sections'
import { Container } from '@/components/ui'
import { getWhatsNewItems } from '@/lib/content'

// Default limit for What's New items on homepage
const WHATS_NEW_LIMIT = 5

export default function HomePage() {
  // Fetch dynamic content from CMS (server-side)
  const whatsNewItems = getWhatsNewItems(WHATS_NEW_LIMIT)

  return (
    <>
      {/* Modern Hero Section */}
      <HeroModern />

      {/* What's New & Important Links Side by Side */}
      <section className="py-12 sm:py-16 bg-primary-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* What's New - Left Side */}
            <div>
              <WhatsNew items={whatsNewItems} />
            </div>

            {/* Important Links - Right Side */}
            <div>
              <ImportantLinks />
            </div>
          </div>
        </Container>
      </section>

      {/* Social Media Presence */}
      <SocialMedia />

      {/* Client Feedback - Compact */}
      <section className="py-12 sm:py-16">
        <Container>
          <Testimonials variant="compact" limit={2} />
        </Container>
      </section>

      <CallToAction />
    </>
  )
}
