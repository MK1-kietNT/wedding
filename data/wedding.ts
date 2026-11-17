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
    firstName: "Nguyễn Huy",
    fullName: "Nguyễn Huy",
    parents: {
      father: "Ông Nguyễn Văn Hường",
      mother: "Bà Chu Thị Lương",
    },
    role: "Chú Rể",
  },
  bride: {
    firstName: "Hà Vy",
    fullName: "Hà Vy",
    parents: {
      father: "Ông Nguyễn Văn Hùng",
      mother: "Bà Nguyễn Thị Thoa",
    },
    role: "Cô Dâu",
  },
  monogram: "H & V",
  weddingDateISO: "2026-12-24T11:00:00+07:00",
  weddingDateDisplay: "24 tháng 12, 2026",
  weddingDayOfWeek: "Thứ 5",
  locationSummary: "Xóm Đà Sơn 1, Đô Lương, Nghệ An",
  heroQuote:
    "Hai gia đình trân trọng báo tin lễ thành hôn của hai con chúng tôi.",
  heroImage: "/images/hero.jpg",
};

export const CEREMONY_BLOCKS: ConciseCeremony[] = [
  {
    id: "thanh-hon",
    title: "Lễ Thành Hôn",
    time: "11:00",
    dayOfWeek: "Thứ 5",
    day: "24",
    month: "12",
    year: "2026",
    lunarDate: "(Tức ngày 16/11 năm Bính Ngọ)",
    venue: "Tại Tư Gia Nhà Trai · Xóm Đà Sơn 1, Đô Lương - Nghệ An",
    mapsUrl: "https://maps.app.goo.gl/6SGztD8jUWuq3q6c7",
  },
  {
    id: "vu-quy",
    title: "Lễ Vu Quy",
    time: "08:00",
    dayOfWeek: "Chủ Nhật",
    day: "20",
    month: "12",
    year: "2026",
    lunarDate: "(Tức ngày 12/11 năm Bính Ngọ)",
    venue: "Tại Tư Gia Nhà Gái · Xóm Long Bình, Nam Đàn, Nghệ An",
    mapsUrl: "https://maps.app.goo.gl/TRHkUPFAdXNQFTuu6",
  },
  {
    id: "than-mat",
    title: "Bữa Cơm Thân Mật",
    time: "10:00",
    dayOfWeek: "Chủ Nhật",
    day: "20",
    month: "12",
    year: "2026",
    lunarDate: "(Tức ngày 12/11 năm Bính Ngọ)",
    venue: "Tại Tư Gia Nhà Gái · Xóm Long Bình, Nam Đàn, Nghệ An",
    mapsUrl: "https://maps.app.goo.gl/TRHkUPFAdXNQFTuu6",
  },
];

export const RECEPTION_DETAILS: ReceptionDetails = {
  time: "11:00",
  dayOfWeek: "Thứ 5",
  day: "24",
  month: "12",
  year: "2026",
  lunarDate: "(Tức 16 / 11 năm Bính Ngọ)",
  welcomeTime: "10:30",
  partyTime: "11:00", 
  venueName: "Tư Gia Nhà Trai",
  venueAddress: "Xóm Đà Sơn 1, Đô Lương, Nghệ An",
  mapsUrl: "https://maps.app.goo.gl/6SGztD8jUWuq3q6c7",
  mapsEmbedQuery: "Xóm Đà Sơn 1, Đô Lương, Nghệ An",
  calendarTitle: "Lễ Thành Hôn Nguyễn Huy & Hà Vy",
  calendarStartISO: "20261224T110000",
  calendarEndISO: "20261224T143000",
};

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: "photo-1",
    src: "/images/gallery-1.jpg",
    alt: "Khoảnh khắc hạnh phúc của Nguyễn Huy và Hà Vy",
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
    alt: "Chú rể Nguyễn Huy trước giờ làm lễ",
    caption: "Khoảnh Khắc Thiêng Liêng",
    width: 900,
    height: 1200,
  },
  {
    id: "photo-5",
    src: "/images/gallery-5.jpg",
    alt: "Nguyễn Huy và Hà Vy bên nhau lúc hoàng hôn",
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
    time: "08:00",
    venue: "Tư Gia Nhà Gái",
    address: "Xóm Long Bình, Nam Đàn, Nghệ An",
    mapsUrl: "https://maps.app.goo.gl/TRHkUPFAdXNQFTuu6",
    dressCode: "Trang trọng",
  },
  {
    id: "groom",
    title: "Lễ Thành Hôn",
    subtitle: "Chung Vui Cùng Hai Gia Đình",
    date: "Thứ 5, 24 Tháng 12, 2026",
    time: "11:00",
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
    recipientName: "Nguyễn Huy",
    bankName: "Vietcombank",
    accountNumber: "1021447102",
    qrImage: "/images/qr huy1.jpg",
    note: "Xin chân thành cảm ơn tình cảm và lời chúc phúc của quý khách.",
  },
  {
    id: "bride",
    label: "Mừng Cưới Cô Dâu",
    recipientName: "Hà Vy",
    bankName: "VietinBank",
    accountNumber: "105869642307",
    qrImage: "/images/qr vy.jpg",
    note: "Sự hiện diện của bạn là món quà quý giá nhất đối với chúng mình.",
  },
];

export const INITIAL_GUEST_WISHES: GuestWish[] = [
  {
    id: "wish-1",
    name: "Gia đình & Bạn bè",
    relation: "Khách mời",
    message:
      "Chúc mừng hạnh phúc Nguyễn Huy & Hà Vy! Chúc hai bạn trăm năm hòa thuận, mãi mãi bên nhau.",
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
  artist: "Nguyễn Huy & Hà Vy",
  src: "/music/wedding.mp3",
};
