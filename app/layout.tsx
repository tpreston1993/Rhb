import type { Metadata } from "next"
import { DM_Sans, Playfair_Display, Bebas_Neue } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
})

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
})

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ??
      (process.env.VERCEL_PROJECT_PRODUCTION_URL
        ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
        : "https://rhodeislandbarberexpo.com"),
  ),
  title: "Rhode Island Barber Expo 2026 | Where Culture, Skill, and Community Collide",
  description:
    "Join us October 3-4, 2026 at Bally's Twin River Casino for the Rhode Island Barber Expo. Competitions, education, vendors, and the biggest barber event in Rhode Island.",
  keywords: [
    "barber expo",
    "Rhode Island",
    "barber competition",
    "hair show",
    "barber education",
    "Lincoln RI",
  ],
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "Rhode Island Barber Expo 2026",
    description: "Where Culture, Skill, and Community Collide",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1080,
        height: 1080,
        alt: "Rhode Island Barber Expo Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rhode Island Barber Expo 2026",
    description: "Where Culture, Skill, and Community Collide",
    images: ["/og-image.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body
        className={`${dmSans.variable} ${playfair.variable} ${bebasNeue.variable} font-sans antialiased`}
      >
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
