import { Button } from "@/components/ui/button";
import { TypographyH4, TypographyP } from "@/components/ui/typography";
import { digitsEnToFa } from "@persian-tools/persian-tools";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div>
        <TypographyH4 className="text-7xl">{digitsEnToFa(404)}</TypographyH4>
        <TypographyP>
          متـــــاسفانه صفحه مورد نظر شما یافت نشد! شاید وارد لینک اشتباهی شدی!
        </TypographyP>
        <Link href="/panel">
          <Button>بازگشت به خـــانه</Button>
        </Link>
      </div>
    </div>
  );
}
