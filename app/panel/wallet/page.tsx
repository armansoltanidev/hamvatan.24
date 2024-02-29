import { TypographyH4, TypographyP } from "@/components/ui/typography";
import CreditCard from "@/components/bank-credit-card/credit-card";

export default function page() {
  return (
    <div className="flex justify-between">
      <div>
        <TypographyH4>
          توی این صفحه میتونی کیف پولت (موجودیت) رو مدیریت کنی.
        </TypographyH4>
        <TypographyP className="text-muted-foreground">
          واریز، برداشت، چک کردن گزارشات و ... به راحــتی در دسترسه!
        </TypographyP>
      </div>

      {/* card maps from data base */}
      <CreditCard
        card_number={6104338688900709}
        card_name="آرمان سلطانی"
        isVerified={true}
      />
    </div>
  );
}
