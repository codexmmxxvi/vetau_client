import type { ReactNode } from "react";

import { Dot, ShieldCheck, TrainFront } from "lucide-react";

import { Avatar, AvatarFallback, AvatarGroup } from "@/shared/components/ui/avatar";
import { Badge } from "@/shared/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui/card";
import { Separator } from "@/shared/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/components/ui/table";
import { formatShortDate } from "@/shared/lib/format";
import { authPanelNotes, departureBoard } from "@/shared/mocks/railway";

type AuthShellProps = {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
  footer?: ReactNode;
};

export function AuthShell({
  eyebrow,
  title,
  description,
  children,
  footer,
}: AuthShellProps) {
  return (
    <main className="grid min-h-svh bg-transparent lg:h-svh lg:grid-cols-[minmax(0,31rem)_minmax(0,1fr)] lg:overflow-hidden xl:grid-cols-[minmax(0,34rem)_minmax(0,1fr)]">
      <section className="relative flex items-center justify-center border-b border-border/75 px-5 py-6 sm:px-8 sm:py-8 lg:border-r lg:border-b-0 lg:px-8 lg:py-6">
        <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-white/65 via-transparent to-transparent" />
        <div className="relative mx-auto flex w-full max-w-md flex-col items-center space-y-5 text-left stagger-enter lg:space-y-4">
          <div className="w-full space-y-3">
            <Badge
              variant="secondary"
              className="rounded-full px-3 py-1 text-[10px] font-semibold tracking-[0.18em] uppercase"
            >
              {eyebrow}
            </Badge>
            <div className="space-y-2.5">
              <h1 className="text-3xl font-semibold tracking-[-0.05em] text-foreground sm:text-[2.35rem] xl:text-[2.6rem]">
                {title}
              </h1>
              <p className="max-w-md text-sm leading-6 text-muted-foreground">
                {description}
              </p>
            </div>
          </div>
          <div className="w-full">{children}</div>
          {footer ? (
            <div className="w-full text-sm leading-5 text-muted-foreground">
              {footer}
            </div>
          ) : null}
        </div>
      </section>

      <aside className="hidden bg-[linear-gradient(180deg,rgba(17,16,15,0.05),rgba(255,255,255,0)),linear-gradient(135deg,rgba(255,255,255,0.66),rgba(17,16,15,0.06))] lg:flex lg:min-h-0 lg:flex-col lg:justify-between lg:overflow-hidden">
        <div className="flex-1 p-8 xl:p-10">
          <div className="max-w-md space-y-6 stagger-enter-delay">
            <div className="space-y-3">
              <Badge
                variant="secondary"
                className="rounded-full px-3 py-1 text-[10px] font-semibold tracking-[0.18em] uppercase"
              >
                Khoang chờ tài khoản
              </Badge>
              <div className="space-y-2.5">
                <h2 className="text-2xl font-semibold tracking-[-0.04em] text-foreground xl:text-3xl">
                  Một tài khoản để giữ chỗ, quản lý toa tàu và đọc vé điện tử.
                </h2>
                <p className="max-w-md text-sm leading-6 text-muted-foreground">
                  Phần auth được thiết kế như một khoang chờ sang gọn: ít màu,
                  nhiều khoảng thở và ưu tiên thông tin quan trọng.
                </p>
              </div>
            </div>

            <Card className="border-0 bg-background/72 ring-border/55">
              <CardContent className="space-y-4">
                <div className="space-y-2.5">
                  {authPanelNotes.map((item) => (
                    <Card
                      key={item}
                      size="sm"
                      className="bg-background/82 ring-border/40"
                    >
                      <CardContent className="flex items-start gap-2.5">
                        <span className="grid size-8 place-items-center rounded-xl bg-primary text-primary-foreground">
                          <ShieldCheck className="size-4" />
                        </span>
                        <div className="space-y-0.5">
                          <p className="text-sm font-medium text-foreground">
                            Tính năng
                          </p>
                          <p className="text-sm leading-5 text-muted-foreground">
                            {item}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Separator />

                <Card className="border-0 bg-card/86 ring-border/45">
                  <CardHeader className="space-y-1">
                    <CardTitle className="text-base">
                      Lượt mở bán nổi bật
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">
                      Trích từ bảng điện tử trên trang chủ.
                    </p>
                  </CardHeader>
                  <CardContent className="px-0 pb-0">
                    <Table>
                      <TableHeader>
                        <TableRow className="hover:bg-transparent">
                          <TableHead className="px-4">Mã</TableHead>
                          <TableHead>Tuyến</TableHead>
                          <TableHead>Giờ</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {departureBoard.slice(0, 3).map((item) => (
                          <TableRow key={item.id}>
                            <TableCell className="px-4 font-medium">
                              {item.trainCode}
                            </TableCell>
                            <TableCell>
                              <div className="space-y-0.5">
                                <p>{item.route}</p>
                                <p className="text-xs text-muted-foreground">
                                  {formatShortDate(item.departureDate)}
                                </p>
                              </div>
                            </TableCell>
                            <TableCell>{item.departureTime}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="border-t border-border/70 px-8 py-5 xl:px-10 xl:py-6">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <span className="text-foreground">Hỗ trợ</span>
              <Dot className="size-4" />
              <span>24/7</span>
              <Dot className="size-4" />
              <span>Vé điện tử</span>
              <Dot className="size-4" />
              <span>Đổi chỗ</span>
            </div>
            <div className="flex items-center gap-3">
              <AvatarGroup>
                <Avatar size="sm">
                  <AvatarFallback>HN</AvatarFallback>
                </Avatar>
                <Avatar size="sm">
                  <AvatarFallback>HU</AvatarFallback>
                </Avatar>
                <Avatar size="sm">
                  <AvatarFallback>SG</AvatarFallback>
                </Avatar>
              </AvatarGroup>
              <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                <TrainFront className="size-4" />
                Tuyến Bắc Trung Nam
              </span>
            </div>
          </div>
        </div>
      </aside>
    </main>
  );
}
