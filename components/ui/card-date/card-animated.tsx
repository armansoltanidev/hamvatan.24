import { TypographyH3, TypographyH4, TypographyP } from "../typography";

export default function CardAnimate() {
  return (
    <div className="bg-primary-foreground h-20 w-64 rounded-3xl flex items-center justify-evenly">
      <div className="relative h-14 w-14 rounded-full flex items-center justify-center">
        <span className="animate-pulse absolute inline-flex h-full w-full rounded-full bg-[#fabe32] opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4/6 w-4/6 bg-[#fabe32]"></span>
      </div>
      <div className="flex flex-col gap-y-2">
        <TypographyP className="text-xs text-muted-foreground">
          یکشنبه - ۵ فروردین ۱۴۰۳
        </TypographyP>
        <TypographyH4 className="text-xs font-normal">
          در حال انجام سفارشات
        </TypographyH4>
      </div>
    </div>
  );
}
