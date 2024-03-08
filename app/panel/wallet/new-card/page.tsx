import { Button } from "@/components/ui/button";
import { TypographyP } from "@/components/ui/typography";
import { BadgeInfo, PlusCircle } from "lucide-react";
import Link from "next/link";

const TERM_OF_REGISTER_CARD = [
  { id: 20, text: "هر کاربر حداکثر میتواند سه کارت ثبت کند." },
  { id: 21, text: "شماره کارت باید حتما به نام کاربر احراز شده باشد." },
  { id: 22, text: "ثبت کارت جدید ممکن است تا یکساعت زمان ببرد." },
  { id: 23, text: "امکان ثبت کارت مشترک حقیقی وجود ندارد." },
];

export default function page() {
  return (
    <div className="flex flex-col">
      <TypographyP className="my-6 text-xl"> ثبت کارت جــدید</TypographyP>

      <div className="border-amber-400 border-4 flex items-center justify-center rounded-xl border-dashed max-w-96 h-48 cursor-pointer">
        <PlusCircle
          width={54}
          height={54}
          strokeWidth={1.4}
          className="text-amber-400"
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
