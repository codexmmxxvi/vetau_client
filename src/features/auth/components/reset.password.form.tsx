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

const resetPasswordSchema = z
  .object({
    token: z.string().min(6, "Mã khôi phục cần tối thiểu 6 ký tự."),
    password: z.string().min(8, "Mật khẩu cần tối thiểu 8 ký tự."),
    confirmPassword: z
      .string()
      .min(8, "Vui lòng xác nhận lại mật khẩu."),
  })
  .refine((values) => values.password === values.confirmPassword, {
    message: "Mật khẩu xác nhận không khớp.",
    path: ["confirmPassword"],
  });

type ResetPasswordFormValues = z.infer<typeof resetPasswordSchema>;

export function ResetPasswordForm() {
  const navigate = useNavigate();
  const form = useForm<ResetPasswordFormValues>({
    defaultValues: {
      confirmPassword: "",
      password: "",
      token: "",
    },
    resolver: zodResolver(resetPasswordSchema),
  });

  const onSubmit = form.handleSubmit(async () => {
    await sleep(800);
    navigate(routePaths.login);
  });

  return (
    <Card className="mx-auto w-full bg-card/95 ring-border/40">
      <CardHeader className="space-y-2">
        <CardTitle>Đặt mật khẩu mới</CardTitle>
        <CardDescription>
          Xác thực mã khôi phục để tiếp tục quản lý các booking đã lưu.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form className="space-y-5" noValidate onSubmit={onSubmit}>
            <FormField
              control={form.control}
              name="token"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mã khôi phục</FormLabel>
                  <FormControl>
                    <Input
                      autoComplete="one-time-code"
                      placeholder="Nhập mã khôi phục"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Mã được gửi tới email đã dùng để đăng ký tài khoản.
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
                  <FormLabel>Mật khẩu mới</FormLabel>
                  <FormControl>
                    <Input
                      autoComplete="new-password"
                      placeholder="Nhập mật khẩu mới"
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Mật khẩu mới sẽ áp dụng cho toàn bộ khu quản lý vé.
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
                    Nhập lại để xác nhận chính xác trước khi cập nhật.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              size="lg"
              className="w-full cursor-pointer"
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? (
                <>
                  <Spinner className="size-4 text-current" />
                  Đang cập nhật mật khẩu...
                </>
              ) : (
                "Cập nhật mật khẩu"
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
