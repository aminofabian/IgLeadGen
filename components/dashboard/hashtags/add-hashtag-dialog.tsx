"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Plus, Loader2 } from "lucide-react"
import { FaHashtag } from "react-icons/fa"

interface HashtagData {
  id: string;
  name: string;
  media_count: number;
  edge_hashtag_to_media?: {
    count: number;
  };
  edge_hashtag_to_top_posts?: {
    edges: Array<{
      node: {
        edge_liked_by: {
          count: number;
        };
        edge_media_to_comment: {
          count: number;
        };
      };
    }>;
  };
}

interface HashtagResponse {
  data: HashtagData;
  status: string;
  message?: string;
}

export function AddHashtagDialog() {
  const [isOpen, setIsOpen] = useState(false)
  const [hashtag, setHashtag] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [hashtagData, setHashtagData] = useState<HashtagData | null>(null)
  const [error, setError] = useState("")

  const calculateEngagement = (data: HashtagData) => {
    if (!data?.edge_hashtag_to_top_posts?.edges) return "N/A";
    
    const posts = data.edge_hashtag_to_top_posts.edges;
    if (posts.length === 0) return "N/A";

    let totalEngagement = 0;
    let validPosts = 0;

    posts.forEach(post => {
      const likes = post?.node?.edge_liked_by?.count || 0;
      const comments = post?.node?.edge_media_to_comment?.count || 0;
      if (likes > 0 || comments > 0) {
        totalEngagement += likes + comments;
        validPosts++;
      }
    });

    if (validPosts === 0 || !data.media_count) return "N/A";

    const averageEngagement = totalEngagement / validPosts;
    const engagementRate = (averageEngagement / data.media_count) * 100;
    
    return engagementRate < 0.01 ? "<0.01%" : `${engagementRate.toFixed(2)}%`;
  };

  const fetchHashtagData = async () => {
    if (!hashtag) return

    setIsLoading(true)
    setError("")
    setHashtagData(null)

    try {
      const response = await fetch(`/api/hashtags?hashtag=${encodeURIComponent(hashtag)}`)
      const result: HashtagResponse = await response.json()

      if (!response.ok) {
        throw new Error(result.message || 'Failed to fetch hashtag data')
      }

      if (result.status === 'fail') {
        throw new Error(result.message || 'Failed to fetch hashtag data')
      }

      setHashtagData(result.data)
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch hashtag data'
      setError(errorMessage)
    } finally {
      setIsLoading(false)
    }
  }

  if (!isOpen) {
    return (
      <Card className="p-4 border-dashed">
        <Button
          variant="ghost"
          className="h-[200px] w-full border-2 border-dashed border-muted-foreground/20 hover:border-muted-foreground/40"
          onClick={() => setIsOpen(true)}
        >
          <div className="flex flex-col items-center gap-2">
            <Plus className="h-8 w-8" />
            <div className="text-center">
              <p className="font-medium">Add New Hashtag</p>
              <p className="text-sm text-muted-foreground">
                Track a new hashtag&apos;s performance
              </p>
            </div>
          </div>
        </Button>
      </Card>
    )
  }

  return (
    <Card className="p-6">
      <div className="space-y-6">
        <div>
          <h2 className="text-lg font-medium">Add New Hashtag</h2>
          <p className="text-sm text-muted-foreground">
            Enter a hashtag to start tracking its performance
          </p>
        </div>

        <div className="flex gap-2">
          <div className="relative flex-1">
            <FaHashtag className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Enter hashtag (without #)"
              className="pl-9"
              value={hashtag}
              onChange={(e) => setHashtag(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && fetchHashtagData()}
            />
          </div>
          <Button onClick={fetchHashtagData} disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Fetching
              </>
            ) : (
              'Search'
            )}
          </Button>
        </div>

        {error && (
          <div className="rounded-lg bg-destructive/10 p-3 text-sm text-destructive">
            {error}
          </div>
        )}

        {hashtagData && (
          <div className="space-y-4">
            <div className="rounded-lg border bg-card p-4">
              <h3 className="font-medium">Hashtag Statistics</h3>
              <div className="mt-4 grid grid-cols-3 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Media Count</p>
                  <p className="text-lg font-medium">
                    {(hashtagData.media_count || hashtagData.edge_hashtag_to_media?.count || 0).toLocaleString()}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Engagement Rate</p>
                  <p className="text-lg font-medium">
                    {calculateEngagement(hashtagData)}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Top Posts</p>
                  <p className="text-lg font-medium">
                    {hashtagData.edge_hashtag_to_top_posts?.edges.length || 0}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => {
                setIsOpen(false)
                setHashtag("")
                setHashtagData(null)
              }}>
                Cancel
              </Button>
              <Button onClick={() => {
                // Here you would typically save the hashtag to your tracking list
                setIsOpen(false)
                setHashtag("")
                setHashtagData(null)
              }}>
                Start Tracking
              </Button>
            </div>
          </div>
        )}
      </div>
    </Card>
  )
}
