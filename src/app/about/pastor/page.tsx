import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "담임목사 인사말 - 광주새서광교회",
  description: "광주새서광교회 김진호 담임목사의 인사말과 약력을 소개합니다.",
};

const credentials = [
  "총신대학교 신학과 졸업",
  "총신대학교 신학대학원 졸업 (M.Div.)",
  "전 광주동신교회 부목사",
  "현 광주새서광교회 담임목사 (2005~)",
  "광주지구장로회 서기",
];

export default function PastorPage() {
  return (
    <main>
      <section className="bg-[#FDF6EC] py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-5">
          <p className="mb-4 text-sm font-medium tracking-widest text-[#C46E4E] uppercase">
            담임목사
          </p>
          <h1 className="font-serif text-3xl text-[#2C2416] md:text-4xl">
            김진호 목사
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-5">
          <div className="grid gap-12 md:grid-cols-5">
            {/* Photo placeholder */}
            <div className="md:col-span-2">
              <div className="aspect-[3/4] rounded-lg bg-gradient-to-br from-[#C46E4E]/15 to-[#6B7B3A]/10 flex items-center justify-center">
                <div className="text-center text-[#2C2416]/30">
                  <div className="mx-auto mb-2 h-20 w-20 rounded-full bg-[#2C2416]/10" />
                  <p className="text-sm">목사님 사진</p>
                </div>
              </div>
            </div>

            {/* Greeting */}
            <div className="md:col-span-3">
              <h2 className="mb-6 font-serif text-2xl text-[#2C2416]">
                인사말
              </h2>
              <div className="space-y-4 text-[#2C2416]/70 leading-relaxed break-keep">
                <p>
                  사랑하는 성도 여러분, 광주새서광교회를 찾아주셔서
                  감사합니다.
                </p>
                <p>
                  우리 교회는 &ldquo;하나님의 사랑으로 세상을 밝히는
                  교회&rdquo;라는 비전 아래, 말씀과 기도로 무장하고 이웃을
                  섬기는 공동체를 세워가고 있습니다.
                </p>
                <p>
                  예배를 통해 하나님을 만나고, 교제를 통해 서로를 세우며,
                  섬김을 통해 세상을 변화시키는 것이 우리의 사명입니다.
                  어느 누구든 이곳에서 하나님의 사랑을 경험하고, 삶의
                  소망을 발견하시길 바랍니다.
                </p>
                <p>
                  처음 오시는 분도, 오랜 성도도 모두 환영합니다. 함께
                  예배하고, 함께 성장하며, 함께 섬기는 아름다운 공동체가
                  되길 소망합니다.
                </p>
                <p className="pt-4 text-[#2C2416] font-medium">
                  광주새서광교회 담임목사 김진호 드림
                </p>
              </div>

              {/* Credentials */}
              <div className="mt-12 border-t border-[#C46E4E]/15 pt-8">
                <h3 className="mb-4 text-lg font-semibold text-[#2C2416]">
                  약력
                </h3>
                <ul className="space-y-2">
                  {credentials.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-[#2C2416]/60"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C46E4E]/40" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
