import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "갤러리 - 광주새서광교회",
  description: "광주새서광교회의 행사와 예배 사진을 모았습니다.",
};

const galleryItems = [
  { title: "주일예배", gradient: "from-[#C46E4E]/30 to-[#B8860B]/20" },
  { title: "성탄축하예배", gradient: "from-[#6B7B3A]/30 to-[#C46E4E]/15" },
  { title: "여름수련회", gradient: "from-[#B8860B]/25 to-[#6B7B3A]/20" },
  { title: "단기선교", gradient: "from-[#2C2416]/20 to-[#C46E4E]/20" },
  { title: "교회 행사", gradient: "from-[#C46E4E]/20 to-[#2C2416]/15" },
  { title: "찬양 예배", gradient: "from-[#6B7B3A]/20 to-[#B8860B]/25" },
  { title: "새가족 환영", gradient: "from-[#B8860B]/20 to-[#C46E4E]/25" },
  { title: "봉사 활동", gradient: "from-[#2C2416]/15 to-[#6B7B3A]/25" },
];

export default function GalleryPage() {
  return (
    <main>
      <section className="bg-[#FDF6EC] py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <p className="mb-4 text-sm font-medium tracking-widest text-[#C46E4E] uppercase">
            Gallery
          </p>
          <h1 className="font-serif text-3xl text-[#2C2416] md:text-4xl">
            갤러리
          </h1>
          <p className="mt-4 max-w-xl text-[#2C2416]/60">
            광주새서광교회의 아름다운 순간들을 기록합니다.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {galleryItems.map((item, index) => (
              <div
                key={item.title}
                className={`group relative overflow-hidden rounded-lg ${
                  index === 0 || index === 5
                    ? "sm:col-span-2 sm:row-span-2"
                    : ""
                }`}
              >
                <div
                  className={`flex aspect-square items-center justify-center bg-gradient-to-br ${item.gradient}`}
                >
                  <span className="text-sm font-medium text-[#2C2416]/40">
                    {item.title}
                  </span>
                </div>
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-[#2C2416]/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100">
                  <p className="p-4 text-sm font-medium text-white">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
