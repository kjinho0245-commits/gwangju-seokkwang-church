"use client";

import Container from "@/components/layout/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { worshipServices } from "@/content/data/worship";
import { Clock, MapPin } from "lucide-react";

export default function WorshipTimes() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden" aria-labelledby="worship-heading">
      {/* Paper texture background */}
      <div className="absolute inset-0 bg-cream" />
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      <Container className="relative z-10">
        <ScrollReveal>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-olive">
            Worship
          </p>
          <h2
            id="worship-heading"
            className="mt-3 font-serif text-3xl font-bold text-dark md:text-4xl"
          >
            예배 시간 안내
          </h2>
        </ScrollReveal>

        {/* Asymmetric card grid */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {worshipServices.map((service, i) => (
            <ScrollReveal key={service.id} delay={0.1 * i}>
              <article
                className={`card-lift group relative rounded-sm border border-dark/5 bg-white p-7 ${
                  i === 0 ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                {/* Terracotta accent bar */}
                <div className="mb-5 h-0.5 w-8 bg-terracotta/60" />
                <h3 className="font-serif text-xl font-semibold text-dark">
                  {service.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-dark/50 break-keep">
                  {service.description}
                </p>
                <div className="mt-5 space-y-2">
                  <div className="flex items-center gap-2 text-sm text-dark/70">
                    <Clock className="h-3.5 w-3.5 text-terracotta/70" aria-hidden="true" />
                    <span>
                      {service.day} {service.time}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-dark/70">
                    <MapPin className="h-3.5 w-3.5 text-terracotta/70" aria-hidden="true" />
                    <span>{service.location}</span>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
