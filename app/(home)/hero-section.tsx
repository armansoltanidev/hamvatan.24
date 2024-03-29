import { Button } from "@/components/ui/button";
import CardAnimate from "@/components/ui/card-date/card-animated";
import PingSky from "@/components/ui/ping-sky";
import { TypographyH4, TypographyP } from "@/components/ui/typography";

import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <main className="grid h-auto w-full grid-cols-6 rounded-3xl bg-primary px-2 py-4 md:mt-8 md:py-8">
      <div className="col-span-2 hidden md:block"></div>
      <div className="col-span-6 px-2 md:col-span-4 md:px-6 md:py-16">
        <h1 className="text-gradient-slate py-4 text-5xl font-extrabold leading-normal md:text-7xl md:leading-snug ">
          سریع ترین روش خرید شارژ افغانستان
        </h1>
        <TypographyP className="text-base text-muted-foreground md:text-lg">
          خرید شارژ افغانستان دیگه کار سختی نیس! با هموطن به راحتی هر لحظه از
          شبانه روز شارژ بخر! اگر مغازه دارید و یا تراکنش هاتون زیاده میتونید با
          ثبت نام در پنل به راحتی و سریع تراکنش هاتون رو انجام و از مزایای پنــل
          استفاده کنید 😉
        </TypographyP>
        <div className="my-6 flex flex-col items-center gap-2 md:flex-row md:items-start">
          <CardAnimate />
          <Link href="#fast-charge">
            <Button
              className="bg-primary-foreground text-xl font-normal text-primary"
              size="x2l"
              variant="cta"
            >
              شارژ سریع و ارزان
            </Button>
          </Link>
        </div>
        <section className="flex flex-col items-center justify-between gap-y-6 md:mt-12 md:flex-row">
          <div className="flex items-center gap-x-5">
            <Image width={62} height={62} alt="enamad" src="/enamad.svg" />
            <div>
              <TypographyP className="font-medium leading-tight  text-primary-foreground">
                معتبر ترین درگاه خرید شارژ افغانســتان
              </TypographyP>
              <TypographyP className="text-sm text-muted-foreground md:text-base">
                دارای نماد اعتماد الکترونیک از وزارت صنعت، معدن و تجارت
              </TypographyP>
            </div>
          </div>
          <div>
            <TypographyP className="text-sm text-muted-foreground md:text-base">
              مورد اعتماد بیش از
            </TypographyP>
            <TypographyH4 className="text-gradient-slate text-5xl font-extrabold leading-tight">
              10K+
            </TypographyH4>
            <div className="flex items-center gap-x-2">
              <PingSky />
              <TypographyP className="text-sm text-muted-foreground">
                نماینده فعال در سراسر ایران
              </TypographyP>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
