"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, ArrowUpRight, ArrowDownRight, Star, MoreHorizontal, Loader2 } from "lucide-react"
import { FaHashtag } from "react-icons/fa"

interface HashtagData {
  id: string;
  name: string;
  media_count: number;
  search_result_subtitle?: string;
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

const mockHashtagData = [
  {
    id: 1,
    name: "#travel",
    category: "Travel",
    posts: "45,231",
    engagement: "4.2%",
    trend: "up",
    change: "+12%",
    reachability: "High",
    starred: true
  },
  {
    id: 2,
    name: "#photography",
    category: "Art",
    posts: "32,451",
    engagement: "3.8%",
    trend: "up",
    change: "+8%",
    reachability: "Medium",
    starred: true
  },
  {
    id: 3,
    name: "#foodie",
    category: "Food",
    posts: "28,764",
    engagement: "3.1%",
    trend: "down",
    change: "-2%",
    reachability: "High",
    starred: false
  },
  {
    id: 4,
    name: "#fitness",
    category: "Health",
    posts: "21,987",
    engagement: "3.5%",
    trend: "up",
    change: "+5%",
    reachability: "Medium",
    starred: false
  },
  {
    id: 5,
    name: "#nature",
    category: "Travel",
    posts: "19,876",
    engagement: "4.0%",
    trend: "up",
    change: "+7%",
    reachability: "High",
    starred: true
  },
  {
    id: 6,
    name: "#fashion",
    category: "Fashion",
    posts: "18,543",
    engagement: "3.7%",
    trend: "down",
    change: "-1%",
    reachability: "Medium",
    starred: false
  }
]

export function HashtagGrid() {
  const [searchTerm, setSearchTerm] = useState("")
  const [isSearching, setIsSearching] = useState(false)
  const [searchResult, setSearchResult] = useState<HashtagData | null>(null)
  const [error, setError] = useState("")

  const calculateEngagement = (data: HashtagData) => {
    if (!data.edge_hashtag_to_top_posts?.edges) return "N/A";
    
    const posts = data.edge_hashtag_to_top_posts.edges;
    if (posts.length === 0) return "N/A";

    const totalEngagement = posts.reduce((sum, post) => {
      const likes = post.node.edge_liked_by.count || 0;
      const comments = post.node.edge_media_to_comment.count || 0;
      return sum + likes + comments;
    }, 0);

    const averageEngagement = totalEngagement / posts.length;
    const engagementRate = (averageEngagement / data.media_count) * 100;
    
    return `${engagementRate.toFixed(2)}%`;
  };

  const handleSearch = async () => {
    if (!searchTerm) return;

    setIsSearching(true);
    setError("");
    setSearchResult(null);

    try {
      const response = await fetch(`/api/hashtags?hashtag=${encodeURIComponent(searchTerm)}`);
      const result: HashtagResponse = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Failed to fetch hashtag data');
      }

      if (result.status === 'fail') {
        throw new Error(result.message || 'Failed to fetch hashtag data');
      }

      setSearchResult(result.data);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch hashtag data';
      setError(errorMessage);
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <div className="space-y-4">
      {/* Search and Filters */}
      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search hashtags..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          />
        </div>
        <Button 
          onClick={handleSearch} 
          disabled={isSearching}
        >
          {isSearching ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Searching
            </>
          ) : (
            'Search'
          )}
        </Button>
        <Button variant="outline">Category ▼</Button>
        <Button variant="outline">Sort By ▼</Button>
      </div>

      {/* Search Results */}
      {error && (
        <div className="rounded-lg bg-destructive/10 p-3 text-sm text-destructive">
          {error}
        </div>
      )}

      {searchResult && (
        <Card className="p-4 mb-6">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                <FaHashtag className="h-4 w-4 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">#{searchResult.name || searchTerm}</h3>
                <p className="text-sm text-muted-foreground">
                  {searchResult.search_result_subtitle || 'Search Result'}
                </p>
              </div>
            </div>
            <Button variant="outline" size="sm">
              Add to Tracking
            </Button>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Media Count</p>
              <p className="text-lg font-medium">
                {(searchResult.media_count || searchResult.edge_hashtag_to_media?.count || 0).toLocaleString()}
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Engagement Rate</p>
              <p className="text-lg font-medium">
                {calculateEngagement(searchResult)}
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Top Posts</p>
              <p className="text-lg font-medium">
                {searchResult.edge_hashtag_to_top_posts?.edges.length || 0}
              </p>
            </div>
          </div>
        </Card>
      )}

      {/* Existing Hashtags Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {mockHashtagData.map((hashtag) => (
          <Card key={hashtag.id} className="p-4">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                  <FaHashtag className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">{hashtag.name}</h3>
                  <p className="text-sm text-muted-foreground">{hashtag.category}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {hashtag.starred && (
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                )}
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Posts</p>
                <p className="text-lg font-medium">{hashtag.posts}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Engagement</p>
                <p className="text-lg font-medium">{hashtag.engagement}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Trend</p>
                <div className="flex items-center gap-1">
                  {hashtag.trend === "up" ? (
                    <ArrowUpRight className="h-4 w-4 text-green-500" />
                  ) : (
                    <ArrowDownRight className="h-4 w-4 text-red-500" />
                  )}
                  <span className={hashtag.trend === "up" ? "text-green-500" : "text-red-500"}>
                    {hashtag.change}
                  </span>
                </div>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Reachability</p>
                <p className="text-lg font-medium">{hashtag.reachability}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
