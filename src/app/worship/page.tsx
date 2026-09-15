import type { Metadata } from "next";
import { Clock, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "예배 안내 - 광주새서광교회",
  description:
    "광주새서광교회 주일예배, 주일오후예배, 수요저녁기도회, 새벽기도 시간과 장소를 안내합니다.",
};

const worshipServices = [
  {
    name: "주일오전예배",
    time: "매주 주일 오전 11:00",
    location: "본당",
    description:
      "온 세대가 함께 모여 하나님을 예배합니다. 말씀 선포와 찬양, 기도, 교제가 함께하는 광주새서광교회의 중심 예배입니다.",
    accent: "border-l-[#C46E4E]",
    bg: "bg-[#C46E4E]/5",
  },
  {
    name: "수요저녁기도회",
    time: "매주 수요일 저녁 7:00",
    location: "본당",
    description:
      "한 주의 중심에서 말씀과 기도로 새 힘을 얻는 시간입니다.",
    accent: "border-l-[#6B7B3A]",
    bg: "bg-[#6B7B3A]/5",
  },
  {
    name: "주일오후예배",
    time: "매주 주일 오후 1:30",
    location: "본당",
    description:
      "오후에 드리는 감사와 찬양의 예배입니다. 말씀을 통해 한 주를 준비하는 은혜의 시간입니다.",
    accent: "border-l-[#B8860B]",
    bg: "bg-[#B8860B]/5",
  },
  {
    name: "새벽기도",
    time: "매주 토요일 오전 6:00",
    location: "본당",
    description:
      "기도로 시작하며 하나님과 교제하는 시간입니다. 짧은 묵상 말씀과 함께 중보 기도를 드립니다.",
    accent: "border-l-[#2C2416]",
    bg: "bg-[#2C2416]/5",
  },
];

export default function WorshipPage() {
  return (
    <main>
      <section className="bg-[#FDF6EC] py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-5">
          <p className="mb-4 text-sm font-medium tracking-widest text-[#C46E4E] uppercase">
            Worship
          </p>
          <h1 className="font-serif text-3xl text-[#2C2416] md:text-4xl">
            예배 안내
          </h1>
          <p className="mt-4 max-w-xl text-[#2C2416]/60 leading-relaxed break-keep">
            광주새서광교회의 모든 예배에 여러분을 초대합니다. 함께 하나님을
            예배하며 은혜를 나누는 시간이 되길 바랍니다.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-5 space-y-6">
          {worshipServices.map((service) => (
            <article
              key={service.name}
              className={`border-l-4 ${service.accent} ${service.bg} rounded-r-lg p-6 md:p-8`}
            >
              <h2 className="font-serif text-xl font-semibold text-[#2C2416] md:text-2xl">
                {service.name}
              </h2>
              <div className="mt-3 flex flex-wrap gap-4 text-sm text-[#2C2416]/60">
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4 text-[#C46E4E]" />
                  {service.time}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-4 w-4 text-[#C46E4E]" />
                  {service.location}
                </span>
              </div>
              <p className="mt-4 text-[#2C2416]/70 leading-relaxed break-keep">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
