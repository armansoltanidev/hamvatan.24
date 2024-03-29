import PingSky from "@/components/ui/ping-sky";
import { TypographyH4 } from "@/components/ui/typography";
import { InfiniteMovingCardTestomonioal } from "./Infinite-moving-testomonioal";

export default function TestomonialSection() {
  return (
    <section className="mb-6 h-auto bg-muted/50 md:mb-24">
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
  );
}
