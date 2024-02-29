import { cn } from "@/lib/utils";

export default function TypographyH4({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h4 className={cn("text-xl font-semibold tracking-tight", className)}>
      {children}
    </h4>
  );
}
