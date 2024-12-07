"use client"

import { HashtagGrid } from "@/components/dashboard/hashtags/hashtag-grid"
import { AddHashtagDialog } from "@/components/dashboard/hashtags/add-hashtag-dialog"

export default function HashtagsPage() {
  return (
    <div className="flex-1 space-y-8 p-8 pt-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Hashtags</h1>
        <p className="text-muted-foreground">
          Track and analyze your hashtag performance
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-lg border bg-card p-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
              <span className="text-lg font-semibold text-primary">6</span>
            </div>
            <div>
              <p className="text-sm font-medium">Active Hashtags</p>
              <p className="text-xs text-muted-foreground">3 trending up</p>
            </div>
          </div>
        </div>
        <div className="rounded-lg border bg-card p-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
              <span className="text-lg font-semibold text-primary">3.5%</span>
            </div>
            <div>
              <p className="text-sm font-medium">Avg. Engagement</p>
              <p className="text-xs text-muted-foreground">+0.2% from last week</p>
            </div>
          </div>
        </div>
        <div className="rounded-lg border bg-card p-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
              <span className="text-lg font-semibold text-primary">167K</span>
            </div>
            <div>
              <p className="text-sm font-medium">Total Posts</p>
              <p className="text-xs text-muted-foreground">Across all hashtags</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid gap-6">
        <HashtagGrid />
        <AddHashtagDialog />
      </div>
    </div>
  )
}
