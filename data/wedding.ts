import type {
  ConciseCeremony,
  CoupleProfile,
  GalleryPhoto,
  GiftAccount,
  GuestWish,
  MusicTrack,
  ReceptionDetails,
  WeddingEvent,
} from "@/types/wedding";

export const COUPLE_PROFILE: CoupleProfile = {
  groom: {
    firstName: "Văn Huy",
    fullName: "Mã Văn Huy",
    parents: {
      father: "Ông Nguyễn Văn Hưởng",
      mother: "Bà Chu Thị Lương",
    },
    role: "Chú Rể",
  },
  bride: {
    firstName: "Hà Vy",
    fullName: "Nguyễn Thị Hà Vy",
    parents: {
      father: "Ông Nguyễn Văn Huy",
      mother: "Bà Nguyễn Thị Hoa",
    },
    role: "Cô Dâu",
  },
  monogram: "H & V",
  weddingDateISO: "2026-12-24T11:00:00+07:00",
  weddingDateDisplay: "24 tháng 12, 2026",
  weddingDayOfWeek: "Thứ Năm",
  locationSummary: "Tư gia & Nhà hàng Tiệc Cưới",
  heroQuote:
    "Hai gia đình trân trọng báo tin lễ thành hôn của hai con chúng tôi.",
  heroImage: "/images/hero.jpg",
};

export const CEREMONY_BLOCKS: ConciseCeremony[] = [
  {
    id: "vu-quy",
    title: "Lễ Vu Quy",
    time: "09:00",
    dayOfWeek: "Chủ Nhật",
    day: "20",
    month: "12",
    year: "2026",
    lunarDate: "(Tức ngày 12 tháng 11 năm Bính Ngọ)",
  },
  {
    id: "tiec-cuoi",
    title: "Tiệc Cưới",
    time: "--:--",
    dayOfWeek: "Thứ 5",
    day: "24",
    month: "12",
    year: "2026",
    lunarDate: "(Tức ngày 16 tháng 11 năm Bính Ngọ)",
  },
];

export const RECEPTION_DETAILS: ReceptionDetails = {
  time: "--:--",
  dayOfWeek: "Thứ 5",
  day: "24",
  month: "12",
  year: "2026",
  lunarDate: "(Tức 16 / 11 năm Bính Ngọ)",
  welcomeTime: "--:--",
  partyTime: "--:--",
  venueName: "Địa điểm tổ chức tiệc cưới",
  venueAddress: "Đang cập nhật địa chỉ cụ thể",
  mapsUrl: "https://maps.google.com/?q=Hanoi+Vietnam",
  mapsEmbedQuery: "Hanoi,Vietnam",
  calendarTitle: "Tiệc Cưới Mã Văn Huy & Nguyễn Thị Hà Vy",
  calendarStartISO: "20261224T110000",
  calendarEndISO: "20261224T143000",
};

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: "photo-1",
    src: "/images/gallery-1.jpg",
    alt: "Khoảnh khắc hạnh phúc của Văn Huy và Hà Vy",
    caption: "Lời Hứa Trọn Đời",
    width: 900,
    height: 1200,
  },
  {
    id: "photo-2",
    src: "/images/gallery-2.jpg",
    alt: "Bàn tiệc cưới ấm cúng",
    caption: "Ngày Chung Đôi",
    width: 1200,
    height: 900,
  },
  {
    id: "photo-3",
    src: "/images/gallery-3.jpg",
    alt: "Chân dung cô dâu Hà Vy",
    caption: "Nắng Mai",
    width: 900,
    height: 1200,
  },
  {
    id: "photo-4",
    src: "/images/gallery-4.jpg",
    alt: "Chú rể Văn Huy trước giờ làm lễ",
    caption: "Khoảnh Khắc Thiêng Liêng",
    width: 900,
    height: 1200,
  },
  {
    id: "photo-5",
    src: "/images/gallery-5.jpg",
    alt: "Văn Huy và Hà Vy bên nhau lúc hoàng hôn",
    caption: "Hạnh Phúc Ngập Tràn",
    width: 1200,
    height: 900,
  },
  {
    id: "photo-6",
    src: "/images/gallery-6.jpg",
    alt: "Thiệp cưới Song Hỷ truyền thống",
    caption: "Dấu Ấn Hạnh Phúc",
    width: 900,
    height: 1200,
  },
];

// Kept for structured-data compatibility
export const WEDDING_EVENTS: WeddingEvent[] = [
  {
    id: "bride",
    title: "Lễ Vu Quy",
    subtitle: "Nghi Lễ Gia Tiên",
    date: "Chủ Nhật, 20 Tháng 12, 2026",
    time: "09:00",
    venue: "Tư Gia Nhà Gái",
    address: "Đang cập nhật địa chỉ",
    mapsUrl: "https://maps.google.com/?q=Hanoi+Vietnam",
    dressCode: "Trang trọng",
  },
  {
    id: "groom",
    title: "Tiệc Cưới",
    subtitle: "Chung Vui Cùng Hai Gia Đình",
    date: "Thứ 5, 24 Tháng 12, 2026",
    time: "--:--",
    venue: RECEPTION_DETAILS.venueName,
    address: RECEPTION_DETAILS.venueAddress,
    mapsUrl: RECEPTION_DETAILS.mapsUrl,
    dressCode: "Trang trọng",
  },
];

export const GIFT_ACCOUNTS: GiftAccount[] = [
  {
    id: "groom",
    label: "Mừng Cưới Chú Rể",
    recipientName: "Mã Văn Huy",
    bankName: "Vietcombank (Đang cập nhật)",
    accountNumber: "0000 0000 0000",
    qrImage: "/images/qr-groom.svg",
    note: "Xin chân thành cảm ơn tình cảm và lời chúc phúc của quý khách.",
  },
  {
    id: "bride",
    label: "Mừng Cưới Cô Dâu",
    recipientName: "Nguyễn Thị Hà Vy",
    bankName: "Techcombank (Đang cập nhật)",
    accountNumber: "0000 0000 0000",
    qrImage: "/images/qr-bride.svg",
    note: "Sự hiện diện của bạn là món quà quý giá nhất đối với chúng mình.",
  },
];

export const INITIAL_GUEST_WISHES: GuestWish[] = [
  {
    id: "wish-1",
    name: "Gia đình & Bạn bè",
    relation: "Khách mời",
    message:
      "Chúc mừng hạnh phúc Văn Huy & Hà Vy! Chúc hai bạn trăm năm hòa thuận, mãi mãi bên nhau.",
    attendance: "attending",
    createdAt: "2026-11-16",
  },
  {
    id: "wish-2",
    name: "Hội bạn thân",
    relation: "Bạn thân",
    message:
      "Chúc cô dâu chú rể có một đám cưới thật trọn vẹn, ấm áp và ngập tràn tiếng cười!",
    attendance: "attending",
    createdAt: "2026-11-16",
  },
];

export const MUSIC_TRACK: MusicTrack = {
  title: "Khúc Dạo Đầu Ngày Cưới",
  artist: "Văn Huy & Hà Vy",
  src: "/music/wedding.mp3",
};
