import { Link } from "react-router-dom";

import { routePaths } from "@/shared/config/routes";

import { ForgotPasswordForm } from "../components/forgot.password.form";
import { AuthShell } from "../components/auth.shell";

export default function ForgotPasswordPage() {
  return (
    <AuthShell
      eyebrow="Tài khoản / Khôi phục"
      title="Lấy lại quyền truy cập tài khoản"
      description="Nhập email đã đăng ký để tiếp tục quản lý vé và lịch tàu."
      footer={
        <>
          Đã nhớ mật khẩu?{" "}
          <Link className="font-semibold text-foreground underline" to={routePaths.login}>
            Đăng nhập
          </Link>
          .
        </>
      }
    >
      <ForgotPasswordForm />
    </AuthShell>
  );
}
