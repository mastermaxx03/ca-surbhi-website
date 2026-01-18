'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Container, Button } from '@/components/ui'

interface ComingSoonProps {
  title: string
  description: string
  icon?: React.ReactNode
}

export function ComingSoon({ title, description, icon }: ComingSoonProps) {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-primary-50 to-white min-h-[70vh] flex items-center">
      <Container size="narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          {icon && (
            <div className="w-20 h-20 mx-auto mb-6 bg-primary-100 rounded-2xl flex items-center justify-center text-primary-600">
              {icon}
            </div>
          )}

          <h1 className="text-3xl sm:text-4xl font-serif font-semibold text-primary-900">
            {title}
          </h1>

          <p className="mt-4 text-primary-600 text-lg max-w-md mx-auto">
            {description}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/" variant="primary">
              Back to Home
            </Button>
            <Button href="/contact" variant="outline">
              Contact Us
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
