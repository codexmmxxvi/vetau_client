export type RailRegion = "Bắc" | "Trung" | "Nam";

export type UserRole = 0 | 1;
export type TicketStatusCode = 0 | 1 | 2;
export type OrderStatusCode = 0 | 1 | 2;
export type PaymentStatusCode = "PENDING" | "PAID" | "SETTLED";

export type UserRecord = {
  created_at: string;
  deleted_at: string | null;
  email: string;
  id: string;
  password: string;
  role: UserRole;
  updated_at: string;
  username: string;
};

export type TicketRecord = {
  created_at: string;
  date_end: string;
  date_start: string;
  deleted_at: string | null;
  id: string;
  status: TicketStatusCode;
  title: string;
  updated_at: string;
  user_id: string;
};

export type TicketItemRecord = {
  created_at: string;
  deleted_at: string | null;
  description: string;
  id: string;
  is_stock_prepared: boolean;
  name: string;
  price_flash: number;
  price_original: number;
  sale_end_time: string;
  sale_start_time: string;
  stock_available: number;
  stock_initial: number;
  ticket_id: string;
  updated_at: string;
};

export type OrderRecord = {
  created_at: string;
  deleted_at: string | null;
  id: string;
  quantity: number;
  status: OrderStatusCode;
  ticket_item_id: string;
  total_price: number;
  unit_price: number;
  updated_at: string;
  user_id: string;
};

export type PaymentRecord = {
  amount: number;
  created_at: string;
  id: string;
  order_id: string;
  paid_at: string | null;
  payment_method: string;
  status: PaymentStatusCode;
  transaction_id: string | null;
  updated_at: string;
};

type TicketMeta = {
  boardStatus: "Mở bán" | "Sắp hết chỗ" | "Khởi hành hôm nay";
  fromStation: string;
  platform: string;
  region: RailRegion;
  summary: string;
  tags: string[];
  ticketId: string;
  toStation: string;
  trainCode: string;
};

type OrderMeta = {
  bookingCode: string;
  coach: string;
  orderId: string;
  seats: string;
  travelers: number;
};

type UserProfile = {
  fullName: string;
  homeStation: string;
  memberSince: string;
  points: number;
  tier: string;
  userId: string;
};

type TravelerProfile = {
  documentTail: string;
  fullName: string;
  seatPreference: string;
  ticketType: string;
  userId: string;
};

export type HeroMetric = {
  detail: string;
  label: string;
  value: string;
};

export type DatabaseMetric = {
  detail: string;
  label: string;
  value: string;
};

export type UserAccountRow = {
  createdAt: string;
  email: string;
  id: string;
  role: "Admin" | "Customer";
  username: string;
};

export type TicketItemCatalogRow = {
  id: string;
  isStockPrepared: boolean;
  name: string;
  priceFlash: number;
  priceOriginal: number;
  saleEndTime: string;
  saleStartTime: string;
  stockAvailable: number;
  stockInitial: number;
  ticketId: string;
  ticketTitle: string;
  trainCode: string;
};

export type OrderCatalogRow = {
  createdAt: string;
  id: string;
  paymentMethod: string;
  paymentStatus: PaymentStatusCode;
  quantity: number;
  ticketItemName: string;
  ticketTitle: string;
  totalPrice: number;
  trainCode: string;
  transactionId: string | null;
  unitPrice: number;
  userEmail: string;
  userId: string;
  username: string;
};

export type PaymentCatalogRow = {
  amount: number;
  orderId: string;
  paidAt: string | null;
  paymentMethod: string;
  status: PaymentStatusCode;
  transactionId: string | null;
};

export type FeaturedRoute = {
  arrivalTime: string;
  departureDate: string;
  departureTime: string;
  duration: string;
  fromStation: string;
  id: string;
  priceFrom: number;
  region: RailRegion;
  seatsLeft: number;
  summary: string;
  tags: string[];
  title: string;
  toStation: string;
  trainCode: string;
};

export type DepartureBoardItem = {
  departureDate: string;
  departureTime: string;
  id: string;
  platform: string;
  route: string;
  seatsLeft: number;
  status: "Mở bán" | "Sắp hết chỗ" | "Khởi hành hôm nay";
  trainCode: string;
};

export type ServiceHighlight = {
  description: string;
  title: string;
};

export type StationGuide = {
  bestFor: string;
  region: RailRegion;
  station: string;
  summary: string;
};

export type ScheduleRow = {
  arrivalTime: string;
  cabin: string;
  departureTime: string;
  duration: string;
  id: string;
  region: RailRegion;
  route: string;
  seatsLeft: number;
  trainCode: string;
};

export type TravelNote = {
  content: string;
  title: string;
};

export type BookingStatus = "Đã thanh toán" | "Giữ chỗ" | "Hoàn tất";

export type DemoBooking = {
  code: string;
  coach: string;
  departureDate: string;
  departureTime: string;
  route: string;
  seats: string;
  status: BookingStatus;
  totalPrice: number;
  trainCode: string;
  travelers: number;
};

export type DemoTraveler = {
  documentTail: string;
  fullName: string;
  seatPreference: string;
  ticketType: string;
};

const ADMIN_USER_ID = "7d4a6a0d-1a27-4a16-8d7d-4d1e1a1f0001";
const CURRENT_USER_ID = "7d4a6a0d-1a27-4a16-8d7d-4d1e1a1f0002";

