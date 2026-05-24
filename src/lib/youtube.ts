export interface YouTubeVideo {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  publishedAt: string;
  viewCount?: string;
}

const CHANNEL_ID = 'YOUR_CHANNEL_ID'; // replace with real channel ID
const API_KEY = import.meta.env.YOUTUBE_API_KEY;

export async function getLatestVideos(maxResults = 6): Promise<YouTubeVideo[]> {
  if (!API_KEY) {
    // Return mock data during development so the site builds without a key
    return getMockVideos(maxResults);
  }

  const url = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet&order=date&maxResults=${maxResults}&type=video`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    if (!data.items) return getMockVideos(maxResults);

    return data.items.map((item: any) => ({
      id: item.id.videoId,
      title: item.snippet.title,
      description: item.snippet.description,
      thumbnail: item.snippet.thumbnails.medium.url,
      publishedAt: item.snippet.publishedAt,
    }));
  } catch (e) {
    console.error('YouTube API fetch failed:', e);
    return getMockVideos(maxResults);
  }
}

function getMockVideos(count: number): YouTubeVideo[] {
  return Array.from({ length: count }, (_, i) => ({
    id: `mock-${i}`,
    title: `Video Title ${i + 1}`,
    description: 'Video description placeholder.',
    thumbnail: `https://picsum.photos/seed/${i}/320/180`,
    publishedAt: new Date().toISOString(),
  }));
}
