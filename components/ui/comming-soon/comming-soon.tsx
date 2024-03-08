import Link from "next/link";
import { Button } from "../button";
import { TypographyH2, TypographyP } from "../typography";

export default function CommingSoon() {
  return (
    <div className="flex flex-col gap-y-4 items-center justify-center h-full">
      <TypographyP className="text-destructive">
        این بخش در دست احداثه! ⚠️
      </TypographyP>
      <TypographyH2>به زودی اضافه و بهتون اطلاع داده میشه! 🫡</TypographyH2>
      <Link href="/panel/support">
        <Button>پشتیبــانی</Button>
      </Link>
    </div>
  );
}
