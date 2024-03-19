import { addCommas, digitsEnToFa } from "@persian-tools/persian-tools";
import { MoveUpLeft } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import LearnMoreButton from "@/components/ui/learn-more-button";
import { TypographyP } from "@/components/ui/typography";

const CTA_PRICE = [
  { id: 1, price: 100000 },
  { id: 2, price: 250000 },
  { id: 3, price: 350000 },
  { id: 4, price: 500000 },
  { id: 5, price: 1000000 },
  { id: 6, price: 1500000 },
];

export default function WalletPage() {
  return (
    <div className="mt-6">
      <div className="flex items-center p-4">
        <TypographyP>
          شما میتوانید مبلغی انتخاب و یا مقدار مورد نظر خود را وارد کنید.
          <span className="text-xs text-destructive mx-1">
            (حداکثــر مبلغ پنج میلیون تومان میباشد.)
          </span>
        </TypographyP>
        <LearnMoreButton />
      </div>
      <section className="flex flex-wrap gap-2">
        {CTA_PRICE.map((item) => (
          <Button
            className="rounded-full text-xl font-light"
            variant="outline"
            size="lg"
            key={item.id}
          >
            {digitsEnToFa(addCommas(item.price))}
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
