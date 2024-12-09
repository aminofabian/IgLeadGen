"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Users, ArrowUpRight } from "lucide-react"
import Link from "next/link"

interface TrendingHashtag {
  id: string
  name: string
  postCount: number
  engagement: number
  growthRate: number
  category: string
}

// Mock data for demonstration
const mockTrendingHashtags: TrendingHashtag[] = [
  {
    id: "1",
    name: "photography",
    postCount: 1234567,
    engagement: 89,
    growthRate: 23.4,
    category: "Art & Photography"
  },
  {
    id: "2",
    name: "nature",
    postCount: 987654,
    engagement: 92,
    growthRate: 15.7,
    category: "Nature & Travel"
  },
  // Add more mock hashtags...
]

function TrendingHashtags() {
  const formatNumber = (num: number): string => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`
    return num.toString()
  }

  return (
    <div className="space-y-6">
      {/* Top Trending */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {mockTrendingHashtags.map((hashtag) => (
          <Card key={hashtag.id} className="group hover:shadow-lg transition-shadow">
            <Link href={`/hashtags/${hashtag.name}`}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <CardTitle className="text-xl">#{hashtag.name}</CardTitle>
                    <CardDescription>{hashtag.category}</CardDescription>
                  </div>
                  <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Posts</p>
                    <p className="text-2xl font-bold">{formatNumber(hashtag.postCount)}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Growth</p>
                    <p className="text-2xl font-bold text-green-500">+{hashtag.growthRate}%</p>
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Engagement Rate</span>
                    <span className="text-sm font-medium">{hashtag.engagement}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary"
                      style={{ width: `${hashtag.engagement}%` }}
                    />
                  </div>
                </div>
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>

      {/* Trending Categories */}
      <Card>
        <CardHeader>
          <CardTitle>Trending Categories</CardTitle>
          <CardDescription>Most popular hashtag categories this week</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <TrendingUp className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Art & Photography</p>
                    <p className="text-sm text-muted-foreground">2.3M posts</p>
                  </div>
                </div>
                <p className="text-green-500">+12.4%</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <Users className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Nature & Travel</p>
                    <p className="text-sm text-muted-foreground">1.8M posts</p>
                  </div>
                </div>
                <p className="text-green-500">+8.7%</p>
              </div>
              {/* Add more categories */}
            </div>
            
            <div className="relative h-[200px] bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg">
              {/* Add a chart or visualization here */}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default TrendingHashtags
