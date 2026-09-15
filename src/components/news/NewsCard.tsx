import Link from "next/link";
import { Calendar } from "lucide-react";
import type { NewsItem } from "@/content/data/news";

const categoryColors: Record<NewsItem["category"], string> = {
  공지: "bg-[#C46E4E]/10 text-[#C46E4E]",
  행사: "bg-[#B8860B]/10 text-[#B8860B]",
  교육: "bg-[#6B7B3A]/10 text-[#6B7B3A]",
  선교: "bg-[#2C2416]/10 text-[#2C2416]",
};

interface NewsCardProps {
  news: NewsItem;
}

export default function NewsCard({ news }: NewsCardProps) {
  return (
    <Link
      href={`/news/${news.slug}`}
      className="group block border-b border-[#C46E4E]/10 py-6 first:pt-0 last:border-b-0"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <span
              className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                categoryColors[news.category]
              }`}
            >
              {news.category}
            </span>
            <span className="flex items-center gap-1 text-sm text-[#2C2416]/50">
              <Calendar className="h-3.5 w-3.5" />
              {news.date}
            </span>
          </div>
          <h3 className="text-lg font-semibold text-[#2C2416] group-hover:text-[#C46E4E] transition-colors">
            {news.title}
          </h3>
          <p className="text-sm text-[#2C2416]/60 line-clamp-2">
            {news.summary}
          </p>
        </div>
      </div>
    </Link>
  );
}
