import { Copy } from "lucide-react";
import { Badge } from "../ui/badge";
import { TypographyH4, TypographyP } from "../ui/typography";

import {
  digitsEnToFa,
  getBankNameFromCardNumber,
} from "@persian-tools/persian-tools";
import { Button } from "../ui/button";
import Loading from "../ui/loadings/loading";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const BANK_CARD = cva(
  "relative px-6 py-4 w-96 h-48 flex items-center flex-col justify-between rounded-md ring-1",
  {
    variants: {
      variant: {
        mellat: "card-mellat",
        saderat: "card-saderat",
      },
    },
  }
);

type CreditCardProps = {
  card_number: number;
  card_name: string;
  isLoading: boolean;
  variant: "mellat" | "saderat";
};

export default function PanelCreditCard({
  card_number,
  card_name,
  isLoading,
  variant,
}: CreditCardProps) {
  return (
    <div className={cn(BANK_CARD({ variant }))}>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="w-full flex justify-between">
            {/* get bank name of card */}
            <TypographyP className="text-primary-foreground">
              {getBankNameFromCardNumber(card_number)}
            </TypographyP>
            <Button variant="outline" size="round">
              <Copy width={18} className="text-primary" />
            </Button>
          </div>
          <div>
            <TypographyH4 className="text-white text-2xl tracking-wider">
              {/* convert EN to FA in user side */}
              {digitsEnToFa(card_number)}
            </TypographyH4>
          </div>
          <div className="w-full flex items-center justify-between">
            <TypographyP className="text-primary-foreground">
              {card_name}
            </TypographyP>
            <Badge className="flex items-center gap-x-2">
              شماره حساب: {digitsEnToFa(9029056601)}
            </Badge>
          </div>
        </>
      )}
    </div>
  );
}
