"use client";

import { useState } from "react";
import { Search, Play, Calendar } from "lucide-react";
import type { YouTubeVideo } from "@/lib/youtube";
import type { Sermon } from "@/content/data/sermons";
import Image from "next/image";

interface Props {
  videos: YouTubeVideo[];
  fallbackSermons: Sermon[];
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}.${String(d.getDate()).padStart(2, "0")}`;
}

const gradients = [
  "from-[#C46E4E]/25 via-[#B8860B]/10 to-[#2C2416]/30",
  "from-[#2C2416]/35 via-[#6B7B3A]/15 to-[#C46E4E]/20",
  "from-[#6B7B3A]/25 via-[#C46E4E]/10 to-[#B8860B]/25",
  "from-[#B8860B]/20 via-[#2C2416]/15 to-[#6B7B3A]/25",
  "from-[#2C2416]/30 via-[#B8860B]/15 to-[#C46E4E]/25",
  "from-[#C46E4E]/20 via-[#6B7B3A]/15 to-[#2C2416]/25",
] as const;

export default function YouTubeSermonList({ videos, fallbackSermons }: Props) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const hasVideos = videos.length > 0;

  const filteredVideos = videos.filter(
    (v) =>
      searchQuery === "" ||
      v.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredFallback = fallbackSermons.filter(
    (s) =>
      searchQuery === "" ||
      s.title.includes(searchQuery) ||
      s.preacher.includes(searchQuery) ||
      s.scripture.includes(searchQuery)
  );

  return (
    <div>
      <div className="mb-8">
        <div className="relative">
          <Search
            className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#2C2416]/40"
            aria-hidden="true"
          />
          <input
            type="text"
            placeholder="설교 제목으로 검색..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-lg border border-[#C46E4E]/20 bg-white py-3 pl-10 pr-4 text-[#2C2416] placeholder:text-[#2C2416]/40 focus:border-[#C46E4E]/50 focus:outline-none focus:ring-1 focus:ring-[#C46E4E]/30"
            aria-label="설교 검색"
          />
        </div>
      </div>

      {selectedVideo && (
        <div className="mb-10">
          <div className="aspect-video overflow-hidden rounded-lg">
            <iframe
              src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
              title="설교 영상"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-full w-full"
            />
          </div>
          <button
            onClick={() => setSelectedVideo(null)}
            className="mt-3 text-sm text-[#C46E4E] hover:underline"
          >
            목록으로 돌아가기
          </button>
        </div>
      )}

      {hasVideos ? (
        filteredVideos.length === 0 ? (
          <p className="py-12 text-center text-[#2C2416]/50">
            검색 결과가 없습니다.
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredVideos.map((video, i) => (
              <button
                key={video.id}
                onClick={() => setSelectedVideo(video.id)}
                className="group block rounded-lg border border-[#C46E4E]/10 bg-white p-5 text-left transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
              >
                <div className="mb-4 aspect-video overflow-hidden rounded relative">
                  {video.thumbnail ? (
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                    />
                  ) : (
                    <div
                      className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${gradients[i % gradients.length]}`}
                    />
                  )}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/30 backdrop-blur-sm">
                      <Play
                        className="h-5 w-5 text-white ml-0.5"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-[#2C2416] group-hover:text-[#C46E4E] transition-colors line-clamp-2">
                    {video.title}
                  </h3>
                  <span className="flex items-center gap-1 text-sm text-[#2C2416]/60">
                    <Calendar className="h-3.5 w-3.5" />
                    {formatDate(video.publishedAt)}
                  </span>
                </div>
              </button>
            ))}
          </div>
        )
      ) : (
        /* YouTube API 미연결 시 기존 placeholder 데이터 표시 */
        filteredFallback.length === 0 ? (
          <p className="py-12 text-center text-[#2C2416]/50">
            검색 결과가 없습니다.
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredFallback.map((sermon, i) => (
              <div
                key={sermon.slug}
                className="group block rounded-lg border border-[#C46E4E]/10 bg-white p-5 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
              >
                <div className="mb-4 aspect-video overflow-hidden rounded relative">
                  <div
                    className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${gradients[i % gradients.length]}`}
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                      <Play
                        className="h-5 w-5 text-white/80 ml-0.5"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-[#2C2416] line-clamp-2">
                    {sermon.title}
                  </h3>
                  <span className="flex items-center gap-1 text-sm text-[#2C2416]/60">
                    <Calendar className="h-3.5 w-3.5" />
                    {sermon.date}
                  </span>
                  <p className="text-sm text-[#2C2416]/50">{sermon.preacher}</p>
                </div>
              </div>
            ))}
          </div>
        )
      )}
    </div>
  );
}
