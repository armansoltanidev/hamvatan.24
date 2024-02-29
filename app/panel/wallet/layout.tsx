import { TypographyH4, TypographyP } from "@/components/ui/typography";
import CreditCard from "@/components/bank-credit-card/credit-card";
import TablinkButton from "@/components/ui/tablink-button";
export default function WalletLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <section className="flex justify-between">
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
          card_number={6037997523791755}
          card_name="آرمان سلطانی"
          isVerified={true}
          isLoading={false}
        />
      </section>
      <div className="flex gap-x-3 mt-8">
        <TablinkButton href="/panel/wallet/increase-balance">
          افزایش سپـرده
        </TablinkButton>
        <TablinkButton href="/panel/wallet/withdraw-balance">
          برداشت سپـرده
        </TablinkButton>
        <TablinkButton href="/panel/wallet/card-to-card">
          واریز کارت به کارت
        </TablinkButton>
        <TablinkButton href="/panel/wallet/increase-crypto">
          واریز ارز دیجیتال
        </TablinkButton>
        <TablinkButton href="/panel/wallet/new-card">
          ثبت کارت جدید
        </TablinkButton>
      </div>
      <div className="py-6">{children}</div>
    </div>
  );
}
