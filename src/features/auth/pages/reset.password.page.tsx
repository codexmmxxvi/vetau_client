import { Link } from "react-router-dom";

import { routePaths } from "@/shared/config/routes";

import { ResetPasswordForm } from "../components/reset.password.form";
import { AuthShell } from "../components/auth.shell";

export default function ResetPasswordPage() {
  return (
    <AuthShell
      eyebrow="Tài khoản / Đặt lại mật khẩu"
      title="Tạo mật khẩu mới"
      description="Xác thực mã khôi phục để quay lại trung tâm quản lý vé."
      footer={
        <>
          Chưa nhận được mã?{" "}
          <Link
            className="font-semibold text-foreground underline"
            to={routePaths.forgotPassword}
          >
            Yêu cầu lại
          </Link>
          .
        </>
      }
    >
      <ResetPasswordForm />
    </AuthShell>
  );
}
