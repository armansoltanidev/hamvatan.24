import { Button } from "@/components/ui/button";
import { TypographyH2 } from "@/components/ui/typography";
import Link from "next/link";

export default function InstagramPage() {
  return (
    <section className="gradient-instagram mx-auto my-8  flex h-auto max-w-[1440px] flex-col items-center justify-around gap-y-8 rounded-3xl px-6 py-16 md:my-16  md:flex-row">
      <TypographyH2 className="tracking-tighter text-muted">
        ما هر روز کلی مطالب آموزشی جالب در اینستاگراممون منتشر می‌کنیم!
      </TypographyH2>
      <Link href="https://www.instagram.com/hamvatan24.ir?igsh=MWNtbTJoZmN4NXJlbw==">
        <Button
          className="text-xl text-fuchsia-600"
          size="x2l"
          variant="outline"
        >
          مشــاهده پست های اینستاگــرام
        </Button>
      </Link>
    </section>
  );
}