export const mockUsers: UserRecord[] = [
  {
    id: ADMIN_USER_ID,
    username: "rail.admin",
    email: "admin@bacnamrail.vn",
    role: 1,
    password: "Admin@123",
    created_at: "2025-12-01 08:00:00",
    updated_at: "2026-04-03 08:00:00",
    deleted_at: null,
  },
  {
    id: CURRENT_USER_ID,
    username: "minhkhanh",
    email: "khanh.nguyen@bacnamrail.vn",
    role: 0,
    password: "Khach@123",
    created_at: "2024-08-15 09:20:00",
    updated_at: "2026-04-03 08:20:00",
    deleted_at: null,
  },
  {
    id: "7d4a6a0d-1a27-4a16-8d7d-4d1e1a1f0003",
    username: "baongoc",
    email: "ngoc.tran@bacnamrail.vn",
    role: 0,
    password: "Khach@123",
    created_at: "2025-01-10 10:00:00",
    updated_at: "2026-04-02 19:00:00",
    deleted_at: null,
  },
  {
    id: "7d4a6a0d-1a27-4a16-8d7d-4d1e1a1f0004",
    username: "giahan",
    email: "han.le@bacnamrail.vn",
    role: 0,
    password: "Khach@123",
    created_at: "2025-05-02 12:00:00",
    updated_at: "2026-04-01 15:00:00",
    deleted_at: null,
  },
];

export const mockTickets: TicketRecord[] = [
  {
    id: "9c2a5a1b-4f0d-4ff4-86b1-730000000001",
    user_id: ADMIN_USER_ID,
    title: "SE1 | Hà Nội → Sài Gòn",
    date_start: "2026-04-12 20:55:00",
    date_end: "2026-04-14 04:05:00",
    status: 1,
    created_at: "2026-03-20 08:00:00",
    updated_at: "2026-04-03 08:00:00",
    deleted_at: null,
  },
  {
    id: "9c2a5a1b-4f0d-4ff4-86b1-730000000002",
    user_id: ADMIN_USER_ID,
    title: "SP3 | Hà Nội → Lào Cai",
    date_start: "2026-04-11 22:00:00",
    date_end: "2026-04-12 05:55:00",
    status: 1,
    created_at: "2026-03-20 08:00:00",
    updated_at: "2026-04-03 08:00:00",
    deleted_at: null,
  },
  {
    id: "9c2a5a1b-4f0d-4ff4-86b1-730000000003",
    user_id: ADMIN_USER_ID,
    title: "SE5 | Hà Nội → Huế",
    date_start: "2026-04-13 15:30:00",
    date_end: "2026-04-14 05:10:00",
    status: 1,
    created_at: "2026-03-20 08:00:00",
    updated_at: "2026-04-03 08:00:00",
    deleted_at: null,
  },
  {
    id: "9c2a5a1b-4f0d-4ff4-86b1-730000000004",
    user_id: ADMIN_USER_ID,
    title: "HD1 | Huế → Đà Nẵng",
    date_start: "2026-04-03 07:35:00",
    date_end: "2026-04-03 10:30:00",
    status: 1,
    created_at: "2026-03-20 08:00:00",
    updated_at: "2026-04-03 06:30:00",
    deleted_at: null,
  },
  {
    id: "9c2a5a1b-4f0d-4ff4-86b1-730000000005",
    user_id: ADMIN_USER_ID,
    title: "SE22 | Sài Gòn → Nha Trang",
    date_start: "2026-04-12 21:10:00",
    date_end: "2026-04-13 05:35:00",
    status: 1,
    created_at: "2026-03-20 08:00:00",
    updated_at: "2026-04-03 08:00:00",
    deleted_at: null,
  },
  {
    id: "9c2a5a1b-4f0d-4ff4-86b1-730000000006",
    user_id: ADMIN_USER_ID,
    title: "SPT2 | Sài Gòn → Phan Thiết",
    date_start: "2026-04-15 06:40:00",
    date_end: "2026-04-15 10:50:00",
    status: 1,
    created_at: "2026-03-20 08:00:00",
    updated_at: "2026-04-03 08:00:00",
    deleted_at: null,
  },
];

