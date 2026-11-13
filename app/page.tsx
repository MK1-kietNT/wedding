import { WeddingExperience } from "@/components/layout/wedding-experience";
import { getGuestWishes } from "@/lib/rsvp-store";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const initialWishes = await getGuestWishes();
  return <WeddingExperience initialWishes={initialWishes} />;
}
