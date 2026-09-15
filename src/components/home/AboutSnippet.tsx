"use client";

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
              <div className="aspect-[4/5] overflow-hidden rounded-sm bg-gradient-to-br from-terracotta/20 via-cream to-olive/15">
                {/* Organic decorative texture */}
                <div
                  className="absolute inset-0 opacity-[0.06]"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
                  }}
                />
                {/* Warm decorative cross pattern */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative h-32 w-32 opacity-[0.08]">
                    <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-dark" />
                    <div className="absolute top-1/3 left-0 h-px w-full bg-dark" />
                  </div>
                </div>
                {/* Warm gradient orbs */}
                <div className="absolute top-1/4 left-1/4 h-40 w-40 rounded-full bg-terracotta/10 blur-[60px]" />
                <div className="absolute bottom-1/4 right-1/4 h-32 w-32 rounded-full bg-gold/8 blur-[50px]" />
                <div className="absolute bottom-1/3 left-1/3 h-24 w-24 rounded-full bg-olive/10 blur-[40px]" />
                {/* Label */}
                <div className="absolute inset-0 flex items-end justify-center pb-8">
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-dark/20">
                    Church Photo
                  </p>
                </div>
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