export const mockTicketItems: TicketItemRecord[] = [
  {
    id: "1d49c1a7-9f8e-4bd1-a001-100000000001",
    ticket_id: "9c2a5a1b-4f0d-4ff4-86b1-730000000001",
    name: "Khoang 4 giường mềm điều hòa",
    description: "Hạng khoang cao cấp cho hành trình xuyên Việt dài ngày.",
    stock_initial: 24,
    stock_available: 18,
    is_stock_prepared: true,
    price_original: 1450000,
    price_flash: 1350000,
    sale_start_time: "2026-03-25 08:00:00",
    sale_end_time: "2026-04-12 18:00:00",
    created_at: "2026-03-25 08:00:00",
    updated_at: "2026-04-03 08:00:00",
    deleted_at: null,
  },
  {
    id: "1d49c1a7-9f8e-4bd1-a001-100000000002",
    ticket_id: "9c2a5a1b-4f0d-4ff4-86b1-730000000001",
    name: "Khoang 6 giường điều hòa",
    description: "Lựa chọn cân bằng giữa ngân sách và độ riêng tư.",
    stock_initial: 36,
    stock_available: 24,
    is_stock_prepared: true,
    price_original: 1120000,
    price_flash: 980000,
    sale_start_time: "2026-03-25 08:00:00",
    sale_end_time: "2026-04-12 18:00:00",
    created_at: "2026-03-25 08:00:00",
    updated_at: "2026-04-03 08:00:00",
    deleted_at: null,
  },
  {
    id: "1d49c1a7-9f8e-4bd1-a001-100000000003",
    ticket_id: "9c2a5a1b-4f0d-4ff4-86b1-730000000002",
    name: "Khoang nằm du lịch",
    description: "Tàu đêm Hà Nội Lào Cai cho khách đi Sapa cuối tuần.",
    stock_initial: 18,
    stock_available: 9,
    is_stock_prepared: true,
    price_original: 690000,
    price_flash: 620000,
    sale_start_time: "2026-03-26 08:00:00",
    sale_end_time: "2026-04-11 20:00:00",
    created_at: "2026-03-26 08:00:00",
    updated_at: "2026-04-03 08:00:00",
    deleted_at: null,
  },
  {
    id: "1d49c1a7-9f8e-4bd1-a001-100000000004",
    ticket_id: "9c2a5a1b-4f0d-4ff4-86b1-730000000002",
    name: "Ghế ngả mềm",
    description: "Phù hợp khách đi nhẹ và cần mức giá tiết kiệm hơn.",
    stock_initial: 30,
    stock_available: 15,
    is_stock_prepared: true,
    price_original: 520000,
    price_flash: 460000,
    sale_start_time: "2026-03-26 08:00:00",
    sale_end_time: "2026-04-11 20:00:00",
    created_at: "2026-03-26 08:00:00",
    updated_at: "2026-04-03 08:00:00",
    deleted_at: null,
  },
  {
    id: "1d49c1a7-9f8e-4bd1-a001-100000000005",
    ticket_id: "9c2a5a1b-4f0d-4ff4-86b1-730000000003",
    name: "Khoang 6 giường điều hòa",
    description: "Tuyến đi Huế cân đối cho khách công tác hoặc nghỉ ngắn ngày.",
    stock_initial: 24,
    stock_available: 14,
    is_stock_prepared: true,
    price_original: 970000,
    price_flash: 890000,
    sale_start_time: "2026-03-27 08:00:00",
    sale_end_time: "2026-04-13 13:00:00",
    created_at: "2026-03-27 08:00:00",
    updated_at: "2026-04-03 08:00:00",
    deleted_at: null,
  },
  {
    id: "1d49c1a7-9f8e-4bd1-a001-100000000006",
    ticket_id: "9c2a5a1b-4f0d-4ff4-86b1-730000000003",
    name: "Ghế mềm điều hòa",
    description: "Phương án tối ưu chi phí cho khách đi một mình.",
    stock_initial: 40,
    stock_available: 20,
    is_stock_prepared: true,
    price_original: 760000,
    price_flash: 690000,
    sale_start_time: "2026-03-27 08:00:00",
    sale_end_time: "2026-04-13 13:00:00",
    created_at: "2026-03-27 08:00:00",
    updated_at: "2026-04-03 08:00:00",
    deleted_at: null,
  },
  {
    id: "1d49c1a7-9f8e-4bd1-a001-100000000007",
    ticket_id: "9c2a5a1b-4f0d-4ff4-86b1-730000000004",
    name: "Ghế mềm cửa sổ",
    description: "Phù hợp khách muốn ngắm cảnh đèo Hải Vân ban ngày.",
    stock_initial: 30,
    stock_available: 22,
    is_stock_prepared: true,
    price_original: 290000,
    price_flash: 240000,
    sale_start_time: "2026-03-28 08:00:00",
    sale_end_time: "2026-04-03 07:00:00",
    created_at: "2026-03-28 08:00:00",
    updated_at: "2026-04-03 06:30:00",
    deleted_at: null,
  },
  {
    id: "1d49c1a7-9f8e-4bd1-a001-100000000008",
    ticket_id: "9c2a5a1b-4f0d-4ff4-86b1-730000000004",
    name: "Ghế mềm trung tâm toa",
    description: "Lựa chọn phổ thông cho chặng ngắn Huế Đà Nẵng.",
    stock_initial: 36,
    stock_available: 28,
    is_stock_prepared: true,
    price_original: 240000,
    price_flash: 210000,
    sale_start_time: "2026-03-28 08:00:00",
    sale_end_time: "2026-04-03 07:00:00",
    created_at: "2026-03-28 08:00:00",
    updated_at: "2026-04-03 06:30:00",
    deleted_at: null,
  },
  {
    id: "1d49c1a7-9f8e-4bd1-a001-100000000009",
    ticket_id: "9c2a5a1b-4f0d-4ff4-86b1-730000000005",
    name: "Khoang 4 giường mềm điều hòa",
    description: "Tàu đêm đi Nha Trang, tiện cho nhóm bạn hoặc gia đình.",
    stock_initial: 16,
    stock_available: 11,
    is_stock_prepared: true,
    price_original: 760000,
    price_flash: 710000,
    sale_start_time: "2026-03-29 08:00:00",
    sale_end_time: "2026-04-12 19:00:00",
    created_at: "2026-03-29 08:00:00",
    updated_at: "2026-04-03 08:00:00",
    deleted_at: null,
  },
  {
    id: "1d49c1a7-9f8e-4bd1-a001-100000000010",
    ticket_id: "9c2a5a1b-4f0d-4ff4-86b1-730000000005",
    name: "Ghế mềm điều hòa",
    description: "Vé tàu đêm tiết kiệm cho tuyến Sài Gòn Nha Trang.",
    stock_initial: 32,
    stock_available: 12,
    is_stock_prepared: true,
    price_original: 620000,
    price_flash: 560000,
    sale_start_time: "2026-03-29 08:00:00",
    sale_end_time: "2026-04-12 19:00:00",
    created_at: "2026-03-29 08:00:00",
    updated_at: "2026-04-03 08:00:00",
    deleted_at: null,
  },
  {
    id: "1d49c1a7-9f8e-4bd1-a001-100000000011",
    ticket_id: "9c2a5a1b-4f0d-4ff4-86b1-730000000006",
    name: "Ghế mềm điều hòa",
    description: "Tuyến sáng Sài Gòn Phan Thiết phù hợp nghỉ dưỡng.",
    stock_initial: 40,
    stock_available: 27,
    is_stock_prepared: true,
    price_original: 360000,
    price_flash: 325000,
    sale_start_time: "2026-03-30 08:00:00",
    sale_end_time: "2026-04-15 05:30:00",
    created_at: "2026-03-30 08:00:00",
    updated_at: "2026-04-03 08:00:00",
    deleted_at: null,
  },
  {
    id: "1d49c1a7-9f8e-4bd1-a001-100000000012",
    ticket_id: "9c2a5a1b-4f0d-4ff4-86b1-730000000006",
    name: "Ghế thương gia toa đầu",
    description: "Ghế ngả sâu hơn cho khách cần không gian yên tĩnh.",
    stock_initial: 12,
    stock_available: 8,
    is_stock_prepared: true,
    price_original: 470000,
    price_flash: 430000,
    sale_start_time: "2026-03-30 08:00:00",
    sale_end_time: "2026-04-15 05:30:00",
    created_at: "2026-03-30 08:00:00",
    updated_at: "2026-04-03 08:00:00",
    deleted_at: null,
  },
];

