import {
  BiBell,
  BiCalendar,
  BiCategoryAlt,
  BiHeadphone,
  BiSpreadsheet,
  BiWalletAlt,
} from "react-icons/bi";

import { Button } from "@/components/ui/button";
import Logo from "@/components/ui/logo/logo";

import SidebarItem from "./sidebaritem";
export default function SideBar() {
  return (
    <div className="h-full border-l p-0.5 md:flex flex-col justify-between hidden">
      <div>
        <div className="p-6">
          <Logo />
        </div>
        <div className="flex flex-col">
          <SidebarItem href="/panel">
            <BiCategoryAlt size={22} />
            <span>شـــارژ و بســته</span>
          </SidebarItem>
          <SidebarItem href="/panel/reports">
            <BiCalendar size={22} />
            <span>گـــزارشات</span>
          </SidebarItem>
          <SidebarItem href="/panel/wallet">
            <BiWalletAlt size={22} />
            <span>کیف پول من</span>
          </SidebarItem>
          <SidebarItem href="/panel/news">
            <BiBell size={22} />
            <span>اطلاعیه ها</span>
          </SidebarItem>
          <SidebarItem href="/panel/blog">
            <BiSpreadsheet size={22} />
            <span>بــلاگ</span>
          </SidebarItem>
          <SidebarItem href="/panel/support">
            <BiHeadphone size={22} />
            <span>پشتیبــانی</span>
          </SidebarItem>
        </div>
      </div>
      <Button>خـــروج</Button>
    </div>
  );
}
