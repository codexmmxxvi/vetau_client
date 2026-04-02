import {
  ArrowRight,
  CalendarDays,
  Clock3,
  MapPinned,
  MoveRight,
  ShieldCheck,
  Ticket,
  TrainFront,
} from "lucide-react";
import { Link } from "react-router-dom";

import { Badge } from "@/shared/components/ui/badge";
import { Button } from "@/shared/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/components/ui/accordion";
import { routePaths } from "@/shared/config/routes";
import { formatShortDate, formatVnd } from "@/shared/lib/format";
import {
  departureBoard,
  databaseMetrics,
  featuredRoutes,
  heroMetrics,
  orderCatalog,
  paymentCatalog,
  scheduleRows,
  serviceHighlights,
  stationGuides,
  ticketItemCatalog,
  travelNotes,
  userAccountRows,
  type RailRegion,
} from "@/shared/mocks/railway";

const regionalTabs = [
  { value: "Bắc", label: "Miền Bắc" },
  { value: "Trung", label: "Miền Trung" },
  { value: "Nam", label: "Miền Nam" },
] as const;

const boardToneClassName = {
  "Mở bán": "bg-secondary text-secondary-foreground",
  "Sắp hết chỗ": "bg-primary text-primary-foreground",
  "Khởi hành hôm nay": "border border-border bg-background text-foreground",
} as const;

const regionDescriptions: Record<RailRegion, string> = {
  Bắc: "Ưu tiên tuyến xuyên Việt, tàu đêm và các chặng xuất phát từ Hà Nội.",
  Trung:
    "Tập trung vào hành trình vừa đẹp vừa thực dụng giữa Huế, Đà Nẵng và trục Bắc Nam.",
  Nam: "Phù hợp khách nghỉ dưỡng, đi biển và các tuyến ngắn khởi hành từ Sài Gòn.",
};

