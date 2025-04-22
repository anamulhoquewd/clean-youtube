import { Heart, ListMinus, RotateCcw } from "lucide-react";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";

export function NavMain() {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Platform</SidebarGroupLabel>
      <SidebarMenu>
        <SidebarMenuItem>
          <Link href="/playlists">
            <SidebarMenuButton tooltip="Playlists" className="cursor-pointer">
              <ListMinus />
              <span>Playlists</span>
            </SidebarMenuButton>
          </Link>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <Link href="/favorites">
            <SidebarMenuButton tooltip="Favorites" className="cursor-pointer">
              <Heart />
              <span>Favorites</span>
            </SidebarMenuButton>
          </Link>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <Link href="/recants">
            <SidebarMenuButton tooltip="Recants" className="cursor-pointer">
              <RotateCcw />
              <span>Recants</span>
            </SidebarMenuButton>
          </Link>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
  );
}
