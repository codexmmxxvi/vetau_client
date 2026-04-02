import { Mail, ShieldCheck, UserRound } from "lucide-react";
import { Link } from "react-router-dom";

import { Badge } from "@/shared/components/ui/badge";
import { Button } from "@/shared/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { routePaths } from "@/shared/config/routes";
import { formatShortDate, formatVnd } from "@/shared/lib/format";
import {
  demoBookings,
  demoTravelers,
  profileSummary,
} from "@/shared/mocks/china.travel";

const bookingStatusVariant = {
  "Đã xác nhận":
    "bg-emerald-100 text-emerald-900 dark:bg-emerald-500/20 dark:text-emerald-100",
  "Giữ chỗ":
    "bg-amber-100 text-amber-900 dark:bg-amber-500/20 dark:text-amber-100",
  "Hoàn tất": "bg-secondary text-secondary-foreground",
} as const;

export default function ProfilePage() {
  return (
    <div className="grid gap-6 lg:grid-cols-[1.5fr_0.9fr]">
      <Card className="stagger-enter">
        <CardHeader>
          <div className="space-y-4">
            <Badge
              variant="secondary"
              className="px-3 py-1 text-[11px] font-semibold tracking-[0.2em] uppercase"
            >
              Trung tâm booking
            </Badge>
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold tracking-[-0.03em] text-foreground sm:text-3xl">
                Vé của tôi
              </h2>
              <p className="max-w-none text-sm leading-6 text-muted-foreground">
                Màn hình demo cho khách đã đăng nhập: xem booking, hành khách đi
                cùng và thao tác nhanh với đơn hàng.
              </p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-3 sm:grid-cols-3">
            <Card size="sm" className="bg-muted/35 ring-border/35">
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
            <Card size="sm" className="bg-muted/35 ring-border/35">
              <CardContent className="space-y-2">
                <p className="text-[11px] font-semibold tracking-[0.18em] text-muted-foreground uppercase">
                  Điểm tích lũy
                </p>
                <p className="text-2xl font-semibold tracking-tight text-foreground">
                  {profileSummary.points} điểm
                </p>
                <p className="text-sm leading-6 text-muted-foreground">
                  Dùng cho ưu đãi và tour tiếp theo
                </p>
              </CardContent>
            </Card>
            <Card size="sm" className="bg-muted/35 ring-border/35">
              <CardContent className="space-y-2">
                <p className="text-[11px] font-semibold tracking-[0.18em] text-muted-foreground uppercase">
                  Booking hiện có
                </p>
                <p className="text-2xl font-semibold tracking-tight text-foreground">
                  {demoBookings.length} đơn
                </p>
                <p className="text-sm leading-6 text-muted-foreground">
                  Bao gồm đã xác nhận và giữ chỗ
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-3">
            <Card size="sm" className="bg-muted/35 ring-border/35">
              <CardContent className="flex items-start gap-3">
                <span className="grid size-10 place-items-center rounded-xl bg-background/80 text-foreground ring-1 ring-border/45">
                  <UserRound className="size-5" />
                </span>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Khách hàng</p>
                  <p className="font-medium text-foreground">
                    {profileSummary.fullName}
                  </p>
                  <p className="text-sm leading-6 text-muted-foreground">
                    Tài khoản demo đang được dùng để test luồng xem booking.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card size="sm" className="bg-muted/35 ring-border/35">
              <CardContent className="flex items-start gap-3">
                <span className="grid size-10 place-items-center rounded-xl bg-background/80 text-foreground ring-1 ring-border/45">
                  <Mail className="size-5" />
                </span>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Email liên hệ</p>
                  <p className="font-medium text-foreground">
                    {profileSummary.email}
                  </p>
                  <p className="text-sm leading-6 text-muted-foreground">
                    Nội dung thông báo lịch khởi hành và xác nhận thanh toán sẽ
                    gửi về đây.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card size="sm" className="bg-muted/35 ring-border/35">
              <CardContent className="flex items-start gap-3">
                <span className="grid size-10 place-items-center rounded-xl bg-background/80 text-foreground ring-1 ring-border/45">
                  <ShieldCheck className="size-5" />
                </span>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">
                    Bảo mật tài khoản
                  </p>
                  <p className="font-medium text-foreground">
                    Đang hoạt động tốt
                  </p>
                  <p className="text-sm leading-6 text-muted-foreground">
                    Flow quên mật khẩu và đặt lại mật khẩu đã sẵn sàng cho demo.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4">
            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-foreground">
                Danh sách booking
              </h3>
              <p className="text-sm text-muted-foreground">
                Dữ liệu fake để mô phỏng khu lịch sử đặt vé và tình trạng đơn.
              </p>
            </div>
            {demoBookings.map((booking) => (
              <Card
                key={booking.code}
                size="sm"
                className="bg-muted/25 ring-border/35"
              >
                <CardHeader className="gap-1">
                  <div className="space-y-1 pr-4">
                    <p className="font-medium text-foreground">
                      {booking.route}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Mã đơn {booking.code} • Khởi hành{" "}
                      {formatShortDate(booking.departureDate)}
                    </p>
                  </div>
                  <CardAction>
                    <Badge
                      variant="secondary"
                      className={bookingStatusVariant[booking.status]}
                    >
                      {booking.status}
                    </Badge>
                  </CardAction>
                </CardHeader>
                <CardContent className="grid gap-3 sm:grid-cols-3">
                  <Card size="sm" className="bg-background/75 ring-border/30">
                    <CardContent className="space-y-2">
                      <p className="text-[11px] font-semibold tracking-[0.18em] text-muted-foreground uppercase">
                        Tổng tiền
                      </p>
                      <p className="text-xl font-semibold tracking-tight text-foreground">
                        {formatVnd(booking.totalPrice)}
                      </p>
                    </CardContent>
                  </Card>
                  <Card size="sm" className="bg-background/75 ring-border/30">
                    <CardContent className="space-y-2">
                      <p className="text-[11px] font-semibold tracking-[0.18em] text-muted-foreground uppercase">
                        Số hành khách
                      </p>
                      <p className="text-xl font-semibold tracking-tight text-foreground">
                        {booking.travelers} người
                      </p>
                    </CardContent>
                  </Card>
                  <div className="flex items-center justify-start sm:justify-end">
                    <Button variant="outline" className="cursor-pointer">
                      Xem chi tiết
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="stagger-enter-delay">
        <CardHeader>
          <CardTitle>Hành khách đã lưu</CardTitle>
          <CardDescription>
            Danh sách này mô phỏng người đi cùng để bạn demo flow đặt vé nhiều
            người.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {demoTravelers.map((traveler) => (
            <Card
              key={traveler.fullName}
              size="sm"
              className="bg-muted/35 ring-border/35"
            >
              <CardContent className="flex items-start gap-3">
                <span className="grid size-10 place-items-center rounded-xl bg-background/80 text-foreground ring-1 ring-border/45">
                  <UserRound className="size-5" />
                </span>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">
                    {traveler.fullName}
                  </p>
                  <p className="font-medium text-foreground">{traveler.tier}</p>
                  <p className="text-sm leading-6 text-muted-foreground">
                    Hộ chiếu {traveler.passportTail}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}

          <Card size="sm" className="bg-muted/30 ring-border/35">
            <CardContent className="space-y-3">
              <p className="text-sm font-medium text-foreground">
                Thao tác nhanh
              </p>
              <div className="grid gap-3">
                <Button asChild className="cursor-pointer">
                  <Link to={routePaths.home}>Xem thêm tuyến bán</Link>
                </Button>
                <Button asChild variant="outline" className="cursor-pointer">
                  <Link to={routePaths.login}>Đăng nhập lại</Link>
                </Button>
                <Button asChild variant="outline" className="cursor-pointer">
                  <Link to={routePaths.forgotPassword}>Khôi phục mật khẩu</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
}
