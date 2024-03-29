import { persianDateString } from "@/lib/utils";
import { TypographyH3, TypographyH4, TypographyP } from "../typography";
import { digitsEnToFa } from "@persian-tools/persian-tools";

export default function CardAnimate() {
  const date = persianDateString();
  return (
    <div className="flex h-20 w-64 items-center justify-evenly rounded-3xl bg-primary-foreground">
      <div className="relative flex h-14 w-14 items-center justify-center rounded-full">
        <span className="absolute inline-flex h-full w-full animate-pulse rounded-full bg-[#fabe32] opacity-75"></span>
        <span className="relative inline-flex h-4/6 w-4/6 rounded-full bg-[#fabe32]"></span>
      </div>
      <div className="flex flex-col gap-y-2">
        <TypographyP className="text-xs text-muted-foreground">
          <span>{digitsEnToFa(date)}</span>
        </TypographyP>
        <TypographyH4 className="text-xs font-normal">
          در حال انجام سفارشات
        </TypographyH4>
      </div>
    </div>
  );
}
