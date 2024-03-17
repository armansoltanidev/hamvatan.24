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
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

import Link from "next/link";

import TypographyH1, { TypographyP } from "@/components/ui/typography";
import UnderlinedLink from "@/components/ui/underlined-link";

export default function SignUpPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
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
                name="username"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormControl>
                      <Input
                        className="px-6 py-8 placeholder:text-xl placeholder:font-medium text-xl"
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
                name="username"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormControl>
                      <Input
                        className="px-6 py-8 placeholder:text-xl placeholder:font-medium text-xl"
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
              name="username"
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
              name="username"
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
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="password"
                      className="px-6 py-8 placeholder:text-xl placeholder:font-medium text-xl"
                      placeholder="تکرار رمز عبــور"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription className="px-2">
                    لطفا تا حد امکان از وارد کردن رمز های آسان خودداری نمایید.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button variant="primary" size="lg" type="submit">
              ثبت نام در پنــل
            </Button>

            <UnderlinedLink href="#" className="inline-block px-2 text-sm">
              حساب دارید؟ وارد شوید.
            </UnderlinedLink>
          </form>
        </Form>
      </div>
    </>
  );
}
