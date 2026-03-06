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
  History,
  UserRound,
  MessageSquare,
  Star,
  ChevronRight,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    // Initialize state on mount in case user is already scrolled
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { title: "Home", href: "/", icon: Home },
    { title: "Notice Board", href: "/notices", icon: Bell },
    { title: "SSC Batches", href: "/ssc-batches", icon: Trophy },
    { title: "Gallery", href: "/gallery", icon: ImageIcon },
    { title: "SSC Result", href: "/ssc-results", icon: FileCheck },
    { title: "Library", href: "/library", icon: Library },
    { title: "Contact", href: "/contact", icon: Phone },
  ];

  const aboutLinks = [
    { title: "Our History", href: "/about/history", icon: History },
    { title: "Administration", href: "/about/head-teachers", icon: UserRound },
    { title: "Principal Message", href: "/about/principal", icon: MessageSquare },
    { title: "Chairman Message", href: "/about/chairman", icon: Star },
  ];

  return (
    <nav className="fixed top-2 left-0 right-0 z-50 transition-all duration-300 flex justify-center pointer-events-none">
      <div 
        className={cn(
          "pointer-events-auto transition-all duration-300 ease-out flex items-center justify-between px-4 md:px-8",
          "glass-navbar",
          isScrolled 
            ? "w-[95%] md:w-[85%] lg:w-[60%] h-14 rounded-full py-1" 
            : "w-[98%] md:w-[92%] lg:w-[80%] h-18 rounded-full py-2"
        )}
      >
        <NextLink href="/" className="flex items-center group active:scale-95 transition-transform">
          <div className={cn(
            "relative bg-white rounded-full p-1 shadow-md transition-all duration-300 overflow-hidden shrink-0",
            isScrolled ? "w-9 h-9" : "w-11 h-11"
          )}>
            <Image
              src="https://i.postimg.cc/52gjwkTC/download-(3).jpg"
              alt="School Logo"
              fill
              className="object-contain p-1 rounded-full group-hover:scale-110 transition-transform duration-300"
            />
          </div>
        </NextLink>

        <div className="flex flex-col items-center text-center px-4 overflow-hidden">
          <h1 className={cn(
            "font-headline font-black text-primary leading-none tracking-tight transition-all duration-300 whitespace-nowrap",
            isScrolled ? "text-xs md:text-sm" : "text-sm md:text-lg"
          )}>
            GABURA G.L.M <span className="text-accent">SECONDARY SCHOOL</span>
          </h1>
          <p className={cn(
            "uppercase tracking-[0.2em] text-muted-foreground font-bold transition-all duration-300",
            isScrolled ? "text-[6px] mt-0.5" : "text-[8px] mt-1"
          )}>
            সুশিক্ষাই আমাদের অঙ্গীকার
          </p>
        </div>

        <div className="flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className={cn(
              "flex items-center justify-center bg-white/50 shadow-sm border border-white/40 rounded-full hover:bg-accent hover:text-white transition-all duration-200 active:scale-90",
              isScrolled ? "w-9 h-9" : "w-11 h-11"
            )}
          >
            <LayoutGrid className={cn("transition-all", isScrolled ? "w-5 h-5" : "w-6 h-6")} />
          </button>
        </div>
      </div>

      <div className={cn(
        "fixed inset-0 z-[60] transition-all duration-300 pointer-events-none",
        isMobileMenuOpen ? "opacity-100" : "opacity-0"
      )}>
        <div 
          className={cn(
            "absolute inset-0 bg-primary/10 backdrop-blur-md transition-opacity duration-300",
            isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0"
          )}
          onClick={() => setIsMobileMenuOpen(false)} 
        />
        
        <div className={cn(
          "absolute top-4 right-4 bottom-4 w-[90%] max-w-sm bg-white/95 backdrop-blur-xl rounded-[2.5rem] shadow-2xl transition-all duration-300 ease-out flex flex-col pointer-events-auto overflow-hidden border border-white/20",
          isMobileMenuOpen ? "translate-x-0 scale-100" : "translate-x-[110%] scale-95"
        )}>
          <div className="p-6 border-b flex items-center justify-between bg-secondary/5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 relative bg-white rounded-full p-1.5 shadow-sm">
                <Image src="https://i.postimg.cc/52gjwkTC/download-(3).jpg" alt="Logo" fill className="object-contain" />
              </div>
              <div>
                <h2 className="font-headline font-bold text-primary text-sm leading-tight">Navigation</h2>
                <p className="text-[10px] uppercase font-black tracking-widest text-accent">GGLMSS Platform</p>
              </div>
            </div>
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-md text-muted-foreground hover:text-primary transition-colors active:scale-90"
            >
              <X size={18} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 scrollbar-hide space-y-6">
            <div className="space-y-1">
              <p className="px-4 text-[9px] font-black uppercase text-muted-foreground tracking-[0.2em] mb-2">Experience</p>
              <div className="grid grid-cols-1 gap-1">
                {navLinks.map((link) => (
                  <DrawerLink key={link.title} href={link.href} icon={link.icon} onClick={() => setIsMobileMenuOpen(false)}>
                    {link.title}
                  </DrawerLink>
                ))}
              </div>
            </div>

            <div className="space-y-1">
              <p className="px-4 text-[9px] font-black uppercase text-muted-foreground tracking-[0.2em] mb-2">About School</p>
              <div className="grid grid-cols-1 gap-1">
                {aboutLinks.map((link) => (
                  <DrawerLink key={link.title} href={link.href} icon={link.icon} onClick={() => setIsMobileMenuOpen(false)}>
                    {link.title}
                  </DrawerLink>
                ))}
              </div>
            </div>
          </div>

          <div className="p-6 space-y-3">
            <NextLink href="/auth/portal" onClick={() => setIsMobileMenuOpen(false)} className="block">
              <Button className="w-full h-12 rounded-[1.5rem] bg-gradient-to-r from-primary to-purple-600 text-white font-black shadow-lg hover:translate-y-[-2px] transition-all text-base gap-2 active:translate-y-0">
                Portal Login <ArrowRight size={18} />
              </Button>
            </NextLink>
            <p className="text-center text-[9px] opacity-50 uppercase tracking-widest font-bold">
              © {new Date().getFullYear()} Sundarbans Scholars
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
      className="flex items-center justify-between px-4 py-3 rounded-2xl text-primary font-bold transition-all hover:bg-secondary/20 group active:scale-[0.98]"
    >
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 glass-card !rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-200">
          <Icon size={18} />
        </div>
        <span className="text-base">{children}</span>
      </div>
      <ChevronRight size={16} className="text-muted-foreground/30 group-hover:text-accent group-hover:translate-x-1 transition-all" />
    </NextLink>
  );
}