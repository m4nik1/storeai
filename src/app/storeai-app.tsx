"use client";

import LeftNavigation from "@/components/dashSidebar";
import StorageHeader from "@/components/storageHeader";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

interface ApplicationProps {
  children: React.ReactNode;
}

function StoreAiApp({ children }: ApplicationProps) {
  return (
    <SidebarProvider>
      <div className="flex h-screen w-full bg-background">
        <LeftNavigation />

        <SidebarInset className="flex-1">
          <StorageHeader />
          <main className="flex-1 p-6">{children}</main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}

export default StoreAiApp;