export default function HomePage() {
  return (
    <div className="space-y-10">
      <section className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <Card className="relative overflow-hidden border-0 bg-card/88 shadow-[0_28px_80px_-42px_rgba(0,0,0,0.55)] ring-border/70">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.92),transparent_34%),linear-gradient(135deg,rgba(17,16,15,0.06),rgba(17,16,15,0))]" />
          <div className="pointer-events-none absolute inset-x-8 top-8 h-px bg-linear-to-r from-transparent via-border/70 to-transparent" />
          <CardContent className="relative space-y-8 px-6 py-7 sm:px-8 sm:py-8">
            <div className="space-y-4">
              <Badge
                variant="secondary"
                className="rounded-full px-3 py-1 text-[11px] font-semibold tracking-[0.2em] uppercase"
              >
                Bộ giao diện bán vé tàu cao cấp
              </Badge>
              <div className="space-y-3">
                <h1 className="max-w-4xl text-4xl font-semibold tracking-[-0.05em] text-foreground sm:text-5xl xl:text-[3.55rem]">
                  Đặt vé tàu xuyên Bắc Trung Nam với cảm giác tinh gọn, sang và
                  rất rõ hành trình.
                </h1>
                <p className="max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
                  Trang chủ mới ưu tiên 3 việc quan trọng nhất: tra chuyến,
                  chốt khoang và quản lý vé điện tử. Màu sắc được thu về đen,
                  trắng và xám ấm để nhìn tinh tế hơn nhưng vẫn đủ lực bán.
                </p>
              </div>
            </div>

            <Card className="border-0 bg-primary text-primary-foreground ring-white/10">
              <CardContent className="grid gap-4 px-4 py-4 lg:grid-cols-[repeat(4,minmax(0,1fr))_auto] lg:items-end">
                <div className="space-y-2">
                  <Label className="text-[11px] font-semibold tracking-[0.18em] text-primary-foreground/60 uppercase">
                    Ga đi
                  </Label>
                  <Input
                    readOnly
                    value="Ga Hà Nội"
                    className="h-11 border-white/12 bg-white/6 text-primary-foreground placeholder:text-primary-foreground/40"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-[11px] font-semibold tracking-[0.18em] text-primary-foreground/60 uppercase">
                    Ga đến
                  </Label>
                  <Input
                    readOnly
                    value="Ga Đà Nẵng"
                    className="h-11 border-white/12 bg-white/6 text-primary-foreground placeholder:text-primary-foreground/40"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-[11px] font-semibold tracking-[0.18em] text-primary-foreground/60 uppercase">
                    Ngày đi
                  </Label>
                  <Input
                    readOnly
                    value="13/04/2026"
                    className="h-11 border-white/12 bg-white/6 text-primary-foreground placeholder:text-primary-foreground/40"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-[11px] font-semibold tracking-[0.18em] text-primary-foreground/60 uppercase">
                    Hạng chỗ
                  </Label>
                  <Input
                    readOnly
                    value="Khoang 4 giường mềm"
                    className="h-11 border-white/12 bg-white/6 text-primary-foreground placeholder:text-primary-foreground/40"
                  />
                </div>
                <Button
                  size="lg"
                  className="h-11 cursor-pointer rounded-xl bg-white text-primary hover:bg-white/92"
                >
                  Tra cứu chuyến
                  <ArrowRight className="size-4" />
                </Button>
              </CardContent>
            </Card>

            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="cursor-pointer">
                <Link to={routePaths.home}>
                  Xem các tuyến đang mở bán
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="cursor-pointer bg-white/58"
              >
                <Link to={routePaths.profile}>Mở trung tâm vé của tôi</Link>
              </Button>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {heroMetrics.map((item) => (
                <Card
                  key={item.label}
                  size="sm"
                  className="bg-background/76 ring-border/50"
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

        <Card className="stagger-enter-delay border-0 bg-card/90 ring-border/70">
          <CardHeader className="space-y-3">
            <Badge
              variant="secondary"
              className="w-fit rounded-full px-3 py-1 text-[10px] font-semibold tracking-[0.18em] uppercase"
            >
              Bảng điện tử hôm nay
            </Badge>
            <div className="space-y-2">
              <CardTitle className="text-xl sm:text-2xl">
                Lịch tàu sắp chạy và tình trạng chỗ
              </CardTitle>
              <CardDescription>
                Dạng hiển thị này giúp khách nắm rất nhanh tuyến nào đang mở
                bán, sắp hết chỗ hoặc cần chốt ngay.
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            {departureBoard.map((item) => (
              <Card
                key={item.id}
                size="sm"
                className="bg-background/80 ring-border/45"
              >
                <CardContent className="space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1">
                      <p className="text-sm font-semibold text-foreground">
                        {item.trainCode}
                      </p>
                      <p className="text-sm text-muted-foreground">{item.route}</p>
                    </div>
                    <Badge
                      variant="secondary"
                      className={boardToneClassName[item.status]}
                    >
                      {item.status}
                    </Badge>
                  </div>
                  <div className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-3">
                    <div className="flex items-center gap-2">
                      <CalendarDays className="size-4" />
                      {formatShortDate(item.departureDate)}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock3 className="size-4" />
                      {item.departureTime}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPinned className="size-4" />
                      {item.platform}
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <p className="text-muted-foreground">Còn {item.seatsLeft} chỗ</p>
                    <Button variant="ghost" size="sm" className="cursor-pointer">
                      Giữ chỗ
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </CardContent>
          <CardFooter className="justify-between border-t border-border/50 bg-transparent text-sm text-muted-foreground">
            <span>Trục dọc Bắc Nam đang là nhóm tuyến bán tốt nhất.</span>
            <MoveRight className="size-4" />
          </CardFooter>
        </Card>
      </section>

      <section className="space-y-5">
        <div className="space-y-4">
          <Badge
            variant="secondary"
            className="rounded-full px-3 py-1 text-[11px] font-semibold tracking-[0.2em] uppercase"
          >
            Tra cứu theo miền
          </Badge>
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold tracking-[-0.04em] text-foreground sm:text-3xl">
              Chia tuyến theo Bắc, Trung và Nam để khách nhìn phát hiểu ngay
            </h2>
            <p className="max-w-3xl text-sm leading-6 text-muted-foreground">
              Đây là nơi tôi áp dụng thêm Tabs và Table của shadcn để phần
              chọn miền, xem tuyến nổi bật và lịch tàu tham khảo đi cùng nhau
              trong một nhịp tương tác thống nhất.
            </p>
          </div>
        </div>

        <Tabs defaultValue="Bắc" className="space-y-4">
          <TabsList
            variant="line"
            className="h-auto w-full flex-wrap justify-start gap-2 rounded-none bg-transparent p-0"
          >
            {regionalTabs.map((region) => (
              <TabsTrigger
                key={region.value}
                value={region.value}
                className="rounded-full border border-border/70 bg-card/70 px-4 py-2 data-active:bg-primary data-active:text-primary-foreground"
              >
                {region.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {regionalTabs.map((region) => {
            const routes = featuredRoutes.filter(
              (item) => item.region === region.value,
            );
            const schedules = scheduleRows.filter(
              (item) => item.region === region.value,
            );

            return (
              <TabsContent
                key={region.value}
                value={region.value}
                className="space-y-4"
              >
                <div className="grid gap-4 xl:grid-cols-[1.08fr_0.92fr]">
                  <div className="grid gap-4">
                    {routes.map((item) => (
                      <Card
                        key={item.id}
                        className="border-0 bg-card/92 ring-border/65"
                      >
                        <CardHeader className="space-y-4">
                          <div className="flex flex-wrap gap-2">
                            {item.tags.map((tag) => (
                              <Badge
                                key={tag}
                                variant="secondary"
                                className="rounded-full px-3 py-1 text-[10px] font-semibold tracking-[0.18em] uppercase"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <div className="space-y-2">
                            <CardTitle className="text-xl">
                              {item.title}
                            </CardTitle>
                            <CardDescription>{item.summary}</CardDescription>
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="grid gap-3 sm:grid-cols-3">
                            <Card
                              size="sm"
                              className="h-full bg-background/82 ring-border/40"
                            >
                              <CardContent className="space-y-1">
                                <p className="text-[11px] font-semibold tracking-[0.16em] text-muted-foreground uppercase">
                                  Hành trình
                                </p>
                                <p className="font-medium text-foreground">
                                  {item.fromStation}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                  {item.toStation}
                                </p>
                              </CardContent>
                            </Card>
                            <Card
                              size="sm"
                              className="h-full bg-background/82 ring-border/40"
                            >
                              <CardContent className="space-y-1">
                                <p className="text-[11px] font-semibold tracking-[0.16em] text-muted-foreground uppercase">
                                  Giờ tàu
                                </p>
                                <p className="font-medium text-foreground">
                                  {item.departureTime} <MoveRight className="inline size-3.5" />{" "}
                                  {item.arrivalTime}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                  {item.duration}
                                </p>
                              </CardContent>
                            </Card>
                            <Card
                              size="sm"
                              className="h-full bg-background/82 ring-border/40"
                            >
                              <CardContent className="space-y-1">
                                <p className="text-[11px] font-semibold tracking-[0.16em] text-muted-foreground uppercase">
                                  Giá từ
                                </p>
                                <p className="font-medium text-foreground">
                                  {formatVnd(item.priceFrom)}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                  Còn {item.seatsLeft} chỗ
                                </p>
                              </CardContent>
                            </Card>
                          </div>
                          <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-border/60 bg-background/70 p-4">
                            <div className="space-y-1">
                              <p className="text-sm font-medium text-foreground">
                                {item.trainCode} · Khởi hành{" "}
                                {formatShortDate(item.departureDate)}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                {regionDescriptions[region.value]}
                              </p>
                            </div>
                            <Button asChild variant="outline" className="cursor-pointer">
                              <Link to={routePaths.profile}>
                                Xem luồng đặt vé
                                <ArrowRight className="size-4" />
                              </Link>
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <Card className="border-0 bg-card/92 ring-border/65">
                    <CardHeader className="space-y-2">
                      <CardTitle className="text-xl">
                        Lịch tàu tham khảo {region.label.toLowerCase()}
                      </CardTitle>
                      <CardDescription>
                        Bảng này dùng Table để hiển thị nhanh mã tàu, thời
                        gian và hạng chỗ còn lại.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Table>
                        <TableHeader>
                          <TableRow className="hover:bg-transparent">
                            <TableHead>Mã tàu</TableHead>
                            <TableHead>Tuyến</TableHead>
                            <TableHead>Khởi hành</TableHead>
                            <TableHead>Đến nơi</TableHead>
                            <TableHead>Khoang</TableHead>
                            <TableHead className="text-right">Chỗ</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {schedules.map((item) => (
                            <TableRow key={item.id}>
                              <TableCell className="font-medium">
                                {item.trainCode}
                              </TableCell>
                              <TableCell>{item.route}</TableCell>
                              <TableCell>
                                <div className="space-y-0.5">
                                  <p className="text-foreground">
                                    {item.departureTime}
                                  </p>
                                  <p className="text-xs text-muted-foreground">
                                    {item.duration}
                                  </p>
                                </div>
                              </TableCell>
                              <TableCell>{item.arrivalTime}</TableCell>
                              <TableCell>{item.cabin}</TableCell>
                              <TableCell className="text-right">
                                {item.seatsLeft}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            );
          })}
        </Tabs>
      </section>

      <section className="grid gap-4 lg:grid-cols-[1.04fr_0.96fr]">
        <Card className="border-0 bg-card/92 ring-border/65">
          <CardHeader className="space-y-2">
            <CardTitle>Ga trọng điểm trên hành trình Bắc Trung Nam</CardTitle>
            <CardDescription>
              Các card này giữ cấu trúc rất sạch để phù hợp tinh thần sang và
              tinh tế của giao diện mới.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {stationGuides.map((item) => (
              <Card
                key={item.station}
                size="sm"
                className="bg-background/82 ring-border/40"
              >
                <CardContent className="flex items-start gap-3">
                  <span className="grid size-10 place-items-center rounded-2xl bg-primary text-primary-foreground">
                    <MapPinned className="size-5" />
                  </span>
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="font-medium text-foreground">
                        {item.station}
                      </p>
                      <Badge variant="secondary">{item.region}</Badge>
                    </div>
                    <p className="text-sm text-foreground/80">{item.bestFor}</p>
                    <p className="text-sm leading-6 text-muted-foreground">
                      {item.summary}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </CardContent>
        </Card>

        <div className="grid gap-4">
          <Card className="border-0 bg-card/92 ring-border/65">
            <CardHeader className="space-y-2">
              <CardTitle>Lý do layout này hợp với bán vé tàu</CardTitle>
              <CardDescription>
                Tôi giữ khối thông tin gọn, ưu tiên chữ dễ quét và tránh cảm
                giác màu mè.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {serviceHighlights.map((item) => (
                <Card
                  key={item.title}
                  size="sm"
                  className="bg-background/82 ring-border/40"
                >
                  <CardContent className="flex items-start gap-3">
                    <span className="grid size-10 place-items-center rounded-2xl bg-background text-foreground ring-1 ring-border/60">
                      <ShieldCheck className="size-5" />
                    </span>
                    <div className="space-y-1">
                      <p className="font-medium text-foreground">{item.title}</p>
                      <p className="text-sm leading-6 text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </CardContent>
          </Card>

          <Card className="border-0 bg-card/92 ring-border/65">
            <CardHeader className="space-y-2">
              <CardTitle>Hỏi nhanh trước khi chốt vé</CardTitle>
              <CardDescription>
                Phần này dùng Accordion để giữ thông tin hỗ trợ ngắn gọn nhưng
                vẫn đủ chiều sâu.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible>
                {travelNotes.map((item) => (
                  <AccordionItem key={item.title} value={item.title}>
                    <AccordionTrigger>{item.title}</AccordionTrigger>
                    <AccordionContent>{item.content}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="space-y-5">
        <div className="space-y-4">
          <Badge
            variant="secondary"
            className="rounded-full px-3 py-1 text-[11px] font-semibold tracking-[0.2em] uppercase"
          >
            Dữ liệu mock theo schema
          </Badge>
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold tracking-[-0.04em] text-foreground sm:text-3xl">
              Phần này mới là chỗ dữ liệu database được lộ ra trực tiếp trên UI
            </h2>
            <p className="max-w-3xl text-sm leading-6 text-muted-foreground">
              Tôi giữ các màn hình cũ để demo flow bán vé, nhưng thêm khu này để
              bạn thấy rõ mock hiện đang bám theo các bảng user, ticket_item,
              orders và payments.
            </p>
          </div>
        </div>

        <div className="grid gap-3 md:grid-cols-5">
          {databaseMetrics.map((item) => (
            <Card key={item.label} size="sm" className="border-0 bg-card/92 ring-border/65">
              <CardContent className="space-y-2">
                <p className="text-[11px] font-semibold tracking-[0.18em] text-muted-foreground uppercase">
                  {item.label}
                </p>
                <p className="text-xl font-semibold tracking-tight text-foreground">
                  {item.value}
                </p>
                <p className="text-sm leading-6 text-muted-foreground">
                  {item.detail}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="ticket-items" className="space-y-4">
          <TabsList className="h-auto flex-wrap gap-2 rounded-2xl bg-muted/65 p-1">
            <TabsTrigger value="ticket-items" className="px-4 py-2">
              Ticket Items
            </TabsTrigger>
            <TabsTrigger value="orders" className="px-4 py-2">
              Orders
            </TabsTrigger>
            <TabsTrigger value="payments" className="px-4 py-2">
              Payments
            </TabsTrigger>
            <TabsTrigger value="users" className="px-4 py-2">
              Users
            </TabsTrigger>
          </TabsList>

          <TabsContent value="ticket-items">
            <Card className="border-0 bg-card/92 ring-border/65">
              <CardHeader>
                <CardTitle>Preview bảng `ticket_item`</CardTitle>
                <CardDescription>
                  Hiển thị rõ stock, sale time, giá gốc và giá flash.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow className="hover:bg-transparent">
                      <TableHead>Mã tàu</TableHead>
                      <TableHead>Hạng vé</TableHead>
                      <TableHead>Giá gốc</TableHead>
                      <TableHead>Giá flash</TableHead>
                      <TableHead>Stock</TableHead>
                      <TableHead>Mở bán</TableHead>
                      <TableHead>Kết thúc</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {ticketItemCatalog.slice(0, 8).map((item) => (
                      <TableRow key={item.id}>
                        <TableCell className="font-medium">
                          <div className="space-y-0.5">
                            <p>{item.trainCode}</p>
                            <p className="text-xs text-muted-foreground">
                              {item.ticketId.slice(0, 8)}
                            </p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="space-y-0.5">
                            <p>{item.name}</p>
                            <p className="text-xs text-muted-foreground">
                              {item.isStockPrepared ? "Stock ready" : "Draft"}
                            </p>
                          </div>
                        </TableCell>
                        <TableCell>{formatVnd(item.priceOriginal)}</TableCell>
                        <TableCell>{formatVnd(item.priceFlash)}</TableCell>
                        <TableCell>
                          {item.stockAvailable}/{item.stockInitial}
                        </TableCell>
                        <TableCell>{item.saleStartTime.slice(0, 16).replace("T", " ")}</TableCell>
                        <TableCell>{item.saleEndTime.slice(0, 16).replace("T", " ")}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="orders">
            <Card className="border-0 bg-card/92 ring-border/65">
              <CardHeader>
                <CardTitle>Preview bảng `orders`</CardTitle>
                <CardDescription>
                  Đơn hàng giờ có quantity, unit_price, total_price và liên kết payment.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow className="hover:bg-transparent">
                      <TableHead>User</TableHead>
                      <TableHead>Ticket</TableHead>
                      <TableHead>Item</TableHead>
                      <TableHead>Qty</TableHead>
                      <TableHead>Unit</TableHead>
                      <TableHead>Total</TableHead>
                      <TableHead>Payment</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {orderCatalog.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell>
                          <div className="space-y-0.5">
                            <p>{item.username}</p>
                            <p className="text-xs text-muted-foreground">
                              {item.userEmail}
                            </p>
                          </div>
                        </TableCell>
                        <TableCell>{item.trainCode}</TableCell>
                        <TableCell>{item.ticketItemName}</TableCell>
                        <TableCell>{item.quantity}</TableCell>
                        <TableCell>{formatVnd(item.unitPrice)}</TableCell>
                        <TableCell>{formatVnd(item.totalPrice)}</TableCell>
                        <TableCell>
                          <div className="space-y-0.5">
                            <p>{item.paymentStatus}</p>
                            <p className="text-xs text-muted-foreground">
                              {item.paymentMethod}
                            </p>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="payments">
            <Card className="border-0 bg-card/92 ring-border/65">
              <CardHeader>
                <CardTitle>Preview bảng `payments`</CardTitle>
                <CardDescription>
                  Có transaction_id, paid_at và phân biệt PENDING với PAID/SETTLED.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow className="hover:bg-transparent">
                      <TableHead>Order ID</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Method</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Transaction</TableHead>
                      <TableHead>Paid At</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {paymentCatalog.map((item) => (
                      <TableRow key={item.orderId}>
                        <TableCell className="font-medium">
                          {item.orderId.slice(0, 12)}
                        </TableCell>
                        <TableCell>{formatVnd(item.amount)}</TableCell>
                        <TableCell>{item.paymentMethod}</TableCell>
                        <TableCell>{item.status}</TableCell>
                        <TableCell>{item.transactionId ?? "Chưa có"}</TableCell>
                        <TableCell>{item.paidAt ?? "Chưa thanh toán"}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="users">
            <Card className="border-0 bg-card/92 ring-border/65">
              <CardHeader>
                <CardTitle>Preview bảng `user`</CardTitle>
                <CardDescription>
                  Có role, email, username và timestamp tạo tài khoản.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow className="hover:bg-transparent">
                      <TableHead>Username</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead>Created</TableHead>
                      <TableHead>ID</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {userAccountRows.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell className="font-medium">{item.username}</TableCell>
                        <TableCell>{item.email}</TableCell>
                        <TableCell>{item.role}</TableCell>
                        <TableCell>{item.createdAt.slice(0, 10)}</TableCell>
                        <TableCell>{item.id.slice(0, 12)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {[
          {
            title: "Đăng nhập",
            description:
              "Mở khu quản lý vé điện tử, toa tàu và trạng thái thanh toán.",
            icon: Ticket,
            to: routePaths.login,
          },
          {
            title: "Tạo tài khoản",
            description:
              "Lưu hành khách thường đi, ga yêu thích và ưu tiên loại khoang.",
            icon: TrainFront,
            to: routePaths.register,
          },
          {
            title: "Vé của tôi",
            description:
              "Xem lại các booking sắp đi, lịch sử hoàn tất và chỗ ngồi đã giữ.",
            icon: ShieldCheck,
            to: routePaths.profile,
          },
        ].map((item) => (
          <Card key={item.title} className="border-0 bg-card/92 ring-border/65">
            <CardHeader className="space-y-4">
              <span className="grid size-11 place-items-center rounded-2xl bg-primary text-primary-foreground">
                <item.icon className="size-5" />
              </span>
              <div className="space-y-2">
                <CardTitle className="text-xl">{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </div>
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
