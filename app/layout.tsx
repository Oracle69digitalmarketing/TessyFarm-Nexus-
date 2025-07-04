import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "TessyFarm Nexus - Unified Agro-Intelligence Platform",
  description:
    "Vertically integrated platform combining AI, fintech, and eco-product branding to drive sustainable agriculture in underserved communities across Nigeria and Africa. Empowering 50,000+ farmers with smart financing, blockchain traceability, and predictive analytics.",
  keywords: [
    "agriculture",
    "fintech",
    "AI",
    "blockchain",
    "Nigeria",
    "Africa",
    "farming",
    "aquaculture",
    "sustainable agriculture",
    "credit scoring",
    "traceability",
    "circular economy",
  ],
  authors: [{ name: "TessyFarm Nexus Team" }],
  creator: "TessyFarm Nexus",
  publisher: "TessyFarm Nexus",
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://tessyfarm-nexus.com",
    title: "TessyFarm Nexus - Unified Agro-Intelligence Platform",
    description:
      "Revolutionizing African agriculture through AI-powered credit scoring, blockchain traceability, and circular economy principles.",
    siteName: "TessyFarm Nexus",
  },
  twitter: {
    card: "summary_large_image",
    title: "TessyFarm Nexus - Unified Agro-Intelligence Platform",
    description:
      "Empowering 50,000+ farmers across Nigeria with smart financing, blockchain traceability, and predictive analytics.",
    creator: "@tessyfarm",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
