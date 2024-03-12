import { TypographyH2, TypographyP } from "@/components/ui/typography";
import { addCommas, digitsEnToFa } from "@persian-tools/persian-tools";

export default function CtaCharge() {
  return (
    <div className="flex-1 flex flex-col justify-center h-32 text-center bg-[#fffcf5] border rounded-lg border-[#fabe32]">
      <TypographyH2 className="text-[#fabe32]">
        {digitsEnToFa(addCommas(100000))}
      </TypographyH2>
      <TypographyP className="text-[#fabe32] font-medium">
        افغـــانی
      </TypographyP>
    </div>
  );
}
