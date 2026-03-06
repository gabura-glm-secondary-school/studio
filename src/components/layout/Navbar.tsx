"use client";

import Link from "next/image";
import NextLink from "next/link";
import { useState, useEffect } from "react";
import { 
  Menu, 
  X, 
  ChevronDown, 
  Home, 
  Info, 
  Bell, 
  BookOpen, 
  Trophy, 
  Calendar, 
  Image as ImageIcon, 
  Users, 
  Library, 
  FileCheck, 
  Phone, 
  LogIn,
  History,
  UserRound,
  MessageSquare,
  ClipboardCheck,
  PlusCircle,
  Star,
  Layout
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Image from "next/image";

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

  const aboutLinks = [
    { title: "About School", href: "/about", icon: Info, desc: "Overview of our institution" },
    { title: "Our History", href: "/about/history", icon: History, desc: "The journey since 1970s" },
    { title: "Head Teachers", href: "/about/head-teachers", icon: UserRound, desc: "Our administrative leadership" },
    { title: "Principal Message", href: "/about/principal", icon: MessageSquare, desc: "Word from our Principal" },
    { title: "Chairman Message", href: "/about/chairman", icon: Star, desc: "Word from the Governing Body" },
  ];

  const academicLinks = [
    { title: "Class Routine", href: "/routine", icon: Calendar, desc: "Daily class schedules" },
    { title: "Attendance", href: "/attendance", icon: ClipboardCheck, desc: "Daily attendance logs" },
    { title: "Homework", href: "/homework", icon: PlusCircle, desc: "Assignments and tasks" },
    { title: "Student Ratings", href: "/ratings", icon: Star, desc: "Monthly performance tracking" },
    { title: "Academic Calendar", href: "/events", icon: Calendar, desc: "Holidays and events" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-white/70 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.05)] py-2"
          : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Elegant Circular Logo */}
        <NextLink href="/" className="flex items-center gap-4 group">
          <div className="relative w-14 h-14 bg-white rounded-full p-1 shadow-lg ring-4 ring-white/20 group-hover:scale-110 transition-all duration-500 overflow-hidden">
            <Image
              src="https://i.postimg.cc/52gjwkTC/download-(3).jpg"
              alt="School Logo"
              fill
              className="object-contain p-1 rounded-full"
            />
          </div>
          <div className={cn(
            "hidden sm:block transition-all duration-500",
            isScrolled ? "opacity-100 translate-x-0" : "opacity-90"
          )}>
            <h1 className="font-headline font-black text-xl text-primary leading-none tracking-tight">
              GGLMSS <span className="text-accent">GABURA</span>
            </h1>
            <p className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground font-bold mt-1">
              Memorial Secondary School
            </p>
          </div>
        </NextLink>

        {/* Desktop Mega Menu Navigation */}
        <div className="hidden lg:flex items-center gap-2">
          <NavigationMenu>
            <NavigationMenuList className="gap-1">
              <NavigationMenuItem>
                <NextLink href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent font-bold")}>
                    Home
                  </NavigationMenuLink>
                </NextLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent font-bold">About</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {aboutLinks.map((link) => (
                      <ListItem key={link.title} title={link.title} href={link.href} icon={link.icon}>
                        {link.desc}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NextLink href="/notices" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent font-bold")}>
                    Notices
                  </NavigationMenuLink>
                </NextLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent font-bold">Academics</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {academicLinks.map((link) => (
                      <ListItem key={link.title} title={link.title} href={link.href} icon={link.icon}>
                        {link.desc}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NextLink href="/ssc-batches" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent font-bold")}>
                    SSC Batches
                  </NavigationMenuLink>
                </NextLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NextLink href="/gallery" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent font-bold")}>
                    Gallery
                  </NavigationMenuLink>
                </NextLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NextLink href="/ssc-results" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent font-bold")}>
                    SSC Result
                  </NavigationMenuLink>
                </NextLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="h-6 w-[1px] bg-border mx-4" />

          {/* Premium Login Button */}
          <NextLink href="/auth/portal">
            <Button className="rounded-full px-8 font-black bg-gradient-to-r from-primary to-accent text-white shadow-lg hover:shadow-accent/40 hover:scale-105 transition-all group overflow-hidden relative">
              <span className="relative z-10 flex items-center gap-2">
                <LogIn size={18} /> Login Portal
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </Button>
          </NextLink>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-3 text-primary bg-white/50 backdrop-blur-md rounded-2xl border border-white shadow-sm"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Modern Slide-in Mobile Menu */}
      <div className={cn(
        "fixed inset-0 z-40 lg:hidden transition-all duration-500",
        isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}>
        <div 
          className="absolute inset-0 bg-black/20 backdrop-blur-sm" 
          onClick={() => setIsMobileMenuOpen(false)} 
        />
        <div className={cn(
          "absolute top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white shadow-2xl transition-transform duration-500 flex flex-col",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}>
          <div className="p-6 border-b flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 relative bg-primary/5 rounded-full p-1.5">
                <Image src="https://i.postimg.cc/52gjwkTC/download-(3).jpg" alt="Logo" fill className="object-contain" />
              </div>
              <h2 className="font-headline font-bold text-primary">Main Navigation</h2>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
              <X size={20} />
            </Button>
          </div>

          <div className="flex-1 overflow-y-auto py-6 px-4 space-y-8">
            <div className="space-y-4">
              <MobileNavLink href="/" icon={Home} onClick={() => setIsMobileMenuOpen(false)}>Home</MobileNavLink>
              <MobileNavLink href="/notices" icon={Bell} onClick={() => setIsMobileMenuOpen(false)}>Notice Board</MobileNavLink>
              <MobileNavLink href="/ssc-batches" icon={Trophy} onClick={() => setIsMobileMenuOpen(false)}>SSC Batches</MobileNavLink>
              <MobileNavLink href="/gallery" icon={ImageIcon} onClick={() => setIsMobileMenuOpen(false)}>School Gallery</MobileNavLink>
              <MobileNavLink href="/ssc-results" icon={FileCheck} onClick={() => setIsMobileMenuOpen(false)}>SSC Result</MobileNavLink>
              <MobileNavLink href="/library" icon={Library} onClick={() => setIsMobileMenuOpen(false)}>Digital Library</MobileNavLink>
              <MobileNavLink href="/contact" icon={Phone} onClick={() => setIsMobileMenuOpen(false)}>Contact Us</MobileNavLink>
            </div>

            <div className="space-y-2">
              <p className="px-4 text-[10px] font-black uppercase text-muted-foreground tracking-widest">School Management</p>
              <div className="grid grid-cols-2 gap-2 p-2">
                <NextLink href="/auth/portal" className="flex flex-col items-center gap-2 p-4 bg-primary/5 rounded-2xl text-primary font-bold hover:bg-primary hover:text-white transition-colors">
                  <Layout size={20} />
                  <span className="text-xs">Portals</span>
                </NextLink>
                <NextLink href="/complaints" className="flex flex-col items-center gap-2 p-4 bg-accent/5 rounded-2xl text-accent-foreground font-bold hover:bg-accent hover:text-white transition-colors">
                  <MessageSquare size={20} />
                  <span className="text-xs">Complaint</span>
                </NextLink>
              </div>
            </div>
          </div>

          <div className="p-6 border-t bg-secondary/5">
            <NextLink href="/auth/portal" onClick={() => setIsMobileMenuOpen(false)}>
              <Button className="w-full h-14 rounded-2xl bg-primary text-white font-black shadow-xl shadow-primary/20">
                Sign In to Platform
              </Button>
            </NextLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

function ListItem({ className, title, children, icon: Icon, ...props }: any) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <NextLink
          href={props.href}
          className={cn(
            "block select-none space-y-1 rounded-2xl p-3 leading-none no-underline outline-none transition-all hover:bg-accent/10 hover:text-accent-foreground focus:bg-accent/10 focus:text-accent-foreground group",
            className
          )}
          {...props}
        >
          <div className="flex items-center gap-3">
            {Icon && (
              <div className="w-8 h-8 bg-primary/5 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <Icon size={16} />
              </div>
            )}
            <div className="text-sm font-bold leading-none">{title}</div>
          </div>
          <p className="line-clamp-2 text-xs leading-snug text-muted-foreground mt-2 pl-11">
            {children}
          </p>
        </NextLink>
      </NavigationMenuLink>
    </li>
  );
}

function MobileNavLink({ href, icon: Icon, children, onClick }: any) {
  return (
    <NextLink 
      href={href} 
      onClick={onClick}
      className="flex items-center gap-4 px-4 py-3.5 rounded-2xl text-lg font-bold text-primary hover:bg-secondary/50 transition-all active:scale-95"
    >
      <div className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center text-primary">
        <Icon size={20} />
      </div>
      {children}
    </NextLink>
  );
}
