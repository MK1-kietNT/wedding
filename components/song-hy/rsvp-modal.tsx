"use client";

import { useState } from "react";
import { CheckCircle2, X } from "lucide-react";
import type { GuestWish } from "@/types/wedding";

interface RsvpModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitted: (wish: GuestWish) => void;
}

export function RsvpModal({ isOpen, onClose, onSubmitted }: RsvpModalProps) {
  const [name, setName] = useState("");
  const [attendance, setAttendance] = useState<"attending" | "declining">(
    "attending"
  );
  const [guestsCount, setGuestsCount] = useState(1);
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim().length < 2) {
      setError("Vui lòng nhập tên của bạn (ít nhất 2 ký tự).");
      return;
    }

    setSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          attendance,
          guestsCount,
          message:
            message.trim() ||
            (attendance === "attending"
              ? "Hẹn gặp hai bạn trong ngày vui!"
              : "Chúc hai bạn trăm năm hạnh phúc!"),
        }),
      });

      const payload = (await response.json()) as {
        wish?: GuestWish;
        error?: string;
      };

      if (!response.ok || !payload.wish) {
        setError(payload.error ?? "Không thể gửi xác nhận. Vui lòng thử lại.");
        return;
      }

      onSubmitted(payload.wish);
      setSubmitted(true);
    } catch {
      setError("Lỗi kết nối. Vui lòng thử lại sau.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setError(null);
    setName("");
    setMessage("");
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="rsvp-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 px-4 backdrop-blur-sm"
      onClick={handleResetAndClose}
    >
      <div
        className="relative max-h-[90dvh] w-full max-w-[400px] overflow-y-auto rounded-2xl bg-white p-6 text-[#1e1e1e] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={handleResetAndClose}
          aria-label="Đóng"
          className="absolute right-4 top-4 rounded-full p-1 text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-700"
        >
          <X className="h-5 w-5" />
        </button>

        {submitted ? (
          <div className="py-6 text-center">
            <CheckCircle2 className="mx-auto h-12 w-12 text-[#990000]" />
            <h3 className="mt-4 font-serif text-xl font-bold text-[#990000]">
              Cảm ơn bạn đã xác nhận!
            </h3>
            <p className="mt-2 text-sm text-neutral-600">
              Gia đình rất trân trọng sự phản hồi và tình cảm của bạn.
            </p>
            <button
              type="button"
              onClick={handleResetAndClose}
              className="mt-6 w-full rounded-full bg-[#990000] py-2.5 text-sm font-semibold text-white transition hover:bg-[#7a0808]"
            >
              Đóng
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <h3
              id="rsvp-modal-title"
              className="text-center font-serif text-xl font-bold text-[#990000]"
            >
              Xác nhận tham dự
            </h3>

            <div>
              <label
                htmlFor="rsvp-name"
                className="mb-1.5 block text-xs font-semibold text-neutral-700"
              >
                Tên của bạn
              </label>
              <input
                id="rsvp-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nhập tên của bạn"
                className="w-full rounded-lg border border-neutral-300 px-3.5 py-2.5 text-base text-neutral-900 outline-none transition focus:border-[#990000] sm:text-sm"
              />
            </div>

            <div>
              <span className="mb-1.5 block text-xs font-semibold text-neutral-700">
                Bạn sẽ đến chứ?
              </span>
              <div className="grid grid-cols-1 gap-2">
                <label
                  className={`flex cursor-pointer items-center gap-2.5 rounded-lg border px-3.5 py-2.5 text-sm transition ${
                    attendance === "attending"
                      ? "border-[#990000] bg-[#fdf9ec] font-medium text-[#990000]"
                      : "border-neutral-200 text-neutral-700"
                  }`}
                >
                  <input
                    type="radio"
                    name="attendance"
                    checked={attendance === "attending"}
                    onChange={() => setAttendance("attending")}
                    className="accent-[#990000]"
                  />
                  <span>Tôi sẽ đến</span>
                </label>

                <label
                  className={`flex cursor-pointer items-center gap-2.5 rounded-lg border px-3.5 py-2.5 text-sm transition ${
                    attendance === "declining"
                      ? "border-[#990000] bg-[#fdf9ec] font-medium text-[#990000]"
                      : "border-neutral-200 text-neutral-700"
                  }`}
                >
                  <input
                    type="radio"
                    name="attendance"
                    checked={attendance === "declining"}
                    onChange={() => setAttendance("declining")}
                    className="accent-[#990000]"
                  />
                  <span>Rất tiếc, tôi không thể đến</span>
                </label>
              </div>
            </div>

            {attendance === "attending" && (
              <div>
                <label
                  htmlFor="rsvp-guests"
                  className="mb-1.5 block text-xs font-semibold text-neutral-700"
                >
                  Số lượng khách
                </label>
                <select
                  id="rsvp-guests"
                  value={guestsCount}
                  onChange={(e) => setGuestsCount(Number(e.target.value))}
                  className="w-full rounded-lg border border-neutral-300 px-3.5 py-2 text-sm text-neutral-900 outline-none focus:border-[#990000]"
                >
                  {[1, 2, 3, 4, 5, 6].map((n) => (
                    <option key={n} value={n}>
                      {n} người
                    </option>
                  ))}
                </select>
              </div>
            )}

            <div>
              <label
                htmlFor="rsvp-message"
                className="mb-1.5 block text-xs font-semibold text-neutral-700"
              >
                Lời chúc (tuỳ chọn)
              </label>
              <textarea
                id="rsvp-message"
                rows={2}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Gửi lời chúc đến cô dâu & chú rể..."
                className="w-full rounded-lg border border-neutral-300 px-3.5 py-2 text-base text-neutral-900 outline-none focus:border-[#990000] sm:text-sm"
              />
            </div>

            {error && <p className="text-xs text-red-600">{error}</p>}

            <button
              type="submit"
              disabled={submitting || name.trim().length < 2}
              className="w-full rounded-full bg-[#990000] py-2.5 text-sm font-semibold text-white transition hover:bg-[#7a0808] disabled:cursor-not-allowed disabled:opacity-50"
            >
              {submitting ? "Đang gửi..." : "Gửi xác nhận"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
