import { Hero, ServicesOverview, Testimonials, Resources, CallToAction } from '@/components/sections'

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <Testimonials />
      <Resources limit={3} />
      <CallToAction />
    </>
  )
}
