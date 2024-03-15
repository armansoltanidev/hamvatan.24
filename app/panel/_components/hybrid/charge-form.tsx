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
import CtaCharge from "../cta-chage";
import { Minus, Plus } from "lucide-react";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export function ChargeForm() {
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
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg">شمــاره تلــفن</FormLabel>
              <FormControl>
                <Input className="py-8 px-6 text-lg text-left" {...field} />
              </FormControl>
              <FormDescription>
                شماره خود را بدون صفر اول وارد کنید
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex gap-2 flex-wrap justify-between">
          <CtaCharge>50</CtaCharge>
          <CtaCharge>100</CtaCharge>
          <CtaCharge>500</CtaCharge>
          <CtaCharge>1000</CtaCharge>
        </div>
        <div className="flex items-center gap-x-2">
          <div className="bg-[#fffcf5] p-3 rounded-lg">
            <Plus
              className="text-[#fabe32]"
              width={32}
              height={32}
              strokeWidth={2.5}
            />
          </div>
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="flex-1 ">
                <FormControl>
                  <Input className="py-8 px-6 text-lg text-center" {...field} />
                </FormControl>
                {/* <FormDescription className="text-center">
                  مبلغ شارژ خود را به افغانی وارد کنید
                </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="bg-[#fffcf5] p-3 rounded-lg">
            <Minus
              className="text-[#fabe32]"
              width={32}
              height={32}
              strokeWidth={2.5}
            />
          </div>
        </div>
        <Button variant="primary" size="lg" type="submit">
          ارســــال شــارژ
        </Button>
      </form>
    </Form>
  );
}
