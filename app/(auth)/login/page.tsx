"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  user_number: z.string().min(11, {
    message: "شماره وارد شده اشتباهــه!",
  }),
  user_password: z.string({ required_error: "وارد کردن رمز الزامیه!" }).min(8, {
    message: "حداقل باید هشت کلمه وارد کنید",
  }),
});

import TypographyH1, { TypographyP } from "@/components/ui/typography";
import UnderlinedLink from "@/components/ui/underlined-link";

export default function LoginPage() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      user_number: "",
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
        <TypographyH1>ورود به هموطن ۲۴</TypographyH1>
      </div>
      <div className="space-y-4">
        <TypographyP className="text-muted-foreground">
          لطفا شماره تلفن خود را وارد کنید.
        </TypographyP>
        <Form {...form}>
          <form className="space-y-3" onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="user_number"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="px-6 py-8 placeholder:text-xl placeholder:font-medium text-xl"
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
                      className="px-6 py-8 placeholder:text-xl placeholder:font-medium text-xl"
                      placeholder="رمز عبــور"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button variant="primary" size="lg" type="submit">
              ورود
            </Button>

            <UnderlinedLink href="#" className="inline-block px-2 text-sm">
              رمز عبورم را فراموش کرده ام؟
            </UnderlinedLink>
          </form>
        </Form>
      </div>
    </>
  );
}
