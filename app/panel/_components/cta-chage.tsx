import { TypographyH2, TypographyP } from "@/components/ui/typography";
import { addCommas, digitsEnToFa } from "@persian-tools/persian-tools";

export default function CtaCharge({ children }: { children: string }) {
  return (
    <div className="group flex-1 flex flex-col justify-center cursor-pointer h-32 text-center hover:bg-[#fffcf5] border rounded-lg hover:border-[#fabe32] hover:shadow-sm hover:shadow-[#fabe32]/70 transition-colors ease-in-out duration-300">
      <TypographyH2 className="group-hover:text-[#fabe32]">
        {digitsEnToFa(addCommas(children))}
      </TypographyH2>
      <TypographyP className="text-secondary-foreground group-hover:text-[#fabe32] font-medium">
        افغـــانی
      </TypographyP>
    </div>
  );
}
