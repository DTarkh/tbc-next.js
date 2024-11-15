import "./globals.css"
import type { Metadata } from 'next'
import { Inter, SUSE } from 'next/font/google'


const suse = SUSE({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'shop sphere',
  description: 'online store',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={suse.className}>
        {children}
        </body>
    </html>
  )
}