export const mockOrders: OrderRecord[] = [
  {
    id: "4e4d221d-1349-45c0-9478-210000000001",
    user_id: CURRENT_USER_ID,
    ticket_item_id: "1d49c1a7-9f8e-4bd1-a001-100000000001",
    quantity: 2,
    unit_price: 1350000,
    total_price: 2700000,
    status: 1,
    created_at: "2026-04-01 10:10:00",
    updated_at: "2026-04-01 10:15:00",
    deleted_at: null,
  },
  {
    id: "4e4d221d-1349-45c0-9478-210000000002",
    user_id: CURRENT_USER_ID,
    ticket_item_id: "1d49c1a7-9f8e-4bd1-a001-100000000005",
    quantity: 1,
    unit_price: 890000,
    total_price: 890000,
    status: 0,
    created_at: "2026-04-02 09:30:00",
    updated_at: "2026-04-02 09:35:00",
    deleted_at: null,
  },
  {
    id: "4e4d221d-1349-45c0-9478-210000000003",
    user_id: CURRENT_USER_ID,
    ticket_item_id: "1d49c1a7-9f8e-4bd1-a001-100000000009",
    quantity: 3,
    unit_price: 710000,
    total_price: 2130000,
    status: 2,
    created_at: "2025-12-01 16:00:00",
    updated_at: "2025-12-09 08:00:00",
    deleted_at: null,
  },
  {
    id: "4e4d221d-1349-45c0-9478-210000000004",
    user_id: "7d4a6a0d-1a27-4a16-8d7d-4d1e1a1f0003",
    ticket_item_id: "1d49c1a7-9f8e-4bd1-a001-100000000003",
    quantity: 2,
    unit_price: 620000,
    total_price: 1240000,
    status: 1,
    created_at: "2026-04-01 11:10:00",
    updated_at: "2026-04-01 11:12:00",
    deleted_at: null,
  },
  {
    id: "4e4d221d-1349-45c0-9478-210000000005",
    user_id: "7d4a6a0d-1a27-4a16-8d7d-4d1e1a1f0004",
    ticket_item_id: "1d49c1a7-9f8e-4bd1-a001-100000000011",
    quantity: 1,
    unit_price: 325000,
    total_price: 325000,
    status: 1,
    created_at: "2026-04-02 14:20:00",
    updated_at: "2026-04-02 14:25:00",
    deleted_at: null,
  },
];

