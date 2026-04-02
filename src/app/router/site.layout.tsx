import { ArrowUpRight, Compass, Ticket } from "lucide-react";
import { Link, NavLink, Outlet } from "react-router-dom";

import { Button } from "@/shared/components/ui/button";
import { routePaths } from "@/shared/config/routes";
import { cn } from "@/shared/lib/utils";

const navigationItems = [
  { label: "Khám phá tuyến", to: routePaths.home, icon: Compass },
  { label: "Vé của tôi", to: routePaths.profile, icon: Ticket },
] as const;

export function SiteLayout() {
  return (
    <div className="min-h-svh bg-transparent">
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/78 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <Link
            to={routePaths.home}
            className="inline-flex items-center gap-3 text-sm font-semibold tracking-[0.14em] uppercase text-foreground"
          >
            <span className="grid size-10 place-items-center rounded-xl bg-gradient-to-br from-[#0e6699] via-[#0d5d8e] to-[#1f7cab] text-[13px] font-bold text-white ring-1 ring-white/40">
              VP
            </span>
            <span className="flex flex-col gap-0.5">
              <span>VeDuLich</span>
              <span className="text-[10px] font-medium tracking-[0.12em] text-muted-foreground normal-case">
                Tour va booking quoc te
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 rounded-xl bg-background/70 p-1 ring-1 ring-border/45 lg:flex">
            {navigationItems.map(({ icon: Icon, label, to }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  cn(
                    "inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",
                    isActive && "bg-accent text-foreground",
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
                      ? "bg-accent text-foreground ring-border/45"
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
