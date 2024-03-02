import { Button } from "@/components/ui/button";
import { TypographyP } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { BadgeInfo, CheckCheck, Clock3 } from "lucide-react";

type NewsCardProps = {
  title: string;
  time: string;
  children: React.ReactNode;
  type: "alert" | "info" | "warning" | "success";
};

const cardStyle = cva(
  "bg-blue-700 w-12 h-12 flex items-center justify-center rounded-md",
  {
    variants: {
      type: {
        alert: "bg-red-500",
        info: "bg-blue-700",
        warning: "bg-yellow-400",
        success: "bg-green-400",
      },
    },
  }
);

export default function NewsCard({
  title,
  time,
  children,
  type,
}: NewsCardProps) {
  return (
    <div className="border rounded-md max-w-80 h-56 px-4 py-6 flex flex-col cursor-pointer gap-y-4">
      <div className="flex items-center justify-between">
        <div>
          <TypographyP className="leading-none">{title}</TypographyP>
          <div className="flex items-center gap-x-2">
            <Clock3 className="text-muted-foreground" width={16} />
            <TypographyP className="text-muted-foreground text-xs">
              {time}
            </TypographyP>
          </div>
        </div>
        <div className={cn(cardStyle({ type }))}>
          <BadgeInfo width={32} height={32} className="text-white" />
        </div>
      </div>
      <div>
        <TypographyP className="text-sm">{children}</TypographyP>
      </div>
      <div className="self-end">
        <Button variant="secondary" className="gap-x-2">
          علامت زدن به عنوان خوانده شده
          <CheckCheck strokeWidth={1} />
        </Button>
      </div>
    </div>
  );
}
