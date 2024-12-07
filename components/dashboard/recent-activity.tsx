"use client"

import { Card } from "@/components/ui/card"
import { TrendingUp, PlusCircle } from "lucide-react"
import { FaHashtag } from "react-icons/fa"

const activities = [
  {
    id: 1,
    type: "new_hashtag",
    content: "You added #summer2024",
    timestamp: "2 minutes ago",
    icon: PlusCircle
  },
  {
    id: 2,
    type: "milestone",
    content: "#travel hit 10,000 posts this week!",
    timestamp: "1 hour ago",
    icon: TrendingUp
  },
  {
    id: 3,
    type: "trend",
    content: "#photography is trending in your niche",
    timestamp: "2 hours ago",
    icon: FaHashtag
  },
  {
    id: 4,
    type: "new_hashtag",
    content: "You added #foodie",
    timestamp: "5 hours ago",
    icon: PlusCircle
  }
]

export function RecentActivity() {
  return (
    <Card>
      <div className="p-6">
        <h2 className="text-lg font-medium mb-4">Recent Activity</h2>
        <div className="h-[300px] overflow-y-auto pr-2">
          <div className="space-y-4">
            {activities.map((activity) => (
              <div
                key={activity.id}
                className="flex items-start space-x-3 text-sm"
              >
                <div className="mt-0.5">
                  <activity.icon className="h-5 w-5 text-muted-foreground" />
                </div>
                <div className="flex-1 space-y-1">
                  <p>{activity.content}</p>
                  <p className="text-xs text-muted-foreground">
                    {activity.timestamp}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  )
}
