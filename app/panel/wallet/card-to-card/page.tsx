import { digitsEnToFa } from "@persian-tools/persian-tools";
import { AlertTriangle } from "lucide-react";

import PanelCreditCard from "@/components/bank-credit-card/panel-credit-card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import TypographyH1, {
  TypographyH3,
  TypographyH4,
  TypographyP,
} from "@/components/ui/typography";

export default function page() {
  return (
    <section>
      <div className="flex flex-wrap items-center gap-3 mt-5">
        <PanelCreditCard
          card_name="آرمان سلطانی"
          card_number={6104338988900709}
          isLoading={false}
          variant="mellat"
        />
        <PanelCreditCard
          card_name="آرمان سلطانی"
          card_number={6037697677131630}
          isLoading={false}
          variant="saderat"
        />
      </div>
      <div className="py-16 px-8 flex flex-col gap-y-10">
        <TypographyP>
          لطفا مبلغ مورد نظر خود را به شماره کارت های بالا کارت به کارت و رسید
          آن را به شماره های زیر ارسال کنید.
        </TypographyP>
        <div className="text-center tracking-wider">
          <TypographyH1>۰{digitsEnToFa(9058506962)}</TypographyH1>
        </div>
        <TypographyH4 className="text-center">
          واتســاپ، روبیکا، ایتا
        </TypographyH4>
      </div>
      <div className="md:flex md:gap-x-2 space-y-2">
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
