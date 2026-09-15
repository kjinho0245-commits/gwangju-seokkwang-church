"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import type { Sermon } from "@/content/data/sermons";
import SermonCard from "./SermonCard";

interface SermonFilterProps {
  sermons: Sermon[];
}

export default function SermonFilter({ sermons }: SermonFilterProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSeries, setSelectedSeries] = useState("전체");

  const allSeries = [
    "전체",
    ...Array.from(new Set(sermons.map((s) => s.series))),
  ];

  const filtered = sermons.filter((sermon) => {
    const matchesSearch =
      searchQuery === "" ||
      sermon.title.includes(searchQuery) ||
      sermon.preacher.includes(searchQuery) ||
      sermon.scripture.includes(searchQuery);
    const matchesSeries =
      selectedSeries === "전체" || sermon.series === selectedSeries;
    return matchesSearch && matchesSeries;
  });

  return (
    <div>
      <div className="mb-8 space-y-4">
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#2C2416]/40" aria-hidden="true" />
          <input
            type="text"
            placeholder="설교 제목, 설교자, 성경 구절로 검색..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-lg border border-[#C46E4E]/20 bg-white py-3 pl-10 pr-4 text-[#2C2416] placeholder:text-[#2C2416]/40 focus:border-[#C46E4E]/50 focus:outline-none focus:ring-1 focus:ring-[#C46E4E]/30"
            aria-label="설교 검색"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {allSeries.map((series) => (
            <button
              key={series}
              onClick={() => setSelectedSeries(series)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                selectedSeries === series
                  ? "bg-[#C46E4E] text-white"
                  : "bg-[#C46E4E]/10 text-[#C46E4E] hover:bg-[#C46E4E]/20"
              }`}
              aria-pressed={selectedSeries === series}
              aria-label={`${series} 시리즈 필터`}
            >
              {series}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="py-12 text-center text-[#2C2416]/50">
          검색 결과가 없습니다.
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((sermon, i) => (
            <SermonCard key={sermon.slug} sermon={sermon} index={i} />
          ))}
        </div>
      )}
    </div>
  );
}
