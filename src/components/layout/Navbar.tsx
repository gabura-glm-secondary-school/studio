"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
    { name: "Home", href: "/" },
    {
      name: "About",
      links: [
        { name: "School History", href: "/about/history" },
        { name: "Head Teachers", href: "/about/head-teachers" },
        { name: "Principal Message", href: "/about/principal" },
        { name: "Chairman Message", href: "/about/chairman" },
      ],
    },
    { name: "Notices", href: "/notices" },
    { name: "Gallery", href: "/gallery" },
    {
      name: "Students",
      links: [
        { name: "SSC Result Check", href: "/ssc-results" },
        { name: "Batch Directory", href: "/ssc-batches" },
        { name: "Complaints", href: "/complaints" },
      ],
    },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 py-2",
        isScrolled
          ? "bg-white/80 backdrop-blur-lg shadow-md mt-0"
          : "bg-transparent mt-4"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-12 h-12">
            <Image
              src="https://i.postimg.cc/52gjwkTC/download-(3).jpg"
              alt="School Logo"
              fill
              className="object-contain"
            />
          </div>
          <div className="hidden sm:block">
            <h1 className="font-headline font-bold text-lg text-primary leading-tight">
              Gabura Gopal Laxmi
            </h1>
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">
              Memorial Secondary School
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((item) => (
            item.links ? (
              <DropdownMenu key={item.name}>
                <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium hover:text-accent transition-colors">
                  {item.name} <ChevronDown className="w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-48">
                  {item.links.map((subItem) => (
                    <DropdownMenuItem key={subItem.name} asChild>
                      <Link href={subItem.href} className="w-full">
                        {subItem.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium hover:text-accent transition-colors"
              >
                {item.name}
              </Link>
            )
          ))}
          <Button variant="default" size="sm" asChild className="rounded-full shadow-lg">
            <Link href="/admin">Admin Portal</Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t p-4 flex flex-col gap-4 shadow-xl animate-in slide-in-from-top duration-300">
          {navLinks.map((item) => (
            <div key={item.name} className="flex flex-col gap-2">
              {item.links ? (
                <>
                  <div className="text-sm font-bold text-muted-foreground px-2">
                    {item.name}
                  </div>
                  {item.links.map((subItem) => (
                    <Link
                      key={subItem.name}
                      href={subItem.href}
                      className="text-lg font-medium px-4 py-1 hover:text-accent"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </>
              ) : (
                <Link
                  href={item.href}
                  className="text-lg font-medium px-2 py-1 hover:text-accent"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
          <Button className="w-full rounded-full" asChild>
            <Link href="/admin">Admin Portal</Link>
          </Button>
        </div>
      )}
    </nav>
  );
}