import { BadgeAlert, BadgeCheck, MoreHorizontal } from "lucide-react";
import { Badge } from "../ui/badge";
import { TypographyH4, TypographyP } from "../ui/typography";

import {
  digitsEnToFa,
  getBankNameFromCardNumber,
} from "@persian-tools/persian-tools";
import { Button } from "../ui/button";
import Loading from "../ui/loadings/loading";

type CreditCardProps = {
  card_number: number;
  card_name: string;
  isVerified?: boolean;
  isLoading: boolean;
};

export default function CreditCard({
  card_number,
  card_name,
  isVerified,
  isLoading,
}: CreditCardProps) {
  return (
    <div className="relative px-6 py-4 flex-1 max-w-96 h-48 flex items-center flex-col justify-between  rounded-md card ring-1 ring-primary">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="w-full flex justify-between">
            {/* get bank name of card */}
            <TypographyP className="text-amber-100">
              {getBankNameFromCardNumber(card_number)}
            </TypographyP>
            <Button variant="outline" size="round">
              <MoreHorizontal className="text-amber-500" />
            </Button>
          </div>
          <div>
            <TypographyH4 className="text-amber-400 text-2xl tracking-wider">
              {/* convert EN to FA in user side */}
              {digitsEnToFa(card_number)}
            </TypographyH4>
          </div>
          <div className="w-full flex items-center justify-between">
            <TypographyP className="text-amber-100">{card_name}</TypographyP>
            <Badge className="flex items-center gap-x-2">
              {/* check user is verified or not */}
              {isVerified ? "احراز شــده" : "احراز نشــده"}
              {isVerified ? (
                <BadgeCheck width={18} />
              ) : (
                <BadgeAlert width={18} />
              )}
            </Badge>
          </div>
        </>
      )}
    </div>
  );
}
