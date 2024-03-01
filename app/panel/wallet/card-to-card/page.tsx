import PanelCreditCard from "@/components/bank-credit-card/panel-credit-card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import TypographyH1, {
  TypographyH3,
  TypographyH4,
  TypographyP,
} from "@/components/ui/typography";
import { digitsEnToFa } from "@persian-tools/persian-tools";
import { AlertTriangle } from "lucide-react";

export default function page() {
  return (
    <section>
      <div className="flex items-center gap-x-3 mt-5">
        <PanelCreditCard
          card_name="آرمان سلطانی"
          card_number={6104338688900709}
          isLoading={false}
          variant="mellat"
        />
        <PanelCreditCard
          card_name="آرمان سلطانی"
          card_number={6037697608215734}
          isLoading={false}
          variant="saderat"
        />
      </div>
      <div className="p-16 flex flex-col gap-y-10">
        <TypographyP>
          لطفا مبلغ مورد نظر خود را به شماره کارت های بالا کارت به کارت و رسید
          آن را به شماره های زیر ارسال کنید.
        </TypographyP>
        <div className="text-center tracking-wider">
          <TypographyH1>۰{digitsEnToFa(9121727269)}</TypographyH1>
        </div>
        <TypographyH4 className="text-center">
          واتســاپ، روبیکا، ایتا
        </TypographyH4>
      </div>
      <div className="flex gap-x-2">
        <Alert variant="destructive">
          <AlertTriangle />
          <AlertTitle>هشدار مهم!</AlertTitle>
          <AlertDescription>
            ارسال رسید اجباری میباشد، در صورت عدم داشتن رسید امکان تاخیر در شارژ
            وجود دارد.
          </AlertDescription>
        </Alert>
        <Alert variant="destructive">
          <AlertTriangle />
          <AlertTitle>هشدار مهم!</AlertTitle>
          <AlertDescription>
            ارسال هر گونه رسید فیک ، تکراری، دستکاری شده و غیره منجر به مسدود
            شدن دائمی حساب و سپرده شما خواهد شد.
          </AlertDescription>
        </Alert>
      </div>
    </section>
  );
}
