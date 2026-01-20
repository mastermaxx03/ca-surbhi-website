export interface SocialPlatform {
  id: string
  name: string
  icon: 'youtube' | 'instagram' | 'telegram' | 'facebook' | 'whatsapp' | 'twitter' | 'threads'
  followers: string
  link: string | null
}

export const socialPlatforms: SocialPlatform[] = [
  {
    id: 'youtube',
    name: 'YouTube',
    icon: 'youtube',
    followers: '1M+',
    link: 'https://youtube.com/@casurbhisrivastavabhartiya',
  },
  {
    id: 'instagram',
    name: 'Instagram',
    icon: 'instagram',
    followers: '500K+',
    link: 'https://www.instagram.com/surbhisrivastava08',
  },
  {
    id: 'facebook',
    name: 'Facebook',
    icon: 'facebook',
    followers: '300K+',
    link: 'https://www.facebook.com/share/1GjX4nWzni/?mibextid=wwXIfr',
  },
  {
    id: 'twitter',
    name: 'X (Twitter)',
    icon: 'twitter',
    followers: '100K+',
    link: 'https://x.com/surbhi_bhartiya?s=21',
  },
  {
    id: 'threads',
    name: 'Threads',
    icon: 'threads',
    followers: '50K+',
    link: 'https://www.threads.com/@surbhisrivastava08?igshid=NTc4MTIwNjQ2YQ==',
  },
]

export const socialSection = {
  title: 'Connect With Us on Social Media',
  buttonText: 'Follow',
  comingSoonText: 'Coming soon',
}
