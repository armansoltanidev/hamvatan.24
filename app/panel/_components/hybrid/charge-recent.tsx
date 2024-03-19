import { digitsEnToFa } from "@persian-tools/persian-tools";
import {
  CheckCircle,
  Copy,
  CopyCheckIcon,
  MoreHorizontal,
  RefreshCcw,
  Search,
  XCircle,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
import { TypographyP } from "@/components/ui/typography";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const RECENT_ITEMS = [
  {
    id: 99,
    service: "شارژ مستقیم",
    number: "0774515412",
    amount: "150",
    status: "success",
    date: "12:48 | 1402/12/25",
    operator: "ام تی ان",
    transaction_code: "985547",
  },
  {
    id: 100,
    service: "شارژ مستقیم",
    number: "0798547451",
    amount: "259",
    status: "success",
    date: "12:56 | 1402/12/26",
    operator: "ام تی ان",
    transaction_code: "985457",
  },
  {
    id: 101,
    service: "شارژ مستقیم",
    number: "0774574574",
    amount: "202",
    status: "failed",
    date: "14:48 | 1402/11/25",
    operator: "روشن",
    transaction_code: "154877",
  },
  {
    id: 102,
    service: "شارژ مستقیم",
    number: "0854574574",
    amount: "350",
    status: "pending",
    date: "19:48 | 1402/11/25",
    operator: "اتصالات",
    transaction_code: "154874",
  },
  {
    id: 103,
    service: "شارژ مستقیم",
    number: "0854531243",
    amount: "299",
    status: "success",
    date: "19:48 | 1402/11/26",
    operator: "افغان بیسیم",
    transaction_code: "220515",
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
          <TableHead>کد پیــگیری</TableHead>
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
              <TypographyP className="font-semibold">
                {item.service}
              </TypographyP>
            </TableCell>
            <TableCell>
              <TypographyP className="font-semibold">
                {digitsEnToFa(item.number)}
              </TypographyP>
            </TableCell>
            <TableCell>
              <TypographyP className="font-semibold">
                {digitsEnToFa(item.amount)} افغانی
              </TypographyP>
            </TableCell>
            <TableCell>
              <TypographyP className="font-semibold">
                {item.operator}
              </TypographyP>
            </TableCell>
            <TableCell>
              {item.status === "success" ? <CheckCircle /> : <XCircle />}
            </TableCell>
            <TableCell>{digitsEnToFa(item.transaction_code)}</TableCell>
            <TableCell>{digitsEnToFa(item.date)}</TableCell>
            <TableCell>
              <Popover>
                <PopoverTrigger asChild>
                  <Button size="round">
                    <MoreHorizontal width={16} height={16} />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-full flex flex-col gap-y-2">
                  <Button variant="outline" className="gap-x-2">
                    استفاده مجدد از شماره
                    <Copy size={20} strokeWidth={1.5} />
                  </Button>
                  <div className="flex gap-x-2">
                    <Button variant="outline" className="gap-x-2">
                      بروزرسانی
                      <RefreshCcw size={20} strokeWidth={1} />
                    </Button>
                    <Button variant="outline" className="gap-x-2">
                      استعلام
                      <Search size={20} strokeWidth={1} />
                    </Button>
                  </div>
                </PopoverContent>
              </Popover>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
