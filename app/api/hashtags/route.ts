import { NextResponse } from 'next/server'

const RAPID_API_KEY = '52655f1cfbmshc28794a26461c71p1a3967jsnc854ec10622d'
const RAPID_API_HOST = 'instagram-scraper-2022.p.rapidapi.com'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const hashtag = searchParams.get('hashtag')
  const page = parseInt(searchParams.get('page') || '1')
  const limit = parseInt(searchParams.get('limit') || '9')

  if (!hashtag) {
    return NextResponse.json({ 
      status: 'error',
      message: 'Hashtag parameter is required' 
    }, { status: 400 })
  }

  try {
    console.log('Fetching hashtag data for:', hashtag)
    
    const response = await fetch(
      `https://instagram-scraper-2022.p.rapidapi.com/ig/hashtag/?hashtag=${encodeURIComponent(hashtag)}`,
      {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': RAPID_API_KEY,
          'X-RapidAPI-Host': RAPID_API_HOST,
          'Accept': 'application/json'
        },
        cache: 'no-store'
      }
    )

    console.log('Response status:', response.status)
    
    if (!response.ok) {
      const errorText = await response.text()
      console.error('API Error Response:', errorText)
      throw new Error(`API request failed with status ${response.status}`)
    }

    const rawData = await response.json()
    console.log('Raw API response:', JSON.stringify(rawData, null, 2))

    // Extract posts from the correct path in the response
    const posts = rawData.hashtag?.media?.data || []
    const totalPosts = posts.length
    
    console.log('Number of posts found:', totalPosts)
    console.log('First post sample:', posts[0])
    
    // Calculate pagination
    const startIndex = (page - 1) * limit
    const endIndex = startIndex + limit
    const paginatedPosts = posts.slice(startIndex, endIndex)
    const totalPages = Math.ceil(totalPosts / limit)

    // Transform the data to match our interface
    const transformedData = {
      status: 'success',
      data: {
        id: hashtag,
        name: hashtag,
        hashtag_name: hashtag,
        total_posts: totalPosts,
        media_count: rawData.hashtag?.media_count || totalPosts,
        edge_hashtag_to_media: {
          count: rawData.hashtag?.media_count || totalPosts
        },
        edge_hashtag_to_top_posts: {
          count: rawData.hashtag?.top_posts?.length || 0
        },
        posts: paginatedPosts.map((post: any) => ({
          id: post.id || '',
          code: post.shortcode || '',
          taken_at_timestamp: post.taken_at || Math.floor(Date.now() / 1000),
          media_preview: post.media_preview || '',
          media_type: post.media_type || 'image',
          thumbnail_src: post.thumbnail_src || post.display_url || '',
          display_url: post.display_url || post.thumbnail_src || '',
          video_url: post.video_url,
          is_video: post.is_video || false,
          caption_text: post.caption?.text || '',
          like_count: post.like_count || 0,
          comment_count: post.comment_count || 0,
          video_view_count: post.video_view_count,
          owner: {
            id: post.owner?.id || '',
            username: post.owner?.username || 'anonymous',
            profile_pic_url: post.owner?.profile_pic_url || '',
            is_verified: post.owner?.is_verified || false,
            full_name: post.owner?.full_name || ''
          },
          accessibility_caption: post.accessibility_caption,
          shortcode: post.shortcode || '',
          permalink: `https://www.instagram.com/p/${post.shortcode}` || ''
        })),
        description: rawData.hashtag?.description || '',
        profile_pic_url: rawData.hashtag?.profile_pic_url || '',
        is_following: rawData.hashtag?.is_following || false,
        allow_following: rawData.hashtag?.allow_following || false
      },
      pagination: {
        page,
        limit,
        totalPages,
        totalItems: totalPosts,
        hasNextPage: page < totalPages,
        hasPrevPage: page > 1
      }
    }

    console.log('Transformed data sample:', {
      ...transformedData,
      data: {
        ...transformedData.data,
        posts: transformedData.data.posts.slice(0, 1) // Log only first post for brevity
      }
    })

    return NextResponse.json(transformedData)

  } catch (error) {
    console.error('Error details:', error)
    return NextResponse.json({
      status: 'error',
      message: error instanceof Error ? error.message : 'Failed to fetch hashtag data'
    }, { 
      status: 500 
    })
  }
}
