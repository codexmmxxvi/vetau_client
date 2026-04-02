import { Link } from "react-router-dom";

import { routePaths } from "@/shared/config/routes";

import { RegisterForm } from "../components/register.form";
import { AuthShell } from "../components/auth.shell";

export default function RegisterPage() {
  return (
    <AuthShell
      eyebrow="Tài khoản / Đăng ký"
      title="Tạo tài khoản hành khách mới"
      description="Lưu thông tin liên hệ, hành khách thường đi và ưu tiên loại khoang."
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
