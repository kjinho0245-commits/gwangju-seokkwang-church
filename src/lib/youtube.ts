import uploadedVideosData from "@/content/data/uploaded-videos.json";
import scriptureMapData from "@/content/data/scripture-map.json";

const YOUTUBE_API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY || "";
const CHANNEL_HANDLE = "@tv-qz2fc";

export interface YouTubeVideo {
  id: string;
  title: string;
  description: string;
  publishedAt: string;
  thumbnail: string;
  scripture?: string;
  category?: "주일오전" | "수요설교";
}

async function getChannelId(): Promise<string | null> {
  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/channels?forHandle=${CHANNEL_HANDLE}&part=id&key=${YOUTUBE_API_KEY}`
  );
  if (!res.ok) return null;
  const data = await res.json();
  return data.items?.[0]?.id || null;
}

async function getUploadsPlaylistId(
  channelId: string
): Promise<string | null> {
  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/channels?id=${channelId}&part=contentDetails&key=${YOUTUBE_API_KEY}`
  );
  if (!res.ok) return null;
  const data = await res.json();
  return (
    data.items?.[0]?.contentDetails?.relatedPlaylists?.uploads || null
  );
}

export function getVideosFromUploadedJson(): YouTubeVideo[] {
  const data = uploadedVideosData as Record<string, string>;
  const scriptureMap = scriptureMapData as Record<string, string>;

  return Object.entries(data)
    .map(([key, videoId]) => {
      const parts = key.split("_");
      const datePart = parts[0];
      const titleParts = parts.slice(1);

      const yy = datePart.slice(0, 2);
      const mm = datePart.slice(2, 4);
      const dd = datePart.slice(4, 6);
      const publishedAt = `20${yy}-${mm}-${dd}T00:00:00Z`;

      const title = titleParts.join(" ");

      const category: "수요설교" | "주일오전" = key.includes("수요") ? "수요설교" : "주일오전";

      return {
        id: videoId,
        title,
        description: "",
        publishedAt,
        thumbnail: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
        scripture: scriptureMap[videoId],
        category,
      };
    })
    .reverse();
}

export async function getLatestVideos(
  maxResults = 6
): Promise<YouTubeVideo[]> {
  if (!YOUTUBE_API_KEY) return [];

  try {
    const channelId = await getChannelId();
    if (!channelId) return [];

    const playlistId = await getUploadsPlaylistId(channelId);
    if (!playlistId) return [];

    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?playlistId=${playlistId}&part=snippet&maxResults=${maxResults}&key=${YOUTUBE_API_KEY}`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return [];

    const data = await res.json();

    return (data.items || []).map(
      (item: {
        snippet: {
          resourceId: { videoId: string };
          title: string;
          description: string;
          publishedAt: string;
          thumbnails: {
            high?: { url: string };
            medium?: { url: string };
            default?: { url: string };
          };
        };
      }) => ({
        id: item.snippet.resourceId.videoId,
        title: item.snippet.title,
        description: item.snippet.description,
        publishedAt: item.snippet.publishedAt,
        thumbnail:
          item.snippet.thumbnails.high?.url ||
          item.snippet.thumbnails.medium?.url ||
          item.snippet.thumbnails.default?.url ||
          "",
      })
    );
  } catch {
    return [];
  }
}
