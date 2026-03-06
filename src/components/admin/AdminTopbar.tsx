
"use client";

import { useUser } from "@/firebase";
import { Search, Bell, Menu, UserCircle, LogOut } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getAuth, signOut } from "firebase/auth";

export function AdminTopbar({ setIsSidebarOpen }: { setIsSidebarOpen: () => void }) {
  const { user } = useUser();
  const auth = getAuth();

  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <header className="h-20 bg-white border-b sticky top-0 z-40 px-4 md:px-8 flex items-center justify-between">
      <div className="flex items-center gap-4 flex-1">
        <Button variant="ghost" size="icon" onClick={setIsSidebarOpen} className="lg:hidden">
          <Menu />
        </Button>
        <div className="relative max-w-md w-full hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
          <Input placeholder="Search students, teachers, or logs..." className="pl-10 h-11 bg-secondary/20 border-none rounded-xl" />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" className="relative rounded-full">
          <Bell size={20} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-accent rounded-full border-2 border-white"></span>
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="gap-3 px-2 rounded-full border border-transparent hover:border-border">
              <div className="text-right hidden sm:block">
                <p className="text-xs font-black text-primary leading-none mb-1">{user?.displayName || "Administrator"}</p>
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{user?.isSuperAdmin ? "Super Admin" : "Admin"}</p>
              </div>
              <UserCircle size={32} className="text-primary/20" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56 rounded-2xl p-2">
            <DropdownMenuLabel className="font-bold">My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="rounded-xl cursor-pointer">Profile Settings</DropdownMenuItem>
            <DropdownMenuItem className="rounded-xl cursor-pointer">Security</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="rounded-xl cursor-pointer text-destructive" onClick={handleSignOut}>
              <LogOut size={16} className="mr-2" /> Sign Out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
