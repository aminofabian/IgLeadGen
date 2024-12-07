import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Outfit } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { SessionProvider } from "next-auth/react"
import { Navbar } from "@/components/homepage/Navbar"
import { cn } from "@/lib/utils"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const outfit = Outfit({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: 'IgLeadGen - AI-Powered Instagram Lead Generation',
  description: 'Transform your Instagram presence with AI-powered lead generation. Reach the right audience, engage authentically, and grow your business.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        "min-h-screen bg-background font-outfit antialiased relative",
        outfit.className
      )}>
        {/* Hashtag Pattern Background */}
        <div className="fixed inset-0 -z-50 overflow-hidden">
          {/* Main grid pattern */}
          <div 
            className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:14px_14px]"
            aria-hidden="true"
          />
          
          {/* Diagonal hashtags */}
          <div className="absolute inset-0" aria-hidden="true">
            <svg className="absolute h-full w-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="hashtag-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                  <path 
                    d="M15 25h30M15 35h30M25 15v30M35 15v30" 
                    stroke="currentColor" 
                    strokeWidth="0.5" 
                    className="text-primary/[0.03] dark:text-primary/[0.02]"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#hashtag-pattern)" transform="rotate(15)" />
            </svg>
          </div>

          {/* Radial gradients */}
          <div className="absolute left-[--left] top-[--top] -z-50 transform-gpu blur-3xl" aria-hidden="true">
            <div
              className="aspect-[1100/800] w-[68.75rem] bg-gradient-to-br from-primary/10 to-primary/5 opacity-20"
              style={{
                clipPath:
                  'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
              }}
            />
          </div>

          {/* Larger hashtags overlay */}
          <div className="absolute inset-0 opacity-[0.02]" aria-hidden="true">
            <svg className="absolute h-full w-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="large-hashtag" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
                  <path 
                    d="M30 50h60M30 70h60M50 30v60M70 30v60" 
                    stroke="currentColor" 
                    strokeWidth="1" 
                    className="text-primary"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#large-hashtag)" transform="rotate(-15)" />
            </svg>
          </div>

          {/* Noise texture overlay */}
          <div 
            className="absolute inset-0 bg-noise-pattern opacity-[0.015] dark:opacity-[0.01]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'repeat',
              backgroundSize: '200px 200px',
            }}
          />
        </div>

        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SessionProvider>
            <Navbar />
            {children}
          </SessionProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
