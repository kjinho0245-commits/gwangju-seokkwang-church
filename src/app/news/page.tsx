"use client";

import { useState } from "react";
import { newsItems, type NewsItem } from "@/content/data/news";
import NewsCard from "@/components/news/NewsCard";

const categories: Array<NewsItem["category"] | "전체"> = [
  "전체",
  "공지",
  "행사",
  "교육",
  "선교",
];

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("전체");

  const filtered =
    selectedCategory === "전체"
      ? newsItems
      : newsItems.filter((item) => item.category === selectedCategory);

  return (
    <main>
      <section className="bg-[#FDF6EC] py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-5">
          <p className="mb-4 text-sm font-medium tracking-widest text-[#C46E4E] uppercase">
            News
          </p>
          <h1 className="font-serif text-3xl text-[#2C2416] md:text-4xl">
            교회 소식
          </h1>
          <p className="mt-4 max-w-xl text-[#2C2416]/60">
            광주새서광교회의 공지사항과 소식을 전합니다.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-5">
          <div className="mb-8 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  selectedCategory === cat
                    ? "bg-[#C46E4E] text-white"
                    : "bg-[#C46E4E]/10 text-[#C46E4E] hover:bg-[#C46E4E]/20"
                }`}
                aria-pressed={selectedCategory === cat}
                aria-label={`${cat} 카테고리 필터`}
              >
                {cat}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <p className="py-12 text-center text-[#2C2416]/50">
              해당 카테고리의 소식이 없습니다.
            </p>
          ) : (
            <div>
              {filtered.map((item) => (
                <NewsCard key={item.slug} news={item} />
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
