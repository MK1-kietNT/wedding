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
        throw new Error("Unable to submit your RSVP right now.");
      }

      const data = (await response.json()) as { wish?: GuestWish };
      if (data.wish) {
        onWishSubmitted(data.wish);
      }

      setSubmitted(true);
      reset();
    } catch (error) {
      setServerError(
        error instanceof Error ? error.message : "Something went wrong. Please try again."
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
          eyebrow="Kindly Reply"
          title="RSVP & Wishes"
          subtitle="Please confirm your attendance by May 15, 2027, and leave a warm wish for our guestbook."
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
                    Thank You for Your Reply
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal-muted">
                    Your response and wedding wish have been recorded in our guestbook below.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-7"
                    onClick={() => setSubmitted(false)}
                  >
                    Submit Another Response
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
                        Full Name
                      </label>
                      <Input
                        id="rsvp-name"
                        placeholder="e.g. Sophia Nguyen"
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
                        Phone Number
                      </label>
                      <Input
                        id="rsvp-phone"
                        type="tel"
                        placeholder="e.g. +84 901 234 567"
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
                        Attendance
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
                          Joyfully Accepts
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
                          Regretfully Declines
                        </button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="rsvp-guests"
                        className="block text-[11px] font-medium uppercase tracking-editorial text-charcoal-muted"
                      >
                        Number of Guests
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
                      Wedding Wish &amp; Note
                    </label>
                    <Textarea
                      id="rsvp-message"
                      placeholder="Share a heartfelt wish or dietary note for the couple..."
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
                    <span>{isSubmitting ? "Sending Reply..." : "Confirm RSVP"}</span>
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
