import * as react from "react";
import { Sidebar, SidebarProvider, SidebarHeader } from "./ui/sidebar";

function LeftNavigation() {
  return (
    <SidebarProvider>
      <div>
        <Sidebar>
          <SidebarHeader className="flex items-center pt-5 gap-2">
            <span className="font-bold text-xl">StoreAI</span>
          </SidebarHeader>
        </Sidebar>
      </div>
    </SidebarProvider>
  );
}

export default LeftNavigation;
