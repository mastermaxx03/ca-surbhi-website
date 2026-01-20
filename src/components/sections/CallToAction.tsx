'use client'

import { motion } from 'framer-motion'
import { Container, Button } from '@/components/ui'

interface CallToActionProps {
  title?: string
  description?: string
  buttonText?: string
  buttonHref?: string
}

export function CallToAction({
  title = 'Join the Financial Literacy Movement',
  description = 'Connect with CA Surbhi Srivastava Bhartiya and be part of a community empowering millions with financial knowledge.',
  buttonText = 'Get in Touch',
  buttonHref = '/contact',
}: CallToActionProps) {
  return (
    <section className="py-16 sm:py-24 bg-primary-900">
      <Container size="narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-white">
            {title}
          </h2>
          <p className="mt-4 text-primary-300 text-lg max-w-xl mx-auto">
            {description}
          </p>
          <div className="mt-8">
            <Button
              href={buttonHref}
              size="lg"
              className="bg-accent-600 text-white hover:bg-accent-700"
            >
              {buttonText}
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
