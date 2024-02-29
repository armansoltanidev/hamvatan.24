import { MoreHorizontal, MoreVertical } from "lucide-react";
import { Badge } from "../ui/badge";
import { TypographyH4, TypographyP } from "../ui/typography";

import {
  digitsEnToFa,
  getBankNameFromCardNumber,
} from "@persian-tools/persian-tools";
import { Button } from "../ui/button";

type CreditCardProps = {
  card_number: number;
  card_name: string;
  isVerified: boolean;
};

export default function CreditCard({
  card_number,
  card_name,
  isVerified,
}: CreditCardProps) {
  return (
    <div className="px-4 py-3 w-80 h-40 flex items-center flex-col justify-between  rounded-md card ring-1 ring-primary">
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
        <TypographyH4 className="text-amber-400">
          {/* convert EN to FA in user side */}
          {digitsEnToFa(card_number)}
        </TypographyH4>
      </div>
      <div className="w-full flex items-center justify-between">
        <TypographyP className="text-amber-100">{card_name}</TypographyP>
        <Badge>{isVerified ? "احراز شــده" : "احراز نشــده"}</Badge>
      </div>
    </div>
  );
}
