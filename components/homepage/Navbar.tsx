"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Logo } from "@/components/ui/logo"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"

const routes = [
  {
    label: "Dashboard",
    href: "/dashboard",
  },
  {
    label: "Analytics",
    href: "/analytics",
  },
  {
    label: "Hashtags",
    href: "/hashtags",
  },
]

export function Navbar() {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 fixed top-0 w-full z-50 hidden md:block">
        <div className="container flex h-16 items-center justify-between">
          {/* Left side */}
          <div className="flex items-center gap-x-8">
            <Logo className="scale-[0.85]" />
            
            {/* Main Navigation */}
            <div className="flex items-center gap-x-2">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors hover:text-primary ${
                    pathname === route.href
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:bg-muted"
                  }`}
                >
                  {route.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-x-2">
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-transform dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            <nav className="hidden md:flex items-center space-x-4">
              <Link href="/auth/login">
                <Button variant="ghost" className="text-sm font-medium">
                  Sign In
                </Button>
              </Link>
              <Link href="/auth/register">
                <Button className="bg-primary hover:bg-primary/90">
                  Get Started
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 fixed bottom-0 w-full border-t border-border/40 z-50 md:hidden">
        <div className="container flex h-16 items-center justify-between">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={`flex flex-col items-center gap-y-1 text-sm font-medium transition-colors hover:text-primary ${
                pathname === route.href
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              {route.label}
            </Link>
          ))}
          
          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="sm"
            className="flex flex-col items-center gap-y-1 h-auto"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <div className="relative h-4 w-4">
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-transform dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute inset-0 h-4 w-4 rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100" />
            </div>
            <span className="text-sm font-medium text-muted-foreground">Theme</span>
          </Button>
          <nav className="flex flex-col items-center space-y-2">
            <Link href="/auth/login">
              <Button variant="ghost" className="text-sm font-medium">
                Sign In
              </Button>
            </Link>
            <Link href="/auth/register">
              <Button className="bg-primary hover:bg-primary/90">
                Get Started
              </Button>
            </Link>
          </nav>
        </div>
      </nav>
    </>
  )
}