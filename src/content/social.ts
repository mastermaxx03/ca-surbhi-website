export interface SocialPlatform {
  id: string
  name: string
  icon: 'youtube' | 'instagram' | 'telegram' | 'facebook' | 'whatsapp' | 'twitter'
  followers: string
  link: string | null
}

export const socialPlatforms: SocialPlatform[] = [
  {
    id: 'youtube',
    name: 'YouTube',
    icon: 'youtube',
    followers: '10K+',
    link: null, // Add YouTube channel link here
  },
  {
    id: 'instagram',
    name: 'Instagram',
    icon: 'instagram',
    followers: '5K+',
    link: null, // Add Instagram profile link here
  },
  {
    id: 'telegram',
    name: 'Telegram',
    icon: 'telegram',
    followers: '2K+',
    link: null, // Add Telegram channel link here
  },
  {
    id: 'facebook',
    name: 'Facebook',
    icon: 'facebook',
    followers: '8K+',
    link: null, // Add Facebook page link here
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp',
    icon: 'whatsapp',
    followers: '3K+',
    link: null, // Add WhatsApp channel link here
  },
  {
    id: 'twitter',
    name: 'Twitter (X)',
    icon: 'twitter',
    followers: '4K+',
    link: null, // Add Twitter profile link here
  },
]

export const socialSection = {
  title: 'Connect Us On Social Media',
  buttonText: 'Click to Join',
  comingSoonText: 'Coming soon',
}
