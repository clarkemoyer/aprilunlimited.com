import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://aprilunlimited.com'),
  title: {
    default: 'April Unlimited | Coming Soon',
    template: '%s | April Unlimited',
  },
  description: 'A creative and professional web presence is being prepared.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: 'https://aprilunlimited.com/',
    siteName: 'April Unlimited',
    title: 'April Unlimited | Coming Soon',
    description: 'A creative and professional web presence is being prepared.',
  },
  twitter: {
    card: 'summary',
    title: 'April Unlimited | Coming Soon',
    description: 'A creative and professional web presence is being prepared.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
