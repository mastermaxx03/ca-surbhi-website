export interface ImportantLink {
  id: string
  title: string
  url: string
  description?: string
}

export const importantLinks: ImportantLink[] = [
  {
    id: '1',
    title: 'UMANG Dashboard',
    url: 'https://web.umang.gov.in/landing/scheme/dashboard',
    description: 'Unified Mobile Application for New-age Governance',
  },
]

export const importantLinksSection = {
  title: 'Important Links',
  emptyMessage: 'Important links will be added here soon.',
}
