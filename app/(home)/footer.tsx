import { TypographyH4, TypographyP } from "@/components/ui/typography";
import { PhoneCall } from "lucide-react";
import Link from "next/link";
import { BiLogoTelegram, BiLogoWhatsapp, BiSolidInbox } from "react-icons/bi";

export default function Footer() {
  return (
    <footer className="mx-auto mt-8 h-auto max-w-[1440px] rounded-3xl bg-primary px-12 py-16 ">
      <div className="grid grid-cols-12 gap-6 md:justify-items-center">
        <div className="col-span-12 flex flex-col md:col-span-6">
          <div>
            <p className="text-4xl font-bold text-primary-foreground">
              همــوطن <span>۲۴</span>
            </p>
            <p className="text-sm font-medium text-muted-foreground">
              هـــمراه شما،هـر لحــظه و هر جــا
            </p>
          </div>
          <TypographyP className="mt-4 text-justify text-sm text-primary-foreground">
            داستان هموطن ۲۴ سال ۱۴۰۳ در شهری کوچک شروع شد، هموطن ۲۴ همیشه هدف
            خود را سهولت خرید و پشتیبــانی قوی دانسته و همواره تلاش خود را جهت
            انجام این وظیفه خود انجام میدهد.
          </TypographyP>
        </div>

        <div className="col-span-12 md:col-span-3">
          <TypographyH4 className="mb-4 text-primary-foreground/80">
            راه های ارتباطی ما
          </TypographyH4>
          <div className="text-muted-foreground">
            <ul className="flex flex-col gap-y-2">
              <li className="flex items-center gap-x-2 ">
                <BiLogoWhatsapp size={32} />
                <Link href="https://wa.me/+989058506962">
                  <TypographyP>پشتیبــانی واتساپ</TypographyP>
                </Link>
              </li>
              <li className="flex items-center gap-x-2">
                <BiLogoTelegram size={32} />
                <Link href="https://t.me/hamvatan24support">
                  <TypographyP>پشتیبــانی تلــگرام</TypographyP>
                </Link>
              </li>
              <li className="flex items-center gap-x-2">
                <BiSolidInbox size={32} />
                <Link href="mailto:support@hamvatan24.com">
                  <TypographyP>ایمیل ما: support@hamvatan24.com</TypographyP>
                </Link>
              </li>
              <li className="flex items-center gap-x-2">
                <PhoneCall size={32} />
                <Link href="tel:+989058506962">
                  <TypographyP>تماس با ما: ۰۹۰۵۸۵۰۶۹۶۲</TypographyP>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-span-12 md:col-span-3">
          <TypographyH4 className="mb-4 text-primary-foreground/80">
            دسترسی سریع
          </TypographyH4>
          <div className="text-muted-foreground">
            <ul className="list-disc">
              <li>
                <Link href="/">صفحــه اصلی</Link>
              </li>
              <li>
                <Link href="/login">پنل نمایندگان</Link>
              </li>
              <li>
                <Link href="/rules">قوانین وبسایت</Link>
              </li>
              <li>
                <Link href="/faq">سوالات متداول</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="cpr flex">
        <div className="flex-1">
          <p className="text-4xl font-bold text-primary-foreground">
            ۰۹۰۵۸۵۰۶۹۶۲
          </p>
          <TypographyP className="mt-6 max-w-lg text-xs text-primary-foreground/80">
            ساعات تماس با پشتیبانی : از ساعت ۹ صبح الی ۲۲ شب حتی در روزهای تعطیل
            در ساعات تعطیلی فروشگاه امکان تماس با پشتیبانی وجود ندارد
          </TypographyP>
          <TypographyP className="mt-6 text-xl font-semibold text-primary-foreground">
            تــمامی حقوق مادی و معنوی محفوظ است.
          </TypographyP>
          <TypographyP className="mt-2 max-w-lg text-xs text-primary-foreground/60">
            طرح وبسایت الهام گرفته شده از وبسایت اپل آیدی۲۴ مرجع خرید اپل آیدی
            میباشد.
          </TypographyP>
        </div>
        <div className="flex-1">1</div>
      </div>
    </footer>
  );
}
