import Link from "next/link";
import Image from "next/image";
import Container from "@/components/layout/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Play, ArrowRight } from "lucide-react";
import { getVideosFromUploadedJson } from "@/lib/youtube";

function formatDate(iso: string): string {
  const d = new Date(iso);
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}.${String(d.getDate()).padStart(2, "0")}`;
}


export default function LatestSermon() {
  const videos = getVideosFromUploadedJson();
  const featured = videos[0];

  if (!featured) return null;

  return (
    <section className="bg-[#faf5ee] py-24 md:py-32" aria-labelledby="sermon-heading">
      <Container>
        <div className="flex items-end justify-between">
          <ScrollReveal>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-terracotta">
              Sermon
            </p>
            <h2
              id="sermon-heading"
              className="mt-3 font-serif text-3xl font-bold text-dark md:text-4xl"
            >
              최신 설교
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1} className="hidden md:block">
            <Link
              href="/sermons"
              className="group flex items-center gap-1.5 text-sm font-medium text-dark/60 transition-colors hover:text-dark"
            >
              전체 보기
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </ScrollReveal>
        </div>

        <div className="mt-14 max-w-3xl">
          <ScrollReveal>
            <a
              href={`https://www.youtube.com/watch?v=${featured.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
              aria-label={`${featured.title} 설교 영상 보기`}
            >
              <div className="relative aspect-video overflow-hidden rounded-sm">
                {featured.thumbnail ? (
                  <Image
                    src={featured.thumbnail}
                    alt={featured.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 768px"
                    className="object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-dark/85 via-terracotta/30 to-olive/20" />
                )}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-cream/20 backdrop-blur-sm">
                    <Play className="h-7 w-7 text-cream ml-1" aria-hidden="true" />
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <p className="text-xs text-dark/40">{formatDate(featured.publishedAt)}</p>
                <h3 className="mt-2 font-serif text-xl font-semibold text-dark group-hover:text-terracotta transition-colors md:text-2xl">
                  {featured.title}
                </h3>
                {featured.scripture && (
                  <p className="mt-1 text-sm font-medium text-[#C46E4E]/80">{featured.scripture}</p>
                )}
                <p className="mt-1.5 text-sm text-dark/60">김진호 목사</p>
              </div>
            </a>
          </ScrollReveal>
        </div>

        {/* Mobile "more" link */}
        <div className="mt-8 text-center md:hidden">
          <Link
            href="/sermons"
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
