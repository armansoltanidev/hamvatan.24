"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z
  .object({
    first_name: z.string().min(3, {
      message: "حداقل باید سه کلمه وارد کنید",
    }),
    last_name: z.string().min(2, {
      message: "حداقل باید سه کلمه وارد کنید",
    }),

    user_number: z.string().min(11, {
      message: "فرمت شماره اشتبــاهه",
    }),

    user_password: z.string().min(8, {
      message: "حداقل باید هشت کاراکتر وارد کنید",
    }),

    confirm_password: z.string().min(8, {
      message: "حداقل باید هشت کاراکتر وارد کنید",
    }),
  })
  .refine((data) => data.user_password === data.confirm_password, {
    message: "رمز عبور ها برابر نیستند!",
    path: ["confirm_password"],
  });

import TypographyH1, { TypographyP } from "@/components/ui/typography";
import UnderlinedLink from "@/components/ui/underlined-link";

export default function SignUpPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      user_number: "",
      user_password: "",
      confirm_password: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <>
      <div className="mx-auto">
        <TypographyH1>ثبت نام در هموطن ۲۴</TypographyH1>
      </div>
      <div className="space-y-4">
        <TypographyP className="text-muted-foreground">
          لطفا اطلاعات زیر را تکمیل کنید.
        </TypographyP>
        <Form {...form}>
          <form className="space-y-3" onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex gap-x-2">
              <FormField
                control={form.control}
                name="first_name"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormControl>
                      <Input
                        className="px-6 py-8 text-xl placeholder:text-xl placeholder:font-medium"
                        placeholder="نــام"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="last_name"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormControl>
                      <Input
                        className="px-6 py-8 text-xl placeholder:text-xl placeholder:font-medium"
                        placeholder="نام خانــوادگی"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="user_number"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="px-6 py-8 text-xl placeholder:text-xl placeholder:font-medium"
                      placeholder="شماره تلفن"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="user_password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="password"
                      className="px-6 py-8 text-xl placeholder:text-xl placeholder:font-medium"
                      placeholder="رمز عبــور"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirm_password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="password"
                      className="px-6 py-8 text-xl placeholder:text-xl placeholder:font-medium"
                      placeholder="تکرار رمز عبــور"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              className="w-full"
              variant="primary"
              size="lg"
              type="submit"
            >
              ثبت نام در پنــل
            </Button>

            <UnderlinedLink href="/login" className="inline-block px-2 text-sm">
              حساب دارید؟ وارد شوید.
            </UnderlinedLink>
          </form>
        </Form>
      </div>
    </>
  );
}
