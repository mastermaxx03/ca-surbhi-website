import { SiteConfig, NavItem } from "@/lib/types";

export const siteConfig: SiteConfig = {
  name: "CA Surbhi Srivastava Bhartiya",
  title: "Chartered Accountant | Financial Educator | Social Advocate",
  description:
    "Distinguished Chartered Accountant with over 1 million followers. Trusted voice in finance and social awareness. Finance Head of Karza Mukti Abhiyan and Dharmik Ekta Trust.",
  tagline: "Empowering millions with financial literacy and social awareness",
  email: "contact@casurbhisrivastavabhartiya.com",
  phone: "+91 98765 43210",
  address: {
    city: "India",
    state: "",
    country: "India",
  },
  socialLinks: {
    linkedin: "",
    twitter: "https://x.com/surbhi_bhartiya?s=21",
  },
};

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Blogs", href: "/blogs" },
  { label: "Charts / Models", href: "/charts" },
  { label: "Calculator", href: "/calculator" },
  { label: "Community", href: "/community" },
  { label: "About Us", href: "/about" },
  { label: "FAQ", href: "/faq" },
];

export const disclaimer =
  "This website is for informational purposes only and does not constitute professional advice.";
