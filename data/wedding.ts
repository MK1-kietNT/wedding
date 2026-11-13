import type {
  CoupleProfile,
  GalleryPhoto,
  GiftAccount,
  GuestWish,
  InvitationContent,
  LoveStoryMilestone,
  MusicTrack,
  WeddingEvent,
} from "@/types/wedding";

export const COUPLE_PROFILE: CoupleProfile = {
  bride: {
    firstName: "Minh Thư",
    fullName: "Nguyễn Minh Thư",
    parents: "Trưởng nữ Ông Nguyễn Văn Minh & Bà Trần Thanh Hương",
    role: "Cô Dâu",
  },
  groom: {
    firstName: "Hoàng Nam",
    fullName: "Phạm Hoàng Nam",
    parents: "Thứ nam Ông Phạm Đức Long & Bà Lê Thị Mai",
    role: "Chú Rể",
  },
  monogram: "T & N",
  weddingDateISO: "2027-06-12T17:30:00+07:00",
  weddingDateDisplay: "12 Tháng 06, 2027",
  weddingDayOfWeek: "Thứ Bảy",
  locationSummary: "Villa Éclat · TP. Hồ Chí Minh",
  heroQuote:
    "Giữa những buổi sáng bình yên và những chân trời xa, chúng mình đã tìm thấy nhà trong ánh mắt của nhau.",
  heroImage: "/images/hero.jpg",
  storyCoverImage: "/images/story-cover.jpg",
};

export const INVITATION_CONTENT: InvitationContent = {
  eyebrow: "Trân Trọng Kính Mời",
  heading:
    "Cùng với hai bên gia đình, chúng mình hân hoan kính mời bạn đến chung vui trong ngày trọng đại.",
  paragraphs: [
    "Từ một buổi chiều trò chuyện chậm rãi bên tách cà phê, hành trình của chúng mình đã lớn dần bằng sự thấu hiểu, tiếng cười và những điều giản dị nhất.",
    "Sự hiện diện và lời chúc phúc của gia đình, người thân cùng những người bạn thương quý sẽ là món quà trọn vẹn nhất cho khởi đầu mới của hai đứa.",
  ],
  signature: "Thương mến, Minh Thư & Hoàng Nam",
};

export const LOVE_STORY_MILESTONES: LoveStoryMilestone[] = [
  {
    id: "first-met",
    phase: "Chương I",
    date: "Tháng 10, 2022",
    title: "Lần Đầu Gặp Gỡ",
    description:
      "Một buổi triển lãm mùa thu tại Quận 1, khi cả hai cùng với tay lấy một cuốn sách kiến trúc và mải mê trò chuyện cho đến lúc đèn phòng tranh tắt.",
    location: "Sài Gòn",
  },
  {
    id: "dating",
    phase: "Chương II",
    date: "Mùa Xuân, 2023",
    title: "Những Ngày Hẹn Hò",
    description:
      "Những sáng cuối tuần dạo chợ hoa, những chuyến đi Đà Lạt dưới cơn mưa nhẹ, và nhận ra bình yên thực sự là khi được ở cạnh nhau.",
    location: "Đà Lạt & Sài Gòn",
  },
  {
    id: "proposal",
    phase: "Chương III",
    date: "Tháng 11, 2025",
    title: "Lời Cầu Hôn",
    description:
      "Khoảnh khắc hoàng hôn trên triền đồi lặng gió, với một bức thư viết tay và câu hỏi được hồi đáp bằng cái gật đầu trước khi kịp nói thành lời.",
    location: "Tuscany",
  },
  {
    id: "wedding",
    phase: "Chương IV",
    date: "Tháng 06, 2027",
    title: "Ngày Chung Đôi",
    description:
      "Trong vòng tay yêu thương của gia đình và bạn bè, chúng mình chính thức nắm tay nhau bước sang một chương mới trọn đời.",
    location: "Villa Éclat, TP. HCM",
  },
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: "photo-1",
    src: "/images/gallery-1.jpg",
    alt: "Minh Thư và Hoàng Nam nắm tay cùng bó hoa cưới",
    caption: "Lời Hứa Bình Yên",
    aspect: "portrait",
    width: 900,
    height: 1200,
  },
  {
    id: "photo-2",
    src: "/images/gallery-2.jpg",
    alt: "Bàn tiệc tối ánh nến tối giản với hoa đỏ burgundy",
    caption: "Bàn Tiệc Ánh Nến",
    aspect: "landscape",
    width: 1200,
    height: 900,
  },
  {
    id: "photo-3",
    src: "/images/gallery-3.jpg",
    alt: "Chân dung cô dâu bên khung cửa nắng sớm",
    caption: "Nắng Mai",
    aspect: "portrait",
    width: 900,
    height: 1200,
  },
  {
    id: "photo-4",
    src: "/images/gallery-4.jpg",
    alt: "Chú rể chỉnh khuy áo trước giờ làm lễ",
    caption: "Trước Giờ G",
    aspect: "portrait",
    width: 900,
    height: 1200,
  },
  {
    id: "photo-5",
    src: "/images/gallery-5.jpg",
    alt: "Khoảnh khắc hoàng hôn của cô dâu và chú rể trong khu vườn",
    caption: "Giờ Vàng",
    aspect: "landscape",
    width: 1200,
    height: 900,
  },
  {
    id: "photo-6",
    src: "/images/gallery-6.jpg",
    alt: "Bộ thiệp cưới giấy cotton đóng dấu sáp burgundy",
    caption: "Dấu Ấn Hạnh Phúc",
    aspect: "portrait",
    width: 900,
    height: 1200,
  },
];

