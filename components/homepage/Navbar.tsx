"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { cn } from "@/lib/utils"
import { Home, Search, BarChart2, User, Menu } from 'lucide-react'
import { usePathname } from 'next/navigation'

const menuItems = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Explore', href: '/explore', icon: Search },
  { name: 'Analytics', href: '/analytics', icon: BarChart2 },
  { name: 'Profile', href: '/profile', icon: User },
]

export function Navbar() {
  const pathname = usePathname()

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-0 w-full z-50">
        <div className="relative">
          {/* Navbar Pattern Background */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
            <div className="absolute inset-0 bg-[linear-gradient(45deg,var(--primary)_0.5px,transparent_0.5px)] bg-[length:16px_16px] opacity-[0.02]" />
            <div className="absolute inset-0">
              <div className="nav-sparkles" />
            </div>
            <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
          </div>

          {/* Navbar Content */}
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-8">
            <div className="container flex items-center justify-between h-16 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="flex items-center gap-6">
                <Link href="/" className="flex items-center space-x-2">
                  <span className="font-bold text-xl bg-gradient-to-r from-orange-500 to-pink-500 text-transparent bg-clip-text">
                    IgLeadGen
                  </span>
                </Link>
                <div className="flex gap-6">
                  {menuItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={cn(
                        "text-sm font-medium transition-colors hover:text-primary",
                        pathname === item.href
                          ? "text-primary"
                          : "text-muted-foreground"
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-4">
                <ModeToggle />
                <Button>Sign In</Button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 h-16 border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="grid h-full grid-cols-4 mx-4">
          {menuItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex flex-col items-center justify-center gap-1 text-[10px] font-medium transition-colors",
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                )}
              >
                <Icon className={cn(
                  "h-5 w-5",
                  isActive ? "text-primary" : "text-muted-foreground"
                )} />
                <span>{item.name}</span>
              </Link>
            )
          })}
        </div>
      </nav>

      {/* Mobile Top Bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 h-16 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-full items-center justify-between px-4">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl bg-gradient-to-r from-orange-500 to-pink-500 text-transparent bg-clip-text">
              IgLeadGen
            </span>
          </Link>
          <div className="flex items-center gap-4">
            <ModeToggle />
          </div>
        </div>
      </div>

      {/* Content Padding for Fixed Navbars */}
      <div className="h-16 md:h-16" />
      <div className="h-16 md:h-0" />
    </>
  )
}