export const mockPayments: PaymentRecord[] = [
  {
    id: "5f312c41-35cf-4b1d-88ac-310000000001",
    order_id: "4e4d221d-1349-45c0-9478-210000000001",
    amount: 2700000,
    payment_method: "VNPAY",
    status: "PAID",
    transaction_id: "TXN-SE1-260401-001",
    paid_at: "2026-04-01 10:15:00",
    created_at: "2026-04-01 10:10:00",
    updated_at: "2026-04-01 10:15:00",
  },
  {
    id: "5f312c41-35cf-4b1d-88ac-310000000002",
    order_id: "4e4d221d-1349-45c0-9478-210000000002",
    amount: 890000,
    payment_method: "MOMO",
    status: "PENDING",
    transaction_id: null,
    paid_at: null,
    created_at: "2026-04-02 09:30:00",
    updated_at: "2026-04-02 09:35:00",
  },
  {
    id: "5f312c41-35cf-4b1d-88ac-310000000003",
    order_id: "4e4d221d-1349-45c0-9478-210000000003",
    amount: 2130000,
    payment_method: "Banking",
    status: "SETTLED",
    transaction_id: "TXN-SE22-251201-003",
    paid_at: "2025-12-01 16:05:00",
    created_at: "2025-12-01 16:00:00",
    updated_at: "2025-12-09 08:00:00",
  },
  {
    id: "5f312c41-35cf-4b1d-88ac-310000000004",
    order_id: "4e4d221d-1349-45c0-9478-210000000004",
    amount: 1240000,
    payment_method: "VNPAY",
    status: "PAID",
    transaction_id: "TXN-SP3-260401-004",
    paid_at: "2026-04-01 11:12:00",
    created_at: "2026-04-01 11:10:00",
    updated_at: "2026-04-01 11:12:00",
  },
  {
    id: "5f312c41-35cf-4b1d-88ac-310000000005",
    order_id: "4e4d221d-1349-45c0-9478-210000000005",
    amount: 325000,
    payment_method: "Credit Card",
    status: "PAID",
    transaction_id: "TXN-SPT2-260402-005",
    paid_at: "2026-04-02 14:25:00",
    created_at: "2026-04-02 14:20:00",
    updated_at: "2026-04-02 14:25:00",
  },
];

export const mockDatabase = {
  users: mockUsers,
  tickets: mockTickets,
  ticketItems: mockTicketItems,
  orders: mockOrders,
  payments: mockPayments,
} as const;

const ticketMeta: TicketMeta[] = [
  {
    ticketId: "9c2a5a1b-4f0d-4ff4-86b1-730000000001",
    trainCode: "SE1",
    region: "Bắc",
    fromStation: "Ga Hà Nội",
    toStation: "Ga Sài Gòn",
    platform: "Sân ga 3",
    boardStatus: "Mở bán",
    summary:
      "Tuyến trục dọc cao cấp cho khách đi xuyên Việt, ưu tiên khoang 4 giường mềm điều hòa và suất ăn đặt trước.",
    tags: ["Xuyên Việt", "Khoang 4 giường", "Phổ biến"],
  },
  {
    ticketId: "9c2a5a1b-4f0d-4ff4-86b1-730000000002",
    trainCode: "SP3",
    region: "Bắc",
    fromStation: "Ga Hà Nội",
    toStation: "Ga Lào Cai",
    platform: "Sân ga 1",
    boardStatus: "Sắp hết chỗ",
    summary:
      "Phù hợp khách nối Sapa cuối tuần, lên tàu đêm gọn và giữ được trọn buổi sáng hôm sau.",
    tags: ["Tàu đêm", "Cuối tuần", "Ngủ đêm"],
  },
  {
    ticketId: "9c2a5a1b-4f0d-4ff4-86b1-730000000003",
    trainCode: "SE5",
    region: "Trung",
    fromStation: "Ga Hà Nội",
    toStation: "Ga Huế",
    platform: "Sân ga 2",
    boardStatus: "Mở bán",
    summary:
      "Lựa chọn cân bằng giữa thời gian và ngân sách cho khách đi công tác hoặc nghỉ ngắn ngày ở miền Trung.",
    tags: ["Miền Trung", "Đi công tác", "Tiết kiệm"],
  },
  {
    ticketId: "9c2a5a1b-4f0d-4ff4-86b1-730000000004",
    trainCode: "HD1",
    region: "Trung",
    fromStation: "Ga Huế",
    toStation: "Ga Đà Nẵng",
    platform: "Sân ga 1",
    boardStatus: "Khởi hành hôm nay",
    summary:
      "Tuyến cảnh quan đẹp, phù hợp khách du lịch muốn trải nghiệm cung đường biển và đèo bằng tàu.",
    tags: ["Hải Vân", "Ngắm cảnh", "Ban ngày"],
  },
  {
    ticketId: "9c2a5a1b-4f0d-4ff4-86b1-730000000005",
    trainCode: "SE22",
    region: "Nam",
    fromStation: "Ga Sài Gòn",
    toStation: "Ga Nha Trang",
    platform: "Sân ga 5",
    boardStatus: "Sắp hết chỗ",
    summary:
      "Tuyến đêm cho khách biển cuối tuần, dễ chốt chỗ và phù hợp nhóm bạn muốn đến nơi vào sáng sớm.",
    tags: ["Biển", "Tàu đêm", "Cuối tuần"],
  },
  {
    ticketId: "9c2a5a1b-4f0d-4ff4-86b1-730000000006",
    trainCode: "SPT2",
    region: "Nam",
    fromStation: "Ga Sài Gòn",
    toStation: "Ga Phan Thiết",
    platform: "Sân ga 4",
    boardStatus: "Mở bán",
    summary:
      "Tuyến ngắn cho khách nghỉ dưỡng, ghế mềm điều hòa và giờ đến thuận tiện để nhận phòng trưa.",
    tags: ["Nghỉ dưỡng", "Ghế mềm", "Buổi sáng"],
  },
];

