import Link from "next/link";
import { Button } from "./button";
import { MoveUpLeft } from "lucide-react";

export default function LearnMoreButton() {
  return (
    <Link href="/">
      <Button variant="ghost" size="sm">
        بیشتر بدانید
        <MoveUpLeft className="mr-1" size={20} strokeWidth={1.2} />
      </Button>
    </Link>
  );
}
