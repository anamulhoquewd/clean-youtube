import { AppSidebar } from "@/components/layout/app-sidebar";
import { ModeToggle } from "@/components/layout/theme-switcher";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { TvMinimalPlay } from "lucide-react";
import AddPlaylist from "../add-playlist";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider
      defaultOpen={false}
      style={{
        ["--sidebar-width" as string]: "14rem",
      }}
    >
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-14 shrink-0 items-center gap-2 ease-linear border-b sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <SidebarTrigger className="ml-3 md:hidden cursor-pointer" />
          <Separator
            orientation="vertical"
            className="data-[orientation=vertical]:h-4 md:hidden"
          />
          <div className="flex items-center gap-2 md:hidden">
            <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
              <TvMinimalPlay />
            </div>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-medium">Clean Youtube</span>
              <span className="truncate text-xs">
                Enjoy your favorite videos
              </span>
            </div>
          </div>
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4 md:hidden"
          />

          <div className="flex items-center gap-2 ml-auto mr-5">
            <AddPlaylist />
            <ModeToggle />
          </div>
        </header>
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
