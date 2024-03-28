"use client";

const testimonials = [
  {
    quote:
      "همیــشه موقعی که میخواستم برای دوستانم توی افغانستان شارژ وارد کنم خیلی زمان میبرد و سخت بود تا اینکه با هموطن آشنا شدم، کار کردن باهاش تجربه لذت بخشی بود مخصوصا که از طریق کارت به کارت هم میشه پرداخت کرد. ممنونم ",
    name: "محمدرضا رضایی",
    title: "راحتــی و استفاده آسان",
  },
  {
    quote:
      "تجربه استفاده از هموطن واقعا برام لذت بخش بود همه امکانات لازم رو دارم و به سرعت شارژم انجام میشه ممنونم ازتون",
    name: "مهــرزاد منتظری",
    title: "سریع و آسان",
  },
  {
    quote:
      "از اونجایی که مغازه دارم همیشه برای ارسال شارژ برای افغانستان همشه برام چالش برانگیز بوده که هموطن اونو حل کرده، مرسی",
    name: "علــی منتظری",
    title: "استفاده از پنــل همکار",
  },
  {
    quote:
      "از سرعت ارسال شارژ و غیره که بگذریم هموطن واقعا پشتیبانیش عالیه ، هر زمان به مشکل خوردم سریعا راهنمایی و کمک لازم رو دریافت کردم",
    name: "سعید فراهانی",
    title: "پشتـــیبانی عالی",
  },
  {
    quote: "تجــربه استفاده از پنــل برام لذت بخش بود واقعا ممنونم ازتون",
    name: "مسعود مرادی",
    title: "آسانی و امن بودن",
  },
];

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import React from "react";

export function InfiniteMovingCardTestomonioal() {
  return (
    <div className="antialiase relative flex flex-col items-center justify-center overflow-hidden">
      <InfiniteMovingCards items={testimonials} direction="left" speed="slow" />
    </div>
  );
}
