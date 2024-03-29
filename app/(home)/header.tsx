import { Button } from "@/components/ui/button";
import Logo from "@/components/ui/logo/logo";
import { Menu } from "lucide-react";
import Link from "next/link";

const navbarItems = [
  { id: 1, title: "صفحــه اصلی", href: "/" },
  { id: 2, title: "شــارژ سریع", href: "#fast-charge" },
  { id: 3, title: "قوانین", href: "/rules" },
  { id: 4, title: "سوالات متداول", href: "/faq" },
  { id: 5, title: "پشتیــبانی", href: "/support" },
];

export default function Header() {
  return (
    <div className="flex-center-between px-2 py-3 md:px-0 md:py-8">
      <Logo />
      <nav>
        <ul className="hidden items-center gap-x-10 md:flex ">
          {navbarItems.map((item) => (
            <Link
              key={item.id}
              className="text-muted-foreground hover:text-primary"
              href={item.href}
            >
              {item.title}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden md:block">
        <Link href="/login">
          <Button size="xl" variant="cta">
            ورود | ثبت نام
          </Button>
        </Link>
      </div>
      <div className="block md:hidden">
        <Menu className="cursor-pointer text-primary" size={42} />
      </div>
    </div>
  );
}
