interface SectionHeaderProps {
  title: string
  subtitle?: string
  centered?: boolean
  className?: string
}

export function SectionHeader({ title, subtitle, centered = true, className = '' }: SectionHeaderProps) {
  return (
    <div className={`${centered ? 'text-center' : ''} ${className}`}>
      <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-primary-900">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-primary-600 text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  )
}
