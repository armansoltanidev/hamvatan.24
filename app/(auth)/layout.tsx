import Link from "next/link";

import { TypographyP } from "@/components/ui/typography";
import UnderlinedLink from "@/components/ui/underlined-link";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-secondary h-screen">
      <div className="bg-primary-foreground mx-auto w-4/6 h-full grid items-center px-10">
        {children}
        <div className="flex items-center justify-between">
          <Link href="#">
            <TypographyP>مشکل در ورود دارید؟</TypographyP>
          </Link>
          <div>
            <ul className="flex items-center gap-x-6">
              <UnderlinedLink href="#">قوانیــن</UnderlinedLink>
              <UnderlinedLink href="#">سوالات متداول</UnderlinedLink>
              <UnderlinedLink href="#">پشتیبــانی</UnderlinedLink>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
