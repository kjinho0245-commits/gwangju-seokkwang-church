"use client";

import Image from "next/image";
import Container from "@/components/layout/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";

export default function AboutSnippet() {
  return (
    <section className="bg-white py-24 md:py-32" aria-labelledby="about-heading">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Image placeholder — asymmetric left */}
          <ScrollReveal direction="left" className="lg:col-span-5">
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-sm">
                <Image
                  src="/images/church-building.png"
                  alt="광주새서광교회 건물"
                  width={800}
                  height={1000}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
              {/* Offset accent rectangle */}
              <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-sm border-2 border-terracotta/15" />
            </div>
          </ScrollReveal>

          {/* Text — right side with more space */}
          <ScrollReveal direction="right" className="lg:col-span-7 lg:pl-4">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-terracotta">
              About Us
            </p>
            <h2
              id="about-heading"
              className="mt-3 font-serif text-3xl font-bold text-dark md:text-4xl"
            >
              따뜻한 공동체,
              <br />
              새서광교회를 소개합니다
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-dark/60 break-keep">
              광주새서광교회는 하나님의 말씀 위에 세워진 공동체입니다. 복음의
              빛을 이웃과 세상에 전하며, 서로 사랑하고 섬기는 가운데 함께
              성장하는 교회를 꿈꿉니다.
            </p>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-dark/60 break-keep">
              예배와 기도, 말씀을 중심으로 모든 세대가 하나 되어 하나님 나라를
              이 땅에 세워가고 있습니다.
            </p>
            <div className="mt-8">
              <Button href="/about" variant="secondary">
                더 알아보기
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
