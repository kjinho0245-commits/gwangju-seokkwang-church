"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="relative flex min-h-svh items-center justify-center overflow-hidden"
      aria-label="히어로 섹션"
    >
      {/* Background: bright cream gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FDF6EC] via-[#FAF0E0] to-[#F5E8D0]" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />
      {/* Warm light bloom */}
      <div className="absolute top-1/4 -right-1/4 h-[600px] w-[600px] rounded-full bg-terracotta/10 blur-[140px]" />
      <div className="absolute -bottom-1/4 -left-1/4 h-[500px] w-[500px] rounded-full bg-olive/8 blur-[120px]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-3xl px-5 text-center md:px-8">
        <motion.p
          className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-[#C46E4E]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          광주새서광교회
        </motion.p>
        <motion.h1
          className="font-serif text-4xl font-bold leading-snug text-[#2C2416] md:text-5xl lg:text-6xl lg:leading-tight"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          함께 지어져 가는 교회
        </motion.h1>
        <motion.p
          className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-[#2C2416]/60 md:text-lg break-keep"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          광주새서광교회에 오신 것을 환영합니다
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.button
        type="button"
        className="group absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2.5 text-[#2C2416]/45 transition-colors hover:text-[#C46E4E]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 1 }}
        onClick={() => {
          window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
        }}
        aria-label="아래로 내려서 둘러보기"
      >
        <span className="text-xs font-medium tracking-[0.15em] break-keep">
          아래로 내려서 둘러보세요
        </span>
        {/* Mouse-shaped indicator */}
        <span className="flex h-9 w-[22px] items-start justify-center rounded-full border-2 border-current pt-1.5">
          <motion.span
            className="h-1.5 w-1 rounded-full bg-current"
            animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
        <motion.span
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-5 w-5" aria-hidden="true" />
        </motion.span>
      </motion.button>
    </section>
  );
}
