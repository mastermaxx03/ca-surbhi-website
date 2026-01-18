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

interface TestimonialsProps {
  variant?: 'default' | 'compact'
}

export function Testimonials({ variant = 'default' }: TestimonialsProps) {
  const isCompact = variant === 'compact'

  const content = (
    <>
      <SectionHeader
        title={testimonialsSection.title}
        subtitle={testimonialsSection.subtitle}
        centered={!isCompact}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className={`mt-8 grid gap-6 ${isCompact ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-3'}`}
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
    </>
  )

  if (isCompact) {
    return <div>{content}</div>
  }

  return (
    <section className="py-16 sm:py-24 bg-primary-50">
      <Container>
        {content}
      </Container>
    </section>
  )
}
