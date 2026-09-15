import type { Metadata } from "next";
import { getLatestVideos, getVideosFromUploadedJson } from "@/lib/youtube";
import { sermons as fallbackSermons } from "@/content/data/sermons";
import YouTubeSermonList from "@/components/sermons/YouTubeSermonList";

export const metadata: Metadata = {
  title: "설교 - 광주새서광교회",
  description:
    "광주새서광교회의 설교를 들으실 수 있습니다. 최신 설교 영상을 확인해 보세요.",
};

export default async function SermonsPage() {
  let videos = await getLatestVideos(12);
  if (videos.length === 0) videos = getVideosFromUploadedJson();

  return (
    <main>
      <section className="bg-[#FDF6EC] py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <p className="mb-4 text-sm font-medium tracking-widest text-[#C46E4E] uppercase">
            Sermons
          </p>
          <h1 className="font-serif text-3xl text-[#2C2416] md:text-4xl">
            설교
          </h1>
          <p className="mt-4 max-w-xl text-[#2C2416]/60">
            말씀을 통해 은혜를 나누고, 삶의 방향을 찾아갑니다.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <YouTubeSermonList videos={videos} fallbackSermons={fallbackSermons} />
        </div>
      </section>
    </main>
  );
}
