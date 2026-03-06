
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
  ShieldCheck
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
    { title: "Notice Board", href: "/notices", icon: Bell },
    { title: "SSC Batches", href: "/ssc-batches", icon: Trophy },
    { title: "Gallery", href: "/gallery", icon: ImageIcon },
    { title: "SSC Result", href: "/ssc-results", icon: FileCheck },
    { title: "Library", href: "/library", icon: Library },
    { title: "Contact", href: "/contact", icon: Phone },
  ];

  const logoUrl = "https://i.postimg.cc/rwjdJqQK/1000144744-removebg-preview-(1).png";

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 transition-all duration-500 flex justify-center pointer-events-none px-4">
      <div 
        className={cn(
          "pointer-events-auto transition-all duration-500 ease-out flex items-center justify-between px-4 md:px-10",
          "glass-navbar !bg-white/95",
          isScrolled 
            ? "w-[94%] md:w-[90%] lg:w-[85%] h-16 rounded-full py-1 shadow-2xl border-primary/30" 
            : "w-[96%] md:w-[95%] lg:w-[92%] h-24 rounded-full py-2 border-white/60 shadow-xl"
        )}
      >
        <NextLink href="/" className="flex items-center gap-3 md:gap-6 group active:scale-95 transition-transform shrink min-w-0">
          <div className={cn(
            "relative bg-white rounded-full p-1 shadow-xl transition-all duration-500 overflow-hidden shrink-0 border-[3px] border-primary/20 group-hover:border-primary",
            isScrolled ? "w-10 h-10" : "w-14 h-14 md:w-20 md:h-20"
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
              isScrolled ? "text-[11px] md:text-xl" : "text-[13px] md:text-2xl lg:text-3xl"
            )}>
              GABURA G.L.M <span className="text-accent">SECONDARY SCHOOL</span>
            </h1>
            <p className={cn(
              "uppercase tracking-[0.15em] text-primary/90 font-bold transition-all duration-500 truncate mt-0.5",
              isScrolled ? "text-[7px] md:text-[9px]" : "text-[8px] md:text-[11px]"
            )}>
              সুশিক্ষাই আমাদের অঙ্গীকার
            </p>
          </div>
        </NextLink>

        <div className="flex items-center gap-3 shrink-0 pl-2">
          {canAccessAdmin && (
            <NextLink href="/admin" className="hidden md:block">
              <Button size="sm" className="rounded-full bg-accent text-primary font-black uppercase text-[10px] tracking-widest gap-2 shadow-lg hover:bg-accent/90 px-6 h-10">
                <ShieldCheck size={16} /> Admin
              </Button>
            </NextLink>
          )}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className={cn(
              "flex items-center justify-center bg-primary text-white shadow-2xl rounded-full hover:bg-accent transition-all duration-300 active:scale-75 group",
              isScrolled ? "w-10 h-10" : "w-12 h-12 md:w-16 md:h-16"
            )}
          >
            <LayoutGrid className={cn("transition-all group-hover:rotate-90", isScrolled ? "w-5 h-5" : "w-6 h-6 md:w-8 md:h-8")} />
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
          "absolute top-4 right-4 bottom-4 w-[92%] max-w-md bg-white rounded-[3rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] transition-all duration-500 ease-out flex flex-col pointer-events-auto overflow-hidden border border-primary/10",
          isMobileMenuOpen ? "translate-x-0 scale-100" : "translate-x-[110%] scale-90"
        )}>
          <div className="p-8 border-b flex items-center justify-between bg-primary/5">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 relative bg-white rounded-2xl p-1.5 shadow-xl border border-primary/10">
                <Image src={logoUrl} alt="Logo" fill className="object-contain" />
              </div>
              <div>
                <h2 className="font-headline font-black text-primary text-base leading-tight uppercase">GGLMSS Portal</h2>
                <p className="text-[10px] uppercase font-black tracking-[0.2em] text-accent">Menu Navigation</p>
              </div>
            </div>
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg text-primary hover:text-accent transition-all active:scale-90 border border-primary/5"
            >
              <X size={24} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 scrollbar-hide space-y-8">
            {canAccessAdmin && (
              <NextLink href="/admin" onClick={() => setIsMobileMenuOpen(false)}>
                <div className="mx-4 mb-4 p-4 rounded-2xl bg-accent text-primary font-black flex items-center justify-between shadow-xl active:scale-95 transition-transform">
                  <span className="uppercase text-xs tracking-[0.2em]">Open Admin Control</span>
                  <ShieldCheck size={20} />
                </div>
              </NextLink>
            )}
            <div className="space-y-3">
              <p className="px-4 text-[11px] font-black uppercase text-primary/50 tracking-[0.3em] mb-2">Platform Pages</p>
              <div className="grid grid-cols-1 gap-2">
                {navLinks.map((link) => (
                  <DrawerLink key={link.title} href={link.href} icon={link.icon} onClick={() => setIsMobileMenuOpen(false)}>
                    {link.title}
                  </DrawerLink>
                ))}
              </div>
            </div>
          </div>

          <div className="p-8 space-y-4 bg-primary/5">
            <NextLink href="/auth/portal" onClick={() => setIsMobileMenuOpen(false)} className="block">
              <Button className="w-full h-16 rounded-2xl bg-primary text-white font-black shadow-[0_15px_30px_-5px_rgba(124,58,237,0.4)] hover:bg-accent transition-all text-lg gap-3 active:scale-[0.95]">
                {user ? "Dashboard" : "Portal Login"} <ArrowRight size={22} />
              </Button>
            </NextLink>
            <p className="text-center text-[10px] text-primary font-black uppercase tracking-[0.2em]">
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
      className="flex items-center justify-between px-5 py-4 rounded-[1.5rem] text-primary font-black transition-all hover:bg-primary/10 group active:scale-[0.97] border border-transparent hover:border-primary/10"
    >
      <div className="flex items-center gap-5">
        <div className="w-12 h-12 bg-white shadow-md border border-primary/5 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
          <Icon size={24} />
        </div>
        <span className="text-lg font-black uppercase tracking-tight">{children}</span>
      </div>
      <ChevronRight size={20} className="text-primary/20 group-hover:text-primary group-hover:translate-x-2 transition-all duration-300" />
    </NextLink>
  );
}
