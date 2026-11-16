"use client";

import { useState } from "react";
import Image from "next/image";
import { Check, Copy, Download, X } from "lucide-react";
import { GIFT_ACCOUNTS } from "@/data/wedding";

interface GiftModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function GiftModal({ isOpen, onClose }: GiftModalProps) {
  const [activeId, setActiveId] = useState<"groom" | "bride">("groom");
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const account =
    GIFT_ACCOUNTS.find((item) => item.id === activeId) ?? GIFT_ACCOUNTS[0];

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(
        account.accountNumber.replace(/\s+/g, "")
      );
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard fallback ignored
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="gift-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90dvh] w-full max-w-[390px] overflow-y-auto rounded-2xl border border-[#ffe8a4]/40 bg-[#7a0808] text-center text-[#fdf9ec] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative border-b border-[#ffe8a4]/25 bg-[#630505] px-5 py-4">
          <h3
            id="gift-modal-title"
            className="font-serif text-lg font-bold uppercase tracking-wider text-[#ffe8a4]"
          >
            Hộp Quà Mừng
          </h3>
          <button
            type="button"
            onClick={onClose}
            aria-label="Đóng"
            className="absolute right-3.5 top-3.5 rounded-full p-1 text-[#ffe8a4]/80 transition hover:bg-white/10 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-5">
          {/* Groom / Bride Switcher */}
          <div className="mb-4 grid grid-cols-2 gap-2 rounded-full bg-[#4d0000]/60 p-1">
            {GIFT_ACCOUNTS.map((item) => {
              const isActive = item.id === activeId;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    setActiveId(item.id);
                    setCopied(false);
                  }}
                  className={`rounded-full py-1.5 text-xs font-semibold transition ${
                    isActive
                      ? "bg-[#ffe8a4] text-[#7a0808]"
                      : "text-[#ffe8a4]/85 hover:text-white"
                  }`}
                >
                  {item.id === "groom" ? "Chú Rể" : "Cô Dâu"}
                </button>
              );
            })}
          </div>

          <p className="text-xs font-medium uppercase tracking-wider text-[#ffe8a4]">
            {account.label} — {account.recipientName}
          </p>

          {/* QR Code Card */}
          <div className="mx-auto mt-3 flex w-48 items-center justify-center rounded-xl bg-white p-3 shadow-md">
            <Image
              src={account.qrImage}
              alt={`Mã QR ${account.recipientName}`}
              width={168}
              height={168}
              className="h-40 w-40 object-contain"
            />
          </div>

          {/* Bank Details */}
          <div className="mt-4 space-y-1 text-sm">
            <p className="font-semibold text-white">{account.bankName}</p>
            <p className="font-mono text-base font-bold tracking-wider text-[#ffe8a4]">
              {account.accountNumber}
            </p>
            <p className="text-xs text-[#fdf9ec]/85">{account.recipientName}</p>
          </div>

          <div className="mt-5 flex items-center justify-center gap-2.5">
            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 rounded-full border border-[#ffe8a4]/60 bg-[#630505] px-4 py-2 text-xs font-semibold text-[#ffe8a4] transition hover:bg-[#4d0000]"
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5" />
                  Đã sao chép
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" />
                  Sao chép STK
                </>
              )}
            </button>

            <a
              href={account.qrImage}
              download={`qr-${account.id}.svg`}
              className="inline-flex items-center gap-1.5 rounded-full bg-[#ffe8a4] px-4 py-2 text-xs font-semibold text-[#7a0808] transition hover:bg-[#f5d076]"
            >
              <Download className="h-3.5 w-3.5" />
              Lưu QR
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
