import { addCommas, digitsEnToFa } from "@persian-tools/persian-tools";

import { TypographyH2, TypographyP } from "@/components/ui/typography";

export default function CtaCharge({
  children,
  onClick,
}: {
  children: string;
  onClick?: void | any;
}) {
  return (
    <div
      onClick={onClick}
      className="group flex-1 flex  md:flex-col items-center gap-x-3 justify-center cursor-pointer h-20 md:h-32 py-6 text-center hover:bg-[#fffcf5] border rounded-lg hover:border-[#fabe32] hover:shadow-sm hover:shadow-[#fabe32]/70 transition-colors ease-in-out duration-300"
    >
      <TypographyH2 className="group-hover:text-[#fabe32]">
        {digitsEnToFa(addCommas(children))}
      </TypographyH2>
      <TypographyP className="text-secondary-foreground group-hover:text-[#fabe32] font-medium">
        افغـــانی
      </TypographyP>
    </div>
  );
}
