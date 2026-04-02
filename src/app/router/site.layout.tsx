import { ArrowUpRight, MapPinned, Ticket, TrainFront } from "lucide-react";
import { Link, NavLink, Outlet } from "react-router-dom";

import { Badge } from "@/shared/components/ui/badge";
import { Button } from "@/shared/components/ui/button";
import { routePaths } from "@/shared/config/routes";
import { cn } from "@/shared/lib/utils";

const navigationItems = [
  { label: "Tra cứu chuyến", to: routePaths.home, icon: TrainFront },
  { label: "Vé của tôi", to: routePaths.profile, icon: Ticket },
] as const;

const corridorStops = ["Hà Nội", "Huế", "Đà Nẵng", "Nha Trang", "Sài Gòn"];

export function SiteLayout() {
  return (
    <div className="min-h-svh bg-transparent">
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/84 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <Link
            to={routePaths.home}
            className="inline-flex items-center gap-3 text-sm font-semibold tracking-[0.14em] uppercase text-foreground"
          >
            <span className="grid size-11 place-items-center rounded-2xl bg-primary text-[13px] font-semibold text-primary-foreground shadow-[0_18px_45px_-26px_rgba(0,0,0,0.85)]">
              BR
            </span>
            <span className="flex flex-col gap-0.5">
              <span>BacNam Rail</span>
              <span className="text-[10px] font-medium tracking-[0.12em] text-muted-foreground normal-case">
                Đặt vé tinh gọn cho tuyến Bắc Trung Nam
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 rounded-2xl bg-card/90 p-1 ring-1 ring-border/60 lg:flex">
            {navigationItems.map(({ icon: Icon, label, to }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  cn(
                    "inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",
                    isActive && "bg-background text-foreground shadow-sm",
                  )
                }
              >
                <Icon className="size-4" />
                {label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              asChild
              variant="ghost"
              className="cursor-pointer max-sm:hidden"
            >
              <Link to={routePaths.login}>Đăng nhập</Link>
            </Button>
            <Button asChild className="cursor-pointer">
              <Link to={routePaths.register}>
                Tạo tài khoản
                <ArrowUpRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="border-t border-border/50 bg-background/72 px-4 py-2.5 sm:px-6">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <Badge
                variant="secondary"
                className="rounded-full px-3 py-1 text-[10px] font-semibold tracking-[0.2em] uppercase"
              >
                Bắc Trung Nam
              </Badge>
              <div className="hidden items-center gap-2 text-xs text-muted-foreground md:flex">
                <MapPinned className="size-3.5" />
                {corridorStops.map((stop, index) => (
                  <span key={stop} className="inline-flex items-center gap-2">
                    <span>{stop}</span>
                    {index === corridorStops.length - 1 ? null : (
                      <span className="text-border">•</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
            <p className="text-xs text-muted-foreground">
              Giao diện ưu tiên tra chuyến, chọn khoang và quản lý vé điện tử.
            </p>
          </div>
        </div>

        <div className="border-t border-border/65 px-4 py-2 sm:px-6 lg:hidden">
          <nav className="mx-auto grid max-w-6xl grid-cols-2 gap-2">
            {navigationItems.map(({ icon: Icon, label, to }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  cn(
                    "inline-flex items-center justify-center gap-2 rounded-xl px-3 py-2 text-sm font-medium text-muted-foreground ring-1 ring-transparent",
                    isActive
                      ? "bg-card text-foreground ring-border/45"
                      : "bg-background/55",
                  )
                }
              >
                <Icon className="size-4" />
                {label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
        <Outlet />
      </div>
    </div>
  );
}