export const WEDDING_EVENTS: WeddingEvent[] = [
  {
    id: "bride",
    title: "Lễ Vu Quy (Nhà Gái)",
    subtitle: "Nghi Lễ Gia Tiên · Tiệc Trà Sáng",
    date: "Thứ Bảy, 12 Tháng 06, 2027",
    time: "09:00 – 11:30",
    venue: "Tư Gia Nhà Gái",
    address: "248 Pasteur, Phường Võ Thị Sáu, Quận 3, TP. Hồ Chí Minh",
    mapsUrl: "https://maps.google.com/?q=248+Pasteur+District+3+Ho+Chi+Minh+City",
    dressCode: "Trắng kem, Champagne hoặc Be nhẹ",
  },
  {
    id: "groom",
    title: "Lễ Thành Hôn & Tiệc Tối",
    subtitle: "Nghi Thức Trao Nhẫn · Tiệc Rượu Ánh Nến",
    date: "Thứ Bảy, 12 Tháng 06, 2027",
    time: "17:30 – 22:00",
    venue: "Villa Éclat Conservatory",
    address: "18 Thảo Điền, TP. Thủ Đức, TP. Hồ Chí Minh",
    mapsUrl: "https://maps.google.com/?q=18+Thao+Dien+Ho+Chi+Minh+City",
    dressCode: "Trang trọng · Tông Đỏ Rượu Vang & Trắng Kem",
  },
];

export const GIFT_ACCOUNTS: GiftAccount[] = [
  {
    id: "bride",
    label: "Mừng Cưới Cô Dâu",
    recipientName: "Nguyễn Minh Thư",
    bankName: "Ngân Hàng Mẫu · Vietcombank (Mock)",
    accountNumber: "0192 8400 2027",
    qrImage: "/images/qr-bride.svg",
    note: "Sự hiện diện của bạn đã là món quà quý giá nhất. Dành cho những người bạn ở xa muốn gửi gắm lời chúc.",
  },
  {
    id: "groom",
    label: "Mừng Cưới Chú Rể",
    recipientName: "Phạm Hoàng Nam",
    bankName: "Ngân Hàng Mẫu · Techcombank (Mock)",
    accountNumber: "8804 1206 2027",
    qrImage: "/images/qr-groom.svg",
    note: "Xin chân thành cảm ơn tình cảm và sự đồng hành của bạn trong chặng đường mới của chúng mình.",
  },
];

export const INITIAL_GUEST_WISHES: GuestWish[] = [
  {
    id: "wish-1",
    name: "Lan Anh Trần",
    relation: "Chị gái cô dâu",
    message:
      "Nhìn hai em trưởng thành cùng nhau là niềm hạnh phúc lớn nhất của gia đình. Chúc hai em trăm năm hòa thuận và luôn dịu dàng với nhau.",
    attendance: "attending",
    createdAt: "2026-11-10",
  },
  {
    id: "wish-2",
    name: "Minh Quân & Thảo Vy",
    relation: "Bạn đại học",
    message:
      "Từ những buổi chạy đồ án thâu đêm đến ngày chung đôi hôm nay — tụi mình chắc chắn có mặt để nâng ly chúc mừng hai bạn!",
    attendance: "attending",
    createdAt: "2026-11-11",
  },
  {
    id: "wish-3",
    name: "Bác Khanh Lê",
    relation: "Người thân gia đình",
    message:
      "Chúc tổ ấm mới của Minh Thư và Hoàng Nam luôn ngập tràn tiếng cười, sự tôn trọng và bình an trong từng ngày.",
    attendance: "attending",
    createdAt: "2026-11-11",
  },
  {
    id: "wish-4",
    name: "Hải Yến Vũ",
    relation: "Đồng nghiệp thân thiết",
    message:
      "Gửi thật nhiều yêu thương từ xa. Đếm ngược từng ngày để được chung vui cùng hai bạn tại Villa Éclat!",
    attendance: "attending",
    createdAt: "2026-11-12",
  },
  {
    id: "wish-5",
    name: "Đức Anh Nguyễn",
    relation: "Em họ chú rể",
    message:
      "Chúc anh Nam và chị Thư có một lễ cưới thật ấm áp và một hành trình hôn nhân rực rỡ như chính câu chuyện của hai anh chị.",
    attendance: "attending",
    createdAt: "2026-11-12",
  },
];

export const MUSIC_TRACK: MusicTrack = {
  title: "Khúc Dạo Đầu Ngày Cưới",
  artist: "Minh Thư & Hoàng Nam",
  src: "/music/wedding.mp3",
};
