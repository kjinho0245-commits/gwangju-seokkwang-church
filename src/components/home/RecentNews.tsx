"use client";

import Link from "next/link";
import Container from "@/components/layout/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { ArrowRight } from "lucide-react";

interface NewsItem {
  title: string;
  date: string;
  category: string;
  href: string;
}

const recentNews: NewsItem[] = [
  {
    title: "2026년 여름 수련회 안내",
    date: "2026.07.08",
    category: "행사",
    href: "/news",
  },
  {
    title: "교회 창립 기념 감사예배 안내",
    date: "2026.07.03",
    category: "공지",
    href: "/news",
  },
  {
    title: "새가족 환영회 안내",
    date: "2026.06.28",
    category: "공지",
    href: "/news",
  },
  {
    title: "주일학교 여름성경학교 접수",
    date: "2026.06.25",
    category: "교육",
    href: "/news",
  },
];

const categoryColor: Record<string, string> = {
  공지: "text-terracotta",
  행사: "text-olive",
  교육: "text-gold",
};

export default function RecentNews() {
  return (
    <section className="relative bg-cream py-24 md:py-32 overflow-hidden" aria-labelledby="news-heading">
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />
      <Container className="relative z-10">
        <div className="flex items-end justify-between">
          <ScrollReveal>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-olive">
              News
            </p>
            <h2
              id="news-heading"
              className="mt-3 font-serif text-3xl font-bold text-dark md:text-4xl"
            >
              교회 소식
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1} className="hidden md:block">
            <Link
              href="/news"
              className="group flex items-center gap-1.5 text-sm font-medium text-dark/60 transition-colors hover:text-dark"
            >
              전체 보기
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </ScrollReveal>
        </div>

        <div className="mt-12">
          <ul className="divide-y divide-dark/8" role="list">
            {recentNews.map((item, i) => (
              <ScrollReveal key={item.title} delay={0.08 * i}>
                <li>
                  <Link
                    href={item.href}
                    className="group flex items-baseline justify-between gap-4 py-5 transition-colors"
                  >
                    <div className="flex items-baseline gap-3 min-w-0">
                      <span
                        className={`shrink-0 text-xs font-semibold ${categoryColor[item.category] ?? "text-dark/40"}`}
                      >
                        {item.category}
                      </span>
                      <span className="truncate text-base font-medium text-dark group-hover:text-terracotta transition-colors">
                        {item.title}
                      </span>
                    </div>
                    <span className="shrink-0 text-xs text-dark/35 tabular-nums">
                      {item.date}
                    </span>
                  </Link>
                </li>
              </ScrollReveal>
            ))}
          </ul>
        </div>

        <div className="mt-6 text-center md:hidden">
          <Link
            href="/news"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-dark/60 hover:text-dark transition-colors"
          >
            전체 보기
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
