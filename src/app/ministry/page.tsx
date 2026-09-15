import type { Metadata } from "next";
import {
  Music,
  BookOpen,
  Heart,
  Globe,
  Users,
} from "lucide-react";
import { ministries } from "@/content/data/ministry";

export const metadata: Metadata = {
  title: "부서/사역 소개 - 광주새서광교회",
  description: "광주새서광교회의 각 부서와 사역을 소개합니다.",
};

const iconMap: Record<string, typeof Music> = {
  Music,
  BookOpen,
  Heart,
  Globe,
  Users,
};

export default function MinistryPage() {
  return (
    <main>
      <section className="bg-[#FDF6EC] py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-5">
          <p className="mb-4 text-sm font-medium tracking-widest text-[#C46E4E] uppercase">
            Ministry
          </p>
          <h1 className="font-serif text-3xl text-[#2C2416] md:text-4xl">
            부서와 사역
          </h1>
          <p className="mt-4 max-w-xl text-[#2C2416]/60">
            광주새서광교회는 다양한 부서와 사역을 통해 하나님 나라를 세워갑니다.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-5 space-y-6">
          {ministries.map((ministry, index) => {
            const Icon = iconMap[ministry.icon] ?? Heart;
            const isEven = index % 2 === 0;
            return (
              <article
                key={ministry.name}
                className={`rounded-lg border border-[#C46E4E]/10 p-6 md:p-8 ${
                  isEven ? "md:ml-0 md:mr-12" : "md:ml-12 md:mr-0"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#C46E4E]/10">
                    <Icon className="h-5 w-5 text-[#C46E4E]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#2C2416]">
                      {ministry.name}
                    </h3>
                    <p className="mt-2 text-[#2C2416]/60 leading-relaxed break-keep">
                      {ministry.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-4 text-sm text-[#2C2416]/50">
                      <span>
                        <span className="font-medium text-[#2C2416]/70">
                          담당:
                        </span>{" "}
                        {ministry.leader}
                      </span>
                      <span>
                        <span className="font-medium text-[#2C2416]/70">
                          모임:
                        </span>{" "}
                        {ministry.schedule}
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