const userProfiles: UserProfile[] = [
  {
    userId: CURRENT_USER_ID,
    fullName: "Nguyen Minh Khanh",
    homeStation: "Ga Hà Nội",
    memberSince: "08/2024",
    points: 3280,
    tier: "Premier Silver",
  },
];

const travelerProfiles: TravelerProfile[] = [
  {
    userId: CURRENT_USER_ID,
    fullName: "Nguyen Minh Khanh",
    documentTail: "CCCD *** 1824",
    ticketType: "Hành khách chính",
    seatPreference: "Ưu tiên giường tầng dưới",
  },
  {
    userId: CURRENT_USER_ID,
    fullName: "Tran Bao Ngoc",
    documentTail: "CCCD *** 5632",
    ticketType: "Đi cùng gia đình",
    seatPreference: "Ghế cạnh cửa sổ",
  },
  {
    userId: CURRENT_USER_ID,
    fullName: "Le Gia Han",
    documentTail: "CCCD *** 4198",
    ticketType: "Khách doanh nghiệp",
    seatPreference: "Khoang yên tĩnh",
  },
];

const orderMeta: OrderMeta[] = [
  {
    orderId: "4e4d221d-1349-45c0-9478-210000000001",
    bookingCode: "BNR-260412-01",
    coach: "Toa 6",
    seats: "Giường 15, 16",
    travelers: 2,
  },
  {
    orderId: "4e4d221d-1349-45c0-9478-210000000002",
    bookingCode: "BNR-260413-07",
    coach: "Toa 4",
    seats: "Ghế 22",
    travelers: 1,
  },
  {
    orderId: "4e4d221d-1349-45c0-9478-210000000003",
    bookingCode: "BNR-251208-12",
    coach: "Toa 8",
    seats: "Giường 11, 12, 13",
    travelers: 3,
  },
];

const ticketById = new Map(mockTickets.map((ticket) => [ticket.id, ticket]));
const ticketItemById = new Map(
  mockTicketItems.map((ticketItem) => [ticketItem.id, ticketItem]),
);
const ticketMetaById = new Map(ticketMeta.map((item) => [item.ticketId, item]));
const userById = new Map(mockUsers.map((user) => [user.id, user]));
const orderMetaById = new Map(orderMeta.map((item) => [item.orderId, item]));
const paymentByOrderId = new Map(
  mockPayments.map((payment) => [payment.order_id, payment]),
);

function toDateTimeInput(value: string) {
  return new Date(value.replace(" ", "T"));
}

function formatDateOnly(value: string) {
  return value.slice(0, 10);
}

function formatTimeOnly(value: string) {
  return value.slice(11, 16);
}

function formatDuration(start: string, end: string) {
  const durationInMinutes =
    (toDateTimeInput(end).getTime() - toDateTimeInput(start).getTime()) /
    (1000 * 60);

  const hours = Math.floor(durationInMinutes / 60);
  const minutes = Math.round(durationInMinutes % 60);

  return `${hours} giờ ${minutes.toString().padStart(2, "0")} phút`;
}

function getTicketItems(ticketId: string) {
  return mockTicketItems.filter((ticketItem) => ticketItem.ticket_id === ticketId);
}

function getMinFlashPrice(ticketId: string) {
  return Math.min(
    ...getTicketItems(ticketId).map((ticketItem) => ticketItem.price_flash),
  );
}

function getPrimaryCabin(ticketId: string) {
  return [...getTicketItems(ticketId)].sort(
    (left, right) => right.price_flash - left.price_flash,
  )[0]?.name;
}

function getAvailableSeats(ticketId: string) {
  return Math.max(
    ...getTicketItems(ticketId).map((ticketItem) => ticketItem.stock_available),
  );
}

function getOrderStatusLabel(status: OrderStatusCode): BookingStatus {
  if (status === 1) {
    return "Đã thanh toán";
  }

  if (status === 2) {
    return "Hoàn tất";
  }

  return "Giữ chỗ";
}

function getUserRoleLabel(role: UserRole): "Admin" | "Customer" {
  return role === 1 ? "Admin" : "Customer";
}

function toRouteLabel(title: string) {
  return title.split("|")[1]?.trim() ?? title;
}

function getCurrentUserOrders() {
  return mockOrders.filter((order) => order.user_id === CURRENT_USER_ID);
}

const currentUserProfile = userProfiles.find(
  (profile) => profile.userId === CURRENT_USER_ID,
);
const currentUser = userById.get(CURRENT_USER_ID);

export const heroMetrics: HeroMetric[] = [
  {
    label: "Tuyến mở bán",
    value: `${mockTickets.filter((ticket) => ticket.status === 1).length} tuyến`,
    detail: "được dựng trực tiếp từ bảng ticket",
  },
  {
    label: "Hạng vé đang bán",
    value: `${mockTicketItems.filter((item) => item.is_stock_prepared).length} hạng`,
    detail: "gồm ghế mềm, khoang nằm và ghế thương gia",
  },
  {
    label: "Đơn hàng mock",
    value: `${mockOrders.length} đơn`,
    detail: "đủ trạng thái giữ chỗ, đã thanh toán và hoàn tất",
  },
];

