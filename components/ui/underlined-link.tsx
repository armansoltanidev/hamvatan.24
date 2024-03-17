import { cn } from "@/lib/utils";
import Link from "next/link";

export default function UnderlinedLink({
  children,
  className,
  href,
}: {
  children: React.ReactNode;
  className?: string
  href: string;
}) {
  return (
    <Link
      className={cn("hover:border-b-2 hover:border-b-amber-300", className)}
      href={href}
    >
      {children}
    </Link>
  );
}
