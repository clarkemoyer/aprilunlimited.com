import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://aprilunlimited.com'),
  title: { default: 'Home | April Unlimited', template: '%s | April Unlimited' },
  description: 'April The Yoga Instructor',
  robots: { index: true, follow: true },
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: 'https://aprilunlimited.com/',
    siteName: 'April Unlimited',
    title: 'Home | April Unlimited',
    description: 'April The Yoga Instructor',
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
