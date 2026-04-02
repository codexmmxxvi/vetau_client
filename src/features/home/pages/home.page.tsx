import {
  ArrowRight,
  CalendarDays,
  MapPinned,
  ShieldCheck,
  Ticket,
  TrainFront,
} from "lucide-react";
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
  cityGuides,
  departureWindows,
  featuredRoutes,
  heroMetrics,
  serviceHighlights,
} from "@/shared/mocks/china.travel";

const badgeToneClassName = {
  neutral: "bg-secondary text-secondary-foreground",
  warning:
    "bg-amber-100 text-amber-900 dark:bg-amber-500/20 dark:text-amber-100",
} as const;

export default function HomePage() {
  return (
    <div className="space-y-10">
      <section className="stagger-enter grid gap-6 lg:grid-cols-[1.3fr_0.8fr]">
        <Card className="relative overflow-hidden bg-card/90 ring-border/45">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-36 bg-linear-to-r from-[#dff0f9] via-[#cfe7f4] to-[#e9f5fb]" />
          <CardContent className="relative space-y-8 px-6 py-8 sm:px-8 sm:py-10">
            <div className="space-y-4">
              <Badge
                variant="secondary"
                className="px-3 py-1 text-[11px] font-semibold tracking-[0.2em] uppercase"
              >
                Hệ thống bán vé du lịch Trung Quốc
              </Badge>
              <div className="space-y-3">
                <h1 className="text-4xl font-semibold tracking-[-0.035em] text-foreground sm:text-5xl">
                  Đặt vé tour Trung Quốc nhanh, rõ lịch khởi hành và dễ demo
                  ngay.
                </h1>
                <p className="max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
                  Giao diện này được thiết kế để demo sản phẩm trước: có tuyến
                  nổi bật, lịch khởi hành sắp tới, khu vé của tôi và dữ liệu
                  fake để bạn có thể nối API sau.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="cursor-pointer">
                <Link to={routePaths.home}>
                  Xem các tuyến đang bán
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="cursor-pointer bg-white/70"
              >
                <Link to={routePaths.profile}>Mở khu vé của tôi</Link>
              </Button>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {heroMetrics.map((item) => (
                <Card
                  key={item.label}
                  size="sm"
                  className="bg-muted/45 ring-border/35"
                >
                  <CardContent className="space-y-2">
                    <p className="text-[11px] font-semibold tracking-[0.18em] text-muted-foreground uppercase">
                      {item.label}
                    </p>
                    <p className="text-2xl font-semibold tracking-tight text-foreground">
                      {item.value}
                    </p>
                    <p className="text-sm leading-6 text-muted-foreground">
                      {item.detail}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="stagger-enter-delay">
          <CardHeader>
            <CardTitle>Lịch khởi hành gần nhất</CardTitle>
            <CardDescription>
              Những tuyến đang dễ chốt chỗ nhất trong dữ liệu demo hiện tại.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {departureWindows.map((item) => (
              <Card
                key={item.id}
                size="sm"
                className="bg-muted/35 ring-border/35"
              >
                <CardHeader className="gap-1">
                  <div className="space-y-1">
                    <p className="font-medium text-foreground">{item.title}</p>
                    <p className="text-sm leading-6 text-muted-foreground">
                      {item.subtitle}
                    </p>
                  </div>
                  <CardAction>
                    <Badge
                      variant="secondary"
                      className={
                        badgeToneClassName[
                          item.seatsLeft <= 6 ? "warning" : "neutral"
                        ]
                      }
                    >
                      Còn {item.seatsLeft} chỗ
                    </Badge>
                  </CardAction>
                </CardHeader>
                <CardContent className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CalendarDays className="size-4" />
                  {formatShortDate(item.departureDate)}
                </CardContent>
              </Card>
            ))}
          </CardContent>
        </Card>
      </section>

      <section className="space-y-5">
        <div className="space-y-4">
          <Badge
            variant="secondary"
            className="px-3 py-1 text-[11px] font-semibold tracking-[0.2em] uppercase"
          >
            Tuyến nổi bật
          </Badge>
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold tracking-[-0.03em] text-foreground sm:text-3xl">
              Sản phẩm demo để test UI đặt vé
            </h2>
            <p className="max-w-3xl text-sm leading-6 text-muted-foreground">
              Mỗi card đã có giá từ, ngày khởi hành, số chỗ còn lại và mô tả
              ngắn để bạn demo luồng chọn tour.
            </p>
          </div>
        </div>
        <div className="grid gap-4 lg:grid-cols-2">
          {featuredRoutes.map((item) => (
            <Card key={item.id} className="stagger-enter bg-card/95 ring-border/40">
              <CardHeader className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="px-3 py-1 text-[11px] font-semibold tracking-[0.18em] uppercase"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="space-y-2">
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.summary}</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-3 sm:grid-cols-2">
                  <Card
                    size="sm"
                    className="h-full bg-muted/35 ring-border/35"
                  >
                    <CardContent className="flex items-start gap-3">
                      <span className="grid size-10 place-items-center rounded-xl bg-background/80 text-foreground ring-1 ring-border/45">
                        <MapPinned className="size-5" />
                      </span>
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">
                          Điểm đến
                        </p>
                        <p className="font-medium text-foreground">
                          {item.location}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card
                    size="sm"
                    className="h-full bg-muted/35 ring-border/35"
                  >
                    <CardContent className="flex items-start gap-3">
                      <span className="grid size-10 place-items-center rounded-xl bg-background/80 text-foreground ring-1 ring-border/45">
                        <TrainFront className="size-5" />
                      </span>
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">
                          Thời lượng
                        </p>
                        <p className="font-medium text-foreground">
                          {item.duration}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <Card
                  size="sm"
                  className="bg-linear-to-r from-[#eef7fc] to-[#f8fcff] ring-border/35"
                >
                  <CardContent className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Khởi hành {formatShortDate(item.departureDate)}
                      </p>
                      <p className="mt-1 text-xl font-semibold tracking-tight text-foreground">
                        {formatVnd(item.priceFrom)}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge
                        variant="secondary"
                        className={
                          badgeToneClassName[
                            item.seatsLeft <= 8 ? "warning" : "neutral"
                          ]
                        }
                      >
                        Còn {item.seatsLeft} chỗ
                      </Badge>
                      <Button asChild variant="outline" className="cursor-pointer">
                        <Link to={routePaths.profile}>
                          Xem demo booking
                          <ArrowRight className="size-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <Card className="stagger-enter">
          <CardHeader>
            <CardTitle>Gợi ý điểm đến Trung Quốc</CardTitle>
            <CardDescription>
              Những điểm đến này đang được dùng làm data mẫu cho landing page.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {cityGuides.map((item) => (
              <Card
                key={item.city}
                size="sm"
                className="bg-muted/35 ring-border/35"
              >
                <CardContent className="flex items-start gap-3">
                  <span className="grid size-10 place-items-center rounded-xl bg-background/80 text-foreground ring-1 ring-border/45">
                    <MapPinned className="size-5" />
                  </span>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">{item.city}</p>
                    <p className="font-medium text-foreground">
                      {item.bestFor}
                    </p>
                    <p className="text-sm leading-6 text-muted-foreground">
                      {item.summary} {item.budget}.
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </CardContent>
        </Card>

        <Card className="stagger-enter-delay">
          <CardHeader>
            <CardTitle>Lý do dùng bộ UI này để demo</CardTitle>
            <CardDescription>
              Dữ liệu và layout đã được tổ chức theo logic của hệ thống bán vé.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {serviceHighlights.map((item) => (
              <Card
                key={item.title}
                size="sm"
                className="bg-muted/35 ring-border/35"
              >
                <CardContent className="flex items-start gap-3">
                  <span className="grid size-10 place-items-center rounded-xl bg-background/80 text-foreground ring-1 ring-border/45">
                    <ShieldCheck className="size-5" />
                  </span>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-foreground">
                      {item.title}
                    </p>
                    <p className="text-sm leading-6 text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
            <Card size="sm" className="bg-muted/30 ring-border/35">
              <CardContent className="flex items-start gap-3">
                <span className="grid size-10 place-items-center rounded-xl bg-background/80 text-foreground ring-1 ring-border/45">
                  <Ticket className="size-5" />
                </span>
                <div className="space-y-1">
                  <p className="font-medium text-foreground">
                    Sẵn sàng cho API thật
                  </p>
                  <p className="text-sm leading-6 text-muted-foreground">
                    Toàn bộ route, card, trang profile và auth hiện đang dùng
                    fake data. Có thể thay bằng React Query + API ngay khi bạn
                    có endpoint.
                  </p>
                </div>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {[
          {
            title: "Đăng nhập",
            description: "Vào khu quản lý booking và thông tin hành khách.",
            to: routePaths.login,
          },
          {
            title: "Tạo tài khoản",
            description:
              "Dùng cho flow đăng ký khách mới và lưu thông tin liên hệ.",
            to: routePaths.register,
          },
          {
            title: "Vé của tôi",
            description: "Demo trang booking history và trạng thái đặt chỗ.",
            to: routePaths.profile,
          },
        ].map((item) => (
          <Card key={item.title} className="stagger-enter">
            <CardHeader>
              <CardTitle className="text-xl">{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline" className="cursor-pointer">
                <Link to={item.to}>
                  Mở màn hình
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
}
