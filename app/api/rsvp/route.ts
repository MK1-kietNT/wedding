import { NextResponse } from "next/server";
import { rsvpSchema } from "@/lib/validations/rsvp";
import { getGuestWishes, saveRsvpSubmission } from "@/lib/rsvp-store";

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
