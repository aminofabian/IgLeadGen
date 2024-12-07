"use client"

import { ProfileHeader } from "@/components/dashboard/profile/profile-header"
import { ProfileSettings } from "@/components/dashboard/profile/profile-settings"

export default function ProfilePage() {
  return (
    <div className="flex-1 space-y-8 p-8 pt-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Profile</h1>
          <p className="text-muted-foreground">
            Manage your account settings and preferences
          </p>
        </div>
      </div>

      <div className="space-y-8">
        <ProfileHeader />
        <ProfileSettings />
      </div>
    </div>
  )
}