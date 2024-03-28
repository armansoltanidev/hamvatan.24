import { Button } from "@/components/ui/button";
import TypographyH1, {
  TypographyH2,
  TypographyH4,
  TypographyP,
} from "@/components/ui/typography";
import Link from "next/link";
import FastCharge from "./(home)/fast-charge";
import { InfiniteMovingCardTestomonioal } from "./(home)/Infinite-moving-testomonioal";
import { BiLogoTelegram, BiLogoWhatsapp, BiSolidInbox } from "react-icons/bi";
import Header from "./(home)/header";
import HeroSection from "./(home)/hero-section";
import PingSky from "@/components/ui/ping-sky";

export default function Page() {
  return (
    <>
      <div className="mx-auto h-auto max-w-[1440px] px-4">
        <Header />
        <HeroSection />
        <div className="my-16 rounded-3xl bg-secondary">
          <FastCharge />
        </div>
      </div>

      <section className="mb-24 h-auto bg-muted/50">
        <div className="mx-auto max-w-[1440px] px-6 py-16">
          <div className="flex items-center gap-x-4">
            <PingSky />
            <TypographyH4 className="text-3xl font-semibold">
              نظــرات برخــی از کاربــران هموطن۲۴
            </TypographyH4>
          </div>
        </div>
        <InfiniteMovingCardTestomonioal />
      </section>
      <section className="mx-auto max-w-[1440px] px-6 py-16">
        <div className="flex items-center gap-x-4">
          <PingSky />
          <TypographyH4 className="text-3xl font-semibold">
            درخواست پنـــل همکاری دارید؟
          </TypographyH4>
        </div>
        <div className="flex flex-col items-center justify-between gap-y-6 md:flex-row">
          <TypographyP className="text-muted-foreground">
            اگــر تعداد تراکنش هاتون زیاده یا مغازه دار هستید با مراجعه به لینک
            رو به رو در پنـــل ثبت نام کرده و پس از تایید حسابتون از پنل استفاده
            کنید.
          </TypographyP>
          <Link href="/signup">
            <Button size="x2l" variant="primary">
              ثبــت نــام در پنـــل
            </Button>
          </Link>
        </div>
      </section>
      <section className="gradient-instagram mx-auto my-16 flex h-auto max-w-[1440px] flex-col items-center justify-around gap-y-8 rounded-3xl px-6 py-16 md:flex-row">
        <TypographyH2 className="tracking-tighter text-muted">
          ما هر روز کلی مطالب آموزشی جالب در اینستاگراممون منتشر می‌کنیم!
        </TypographyH2>
        <Button
          className="text-xl text-fuchsia-600"
          size="x2l"
          variant="outline"
        >
          مشــاهده پست های اینستاگــرام
        </Button>
      </section>
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
              <ul>
                <li className="flex items-center gap-x-2">
                  <BiLogoWhatsapp size={32} />
                  <TypographyP>پشتیبــانی واتساپ</TypographyP>
                </li>
                <li className="flex items-center gap-x-2">
                  <BiLogoTelegram size={32} />
                  <TypographyP>پشتیبــانی تلــگرام</TypographyP>
                </li>
                <li className="flex items-center gap-x-2">
                  <BiSolidInbox size={32} />
                  <TypographyP>ایمیل ما: support@hamvatan24.com</TypographyP>
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
                  <Link href="/">پنل نمایندگان</Link>
                </li>
                <li>
                  <Link href="/">قوانین وبسایت</Link>
                </li>
                <li>
                  <Link href="/">سوالات متداول</Link>
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
              ساعات تماس با پشتیبانی : از ساعت ۹ صبح الی ۲۲ شب حتی در روزهای
              تعطیل در ساعات تعطیلی فروشگاه امکان تماس با پشتیبانی وجود ندارد
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
    </>
  );
}
