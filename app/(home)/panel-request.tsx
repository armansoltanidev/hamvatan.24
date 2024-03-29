import { Button } from "@/components/ui/button";
import PingSky from "@/components/ui/ping-sky";
import { TypographyH4, TypographyP } from "@/components/ui/typography";
import Link from "next/link";

export default function PanelRequest() {
  return (
    <section className="mx-auto max-w-[1440px] px-6 py-16">
      <div className="flex items-center gap-x-4">
        <PingSky />
        <TypographyH4 className="text-3xl font-semibold">
          درخواست پنـــل همکاری دارید؟
        </TypographyH4>
      </div>
      <div className="flex-center-between flex-col gap-y-6 md:flex-row">
        <TypographyP className="text-muted-foreground">
          اگــر تعداد تراکنش هاتون زیاده یا مغازه دار هستید با مراجعه به لینک رو
          به رو در پنـــل ثبت نام کرده و پس از تایید حسابتون از پنل استفاده
          کنید.
        </TypographyP>
        <Link href="/signup">
          <Button size="x2l" variant="primary">
            ثبــت نــام در پنـــل
          </Button>
        </Link>
      </div>
    </section>
  );
}
