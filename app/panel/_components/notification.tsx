"use client";
import { useState } from "react";
import { Badge, Bell } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { TypographyP } from "@/components/ui/typography";
import { useMediaQuery } from "@/hooks/use-media-query";

import NotficationRow from "./notfication-row";

export default function Notification() {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" size="icon" className="rounded-full">
            <Bell />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-3">
          <div className="flex items-center justify-between sticky top-0 mb-6">
            <TypographyP>پیــام های شما</TypographyP>
            <Link href="pamel/news">
              <Button
                size="sm"
                variant="outline"
                className="text-blue-800 hover:bg-blue-600 hover:text-blue-100"
              >
                مشاهده همه
              </Button>
            </Link>
          </div>

          {/* notifcatios card here map over that */}
          <div className="flex flex-col gap-y-1">
            <NotficationRow
              time="یکساعـت پیش"
              type="alert"
              title="تغییــرات کارمزد"
            >
              واریز، برداشت، چک کردن گزارشات و ... به راحــتی در دسترسه! واریز،
              برداشت، چک کردن گزارشات و ... به راحــتی در دسترسه!
            </NotficationRow>
            <NotficationRow
              time="یکساعـت پیش"
              type="alert"
              title="تغییــرات کارمزد"
            >
              واریز، برداشت، چک کردن گزارشات و ... به راحــتی در دسترسه!
            </NotficationRow>
          </div>
        </PopoverContent>
      </Popover>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full">
          <Bell />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="px-2 py-2">
        <div className="flex items-center justify-between sticky top-0 mb-6">
          <TypographyP>پیــام های شما</TypographyP>
          <Link href="pamel/news">
            <Button
              size="sm"
              variant="outline"
              className="text-blue-800 hover:bg-blue-600 hover:text-blue-100"
            >
              مشاهده همه
            </Button>
          </Link>
        </div>

        {/* notifcatios card here map over that */}
        <div className="flex flex-col gap-y-1">
          <NotficationRow
            time="یکساعـت پیش"
            type="alert"
            title="تغییــرات کارمزد"
          >
            واریز، برداشت، چک کردن گزارشات و ... به راحــتی در دسترسه! واریز،
            برداشت، چک کردن گزارشات و ... به راحــتی در دسترسه!
          </NotficationRow>

          <NotficationRow
            time="یکساعـت پیش"
            type="alert"
            title="تغییــرات کارمزد"
          >
            واریز، برداشت، چک کردن گزارشات و ... به راحــتی در دسترسه!
          </NotficationRow>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
