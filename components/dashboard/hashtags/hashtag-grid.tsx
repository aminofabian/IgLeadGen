"use client"

import { useState } from "react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import Image from "next/image"
import Link from "next/link"
import {
  AlertCircle,
  Search,
  ArrowUpRight,
  ArrowDownRight,
  Star,
  MoreHorizontal,
  Loader2,
  ChevronLeft,
  ChevronRight,
  Heart,
  MessageCircle,
  Play,
  Eye,
  Calendar,
  Share2,
  Hash,
  ImageIcon,
  TrendingUp,
  Users,
  BadgeCheck,
  ExternalLink
} from "lucide-react"
import { FaHashtag } from "react-icons/fa"

import { AddHashtagButton } from "./add-hashtag-button"

interface ImageVersion {
  width: number;
  height: number;
  url: string;
  scans_profile: string;
  estimated_scans_sizes: number[];
}

interface ImageVersions2 {
  candidates: ImageVersion[];
}

interface InstagramPost {
  id: string;
  code: string;
  taken_at: number;
  media_type: number; // 1 for image, 2 for video, 8 for carousel
  caption_text: string;
  like_count: number;
  comment_count: number;
  video_view_count?: number;
  owner: {
    id: string;
    username: string;
    profile_pic_url: string;
    is_verified: boolean;
    full_name: string;
  };
  image_versions2: ImageVersions2;
  original_width: number;
  original_height: number;
  carousel_media?: InstagramPost[];
  carousel_parent_id?: string;
  product_type?: string;
  permalink: string;
  accessibility_caption?: string;
}

interface HashtagData {
  id: string;
  name: string;
  hashtag_name: string;
  total_posts: number;
  media_count: number;
  edge_hashtag_to_media: {
    count: number;
  };
  edge_hashtag_to_top_posts: {
    count: number;
  };
  posts: InstagramPost[];
  description: string;
  profile_pic_url: string;
  is_following: boolean;
  allow_following: boolean;
}

interface PaginationData {
  page: number;
  limit: number;
  totalPages: number;
  totalItems: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

interface HashtagResponse {
  data: HashtagData;
  status: string;
  message?: string;
  pagination: PaginationData;
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
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [hashtagData, setHashtagData] = useState<HashtagResponse | null>(null)
  const [activeCarouselIndexes, setActiveCarouselIndexes] = useState<{ [key: string]: number }>({})

  const handleCarouselNext = (postId: string, maxLength: number) => {
    setActiveCarouselIndexes(prev => ({
      ...prev,
      [postId]: Math.min((prev[postId] || 0) + 1, maxLength - 1)
    }))
  }

  const handleCarouselPrev = (postId: string) => {
    setActiveCarouselIndexes(prev => ({
      ...prev,
      [postId]: Math.max((prev[postId] || 0) - 1, 0)
    }))
  }

  const fetchHashtagData = async (hashtag: string, page: number = 1) => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch(`/api/hashtags?hashtag=${encodeURIComponent(hashtag)}&page=${page}&limit=9`)
      if (!response.ok) {
        throw new Error('Failed to fetch hashtag data')
      }
      const data = await response.json()
      console.log('Fetched data:', data)
      setHashtagData(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = (e: any) => {
    e.preventDefault()
    if (searchTerm.trim()) {
      setCurrentPage(1)
      fetchHashtagData(searchTerm.trim())
    }
  }

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage)
    if (searchTerm.trim()) {
      fetchHashtagData(searchTerm.trim(), newPage)
    }
  }

