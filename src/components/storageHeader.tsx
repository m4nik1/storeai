import { Search } from "lucide-react";
import { Input } from "./ui/input";
import ThemeToggle from "./themeToggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function StorageHeader() {
  return (
    <header className="flex h-16 shrink-0 items-center gap-2 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4">
      <div className="flex items-center gap-4 flex-1">
        {/* <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink
                href="#"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {title}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-muted-foreground" />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-sm font-semibold text-foreground">{breadcrumb}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb> */}
      </div>

      <div className="flex items-center gap-2">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-6 text-muted-foreground" />
          <Input
            placeholder="Search In storage with AI"
            className="pl-10 w-80 rounded-full bg-background border-border shadow-sm focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-blue-500 transition-all duration-200"
          />
        </div>

        <div className="flex items-center gap-1 border border-border rounded-md">
          {/* <Button
            variant={viewMode === "grid" ? "default" : "ghost"}
            size="sm"
            onClick={() => setViewMode("grid")}
          >
            <Grid3X3 className="w-4 h-4" />
          </Button>
          <Button
            variant={viewMode === "list" ? "default" : "ghost"}
            size="sm"
            onClick={() => setViewMode("list")}
          >
            <List className="w-4 h-4" />
          </Button> */}
        </div>

        <ThemeToggle />

        <Avatar className="w-8 h-8">
          <AvatarImage />
          <AvatarFallback>MS</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}

export default StorageHeader;
