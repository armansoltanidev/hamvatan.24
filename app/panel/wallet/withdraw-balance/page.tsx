"use client";
import { useState } from "react";
import { BadgeInfo } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { TypographyP } from "@/components/ui/typography";

const TERM_OF_WITHDRAW = [
  { id: 101, text: "حداقل مبلغ برداشت سیصد هزار تومان میباشید." },
  {
    id: 102,
    text: "واریز مبلغ در خواست شده فقط و فقط به حساب احراز شده انجام خواهد شد.",
  },
  { id: 103, text: "زمان واریز طبق برنامه بانکی (پایا،ساتــنا) میباشد." },
  {
    id: 104,
    text: "در صورت برگشت واریز در به هر دلیلی سپرده شما به همان میزان شارژ خواهد شد.",
  },
  {
    id: 105,
    text: "کارمزد واریز انتقال وجه بین بانکی بر عهده کاربر خواهد بود.",
  },
];

export default function WithdrawPage() {
  return (
    <div className="flex flex-col gap-y-6">
      <TypographyP className="my-6 text-xl">
        شرایط برداشت از سپــرده پنل
      </TypographyP>
      <div className="flex flex-col gap-y-3">
        {TERM_OF_WITHDRAW.map((item) => (
          <div
            key={item.id}
            className="flex items-start gap-x-2 text-destructive"
          >
            <BadgeInfo />
            <TypographyP>{item.text}</TypographyP>
          </div>
        ))}
      </div>
      <div className="flex py-3 px-1 items-center gap-x-2">
        <Checkbox id="terms" />
        <label
          htmlFor="terms"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          شرایط و قوانین برداشت را قبول دارم.
        </label>
      </div>
    </div>
  );
}
