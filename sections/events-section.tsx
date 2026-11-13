"use client";

import { Calendar, Clock, MapPin, Sparkles } from "lucide-react";
import { WEDDING_EVENTS } from "@/data/wedding";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BlurFade, SectionHeader } from "@/components/common/reveal";

export function EventsSection() {
  return (
    <section
      id="events"
      className="section-padding border-t border-burgundy/10 bg-ivory-warm/40"
    >
      <div className="editorial-container">
        <SectionHeader
          eyebrow="Thời Gian & Địa Điểm"
          title="Lịch Trình Hôn Lễ"
          subtitle="Chúng mình hân hạnh được đón tiếp bạn tại hai buổi lễ ấm cúng của hai bên gia đình."
        />

        <div className="mx-auto mt-14 grid max-w-4xl gap-8 md:grid-cols-2">
          {WEDDING_EVENTS.map((event, index) => (
            <BlurFade key={event.id} delay={index * 0.14}>
              <Card className="flex h-full flex-col justify-between">
                <div>
                  <CardHeader>
                    <p className="text-[10px] font-medium uppercase tracking-wideEditorial text-gold-muted">
                      {event.subtitle}
                    </p>
                    <h3 className="pt-1 font-editorial text-3xl text-burgundy">
                      {event.title}
                    </h3>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="h-px w-full bg-burgundy/10" />

                    <div className="flex items-start gap-3 text-sm text-charcoal-muted">
                      <Calendar className="mt-0.5 h-4 w-4 shrink-0 text-burgundy" />
                      <span>{event.date}</span>
                    </div>

                    <div className="flex items-start gap-3 text-sm text-charcoal-muted">
                      <Clock className="mt-0.5 h-4 w-4 shrink-0 text-burgundy" />
                      <span>{event.time}</span>
                    </div>

                    <div className="flex items-start gap-3 text-sm text-charcoal-muted">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-burgundy" />
                      <div>
                        <p className="font-medium text-charcoal">{event.venue}</p>
                        <p className="mt-0.5 text-xs leading-relaxed text-charcoal-subtle">
                          {event.address}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 text-sm text-charcoal-muted">
                      <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-gold-muted" />
                      <span className="text-xs">Trang phục gợi ý: {event.dressCode}</span>
                    </div>
                  </CardContent>
                </div>

                <div className="px-7 pb-7 pt-2">
                  <a
                    href={event.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full"
                  >
                    <Button variant="outline" className="w-full">
                      <MapPin className="h-3.5 w-3.5" />
                      <span>Xem Bản Đồ Google Maps</span>
                    </Button>
                  </a>
                </div>
              </Card>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}

