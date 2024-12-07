"use client"

import { Card } from "@/components/ui/card"
import { TrendingUp, Users, Activity } from "lucide-react"
import { cn } from "@/lib/utils"
import { FaHashtag } from "react-icons/fa"

const metrics = [
  {
    title: "Total Hashtags",
    value: "156",
    change: "+12%",
    trend: "up",
    icon: FaHashtag,
    description: "Active hashtags being tracked"
  },
  {
    title: "Top Hashtag",
    value: "#travel",
    change: "45K posts",
    trend: "up",
    icon: TrendingUp,
    description: "Most active in the last 24h"
  },
  {
    title: "Audience Reach",
    value: "2.4M",
    change: "+5.2%",
    trend: "up",
    icon: Users,
    description: "Total potential reach"
  },
  {
    title: "Avg. Engagement",
    value: "3.2%",
    change: "-0.4%",
    trend: "down",
    icon: Activity,
    description: "Based on last 100 posts"
  }
]

export function OverviewCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => (
        <Card key={metric.title} className="p-6">
          <div className="flex items-center justify-between">
            <metric.icon className="h-5 w-5 text-muted-foreground" />
            <span className={cn(
              "text-sm font-medium",
              metric.trend === "up" ? "text-green-500" : "text-red-500"
            )}>
              {metric.change}
            </span>
          </div>
          <div className="mt-4">
            <h3 className="text-2xl font-bold">{metric.value}</h3>
            <p className="text-sm font-medium text-muted-foreground">
              {metric.title}
            </p>
          </div>
          <p className="mt-2 text-xs text-muted-foreground">
            {metric.description}
          </p>
        </Card>
      ))}
    </div>
  )
}
