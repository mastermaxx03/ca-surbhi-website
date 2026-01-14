import { Resource } from '@/lib/types'

export const resources: Resource[] = [
  {
    id: '1',
    title: 'ITR Filing Checklist for Salaried Individuals',
    description: 'A comprehensive checklist of documents and information required for filing income tax returns.',
    fileUrl: '/resources/itr-checklist-salaried.pdf',
    date: '2024-03-15',
    category: 'tax-guide',
  },
  {
    id: '2',
    title: 'GST Registration Guide for Small Businesses',
    description: 'Step-by-step guide covering GST registration requirements and process for small business owners.',
    fileUrl: '/resources/gst-registration-guide.pdf',
    date: '2024-02-20',
    category: 'compliance',
  },
  {
    id: '3',
    title: 'Tax Saving Investment Options Overview',
    description: 'An overview of various tax-saving investment options under Section 80C and other provisions.',
    fileUrl: '/resources/tax-saving-investments.pdf',
    date: '2024-01-10',
    category: 'tax-guide',
  },
]

export const resourcesSection = {
  title: 'Resources',
  subtitle: 'Helpful guides and documents for reference',
  description: 'Download useful resources to help you understand tax and compliance requirements better.',
}

export const resourceCategories = {
  'tax-guide': 'Tax Guides',
  'compliance': 'Compliance',
  'business': 'Business',
  'general': 'General',
}
