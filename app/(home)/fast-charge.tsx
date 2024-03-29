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
import { Checkbox } from "@/components/ui/checkbox";
import TypographyH1, {
  TypographyH2,
  TypographyH3,
  TypographyH4,
} from "@/components/ui/typography";
import { MoveLeft } from "lucide-react";
import { useState } from "react";
import { detectOperator } from "@/lib/utils";

const formSchema = z.object({
  number: z.string().regex(/^(070|071|072|079|073|078|076|077|074|075)\d{7}$/, {
    message: "شماره وارد شده معتبر نیس",
  }),
  amount: z.number().min(2, {
    message: "شماره وارد شده معتبر نیس",
  }),
});

export default function FastCharge() {
  const [operator, setOperator] = useState("");
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      number: "",
      amount: 50,
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    const operator = detectOperator(values.number);
    setOperator(operator);
  }

  return (
    <>
      <Form {...form}>
        <form
          id="fast-charge"
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex h-full flex-col justify-between gap-3 px-2 py-2 md:flex-row md:p-6"
        >
          <div className="flex flex-1 flex-col justify-around gap-y-5 rounded-2xl bg-white px-4 py-4 md:p-6">
            <FormField
              control={form.control}
              name="number"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg font-semibold">
                    شماره مقصــد
                  </FormLabel>
                  <FormControl>
                    <Input
                      maxLength={10}
                      className="rounded-3xl px-6 py-8 text-xl"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    شماره را با صفر اول وارد کنید
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg font-semibold">
                    مبلغ شــارژ
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="rounded-3xl px-6 py-8 text-center text-xl"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    حداقل مبلغ شــارژ ۵۰ افغانی میباشد
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="w-full rounded-3xl py-6" variant="cta">
              محاسبه کن
            </Button>
          </div>
          <div className="flex flex-1 flex-col items-center justify-around space-y-6 rounded-2xl bg-white p-6">
            <div className="flex flex-col gap-y-2">
              <TypographyH4>
                <span className="ml-3 text-sm font-normal">شمــاره مقصد:</span>
                ۹۳۷۸۴۵۱۲۴۴۷۴+
              </TypographyH4>
              <TypographyH4>
                <span className="ml-3 text-sm font-normal">
                  اوپـراتور مقصد:
                </span>
                <span className="text-xs font-light">
                  {operator ? undefined || null : "لطفا شماره را وارد کنید"}
                </span>
                {operator && (
                  <span className="text-lg font-semibold">{operator}</span>
                )}
              </TypographyH4>
            </div>

            <div>
              <TypographyH2 className="text-emerald-600">
                <span className="text-base">مبلغ قابــل پرداخت:</span>
                <span className="mx-4 text-4xl">۱,۴۵۱,۴۸۴</span>
              </TypographyH2>
              <div>
                <ul className="list-disc text-base font-normal text-emerald-800">
                  <li>هزینه شارژ: ۱,۲۹,۴۱۵</li>
                  <li>مالیات بر ارزش افزوده : ۹۸,۴۵۴</li>
                  <li>هزینه خدمات: ۲۹,۴۱۵</li>
                  <li>تخفیف: ۰</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-y-3">
              <div className="flex items-center gap-x-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  میخواهم شماره را خود را برای دریافت پیگیری های آتی وارد کنم
                </label>
              </div>
              {/* <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="rounded-3xl px-4 py-6"
                        placeholder="شماره تلفن جهت پیگیری های آتی"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              /> */}
            </div>
          </div>
          <div className="flex flex-1 flex-col justify-between rounded-2xl bg-white p-6">
            <TypographyH4>انتخاب درگاه پرداخت</TypographyH4>
            <Button
              type="submit"
              className="w-full text-2xl font-medium"
              variant="primary"
              size="x2l"
            >
              برو به درگاه
              <MoveLeft className="mx-4" />
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
}
