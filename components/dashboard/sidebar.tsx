"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  User,
  Hash,
  BarChart3,
  Flame,
  FileText,
  Settings,
  LogOut
} from "lucide-react"

const navigationItems = {
  general: [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: LayoutDashboard,
      description: "Overview of your hashtag tracking"
    },
    {
      title: "Profile",
      href: "/dashboard/profile",
      icon: User,
      description: "Manage Instagram account settings"
    }
  ],
  features: [
    {
      title: "Hashtags",
      href: "/dashboard/hashtags",
      icon: Hash,
      description: "Track and analyze hashtags"
    },
    {
      title: "Insights",
      href: "/dashboard/insights",
      icon: BarChart3,
      description: "Detailed analytics and reports"
    },
    {
      title: "Trends",
      href: "/dashboard/trends",
      icon: Flame,
      description: "Discover trending hashtags"
    }
  ],
  reports: [
    {
      title: "Reports",
      href: "/dashboard/reports",
      icon: FileText,
      description: "Generate and view reports"
    },
    {
      title: "Settings",
      href: "/dashboard/settings",
      icon: Settings,
      description: "Manage your preferences"
    }
  ]
}

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="flex h-screen flex-col justify-between border-r bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex flex-col">
        {/* Logo */}
        <div className="flex h-16 items-center border-b px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <span className="text-lg font-bold bg-gradient-to-r from-orange-500 to-pink-500 text-transparent bg-clip-text">
              IgLeadGen
            </span>
          </Link>
        </div>

        {/* Navigation Sections */}
        <div className="flex-1 space-y-4 p-4">
          {/* General Section */}
          <div className="space-y-2">
            <h2 className="px-2 text-xs font-semibold text-muted-foreground/80 uppercase tracking-wide">
              General
            </h2>
            <div className="space-y-1">
              {navigationItems.general.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                    pathname === item.href
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-primary/5 hover:text-primary"
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Features Section */}
          <div className="space-y-2">
            <h2 className="px-2 text-xs font-semibold text-muted-foreground/80 uppercase tracking-wide">
              Core Features
            </h2>
            <div className="space-y-1">
              {navigationItems.features.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors group",
                    pathname === item.href
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-primary/5 hover:text-primary"
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.title}</span>
                  {item.title === "Trends" && (
                    <span className="ml-auto text-xs font-medium text-orange-500 group-hover:text-orange-600">
                      New
                    </span>
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Reports Section */}
          <div className="space-y-2">
            <h2 className="px-2 text-xs font-semibold text-muted-foreground/80 uppercase tracking-wide">
              Reports
            </h2>
            <div className="space-y-1">
              {navigationItems.reports.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                    pathname === item.href
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-primary/5 hover:text-primary"
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t p-4">
        <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive">
          <LogOut className="h-4 w-4" />
          Sign Out
        </button>
      </div>
    </div>
  )
}
