"use client";

import Container from "@/components/layout/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";

export default function NewcomerCTA() {
  return (
    <section
      className="relative overflow-hidden py-24 md:py-32"
      aria-labelledby="newcomer-heading"
    >
      {/* Warm background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream via-terracotta/8 to-cream" />
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />
      {/* Warm light orb */}
      <div className="absolute top-0 right-1/4 h-[400px] w-[400px] rounded-full bg-terracotta/5 blur-[100px]" />

      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <ScrollReveal>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-terracotta/70">
              Welcome
            </p>
            <h2
              id="newcomer-heading"
              className="mt-3 font-serif text-3xl font-bold text-dark md:text-4xl lg:text-5xl"
            >
              처음 오시는 분을
              <br />
              환영합니다
            </h2>
            <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-dark/55 break-keep">
              광주새서광교회는 언제나 열린 마음으로 여러분을 기다립니다. 처음
              방문이 어색하지 않도록 따뜻하게 안내해 드리겠습니다.
            </p>
            <div className="mt-10">
              <Button href="/newcomer">새가족 안내 보기</Button>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
