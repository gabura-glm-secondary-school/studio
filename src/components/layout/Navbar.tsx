
"use client";

import { useState, useEffect } from "react";
import NextLink from "next/link";
import Image from "next/image";
import { 
  Menu, 
  X, 
  LayoutGrid,
  Home, 
  Info, 
  Bell, 
  Trophy, 
  Calendar, 
  Image as ImageIcon, 
  Library, 
  FileCheck, 
  Phone, 
  LogIn,
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
    window.addEventListener("scroll", handleScroll);
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
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 flex justify-center pointer-events-none pt-4 lg:pt-6">
      {/* Luxury Capsule Container */}
      <div 
        className={cn(
          "pointer-events-auto transition-all duration-500 ease-in-out flex items-center justify-between px-4 md:px-6",
          "bg-white/70 backdrop-blur-xl border border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.08)]",
          isScrolled 
            ? "w-[95%] md:w-[85%] lg:w-[70%] h-16 rounded-full py-2" 
            : "w-[98%] md:w-[92%] lg:w-[85%] h-20 rounded-[2.5rem] py-4"
        )}
      >
        {/* Left Side: Circular Logo */}
        <NextLink href="/" className="flex items-center gap-3 group">
          <div className={cn(
            "relative bg-white rounded-full p-1 shadow-md transition-all duration-500 overflow-hidden shrink-0",
            isScrolled ? "w-10 h-10 ring-2 ring-accent/20" : "w-12 h-12 ring-4 ring-white/30"
          )}>
            <Image
              src="https://i.postimg.cc/52gjwkTC/download-(3).jpg"
              alt="School Logo"
              fill
              className="object-contain p-1 rounded-full group-hover:scale-110 transition-transform duration-500"
            />
          </div>
        </NextLink>

        {/* Center: School Branding */}
        <div className="flex flex-col items-center text-center px-4 overflow-hidden">
          <h1 className={cn(
            "font-headline font-black text-primary leading-none tracking-tight transition-all duration-500 whitespace-nowrap",
            isScrolled ? "text-sm md:text-lg" : "text-lg md:text-2xl"
          )}>
            GGLMSS <span className="text-accent">GABURA</span>
          </h1>
          <p className={cn(
            "uppercase tracking-[0.2em] text-muted-foreground font-bold transition-all duration-500",
            isScrolled ? "text-[7px] mt-0.5" : "text-[9px] mt-1"
          )}>
            সুশিক্ষাই আমাদের অঙ্গীকার
          </p>
        </div>

        {/* Right Side: Action Buttons */}
        <div className="flex items-center gap-2 md:gap-4">
          <NextLink href="/auth/portal" className="hidden md:block">
            <Button className={cn(
              "rounded-full font-black bg-primary text-white shadow-lg hover:shadow-accent/40 hover:scale-105 transition-all h-9 md:h-10 px-6 text-xs",
              isScrolled ? "scale-90" : "scale-100"
            )}>
              PORTAL
            </Button>
          </NextLink>

          {/* Premium Floating Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className={cn(
              "flex items-center justify-center bg-white shadow-[0_4px_15px_rgba(0,0,0,0.05)] border border-border/50 rounded-2xl md:rounded-full hover:bg-accent transition-all duration-300",
              isScrolled ? "w-10 h-10 md:w-11 md:h-11" : "w-12 h-12"
            )}
          >
            <LayoutGrid className={cn("text-primary transition-all", isScrolled ? "w-5 h-5" : "w-6 h-6")} />
          </button>
        </div>
      </div>

      {/* Modern Slide-in Menu (Drawer) */}
      <div className={cn(
        "fixed inset-0 z-[60] transition-all duration-700 pointer-events-none",
        isMobileMenuOpen ? "opacity-100" : "opacity-0"
      )}>
        <div 
          className={cn(
            "absolute inset-0 bg-primary/20 backdrop-blur-md transition-opacity duration-700",
            isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0"
          )}
          onClick={() => setIsMobileMenuOpen(false)} 
        />
        
        <div className={cn(
          "absolute top-4 right-4 bottom-4 w-[90%] max-w-sm bg-white rounded-[3rem] shadow-2xl transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] flex flex-col pointer-events-auto overflow-hidden border border-white/20",
          isMobileMenuOpen ? "translate-x-0 scale-100" : "translate-x-[110%] scale-95"
        )}>
          {/* Menu Header */}
          <div className="p-8 border-b flex items-center justify-between bg-secondary/10">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 relative bg-white rounded-full p-1.5 shadow-sm">
                <Image src="https://i.postimg.cc/52gjwkTC/download-(3).jpg" alt="Logo" fill className="object-contain" />
              </div>
              <div>
                <h2 className="font-headline font-bold text-primary">Navigation</h2>
                <p className="text-[10px] uppercase font-black tracking-widest text-accent">GGLMSS Platform</p>
              </div>
            </div>
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md text-muted-foreground hover:text-primary transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Menu Links */}
          <div className="flex-1 overflow-y-auto p-6 scrollbar-hide space-y-8">
            <div className="space-y-2">
              <p className="px-4 text-[10px] font-black uppercase text-muted-foreground tracking-[0.2em] mb-4">Main Experience</p>
              <div className="grid grid-cols-1 gap-2">
                {navLinks.map((link) => (
                  <DrawerLink key={link.title} href={link.href} icon={link.icon} onClick={() => setIsMobileMenuOpen(false)}>
                    {link.title}
                  </DrawerLink>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <p className="px-4 text-[10px] font-black uppercase text-muted-foreground tracking-[0.2em] mb-4">About the School</p>
              <div className="grid grid-cols-1 gap-2">
                {aboutLinks.map((link) => (
                  <DrawerLink key={link.title} href={link.href} icon={link.icon} onClick={() => setIsMobileMenuOpen(false)}>
                    {link.title}
                  </DrawerLink>
                ))}
              </div>
            </div>
          </div>

          {/* Menu Footer */}
          <div className="p-8 bg-primary text-white space-y-4">
            <NextLink href="/auth/portal" onClick={() => setIsMobileMenuOpen(false)} className="block">
              <Button className="w-full h-14 rounded-2xl bg-accent text-primary font-black shadow-xl hover:bg-white transition-all text-lg gap-2">
                Sign In to Platform <ArrowRight size={20} />
              </Button>
            </NextLink>
            <p className="text-center text-[10px] opacity-50 uppercase tracking-widest font-bold">
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
      className="flex items-center justify-between px-4 py-4 rounded-2xl text-primary font-bold transition-all hover:bg-secondary/50 group active:scale-95"
    >
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-primary transition-all duration-300">
          <Icon size={20} />
        </div>
        <span className="text-lg">{children}</span>
      </div>
      <ChevronRight size={18} className="text-muted-foreground/30 group-hover:text-accent group-hover:translate-x-1 transition-all" />
    </NextLink>
  );
}
