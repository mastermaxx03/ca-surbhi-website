'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { updates, updatesSection, categoryLabels, Update } from '@/content/updates'

const categoryColors: Record<Update['category'], string> = {
  tax: 'bg-blue-100 text-blue-700',
  compliance: 'bg-amber-100 text-amber-700',
  platform: 'bg-purple-100 text-purple-700',
  blog: 'bg-green-100 text-green-700',
  tool: 'bg-rose-100 text-rose-700',
}

export function WhatsNew() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer || updates.length === 0) return

    let animationId: number
    let scrollPosition = 0
    const scrollSpeed = 0.5

    const scroll = () => {
      if (!isPaused && scrollContainer) {
        scrollPosition += scrollSpeed
        if (scrollPosition >= scrollContainer.scrollHeight / 2) {
          scrollPosition = 0
        }
        scrollContainer.scrollTop = scrollPosition
      }
      animationId = requestAnimationFrame(scroll)
    }

    animationId = requestAnimationFrame(scroll)

    return () => cancelAnimationFrame(animationId)
  }, [isPaused])

  if (updates.length === 0) {
    return (
      <div className="bg-white border border-primary-100 rounded-lg p-6">
        <h2 className="text-lg font-semibold text-primary-900 mb-4">
          {updatesSection.title}
        </h2>
        <p className="text-primary-500 text-sm">{updatesSection.emptyMessage}</p>
      </div>
    )
  }

  const duplicatedUpdates = [...updates, ...updates]

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white border border-primary-100 rounded-lg overflow-hidden"
    >
      <div className="px-5 py-4 border-b border-primary-100 bg-primary-50">
        <h2 className="text-lg font-semibold text-primary-900 flex items-center gap-2">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          {updatesSection.title}
        </h2>
      </div>

      <div
        ref={scrollRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="h-80 overflow-hidden"
      >
        <div className="divide-y divide-primary-50">
          {duplicatedUpdates.map((update, index) => (
            <UpdateItem key={`${update.id}-${index}`} update={update} />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

function UpdateItem({ update }: { update: Update }) {
  const content = (
    <div className="px-5 py-4 hover:bg-primary-50 transition-colors duration-200">
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${categoryColors[update.category]}`}>
              {categoryLabels[update.category]}
            </span>
            <span className="text-xs text-primary-400">
              {formatDate(update.date)}
            </span>
          </div>
          <h3 className="font-medium text-primary-900 text-sm leading-tight">
            {update.title}
          </h3>
          <p className="text-primary-600 text-xs mt-1 line-clamp-2">
            {update.description}
          </p>
        </div>
        {update.link && (
          <svg className="w-4 h-4 text-primary-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        )}
      </div>
    </div>
  )

  if (update.link) {
    return <Link href={update.link}>{content}</Link>
  }

  return content
}

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })
}
