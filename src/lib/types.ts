export interface SiteConfig {
  name: string
  title: string
  description: string
  tagline: string
  email: string
  phone: string
  address: {
    city: string
    state: string
    country: string
  }
  socialLinks: {
    linkedin?: string
    twitter?: string
  }
}

export interface Service {
  id: string
  title: string
  shortDescription: string
  description: string
  icon?: string
}

export interface Testimonial {
  id: string
  content: string
  author: string
  role: string
  city: string
}

export interface Resource {
  id: string
  title: string
  description: string
  fileUrl: string
  date: string
  category: 'tax-guide' | 'compliance' | 'business' | 'general'
}

export interface AboutContent {
  headline: string
  introduction: string
  background: string[]
  experience: {
    years: number
    highlights: string[]
  }
  philosophy: string
  credentials: string[]
}

export interface NavItem {
  label: string
  href: string
}
