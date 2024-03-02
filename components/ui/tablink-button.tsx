"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

type TablinkProps = {
  children: React.ReactNode;
  href: string;
};

export default function TablinkButton({ children, href }: TablinkProps) {
  const pathname = usePathname();
  return (
    <Link
      className={cn(
        "px-4 py-2 rounded-full bg-secondary text-primary",
        pathname.includes(`${href}`) ? "bg-primary text-primary-foreground" : ""
      )}
      href={href}
    >
      {children}
    </Link>
  );
}
