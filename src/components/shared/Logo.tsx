import Link from 'next/link'
import { siteConfig } from '@/content/site'

interface LogoProps {
  className?: string
  showText?: boolean
  variant?: 'default' | 'light'
}

export function Logo({ className = '', showText = true, variant = 'default' }: LogoProps) {
  const isLight = variant === 'light'

  return (
    <Link href="/" className={`flex items-center gap-3 ${className}`}>
      <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-serif font-bold text-lg ${
        isLight ? 'bg-accent-600 text-white' : 'bg-accent-600 text-white'
      }`}>
        CA
      </div>
      {showText && (
        <div className="flex flex-col">
          <span className={`font-serif font-semibold leading-tight ${
            isLight ? 'text-white' : 'text-primary-900'
          }`}>
            {siteConfig.name}
          </span>
          <span className={`text-xs leading-tight ${
            isLight ? 'text-primary-200' : 'text-primary-500'
          }`}>
            {siteConfig.title}
          </span>
        </div>
      )}
    </Link>
  )
}
