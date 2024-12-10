"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { FaCamera } from "react-icons/fa"
import Image from 'next/image'

export function ProfileHeader() {
  return (
    <Card className="relative overflow-hidden group">
      {/* Cover Image */}
      <div className="h-48 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 relative">
        <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 bg-black/20 hover:bg-black/40 backdrop-blur-sm text-white transition-all duration-300 hover:scale-105"
        >
          <FaCamera className="h-4 w-4" />
        </Button>
      </div>

      {/* Profile Info */}
      <div className="p-8">
        <div className="flex flex-col items-center -mt-20 mb-6">
          <div className="relative group/avatar">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full blur opacity-70 group-hover/avatar:opacity-100 transition duration-500"></div>
            <div className="relative">
              <Image
                src="/avatars/user.jpg"
                alt="Profile"
                width={128}
                height={128}
                className="rounded-full border-4 border-background transition-transform duration-500 group-hover/avatar:scale-105"
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute bottom-0 right-0 bg-black/20 hover:bg-black/40 backdrop-blur-sm text-white rounded-full transition-all duration-300 hover:scale-110"
              >
                <FaCamera className="h-3 w-3" />
              </Button>
            </div>
          </div>
          <h1 className="text-2xl font-bold mt-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">John Doe</h1>
          <p className="text-muted-foreground/80">@johndoe</p>
        </div>

        <div className="flex justify-center gap-12 border-t pt-6">
          <div className="text-center group/stat transition-all duration-300 hover:-translate-y-0.5">
            <p className="text-2xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">156</p>
            <p className="text-sm font-medium text-muted-foreground/80 group-hover/stat:text-muted-foreground/90 transition-colors duration-300">Hashtags</p>
          </div>
          <div className="text-center group/stat transition-all duration-300 hover:-translate-y-0.5">
            <p className="text-2xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">2.4M</p>
            <p className="text-sm font-medium text-muted-foreground/80 group-hover/stat:text-muted-foreground/90 transition-colors duration-300">Reach</p>
          </div>
          <div className="text-center group/stat transition-all duration-300 hover:-translate-y-0.5">
            <p className="text-2xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">3.2%</p>
            <p className="text-sm font-medium text-muted-foreground/80 group-hover/stat:text-muted-foreground/90 transition-colors duration-300">Engagement</p>
          </div>
        </div>
      </div>
    </Card>
  )
}
