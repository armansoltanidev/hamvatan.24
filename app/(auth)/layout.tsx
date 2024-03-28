import Link from "next/link";

import { TypographyP } from "@/components/ui/typography";
import UnderlinedLink from "@/components/ui/underlined-link";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen bg-secondary">
      <div className="mx-auto grid h-full items-center bg-primary-foreground px-4 md:w-4/6 md:px-10">
        {children}
        <div className="flex items-center justify-between">
          <Link href="#">
            <TypographyP>مشکل در ورود دارید؟</TypographyP>
          </Link>
          <div>
            <ul className="flex flex-col items-center gap-x-6 gap-y-4 md:flex-row">
              <UnderlinedLink href="/rules">قوانیــن</UnderlinedLink>
              <UnderlinedLink href="/faq">سوالات متداول</UnderlinedLink>
              <UnderlinedLink href="/support">پشتیبــانی</UnderlinedLink>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
