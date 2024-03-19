import TypographyH1, { TypographyP } from "@/components/ui/typography";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import UnderlinedLink from "@/components/ui/underlined-link";

export default function page() {
  return (
    <div className="h-screen relative flex flex-col">
      <div className="h-1/4 gradirnt-yellow flex flex-col items-center justify-center">
        <TypographyH1 className="text-muted">
          به بخش سوالات متداول پنل هموطن خوش آمدید
        </TypographyH1>
        <TypographyP className="text-secondary mt-4">
          توی این بخش میتونید به سوالات رایج درباره پنــل دسترسی داشته باشید. 😊
        </TypographyP>
      </div>
      <div className="flex-1 p-12 w-1/2 mx-auto">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              پنــــل هموطن چیست چه مزایایی دارد و چرا باید از آن استفاده کرد؟
            </AccordionTrigger>
            <AccordionContent>
              پنل هموطن در سال ۱۴۰۳ در استان تهران در شهر شهریار شروع به فعالیت
              کرد و دارای اینماد و همچنین درگاه پرداخت های معتبری نظیر ملت و سپ
              را دارا است.
              <div>
                <UnderlinedLink href="#">
                  برای دیدن مزایای پنل وارد این لینک شوید.
                </UnderlinedLink>
              </div>
              <div>
                سهولت و راحتی، کارمزد پایین و انجام سریع خدمات مهمترین و بارز
                ترین ویژگی پنل است. ⚡
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
