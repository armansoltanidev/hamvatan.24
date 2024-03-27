import { Button } from "@/components/ui/button";
import CardAnimate from "@/components/ui/card-date/card-animated";
import Logo from "@/components/ui/logo/logo";
import TypographyH1, {
  TypographyH2,
  TypographyH4,
  TypographyP,
} from "@/components/ui/typography";
import Image from "next/image";
import Link from "next/link";
import FastCharge from "./(home)/fast-charge";
import { InfiniteMovingCardTestomonioal } from "./(home)/Infinite-moving-testomonioal";
import {
  BiLogoTelegram,
  BiLogoWhatsapp,
  BiMessageAltDetail,
  BiSolidInbox,
} from "react-icons/bi";
import { Telemetry } from "next/dist/telemetry/storage";

export default function Page() {
  return (
    <>
      <div className="h-auto mx-auto max-w-[1440px] px-4">
        <div className="flex items-center justify-between py-8">
          <Logo />
          <nav>
            <ul className="hidden md:flex items-center gap-x-10 text-muted-foreground">
              <Link href="/">صفحه اصلی</Link>
              <Link href="/panel/hybrid">محصولات</Link>
              <Link href="/">شارژ سریع</Link>
              <Link href="/">بلاگ</Link>
              <Link href="/">پشتیبانی</Link>
            </ul>
          </nav>
          <div>
            <Link href="/login">
              <Button size="xl" variant="cta">
                ورود | ثبت نام
              </Button>
            </Link>
          </div>
        </div>
        <main className="h-auto mt-8 rounded-3xl w-full bg-primary grid grid-cols-6 py-4 px-6">
          <div className="hidden md:block col-span-2"></div>
          <div className="col-span-6 md:col-span-4 px-3 py-16 md:px-6">
            <h1 className="bg-gradient-to-tr text-4xl md:text-7xl font-extrabold tracking-normal from-slate-500 via-slate-300 to-slate-100 text-transparent bg-clip-text py-6">
              سریع ترین روش خرید شارژ افغانستان
            </h1>
            <TypographyP className="text-muted-foreground text-lg">
              خرید شارژ افغانستان دیگه کار سختی نیس! با هموطن به راحتی هر لحظه
              از شبانه روز شارژ بخر! اگر مغازه دارید و یا تراکنش هاتون زیاده
              میتونید با ثبت نام در پنل به راحتی و سریع تراکنش هاتون رو انجام و
              از مزایای پنــل استفاده کنید 😉
            </TypographyP>
            <div className="flex flex-col items-center md:items-start md:flex-row gap-2 my-6">
              <CardAnimate />
              <Link href="#fast-charge">
                <Button
                  className="bg-primary-foreground text-primary text-xl font-normal"
                  size="x2l"
                  variant="cta"
                >
                  شارژ سریع و ارزان
                </Button>
              </Link>
            </div>
            <section className="flex flex-col md:flex-row gap-y-6 items-center justify-between mt-12">
              <div className="flex items-center gap-x-5">
                <Image width={62} height={62} alt="enamad" src="/enamad.svg" />
                <div>
                  <TypographyP className="text-primary-foreground font-medium  leading-tight">
                    معتبر ترین درگاه خرید شارژ افغانســتان
                  </TypographyP>
                  <TypographyP className="text-muted-foreground">
                    دارای نماد اعتماد الکترونیک از وزارت صنعت، معدن و تجارت
                  </TypographyP>
                </div>
              </div>
              <div>
                <TypographyP className="text-muted-foreground text-base">
                  مورد اعتماد بیش از
                </TypographyP>
                <TypographyH4 className="bg-gradient-to-tl text-5xl font-extrabold leading-tight tracking-normal from-slate-500 via-slate-300 to-slate-100 text-transparent bg-clip-text">
                  10K+
                </TypographyH4>
                <div className="flex items-center gap-x-2">
                  <span className="relative flex items-center justify-center h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
                  </span>
                  <TypographyP className="text-muted-foreground text-sm">
                    نماینده فعال در سراسر ایران
                  </TypographyP>
                </div>
              </div>
            </section>
          </div>
        </main>
        <div className="bg-secondary rounded-3xl my-16">
          <FastCharge />
        </div>
      </div>
      <section className="h-auto bg-muted/50 mb-24">
        <div className="mx-auto max-w-[1440px] px-6 py-16">
          <div className="flex items-center gap-x-4">
            <span className="relative flex items-center justify-center h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
            </span>
            <TypographyH4 className="font-semibold text-3xl">
              نظــرات برخــی از کاربــران هموطن۲۴
            </TypographyH4>
          </div>
        </div>
        <InfiniteMovingCardTestomonioal />
      </section>
      <section className="mx-auto max-w-[1440px] px-6 py-16">
        <div className="flex items-center gap-x-4">
          <span className="relative flex items-center justify-center h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
          </span>
          <TypographyH4 className="font-semibold text-3xl">
            درخواست پنـــل همکاری دارید؟
          </TypographyH4>
        </div>
        <div className="flex flex-col gap-y-6 md:flex-row items-center justify-between">
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
      <section className="h-auto px-6 py-16 my-16 mx-auto rounded-3xl max-w-[1440px] gradient-instagram flex flex-col md:flex-row gap-y-8 items-center justify-around">
        <TypographyH2 className="tracking-tighter text-muted">
          ما هر روز کلی مطالب آموزشی جالب در اینستاگراممون منتشر می‌کنیم!
        </TypographyH2>
        <Button
          className="text-fuchsia-600 text-xl"
          size="x2l"
          variant="outline"
        >
          مشــاهده پست های اینستاگــرام
        </Button>
      </section>
      <footer className="bg-primary mt-16 h-auto px-4 py-16">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center gap-x-8 gap-y-16 ">
          <div className="flex-1 flex flex-col">
            <div>
              <p className="font-bold text-4xl text-primary-foreground">
                همــوطن <span>۲۴</span>
              </p>
              <p className="font-medium text-sm text-muted-foreground">
                هـــمراه شما،هـر لحــظه و هر جــا
              </p>
            </div>
            <TypographyP className="text-sm text-justify text-primary-foreground mt-4">
              داستان هموطن ۲۴ سال ۱۴۰۳ در شهری کوچک شروع شد، هموطن ۲۴ همیشه هدف
              خود را سهولت خرید و پشتیبــانی قوی دانسته و همواره تلاش خود را جهت
              انجام این وظیفه خود انجام میدهد.
            </TypographyP>
          </div>

          <div className="flex-1">
            <TypographyH4 className="text-primary-foreground">
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
          <div className="flex-1 text-primary-foreground text-2xl">اینماد</div>
        </div>
      </footer>
    </>
  );
}
