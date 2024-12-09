"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { BadgeCheck, TrendingUp, BarChart2 } from "lucide-react"

interface PopularAccount {
  id: string
  username: string
  fullName: string
  profilePicUrl: string
  isVerified: boolean
  followers: number
  engagement: number
  growthRate: number
  category: string
}

// Mock data for demonstration
const mockPopularAccounts: PopularAccount[] = [
  {
    id: "1",
    username: "photography",
    fullName: "Photography Daily",
    profilePicUrl: "https://picsum.photos/50/50",
    isVerified: true,
    followers: 1234567,
    engagement: 4.5,
    growthRate: 12.3,
    category: "Photography"
  },
  {
    id: "2",
    username: "travelblog",
    fullName: "Travel Blog",
    profilePicUrl: "https://picsum.photos/51/51",
    isVerified: true,
    followers: 987654,
    engagement: 5.2,
    growthRate: 8.7,
    category: "Travel"
  },
  // Add more mock accounts...
]

function PopularAccounts() {
  const formatNumber = (num: number): string => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`
    return num.toString()
  }

  return (
    <div className="space-y-6">
      {/* Top Accounts Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {mockPopularAccounts.map((account) => (
          <Card key={account.id} className="group">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-3">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={account.profilePicUrl} />
                  <AvatarFallback>{account.username[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex items-center gap-1">
                    <CardTitle className="text-base">{account.username}</CardTitle>
                    {account.isVerified && (
                      <BadgeCheck className="h-4 w-4 text-blue-500" />
                    )}
                  </div>
                  <CardDescription>{account.fullName}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4 py-4">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Followers</p>
                  <p className="text-lg font-bold">{formatNumber(account.followers)}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Engagement</p>
                  <p className="text-lg font-bold">{account.engagement}%</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Growth</p>
                  <p className="text-lg font-bold text-green-500">+{account.growthRate}%</p>
                </div>
              </div>
              <Button className="w-full mt-2" variant="outline">View Profile</Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Analytics Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Account Analytics</CardTitle>
          <CardDescription>Performance metrics for top accounts</CardDescription>
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
                    <p className="font-medium">Average Growth Rate</p>
                    <p className="text-sm text-muted-foreground">Across all categories</p>
                  </div>
                </div>
                <p className="text-green-500">+15.4%</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <BarChart2 className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Engagement Rate</p>
                    <p className="text-sm text-muted-foreground">Average interaction</p>
                  </div>
                </div>
                <p className="text-primary">4.8%</p>
              </div>
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

export default PopularAccounts
