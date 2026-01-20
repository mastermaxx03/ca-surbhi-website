'use client'

import { motion } from 'framer-motion'
import { socialPlatforms, socialSection, SocialPlatform } from '@/content/social'
import { Container, SectionHeader } from '@/components/ui'

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

const platformColors: Record<SocialPlatform['icon'], { bg: string; hover: string; icon: string }> = {
  youtube: { bg: 'bg-red-50', hover: 'hover:bg-red-100', icon: 'text-red-600' },
  instagram: { bg: 'bg-pink-50', hover: 'hover:bg-pink-100', icon: 'text-pink-600' },
  telegram: { bg: 'bg-sky-50', hover: 'hover:bg-sky-100', icon: 'text-sky-600' },
  facebook: { bg: 'bg-blue-50', hover: 'hover:bg-blue-100', icon: 'text-blue-600' },
  whatsapp: { bg: 'bg-green-50', hover: 'hover:bg-green-100', icon: 'text-green-600' },
  twitter: { bg: 'bg-slate-50', hover: 'hover:bg-slate-100', icon: 'text-slate-800' },
  threads: { bg: 'bg-slate-50', hover: 'hover:bg-slate-100', icon: 'text-slate-900' },
}

const platformButtonColors: Record<SocialPlatform['icon'], string> = {
  youtube: 'bg-red-600 hover:bg-red-700',
  instagram: 'bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 hover:from-purple-700 hover:via-pink-700 hover:to-orange-600',
  telegram: 'bg-sky-500 hover:bg-sky-600',
  facebook: 'bg-blue-600 hover:bg-blue-700',
  whatsapp: 'bg-green-600 hover:bg-green-700',
  twitter: 'bg-slate-900 hover:bg-slate-800',
  threads: 'bg-slate-900 hover:bg-slate-800',
}

export function SocialMedia() {
  return (
    <section className="py-16 sm:py-24 bg-primary-50">
      <Container>
        <SectionHeader title={socialSection.title} />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6"
        >
          {socialPlatforms.map((platform) => (
            <motion.div key={platform.id} variants={itemVariants}>
              <SocialCard platform={platform} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}

function SocialCard({ platform }: { platform: SocialPlatform }) {
  const hasLink = platform.link && platform.link.length > 0
  const colors = platformColors[platform.icon]
  const buttonColor = platformButtonColors[platform.icon]

  return (
    <div className={`rounded-xl ${colors.bg} ${colors.hover} p-5 text-center transition-colors duration-200 h-full flex flex-col`}>
      <div className="flex-1">
        <div className={`w-12 h-12 mx-auto mb-3 flex items-center justify-center ${colors.icon}`}>
          <PlatformIcon icon={platform.icon} />
        </div>

        <h3 className="font-semibold text-primary-900 text-sm mb-1">
          {platform.name}
        </h3>

        <p className="text-primary-600 text-lg font-bold">
          {platform.followers}
        </p>
        <p className="text-primary-400 text-xs">Followers</p>
      </div>

      <div className="mt-4">
        {hasLink ? (
          <a
            href={platform.link!}
            target="_blank"
            rel="noopener noreferrer"
            className={`block w-full py-2 px-3 text-white text-xs font-medium rounded-lg transition-colors duration-200 ${buttonColor}`}
          >
            {socialSection.buttonText}
          </a>
        ) : (
          <span className="block w-full py-2 px-3 bg-primary-200 text-primary-500 text-xs font-medium rounded-lg cursor-not-allowed">
            {socialSection.comingSoonText}
          </span>
        )}
      </div>
    </div>
  )
}

function PlatformIcon({ icon }: { icon: SocialPlatform['icon'] }) {
  const iconClass = 'w-8 h-8'

  switch (icon) {
    case 'youtube':
      return (
        <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    case 'instagram':
      return (
        <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    case 'telegram':
      return (
        <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
        </svg>
      )
    case 'facebook':
      return (
        <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    case 'whatsapp':
      return (
        <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      )
    case 'twitter':
      return (
        <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    case 'threads':
      return (
        <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.96-.065-1.182.408-2.256 1.332-3.023.88-.73 2.082-1.168 3.576-1.302.947-.085 1.855-.054 2.725.092-.058-.597-.22-1.089-.49-1.461-.395-.544-1.013-.834-1.84-.862h-.043c-.676 0-1.583.192-2.269.986l-1.478-1.233c.927-1.07 2.2-1.635 3.685-1.635h.063c1.424.041 2.572.56 3.315 1.503.646.819 1.007 1.907 1.074 3.234.503.18.96.404 1.373.67 1.143.74 1.988 1.7 2.442 2.777.756 1.79.756 4.454-1.423 6.586-1.865 1.826-4.168 2.628-7.465 2.648zm-.07-5.89c1.065-.063 1.891-.4 2.455-1.102.426-.53.723-1.263.882-2.183-.57-.088-1.16-.127-1.768-.118-1.07.018-1.91.244-2.498.672-.578.422-.856.964-.827 1.613.024.49.26.915.666 1.196.435.3 1.025.442 1.703.404z"/>
        </svg>
      )
    default:
      return null
  }
}
