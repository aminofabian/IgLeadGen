"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { FaCamera } from "react-icons/fa"
import Image from 'next/image'

export function ProfileHeader() {
  return (
    <Card className="relative">
      {/* Cover Image */}
      <div className="h-48 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 bg-black/20 hover:bg-black/40 text-white"
        >
          <FaCamera className="h-4 w-4" />
        </Button>
      </div>

      {/* Profile Info */}
      <div className="p-6">
        <div className="flex flex-col items-center -mt-20 mb-4">
          <div className="relative">
            <Image
              src="/avatars/user.jpg"
              alt="Profile"
              width={128}
              height={128}
              className="rounded-full border-4 border-background"
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute bottom-0 right-0 bg-black/20 hover:bg-black/40 text-white rounded-full"
            >
              <FaCamera className="h-3 w-3" />
            </Button>
          </div>
          <h1 className="text-2xl font-bold mt-4">John Doe</h1>
          <p className="text-muted-foreground">@johndoe</p>
        </div>

        <div className="flex justify-center gap-8 border-t pt-4">
          <div className="text-center">
            <p className="text-2xl font-bold">156</p>
            <p className="text-sm text-muted-foreground">Hashtags</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold">2.4M</p>
            <p className="text-sm text-muted-foreground">Reach</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold">3.2%</p>
            <p className="text-sm text-muted-foreground">Engagement</p>
          </div>
        </div>
      </div>
    </Card>
  )
}
