import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, BookOpen, User } from "lucide-react";
import { sermons } from "@/content/data/sermons";
import { notFound } from "next/navigation";
import YouTubeEmbed from "@/components/sermons/YouTubeEmbed";

export function generateStaticParams() {
  return sermons.map((sermon) => ({
    slug: sermon.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const sermon = sermons.find((s) => s.slug === slug);
  if (!sermon) return { title: "설교를 찾을 수 없습니다" };
  return {
    title: `${sermon.title} - 광주새서광교회 설교`,
    description: sermon.description,
  };
}

export default async function SermonDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const sermon = sermons.find((s) => s.slug === slug);

  if (!sermon) {
    notFound();
  }

  return (
    <main>
      <section className="bg-[#FDF6EC] py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-5">
          <Link
            href="/sermons"
            className="mb-6 inline-flex items-center gap-1.5 text-sm text-[#C46E4E] hover:text-[#C46E4E]/80 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            설교 목록
          </Link>
          <span className="mb-3 block rounded-full bg-[#6B7B3A]/10 px-3 py-1 text-xs font-medium text-[#6B7B3A] w-fit">
            {sermon.series}
          </span>
          <h1 className="font-serif text-2xl text-[#2C2416] md:text-4xl">
            {sermon.title}
          </h1>
          <div className="mt-4 flex flex-wrap gap-4 text-sm text-[#2C2416]/60">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              {sermon.date}
            </span>
            <span className="flex items-center gap-1.5">
              <User className="h-4 w-4" />
              {sermon.preacher}
            </span>
            <span className="flex items-center gap-1.5">
              <BookOpen className="h-4 w-4" />
              {sermon.scripture}
            </span>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-5">
          <YouTubeEmbed videoId={sermon.youtubeId} title={sermon.title} />
          <div className="mt-8">
            <h2 className="mb-3 text-lg font-semibold text-[#2C2416]">
              설교 요약
            </h2>
            <p className="text-[#2C2416]/70 leading-relaxed break-keep">
              {sermon.description}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
