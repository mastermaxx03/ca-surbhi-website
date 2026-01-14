'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { services, servicesOverview } from '@/content/services'
import { Container, Card, SectionHeader } from '@/components/ui'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
}

export function ServicesOverview() {
  const featuredServices = services.slice(0, 4)

  return (
    <section className="py-16 sm:py-24">
      <Container>
        <SectionHeader
          title={servicesOverview.title}
          subtitle={servicesOverview.subtitle}
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {featuredServices.map((service) => (
            <motion.div key={service.id} variants={itemVariants}>
              <Card className="h-full hover:border-primary-200 transition-colors duration-200">
                <h3 className="text-lg font-semibold text-primary-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-primary-600 text-sm leading-relaxed">
                  {service.shortDescription}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="text-primary-700 hover:text-primary-900 font-medium text-sm transition-colors duration-200 inline-flex items-center gap-1"
          >
            View all services
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </Container>
    </section>
  )
}
