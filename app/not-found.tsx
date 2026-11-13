import Link from "next/link";
import { COUPLE_PROFILE } from "@/data/wedding";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-ivory px-6 text-center">
      <p className="text-[11px] uppercase tracking-wideEditorial text-gold-muted">
        {COUPLE_PROFILE.monogram}
      </p>
      <h1 className="mt-4 font-editorial text-display-lg text-burgundy">
        Không Tìm Thấy Trang
      </h1>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-charcoal-muted">
        Đường dẫn bạn truy cập không tồn tại. Vui lòng quay lại trang chính của thiệp cưới.
      </p>
      <Link href="/" className="mt-8">
        <Button variant="primary">Về Trang Chủ</Button>
      </Link>
    </main>
  );
}

