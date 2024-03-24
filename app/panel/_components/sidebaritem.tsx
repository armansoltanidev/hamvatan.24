"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

export default function SidebarItem({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={cn(
        "px-4 py-3 flex items-center gap-x-3 text-lg border-r-4 border-r-secondary hover:bg-secondary hover:text-primary cursor-pointer border-b-secondary/20 border-b rounded",
        pathname.includes(href)
          ? "border-r-secondary hover:bg-primary hover:text-primary-foreground text-primary-foreground bg-primary"
          : ""
      )}
    >
      {children}
    </Link>
  );
}
