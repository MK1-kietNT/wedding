"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Trash2 } from "lucide-react";
import type { GuestWish } from "@/types/wedding";
import { FloralCornerArt, ScrollReveal } from "@/components/song-hy/motifs";

interface SongHyWishesProps {
  wishes: GuestWish[];
  onWishSubmitted: (wish: GuestWish) => void;
  onWishDeleted: (id: string) => void;
}

export function SongHyWishes({
  wishes,
  onWishSubmitted,
  onWishDeleted,
}: SongHyWishesProps) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [adminKey, setAdminKey] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const adminParam = params.get("admin");
    if (adminParam !== null) {
      setAdminKey(adminParam);
    }
  }, []);

  const handleDelete = async (id: string) => {
    setDeletingId(id);
    try {
      const qs = new URLSearchParams({ id });
      if (adminKey) qs.set("key", adminKey);
      const response = await fetch(`/api/rsvp?${qs.toString()}`, {
        method: "DELETE",
      });
      if (response.ok) {
        onWishDeleted(id);
      } else {
        const payload = (await response.json()) as { error?: string };
        setError(payload.error ?? "Không thể xóa lời chúc.");
      }
    } catch {
      setError("Lỗi kết nối khi xóa lời chúc.");
    } finally {
      setDeletingId(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim().length < 2 || message.trim().length < 3) {
      setError("Vui lòng nhập tên và lời chúc của bạn.");
      return;
    }

    setSubmitting(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          attendance: "attending",
          guestsCount: 1,
          message: message.trim(),
          source: "wish",
        }),
      });

      const payload = (await response.json()) as {
        wish?: GuestWish;
        error?: string;
      };

      if (!response.ok || !payload.wish) {
        setError(payload.error ?? "Không thể gửi lời chúc. Vui lòng thử lại.");
        return;
      }

      onWishSubmitted(payload.wish);
      setName("");
      setMessage("");
      setSuccess(true);
    } catch {
      setError("Lỗi kết nối. Vui lòng thử lại sau.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="relative overflow-hidden px-5 py-10 md:px-10">
      <FloralCornerArt position="bottom-left" />
      <FloralCornerArt position="bottom-right" />

      <ScrollReveal className="relative z-10 mx-auto max-w-[460px]">
        <h2 className="text-center font-serif text-xl font-bold uppercase tracking-[0.06em] text-[#ffe8a4] md:text-2xl">
          Sổ Lưu Bút
        </h2>

        {/* Compact Form */}
        <form onSubmit={handleSubmit} className="mt-5 space-y-3">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nhập tên*"
            aria-label="Nhập tên"
            className="w-full rounded-lg border border-[#ffe8a4]/45 bg-[#5e0404]/55 px-3.5 py-2.5 text-base text-[#fdf9ec] placeholder:text-[#ffe8a4]/55 outline-none transition focus:border-[#ffe8a4] sm:text-sm"
          />

          <textarea
            rows={3}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Nhập lời chúc*"
            aria-label="Nhập lời chúc"
            className="w-full rounded-lg border border-[#ffe8a4]/45 bg-[#5e0404]/55 px-3.5 py-2.5 text-base text-[#fdf9ec] placeholder:text-[#ffe8a4]/55 outline-none transition focus:border-[#ffe8a4] sm:text-sm"
          />

          {error && <p className="text-xs text-[#ffe8a4]">{error}</p>}
          {success && (
            <p className="text-xs text-[#ffe8a4]">
              Cảm ơn bạn đã gửi lời chúc đến hai gia đình!
            </p>
          )}

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={submitting}
              className="rounded-full bg-gradient-to-r from-[#ffe8a4] to-[#f5d076] px-6 py-2 text-xs font-bold uppercase tracking-wider text-[#7a0808] shadow transition hover:scale-[1.02] disabled:opacity-60"
            >
              {submitting ? "Đang gửi..." : "Gửi lời chúc"}
            </button>
          </div>
        </form>

        {/* Wishes Feed */}
        <div className="mt-6 max-h-[320px] space-y-2.5 overflow-y-auto pr-1">
          {wishes.map((wish, idx) => (
            <motion.div
              key={wish.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, delay: Math.min(idx * 0.05, 0.25) }}
              className="rounded-lg border border-[#ffe8a4]/35 bg-[#5e0404]/45 px-4 py-3 text-left"
            >
              <div className="flex items-center justify-between gap-2">
                <p className="text-xs font-bold text-[#ffe8a4]">{wish.name}</p>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-[#fdf9ec]/65">
                    {wish.createdAt}
                  </span>
                  {adminKey !== null && (
                    <button
                      type="button"
                      onClick={() => handleDelete(wish.id)}
                      disabled={deletingId === wish.id}
                      aria-label="Xóa lời chúc"
                      title="Xóa lời chúc"
                      className="rounded p-1 text-[#ffe8a4]/75 transition hover:bg-white/10 hover:text-white disabled:opacity-40"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  )}
                </div>
              </div>
              <p className="mt-1 text-xs leading-relaxed text-[#fdf9ec]/95">
                {wish.message}
              </p>
            </motion.div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
