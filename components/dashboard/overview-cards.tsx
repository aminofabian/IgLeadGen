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
        <Card 
          key={metric.title} 
          className="group relative p-6 overflow-hidden transition-all duration-500 ease-out hover:shadow-lg"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out" />
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out" />
          <div className="relative">
            <div className="flex items-center justify-between">
              <div className="p-2.5 rounded-xl bg-primary/5 transition-all duration-500 ease-out group-hover:bg-primary/10 group-hover:scale-110">
                <metric.icon className="h-5 w-5 text-primary transition-colors duration-500" />
              </div>
              <span className={cn(
                "text-sm font-medium px-3 py-1 rounded-full transition-all duration-500 ease-out",
                metric.trend === "up" 
                  ? "bg-green-500/5 text-green-500 group-hover:bg-green-500/10" 
                  : "bg-red-500/5 text-red-500 group-hover:bg-red-500/10"
              )}>
                {metric.change}
              </span>
            </div>
            <div className="mt-4 space-y-1.5 transition-transform duration-500 ease-out group-hover:translate-x-1">
              <h3 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                {metric.value}
              </h3>
              <p className="font-medium text-muted-foreground/90">
                {metric.title}
              </p>
            </div>
            <p className="mt-3 text-xs text-muted-foreground/70 transition-all duration-500 ease-out group-hover:text-muted-foreground/90">
              {metric.description}
            </p>
          </div>
        </Card>
      ))}
    </div>
  )
}
