'use client'

import { motion } from 'framer-motion'
import { services, servicesOverview } from '@/content/services'
import { Container, Card, SectionHeader } from '@/components/ui'
import { CallToAction } from '@/components/sections'
import type { Metadata } from 'next'

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

export default function ServicesPage() {
  return (
    <>
      <section className="py-16 sm:py-24 bg-gradient-to-b from-primary-50 to-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SectionHeader
              title={servicesOverview.title}
              subtitle={servicesOverview.description}
            />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mt-12 space-y-6"
          >
            {services.map((service) => (
              <motion.div key={service.id} variants={itemVariants}>
                <Card className="hover:border-primary-200 transition-colors duration-200">
                  <h2 className="text-xl font-semibold text-primary-900">
                    {service.title}
                  </h2>
                  <p className="mt-3 text-primary-600 leading-relaxed">
                    {service.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      <CallToAction
        title="Need assistance with any of these services?"
        description="Reach out to discuss your specific requirements and how I can help."
      />
    </>
  )
}
