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
          {/* Layered Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-orange-500/10" />
          <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/5 via-background/50 to-background/80 backdrop-blur-sm" />
          <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_50%)]" />
          
          {/* Navbar Content */}
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-8">
            <div className="container flex items-center justify-between h-16 backdrop-blur-md">
              <div className="flex items-center gap-10">
                <Link 
                  href="/" 
                  className="flex items-center space-x-2 relative group/logo"
                >
                  <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-orange-500/20 rounded-lg blur-md opacity-0 group-hover/logo:opacity-100 transition-opacity duration-500" />
                  <span className="relative font-bold text-xl bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-transparent bg-clip-text transition-all duration-500 group-hover/logo:scale-[1.02]">
                    IgLeadGen
                  </span>
                </Link>
                <div className="flex gap-8">
                  {menuItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={cn(
                        "relative text-sm font-medium transition-all duration-300 group/link hover:-translate-y-0.5",
                        pathname === item.href
                          ? "text-primary"
                          : "text-muted-foreground hover:text-primary"
                      )}
                    >
                      <span className="relative inline-flex items-center">
                        <item.icon className="w-4 h-4 mr-1.5 opacity-70 transition-transform duration-300 group-hover/link:scale-110" />
                        {item.name}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 transition-all duration-300 group-hover/link:w-full" />
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-6">
                <ModeToggle />
                <Button 
                  className="relative overflow-hidden group/button px-6 py-2 transition-all duration-500 hover:shadow-lg hover:shadow-primary/20"
                  variant="default"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 opacity-0 group-hover/button:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent_50%)] opacity-0 group-hover/button:opacity-100 transition-opacity duration-500" />
                  <Link 
                    href="/auth/login" 
                    className="relative inline-flex items-center transition-transform duration-500 group-hover/button:scale-105"
                  >
                    <span>Sign In</span>
                    <div className="ml-2 w-4 h-4 transition-transform duration-500 group-hover/button:translate-x-1">→</div>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 h-16 bg-background/95 backdrop-blur-md">
        <div className="absolute inset-x-0 top-px h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/50" />
        <div className="relative grid h-full grid-cols-4 mx-4">
          {menuItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex flex-col items-center justify-center gap-1.5 text-[10px] font-medium transition-all duration-500 hover:-translate-y-0.5",
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                )}
              >
                <div className={cn(
                  "relative p-2 rounded-xl transition-all duration-500",
                  isActive && "bg-primary/10"
                )}>
                  <Icon className={cn(
                    "h-5 w-5 transition-all duration-500",
                    isActive ? "text-primary scale-110" : "text-muted-foreground"
                  )} />
                </div>
                <span className="transition-colors duration-500">{item.name}</span>
              </Link>
            )
          })}
        </div>
      </nav>

      {/* Mobile Top Bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 h-16 bg-background/95 backdrop-blur-md">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background/50" />
        <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
        <div className="relative flex h-full items-center justify-between px-4">
          <Link href="/" className="flex items-center space-x-2 group/logo">
            <span className="font-bold text-xl bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-transparent bg-clip-text transition-transform duration-500 group-hover/logo:scale-105">
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