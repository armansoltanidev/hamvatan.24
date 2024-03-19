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
import CtaCharge from "../cta-charge";

const formSchema = z.object({
  number: z
    .string()
    .min(10, {
      message: "لطفا حداقل ۱۰ عدد وارد نمایید.",
    })
    .max(10, {
      message: "حداکثر عدد وارد شده میتواند ۱۰ رقم باشد",
    }),

  amount: z.coerce
    .number()
    .lte(2000, {
      message: "مبلغ وارد شده نمیتواند از دو هزار افغانی بالاتر باشد.",
    })
    .gte(50, {
      message: "مبلغ وارد شده نمیتواند کمتر از پنجاه افغانی باشد.",
    }),
});

export function ChargeForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      number: "",
      amount: 0,
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    // console.log(digitsFaToEn(values.username));
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="number"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg">شمــاره تلــفن</FormLabel>
              <FormControl>
                <Input className="py-8 px-6 text-lg text-left" {...field} />
              </FormControl>
              <FormDescription>
                شماره خود را بدون صفر اول وارد کنید. مثال: ۰۷۷۴۵۱۵۴۱۲
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex gap-2 flex-wrap justify-between">
          <CtaCharge onClick={() => form.setValue("amount", 50)}>50</CtaCharge>

          <CtaCharge onClick={() => form.setValue("amount", 100)}>
            100
          </CtaCharge>
          <CtaCharge onClick={() => form.setValue("amount", 500)}>
            500
          </CtaCharge>
          <CtaCharge onClick={() => form.setValue("amount", 1000)}>
            1000
          </CtaCharge>
        </div>
        <div className="flex items-center gap-x-2">
          <FormField
            control={form.control}
            name="amount"
            render={({ field }) => (
              <FormItem className="flex-1 ">
                <FormControl>
                  <Input className="py-8 px-6 text-xl text-center" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button variant="primary" size="lg" type="submit">
          ارســــال شــارژ
        </Button>
      </form>
    </Form>
  );
}
