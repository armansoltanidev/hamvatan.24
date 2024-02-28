"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
        "px-4 py-3 flex items-center gap-x-3 text-lg border-r-4 border-r-secondary hover:bg-primary hover:text-primary-foreground cursor-pointer border-b-secondary/20 border-b rounded",
        pathname === href ? "border-r-primary" : ""
      )}
    >
      {children}
    </Link>
  );
}
