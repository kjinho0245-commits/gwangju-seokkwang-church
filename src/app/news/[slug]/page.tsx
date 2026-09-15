import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar } from "lucide-react";
import { newsItems } from "@/content/data/news";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return newsItems.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = newsItems.find((n) => n.slug === slug);
  if (!item) return { title: "소식을 찾을 수 없습니다" };
  return {
    title: `${item.title} - 광주새서광교회`,
    description: item.summary,
  };
}

const categoryColors: Record<string, string> = {
  공지: "bg-[#C46E4E]/10 text-[#C46E4E]",
  행사: "bg-[#B8860B]/10 text-[#B8860B]",
  교육: "bg-[#6B7B3A]/10 text-[#6B7B3A]",
  선교: "bg-[#2C2416]/10 text-[#2C2416]",
};

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = newsItems.find((n) => n.slug === slug);

  if (!item) {
    notFound();
  }

  return (
    <main>
      <section className="bg-[#FDF6EC] py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-5">
          <Link
            href="/news"
            className="mb-6 inline-flex items-center gap-1.5 text-sm text-[#C46E4E] hover:text-[#C46E4E]/80 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            소식 목록
          </Link>
          <div className="mb-3 flex items-center gap-3">
            <span
              className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                categoryColors[item.category] ?? ""
              }`}
            >
              {item.category}
            </span>
            <span className="flex items-center gap-1 text-sm text-[#2C2416]/50">
              <Calendar className="h-3.5 w-3.5" />
              {item.date}
            </span>
          </div>
          <h1 className="font-serif text-2xl text-[#2C2416] md:text-3xl">
            {item.title}
          </h1>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-5">
          <div className="prose-custom whitespace-pre-line text-[#2C2416]/70 leading-relaxed break-keep">
            {item.content}
          </div>
        </div>
      </section>
    </main>
  );
}