export const databaseMetrics: DatabaseMetric[] = [
  {
    label: "Bảng user",
    value: `${mockUsers.length} bản ghi`,
    detail: `${mockUsers.filter((user) => user.role === 1).length} admin / ${mockUsers.filter((user) => user.role === 0).length} customer`,
  },
  {
    label: "Bảng ticket",
    value: `${mockTickets.length} chuyến`,
    detail: "mỗi record là một hành trình tàu cụ thể",
  },
  {
    label: "Bảng ticket_item",
    value: `${mockTicketItems.length} hạng vé`,
    detail: "giữ riêng stock, sale window, giá gốc và giá flash",
  },
  {
    label: "Bảng orders",
    value: `${mockOrders.length} đơn`,
    detail: "có đủ hold, paid và completed",
  },
  {
    label: "Bảng payments",
    value: `${mockPayments.length} giao dịch`,
    detail: "có đủ pending, paid và settled",
  },
];

export const userAccountRows: UserAccountRow[] = mockUsers.map((user) => ({
  id: user.id,
  username: user.username,
  email: user.email,
  role: getUserRoleLabel(user.role),
  createdAt: user.created_at,
}));

export const ticketItemCatalog: TicketItemCatalogRow[] = mockTicketItems.map(
  (ticketItem) => {
    const ticket = ticketById.get(ticketItem.ticket_id);

    if (!ticket) {
      throw new Error(`Missing ticket for ticket item ${ticketItem.id}`);
    }

    return {
      id: ticketItem.id,
      ticketId: ticket.id,
      ticketTitle: ticket.title,
      trainCode: ticket.title.split("|")[0]?.trim() ?? "",
      name: ticketItem.name,
      stockInitial: ticketItem.stock_initial,
      stockAvailable: ticketItem.stock_available,
      isStockPrepared: ticketItem.is_stock_prepared,
      priceOriginal: ticketItem.price_original,
      priceFlash: ticketItem.price_flash,
      saleStartTime: ticketItem.sale_start_time,
      saleEndTime: ticketItem.sale_end_time,
    };
  },
);

export const orderCatalog: OrderCatalogRow[] = mockOrders.map((order) => {
  const user = userById.get(order.user_id);
  const ticketItem = ticketItemById.get(order.ticket_item_id);
  const payment = paymentByOrderId.get(order.id);

  if (!user || !ticketItem || !payment) {
    throw new Error(`Missing catalog relation for order ${order.id}`);
  }

  const ticket = ticketById.get(ticketItem.ticket_id);

  if (!ticket) {
    throw new Error(`Missing ticket for order ${order.id}`);
  }

  return {
    id: order.id,
    userId: user.id,
    username: user.username,
    userEmail: user.email,
    ticketTitle: ticket.title,
    trainCode: ticket.title.split("|")[0]?.trim() ?? "",
    ticketItemName: ticketItem.name,
    quantity: order.quantity,
    unitPrice: order.unit_price,
    totalPrice: order.total_price,
    paymentMethod: payment.payment_method,
    paymentStatus: payment.status,
    transactionId: payment.transaction_id,
    createdAt: order.created_at,
  };
});

export const paymentCatalog: PaymentCatalogRow[] = mockPayments.map((payment) => ({
  orderId: payment.order_id,
  amount: payment.amount,
  paymentMethod: payment.payment_method,
  status: payment.status,
  transactionId: payment.transaction_id,
  paidAt: payment.paid_at,
}));

export const featuredRoutes: FeaturedRoute[] = mockTickets.map((ticket) => {
  const metadata = ticketMetaById.get(ticket.id);

  if (!metadata) {
    throw new Error(`Missing ticket meta for ${ticket.id}`);
  }

  return {
    id: ticket.id,
    title: toRouteLabel(ticket.title),
    trainCode: metadata.trainCode,
    fromStation: metadata.fromStation,
    toStation: metadata.toStation,
    region: metadata.region,
    duration: formatDuration(ticket.date_start, ticket.date_end),
    departureDate: formatDateOnly(ticket.date_start),
    departureTime: formatTimeOnly(ticket.date_start),
    arrivalTime: formatTimeOnly(ticket.date_end),
    priceFrom: getMinFlashPrice(ticket.id),
    seatsLeft: getAvailableSeats(ticket.id),
    summary: metadata.summary,
    tags: metadata.tags,
  };
});

export const departureBoard: DepartureBoardItem[] = mockTickets.map((ticket) => {
  const metadata = ticketMetaById.get(ticket.id);

  if (!metadata) {
    throw new Error(`Missing ticket meta for ${ticket.id}`);
  }

  return {
    id: ticket.id,
    trainCode: metadata.trainCode,
    route: `${metadata.fromStation.replace("Ga ", "")} → ${metadata.toStation.replace("Ga ", "")}`,
    departureDate: formatDateOnly(ticket.date_start),
    departureTime: formatTimeOnly(ticket.date_start),
    platform: metadata.platform,
    seatsLeft: getAvailableSeats(ticket.id),
    status: metadata.boardStatus,
  };
});

