import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";

export default function Navbar() {
  return (
    <div className="px-4 py-2 border-b flex justify-between items-center">
      <div className="flex items-center gap-x-3">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="leading-none">
          <span className="text-xs">خوش آمدید</span>
          <p className="font-normal text-primary">آرمان سلطانی عزیز</p>
        </div>
      </div>
      <div className="flex items-center gap-x-4">
        <Button>موجودی شما : ۱۰,۱۵۴,۱۵۴</Button>
        <Button variant="outline" size="icon" className="rounded-full">
          <Bell />
        </Button>
      </div>
    </div>
  );
}
