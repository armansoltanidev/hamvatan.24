import TypographyH1, { TypographyP } from "@/components/ui/typography";
import { digitsEnToFa } from "@persian-tools/persian-tools";
import { Clock10 } from "lucide-react";
import Link from "next/link";

import {
  BiLogoInstagram,
  BiLogoTelegram,
  BiLogoWhatsapp,
} from "react-icons/bi";

export default function SupportPage() {
  return (
    <div className="text-center mt-8 flex flex-col items-center justify-center">
      <div className="flex flex-col gap-y-5">
        <TypographyH1>پشتیـــانی،ارتبــاط با مــــــا</TypographyH1>
        <TypographyP>
          بــرای ارتباط با ما راه های زیادی وجود داره! روی هر آیکون کلیک کنی
          مستقیم هدایت میشی 😉
        </TypographyP>
        <TypographyH1>۰{digitsEnToFa(9058506962)}</TypographyH1>
        <TypographyH1>۰{digitsEnToFa(2165272635)}</TypographyH1>
      </div>
      <div className="flex items-center gap-x-6 mt-8">
        <Link href="#">
          <BiLogoWhatsapp className="text-5xl" />
        </Link>
        <Link href="#">
          <BiLogoTelegram className="text-5xl" />
        </Link>
        <Link href="#">
          <BiLogoInstagram className="text-5xl" />
        </Link>
      </div>
      <div className="flex items-center gap-x-4 mt-10">
        <Clock10 />
        <TypographyP className="text-destructive text-3xl">
          پشتیبانی تلفنـــی همه روزه از ساعت ۸ الی ۲۰
        </TypographyP>
      </div>
    </div>
  );
}
