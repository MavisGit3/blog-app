

// }import type React from "react"
import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import { ThemeProvider } from "next-themes"
import { Toaster } from "sonner"
import Header from "@/src/components/header"
import Footer from "@/src/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Modern Blog",
    template: "%s | Modern Blog",
  },
  description: "A modern blog built with Next.js 15 and shadcn/ui",
  keywords: ["blog", "nextjs", "react", "typescript"],
  authors: [{ name: "Mavis Ogodu Ayikpo" }],
  creator: "Mavis Ogodu Ayikpo",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourdomain.com",
    title: "Modern Blog",
    description: "A modern blog built with Next.js 15 and shadcn/ui",
    siteName: "Modern Blog",
  },
  twitter: {
    card: "summary_large_image",
    title: "Modern Blog",
    description: "A modern blog built with Next.js 15 and shadcn/ui",
    creator: "@mavisayikpo",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}

