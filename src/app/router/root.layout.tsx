import { Outlet, useNavigation } from "react-router-dom";
import { useIsFetching, useIsMutating } from "@tanstack/react-query";

import { Badge } from "@/shared/components/ui/badge";
import { Card, CardContent } from "@/shared/components/ui/card";
import { Spinner } from "@/shared/components/ui/spinner";

export function RootLayout() {
  const navigation = useNavigation();
  const isFetching = useIsFetching();
  const isMutating = useIsMutating();
  const isBusy =
    navigation.state !== "idle" || isFetching > 0 || isMutating > 0;

  return (
    <div className="relative min-h-svh bg-background">
      <Outlet />
      {isBusy ? (
        <div className="pointer-events-none fixed inset-0 z-50 grid place-items-center bg-background/60 p-4 backdrop-blur-sm">
          <Card size="sm" className="w-full max-w-xs bg-card/95 ring-border/40">
            <CardContent className="flex flex-col items-center justify-center gap-3 py-6 text-center">
              <Spinner className="size-8 text-primary" />
              <div className="space-y-1">
                <Badge
                  variant="secondary"
                  className="px-3 py-1 text-[11px] font-semibold tracking-[0.18em] uppercase"
                >
                  Loading
                </Badge>
                <p className="text-sm text-muted-foreground">
                  The interface is preparing the next screen.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      ) : null}
    </div>
  );
}
