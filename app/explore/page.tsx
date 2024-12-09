"use client"

import { useState } from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Search,
  TrendingUp,
  Hash,
  Users,
  Flame,
  Globe,
  Clock,
  Filter
} from "lucide-react"
import ExploreGrid from "@/components/explore/explore-grid"
import TrendingHashtags from "@/components/explore/trending-hashtags"
import PopularAccounts from "@/components/explore/popular-accounts"

export default function ExplorePage() {
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <div className="flex-1 space-y-8 p-8 pt-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Explore</h1>
          <p className="text-muted-foreground">
            Discover trending hashtags, popular accounts, and viral content
          </p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="flex gap-4 items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search hashtags, accounts, or posts..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Button variant="outline">
          <Filter className="h-4 w-4 mr-2" />
          Filters
        </Button>
      </div>

      {/* Main Content */}
      <Tabs defaultValue="trending" className="space-y-6">
        <TabsList>
          <TabsTrigger value="trending">
            <TrendingUp className="h-4 w-4 mr-2" />
            Trending
          </TabsTrigger>
          <TabsTrigger value="hashtags">
            <Hash className="h-4 w-4 mr-2" />
            Hashtags
          </TabsTrigger>
          <TabsTrigger value="accounts">
            <Users className="h-4 w-4 mr-2" />
            Accounts
          </TabsTrigger>
        </TabsList>

        <TabsContent value="trending" className="space-y-6">
          {/* Trending Overview */}
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Trending Hashtags
                </CardTitle>
                <Flame className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24.8K</div>
                <p className="text-xs text-muted-foreground">
                  +20.1% from last week
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Global Reach
                </CardTitle>
                <Globe className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">142</div>
                <p className="text-xs text-muted-foreground">
                  Countries reached
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Active Now
                </CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1.2M</div>
                <p className="text-xs text-muted-foreground">
                  Users engaging
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Trending Content */}
          <ExploreGrid />
        </TabsContent>

        <TabsContent value="hashtags" className="space-y-6">
          <TrendingHashtags />
        </TabsContent>

        <TabsContent value="accounts" className="space-y-6">
          <PopularAccounts />
        </TabsContent>
      </Tabs>
    </div>
  )
}
