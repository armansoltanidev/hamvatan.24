import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TypographyP } from "@/components/ui/typography";
import { addCommas, digitsEnToFa } from "@persian-tools/persian-tools";
import { BadgeAlert, MoveUpLeft, Redo2 } from "lucide-react";
import Link from "next/link";

const CTA_PRICE = [
  { id: 1, ptice: 100000 },
  { id: 2, ptice: 250000 },
  { id: 3, ptice: 350000 },
  { id: 4, ptice: 500000 },
  { id: 5, ptice: 1000000 },
  { id: 6, ptice: 1500000 },
];

export default function page() {
  return (
    <div className="mt-6">
      <div className="flex items-center p-4">
        <TypographyP>
          شما میتوانید مبلغی انتخاب و یا مقدار مورد نظر خود را وارد کنید.
          <span className="text-xs text-destructive mx-1">
            (حداکثــر مبلغ پنج میلیون تومان میباشد.)
          </span>
        </TypographyP>
        <Link href="/">
          <Button variant="ghost" size="sm">
            بیشتر بدانید
            <MoveUpLeft className="mr-1" size={20} strokeWidth={1.2} />
          </Button>
        </Link>
      </div>
      <section className="flex gap-x-2">
        {CTA_PRICE.map((item) => (
          <Button
            className="rounded-full text-xl font-light"
            variant="outline"
            size="lg"
            key={item.id}
          >
            {digitsEnToFa(addCommas(item.ptice))}
          </Button>
        ))}
      </section>
      <div className="flex items-center gap-x-4 my-6">
        <Input className="text-xl w-1/2 py-6" />
        <Button size="lg">افزایــش موجودی</Button>
      </div>
    </div>
  );
}
