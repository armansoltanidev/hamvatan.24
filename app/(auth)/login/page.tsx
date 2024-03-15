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

import TypographyH1, { TypographyP } from "@/components/ui/typography";

export default function LoginPage() {
  // 1. Define your form.
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
    <div className="bg-secondary h-screen">
      <div className="bg-primary-foreground mx-auto w-4/6 h-full grid items-center px-10">
        <div className="space-y-4">
          <TypographyH1>ورود به هموطن ۲۴</TypographyH1>
          <TypographyP className="text-muted-foreground">
            لطفا شماره تلفن خود را وارد کنید.
          </TypographyP>
          <Form {...form}>
            <form className="space-y-2" onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="px-6 py-8 placeholder:text-xl placeholder:font-semibold"
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
                        className="px-6 py-8 placeholder:text-xl placeholder:font-semibold"
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
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
