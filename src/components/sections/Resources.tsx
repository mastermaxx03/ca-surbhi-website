'use client'

import { motion } from 'framer-motion'
import { resources, resourcesSection, resourceCategories } from '@/content/resources'
import { Container, Card, SectionHeader } from '@/components/ui'

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

interface ResourcesSectionProps {
  limit?: number
  showHeading?: boolean
}

export function Resources({ limit, showHeading = true }: ResourcesSectionProps) {
  const displayResources = limit ? resources.slice(0, limit) : resources

  return (
    <section className="py-16 sm:py-24">
      <Container>
        {showHeading && (
          <SectionHeader
            title={resourcesSection.title}
            subtitle={resourcesSection.subtitle}
          />
        )}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className={`${showHeading ? 'mt-12' : ''} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6`}
        >
          {displayResources.map((resource) => (
            <motion.div key={resource.id} variants={itemVariants}>
              <a
                href={resource.fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <Card className="h-full hover:border-primary-300 transition-colors duration-200 group">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 group-hover:bg-primary-200 transition-colors duration-200">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-primary-900 text-sm leading-tight group-hover:text-primary-700 transition-colors duration-200">
                        {resource.title}
                      </h3>
                      <p className="mt-1 text-primary-500 text-xs">
                        {resourceCategories[resource.category]}
                      </p>
                    </div>
                  </div>
                  <p className="mt-3 text-primary-600 text-sm leading-relaxed">
                    {resource.description}
                  </p>
                </Card>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
