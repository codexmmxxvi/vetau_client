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

const loginSchema = z.object({
  email: z.string().email("Vui lòng nhập đúng định dạng email."),
  password: z.string().min(8, "Mật khẩu cần tối thiểu 8 ký tự."),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export function LoginForm() {
  const navigate = useNavigate();
  const form = useForm<LoginFormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = form.handleSubmit(async () => {
    await sleep(700);
    navigate(routePaths.profile);
  });

  return (
    <Card size="sm" className="mx-auto w-full bg-card/95 ring-border/40">
      <CardHeader className="space-y-1.5">
        <CardTitle>Đăng nhập trung tâm vé</CardTitle>
        <CardDescription>
          Vào khu theo dõi booking, toa tàu và mã vé điện tử.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form className="space-y-4" noValidate onSubmit={onSubmit}>
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
                    Email này sẽ nhận xác nhận vé và thay đổi giờ tàu.
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
                      autoComplete="current-password"
                      placeholder="Nhập mật khẩu"
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Tài khoản demo sẽ điều hướng tới khu quản lý vé của tôi.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              size="lg"
              className="mt-1 w-full cursor-pointer"
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? (
                <>
                  <Spinner className="size-4 text-current" />
                  Đang mở khoang vé...
                </>
              ) : (
                "Đăng nhập"
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