  return (
    <div className="space-y-6">
      <form onSubmit={handleSearch} className="flex gap-2">
        <Input
          type="text"
          placeholder="Enter hashtag..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
        <Button type="submit" disabled={loading}>
          {loading ? 'Searching...' : 'Search'}
        </Button>
      </form>

      {error && (
        <div className="rounded-lg bg-destructive/10 p-3 text-sm text-destructive">
          {error}
        </div>
      )}

      {hashtagData && hashtagData.data && (
        <div className="space-y-6">
          {/* Hashtag Overview Card */}
          <Card>
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <FaHashtag className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-2xl font-bold">#{hashtagData.data.hashtag_name}</h2>
                  </div>
                  <p className="text-muted-foreground mt-1">
                    {hashtagData.data.description || `${hashtagData.data.total_posts} posts`}
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
                <Button variant="default" size="sm">
                  Add to Tracking
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-6 mt-6">
              <Card className="p-4">
                <h3 className="text-sm font-medium text-muted-foreground">Total Posts</h3>
                <p className="text-2xl font-bold mt-1">{hashtagData.data.total_posts}</p>
              </Card>
              <Card className="p-4">
                <h3 className="text-sm font-medium text-muted-foreground">Top Posts</h3>
                <p className="text-2xl font-bold mt-1">
                  {hashtagData.data.edge_hashtag_to_top_posts?.count || 0}
                </p>
              </Card>
              <Card className="p-4">
                <h3 className="text-sm font-medium text-muted-foreground">Following</h3>
                <p className="text-2xl font-bold mt-1">
                  {hashtagData.data.is_following ? 'Yes' : 'No'}
                </p>
              </Card>
              <Card className="p-4">
                <h3 className="text-sm font-medium text-muted-foreground">Allow Following</h3>
                <p className="text-2xl font-bold mt-1">
                  {hashtagData.data.allow_following ? 'Yes' : 'No'}
                </p>
              </Card>
            </div>
          </Card>

          {/* Posts Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {hashtagData.data.posts.map((post) => (
              <Card key={post.id} className="overflow-hidden">
                {/* Post Header */}
                <CardHeader className="p-4">
                  <div className="flex items-center gap-2">
                    <Avatar>
                      <AvatarImage src={post.owner.profile_pic_url} />
                      <AvatarFallback>{post.owner.username[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-1">
                        <span className="font-medium">{post.owner.username}</span>
                        {post.owner.is_verified && (
                          <BadgeCheck className="h-4 w-4 text-blue-500" />
                        )}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {new Date(post.taken_at * 1000).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <div className="relative aspect-[4/5]">
                  {post.media_type === 8 && post.carousel_media && post.carousel_media.length > 0 ? (
                    // Carousel display
                    <div className="relative w-full h-full">
                      <div className="absolute inset-0">
                        {post.carousel_media[activeCarouselIndexes[post.id] || 0]?.image_versions2?.candidates[0]?.url && (
                          <img
                            src={post.carousel_media[activeCarouselIndexes[post.id] || 0].image_versions2.candidates[0].url}
                            alt={post.accessibility_caption || 'Instagram carousel'}
                            className="w-full h-full object-cover"
                          />
                        )}
                      </div>
                      {post.carousel_media && post.carousel_media.length > 1 && (
                        <>
                          <button
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 rounded-full p-2 text-white"
                            onClick={() => handleCarouselPrev(post.id)}
                            disabled={activeCarouselIndexes[post.id] === 0}
                          >
                            <ChevronLeft className="h-4 w-4" />
                          </button>
                          <button
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 rounded-full p-2 text-white"
                            onClick={() => handleCarouselNext(post.id, post.carousel_media!.length)}
                            disabled={activeCarouselIndexes[post.id] === post.carousel_media!.length - 1}
                          >
                            <ChevronRight className="h-4 w-4" />
                          </button>
                          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                            {post.carousel_media && post.carousel_media.map((_, index) => (
                              <div
                                key={index}
                                className={`w-1.5 h-1.5 rounded-full ${
                                  index === (activeCarouselIndexes[post.id] || 0)
                                    ? 'bg-white'
                                    : 'bg-white/50'
                                }`}
                              />
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  ) : (
                    // Single image/video display
                    <div className="relative w-full h-full">
                      <img
                        src={post.image_versions2?.candidates[0]?.url}
                        alt={post.accessibility_caption || 'Instagram post'}
                        className="w-full h-full object-cover"
                      />
                      {post.media_type === 2 && (
                        <div className="absolute top-2 right-2 bg-black/50 rounded-full p-2">
                          <Play className="h-4 w-4 text-white" />
                        </div>
                      )}
                    </div>
                  )}
                </div>

                <CardContent className="p-4">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="flex items-center gap-1">
                      <Heart className="h-4 w-4 opacity-70" />
                      <span className="text-sm">{post.like_count}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="h-4 w-4 opacity-70" />
                      <span className="text-sm">{post.comment_count}</span>
                    </div>
                    {post.video_view_count && (
                      <div className="flex items-center gap-1">
                        <Eye className="h-4 w-4 opacity-70" />
                        <span className="text-sm">{post.video_view_count}</span>
                      </div>
                    )}
                    <Link
                      href={post.permalink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-auto"
                    >
                      <ExternalLink className="h-4 w-4 opacity-70" />
                    </Link>
                  </div>

                  {post.caption_text && (
                    <p className="text-sm line-clamp-3">{post.caption_text}</p>
                  )}

                  <div className="mt-2 text-xs text-muted-foreground">
                    <div>
                      Size: {post.original_width}x{post.original_height}
                    </div>
                    {post.media_type === 8 && (
                      <div>
                        Carousel: {activeCarouselIndexes[post.id] + 1} of {post.carousel_media?.length}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          {hashtagData.pagination && (
            <div className="flex items-center justify-center gap-2 mt-6">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={!hashtagData.pagination.hasPrevPage || loading}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              
              <div className="flex items-center gap-2">
                {Array.from({ length: hashtagData.pagination.totalPages }, (_, i) => i + 1)
                  .filter(page => {
                    const diff = Math.abs(page - currentPage);
                    return diff === 0 || diff === 1 || page === 1 || page === hashtagData.pagination.totalPages;
                  })
                  .map((page, index, array) => (
                    <>
                      {index > 0 && array[index - 1] !== page - 1 && (
                        <span key={`ellipsis-${page}`} className="px-2">...</span>
                      )}
                      <Button
                        key={page}
                        variant={currentPage === page ? "default" : "outline"}
                        size="sm"
                        onClick={() => handlePageChange(page)}
                        disabled={loading}
                      >
                        {page}
                      </Button>
                    </>
                  ))}
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={!hashtagData.pagination.hasNextPage || loading}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
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
  )
}

function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M'
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K'
  }
  return num.toString()
}

function formatDate(timestamp: number): string {
  const date = new Date(timestamp * 1000)
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(date)
}
