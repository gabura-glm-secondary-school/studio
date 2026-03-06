
"use client";

import { useState, useEffect } from "react";
import NextLink from "next/link";
import Image from "next/image";
import { 
  X, 
  LayoutGrid,
  Home, 
  Bell, 
  Trophy, 
  Image as ImageIcon, 
  Library, 
  FileCheck, 
  Phone, 
  ChevronRight,
  ArrowRight,
  ShieldCheck,
  Users,
  Calendar,
  Star,
  ShieldAlert
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useUser } from "@/firebase";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user } = useUser();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Strict Admin Check based on user instructions and Firestore rules
  const canAccessAdmin = user && !user.disabled && (
    user.role === 'admin' || 
    user.role === 'superadmin' || 
    user.adminApproved === true
  );

  const navLinks = [
    { title: "Home", href: "/", icon: Home },
    { title: "About Us", href: "/about", icon: Users },
    { title: "Notice Board", href: "/notices", icon: Bell },
    { title: "SSC Batches", href: "/ssc-batches", icon: Trophy },
    { title: "Events", href: "/events", icon: Calendar },
    { title: "Leaderboard", href: "/leaderboard", icon: Star },
    { title: "Gallery", href: "/gallery", icon: ImageIcon },
    { title: "SSC Result", href: "/ssc-results", icon: FileCheck },
    { title: "Library", href: "/library", icon: Library },
    { title: "Complaint Box", href: "/complaints", icon: ShieldAlert },
    { title: "Contact", href: "/contact", icon: Phone },
  ];

  const logoUrl = "https://i.postimg.cc/rwjdJqQK/1000144744-removebg-preview-(1).png";

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 transition-all duration-500 flex justify-center pointer-events-none px-4">
      <div 
        className={cn(
          "pointer-events-auto transition-all duration-500 ease-out flex items-center justify-between px-4 md:px-8",
          "glass-navbar !bg-white/95",
          isScrolled 
            ? "w-full md:w-[90%] lg:w-[80%] h-16 rounded-full py-1 shadow-2xl border-primary/30" 
            : "w-full md:w-[95%] lg:w-[90%] h-20 rounded-full py-2 border-white/60 shadow-xl"
        )}
      >
        <NextLink href="/" className="flex items-center gap-3 md:gap-4 group active:scale-95 transition-transform shrink min-w-0">
          <div className={cn(
            "relative bg-white rounded-full p-1 shadow-md transition-all duration-500 overflow-hidden shrink-0 border-2 border-primary/10 group-hover:border-primary",
            isScrolled ? "w-10 h-10" : "w-12 h-12 md:w-14 md:h-14"
          )}>
            <Image
              src={logoUrl}
              alt="School Logo"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex flex-col justify-center overflow-hidden">
            <h1 className={cn(
              "font-headline font-black text-primary leading-tight tracking-tighter transition-all duration-500 uppercase truncate",
              isScrolled ? "text-[10px] md:text-base" : "text-[12px] md:text-xl lg:text-2xl"
            )}>
              GABURA G.L.M <span className="text-accent">SECONDARY SCHOOL</span>
            </h1>
            <p className={cn(
              "uppercase tracking-[0.1em] text-primary/80 font-bold transition-all duration-500 truncate mt-0.5",
              isScrolled ? "text-[6px] md:text-[8px]" : "text-[7px] md:text-[10px]"
            )}>
              সুশিক্ষাই আমাদের অঙ্গীকার
            </p>
          </div>
        </NextLink>

        <div className="flex items-center gap-2 shrink-0 pl-2">
          {canAccessAdmin && (
            <NextLink href="/admin" className="hidden md:block">
              <Button size="sm" className="rounded-full bg-accent text-primary font-black uppercase text-[10px] tracking-widest gap-2 shadow-lg hover:bg-accent/90 px-4 h-9">
                <ShieldCheck size={14} /> Admin
              </Button>
            </NextLink>
          )}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className={cn(
              "flex items-center justify-center bg-primary text-white shadow-lg rounded-full hover:bg-accent transition-all duration-300 active:scale-75 group",
              isScrolled ? "w-9 h-9" : "w-11 h-11 md:w-12 md:h-12"
            )}
          >
            <LayoutGrid className={cn("transition-all group-hover:rotate-90", isScrolled ? "w-4 h-4" : "w-5 h-5 md:w-6 md:h-6")} />
          </button>
        </div>
      </div>

      {/* Side Drawer Menu */}
      <div className={cn(
        "fixed inset-0 z-[60] transition-all duration-500 pointer-events-none",
        isMobileMenuOpen ? "opacity-100" : "opacity-0"
      )}>
        <div 
          className={cn(
            "absolute inset-0 bg-primary/30 backdrop-blur-xl transition-opacity duration-500",
            isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0"
          )}
          onClick={() => setIsMobileMenuOpen(false)} 
        />
        
        <div className={cn(
          "absolute top-4 right-4 bottom-4 w-[92%] max-w-md bg-white rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] transition-all duration-500 ease-out flex flex-col pointer-events-auto overflow-hidden border border-primary/10",
          isMobileMenuOpen ? "translate-x-0 scale-100" : "translate-x-[110%] scale-90"
        )}>
          <div className="p-6 border-b flex items-center justify-between bg-primary/5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 relative bg-white rounded-xl p-1 shadow-md border border-primary/10">
                <Image src={logoUrl} alt="Logo" fill className="object-contain" />
              </div>
              <div>
                <h2 className="font-headline font-black text-primary text-sm leading-tight uppercase">GGLMSS Portal</h2>
                <p className="text-[9px] uppercase font-black tracking-[0.2em] text-accent">Menu Navigation</p>
              </div>
            </div>
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md text-primary hover:text-accent transition-all active:scale-90 border border-primary/5"
            >
              <X size={20} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 scrollbar-hide space-y-6">
            {canAccessAdmin && (
              <NextLink href="/admin" onClick={() => setIsMobileMenuOpen(false)}>
                <div className="mx-2 mb-4 p-4 rounded-2xl bg-accent text-primary font-black flex items-center justify-between shadow-lg active:scale-95 transition-transform">
                  <span className="uppercase text-[10px] tracking-[0.2em]">Open Admin Control</span>
                  <ShieldCheck size={18} />
                </div>
              </NextLink>
            )}
            <div className="space-y-2">
              <p className="px-4 text-[9px] font-black uppercase text-primary/50 tracking-[0.3em] mb-2">Platform Pages</p>
              <div className="grid grid-cols-1 gap-1">
                {navLinks.map((link) => (
                  <DrawerLink key={link.title} href={link.href} icon={link.icon} onClick={() => setIsMobileMenuOpen(false)}>
                    {link.title}
                  </DrawerLink>
                ))}
              </div>
            </div>
          </div>

          <div className="p-6 space-y-4 bg-primary/5">
            <NextLink href="/auth/portal" onClick={() => setIsMobileMenuOpen(false)} className="block">
              <Button className="w-full h-14 rounded-2xl bg-primary text-white font-black shadow-lg hover:bg-accent transition-all text-base gap-3 active:scale-[0.95]">
                {user ? "Dashboard" : "Portal Login"} <ArrowRight size={20} />
              </Button>
            </NextLink>
            <p className="text-center text-[9px] text-primary font-black uppercase tracking-[0.2em]">
              © {new Date().getFullYear()} Gabura G.L.M Secondary School
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
}

function DrawerLink({ href, icon: Icon, children, onClick }: any) {
  return (
    <NextLink 
      href={href} 
      onClick={onClick}
      className="flex items-center justify-between px-4 py-3 rounded-2xl text-primary font-black transition-all hover:bg-primary/10 group active:scale-[0.97] border border-transparent hover:border-primary/5"
    >
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 bg-white shadow-sm border border-primary/5 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
          <Icon size={20} />
        </div>
        <span className="text-base font-black uppercase tracking-tight">{children}</span>
      </div>
      <ChevronRight size={18} className="text-primary/20 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
    </NextLink>
  );
}
