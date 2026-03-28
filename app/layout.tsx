import './globals.css'
import type { Metadata } from 'next'
import { Noto_Sans_Thai } from 'next/font/google'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { MusicPlayer } from '@/components/MusicPlayer'

const notoSansThai = Noto_Sans_Thai({
  subsets: ['thai'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-thai',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'mrs development │ Welcome',
  description: 'Premium FiveM script showcase',
  icons: {
    icon: [
      { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.png', sizes: '64x64', type: 'image/png' },
    ],
    apple: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={notoSansThai.variable}>
      <body>
        <div className="app-shell">
          <Navbar />
          {children}
          <Footer />
          <MusicPlayer />
        </div>
      </body>
    </html>
  )
}