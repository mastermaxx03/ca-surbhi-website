export interface Update {
  id: string
  title: string
  description: string
  date: string
  category: 'tax' | 'compliance' | 'platform' | 'blog' | 'tool'
  link?: string
}

export const updates: Update[] = [
  {
    id: '1',
    title: 'ITR Filing Deadline Extended',
    description: 'The due date for filing ITR for AY 2024-25 has been extended to July 31, 2025.',
    date: '2025-01-15',
    category: 'tax',
  },
  {
    id: '2',
    title: 'New GST Return Format',
    description: 'GSTN introduces simplified return format for small taxpayers effective April 2025.',
    date: '2025-01-12',
    category: 'compliance',
  },
  {
    id: '3',
    title: 'Tax Calculator Updated',
    description: 'Our tax calculator now supports the new tax regime for FY 2025-26.',
    date: '2025-01-10',
    category: 'tool',
    link: '/calculator',
  },
  {
    id: '4',
    title: 'Budget 2025 Analysis',
    description: 'Read our detailed analysis of Union Budget 2025 and its impact on taxpayers.',
    date: '2025-01-08',
    category: 'blog',
    link: '/blogs',
  },
  {
    id: '5',
    title: 'TDS Rate Changes',
    description: 'Updated TDS rates for FY 2025-26 now available in our charts section.',
    date: '2025-01-05',
    category: 'tax',
    link: '/charts',
  },
]

export const updatesSection = {
  title: "What's New",
  emptyMessage: 'Updates coming soon',
}

export const categoryLabels: Record<Update['category'], string> = {
  tax: 'Tax Update',
  compliance: 'Compliance',
  platform: 'Platform',
  blog: 'Blog',
  tool: 'Tool Update',
}
