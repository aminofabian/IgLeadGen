"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import {
  Heart,
  MessageCircle,
  Play,
  Eye,
  ChevronLeft,
  ChevronRight,
  BadgeCheck,
  ExternalLink
} from "lucide-react"
import Link from "next/link"

interface ImageVersion {
  width: number
  height: number
  url: string
}

interface InstagramPost {
  id: string
  media_type: number
  caption: string
  like_count: number
  comment_count: number
  view_count?: number
  image_versions2: {
    candidates: ImageVersion[]
  }
  owner: {
    username: string
    profile_pic_url: string
    is_verified: boolean
  }
  carousel_media?: {
    image_versions2: {
      candidates: ImageVersion[]
    }
  }[]
  permalink: string
}

// Mock data for demonstration
const mockPosts: InstagramPost[] = [
  {
    id: "1",
    media_type: 1,
    caption: "Beautiful sunset at the beach 🌅 #nature #photography",
    like_count: 1234,
    comment_count: 56,
    image_versions2: {
      candidates: [
        {
          width: 1080,
          height: 1080,
          url: "https://picsum.photos/1080/1080"
        }
      ]
    },
    owner: {
      username: "naturephotography",
      profile_pic_url: "https://picsum.photos/50/50",
      is_verified: true
    },
    permalink: "https://instagram.com/p/123"
  },
  // Add more mock posts...
]

function ExploreGrid() {
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

  const formatNumber = (num: number): string => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`
    return num.toString()
  }

  const renderCarouselContent = (post: InstagramPost) => {
    if (!post.carousel_media || post.carousel_media.length === 0) {
      return null;
    }

    const currentIndex = activeCarouselIndexes[post.id] || 0;
    const currentMedia = post.carousel_media[currentIndex];
    const imageUrl = currentMedia?.image_versions2?.candidates[0]?.url;

    return (
      <div className="relative w-full h-full">
        {imageUrl && (
          <img
            src={imageUrl}
            alt={post.caption}
            className="w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
        {post.carousel_media.length > 1 && (
          <>
            <button
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 rounded-full p-2 text-white opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={() => handleCarouselPrev(post.id)}
              disabled={currentIndex === 0}
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 rounded-full p-2 text-white opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={() => handleCarouselNext(post.id, post.carousel_media?.length ?? 0)}
              disabled={currentIndex === (post.carousel_media?.length ?? 0) - 1}
            >
              <ChevronRight className="h-4 w-4" />
            </button>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
              {post.carousel_media.map((_, index) => (
                <div
                  key={index}
                  className={`w-1.5 h-1.5 rounded-full ${
                    index === currentIndex ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    );
  };

  const renderSingleMedia = (post: InstagramPost) => {
    const imageUrl = post.image_versions2?.candidates[0]?.url;
    return (
      <div className="relative w-full h-full">
        {imageUrl && (
          <img
            src={imageUrl}
            alt={post.caption}
            className="w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
        {post.media_type === 2 && (
          <div className="absolute top-2 right-2 bg-black/50 rounded-full p-2">
            <Play className="h-4 w-4 text-white" />
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {mockPosts.map((post) => (
        <Card key={post.id} className="overflow-hidden group">
          <div className="relative aspect-square">
            {post.media_type === 8 && post.carousel_media ? renderCarouselContent(post) : renderSingleMedia(post)}
          </div>

          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={post.owner.profile_pic_url} />
                  <AvatarFallback>{post.owner.username[0]}</AvatarFallback>
                </Avatar>
                <div className="flex items-center gap-1">
                  <span className="font-medium">{post.owner.username}</span>
                  {post.owner.is_verified && (
                    <BadgeCheck className="h-4 w-4 text-blue-500" />
                  )}
                </div>
              </div>
              <Link
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-4 w-4 text-muted-foreground" />
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Heart className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{formatNumber(post.like_count)}</span>
              </div>
              <div className="flex items-center gap-1">
                <MessageCircle className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{formatNumber(post.comment_count)}</span>
              </div>
              {post.view_count && (
                <div className="flex items-center gap-1">
                  <Eye className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{formatNumber(post.view_count)}</span>
                </div>
              )}
            </div>

            <p className="mt-2 text-sm line-clamp-2">{post.caption}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default ExploreGrid
