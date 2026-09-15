import type { Metadata } from "next";
import { MapPin, Phone, Mail, Bus, Car } from "lucide-react";
import KakaoMap from "@/components/ui/KakaoMap";
import { churchInfo } from "@/content/data/church-info";

export const metadata: Metadata = {
  title: "오시는 길 - 광주새서광교회",
  description:
    "광주새서광교회 오시는 길 안내입니다. 주소, 대중교통, 자차 안내를 확인하세요.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="bg-[#FDF6EC] py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-5">
          <p className="mb-4 text-sm font-medium tracking-widest text-[#C46E4E] uppercase">
            Contact
          </p>
          <h1 className="font-serif text-3xl text-[#2C2416] md:text-4xl">
            오시는 길
          </h1>
        </div>
      </section>

      {/* Map */}
      <section className="mx-auto max-w-5xl px-5 -mt-4">
        <KakaoMap className="shadow-lg" />
      </section>

      {/* Info Cards */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-5">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Address */}
            <div className="rounded-lg border border-[#C46E4E]/10 p-6">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#C46E4E]/10">
                <MapPin className="h-5 w-5 text-[#C46E4E]" />
              </div>
              <h3 className="mb-2 font-semibold text-[#2C2416]">주소</h3>
              <p className="text-sm text-[#2C2416]/60 leading-relaxed break-keep">
                <span className="whitespace-nowrap">전남광주통합특별시 동구 백서로 189번길 6-3</span>
                <br />
                (우편번호: 61466)
              </p>
            </div>

            {/* Public Transport */}
            <div className="rounded-lg border border-[#6B7B3A]/10 p-6">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#6B7B3A]/10">
                <Bus className="h-5 w-5 text-[#6B7B3A]" />
              </div>
              <h3 className="mb-2 font-semibold text-[#2C2416]">
                대중교통
              </h3>
              <div className="space-y-2 text-sm text-[#2C2416]/60 leading-relaxed break-keep">
                <p>
                  <span className="font-medium text-[#2C2416]/80">
                    버스
                  </span>
                  <br />
                  새서광교회 앞 정류장 하차
                  <br />
                  일반: 15, 27, 35번 / 좌석: 100번
                </p>
              </div>
            </div>

            {/* Parking */}
            <div className="rounded-lg border border-[#B8860B]/10 p-6">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#B8860B]/10">
                <Car className="h-5 w-5 text-[#B8860B]" />
              </div>
              <h3 className="mb-2 font-semibold text-[#2C2416]">
                자차 안내
              </h3>
              <p className="text-sm text-[#2C2416]/60 leading-relaxed break-keep">
                교회 부설 주차장 이용 가능
                <br />
                주일에는 주차 안내 봉사자가
                <br />
                도움을 드립니다.
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-12 rounded-lg bg-[#2C2416] p-8 md:p-10">
            <h3 className="mb-6 font-serif text-xl text-[#FDF6EC]">
              연락처
            </h3>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 text-[#C46E4E]" />
                <div>
                  <p className="text-sm text-[#FDF6EC]/50">전화</p>
                  <p className="text-[#FDF6EC]">{churchInfo.phone}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 text-[#C46E4E]" />
                <div>
                  <p className="text-sm text-[#FDF6EC]/50">이메일</p>
                  <p className="text-[#FDF6EC]">{churchInfo.email}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
