"use client"

import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search, ArrowUpRight, ArrowDownRight } from "lucide-react"

const hashtagData = [
  {
    hashtag: "#travel",
    posts: "45,231",
    engagement: "4.2%",
    trend: "up",
    change: "+12%",
    peakTime: "2PM EST"
  },
  {
    hashtag: "#food",
    posts: "32,451",
    engagement: "3.8%",
    trend: "up",
    change: "+8%",
    peakTime: "12PM EST"
  },
  {
    hashtag: "#fitness",
    posts: "28,764",
    engagement: "3.1%",
    trend: "down",
    change: "-2%",
    peakTime: "6AM EST"
  },
  {
    hashtag: "#photography",
    posts: "21,987",
    engagement: "3.5%",
    trend: "up",
    change: "+5%",
    peakTime: "3PM EST"
  }
]

export function HashtagPerformance() {
  return (
    <Card>
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg font-medium">Hashtag Performance</h2>
            <p className="text-sm text-muted-foreground">
              Track your hashtag metrics and engagement
            </p>
          </div>
          <div className="relative w-[200px]">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search hashtags..." className="pl-8" />
          </div>
        </div>

        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs uppercase bg-muted/50">
              <tr>
                <th scope="col" className="px-6 py-3">Hashtag</th>
                <th scope="col" className="px-6 py-3 text-right">Total Posts</th>
                <th scope="col" className="px-6 py-3 text-right">Engagement</th>
                <th scope="col" className="px-6 py-3 text-right">Change</th>
                <th scope="col" className="px-6 py-3 text-right">Peak Time</th>
              </tr>
            </thead>
            <tbody>
              {hashtagData.map((row) => (
                <tr key={row.hashtag} className="border-b">
                  <td className="px-6 py-4 font-medium">{row.hashtag}</td>
                  <td className="px-6 py-4 text-right">{row.posts}</td>
                  <td className="px-6 py-4 text-right">{row.engagement}</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end space-x-1">
                      {row.trend === "up" ? (
                        <ArrowUpRight className="h-4 w-4 text-green-500" />
                      ) : (
                        <ArrowDownRight className="h-4 w-4 text-red-500" />
                      )}
                      <span className={row.trend === "up" ? "text-green-500" : "text-red-500"}>
                        {row.change}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">{row.peakTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Card>
  )
}
