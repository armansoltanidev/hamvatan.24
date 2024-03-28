import { Button } from "@/components/ui/button";
import TypographyH1, {
  TypographyH2,
  TypographyH4,
  TypographyP,
} from "@/components/ui/typography";
import Link from "next/link";
import FastCharge from "./(home)/fast-charge";
import { InfiniteMovingCardTestomonioal } from "./(home)/Infinite-moving-testomonioal";
import Header from "./(home)/header";
import HeroSection from "./(home)/hero-section";
import PingSky from "@/components/ui/ping-sky";
import Footer from "./(home)/footer";

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
        <div className="flex-center-between flex-col gap-y-6 md:flex-row">
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
      <Footer />
    </>
  );
}
