import Link from "next/link";
import { ArrowLeft, Lock } from "lucide-react";
import { getRsvpRecords } from "@/lib/rsvp-store";
import { AdminRsvpTable } from "@/components/song-hy/admin-rsvp-table";

export const dynamic = "force-dynamic";

interface AdminPageProps {
  searchParams: Promise<{ key?: string }>;
}

export default async function AdminPage({ searchParams }: AdminPageProps) {
  const params = await searchParams;
  const providedKey = params.key?.trim() ?? "";
  const configuredKey = process.env.ADMIN_DELETE_KEY;

  const isAuthorized = configuredKey
    ? providedKey === configuredKey
    : process.env.NODE_ENV !== "production";

  if (!isAuthorized) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#7a0808] px-4">
        <form
          method="GET"
          action="/admin"
          className="w-full max-w-[360px] rounded-2xl border border-[#e8c987] bg-[#fdf9ec] p-6 text-center shadow-2xl"
        >
          <Lock className="mx-auto h-9 w-9 text-[#990000]" />
          <h1 className="mt-3 font-serif text-xl font-bold text-[#990000]">
            Quản lý Khách Mời
          </h1>
          <p className="mt-1 text-xs text-neutral-600">
            Nhập mã quản trị để xem danh sách xác nhận tham dự.
          </p>

          <input
            type="password"
            name="key"
            required
            placeholder="Nhập mã quản trị..."
            className="mt-4 w-full rounded-lg border border-[#e8c987] bg-white px-3.5 py-2.5 text-base text-neutral-900 outline-none focus:border-[#990000] sm:text-sm"
          />

          <button
            type="submit"
            className="mt-4 w-full rounded-full bg-[#990000] py-2.5 text-sm font-semibold text-white transition hover:bg-[#7a0808]"
          >
            Đăng nhập
          </button>
        </form>
      </main>
    );
  }

  const records = await getRsvpRecords();

  return (
    <main className="min-h-screen bg-[#faf6ea] px-4 py-8 text-[#1e1e1e]">
      <div className="mx-auto max-w-3xl">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#990000] hover:underline"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Về trang thiệp cưới
            </Link>
            <h1 className="mt-2 font-serif text-2xl font-bold text-[#990000]">
              Danh Sách Xác Nhận Tham Dự
            </h1>
          </div>
        </div>

        <AdminRsvpTable initialRecords={records} adminKey={providedKey} />
      </div>
    </main>
  );
}
