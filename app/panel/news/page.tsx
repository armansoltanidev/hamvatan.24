import { TypographyH4, TypographyP } from "@/components/ui/typography";
import NewsCard from "./_components/news-card";

export default function NewsPage() {
  return (
    <>
      <div>
        <TypographyH4>
          توی این صفحه همه اعلانات و اطلاعیه های پنل قرار داده میشه!
        </TypographyH4>
        <TypographyP className="text-muted-foreground">
          شما میتوانید با کلیک کردن روی هر پیام جزییات بیشتری رو مشاهده کنید.
        </TypographyP>
      </div>
      {/* FOR NOW MT-7 */}
      <div className="mt-7 flex flex-wrap gap-3">
        {/* Replace by map func from DB use props not compound components to avoid compexity */}
        <NewsCard
          type="warning"
          title="تغییرات در سطح کارمــزد"
          time="یکساعت پیــش"
        >
          نمایندگــان محترم، در راستای بهبود خدمات و کیفیت برای شما هموطن های
          گرامی کارمزد پنــل دو درصد افزایش یافت.
        </NewsCard>
        <NewsCard
          type="alert"
          title="تغییرات در سطح کارمــزد"
          time="یکساعت پیــش"
        >
          نمایندگــان محترم، در راستای بهبود خدمات و کیفیت برای شما هموطن های
          گرامی کارمزد پنــل دو درصد افزایش یافت.
        </NewsCard>
        <NewsCard
          type="success"
          title="تغییرات در سطح کارمــزد"
          time="یکساعت پیــش"
        >
          نمایندگــان محترم، در راستای بهبود خدمات و کیفیت برای شما هموطن های
          گرامی کارمزد پنــل دو درصد افزایش یافت.
        </NewsCard>
        <NewsCard
          type="info"
          title="تغییرات در سطح کارمــزد"
          time="یکساعت پیــش"
        >
          نمایندگــان محترم، در راستای بهبود خدمات و کیفیت برای شما هموطن های
          گرامی کارمزد پنــل دو درصد افزایش یافت.
        </NewsCard>
      </div>
    </>
  );
}
