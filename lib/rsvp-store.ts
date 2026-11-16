import { promises as fs } from "node:fs";
import path from "node:path";
import { Redis } from "@upstash/redis";
import { INITIAL_GUEST_WISHES } from "@/data/wedding";
import type { RsvpFormValues } from "@/lib/validations/rsvp";
import type { GuestWish } from "@/types/wedding";

const WISHES_KEY = "wedding:wishes";
const RSVPS_KEY = "wedding:rsvps";
const LOCAL_DATA_DIR = path.join(process.cwd(), ".data");
const LOCAL_WISHES_FILE = path.join(LOCAL_DATA_DIR, "wishes.json");
const LOCAL_RSVPS_FILE = path.join(LOCAL_DATA_DIR, "rsvps.json");

interface StoredRsvpRecord extends RsvpFormValues {
  id: string;
  createdAt: string;
}

function getRedisClient(): Redis | null {
  const url =
    process.env.UPSTASH_REDIS_REST_URL ?? process.env.KV_REST_API_URL;
  const token =
    process.env.UPSTASH_REDIS_REST_TOKEN ?? process.env.KV_REST_API_TOKEN;

  if (!url || !token) return null;
  return new Redis({ url, token });
}

async function readLocalJson<T>(filePath: string, fallback: T): Promise<T> {
  try {
    const raw = await fs.readFile(filePath, "utf8");
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

async function writeLocalJson<T>(filePath: string, data: T): Promise<void> {
  await fs.mkdir(LOCAL_DATA_DIR, { recursive: true });
  await fs.writeFile(filePath, JSON.stringify(data, null, 2), "utf8");
}

export async function getGuestWishes(): Promise<GuestWish[]> {
  const redis = getRedisClient();

  if (redis) {
    try {
      const stored = await redis.lrange<GuestWish>(WISHES_KEY, 0, 99);
      if (stored.length > 0) {
        return stored;
      }
      return INITIAL_GUEST_WISHES;
    } catch {
      return INITIAL_GUEST_WISHES;
    }
  }

  const localWishes = await readLocalJson<GuestWish[]>(LOCAL_WISHES_FILE, []);
  return localWishes.length > 0
    ? [...localWishes, ...INITIAL_GUEST_WISHES]
    : INITIAL_GUEST_WISHES;
}

export async function saveRsvpSubmission(
  input: RsvpFormValues
): Promise<GuestWish> {
  const createdAt = new Date().toISOString();
  const id = `wish-${Date.now()}`;

  const wish: GuestWish = {
    id,
    name: input.name,
    relation:
      input.attendance === "attending"
        ? `Tham dự · ${input.guestsCount} khách`
        : "Gửi lời chúc từ xa",
    message: input.message,
    attendance: input.attendance,
    createdAt: createdAt.slice(0, 10),
  };

  const rsvpRecord: StoredRsvpRecord = {
    ...input,
    id,
    createdAt,
  };

  const redis = getRedisClient();

  if (redis) {
    await Promise.all([
      redis.lpush(WISHES_KEY, wish),
      redis.lpush(RSVPS_KEY, rsvpRecord),
    ]);
    return wish;
  }

  const [existingWishes, existingRsvps] = await Promise.all([
    readLocalJson<GuestWish[]>(LOCAL_WISHES_FILE, []),
    readLocalJson<StoredRsvpRecord[]>(LOCAL_RSVPS_FILE, []),
  ]);

  await Promise.all([
    writeLocalJson(LOCAL_WISHES_FILE, [wish, ...existingWishes]),
    writeLocalJson(LOCAL_RSVPS_FILE, [rsvpRecord, ...existingRsvps]),
  ]);

  return wish;
}

export async function deleteGuestWish(id: string): Promise<boolean> {
  const redis = getRedisClient();

  if (redis) {
    const stored = await redis.lrange<GuestWish>(WISHES_KEY, 0, -1);
    const filtered = stored.filter((item) => item.id !== id);
    if (filtered.length === stored.length) return false;

    await redis.del(WISHES_KEY);
    if (filtered.length > 0) {
      // rpush preserves the existing newest-first order
      await redis.rpush(WISHES_KEY, ...filtered);
    }
    return true;
  }

  const existingWishes = await readLocalJson<GuestWish[]>(LOCAL_WISHES_FILE, []);
  const filtered = existingWishes.filter((item) => item.id !== id);
  if (filtered.length === existingWishes.length) return false;

  await writeLocalJson(LOCAL_WISHES_FILE, filtered);
  return true;
}

