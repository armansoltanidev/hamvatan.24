import {
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyP,
} from "@/components/ui/typography";
import { ChargeForm } from "./_components/hybrid/charge-form";

// table

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { digitsEnToFa } from "@persian-tools/persian-tools";
import { Badge } from "@/components/ui/badge";

export default function Hybrid() {
  return (
    <main className="flex flex-col gap-y-4">
      <ChargeForm />
      <Table>
        <TableCaption>
          <TypographyP>
            برای دیدن جزییات بیشتر به قسمت گزارشات بروید
          </TypographyP>
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>ردیف</TableHead>
            <TableHead>سرویس خریداری شده</TableHead>
            <TableHead>شماره مقصد</TableHead>
            <TableHead>مبـلغ تراکنش</TableHead>
            <TableHead>وضعیت تراکنش</TableHead>
            <TableHead>تاریخ و زمان</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className="bg-[#fffcf5]">
            <TableCell>
              <Badge>{digitsEnToFa(1)}</Badge>
            </TableCell>
            <TableCell>
              <TypographyP className="text-lg">شارژ مستقیم</TypographyP>
            </TableCell>
            <TableCell>
              <TypographyH4>۰{digitsEnToFa(7908548741)}</TypographyH4>
            </TableCell>
            <TableCell>
              <TypographyH3>{digitsEnToFa(500)}</TypographyH3>
            </TableCell>
            <TableCell>
              <TypographyP className="text-lg font-semibold">موفق</TypographyP>
            </TableCell>
            <TableCell>دیروز</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </main>
  );
}
