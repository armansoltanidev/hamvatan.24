import { Button } from "@/components/ui/button";
import CardAnimate from "@/components/ui/card-date/card-animated";
import Logo from "@/components/ui/logo/logo";
import TypographyH1, { TypographyP } from "@/components/ui/typography";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="h-screen mx-auto max-w-[1440px]">
      <div className="flex items-center justify-between py-8">
        <Logo />
        <nav>
          <ul className="flex items-center gap-x-10 text-muted-foreground">
            <Link href="/">صفحه اصلی</Link>
            <Link href="/">محصولات</Link>
            <Link href="/">شارژ سریع</Link>
            <Link href="/">بلاگ</Link>
            <Link href="/">پشتیبانی</Link>
          </ul>
        </nav>
        <div>
          <Button size="xl" variant="cta">
            ورود | ثبت نام
          </Button>
        </div>
      </div>
      <main className="h-4/6 mt-8 rounded-3xl w-full bg-primary grid grid-cols-6">
        <div className="col-span-2"></div>
        <div className="col-span-4 py-16 px-6">
          <h1 className="bg-gradient-to-tl text-7xl font-extrabold leading-normal tracking-normal from-slate-500 via-slate-300 to-slate-100 text-transparent bg-clip-text py-6">
            سریع ترین روش خرید شارژ افغانستان
          </h1>
          <TypographyP className="text-muted-foreground text-lg">
            خرید شارژ افغانستان دیگه کار سختی نیس! با هموطن به راحتی هر لحظه از
            شبانه روز شارژ بخر! اگر مغازه دارید و یا تراکنش هاتون زیاده میتونید
            با ثبت نام در پنل به راحتی و سریع تراکنش هاتون رو انجام و از مزایای
            پنــل استفاده کنید 😉
          </TypographyP>
          <div className="flex gap-x-2 my-6">
            <CardAnimate />
            <Button
              className="bg-primary-foreground text-primary text-xl font-normal"
              size="x2l"
              variant="cta"
            >
              شارژ سریع و ارزان
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
