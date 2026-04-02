import {
  ArrowRight,
  Mail,
  ShieldCheck,
  Ticket,
  TrainFront,
  UserRound,
} from "lucide-react";
import { Link } from "react-router-dom";

import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
} from "@/shared/components/ui/avatar";
import { Badge } from "@/shared/components/ui/badge";
import { Button } from "@/shared/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/components/ui/table";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/shared/components/ui/tabs";
import { routePaths } from "@/shared/config/routes";
import { formatShortDate, formatVnd } from "@/shared/lib/format";
import {
  demoBookings,
  demoTravelers,
  orderCatalog,
  profileSummary,
} from "@/shared/mocks/railway";

const bookingStatusVariant = {
  "Đã thanh toán": "bg-primary text-primary-foreground",
  "Giữ chỗ": "bg-secondary text-secondary-foreground",
  "Hoàn tất": "border border-border bg-background text-foreground",
} as const;

const accountNotes = [
  {
    title: "Đổi chỗ và đổi ngày đi",
    content:
      "Luồng hồ sơ được sắp để khách nhìn ngay trạng thái booking, toa tàu và chỗ ngồi trước khi yêu cầu đổi.",
  },
  {
    title: "Vé điện tử ưu tiên đọc nhanh",
    content:
      "Mã booking, mã tàu, giờ khởi hành và ghế ngồi được gom trong cùng một bảng để dễ tra trên điện thoại.",
  },
  {
    title: "Phù hợp cho nối API thật",
    content:
      "Bảng booking, nhóm hành khách và quick action đã có cấu trúc rõ để nối dữ liệu thật từ backend.",
  },
] as const;

