import * as react from "react";
import {
  Sidebar,
  SidebarProvider,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
} from "./ui/sidebar";
import Link from "next/link";

function LeftNavigation() {
  return (
    <SidebarProvider>
      <div>
        <Sidebar>
          <SidebarHeader className="flex items-center pt-5 gap-2">
            <span className="font-bold text-xl">StoreAI</span>
          </SidebarHeader>
          <SidebarContent className="px-4">
            <SidebarGroup>
              <SidebarMenu className="flex items-center gap-3 rounded-lg">
                <SidebarMenuButton>
                  <Link href="/files">My Files</Link>
                </SidebarMenuButton>
              </SidebarMenu>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
      </div>
    </SidebarProvider>
  );
}

export default LeftNavigation;
