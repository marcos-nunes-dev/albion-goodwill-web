import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import "./custom-animations.css"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-background antialiased`}>{children}</body>
    </html>
  )
}