export default function ProfilePage() {
  const upcomingBookings = demoBookings.filter(
    (item) => item.status !== "Hoàn tất",
  );
  const completedBookings = demoBookings.filter(
    (item) => item.status === "Hoàn tất",
  );

  return (
    <div className="grid gap-6 xl:grid-cols-[1.38fr_0.92fr]">
      <Card className="border-0 bg-card/92 ring-border/65">
        <CardHeader className="space-y-5">
          <div className="space-y-4">
            <Badge
              variant="secondary"
              className="w-fit rounded-full px-3 py-1 text-[11px] font-semibold tracking-[0.2em] uppercase"
            >
              Trung tâm vé của tôi
            </Badge>
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold tracking-[-0.04em] text-foreground sm:text-3xl">
                Quản lý booking, toa tàu và hành khách trong một màn hình
              </h2>
              <p className="max-w-3xl text-sm leading-6 text-muted-foreground">
                Tôi đã kéo trang này về đúng ngữ cảnh bán vé tàu: bảng đơn hàng
                rõ ràng, nhóm hành khách đã lưu và các thao tác nhanh cho đổi
                vé, đăng nhập lại hoặc tra thêm tuyến.
              </p>
            </div>
          </div>

          <Card className="border-0 bg-background/80 ring-border/45">
            <CardContent className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-4">
                <Avatar size="lg">
                  <AvatarFallback>NK</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <p className="text-lg font-semibold text-foreground">
                    {profileSummary.fullName}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {profileSummary.email}
                  </p>
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="secondary">{profileSummary.tier}</Badge>
                    <Badge variant="secondary">
                      Ga quen thuộc {profileSummary.homeStation}
                    </Badge>
                  </div>
                </div>
              </div>
              <AvatarGroup>
                {demoTravelers.map((traveler) => (
                  <Avatar key={traveler.fullName}>
                    <AvatarFallback>
                      {traveler.fullName
                        .split(" ")
                        .slice(-2)
                        .map((word) => word[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                ))}
              </AvatarGroup>
            </CardContent>
          </Card>

          <div className="grid gap-3 sm:grid-cols-3">
            <Card size="sm" className="bg-background/80 ring-border/40">
              <CardContent className="space-y-2">
                <p className="text-[11px] font-semibold tracking-[0.18em] text-muted-foreground uppercase">
                  Hạng thành viên
                </p>
                <p className="text-2xl font-semibold tracking-tight text-foreground">
                  {profileSummary.tier}
                </p>
                <p className="text-sm leading-6 text-muted-foreground">
                  Tham gia từ {profileSummary.memberSince}
                </p>
              </CardContent>
            </Card>
            <Card size="sm" className="bg-background/80 ring-border/40">
              <CardContent className="space-y-2">
                <p className="text-[11px] font-semibold tracking-[0.18em] text-muted-foreground uppercase">
                  Điểm tích lũy
                </p>
                <p className="text-2xl font-semibold tracking-tight text-foreground">
                  {profileSummary.points} điểm
                </p>
                <p className="text-sm leading-6 text-muted-foreground">
                  Dùng cho ưu đãi khoang và vé sớm
                </p>
              </CardContent>
            </Card>
            <Card size="sm" className="bg-background/80 ring-border/40">
              <CardContent className="space-y-2">
                <p className="text-[11px] font-semibold tracking-[0.18em] text-muted-foreground uppercase">
                  Booking hiện có
                </p>
                <p className="text-2xl font-semibold tracking-tight text-foreground">
                  {demoBookings.length} đơn
                </p>
                <p className="text-sm leading-6 text-muted-foreground">
                  Gồm giữ chỗ, đã thanh toán và lịch sử hoàn tất
                </p>
              </CardContent>
            </Card>
          </div>
        </CardHeader>

        <CardContent className="pt-0">
          <Tabs defaultValue="upcoming" className="space-y-4">
            <TabsList className="h-auto flex-wrap gap-2 rounded-2xl bg-muted/65 p-1">
              <TabsTrigger value="upcoming" className="px-4 py-2">
                Booking sắp đi
              </TabsTrigger>
              <TabsTrigger value="history" className="px-4 py-2">
                Lịch sử hoàn tất
              </TabsTrigger>
              <TabsTrigger value="travelers" className="px-4 py-2">
                Hành khách đã lưu
              </TabsTrigger>
            </TabsList>

            <TabsContent value="upcoming" className="space-y-4">
              <Card className="border-0 bg-background/80 ring-border/45">
                <CardHeader className="space-y-1">
                <CardTitle className="text-lg">Đơn đang hoạt động</CardTitle>
                <CardDescription>
                  Bảng booking dùng Table để quét nhanh mã tàu, toa, ghế và
                  trạng thái.
                </CardDescription>
              </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow className="hover:bg-transparent">
                        <TableHead>Mã vé</TableHead>
                        <TableHead>Tuyến</TableHead>
                        <TableHead>Khởi hành</TableHead>
                        <TableHead>Toa · Ghế</TableHead>
                        <TableHead>Khách</TableHead>
                        <TableHead>Trạng thái</TableHead>
                        <TableHead className="text-right">Tổng tiền</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {upcomingBookings.map((booking) => (
                        <TableRow key={booking.code}>
                          <TableCell className="font-medium">
                            <div className="space-y-0.5">
                              <p>{booking.code}</p>
                              <p className="text-xs text-muted-foreground">
                                {booking.trainCode}
                              </p>
                            </div>
                          </TableCell>
                          <TableCell>{booking.route}</TableCell>
                          <TableCell>
                            <div className="space-y-0.5">
                              <p>{formatShortDate(booking.departureDate)}</p>
                              <p className="text-xs text-muted-foreground">
                                {booking.departureTime}
                              </p>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="space-y-0.5">
                              <p>{booking.coach}</p>
                              <p className="text-xs text-muted-foreground">
                                {booking.seats}
                              </p>
                            </div>
                          </TableCell>
                          <TableCell>{booking.travelers}</TableCell>
                          <TableCell>
                            <Badge
                              variant="secondary"
                              className={bookingStatusVariant[booking.status]}
                            >
                              {booking.status}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-right font-medium">
                            {formatVnd(booking.totalPrice)}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="history" className="space-y-4">
              {completedBookings.map((booking) => (
                <Card
                  key={booking.code}
                  size="sm"
                  className="border-0 bg-background/80 ring-border/45"
                >
                  <CardContent className="grid gap-4 md:grid-cols-[1.3fr_0.9fr_auto] md:items-center">
                    <div className="space-y-1">
                      <p className="font-medium text-foreground">
                        {booking.route}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {booking.trainCode} · {formatShortDate(booking.departureDate)} ·{" "}
                        {booking.departureTime}
                      </p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">
                        Toa {booking.coach}
                      </p>
                      <p className="text-sm text-foreground">{booking.seats}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge
                        variant="secondary"
                        className={bookingStatusVariant[booking.status]}
                      >
                        {booking.status}
                      </Badge>
                      <span className="font-medium text-foreground">
                        {formatVnd(booking.totalPrice)}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="travelers" className="grid gap-4 sm:grid-cols-2">
              {demoTravelers.map((traveler) => (
                <Card
                  key={traveler.fullName}
                  size="sm"
                  className="border-0 bg-background/80 ring-border/45"
                >
                  <CardContent className="flex items-start gap-3">
                    <Avatar>
                      <AvatarFallback>
                        {traveler.fullName
                          .split(" ")
                          .slice(-2)
                          .map((word) => word[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <p className="font-medium text-foreground">
                        {traveler.fullName}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {traveler.ticketType}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {traveler.documentTail}
                      </p>
                      <Badge variant="secondary">{traveler.seatPreference}</Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <div className="grid gap-4">
        <Card className="border-0 bg-card/92 ring-border/65">
          <CardHeader className="space-y-2">
            <CardTitle>Tóm tắt tài khoản</CardTitle>
            <CardDescription>
              Những thông tin này là lõi của luồng quản lý vé sau đăng nhập.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Card size="sm" className="bg-background/80 ring-border/40">
              <CardContent className="flex items-start gap-3">
                <span className="grid size-10 place-items-center rounded-2xl bg-primary text-primary-foreground">
                  <UserRound className="size-5" />
                </span>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Khách hàng</p>
                  <p className="font-medium text-foreground">
                    {profileSummary.fullName}
                  </p>
                  <p className="text-sm leading-6 text-muted-foreground">
                    Hồ sơ dùng để đồng bộ hành khách thường đi và ưu tiên chỗ.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card size="sm" className="bg-background/80 ring-border/40">
              <CardContent className="flex items-start gap-3">
                <span className="grid size-10 place-items-center rounded-2xl bg-primary text-primary-foreground">
                  <Mail className="size-5" />
                </span>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Email liên hệ</p>
                  <p className="font-medium text-foreground">
                    {profileSummary.email}
                  </p>
                  <p className="text-sm leading-6 text-muted-foreground">
                    Mã vé điện tử và cập nhật thay đổi giờ tàu sẽ gửi về đây.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card size="sm" className="bg-background/80 ring-border/40">
              <CardContent className="flex items-start gap-3">
                <span className="grid size-10 place-items-center rounded-2xl bg-primary text-primary-foreground">
                  <ShieldCheck className="size-5" />
                </span>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">
                    Trạng thái tài khoản
                  </p>
                  <p className="font-medium text-foreground">Đang hoạt động tốt</p>
                  <p className="text-sm leading-6 text-muted-foreground">
                    Luồng khôi phục mật khẩu và đăng nhập đã được đồng bộ với UI mới.
                  </p>
                </div>
              </CardContent>
            </Card>
          </CardContent>
        </Card>

        <Card className="border-0 bg-card/92 ring-border/65">
          <CardHeader className="space-y-2">
            <CardTitle>Ghi chú hỗ trợ</CardTitle>
            <CardDescription>
              Dùng Accordion để gom phần giải thích mà không làm trang bị rối.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible>
              {accountNotes.map((item) => (
                <AccordionItem key={item.title} value={item.title}>
                  <AccordionTrigger>{item.title}</AccordionTrigger>
                  <AccordionContent>{item.content}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        <Card className="border-0 bg-card/92 ring-border/65">
          <CardHeader className="space-y-2">
            <CardTitle>Raw order và payment của tài khoản này</CardTitle>
            <CardDescription>
              Phần này lấy trực tiếp từ mock schema để bạn thấy UI giờ đã lộ dữ liệu database thật hơn.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {orderCatalog
              .filter((item) => item.userEmail === profileSummary.email)
              .map((item) => (
                <Card
                  key={item.id}
                  size="sm"
                  className="border-0 bg-background/80 ring-border/40"
                >
                  <CardContent className="space-y-3">
                    <div className="flex items-start justify-between gap-3">
                      <div className="space-y-1">
                        <p className="font-medium text-foreground">
                          {item.ticketTitle}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Order ID {item.id} · User ID {item.userId}
                        </p>
                      </div>
                      <Badge variant="secondary">{item.paymentStatus}</Badge>
                    </div>
                    <div className="grid gap-3 text-sm sm:grid-cols-2">
                      <div className="space-y-1">
                        <p className="text-muted-foreground">Ticket item</p>
                        <p className="text-foreground">{item.ticketItemName}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-muted-foreground">Payment method</p>
                        <p className="text-foreground">{item.paymentMethod}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-muted-foreground">Quantity</p>
                        <p className="text-foreground">{item.quantity}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-muted-foreground">Transaction</p>
                        <p className="text-foreground">
                          {item.transactionId ?? "Chưa phát sinh"}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </CardContent>
        </Card>

        <Card className="border-0 bg-card/92 ring-border/65">
          <CardHeader className="space-y-2">
            <CardTitle>Thao tác nhanh</CardTitle>
            <CardDescription>
              Các nút chính để nối khách quay về đúng flow cần xử lý.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-3">
            <Button asChild className="cursor-pointer">
              <Link to={routePaths.home}>
                Tra cứu thêm tuyến
                <TrainFront className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="cursor-pointer">
              <Link to={routePaths.login}>
                Đăng nhập lại
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="cursor-pointer">
              <Link to={routePaths.forgotPassword}>
                Khôi phục mật khẩu
                <Ticket className="size-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
