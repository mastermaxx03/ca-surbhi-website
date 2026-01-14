'use client'

import { motion } from 'framer-motion'
import { aboutContent, aboutPageMeta } from '@/content/about'
import { Container, Card, SectionHeader } from '@/components/ui'
import { ProfileImage } from '@/components/shared'
import { CallToAction } from '@/components/sections'

export default function AboutPage() {
  return (
    <>
      <section className="py-16 sm:py-24 bg-gradient-to-b from-primary-50 to-white">
        <Container>
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex-shrink-0 flex justify-center lg:justify-start"
            >
              <ProfileImage size="xl" />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex-1"
            >
              <SectionHeader
                title={aboutPageMeta.title}
                subtitle={aboutContent.headline}
                centered={false}
              />

              <div className="mt-8 prose">
                <p className="text-lg text-primary-700">
                  {aboutContent.introduction}
                </p>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Background Section */}
      <section className="py-16 sm:py-20">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <Card>
              <h2 className="text-xl font-serif font-semibold text-primary-900 mb-4">
                Background
              </h2>
              <ul className="space-y-3">
                {aboutContent.background.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-primary-700">
                    <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 bg-primary-400 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>

            <Card>
              <h2 className="text-xl font-serif font-semibold text-primary-900 mb-4">
                Experience
              </h2>
              <p className="text-primary-600 mb-4">
                {aboutContent.experience.years}+ years of professional experience
              </p>
              <ul className="space-y-3">
                {aboutContent.experience.highlights.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-primary-700">
                    <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 bg-primary-400 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        </Container>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 sm:py-20 bg-primary-50">
        <Container size="narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-primary-900">
              Practice Philosophy
            </h2>
            <p className="mt-6 text-primary-700 text-lg leading-relaxed">
              {aboutContent.philosophy}
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Credentials Section */}
      <section className="py-16 sm:py-20">
        <Container size="narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl font-serif font-semibold text-primary-900 mb-6 text-center">
              Credentials
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {aboutContent.credentials.map((credential, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm"
                >
                  {credential}
                </span>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      <CallToAction />
    </>
  )
}
