import Logo from "@/components/ui/logo/logo";
import SidebarItem from "./sidebaritem";
import { Button } from "@/components/ui/button";

export default function SideBar() {
  return (
    <div className="h-full border-l p-0.5 flex flex-col justify-between">
      <div>
        <div className="p-6">
          <Logo />
        </div>
        <div className="flex flex-col">
          <SidebarItem href="/panel">
            <span>شـــارژ و بســته</span>
          </SidebarItem>
          <SidebarItem href="/panel/reports">
            <span>گـــزارشات</span>
          </SidebarItem>
          <SidebarItem href="/panel/reports">
            <span>کیف پول من</span>
          </SidebarItem>
          <SidebarItem href="/panel/reports">
            <span>اطلاعیه ها</span>
          </SidebarItem>
          <SidebarItem href="/panel/reports">
            <span>بــلاگ</span>
          </SidebarItem>
          <SidebarItem href="/panel/reports">
            <span>پشتیبــانی</span>
          </SidebarItem>
        </div>
      </div>
      <Button>خـــروج</Button>
    </div>
  );
}
