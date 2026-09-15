import type { Metadata } from "next";
import { staffMembers } from "@/content/data/staff";

export const metadata: Metadata = {
  title: "섬기는 사람들 - 광주새서광교회",
  description: "광주새서광교회를 섬기는 교역자들을 소개합니다.",
};

export default function StaffPage() {
  return (
    <main>
      <section className="bg-[#FDF6EC] py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-5">
          <p className="mb-4 text-sm font-medium tracking-widest text-[#C46E4E] uppercase">
            Our Staff
          </p>
          <h1 className="font-serif text-3xl text-[#2C2416] md:text-4xl">
            섬기는 사람들
          </h1>
          <p className="mt-4 max-w-xl text-[#2C2416]/60">
            광주새서광교회를 섬기는 교역자들을 소개합니다.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-5">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {staffMembers.map((member) => (
              <article key={member.name} className="text-center">
                <div className="mx-auto mb-5 aspect-square w-full max-w-[200px] overflow-hidden rounded-full bg-gradient-to-br from-[#C46E4E]/10 to-[#B8860B]/10">
                  <div className="flex h-full w-full items-center justify-center">
                    <div className="h-16 w-16 rounded-full bg-[#2C2416]/10" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-[#2C2416]">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-[#C46E4E]">
                  {member.role}
                </p>
                <p className="mt-0.5 text-sm text-[#2C2416]/50">
                  {member.department}
                </p>
                <p className="mt-3 text-sm text-[#2C2416]/60 leading-relaxed break-keep">
                  {member.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
