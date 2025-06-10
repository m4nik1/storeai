"use client";

import { Upload } from "lucide-react";
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarRail,
} from "./ui/sidebar";
import { Button } from "./ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

function LeftNavigation() {
  const pathname = usePathname();
  return (
    <Sidebar>
      <SidebarHeader className="flex items-center pt-5 gap-2">
        <span className="font-bold text-xl">StoreAI</span>
      </SidebarHeader>
      <SidebarContent className="px-4 pt-6">
        <div className="space-y-6">
          <Button className="w-full h-10 rounded-lg bg-gradient-to-r cursor-pointer from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium shadow-md hover:shadow-lg transition-all duration-200">
            <Upload className="w-4 h-4 mr-2" />
            Upload
          </Button>
          <input type="file cursor-pointer" multiple hidden />
        </div>
        <SidebarMenu className="flex items-center gap-3 rounded-lg">
          <Link href="/files" className="w-full">
            <SidebarMenuButton
              isActive={pathname == "/files"}
              className="group w-full flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 hover:bg-accent/50 hover:text-accent-foreground data-[active=true]:bg-primary/10 data-[active=true]:text-primary data-[active=true]:border data-[active=true]:border-primary/20 cursor-pointer"
            >
              My Files
            </SidebarMenuButton>
          </Link>
        </SidebarMenu>
        <SidebarMenu className="flex items-center gap-3 rounded-lg">
          <Link href="/settings" className="w-full">
            <SidebarMenuButton
              isActive={pathname == "/settings"}
              className="group w-full flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 hover:bg-accent/50 hover:text-accent-foreground data-[active=true]:bg-primary/10 data-[active=true]:text-primary data-[active=true]:border data-[active=true]:border-primary/20 cursor-pointer"
            >
              Settings
            </SidebarMenuButton>
          </Link>
        </SidebarMenu>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}

export default LeftNavigation;
