import Image from 'next/image'

interface ProfileImageProps {
  src?: string
  alt?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

const sizeClasses = {
  sm: 'w-16 h-16',
  md: 'w-24 h-24',
  lg: 'w-32 h-32 sm:w-40 sm:h-40',
  xl: 'w-48 h-48 sm:w-64 sm:h-64',
}

export function ProfileImage({ src, alt = 'Profile photo', size = 'lg', className = '' }: ProfileImageProps) {
  const hasImage = src && src.length > 0

  return (
    <div className={`${sizeClasses[size]} rounded-full overflow-hidden bg-primary-100 flex items-center justify-center ${className}`}>
      {hasImage ? (
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 160px, 256px"
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-primary-200 to-primary-300 flex items-center justify-center">
          <svg
            className="w-1/2 h-1/2 text-primary-400"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
        </div>
      )}
    </div>
  )
}
