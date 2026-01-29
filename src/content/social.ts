export interface SocialPlatform {
  id: string;
  name: string;
  icon:
    | "youtube"
    | "instagram"
    | "telegram"
    | "facebook"
    | "whatsapp"
    | "twitter"
    | "threads";
  followers: string;
  link: string | null;
}

export const socialPlatforms: SocialPlatform[] = [
  {
    id: "instagram",
    name: "Instagram",
    icon: "instagram",
    followers: "800K+",
    link: "https://www.instagram.com/surbhisrivastava08",
  },
  {
    id: "facebook",
    name: "Facebook",
    icon: "facebook",
    followers: "600K+",
    link: "https://www.facebook.com/share/1GjX4nWzni/?mibextid=wwXIfr",
  },
  {
    id: "threads",
    name: "Threads",
    icon: "threads",
    followers: "100K+",
    link: "https://www.threads.com/@surbhisrivastava08?igshid=NTc4MTIwNjQ2YQ==",
  },
  {
    id: "twitter",
    name: "X (Twitter)",
    icon: "twitter",
    followers: "1K+",
    link: "https://x.com/surbhi_bhartiya?s=21",
  },
  {
    id: "youtube",
    name: "YouTube",
    icon: "youtube",
    followers: "1K+",
    link: "https://youtube.com/@casurbhisrivastavabhartiya",
  },
];

export const socialSection = {
  title: "Connect With Us on Social Media",
  buttonText: "Follow",
  comingSoonText: "Coming soon",
};
