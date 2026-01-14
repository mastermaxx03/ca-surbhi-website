'use client'

import { ReactNode } from 'react'
import Link from 'next/link'

interface ButtonProps {
  children: ReactNode
  href?: string
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  type?: 'button' | 'submit'
  onClick?: () => void
  disabled?: boolean
}

export function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  onClick,
  disabled = false,
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed'

  const variantStyles = {
    primary: 'bg-primary-800 text-white hover:bg-primary-900',
    secondary: 'bg-primary-100 text-primary-800 hover:bg-primary-200',
    outline: 'border border-primary-300 text-primary-700 hover:bg-primary-50',
  }

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm rounded',
    md: 'px-5 py-2.5 text-base rounded-md',
    lg: 'px-7 py-3 text-lg rounded-md',
  }

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`

  if (href) {
    return (
      <Link href={href} className={combinedStyles}>
        {children}
      </Link>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedStyles}
    >
      {children}
    </button>
  )
}
