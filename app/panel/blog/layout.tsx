import { Button } from "@/components/ui/button";
import LearnMoreButton from "@/components/ui/learn-more-button";
import { TypographyH4, TypographyP } from "@/components/ui/typography";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div>
        <TypographyH4>
          این صفحه مربوط به بلاگ هموطنه توش کلی اخبار بروز قرار داده میشود.
        </TypographyH4>
        <div className="flex items-center">
          <TypographyP className="text-muted-foreground">
            شما میتوانید با ثبت نام در بخش بلاگ ، پست خودتون رو قرار بدید. هر
            ماه به پربازدید ترین پست جوایز نقدی داده میشود. 🎁
          </TypographyP>
          <LearnMoreButton />
        </div>
      </div>
      <div className="py-6 flex items-center gap-x-4 justify-end">
        <Button variant="outline" className="group">
          پر بازدید ترین این ماه
          <span className="text-2xl group-hover:animate-bounce">🏆</span>
        </Button>
        <Button disabled>ثبت نام در بلاگ</Button>
      </div>
      <div className="mt-6">{children}</div>
    </>
  );
}
