import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";

import Link from "next/link";
import Profile from "./profile";
import Notification from "./notification";

export default function Navbar() {
  return (
    <div className="px-4 py-2 border-b flex justify-between items-center">
      <div className="flex items-center gap-x-3">
        <Profile />
        <div className="leading-none">
          <span className="text-xs">خوش آمدید</span>
          <p className="font-normal text-primary">آرمان سلطانی عزیز</p>
        </div>
      </div>
      <div className="flex items-center gap-x-4">
        <Link href="/panel/wallet">
          <Button>
            <span className="hidden md:block">موجودی شما :</span> ۱۰,۱۵۴,۱۵۴
          </Button>
        </Link>
        <Notification />
      </div>
    </div>
  );
}
