import './globals.css'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'

const inter = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Norman Aranez',
  description: 'Norman Aranez Full-stack Developer Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
