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
import { digitsEnToFa } from "@persian-tools/persian-tools";

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
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg">مبلغ شـــارژ</FormLabel>
              <FormControl>
                <Input className="py-8 px-6 text-lg text-center" {...field} />
              </FormControl>
              <FormDescription>
                مبلغ شارژ خود را به افغانی وارد کنید
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex items-center justify-between gap-x-2">
          <div className="bg-sky-200/20 border border-sky-600/50 text-sky-800 w-44 text-center h-20 flex items-center justify-center text-2xl rounded-md">
            {digitsEnToFa(100)}
          </div>
          <div className="bg-rose-200/30 border border-rose-600/50 text-rose-800 w-44 text-center h-20 flex items-center justify-center text-2xl rounded-md">
            {digitsEnToFa(200)}
          </div>
          <div className="bg-green-300/30 text-green-800 border border-green-800/50 w-44 text-center h-20 flex items-center justify-center text-2xl rounded-md">
            {digitsEnToFa(500)}
          </div>
          <div className="bg-amber-400/30 text-amber-800 border border-amber-500 w-44 text-center h-20 flex items-center justify-center text-2xl rounded-md">
            {digitsEnToFa(1000)}
          </div>
        </div>
        <Button
          className="bg-green-400 hover:bg-green-700 text-xl w-full"
          size="lg"
          type="submit"
        >
          ارســــال شــارژ
        </Button>
      </form>
    </Form>
  );
}