export const scheduleRows: ScheduleRow[] = mockTickets.map((ticket) => {
  const metadata = ticketMetaById.get(ticket.id);

  if (!metadata) {
    throw new Error(`Missing ticket meta for ${ticket.id}`);
  }

  return {
    id: ticket.id,
    trainCode: metadata.trainCode,
    route: `${metadata.fromStation.replace("Ga ", "")} → ${metadata.toStation.replace("Ga ", "")}`,
    region: metadata.region,
    departureTime: formatTimeOnly(ticket.date_start),
    arrivalTime: formatTimeOnly(ticket.date_end),
    duration: formatDuration(ticket.date_start, ticket.date_end),
    cabin: getPrimaryCabin(ticket.id) ?? "Đang cập nhật",
    seatsLeft: getAvailableSeats(ticket.id),
  };
});

export const serviceHighlights: ServiceHighlight[] = [
  {
    title: "Mock bám đúng schema backend",
    description:
      "Dữ liệu giờ đây có đủ user, ticket, ticket_item, orders và payments thay vì chỉ là các object UI rời rạc.",
  },
  {
    title: "Nối API thật dễ hơn",
    description:
      "Các màn hình frontend đang đọc dữ liệu đã được derive từ bảng mock, nên sau này thay bằng response thật sẽ ít phải refactor hơn.",
  },
  {
    title: "Có đủ trạng thái bán vé",
    description:
      "Mock đã bao phủ giữ chỗ, đã thanh toán, hoàn tất, sale time, stock và giao dịch thanh toán.",
  },
];

export const stationGuides: StationGuide[] = [
  {
    station: "Ga Hà Nội",
    region: "Bắc",
    bestFor: "Khách đi xuyên Việt và tuyến đêm",
    summary:
      "Không gian xuất phát chính cho các tàu trục dọc, phù hợp khách cần nhiều khung giờ và hạng chỗ.",
  },
  {
    station: "Ga Huế",
    region: "Trung",
    bestFor: "Chuyến ngắm cảnh miền Trung",
    summary:
      "Thích hợp khách nối Huế, Đà Nẵng và các cung biển, đặc biệt ở các chuyến sáng qua đèo Hải Vân.",
  },
  {
    station: "Ga Sài Gòn",
    region: "Nam",
    bestFor: "Tuyến biển và công tác miền Nam",
    summary:
      "Điểm xuất phát linh hoạt cho Nha Trang, Phan Thiết và các chuyến đêm tối ưu thời gian nghỉ.",
  },
];

export const travelNotes: TravelNote[] = [
  {
    title: "Mock này đã bám theo bảng nào?",
    content:
      "Dữ liệu nền hiện bám theo đủ 5 bảng: user, ticket, ticket_item, orders và payments. Phần UI chỉ là lớp derive ở trên cùng.",
  },
  {
    title: "Vì sao vẫn còn fullName, ga quen thuộc hay số ghế?",
    content:
      "Đó là metadata phục vụ trình bày giao diện. Những field này không thay thế schema gốc mà chỉ bổ sung để mock nhìn giống hệ thống thật hơn.",
  },
  {
    title: "Có trạng thái thanh toán và giữ chỗ chưa?",
    content:
      "Có. orders đang có đủ giữ chỗ, đã thanh toán và hoàn tất; payments có PENDING, PAID và SETTLED.",
  },
  {
    title: "Frontend đang dùng raw tables hay object UI?",
    content:
      "Frontend vẫn dùng object UI, nhưng các object đó được tính ra từ raw tables để gần với backend hơn.",
  },
];

export const profileSummary = {
  email: currentUser?.email ?? "",
  fullName: currentUserProfile?.fullName ?? "",
  homeStation: currentUserProfile?.homeStation ?? "",
  memberSince: currentUserProfile?.memberSince ?? "",
  points: currentUserProfile?.points ?? 0,
  tier: currentUserProfile?.tier ?? "",
};

export const demoTravelers: DemoTraveler[] = travelerProfiles
  .filter((traveler) => traveler.userId === CURRENT_USER_ID)
  .map((traveler) => ({
    fullName: traveler.fullName,
    documentTail: traveler.documentTail,
    ticketType: traveler.ticketType,
    seatPreference: traveler.seatPreference,
  }));

export const demoBookings: DemoBooking[] = getCurrentUserOrders().map((order) => {
  const ticketItem = ticketItemById.get(order.ticket_item_id);

  if (!ticketItem) {
    throw new Error(`Missing ticket item for ${order.id}`);
  }

  const ticket = ticketById.get(ticketItem.ticket_id);

  if (!ticket) {
    throw new Error(`Missing ticket for ${order.id}`);
  }

  const metadata = ticketMetaById.get(ticket.id);
  const presentation = orderMetaById.get(order.id);

  if (!metadata || !presentation) {
    throw new Error(`Missing order presentation for ${order.id}`);
  }

  return {
    code: presentation.bookingCode,
    trainCode: metadata.trainCode,
    route: toRouteLabel(ticket.title),
    departureDate: formatDateOnly(ticket.date_start),
    departureTime: formatTimeOnly(ticket.date_start),
    travelers: presentation.travelers,
    coach: presentation.coach,
    seats: presentation.seats,
    status: getOrderStatusLabel(order.status),
    totalPrice: order.total_price,
  };
});

export const authPanelNotes = [
  "Tra cứu nhanh tình trạng chỗ trên các tuyến Bắc Trung Nam",
  "Lưu hành khách thường đi và ưu tiên loại khoang",
  "Theo dõi mã vé điện tử, toa tàu và lịch khởi hành",
] as const;
