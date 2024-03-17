import { MoreHorizontal } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { TypographyH4, TypographyP } from "@/components/ui/typography";

export default function CardBlog() {
  return (
    <Card className="bg-white min-w-96 flex-1 flex flex-col border rounded-lg">
      <CardHeader className="flex flex-row justify-between items-center">
        <Avatar>
          <AvatarImage src="https://github.com/kingar.png" />
          {/* after fetch data must show prefix of user name */}
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <MoreHorizontal className="text-primary" />
      </CardHeader>
      <CardContent className="mt-4 space-y-4">
        <TypographyH4 className="text-primary">
          شرایط تحصیل اتباع در سال جدید
        </TypographyH4>
        <TypographyP className="text-sm text-muted-foreground">
          تحصیل در ایران برای افغان ها به دلیل قرار گرفتن در شرایط سخت و نامطمئن
          در کشور خود، به عنوان یک گزینه بسیار عالی است. با این حال، تحصیل در
          ایران برای افغان ها با چالش‌های زیادی روبرو است.
        </TypographyP>
      </CardContent>
      <CardFooter className="mt-4 self-end">
        <Button variant="outline">بیشتر بخوانید</Button>
      </CardFooter>
    </Card>
  );
}
