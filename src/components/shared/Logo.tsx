import Link from 'next/link'
import { siteConfig } from '@/content/site'

interface LogoProps {
  className?: string
  showText?: boolean
}

export function Logo({ className = '', showText = true }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center gap-3 ${className}`}>
      <div className="w-10 h-10 bg-primary-800 rounded-lg flex items-center justify-center text-white font-serif font-bold text-lg">
        CA
      </div>
      {showText && (
        <div className="flex flex-col">
          <span className="font-serif font-semibold text-primary-900 leading-tight">
            {siteConfig.name}
          </span>
          <span className="text-xs text-primary-500 leading-tight">
            {siteConfig.title}
          </span>
        </div>
      )}
    </Link>
  )
}
