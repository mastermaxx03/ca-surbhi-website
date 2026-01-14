'use client'

import { motion } from 'framer-motion'
import { testimonials, testimonialsSection } from '@/content/testimonials'
import { Container, Card, SectionHeader } from '@/components/ui'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

export function Testimonials() {
  return (
    <section className="py-16 sm:py-24 bg-primary-50">
      <Container>
        <SectionHeader
          title={testimonialsSection.title}
          subtitle={testimonialsSection.subtitle}
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial) => (
            <motion.div key={testimonial.id} variants={itemVariants}>
              <Card className="h-full">
                <blockquote>
                  <p className="text-primary-700 leading-relaxed">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                </blockquote>
                <div className="mt-4 pt-4 border-t border-primary-100">
                  <p className="font-medium text-primary-900 text-sm">
                    {testimonial.author}
                  </p>
                  <p className="text-primary-500 text-sm">
                    {testimonial.role}, {testimonial.city}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
