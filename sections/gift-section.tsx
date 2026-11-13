"use client";

import { useState } from "react";
import Image from "next/image";
import { Check, Copy } from "lucide-react";
import { GIFT_ACCOUNTS } from "@/data/wedding";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BlurFade, SectionHeader } from "@/components/common/reveal";

export function GiftSection() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = async (id: string, accountNumber: string) => {
    const clean = accountNumber.replace(/\s+/g, "");
    try {
      await navigator.clipboard.writeText(clean);
      setCopiedId(id);
      window.setTimeout(() => {
        setCopiedId((prev) => (prev === id ? null : prev));
      }, 2200);
    } catch {
      // Clipboard fallback ignored
    }
  };

  return (
    <section id="gift" className="section-padding bg-ivory">
      <div className="editorial-container">
        <SectionHeader
          eyebrow="Hộp Mừng Cưới"
          title="Gửi Trao Yêu Thương"
          subtitle="Sự hiện diện của bạn trong ngày vui là món quà ý nghĩa nhất. Nếu không thể tham dự trực tiếp, bạn có thể gửi lời chúc qua thông tin bên dưới."
        />

        <div className="mx-auto mt-14 grid max-w-4xl gap-8 md:grid-cols-2">
          {GIFT_ACCOUNTS.map((account, index) => {
            const isCopied = copiedId === account.id;
            return (
              <BlurFade key={account.id} delay={index * 0.14}>
                <Card className="flex h-full flex-col justify-between text-center">
                  <div>
                    <CardHeader className="items-center">
                      <p className="text-[10px] font-medium uppercase tracking-wideEditorial text-gold-muted">
                        {account.label}
                      </p>
                      <h3 className="pt-1 font-editorial text-2xl text-burgundy">
                        {account.recipientName}
                      </h3>
                    </CardHeader>

                    <CardContent className="flex flex-col items-center space-y-4">
                      <div className="relative h-44 w-44 overflow-hidden rounded-2xl border border-burgundy/10 bg-ivory p-2">
                        <Image
                          src={account.qrImage}
                          alt={`Mã QR mừng cưới ${account.recipientName}`}
                          fill
                          sizes="176px"
                          className="object-contain p-2"
                        />
                      </div>

                      <div className="space-y-1">
                        <p className="text-xs font-medium text-charcoal">
                          {account.bankName}
                        </p>
                        <p className="font-mono text-sm tracking-wider text-burgundy">
                          {account.accountNumber}
                        </p>
                      </div>

                      <p className="max-w-xs text-xs leading-relaxed text-charcoal-subtle">
                        {account.note}
                      </p>
                    </CardContent>
                  </div>

                  <div className="px-7 pb-7 pt-2">
                    <Button
                      variant={isCopied ? "primary" : "outline"}
                      onClick={() => handleCopy(account.id, account.accountNumber)}
                      className="w-full"
                    >
                      {isCopied ? (
                        <>
                          <Check className="h-3.5 w-3.5" />
                          <span>Đã Sao Chép Số Tài Khoản</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-3.5 w-3.5" />
                          <span>Sao Chép Số Tài Khoản</span>
                        </>
                      )}
                    </Button>
                  </div>
                </Card>
              </BlurFade>
            );
          })}
        </div>
      </div>
    </section>
  );
}

