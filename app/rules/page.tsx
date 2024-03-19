import TypographyH1, { TypographyP } from "@/components/ui/typography";
import { digitsEnToFa } from "@persian-tools/persian-tools";
import { AlertCircleIcon, Clock10Icon } from "lucide-react";

const RULES_OF_PANEL = [
  {
    id: 1,
    imortant: true,
    law: "هر گونه سعی در جعل هویت و انجام تراکنش به هر روشی بدون احراز هویت",
  },
  {
    id: 2,
    imortant: false,
    law: "سعی در به وجود اوردن اختلال در سیستم و تولید ترافیک اضافه",
  },
  {
    id: 3,
    imortant: false,
    law: "شارژ حساب از طریق کارت های احراز نشده الخصوص کارت به کارت",
  },
  {
    id: 4,
    imortant: false,
    law: "هر گونه تلاش غیر مجاز برای ورود به سیستم",
  },
  {
    id: 5,
    imortant: false,
    law: "حذف و اضافه کردن سریع کارت های احراز شده",
  },
];

export default function page() {
  return (
    <div className="h-screen flex flex-col">
      <div className="h-1/3 gradirnt-red text-center">
        <TypographyH1 className="text-muted">
          🚨 به بخش قوانین هموطن خوش آمدید
        </TypographyH1>
        <TypographyP className="text-secondary mt-4 text-sm md:text-lg">
          قوانین صرفا برای جلوگیری از تخلفات و ارائه خدمات بهتره 😉
        </TypographyP>
      </div>
      <div className="flex-1 flex flex-col gap-y-6 md:w-1/3 mx-auto p-4">
        <TypographyP>
          قوانین هموطن خیلی سادس کافیه موارد زیر رو رعایت کنی هر گونه عدم رعایت
          قوانین زیر ممکنه{" "}
          <span className="text-destructive">موجب مسدودی حساب</span> به صورت
          موقت یا دائمی بشه.
        </TypographyP>
        {RULES_OF_PANEL.map((rule) => (
          <div
            key={rule.id}
            className="flex gap-x-2 text-muted-foreground items-center"
          >
            <AlertCircleIcon className="text-destructive" />
            <TypographyP>{rule.law}</TypographyP>
          </div>
        ))}
        <div className="flex items-center gap-x-2">
          <Clock10Icon size={20} />
          <TypographyP className="text-muted-foreground text-xs">
            آخرین آپدیت {digitsEnToFa(1402)}بهمن
          </TypographyP>
        </div>
      </div>
    </div>
  );
}
