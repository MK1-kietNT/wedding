import { COUPLE_PROFILE, WEDDING_EVENTS } from "@/data/wedding";

export function getWeddingStructuredData() {
  const reception = WEDDING_EVENTS[1] ?? WEDDING_EVENTS[0];

  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: `${COUPLE_PROFILE.bride.firstName} & ${COUPLE_PROFILE.groom.firstName} — Wedding Celebration`,
    startDate: COUPLE_PROFILE.weddingDateISO,
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "Place",
      name: reception.venue,
      address: {
        "@type": "PostalAddress",
        streetAddress: reception.address,
        addressLocality: "Ho Chi Minh City",
        addressCountry: "VN",
      },
    },
    description: COUPLE_PROFILE.heroQuote,
    organizer: {
      "@type": "Person",
      name: `${COUPLE_PROFILE.bride.fullName} & ${COUPLE_PROFILE.groom.fullName}`,
    },
  };
}

