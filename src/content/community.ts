export interface CommunityOption {
  id: string
  title: string
  description: string
  audience: string[]
  whatsappLink: string | null
  icon: 'employees' | 'employers'
}

export const communityOptions: CommunityOption[] = [
  {
    id: 'employees',
    title: 'Employees Community',
    description: 'Connect with fellow employees, students, and salaried professionals to discuss tax planning, career advice, and financial tips.',
    audience: ['Salaried individuals', 'Students', 'Job seekers', 'Young professionals'],
    whatsappLink: null, // Add WhatsApp channel link here
    icon: 'employees',
  },
  {
    id: 'employers',
    title: 'Employers Community',
    description: 'Join business owners, entrepreneurs, and HR professionals to discuss compliance, business finance, and employer obligations.',
    audience: ['Business owners', 'Employers', 'HR professionals', 'Entrepreneurs'],
    whatsappLink: null, // Add WhatsApp channel link here
    icon: 'employers',
  },
]

export const communityPage = {
  title: 'Join Our Community',
  subtitle: 'Connect with like-minded individuals and stay updated on tax and finance matters',
  emptyLinkMessage: 'Community links will be available shortly',
  buttonText: 'Join WhatsApp Channel',
  comingSoonText: 'Coming Soon',
}
