"use client"

import { Bell, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from 'next/image'

export function DashboardHeader() {
  return (
    <div className="flex flex-col space-y-4 lg:flex-row lg:items-center lg:justify-between lg:space-y-0">
      {/* Greeting */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight">
          Welcome back, John 👋
        </h1>
        <p className="text-muted-foreground">
          Here&apos;s what&apos;s happening with your hashtags today.
        </p>
      </div>

      {/* Actions */}
      <div className="flex items-center space-x-4">
        {/* Search */}
        <div className="relative w-full md:w-auto">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search hashtags..."
            className="pl-8 w-full md:w-[200px]"
          />
        </div>

        {/* Notifications */}
        <Button variant="outline" size="icon" className="relative">
          <Bell className="h-4 w-4" />
          <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
            3
          </span>
        </Button>

        {/* Profile */}
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Image
            src="/avatars/user.jpg"
            alt="Profile"
            width={32}
            height={32}
            className="rounded-full object-cover"
          />
        </Button>
      </div>
    </div>
  )
}
