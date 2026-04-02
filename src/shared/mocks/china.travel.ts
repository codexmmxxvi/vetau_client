export type HeroMetric = {
  detail: string;
  label: string;
  value: string;
};

export type FeaturedRoute = {
  departureDate: string;
  duration: string;
  id: string;
  location: string;
  priceFrom: number;
  seatsLeft: number;
  summary: string;
  tags: string[];
  title: string;
};

export type DepartureWindow = {
  departureDate: string;
  id: string;
  seatsLeft: number;
  subtitle: string;
  title: string;
};

export type ServiceHighlight = {
  description: string;
  title: string;
};

export type CityGuide = {
  bestFor: string;
  budget: string;
  city: string;
  summary: string;
};

export type BookingStatus = "Đã xác nhận" | "Giữ chỗ" | "Hoàn tất";

export type DemoBooking = {
  code: string;
  departureDate: string;
  route: string;
  status: BookingStatus;
  totalPrice: number;
  travelers: number;
};

export type DemoTraveler = {
  fullName: string;
  passportTail: string;
  tier: string;
};

export const heroMetrics: HeroMetric[] = [
  {
    label: "Lịch khởi hành",
    value: "18 tuyến",
    detail: "cập nhật theo tuần",
  },
  {
    label: "Chốt vé trong ngày",
    value: "96%",
    detail: "đối với tour phổ biến",
  },
  {
    label: "Khách đã phục vụ",
    value: "4.2k",
    detail: "mùa cao điểm 2025",
  },
];

export const featuredRoutes: FeaturedRoute[] = [
  {
    id: "shanghai-disney",
    title: "Thượng Hải, Disneyland và Bến Thượng Hải",
    location: "Thượng Hải",
    duration: "4 ngày 3 đêm",
    departureDate: "2026-04-12",
    priceFrom: 12990000,
    seatsLeft: 9,
    summary:
      "Combo city break cho nhóm gia đình, đã gồm vé Disneyland, khách sạn trung tâm và xe đón tiễn sân bay.",
    tags: ["Gia đình", "Disneyland", "Bay thẳng"],
  },
  {
    id: "beijing-great-wall",
    title: "Bắc Kinh, Vạn Lý Trường Thành và Tử Cấm Thành",
    location: "Bắc Kinh",
    duration: "5 ngày 4 đêm",
    departureDate: "2026-04-18",
    priceFrom: 15490000,
    seatsLeft: 6,
    summary:
      "Lịch trình tiêu chuẩn cho khách lần đầu đi Trung Quốc với vé tham quan, hướng dẫn viên và khách sạn 4 sao.",
    tags: ["Lần đầu đi", "Di sản", "Visa đoàn"],
  },
  {
    id: "zhangjiajie-avatar",
    title: "Trương Gia Giới, Thiên Môn Sơn và cầu kính",
    location: "Trương Gia Giới",
    duration: "5 ngày 4 đêm",
    departureDate: "2026-04-23",
    priceFrom: 16990000,
    seatsLeft: 12,
    summary:
      "Tour trọng điểm thiên nhiên với cáp treo, cầu kính Đại Hiệp Cốc và lịch trình tối ưu cho mùa xuân hè.",
    tags: ["Thiên nhiên", "Check-in", "Hot nhất"],
  },
  {
    id: "chengdu-jiuzhaigou",
    title: "Thành Đô, gấu trúc và Cửu Trại Câu",
    location: "Tứ Xuyên",
    duration: "6 ngày 5 đêm",
    departureDate: "2026-05-03",
    priceFrom: 18990000,
    seatsLeft: 8,
    summary:
      "Hành trình kết hợp thiên nhiên và ẩm thực, phù hợp nhóm bạn hoặc khách thích cảnh hồ, núi và văn hóa địa phương.",
    tags: ["Ẩm thực", "Phong cảnh", "Nhóm bạn"],
  },
];

