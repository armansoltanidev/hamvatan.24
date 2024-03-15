import {
  TypographyH3,
  TypographyH4,
  TypographyP,
} from "@/components/ui/typography";

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
import { MoreHorizontal } from "lucide-react";

const RECENT_ITEMS = [
  {
    id: 99,
    service: "شارژ مستقیم",
    number: "07954574514",
    amount: "150",
    status: "success",
    date: "12:48 | 1402/12/25",
    operator: "ام تی ان",
  },
  {
    id: 100,
    service: "شارژ مستقیم",
    number: "07985474514",
    amount: "259",
    status: "success",
    date: "12:56 | 1402/12/26",
    operator: "ام تی ان",
  },
  {
    id: 101,
    service: "شارژ مستقیم",
    number: "07745745748",
    amount: "202",
    status: "failed",
    date: "14:48 | 1402/11/25",
    operator: "روشن",
  },
  {
    id: 102,
    service: "شارژ مستقیم",
    number: "0854574574",
    amount: "350",
    status: "pending",
    date: "19:48 | 1402/11/25",
    operator: "اتصالات",
  },
];

export default function ChargeRecent() {
  return (
    <Table>
      <TableCaption>
        <TypographyP>برای دیدن جزییات بیشتر به قسمت گزارشات بروید</TypographyP>
        <Button>مشاهده بیشتــر</Button>
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>ردیف</TableHead>
          <TableHead>سرویس خریداری شده</TableHead>
          <TableHead>شماره مقصد</TableHead>
          <TableHead>مبـلغ تراکنش</TableHead>
          <TableHead>اوپراتور</TableHead>
          <TableHead>وضعیت تراکنش</TableHead>
          <TableHead>تاریخ و زمان</TableHead>
          <TableHead>عملیات</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {RECENT_ITEMS.map((item, index) => (
          <TableRow key={item.id} className="bg-[#fffcf5]">
            <TableCell>
              <Badge>{digitsEnToFa(index + 1)}</Badge>
            </TableCell>
            <TableCell>
              <TypographyP className="font-semibold">{item.service}</TypographyP>
            </TableCell>
            <TableCell>
              <TypographyP className="font-semibold">{digitsEnToFa(item.number)}</TypographyP>
            </TableCell>
            <TableCell>
              <TypographyP className="font-semibold">{digitsEnToFa(item.amount)} افغانی</TypographyP>
            </TableCell>
            <TableCell>
              <TypographyP className="font-semibold">{item.operator}</TypographyP>
            </TableCell>
            <TableCell>
              <TypographyP>{item.status}</TypographyP>
            </TableCell>
            <TableCell>{digitsEnToFa(item.date)}</TableCell>
            <TableCell>
              <Button size="round">
                <MoreHorizontal width={16} height={16} />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
