import type { ReactNode } from "react";

import { CalendarDays, Check, Dot } from "lucide-react";

import { Badge } from "@/shared/components/ui/badge";
import { Card, CardContent } from "@/shared/components/ui/card";
import { Separator } from "@/shared/components/ui/separator";
import { formatShortDate } from "@/shared/lib/format";
import { authPanelNotes, departureWindows } from "@/shared/mocks/china.travel";

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
        <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-[#e8f4fa] via-transparent to-transparent" />
        <div className="relative mx-auto flex w-full max-w-md flex-col items-center space-y-5 text-left stagger-enter lg:space-y-4">
          <div className="w-full space-y-3">
            <Badge
              variant="secondary"
              className="px-3 py-1 text-[10px] font-semibold tracking-[0.18em] uppercase"
            >
              {eyebrow}
            </Badge>
            <div className="space-y-2.5">
              <h1 className="text-3xl font-semibold tracking-[-0.04em] text-foreground sm:text-[2.35rem] xl:text-[2.6rem]">
                {title}
              </h1>
              <p className="max-w-md text-sm leading-5 text-muted-foreground">
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

      <aside className="hidden bg-linear-to-b from-[#e3f1f8] via-[#edf5fa] to-[#f3f8fc] lg:flex lg:min-h-0 lg:flex-col lg:justify-between lg:overflow-hidden">
        <div className="flex-1 p-8 xl:p-10">
          <div className="max-w-md space-y-6 stagger-enter-delay">
            <div className="space-y-3">
              <Badge
                variant="secondary"
                className="px-3 py-1 text-[10px] font-semibold tracking-[0.18em] uppercase"
              >
                ChinaPass demo
              </Badge>
              <div className="space-y-2.5">
                <h2 className="text-2xl font-semibold tracking-[-0.03em] text-foreground xl:text-3xl">
                  Một tài khoản cho toàn bộ vé du lịch Trung Quốc.
                </h2>
                <p className="max-w-md text-sm leading-5 text-muted-foreground">
                  Theo dõi đặt vé, lịch khởi hành và hành khách trên cùng một hệ
                  thống.
                </p>
              </div>
            </div>

            <Card className="bg-background/60 ring-border/35">
              <CardContent className="space-y-4">
                <div className="space-y-2.5">
                  {authPanelNotes.slice(0, 2).map((item) => (
                    <Card
                      key={item}
                      size="sm"
                      className="bg-background/70 ring-border/30"
                    >
                      <CardContent className="flex items-start gap-2.5">
                        <span className="grid size-8 place-items-center rounded-xl bg-background text-foreground ring-1 ring-border/45">
                          <Check className="size-4" />
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

                <div className="space-y-2.5">
                  <p className="text-sm font-medium text-foreground">
                    Lịch sắp tới
                  </p>
                  {departureWindows.slice(0, 1).map((item) => (
                    <Card
                      key={item.id}
                      size="sm"
                      className="bg-background/70 ring-border/30"
                    >
                      <CardContent className="flex items-start gap-2.5">
                        <span className="grid size-8 place-items-center rounded-xl bg-background text-foreground ring-1 ring-border/45">
                          <CalendarDays className="size-4" />
                        </span>
                        <div className="space-y-0.5">
                          <p className="text-sm font-medium text-foreground">
                            {item.title}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {formatShortDate(item.departureDate)} • Còn{" "}
                            {item.seatsLeft} chỗ
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="border-t border-border/80 px-8 py-5 xl:px-10 xl:py-6">
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <span className="text-foreground">Tài khoản</span>
            <Dot className="size-4" />
            <span>Đăng nhập</span>
            <Dot className="size-4" />
            <span>Đăng ký</span>
            <Dot className="size-4" />
            <span>Khôi phục</span>
          </div>
        </div>
      </aside>
    </main>
  );
}
