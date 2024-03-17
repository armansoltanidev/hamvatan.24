import { Clock3 } from "lucide-react";

import { TypographyP } from "@/components/ui/typography";

type NotifcationRowProps = {
  title: string;
  time: string;
  children: React.ReactNode;
  type: "alert" | "info" | "warning" | "success";
};

export default function NotficationRow({
  title,
  time,
  children,
}: NotifcationRowProps) {
  return (
    <section className="flex flex-col gap-y-2 cursor-pointer px-2 py-2 items-center justify-between border-b hover:bg-secondary rounded-md">
      <div className="flex w-full items-start justify-between">
        <TypographyP className="text-base text-blue-700">{title}</TypographyP>
        <div className="flex gap-x-1 items-center">
          <Clock3 className="text-muted-foreground" width={16} />
          <TypographyP className="text-muted-foreground text-xs">
            {time}
          </TypographyP>
        </div>
      </div>
      <TypographyP className="text-xs text-secondary-foreground">
        {children}
      </TypographyP>
    </section>
  );
}
