"use client";

import { useState } from "react";
import { Trash2, Users, UserCheck, UserX, MessageSquare } from "lucide-react";
import type { StoredRsvpRecord } from "@/lib/rsvp-store";

interface AdminRsvpTableProps {
  initialRecords: StoredRsvpRecord[];
  adminKey: string;
}

export function AdminRsvpTable({
  initialRecords,
  adminKey,
}: AdminRsvpTableProps) {
  const [records, setRecords] = useState<StoredRsvpRecord[]>(initialRecords);
  const [filter, setFilter] = useState<"all" | "attending" | "declining">("all");
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const attendingRecords = records.filter((r) => r.attendance === "attending");
  const decliningRecords = records.filter((r) => r.attendance === "declining");
  const totalGuests = attendingRecords.reduce(
    (sum, r) => sum + (r.guestsCount || 1),
    0
  );

  const visibleRecords =
    filter === "all"
      ? records
      : filter === "attending"
        ? attendingRecords
        : decliningRecords;

  const handleDelete = async (id: string) => {
    setDeletingId(id);
    setError(null);
    try {
      const qs = new URLSearchParams({ id, type: "rsvp" });
      if (adminKey) qs.set("key", adminKey);
      const response = await fetch(`/api/rsvp?${qs.toString()}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        const payload = (await response.json()) as { error?: string };
        setError(payload.error ?? "Không thể xóa phản hồi.");
        return;
      }
      setRecords((prev) => prev.filter((item) => item.id !== id));
    } catch {
      setError("Lỗi kết nối khi xóa.");
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <div className="rounded-xl border border-[#e8c987] bg-[#fdf9ec] p-4 shadow-sm">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#990000]/75">
            <MessageSquare className="h-4 w-4" />
            <span>Tổng phản hồi</span>
          </div>
          <p className="mt-2 font-serif text-2xl font-bold text-[#990000]">
            {records.length}
          </p>
        </div>

        <div className="rounded-xl border border-[#e8c987] bg-[#fdf9ec] p-4 shadow-sm">
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700">
            <UserCheck className="h-4 w-4" />
            <span>Sẽ tham dự</span>
          </div>
          <p className="mt-2 font-serif text-2xl font-bold text-emerald-700">
            {attendingRecords.length}
          </p>
        </div>

        <div className="rounded-xl border border-[#e8c987] bg-[#fdf9ec] p-4 shadow-sm">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#990000]">
            <Users className="h-4 w-4" />
            <span>Tổng số khách</span>
          </div>
          <p className="mt-2 font-serif text-2xl font-bold text-[#990000]">
            {totalGuests}
          </p>
        </div>

        <div className="rounded-xl border border-[#e8c987] bg-[#fdf9ec] p-4 shadow-sm">
          <div className="flex items-center gap-2 text-xs font-semibold text-neutral-600">
            <UserX className="h-4 w-4" />
            <span>Báo bận</span>
          </div>
          <p className="mt-2 font-serif text-2xl font-bold text-neutral-700">
            {decliningRecords.length}
          </p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2">
        {(
          [
            { id: "all", label: `Tất cả (${records.length})` },
            { id: "attending", label: `Tham dự (${attendingRecords.length})` },
            { id: "declining", label: `Báo bận (${decliningRecords.length})` },
          ] as const
        ).map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setFilter(tab.id)}
            className={`rounded-full px-4 py-1.5 text-xs font-semibold transition ${
              filter === tab.id
                ? "bg-[#990000] text-white"
                : "border border-[#e8c987] bg-white text-[#990000] hover:bg-[#fdf9ec]"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {error && (
        <p className="rounded-lg bg-red-50 px-3 py-2 text-xs text-red-700">
          {error}
        </p>
      )}

      {/* Records List */}
      {visibleRecords.length === 0 ? (
        <div className="rounded-xl border border-dashed border-[#e8c987] bg-[#fdf9ec]/50 py-10 text-center text-sm text-neutral-500">
          Chưa có dữ liệu xác nhận tham dự nào.
        </div>
      ) : (
        <div className="space-y-3">
          {visibleRecords.map((item) => {
            const isAttending = item.attendance === "attending";
            return (
              <div
                key={item.id}
                className="flex items-start justify-between gap-3 rounded-xl border border-[#e8c987]/80 bg-white p-4 shadow-sm"
              >
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-sm font-bold text-[#990000]">
                      {item.name}
                    </p>
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${
                        isAttending
                          ? "bg-emerald-50 text-emerald-700"
                          : "bg-neutral-100 text-neutral-600"
                      }`}
                    >
                      {isAttending
                        ? `Tham dự · ${item.guestsCount || 1} người`
                        : "Không thể đến"}
                    </span>
                    <span className="text-[11px] text-neutral-400">
                      {item.createdAt.slice(0, 10)}
                    </span>
                  </div>

                  {item.message && (
                    <p className="mt-1.5 text-xs leading-relaxed text-neutral-700">
                      {item.message}
                    </p>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => handleDelete(item.id)}
                  disabled={deletingId === item.id}
                  aria-label="Xóa phản hồi"
                  title="Xóa phản hồi"
                  className="shrink-0 rounded-lg p-2 text-neutral-400 transition hover:bg-red-50 hover:text-red-600 disabled:opacity-40"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
