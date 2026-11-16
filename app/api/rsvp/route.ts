import { NextResponse } from "next/server";
import { rsvpSchema } from "@/lib/validations/rsvp";
import {
  deleteGuestWish,
  deleteRsvpRecord,
  getGuestWishes,
  saveRsvpSubmission,
} from "@/lib/rsvp-store";

export async function GET() {
  try {
    const wishes = await getGuestWishes();
    return NextResponse.json({ wishes }, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: "Không thể tải danh sách lời chúc." },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();
    const parsed = rsvpSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          error: "Thông tin chưa hợp lệ. Vui lòng kiểm tra lại.",
          issues: parsed.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const wish = await saveRsvpSubmission(parsed.data);

    return NextResponse.json({ success: true, wish }, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Không thể lưu phản hồi lúc này. Vui lòng thử lại." },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id")?.trim();
    const type = searchParams.get("type")?.trim() ?? "wish";
    const adminKey = searchParams.get("key")?.trim();
    const configuredKey = process.env.ADMIN_DELETE_KEY;

    // Require matching key in production if ADMIN_DELETE_KEY is set
    if (configuredKey && adminKey !== configuredKey) {
      return NextResponse.json(
        { error: "Không có quyền xóa lời chúc." },
        { status: 403 }
      );
    }

    if (!configuredKey && process.env.NODE_ENV === "production") {
      return NextResponse.json(
        { error: "Chưa cấu hình ADMIN_DELETE_KEY để xóa trên production." },
        { status: 403 }
      );
    }

    if (!id) {
      return NextResponse.json(
        { error: "Thiếu id lời chúc cần xóa." },
        { status: 400 }
      );
    }

    const deleted =
      type === "rsvp"
        ? await deleteRsvpRecord(id)
        : await deleteGuestWish(id);
    if (!deleted) {
      return NextResponse.json(
        { error: "Không tìm thấy lời chúc để xóa." },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: "Không thể xóa lời chúc lúc này." },
      { status: 500 }
    );
  }
}
