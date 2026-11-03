import type { Metadata } from "next";
import Image from "next/image";
import galleryData from "@/content/data/gallery.json";

export const metadata: Metadata = {
  title: "갤러리 - 광주새서광교회",
  description: "광주새서광교회의 행사와 예배 사진을 모았습니다.",
};

interface GalleryPhoto {
  src: string;
  title: string;
  category: string;
}

// 카테고리 표시 순서 — 사진이 없는 카테고리는 자동으로 섹션을 건너뛴다.
const CATEGORY_ORDER = [
  "주일예배",
  "성탄축하예배",
  "여름수련회",
  "단기선교",
  "교회 행사",
  "찬양 예배",
  "새가족 환영",
  "봉사 활동",
];

export default function GalleryPage() {
  const photos = galleryData as GalleryPhoto[];
  const categories = CATEGORY_ORDER.map((category) => ({
    category,
    photos: photos.filter((p) => p.category === category),
  })).filter((c) => c.photos.length > 0);

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
          {categories.length === 0 ? (
            <p className="py-12 text-center text-[#2C2416]/50">
              아직 등록된 사진이 없습니다. 곧 새로운 소식으로 채워질 예정입니다.
            </p>
          ) : (
            <div className="space-y-16">
              {categories.map(({ category, photos: categoryPhotos }) => (
                <div key={category}>
                  <h2 className="mb-6 font-serif text-xl text-[#2C2416] md:text-2xl">
                    {category}
                  </h2>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {categoryPhotos.map((photo, index) => (
                      <div
                        key={photo.src}
                        className={`group relative aspect-square overflow-hidden rounded-lg ${
                          index === 0 && categoryPhotos.length > 3
                            ? "sm:col-span-2 sm:row-span-2"
                            : ""
                        }`}
                      >
                        <Image
                          src={photo.src}
                          alt={photo.title}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          className="object-cover transition-transform group-hover:scale-105"
                        />
                        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-[#2C2416]/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100">
                          <p className="p-4 text-sm font-medium text-white">
                            {photo.title}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
