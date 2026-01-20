'use client'

import { motion } from 'framer-motion'
import { introContent, introSection } from '@/content/intro'
import { Container } from '@/components/ui'
import { ProfileImage } from '@/components/shared'

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
    transition: { duration: 0.5 },
  },
}

export function Intro() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4 flex justify-center lg:justify-start"
          >
            <div className="lg:sticky lg:top-24">
              <ProfileImage size="xl" />
              <div className="mt-6 text-center lg:text-left">
                <h2 className="text-2xl font-serif font-bold text-primary-900">
                  {introContent.title}
                </h2>
                <p className="mt-2 text-accent-600 font-medium text-sm">
                  {introContent.subtitle}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-8"
          >
            <motion.h3
              variants={itemVariants}
              className="text-xl font-semibold text-primary-900 mb-6 pb-4 border-b border-primary-200"
            >
              {introSection.sectionTitle}
            </motion.h3>

            <div className="space-y-5">
              {introContent.paragraphs.map((paragraph) => (
                <motion.p
                  key={paragraph.id}
                  variants={itemVariants}
                  className="text-primary-700 leading-relaxed"
                >
                  {paragraph.content}
                </motion.p>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
