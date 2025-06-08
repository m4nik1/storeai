"use client";

import LeftNavigation from "@/components/dashSidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

function StoreAiApp() {
  return (
    <SidebarProvider>
      <div className="flex h-screen w-full bg-background">
        <LeftNavigation />

        <SidebarInset>
          {/* Insert Header/breadcrumbs here */}

          <main className="flex-1 p-6">
            <div className="mb-6">
              <p>This is bottom I guess?</p>
            </div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}

export default StoreAiApp;
