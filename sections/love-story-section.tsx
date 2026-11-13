"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { COUPLE_PROFILE, LOVE_STORY_MILESTONES } from "@/data/wedding";
import { BlurFade, SectionHeader } from "@/components/common/reveal";

gsap.registerPlugin(ScrollTrigger);

export function LoveStorySection() {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = timelineRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.from(".story-milestone-card", {
        y: 32,
        opacity: 0,
        duration: 0.85,
        stagger: 0.16,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container,
          start: "top 78%",
          once: true,
        },
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="story"
      className="section-padding border-y border-burgundy/10 bg-ivory-warm/50"
    >
      <div className="editorial-container">
        <SectionHeader
          eyebrow="Our Journey"
          title="A Story Written Quietly"
          subtitle="Four chapters that brought us from a shared afternoon in Saigon to the evening we say forever."
        />

        <BlurFade delay={0.15} className="mt-12">
          <div className="relative mx-auto aspect-[16/9] max-w-4xl overflow-hidden rounded-2xl border border-burgundy/10">
            <Image
              src={COUPLE_PROFILE.storyCoverImage}
              alt="Camille and Julian walking together at dusk"
              fill
              sizes="(max-width: 1024px) 100vw, 896px"
              className="object-cover transition-transform duration-1000 ease-editorial hover:scale-105"
            />
          </div>
        </BlurFade>

        <div
          ref={timelineRef}
          className="relative mx-auto mt-16 max-w-4xl before:absolute before:bottom-0 before:left-4 before:top-0 before:w-px before:bg-burgundy/15 md:before:left-1/2"
        >
          <div className="space-y-10">
            {LOVE_STORY_MILESTONES.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={item.id}
                  className="story-milestone-card relative flex flex-col pl-12 md:flex-row md:items-center md:justify-between md:pl-0"
                >
                  <span
                    aria-hidden="true"
                    className="absolute left-[11px] top-6 h-2.5 w-2.5 rounded-full border border-gold bg-burgundy md:left-1/2 md:-translate-x-1/2"
                  />

                  <div
                    className={
                      isEven
                        ? "md:w-[45%] md:text-right"
                        : "md:order-2 md:w-[45%] md:text-left"
                    }
                  >
                    <div className="rounded-2xl border border-burgundy/10 bg-ivory-pure p-6 transition-all duration-500 ease-editorial hover:-translate-y-1 hover:border-gold/50 sm:p-7">
                      <p className="text-[10px] font-medium uppercase tracking-wideEditorial text-gold-muted">
                        {item.phase} · {item.date}
                      </p>
                      <h3 className="mt-2 font-editorial text-2xl text-burgundy">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-charcoal-muted">
                        {item.description}
                      </p>
                      <p className="mt-4 text-[11px] uppercase tracking-editorial text-charcoal-subtle">
                        {item.location}
                      </p>
                    </div>
                  </div>

                  <div className="hidden md:block md:w-[45%]" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

