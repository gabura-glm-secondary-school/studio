
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Users,
  GraduationCap,
  Briefcase,
  UserRound,
  ShieldCheck,
  Bell,
  BookOpen,
  Calendar,
  ClipboardCheck,
  Star,
  Layers,
  Settings,
  ShieldAlert,
  Download,
  ChevronLeft,
  Megaphone,
  Mail
} from "lucide-react";
import Image from "next/image";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const menuItems = [
  { label: "Dashboard", icon: LayoutDashboard, href: "/admin" },
  { 
    label: "Users", 
    icon: Users,
    items: [
      { label: "Students", href: "/admin/users/students", icon: GraduationCap },
      { label: "Teachers", href: "/admin/users/teachers", icon: Briefcase },
      { label: "Staff", href: "/admin/users/staff", icon: UserRound },
      { label: "External", href: "/admin/users/external", icon: Mail },
    ]
  },
  { label: "Approvals", icon: ShieldCheck, href: "/admin/approvals" },
  { 
    label: "Academics", 
    icon: Layers,
    items: [
      { label: "Notices", href: "/admin/academics/notices", icon: Bell },
      { label: "Attendance", href: "/admin/academics/attendance", icon: ClipboardCheck },
      { label: "Ratings", href: "/admin/academics/ratings", icon: Star },
      { label: "SSC Batches", href: "/admin/academics/ssc-batches", icon: GraduationCap },
    ]
  },
  { label: "Calendar & Events", icon: Calendar, href: "/admin/events" },
  { label: "Library", icon: BookOpen, href: "/admin/library" },
  { label: "Complaints", icon: ShieldAlert, href: "/admin/complaints" },
  { label: "Security Logs", icon: ShieldCheck, href: "/admin/security" },
  { label: "Website Settings", icon: Settings, href: "/admin/website" },
  { label: "Data Export", icon: Download, href: "/admin/exports" },
];

export function AdminSidebar({ isOpen, setIsOpen }: SidebarProps) {
  const pathname = usePathname();
  const logoUrl = "https://i.postimg.cc/rwjdJqQK/1000144744-removebg-preview-(1).png";

  return (
    <aside className={cn(
      "fixed lg:relative z-50 h-screen transition-all duration-500 ease-in-out bg-white shadow-[20px_0_50px_-15px_rgba(0,0,0,0.05)]",
      isOpen 
        ? "w-72 translate-x-0 border-r" 
        : "w-0 -translate-x-full border-none"
    )}>
      <div className={cn("flex flex-col h-full", !isOpen && "hidden")}>
        {/* Logo Section */}
        <div className="p-6 flex items-center justify-between border-b bg-primary/5">
          <div className="flex items-center gap-3 overflow-hidden">
            <div className="w-10 h-10 relative shrink-0">
              <Image src={logoUrl} alt="Logo" fill className="object-contain" />
            </div>
            <div className="whitespace-nowrap">
              <h2 className="font-headline font-bold text-sm text-primary leading-tight">GGLMSS</h2>
              <p className="text-[10px] uppercase font-black tracking-tighter text-accent">Admin Control</p>
            </div>
          </div>
          <button 
            className="w-8 h-8 rounded-full bg-white border shadow-sm flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all active:scale-90" 
            onClick={() => setIsOpen(false)}
          >
            <ChevronLeft size={18} />
          </button>
        </div>

        {/* Nav Links */}
        <div className="flex-1 overflow-y-auto py-6 px-4 scrollbar-hide">
          <div className="space-y-1">
            {menuItems.map((item, idx) => (
              <div key={idx}>
                {item.items ? (
                  <div className="space-y-1 mb-4">
                    <p className="px-3 text-[10px] font-black uppercase text-muted-foreground/60 mb-2 tracking-[0.2em]">{item.label}</p>
                    {item.items.map((sub, sIdx) => (
                      <SidebarItem key={sIdx} item={sub} isActive={pathname === sub.href} />
                    ))}
                  </div>
                ) : (
                  <SidebarItem item={item} isActive={pathname === item.href} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Footer Info */}
        <div className="p-6 border-t bg-primary/5 text-center">
          <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Platform Version</p>
          <p className="text-xs font-black text-primary">v2.4.0-Stable</p>
        </div>
      </div>
    </aside>
  );
}

function SidebarItem({ item, isActive }: { item: any, isActive: boolean }) {
  return (
    <Link 
      href={item.href}
      className={cn(
        "flex items-center gap-3 px-4 py-3 rounded-2xl transition-all group mb-1",
        isActive 
          ? "bg-primary text-white shadow-lg shadow-primary/20 scale-[1.02]" 
          : "text-muted-foreground hover:bg-secondary/10 hover:text-primary"
      )}
    >
      <item.icon size={20} className={cn("shrink-0", isActive ? "text-accent" : "group-hover:text-primary")} />
      <span className="text-sm font-bold truncate">{item.label}</span>
    </Link>
  );
}
