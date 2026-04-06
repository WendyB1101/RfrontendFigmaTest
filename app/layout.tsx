import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Choose the plan that works best for you',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
