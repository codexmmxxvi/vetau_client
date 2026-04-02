import { Navigate, createBrowserRouter } from "react-router-dom";

import { HomePage } from "@/features/home";
import { routePaths } from "@/shared/config/routes";

import { RootLayout } from "./root.layout";
import { SiteLayout } from "./site.layout";

export const appRouter = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        element: <SiteLayout />,
        children: [
          {
            index: true,
            Component: HomePage,
          },
          {
            path: "profile",
            lazy: async () => {
              const { ProfilePage } = await import("@/features/profile");

              return { Component: ProfilePage };
            },
          },
        ],
      },
      {
        path: "login",
        lazy: async () => {
          const { LoginPage } = await import("@/features/auth");

          return { Component: LoginPage };
        },
      },
      {
        path: "register",
        lazy: async () => {
          const { RegisterPage } = await import("@/features/auth");

          return { Component: RegisterPage };
        },
      },
      {
        path: "forgot-password",
        lazy: async () => {
          const { ForgotPasswordPage } = await import("@/features/auth");

          return { Component: ForgotPasswordPage };
        },
      },
      {
        path: "reset-password",
        lazy: async () => {
          const { ResetPasswordPage } = await import("@/features/auth");

          return { Component: ResetPasswordPage };
        },
      },
      {
        path: "*",
        element: <Navigate to={routePaths.home} replace />,
      },
    ],
  },
]);
