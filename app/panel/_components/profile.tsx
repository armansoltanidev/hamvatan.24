"use client";

import { useState } from "react";
import { digitsEnToFa } from "@persian-tools/persian-tools";
import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { TypographyP } from "@/components/ui/typography";
import { useMediaQuery } from "@/hooks/use-media-query";

const PROFILE_ITEM = [
  { id: 1001, title: "تنــظیمات", href: "/" },
  { id: 1002, title: "قوانین", href: "/rules" },
  { id: 1003, title: "سوالات متداول", href: "/faq" },
  { id: 1004, title: "تمــاس با ما", href: "/" },
];

function ProfileItem({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <Link href={href}>
      <div className="flex hover:bg-secondary border-b border-slate-400/20 hover:rounded-md items-center justify-between px-4 py-2">
        <TypographyP className="text-primary">{children}</TypographyP>
      </div>
    </Link>
  );
}

export default function Profile() {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Popover>
        <PopoverTrigger asChild className="cursor-pointer">
          <Avatar>
            <AvatarImage src="https://github.com/black.png" />
            {/* after fetch data must show prefix of user name */}
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </PopoverTrigger>
        <PopoverContent className="flex flex-col gap-y-1 p-2">
          <div className="flex items-center justify-between px-4 py-2">
            <TypographyP>کد کاربری شما:</TypographyP>
            <Badge>{digitsEnToFa(140454)}</Badge>
          </div>
          <Link href="/">
            <div className="flex bg-primary rounded-md items-center justify-between px-4 py-2">
              <TypographyP className="text-primary-foreground">
                آرمان سلطانی
              </TypographyP>
              <Badge variant="secondary">کاربر ویژه</Badge>
            </div>
          </Link>
          {PROFILE_ITEM.map((item) => (
            <ProfileItem href={item.href} key={item.id}>
              {item.title}
            </ProfileItem>
          ))}
          <div className="flex items-center justify-between px-4 py-2 rounded-md bg-destructive/20 hover:bg-destructive/80 cursor-pointer text-destructive hover:text-primary-foreground">
            <TypographyP>خروج از پنــل</TypographyP>
          </div>
        </PopoverContent>
      </Popover>
    );
  }
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Avatar>
          <AvatarImage src="https://github.com/black.png" />
          {/* after fetch data must show prefix of user name */}
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DrawerTrigger>
      <DrawerContent>
        <div className="flex items-center justify-between px-4 py-2">
          <TypographyP>کد کاربری شما:</TypographyP>
          <Badge>{digitsEnToFa(140454)}</Badge>
        </div>
        <Link href="/">
          <div className="flex bg-primary rounded-md items-center justify-between px-4 py-2">
            <TypographyP className="text-primary-foreground">
              آرمان سلطانی
            </TypographyP>
            <Badge variant="secondary">کاربر ویژه</Badge>
          </div>
        </Link>
        {PROFILE_ITEM.map((item) => (
          <ProfileItem href={item.href} key={item.id}>
            {item.title}
          </ProfileItem>
        ))}
        <div className="flex items-center justify-between px-4 py-2 bg-destructive/20 hover:bg-destructive/80 cursor-pointer text-destructive hover:text-primary-foreground">
          <TypographyP>خروج از پنــل</TypographyP>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
