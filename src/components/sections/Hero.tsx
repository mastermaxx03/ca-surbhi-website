'use client'

import { motion } from 'framer-motion'
import { siteConfig } from '@/content/site'
import { Container, Button } from '@/components/ui'
import { ProfileImage } from '@/components/shared'

export function Hero() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-primary-50 to-white">
      <Container>
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 text-center md:text-left"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-primary-900 leading-tight">
              {siteConfig.name}
            </h1>
            <p className="mt-2 text-lg sm:text-xl text-primary-600 font-medium">
              {siteConfig.title}
            </p>
            <p className="mt-6 text-primary-700 text-lg max-w-xl">
              {siteConfig.tagline}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button href="/contact" size="lg">
                Get in Touch
              </Button>
              <Button href="/services" variant="outline" size="lg">
                View Services
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex-shrink-0"
          >
            <ProfileImage size="xl" />
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
