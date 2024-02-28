import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <div className="p-2 border-b flex justify-between items-center">
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
      <div>
        <Button>موجودی شما :</Button>
      </div>
    </div>
  );
}
