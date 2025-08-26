import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NovaSphere_bqdm',
  description: 'NovaSphere_bqdm is a complete SaaS B2B system for booking services, featuring a dashboard, API, and multiple integrations. It allows businesses to manage their service bookings, payments, and customer relationships in a centralized platform.',
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