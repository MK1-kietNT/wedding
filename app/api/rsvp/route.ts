import { NextResponse } from "next/server";
import { rsvpSchema } from "@/lib/validations/rsvp";
import type { GuestWish } from "@/types/wedding";

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();
    const parsed = rsvpSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          error: "Validation failed",
          issues: parsed.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const { name, attendance, message } = parsed.data;

    // Mock persistence response — ready to connect to Upstash Redis / Neon Postgres
    const wish: GuestWish = {
      id: `wish-${Date.now()}`,
      name,
      relation: attendance === "attending" ? "Attending Guest" : "Sending Warm Wishes",
      message,
      attendance,
      createdAt: new Date().toISOString().slice(0, 10),
    };

    return NextResponse.json({ success: true, wish }, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Invalid request payload" },
      { status: 400 }
    );
  }
}

