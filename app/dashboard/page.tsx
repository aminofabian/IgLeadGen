"use client"

import { DashboardHeader } from "@/components/dashboard/header"
import { OverviewCards } from "@/components/dashboard/overview-cards"
import { HashtagPerformance } from "@/components/dashboard/hashtag-performance"
import { RecentActivity } from "@/components/dashboard/recent-activity"
import { QuickActions } from "@/components/dashboard/quick-actions"

export default function Dashboard() {
  return (
    <div className="flex-1 space-y-8 p-8 pt-6">
      <DashboardHeader />
      
      <div className="space-y-8">
        {/* Overview Cards */}
        <OverviewCards />

        {/* Quick Actions */}
        <QuickActions />

        {/* Main Content Grid */}
        <div className="grid gap-8 md:grid-cols-7">
          {/* Hashtag Performance (Wider) */}
          <div className="md:col-span-5">
            <HashtagPerformance />
          </div>

          {/* Recent Activity (Narrower) */}
          <div className="md:col-span-2">
            <RecentActivity />
          </div>
        </div>
      </div>
    </div>
  )
}