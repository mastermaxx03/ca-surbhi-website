import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import { Header, Footer } from '@/components/layout'
import { siteConfig } from '@/content/site'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | ${siteConfig.title}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ['Chartered Accountant', 'CA', 'Tax Planning', 'ITR Filing', 'GST', 'Accounting', 'India'],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: siteConfig.name,
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description: siteConfig.description,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        {/* Netlify Identity Widget - handles invite/recovery tokens */}
        <Script
          src="https://identity.netlify.com/v1/netlify-identity-widget.js"
          strategy="lazyOnload"
        />
        <Script id="netlify-identity-redirect" strategy="lazyOnload">
          {`
            if (window.netlifyIdentity) {
              window.netlifyIdentity.on("init", user => {
                if (!user) {
                  window.netlifyIdentity.on("login", () => {
                    document.location.href = "/admin/";
                  });
                }
              });
            }
          `}
        </Script>
      </body>
    </html>
  )
}
