import Link from "next/link";
import { Play, Calendar, BookOpen } from "lucide-react";
import type { Sermon } from "@/content/data/sermons";

interface SermonCardProps {
  sermon: Sermon;
  index?: number;
}

const gradients = [
  "from-[#C46E4E]/25 via-[#B8860B]/10 to-[#2C2416]/30",
  "from-[#2C2416]/35 via-[#6B7B3A]/15 to-[#C46E4E]/20",
  "from-[#6B7B3A]/25 via-[#C46E4E]/10 to-[#B8860B]/25",
  "from-[#B8860B]/20 via-[#2C2416]/15 to-[#6B7B3A]/25",
  "from-[#2C2416]/30 via-[#B8860B]/15 to-[#C46E4E]/25",
  "from-[#C46E4E]/20 via-[#6B7B3A]/15 to-[#2C2416]/25",
] as const;

export default function SermonCard({ sermon, index = 0 }: SermonCardProps) {
  const gradient = gradients[index % gradients.length];

  return (
    <Link
      href={`/sermons/${sermon.slug}`}
      className="group block rounded-lg border border-[#C46E4E]/10 bg-white p-5 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
      aria-label={`${sermon.title} 설교 보기`}
    >
      <div className="mb-4 aspect-video overflow-hidden rounded relative">
        <div className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${gradient}`}>
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
            <Play className="h-5 w-5 text-white/80 ml-0.5" aria-hidden="true" />
          </div>
        </div>
      </div>
      <div className="space-y-2">
        <span className="inline-block rounded-full bg-[#6B7B3A]/10 px-2.5 py-0.5 text-xs font-medium text-[#6B7B3A]">
          {sermon.series}
        </span>
        <h3 className="text-lg font-semibold text-[#2C2416] group-hover:text-[#C46E4E] transition-colors line-clamp-2">
          {sermon.title}
        </h3>
        <div className="flex flex-wrap gap-3 text-sm text-[#2C2416]/60">
          <span className="flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5" />
            {sermon.date}
          </span>
          <span className="flex items-center gap-1">
            <BookOpen className="h-3.5 w-3.5" />
            {sermon.scripture}
          </span>
        </div>
        <p className="text-sm text-[#2C2416]/50">{sermon.preacher}</p>
      </div>
    </Link>
  );
}
