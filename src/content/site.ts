import { SiteConfig, NavItem } from "@/lib/types";

export const siteConfig: SiteConfig = {
  name: "CA Surbhi Srivastava",
  title: "Chartered Accountant",
  description:
    "Professional accounting, taxation, and financial advisory services for individuals and businesses.",
  tagline: "Trusted financial guidance for individuals and businesses",
  email: "contact@casurbhisrivastava.com",
  phone: "+91 98765 43210",
  address: {
    city: "Mumbai",
    state: "Maharashtra",
    country: "India",
  },
  socialLinks: {
    linkedin: "https://linkedin.com/in/casurbhisrivastava",
    twitter: "https://twitter.com/casurbhisrivastava",
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
