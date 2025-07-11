"use client";

import { useRef } from "react";
import { Upload } from "lucide-react";
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenuButton,
  SidebarRail,
} from "./ui/sidebar";
import { Button } from "./ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import UploadButton from "./fileUpload";

function LeftNavigation() {
  const pathname = usePathname();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileClick = () => {
    fileInputRef.current?.click();
  };

  const handleFile = async (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Handling file: ", event.target.files?.[0]);

    const file: file = event.target.files?.[0];

    const formData = new FormData();

    formData.append("file", file);

    // Send Api call to backend
    const response = await fetch("http://localhost:8080/upload", {
      method: "POST",
      body: event.target.files?.[0],
    });

    console.log(response);
  };

  return (
    <Sidebar>
      <SidebarHeader className="flex items-center pt-5 gap-2">
        <Link href="/files" className="font-bold text-xl">
          StoreAI
        </Link>
      </SidebarHeader>
      <SidebarContent className="px-4 pt-6">
        <div className="space-y-6">
          <Button
            onClick={handleFileClick}
            className="w-full h-10 rounded-lg bg-gradient-to-r cursor-pointer from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium shadow-md hover:shadow-lg transition-all duration-200"
          >
            <Upload className="w-4 h-4 mr-2" />
            Upload
          </Button>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFile}
            hidden
            multiple
          />
        </div>

        <div className="space-y-6">
          <Link href="/files" className="w-full">
            <SidebarMenuButton
              isActive={pathname == "/files"}
              className="group w-full flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 hover:bg-accent/50 hover:text-accent-foreground data-[active=true]:bg-primary/10 data-[active=true]:text-primary data-[active=true]:border data-[active=true]:border-primary/20 cursor-pointer"
            >
              My Files
            </SidebarMenuButton>
          </Link>
        </div>
        <div className="space-y-6">
          <Link href="/settings" className="w-full">
            <SidebarMenuButton
              isActive={pathname == "/settings"}
              className="group w-full flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 hover:bg-accent/50 hover:text-accent-foreground data-[active=true]:bg-primary/10 data-[active=true]:text-primary data-[active=true]:border data-[active=true]:border-primary/20 cursor-pointer"
            >
              Settings
            </SidebarMenuButton>
          </Link>
        </div>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}

export default LeftNavigation;