export const departureWindows: DepartureWindow[] = [
  {
    id: "dep-01",
    title: "Bắc Kinh mùa hoa đào",
    subtitle: "Bay Hà Nội, gom khách trong ngày",
    departureDate: "2026-04-09",
    seatsLeft: 5,
  },
  {
    id: "dep-02",
    title: "Thượng Hải cuối tuần",
    subtitle: "Phù hợp khách đi tự do có hỗ trợ visa",
    departureDate: "2026-04-12",
    seatsLeft: 9,
  },
  {
    id: "dep-03",
    title: "Trương Gia Giới toàn cảnh",
    subtitle: "Lịch đẹp cho mùa săn mây",
    departureDate: "2026-04-23",
    seatsLeft: 12,
  },
];

export const serviceHighlights: ServiceHighlight[] = [
  {
    title: "Lọc tuyến rõ ràng",
    description:
      "Hiển thị ngày khởi hành, số chỗ còn lại và mức giá từ đầu để khách ra quyết định nhanh.",
  },
  {
    title: "Gom giấy tờ tập trung",
    description:
      "Thông tin visa, hộ chiếu, điều kiện khởi hành và thanh toán được đặt trong cùng một luồng.",
  },
  {
    title: "Theo dõi vé đã mua",
    description:
      "Màn hình hồ sơ được dùng như trung tâm quản lý booking, khách đi cùng và trạng thái đặt chỗ.",
  },
];

export const cityGuides: CityGuide[] = [
  {
    city: "Thượng Hải",
    bestFor: "Gia đình và city break",
    budget: "Từ 12.9 triệu",
    summary: "Dễ đi, nhiều chuyến bay thẳng, phù hợp khách muốn kết hợp mua sắm và vui chơi.",
  },
  {
    city: "Bắc Kinh",
    bestFor: "Khách lần đầu đi Trung Quốc",
    budget: "Từ 15.4 triệu",
    summary: "Nhiều điểm biểu tượng, phù hợp khách ưu tiên lịch trình gọn và giá trị văn hóa rõ ràng.",
  },
  {
    city: "Trương Gia Giới",
    bestFor: "Khách thích cảnh quan",
    budget: "Từ 16.9 triệu",
    summary: "Nổi bật với núi đá, cầu kính và trải nghiệm thiên nhiên đặc trưng của Trung Quốc.",
  },
];

export const profileSummary = {
  fullName: "Nguyen Minh Chau",
  email: "chau.demo@chinapass.vn",
  memberSince: "03/2024",
  points: 2450,
  tier: "Hạng Gold",
};

export const demoTravelers: DemoTraveler[] = [
  {
    fullName: "Nguyen Minh Chau",
    passportTail: "P***3941",
    tier: "Người đặt chính",
  },
  {
    fullName: "Tran Bao Han",
    passportTail: "P***2288",
    tier: "Khách đi cùng",
  },
];

export const demoBookings: DemoBooking[] = [
  {
    code: "CP-240412",
    route: "Thượng Hải, Disneyland và Bến Thượng Hải",
    departureDate: "2026-04-12",
    travelers: 2,
    status: "Đã xác nhận",
    totalPrice: 25980000,
  },
  {
    code: "CP-240423",
    route: "Trương Gia Giới, Thiên Môn Sơn và cầu kính",
    departureDate: "2026-04-23",
    travelers: 3,
    status: "Giữ chỗ",
    totalPrice: 50970000,
  },
  {
    code: "CP-231118",
    route: "Bắc Kinh, Vạn Lý Trường Thành và Tử Cấm Thành",
    departureDate: "2025-11-18",
    travelers: 2,
    status: "Hoàn tất",
    totalPrice: 30980000,
  },
];

export const authPanelNotes = [
  "Giữ chỗ nhanh cho các tuyến phổ biến",
  "Theo dõi lịch khởi hành và hành khách",
  "Quản lý đặt vé trên một tài khoản",
] as const;
