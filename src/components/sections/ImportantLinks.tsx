'use client'

import { motion } from 'framer-motion'
import { importantLinks, importantLinksSection } from '@/content/importantLinks'

export function ImportantLinks() {
  if (importantLinks.length === 0) {
    return (
      <div className="bg-white border border-primary-100 rounded-lg p-6">
        <h2 className="text-lg font-semibold text-primary-900 mb-4">
          {importantLinksSection.title}
        </h2>
        <p className="text-primary-500 text-sm">{importantLinksSection.emptyMessage}</p>
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white border border-primary-100 rounded-lg overflow-hidden"
    >
      <div className="px-5 py-4 border-b border-primary-100 bg-primary-50">
        <h2 className="text-lg font-semibold text-primary-900 flex items-center gap-2">
          <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
          </svg>
          {importantLinksSection.title}
        </h2>
      </div>

      <ul className="divide-y divide-primary-50">
        {importantLinks.map((link) => (
          <li key={link.id}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 px-5 py-4 hover:bg-primary-50 transition-colors duration-200 group"
            >
              <span className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 group-hover:bg-primary-200 transition-colors duration-200">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </span>
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-primary-900 text-sm group-hover:text-primary-700 transition-colors duration-200">
                  {link.title}
                </h3>
                {link.description && (
                  <p className="text-primary-500 text-xs mt-0.5 line-clamp-2">
                    {link.description}
                  </p>
                )}
              </div>
              <svg className="w-4 h-4 text-primary-400 flex-shrink-0 mt-1 group-hover:text-primary-600 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}
