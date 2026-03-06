
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
    <nav className="fixed top-2 left-0 right-0 z-50 transition-all duration-300 flex justify-center pointer-events-none px-4">
      <div 
        className={cn(
          "pointer-events-auto transition-all duration-300 ease-out flex items-center justify-between px-4 md:px-8",
          "glass-navbar",
          isScrolled 
            ? "w-full md:w-[90%] lg:w-[65%] h-16 rounded-full py-1 shadow-2xl border-primary/20" 
            : "w-full md:w-[95%] lg:w-[85%] h-20 rounded-full py-2 border-white/40"
        )}
      >
        <NextLink href="/" className="flex items-center group active:scale-95 transition-transform">
          <div className={cn(
            "relative bg-white rounded-full p-0.5 shadow-xl transition-all duration-300 overflow-hidden shrink-0 border-2 border-primary/10 group-hover:border-primary",
            isScrolled ? "w-11 h-11" : "w-14 h-14"
          )}>
            <Image
              src="https://i.postimg.cc/52gjwkTC/download-(3).jpg"
              alt="School Logo"
              fill
              className="object-contain rounded-full group-hover:scale-110 transition-transform duration-300"
            />
          </div>
        </NextLink>

        <div className="flex flex-col items-center text-center px-4 overflow-hidden flex-1">
          <h1 className={cn(
            "font-headline font-black text-primary leading-none tracking-tight transition-all duration-300 whitespace-nowrap uppercase",
            isScrolled ? "text-sm md:text-base" : "text-base md:text-xl"
          )}>
            GABURA G.L.M <span className="text-accent">SECONDARY SCHOOL</span>
          </h1>
          <p className={cn(
            "uppercase tracking-[0.15em] text-primary font-black transition-all duration-300 opacity-90",
            isScrolled ? "text-[7px] mt-1" : "text-[9px] mt-1.5"
          )}>
            সুশিক্ষাই আমাদের অঙ্গীকার
          </p>
        </div>

        <div className="flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className={cn(
              "flex items-center justify-center bg-primary text-white shadow-lg rounded-full hover:bg-accent transition-all duration-200 active:scale-90",
              isScrolled ? "w-10 h-10" : "w-12 h-12"
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
            "absolute inset-0 bg-primary/20 backdrop-blur-md transition-opacity duration-300",
            isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0"
          )}
          onClick={() => setIsMobileMenuOpen(false)} 
        />
        
        <div className={cn(
          "absolute top-4 right-4 bottom-4 w-[90%] max-w-sm bg-white rounded-[2.5rem] shadow-2xl transition-all duration-300 ease-out flex flex-col pointer-events-auto overflow-hidden border border-primary/10",
          isMobileMenuOpen ? "translate-x-0 scale-100" : "translate-x-[110%] scale-95"
        )}>
          <div className="p-6 border-b flex items-center justify-between bg-primary/5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 relative bg-white rounded-full p-1 shadow-md border border-primary/10">
                <Image src="https://i.postimg.cc/52gjwkTC/download-(3).jpg" alt="Logo" fill className="object-contain" />
              </div>
              <div>
                <h2 className="font-headline font-black text-primary text-sm leading-tight uppercase">GGLMSS Navigation</h2>
                <p className="text-[10px] uppercase font-black tracking-widest text-accent">Platform Menu</p>
              </div>
            </div>
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md text-primary hover:text-accent transition-colors active:scale-90"
            >
              <X size={20} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 scrollbar-hide space-y-6">
            <div className="space-y-1">
              <p className="px-4 text-[10px] font-black uppercase text-primary/40 tracking-[0.2em] mb-2">Explore Pages</p>
              <div className="grid grid-cols-1 gap-1">
                {navLinks.map((link) => (
                  <DrawerLink key={link.title} href={link.href} icon={link.icon} onClick={() => setIsMobileMenuOpen(false)}>
                    {link.title}
                  </DrawerLink>
                ))}
              </div>
            </div>

            <div className="space-y-1">
              <p className="px-4 text-[10px] font-black uppercase text-primary/40 tracking-[0.2em] mb-2">About Our Institution</p>
              <div className="grid grid-cols-1 gap-1">
                {aboutLinks.map((link) => (
                  <DrawerLink key={link.title} href={link.href} icon={link.icon} onClick={() => setIsMobileMenuOpen(false)}>
                    {link.title}
                  </DrawerLink>
                ))}
              </div>
            </div>
          </div>

          <div className="p-6 space-y-3 bg-primary/5">
            <NextLink href="/auth/portal" onClick={() => setIsMobileMenuOpen(false)} className="block">
              <Button className="w-full h-14 rounded-2xl bg-primary text-white font-black shadow-xl hover:bg-accent transition-all text-base gap-2 active:scale-[0.98]">
                Portal Login <ArrowRight size={20} />
              </Button>
            </NextLink>
            <p className="text-center text-[10px] text-primary/60 uppercase tracking-widest font-black">
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
      className="flex items-center justify-between px-4 py-3.5 rounded-2xl text-primary font-black transition-all hover:bg-primary/10 group active:scale-[0.98]"
    >
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 bg-white shadow-sm border border-primary/5 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
          <Icon size={20} />
        </div>
        <span className="text-base uppercase tracking-tight">{children}</span>
      </div>
      <ChevronRight size={18} className="text-primary/20 group-hover:text-primary group-hover:translate-x-1 transition-all" />
    </NextLink>
  );
}
