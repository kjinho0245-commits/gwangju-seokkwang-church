import type { Metadata } from "next";
import { Landmark, Heart } from "lucide-react";
import { churchInfo } from "@/content/data/church-info";

export const metadata: Metadata = {
  title: "헌금 안내 - 광주새서광교회",
  description: "광주새서광교회 헌금 계좌 안내입니다.",
};

const accounts = [
  {
    type: "십일조 / 감사헌금",
    bank: "국민은행",
    number: "123-456-78-901234",
    holder: "광주새서광교회",
  },
  {
    type: "선교헌금",
    bank: "농협",
    number: "987-654-32-109876",
    holder: "광주새서광교회",
  },
  {
    type: "건축헌금",
    bank: "신한은행",
    number: "111-222-333444",
    holder: "광주새서광교회",
  },
];

export default function OfferingPage() {
  return (
    <main>
      <section className="bg-[#FDF6EC] py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-5">
          <p className="mb-4 text-sm font-medium tracking-widest text-[#C46E4E] uppercase">
            Offering
          </p>
          <h1 className="font-serif text-3xl text-[#2C2416] md:text-4xl">
            헌금 안내
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-5">
          {/* Scripture */}
          <div className="mb-12 rounded-lg bg-[#2C2416] p-8 md:p-10">
            <Heart className="mb-4 h-8 w-8 text-[#C46E4E]" />
            <blockquote className="font-serif text-lg text-[#FDF6EC]/90 leading-relaxed italic break-keep">
              &ldquo;각각 그 마음에 정한 대로 할 것이요 인색함으로나 억지로
              하지 말지니 하나님은 즐겨 내는 자를 사랑하시느니라&rdquo;
            </blockquote>
            <cite className="mt-4 block text-sm text-[#FDF6EC]/50 not-italic">
              고린도후서 9:7
            </cite>
          </div>

          {/* Account Cards */}
          <div className="space-y-4">
            {accounts.map((account) => (
              <div
                key={account.type}
                className="flex items-start gap-4 rounded-lg border border-[#C46E4E]/10 p-6"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#B8860B]/10">
                  <Landmark className="h-5 w-5 text-[#B8860B]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#2C2416]">
                    {account.type}
                  </h3>
                  <p className="mt-1 text-[#2C2416]/70">
                    {account.bank}{" "}
                    <span className="font-mono text-[#2C2416]">
                      {account.number}
                    </span>
                  </p>
                  <p className="text-sm text-[#2C2416]/50">
                    예금주: {account.holder}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-[#2C2416]/40">
            헌금 관련 문의는 교회 사무실({churchInfo.phone})로 연락해 주세요.
          </p>
        </div>
      </section>
    </main>
  );
}
