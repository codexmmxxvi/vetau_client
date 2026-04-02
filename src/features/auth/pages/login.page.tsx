import { Link } from "react-router-dom";

import { routePaths } from "@/shared/config/routes";

import { LoginForm } from "../components/login.form";
import { AuthShell } from "../components/auth.shell";

export default function LoginPage() {
  return (
    <AuthShell
      eyebrow="Tài khoản / Đăng nhập"
      title="Đăng nhập để quản lý vé đã đặt"
      description="Xem lịch khởi hành, giữ chỗ và thông tin hành khách."
      footer={
        <>
          Chưa có tài khoản?{" "}
          <Link className="font-semibold text-foreground underline" to={routePaths.register}>
            Tạo tài khoản
          </Link>
          . Quên mật khẩu?{" "}
          <Link
            className="font-semibold text-foreground underline"
            to={routePaths.forgotPassword}
          >
            Khôi phục
          </Link>
          .
        </>
      }
    >
      <LoginForm />
    </AuthShell>
  );
}
