import { Hero, WhatsNew, Testimonials, SocialMedia, CallToAction } from '@/components/sections'
import { Container } from '@/components/ui'

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Main Content with What's New on Left */}
      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* What's New - Left Side */}
            <div className="lg:col-span-4 order-2 lg:order-1">
              <div className="lg:sticky lg:top-24">
                <WhatsNew />
              </div>
            </div>

            {/* Main Content - Right Side */}
            <div className="lg:col-span-8 order-1 lg:order-2">
              <Testimonials variant="compact" />
            </div>
          </div>
        </Container>
      </section>

      <SocialMedia />

      <CallToAction />
    </>
  )
}
