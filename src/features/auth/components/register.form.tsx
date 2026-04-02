import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

import { Button } from "@/shared/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/components/ui/form";
import { Input } from "@/shared/components/ui/input";
import { Spinner } from "@/shared/components/ui/spinner";
import { routePaths } from "@/shared/config/routes";
import { sleep } from "@/shared/lib/sleep";

const registerSchema = z
  .object({
    fullName: z.string().min(2, "Họ tên cần tối thiểu 2 ký tự."),
    email: z.string().email("Vui lòng nhập đúng định dạng email."),
    password: z.string().min(8, "Mật khẩu cần tối thiểu 8 ký tự."),
    confirmPassword: z
      .string()
      .min(8, "Vui lòng xác nhận lại mật khẩu."),
  })
  .refine((values) => values.password === values.confirmPassword, {
    message: "Mật khẩu xác nhận không khớp.",
    path: ["confirmPassword"],
  });

type RegisterFormValues = z.infer<typeof registerSchema>;

export function RegisterForm() {
  const navigate = useNavigate();
  const form = useForm<RegisterFormValues>({
    defaultValues: {
      confirmPassword: "",
      email: "",
      fullName: "",
      password: "",
    },
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = form.handleSubmit(async () => {
    await sleep(900);
    navigate(routePaths.profile);
  });

  return (
    <Card size="sm" className="mx-auto w-full bg-card/95 ring-border/40">
      <CardHeader className="space-y-1.5">
        <CardTitle>Tạo hồ sơ hành khách</CardTitle>
        <CardDescription>
          Lưu thông tin để đặt vé nhanh hơn ở các tuyến Bắc Trung Nam.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form className="grid gap-4 sm:grid-cols-2" noValidate onSubmit={onSubmit}>
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Họ và tên</FormLabel>
                  <FormControl>
                    <Input autoComplete="name" placeholder="Nguyễn Văn A" {...field} />
                  </FormControl>
                  <FormDescription>
                    Dùng để hiển thị trên vé điện tử và hồ sơ.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      autoComplete="email"
                      placeholder="khach@bacnamrail.vn"
                      type="email"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Email nhận mã vé, cập nhật giờ tàu và thông báo đổi chỗ.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mật khẩu</FormLabel>
                  <FormControl>
                    <Input
                      autoComplete="new-password"
                      placeholder="Nhập mật khẩu"
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Nên dùng tối thiểu 8 ký tự để bảo vệ lịch sử booking.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Xác nhận mật khẩu</FormLabel>
                  <FormControl>
                    <Input
                      autoComplete="new-password"
                      placeholder="Nhập lại mật khẩu"
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Xác nhận lại để hoàn tất tạo hồ sơ.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              size="lg"
              className="mt-1 w-full cursor-pointer sm:col-span-2"
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? (
                <>
                  <Spinner className="size-4 text-current" />
                  Đang tạo hồ sơ...
                </>
              ) : (
                "Tạo tài khoản"
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
