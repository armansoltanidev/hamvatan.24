import TypographyH1, { TypographyP } from "@/components/ui/typography";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import UnderlinedLink from "@/components/ui/underlined-link";
import { Badge } from "@/components/ui/badge";
import { digitsEnToFa } from "@persian-tools/persian-tools";

const FAQUESTION = [
  {
    id: 1,
    item: "item-1",
    question:
      " پنــــل هموطن چیست چه مزایایی دارد و چرا باید از آن استفاده کرد؟",
    answer:
      "پنل هموطن در سال ۱۴۰۳ در استان تهران در شهر شهریار شروع به فعالیت کرد و دارای اینماد و همچنین درگاه پرداخت های معتبری نظیر ملت و سپ را دارا است. سهولت و راحتی، کارمزد پایین و انجام سریع خدمات مهمترین و بارز ترین ویژگی پنل است. ⚡",
  },
  {
    id: 2,
    item: "item-2",
    question: "آیا احراز هویت در پنــل اجباری است؟",
    answer:
      "بله ،احراز هویت در پنل هموطن  برای جلوگیری از هر گونه سو استفاده بانکی اجباری است.",
  },
  {
    id: 3,
    item: "item-3",
    question: "آیا فقط یکبار نیاز به احراز هویت داریم؟",
    answer:
      "بله، شما با یکبار احراز هویت میتوانید به طور دائمی از خدمات ما استفاده کنید.",
  },
  {
    id: 4,
    item: "item-4",
    question: "آیا هموطن حق مسدود سازی سپرده و حساب کاربری من را دارد؟",
    answer:
      "برای آشنایی بیشتر با قوانین  به این لینک مراجعه کنید هموطن مسیولیت خود را در رابطه با کاربر میپذیرد اما ممکن است بر اساس برخی تخلفات کاربر پنل را مسدود و در صورت امکان سپرده را به حساب بانکی شما بازگرداند.",
  },
  {
    id: 5,
    item: "item-5",
    question: "فرایند احراز هویت چگونه است؟",
    answer:
      "برای  اطلاعات بیشتر در مورد فرایند احراز هویت به این لینک مراجعه کنید.",
  },
  {
    id: 6,
    item: "item-6",
    question: "احراز هویت با چه مدارکی امکان پذیر میباشد؟",
    answer:
      "احراز هویت با مدارک هویتی همچون کارت ملی،شناسنامه کارت آمایش، پاسپورت و کارت هوشمند اتباع خارجی امکان پذیر است.",
  },
  {
    id: 7,
    item: "item-7",
    question: "من حساب بانکی ندارم میتوانم در پنل ثبت نام کنم؟",
    answer:
      "بله، شما میتوانید ثبت نام کنید اما برای شارژ سپرده باید مراحل دیگری را طی کنید برای اطلاعات بیشتر به این لینک مراجعه کنید.",
  },
  {
    id: 8,
    item: "item-8",
    question: "محاسبه کارمزد در پنل به چه صورت است؟",
    answer: "به زودی...",
  },
  {
    id: 9,
    item: "item-9",
    question: "آیا خدمات پنل فقط  ارسال شارژ و بسته است؟ ",
    answer:
      "خیر، پنل هموطن در آینده بسیاری از خدمات را اضافه و گسترش خواهد داد برای اطلاعات بیشتر به این لینک مراجعه کنید.",
  },
  {
    id: 10,
    item: "item-10",
    question: "من شارژ/بسته ارسال کرده ام اما آن را دریافت نکرده ام!",
    answer:
      "شما میتوانید با مراجعه به قسمت گزارشات جزییات خرید خود را مشاهده کنید و از موفق یا نبودن آن مطلع شوید در صورت پشتیباتی بیشتر با شماره موجود در قسمت پشتیبانی تماس بگیرید.",
  },
  {
    id: 11,
    item: "item-11",
    question:
      "من شارژ/بسته اشتباها به شماره دیگری وارد کرده ام آیا امکان بازگشت آن وجود دارد؟",
    answer:
      "متاسفانه این امکان در صورتی وجود دارد که شماره وارد شده در سیستم ثبت نشده و (در شبکه موجود نباشد) در این صورت میتوانید با مراجعه به این لینک درخواست برگشت وجه نمایید.",
  },
  {
    id: 12,
    item: "item-12",
    question: "من اشتباها مبلغ بیشتری سپرده خود را شارژ کرده ام ؟",
    answer:
      "شما میتوانید با مراجعه به قسمت کیف پول من درخواست واریز وجه دهید و مبلغ خود را درخواست دهید مبلغ فقط و فقط به حساب احراز شده واریز خواهد شد.",
  },
  {
    id: 13,
    item: "item-13",
    question: "من درخواست همکاری دارم چگونه میتوانم درخواست خود را ثبت کنم؟",
    answer:
      "شما میتوانید با مراجعه به لینک زیر درخواست خود را ثبت نمایید. جات توی تیممون خالیه!😉. ",
  },
  {
    id: 14,
    item: "item-14",
    question: "مدت زمان تقریبی ارسال شارژ و بسته چقدر است؟",
    answer:
      "خرید ها و سفارشات شما آنی و در مواقع شلوغی شبکه حداکثر بین پنج دقیقه تا یکساعت انجام خواهد شد.",
  },
  {
    id: 15,
    item: "item-15",
    question: "من از پنل شکایــت دارم چه کار کنم؟",
    answer:
      "تیم ما همیشه آماده پاسخگویی و دریافت شکایات و انتقادات سازنده شما را دارد و تعهد میدهد تمام تلاش خود را جهت جلب رضایت شما انجام دهد💛",
  },
];

export default function page() {
  return (
    <div className="h-screen relative flex flex-col">
      <div className="h-1/4 gradirnt-yellow flex flex-col items-center justify-center text-center">
        <TypographyH1 className="text-muted">
          به بخش سوالات متداول پنل هموطن خوش آمدید
        </TypographyH1>
        <TypographyP className="text-secondary mt-4 text-sm md:text-lg">
          توی این بخش میتونید به سوالات رایج درباره پنــل دسترسی داشته باشید. 😊
        </TypographyP>
      </div>
      <div className="flex-1 p-4 md:p-12 md:w-1/2 mx-auto">
        <Accordion type="single" collapsible>
          {FAQUESTION.map((item, index) => (
            <AccordionItem key={item.id} value={item.item}>
              <AccordionTrigger>
                <div className="flex items-center gap-x-2 ">
                  <Badge className="rounded-full bg-[#fabe32]">
                    {digitsEnToFa(index + 1)}
                  </Badge>
                  {item.question}
                </div>
              </AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
