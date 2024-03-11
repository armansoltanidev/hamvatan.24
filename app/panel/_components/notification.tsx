import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { BadgeInfo, Bell, Clock1, Clock3 } from "lucide-react";
import NewsCard from "../news/_components/news-card";
import { TypographyP } from "@/components/ui/typography";
import Link from "next/link";

export default function Notification() {
  return (
    <div>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" size="icon" className="rounded-full">
            <Bell />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-3">
          <div className="flex items-center justify-between sticky top-0 mb-6">
            <TypographyP>پیــام های شما</TypographyP>
            <Link href="pamel/news">
              <Button
                size="sm"
                variant="outline"
                className="text-blue-800 hover:bg-blue-600 hover:text-blue-100"
              >
                مشاهده همه
              </Button>
            </Link>
          </div>

          {/* notifcatios card here map over that */}
          <section className="flex px-2 py-2 rounded-md items-center justify-between border">
            <div>
              <TypographyP className="text-sm">تغییرات سطح کامزد</TypographyP>
              <div className="flex gap-x-3 items-center">
                <Clock3 className="text-muted-foreground" width={16} />
                <TypographyP className="text-muted-foreground text-xs">
                  یکساعت پیش
                </TypographyP>
              </div>
            </div>
            <div>
              <BadgeInfo width={32} height={32} />
            </div>
          </section>
        </PopoverContent>
      </Popover>
    </div>
  );
}
