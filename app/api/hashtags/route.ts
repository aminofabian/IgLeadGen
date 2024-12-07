import { NextResponse } from 'next/server'

const RAPID_API_KEY = '52655f1cfbmshc28794a26461c71p1a3967jsnc854ec10622d'
const RAPID_API_HOST = 'instagram-scraper-2022.p.rapidapi.com'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const hashtag = searchParams.get('hashtag')

  if (!hashtag) {
    return NextResponse.json({ error: 'Hashtag parameter is required' }, { status: 400 })
  }

  try {
    const response = await fetch(
      `https://instagram-scraper-2022.p.rapidapi.com/ig/hashtag/?hashtag=${hashtag}&nocors=false`,
      {
        headers: {
          'x-rapidapi-key': RAPID_API_KEY,
          'x-rapidapi-host': RAPID_API_HOST,
        },
      }
    )

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error('Error fetching hashtag data:', error)
    return NextResponse.json(
      { error: 'Failed to fetch hashtag data' },
      { status: 500 }
    )
  }
}
