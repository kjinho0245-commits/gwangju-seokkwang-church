import type { Metadata } from "next";
import {
  Heart,
  BookOpen,
  Users,
  Sparkles,
} from "lucide-react";
import { getVideosFromUploadedJson } from "@/lib/youtube";

export const metadata: Metadata = {
  title: "비전 - 광주새서광교회",
  description:
    "광주새서광교회의 비전 선언문과 핵심 가치를 소개합니다.",
};

const coreValues = [
  {
    icon: Heart,
    title: "사랑의 공동체",
    description:
      "그리스도의 사랑을 실천하며, 서로를 돌보고 섬기는 따뜻한 공동체를 세워갑니다.",
  },
  {
    icon: BookOpen,
    title: "말씀 중심",
    description:
      "하나님의 말씀을 깊이 묵상하고, 삶 속에서 말씀대로 살아가는 믿음을 추구합니다.",
  },
  {
    icon: Users,
    title: "다음 세대",
    description:
      "다음 세대에게 신앙을 전수하고, 그들이 하나님의 일꾼으로 자라도록 돕습니다.",
  },
  {
    icon: Sparkles,
    title: "선교와 섬김",
    description:
      "지역사회와 세계를 향해 복음을 전하고, 이웃을 섬기는 삶을 실천합니다.",
  },
];


export default function VisionPage() {
  const videos = getVideosFromUploadedJson();
  const latestVideo = videos[0];

  return (
    <main>
      {/* Vision Statement */}
      <section className="bg-[#FDF6EC] py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-5">
          <p className="mb-4 text-sm font-medium tracking-widest text-[#C46E4E] uppercase">
            Our Vision
          </p>
          <h1 className="font-serif text-3xl leading-snug text-[#2C2416] md:text-5xl md:leading-tight">
            함께 지어져 가는 교회
          </h1>
          <div className="mt-8 max-w-2xl">
            <p className="text-lg leading-relaxed text-[#2C2416]/70 break-keep">
              광주새서광교회는 예수 그리스도의 복음을 전하며, 사랑과 섬김으로
              지역사회를 밝히는 공동체입니다. 모든 세대가 함께 예배하고,
              말씀으로 성장하며, 이웃을 향한 그리스도의 사랑을 실천합니다.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-5">
          <h2 className="mb-12 font-serif text-2xl text-[#2C2416] md:text-3xl">
            핵심 가치
          </h2>
          <div className="grid gap-8 sm:grid-cols-2">
            {coreValues.map((value) => (
              <div key={value.title} className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#C46E4E]/10">
                  <value.icon className="h-5 w-5 text-[#C46E4E]" />
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-semibold text-[#2C2416]">
                    {value.title}
                  </h3>
                  <p className="text-[#2C2416]/60 leading-relaxed break-keep">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Sermon */}
      {latestVideo && (
        <section className="bg-[#FDF6EC] py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-5">
            <p className="mb-2 text-sm font-medium uppercase tracking-widest text-[#C46E4E]">
              Latest Sermon
            </p>
            <h2 className="mb-8 font-serif text-2xl text-[#2C2416] md:text-3xl">
              최근 설교
            </h2>
            <div className="overflow-hidden rounded-lg aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${latestVideo.id}`}
                title={latestVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
            <p className="mt-4 text-lg font-semibold text-[#2C2416]">
              {latestVideo.title}
            </p>
            <p className="mt-1 text-sm text-[#2C2416]/50">
              {new Date(latestVideo.publishedAt).toLocaleDateString("ko-KR", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
        </section>
      )}

    </main>
  );
}
