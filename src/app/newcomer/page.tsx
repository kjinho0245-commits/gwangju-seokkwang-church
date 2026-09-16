import type { Metadata } from "next";
import { Phone, Mail } from "lucide-react";
import Accordion from "@/components/ui/Accordion";
import { churchInfo } from "@/content/data/church-info";

export const metadata: Metadata = {
  title: "새가족 안내 - 광주새서광교회",
  description:
    "광주새서광교회에 처음 오시는 분들을 위한 안내입니다. 방문 절차와 자주 묻는 질문을 확인하세요.",
};

const steps = [
  {
    number: "1",
    title: "교회 방문",
    description:
      "주일예배 시간(오전 11시)에 맞춰 오시면 됩니다. 편한 마음으로 오세요.",
  },
  {
    number: "2",
    title: "2층 본당",
    description:
      "예배는 2층으로 올라오시면 안내 위원들이 친절히 안내해 드립니다.",
  },
  {
    number: "3",
    title: "새가족부 등록",
    description:
      "등록을 원하시면 등록카드를 작성해 주세요.",
  },
];

const faqItems = [
  {
    question: "예배 시간은 어떻게 되나요?",
    answer:
      "주일예배는 매주 주일 오전 11시에 드립니다. 주일오후예배(주일 오후 1:30), 수요저녁기도회(수 저녁 7:00), 새벽기도(토 오전 6:00)도 있습니다.",
  },
  {
    question: "주차 공간이 있나요?",
    answer:
      "교회 부설 주차장이 있습니다.",
  },
  {
    question: "아이와 함께 방문해도 되나요?",
    answer:
      "물론입니다. 온세대예배로 부모님과 자녀들이 함께 예배 드립니다.",
  },
  {
    question: "새가족 등록 후에는 어떻게 되나요?",
    answer:
      "등록 후 약 4주간 새가족 교육이 진행됩니다. 담당 멘토가 교회 생활 적응을 도와드리며, 적합한 소그룹에 연결해 드립니다.",
  },
];

export default function NewcomerPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative bg-[#2C2416] py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#C46E4E]/20 to-transparent" />
        <div className="relative mx-auto max-w-4xl px-5 text-center">
          <h1 className="font-serif text-3xl text-[#FDF6EC] md:text-5xl">
            Welcome Home
          </h1>
          <p className="mt-6 text-lg text-[#FDF6EC]/70 max-w-xl mx-auto break-keep">
            광주새서광교회는 여러분을 따뜻하게 맞이합니다.
            <br />
            누구나 편안하게 방문하실 수 있습니다.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-5">
          <h2 className="mb-12 text-center font-serif text-2xl text-[#2C2416] md:text-3xl">
            방문 절차
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step, index) => (
              <div key={step.number} className="relative text-center">
                {index < steps.length - 1 && (
                  <div className="absolute right-0 top-8 hidden h-px w-full translate-x-1/2 bg-[#C46E4E]/20 md:block" />
                )}
                <div className="relative mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#C46E4E] text-2xl font-bold text-white">
                  {step.number}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-[#2C2416]">
                  {step.title}
                </h3>
                <p className="text-sm text-[#2C2416]/60 leading-relaxed break-keep">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#FDF6EC] py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-5">
          <h2 className="mb-8 font-serif text-2xl text-[#2C2416] md:text-3xl">
            자주 묻는 질문
          </h2>
          <Accordion items={faqItems} />
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <h2 className="mb-4 font-serif text-xl text-[#2C2416] md:text-2xl">
            궁금한 점이 있으신가요?
          </h2>
          <p className="mb-8 text-[#2C2416]/60">
            언제든 편하게 연락해 주세요.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2 text-[#2C2416]/70">
              <Phone className="h-4 w-4 text-[#C46E4E]" />
              <span>{churchInfo.phone}</span>
            </div>
            <div className="flex items-center gap-2 text-[#2C2416]/70">
              <Mail className="h-4 w-4 text-[#C46E4E]" />
              <span>{churchInfo.email}</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
