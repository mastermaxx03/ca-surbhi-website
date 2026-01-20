import { Hero, WhatsNew, ImportantLinks, Testimonials, SocialMedia, CallToAction } from '@/components/sections'
import { Container } from '@/components/ui'

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* What's New & Important Links Side by Side */}
      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* What's New - Left Side */}
            <div>
              <WhatsNew />
            </div>

            {/* Important Links - Right Side */}
            <div>
              <ImportantLinks />
            </div>
          </div>
        </Container>
      </section>

      {/* Client Feedback - Compact */}
      <section className="py-12 sm:py-16 bg-primary-50">
        <Container>
          <Testimonials variant="compact" limit={2} />
        </Container>
      </section>

      <SocialMedia />

      <CallToAction />
    </>
  )
}
