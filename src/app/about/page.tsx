'use client'

import { motion } from 'framer-motion'
import { introContent } from '@/content/intro'
import { Container, SectionHeader } from '@/components/ui'
import { ProfileImage } from '@/components/shared'
import { CallToAction } from '@/components/sections'

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

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-primary-100 to-white">
        <Container>
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex-shrink-0"
            >
              <ProfileImage size="xl" src="/images/IMG_6486.jpg" />
            </motion.div>

            {/* Title & Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-primary-900">
                {introContent.title}
              </h1>
              <p className="mt-4 text-accent-600 font-semibold text-lg">
                {introContent.subtitle}
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Full Narrative Section */}
      <section className="py-16 sm:py-20">
        <Container size="narrow">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <SectionHeader
                title="About CA Surbhi Srivastava Bhartiya"
                centered={false}
              />
            </motion.div>

            <div className="mt-10 space-y-6">
              {introContent.paragraphs.map((paragraph) => (
                <motion.p
                  key={paragraph.id}
                  variants={itemVariants}
                  className="text-primary-700 leading-relaxed text-lg"
                >
                  {paragraph.content}
                </motion.p>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Key Highlights */}
      <section className="py-16 sm:py-20 bg-primary-50">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <SectionHeader title="Key Highlights" />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              {
                title: '1M+ Followers',
                description: 'Trusted by over one million people across social media platforms',
              },
              {
                title: 'Finance Head',
                description: 'Leading financial operations at Karza Mukti Abhiyan and Dharmik Ekta Trust',
              },
              {
                title: 'Financial Literacy',
                description: 'Educating millions on RBI guidelines, debt management, and financial rights',
              },
              {
                title: 'Social Advocate',
                description: 'Committed to mental health advocacy and suicide prevention',
              },
              {
                title: 'Community Development',
                description: 'Driving financial reforms and community development initiatives',
              },
              {
                title: 'Trusted Advisor',
                description: 'Providing emotional and financial guidance to individuals in distress',
              },
            ].map((highlight, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white border border-primary-200 rounded-lg p-6"
              >
                <h3 className="font-semibold text-primary-900 text-lg">
                  {highlight.title}
                </h3>
                <p className="mt-2 text-primary-600 text-sm">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      <CallToAction />
    </>
  )
}
