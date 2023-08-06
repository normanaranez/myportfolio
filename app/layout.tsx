import { cn } from '@/lib/utils'
import './globals.css'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import NavBar from '@/components/navigation/Navbar'

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
      <body className={cn('flex flex-col w-full', inter.className)}>
        <NavBar />
        <main className="flex relative">
          {children}
        </main>
        {/* <footer>footer</footer> */}
      </body>
    </html>
  )
}
