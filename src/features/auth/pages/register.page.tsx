import { Link } from "react-router-dom";

import { routePaths } from "@/shared/config/routes";

import { RegisterForm } from "../components/register.form";
import { AuthShell } from "../components/auth.shell";

export default function RegisterPage() {
  return (
    <AuthShell
      eyebrow="Tài khoản / Đăng ký"
      title="Tạo tài khoản mới"
      description="Lưu thông tin và quản lý đơn đặt vé dễ hơn."
      footer={
        <>
          Đã có tài khoản?{" "}
          <Link className="font-semibold text-foreground underline" to={routePaths.login}>
            Đăng nhập
          </Link>
          .
        </>
      }
    >
      <RegisterForm />
    </AuthShell>
  );
}
