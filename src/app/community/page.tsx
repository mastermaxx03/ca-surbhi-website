'use client'

import { motion } from 'framer-motion'
import { communityOptions, communityPage } from '@/content/community'
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

export default function CommunityPage() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-primary-50 to-white min-h-[70vh]">
      <Container size="narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeader
            title={communityPage.title}
            subtitle={communityPage.subtitle}
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {communityOptions.map((option) => (
            <motion.div key={option.id} variants={itemVariants}>
              <CommunityCard option={option} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}

function CommunityCard({ option }: { option: typeof communityOptions[0] }) {
  const hasLink = option.whatsappLink && option.whatsappLink.length > 0

  return (
    <Card padding="lg" className="h-full flex flex-col">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-14 h-14 rounded-xl bg-primary-100 flex items-center justify-center">
          {option.icon === 'employees' ? (
            <svg className="w-7 h-7 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          ) : (
            <svg className="w-7 h-7 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          )}
        </div>
        <h3 className="text-xl font-semibold text-primary-900">
          {option.title}
        </h3>
      </div>

      <p className="text-primary-600 mb-4 flex-1">
        {option.description}
      </p>

      <div className="mb-6">
        <p className="text-xs text-primary-500 uppercase tracking-wide mb-2">For:</p>
        <div className="flex flex-wrap gap-2">
          {option.audience.map((item) => (
            <span
              key={item}
              className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded-full"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {hasLink ? (
        <a
          href={option.whatsappLink!}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 w-full py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors duration-200"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          {communityPage.buttonText}
        </a>
      ) : (
        <div className="w-full py-3 bg-primary-100 text-primary-500 font-medium rounded-lg text-center cursor-not-allowed">
          {communityPage.comingSoonText}
        </div>
      )}

      {!hasLink && (
        <p className="text-xs text-primary-400 text-center mt-2">
          {communityPage.emptyLinkMessage}
        </p>
      )}
    </Card>
  )
}
