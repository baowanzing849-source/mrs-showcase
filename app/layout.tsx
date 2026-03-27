import './globals.css'
import type { Metadata } from 'next'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'MR.S Showcase',
  description: 'Premium FiveM script portfolio showcase',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="app-shell">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
