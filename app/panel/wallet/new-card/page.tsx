"use client";

import { BadgeInfo, PlusCircle } from "lucide-react";
import Link from "next/link";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

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

import TypographyH1, {
  TypographyH3,
  TypographyP,
} from "@/components/ui/typography";
import { digitsArToEn, digitsEnToFa } from "@persian-tools/persian-tools";
import CreditCard from "@/components/bank-credit-card/credit-card";

const TERM_OF_REGISTER_CARD = [
  { id: 20, text: "هر کاربر حداکثر میتواند سه کارت ثبت کند." },
  { id: 21, text: "شماره کارت باید حتما به نام کاربر احراز شده باشد." },
  { id: 22, text: "ثبت کارت جدید ممکن است تا یکساعت زمان ببرد." },
  { id: 23, text: "امکان ثبت کارت مشترک حقیقی وجود ندارد." },
];

export default function NewCard() {
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
    <div className="flex flex-col">
      <TypographyP className="my-6 text-xl"> ثبت کارت جــدید</TypographyP>
      <div className="flex flex-col md:flex-row gap-x-4 gap-y-4">
        <Dialog>
          <DialogTrigger asChild>
            <div className="border-amber-400 border-4 flex-1 flex items-center justify-center rounded-xl border-dashed max-w-96 min-h-48 cursor-pointer">
              <PlusCircle
                width={54}
                height={54}
                strokeWidth={1.4}
                className="text-amber-400"
              />
            </div>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                <TypographyH3>ثبت کارت جدید</TypographyH3>
              </DialogTitle>
              <DialogDescription>
                <TypographyP>
                  کارت وارد شده حتما باید به نام خودتان باشد در غیر این صورت
                  تایید نخواهد شد.
                </TypographyP>
              </DialogDescription>
            </DialogHeader>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>شماره کارت شانزده رقمی</FormLabel>
                      <FormControl>
                        <Input
                          placeholder=""
                          type="number"
                          inputMode="numeric"
                          pattern="[0-9]*"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        برای مثــال: ....{digitsEnToFa("603799")}
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
                      <FormLabel>شماره شبــا بیست و چهار رقمی</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          inputMode="numeric"
                          pattern="[0-9]*"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        برای مثــال: ....IR{digitsEnToFa("190745745")}
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button variant="primary" type="submit">
                  ثبت کارت
                </Button>
              </form>
            </Form>
          </DialogContent>
        </Dialog>

        <CreditCard
          card_name="آرمان سلطانی"
          card_number={6037997523791755}
          isLoading={false}
          isVerified={true}
          key={45}
        />
      </div>

      <TypographyP className="my-6 text-base">
        شرایط ثبت کارت جــدید
      </TypographyP>
      <div>
        {TERM_OF_REGISTER_CARD.map((item) => (
          <div
            key={item.id}
            className="flex items-start gap-x-2 text-destructive"
          >
            <BadgeInfo />
            <TypographyP>{item.text}</TypographyP>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-x-4 mt-8">
        <TypographyP>
          در صورت هر گونه مشکل با پشتیبانی تماس حاصل فرمایید.
        </TypographyP>
        <Link href="/panel/support">
          <Button>پشتیبــانی</Button>
        </Link>
      </div>
    </div>
  );
}
