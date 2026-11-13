"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { CheckCircle2, Send } from "lucide-react";
import { rsvpSchema, type RsvpFormValues } from "@/lib/validations/rsvp";
import type { GuestWish } from "@/types/wedding";
import { EDITORIAL_EASE } from "@/constants/wedding";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { BlurFade, SectionHeader } from "@/components/common/reveal";
import { cn } from "@/lib/utils";

interface RsvpSectionProps {
  onWishSubmitted: (wish: GuestWish) => void;
}

export function RsvpSection({ onWishSubmitted }: RsvpSectionProps) {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<RsvpFormValues>({
    resolver: zodResolver(rsvpSchema),
    defaultValues: {
      name: "",
      phone: "",
      attendance: "attending",
      guestsCount: 1,
      message: "",
    },
  });

  const attendance = watch("attendance");

  const onSubmit = async (values: RsvpFormValues) => {
    setServerError(null);
    try {
      const response = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Không thể gửi phản hồi lúc này. Vui lòng thử lại.");
      }

      const data = (await response.json()) as { wish?: GuestWish };
      if (data.wish) {
        onWishSubmitted(data.wish);
      }

      setSubmitted(true);
      reset();
    } catch (error) {
      setServerError(
        error instanceof Error ? error.message : "Đã có lỗi xảy ra. Vui lòng thử lại."
      );
    }
  };

  return (
    <section
      id="rsvp"
      className="section-padding border-t border-burgundy/10 bg-ivory-warm/50"
    >
      <div className="editorial-container">
        <SectionHeader
          eyebrow="Xác Nhận Tham Dự"
          title="RSVP & Lời Chúc"
          subtitle="Vui lòng xác nhận sự có mặt của bạn trước ngày 15/05/2027 và để lại đôi lời chúc phúc cho chúng mình nhé."
        />

        <BlurFade delay={0.14} className="mx-auto mt-12 max-w-2xl">
          <Card className="hover:translate-y-0">
            <CardContent className="p-7 sm:p-10">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, ease: EDITORIAL_EASE }}
                  className="py-8 text-center"
                >
                  <CheckCircle2 className="mx-auto h-11 w-11 text-burgundy" />
                  <h3 className="mt-4 font-editorial text-3xl text-burgundy">
                    Cảm Ơn Bạn Đã Phản Hồi
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal-muted">
                    Thông tin tham dự và lời chúc của bạn đã được lưu lại trong sổ lưu bút bên dưới.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-7"
                    onClick={() => setSubmitted(false)}
                  >
                    Gửi Thêm Lời Chúc
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="rsvp-name"
                        className="block text-[11px] font-medium uppercase tracking-editorial text-charcoal-muted"
                      >
                        Họ và tên
                      </label>
                      <Input
                        id="rsvp-name"
                        placeholder="Ví dụ: Nguyễn Lan Anh"
                        aria-invalid={Boolean(errors.name)}
                        {...register("name")}
                      />
                      {errors.name && (
                        <p className="text-xs text-burgundy">{errors.name.message}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="rsvp-phone"
                        className="block text-[11px] font-medium uppercase tracking-editorial text-charcoal-muted"
                      >
                        Số điện thoại
                      </label>
                      <Input
                        id="rsvp-phone"
                        type="tel"
                        placeholder="Ví dụ: 0901 234 567"
                        aria-invalid={Boolean(errors.phone)}
                        {...register("phone")}
                      />
                      {errors.phone && (
                        <p className="text-xs text-burgundy">{errors.phone.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <span className="block text-[11px] font-medium uppercase tracking-editorial text-charcoal-muted">
                        Tham dự
                      </span>
                      <div className="grid grid-cols-2 gap-3">
                        <button
                          type="button"
                          onClick={() => setValue("attendance", "attending", { shouldValidate: true })}
                          className={cn(
                            "min-h-[48px] rounded-xl border px-3 text-xs font-medium transition-all duration-300",
                            attendance === "attending"
                              ? "border-burgundy bg-burgundy text-ivory"
                              : "border-burgundy/15 bg-ivory-pure text-charcoal-muted hover:border-burgundy/40"
                          )}
                        >
                          Sẽ Tham Dự
                        </button>
                        <button
                          type="button"
                          onClick={() => setValue("attendance", "declining", { shouldValidate: true })}
                          className={cn(
                            "min-h-[48px] rounded-xl border px-3 text-xs font-medium transition-all duration-300",
                            attendance === "declining"
                              ? "border-burgundy bg-burgundy text-ivory"
                              : "border-burgundy/15 bg-ivory-pure text-charcoal-muted hover:border-burgundy/40"
                          )}
                        >
                          Không Thể Dự
                        </button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="rsvp-guests"
                        className="block text-[11px] font-medium uppercase tracking-editorial text-charcoal-muted"
                      >
                        Số lượng khách
                      </label>
                      <Input
                        id="rsvp-guests"
                        type="number"
                        min={1}
                        max={6}
                        aria-invalid={Boolean(errors.guestsCount)}
                        {...register("guestsCount")}
                      />
                      {errors.guestsCount && (
                        <p className="text-xs text-burgundy">
                          {errors.guestsCount.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="rsvp-message"
                      className="block text-[11px] font-medium uppercase tracking-editorial text-charcoal-muted"
                    >
                      Lời chúc gửi cô dâu &amp; chú rể
                    </label>
                    <Textarea
                      id="rsvp-message"
                      placeholder="Gửi lời chúc phúc hoặc ghi chú món ăn (nếu có)..."
                      aria-invalid={Boolean(errors.message)}
                      {...register("message")}
                    />
                    {errors.message && (
                      <p className="text-xs text-burgundy">{errors.message.message}</p>
                    )}
                  </div>

                  {serverError && (
                    <p role="alert" className="text-xs text-burgundy">
                      {serverError}
                    </p>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full"
                  >
                    <Send className="h-3.5 w-3.5" />
                    <span>{isSubmitting ? "Đang Gửi Phản Hồi..." : "Gửi Xác Nhận"}</span>
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </BlurFade>
      </div>
    </section>
  );
}
