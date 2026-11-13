"use client";

import { COUPLE_PROFILE, INVITATION_CONTENT } from "@/data/wedding";
import { EditorialDivider } from "@/components/common/editorial-divider";
import { BlurFade, SectionHeader } from "@/components/common/reveal";

export function InvitationSection() {
  return (
    <section id="invitation" className="section-padding relative bg-ivory">
      <div className="editorial-container">
        <SectionHeader
          eyebrow={INVITATION_CONTENT.eyebrow}
          title={INVITATION_CONTENT.heading}
        />

        <EditorialDivider className="my-8" />

        <div className="mx-auto grid max-w-3xl gap-8 text-center sm:grid-cols-2 sm:gap-12">
          <BlurFade delay={0.1}>
            <div className="rounded-2xl border border-burgundy/10 bg-ivory-pure p-7">
              <p className="text-[10px] uppercase tracking-wideEditorial text-gold-muted">
                {COUPLE_PROFILE.bride.role}
              </p>
              <h3 className="mt-2 font-editorial text-2xl text-burgundy">
                {COUPLE_PROFILE.bride.fullName}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-charcoal-muted">
                {COUPLE_PROFILE.bride.parents}
              </p>
            </div>
          </BlurFade>

          <BlurFade delay={0.2}>
            <div className="rounded-2xl border border-burgundy/10 bg-ivory-pure p-7">
              <p className="text-[10px] uppercase tracking-wideEditorial text-gold-muted">
                {COUPLE_PROFILE.groom.role}
              </p>
              <h3 className="mt-2 font-editorial text-2xl text-burgundy">
                {COUPLE_PROFILE.groom.fullName}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-charcoal-muted">
                {COUPLE_PROFILE.groom.parents}
              </p>
            </div>
          </BlurFade>
        </div>

        <div className="mx-auto mt-12 max-w-2xl space-y-5 text-center">
          {INVITATION_CONTENT.paragraphs.map((paragraph, index) => (
            <BlurFade key={index} delay={0.15 + index * 0.12}>
              <p className="text-sm leading-loose text-charcoal-muted sm:text-base">
                {paragraph}
              </p>
            </BlurFade>
          ))}
          <BlurFade delay={0.35}>
            <p className="pt-4 font-editorial text-2xl italic text-burgundy">
              {INVITATION_CONTENT.signature}
            </p>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}

