
"use client";

import Image from "next/image";
import { GraduationCap, Award, ShieldCheck, Mail, Phone, ArrowLeft, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const admins = [
  {
    name: "S.M EASMINUR RAHMAN LINKON",
    role: "Head Teacher",
    qualification: "M.A, B.Ed",
    image: "https://i.postimg.cc/wxyG8ZdS/images-(1)-(13).jpg",
    department: "Administration",
    stats: { students: "1200+", experience: "15y+" }
  },
  {
    name: "Assistant Head Teacher",
    role: "Assistant Head Teacher",
    qualification: "M.Sc, B.Ed",
    image: "https://picsum.photos/seed/admin2/400/500",
    department: "Academic Oversight",
    stats: { students: "1200+", experience: "12y+" }
  }
];

export default function AdministrationPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-secondary/5">
      <div className="max-w-6xl mx-auto px-4 space-y-12">
        {/* Header navigation */}
        <div className="flex items-center justify-between">
          <Link href="/">
            <Button variant="ghost" className="gap-2 text-muted-foreground hover:text-primary px-0 active:scale-95 transition-transform">
              <ArrowLeft size={18} /> প্রচ্ছদ পাতায় ফিরে যান
            </Button>
          </Link>
          <div className="text-right">
            <span className="text-accent font-black uppercase tracking-[0.2em] text-[10px]">GGLMSS</span>
            <h1 className="text-2xl font-headline font-black text-primary leading-tight">বিদ্যালয় প্রশাসন</h1>
          </div>
        </div>

        {/* Hero Section - Head Teacher */}
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-2 relative animate-in fade-in zoom-in duration-500">
            <div className="absolute inset-0 bg-primary/10 rounded-[3rem] -rotate-3 scale-105"></div>
            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white bg-white">
              <Image 
                src={admins[0].image} 
                alt={admins[0].name} 
                fill 
                className="object-cover" 
                priority
              />
            </div>
            <div className="absolute -bottom-4 -left-4 glass-card p-4 flex items-center gap-3 border-white/60">
              <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white">
                <ShieldCheck size={20} />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase text-muted-foreground">Status</p>
                <p className="text-xs font-bold text-primary">Verified Leader</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-8 animate-in fade-in slide-in-from-right duration-500">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1 rounded-full text-[10px] font-black uppercase">
                <GraduationCap size={14} /> Head of Institution
              </div>
              <h2 className="text-4xl font-headline font-black text-primary leading-tight uppercase">{admins[0].name}</h2>
              <p className="text-xl font-medium text-muted-foreground leading-relaxed">
                বিদ্যালয়ের প্রধান শিক্ষক হিসেবে আমি গর্বিত। গাবুরা দ্বীপ জনপদে শিক্ষার আলো ছড়াতে আমরা নিরলসভাবে কাজ করে যাচ্ছি।
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card p-6 space-y-2">
                <Award className="text-accent" size={24} />
                <p className="text-[10px] font-black uppercase text-muted-foreground">Qualification</p>
                <p className="text-sm font-bold text-primary">{admins[0].qualification}</p>
              </div>
              <div className="glass-card p-6 space-y-2">
                <Users className="text-primary" size={24} />
                <p className="text-[10px] font-black uppercase text-muted-foreground">Experience</p>
                <p className="text-sm font-bold text-primary">{admins[0].stats.experience}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button className="rounded-full gap-2 px-8 h-12 shadow-lg bg-primary hover:bg-primary/90">
                <Mail size={18} /> Contact Principal
              </Button>
              <Button variant="outline" className="rounded-full gap-2 px-8 h-12 border-2">
                <Phone size={18} /> Call Office
              </Button>
            </div>
          </div>
        </div>

        {/* Administration List */}
        <div className="pt-12 space-y-8">
          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-border"></div>
            <h3 className="text-xl font-headline font-black text-primary uppercase tracking-widest">প্রশাসনিক পর্ষদ</h3>
            <div className="h-px flex-1 bg-border"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {admins.map((admin, idx) => (
              <div key={idx} className="glass-card group hover:border-accent transition-all duration-300">
                <div className="p-6 space-y-6">
                  <div className="flex gap-4 items-center">
                    <div className="relative w-20 h-20 rounded-2xl overflow-hidden shrink-0 border-2 border-white shadow-md">
                      <Image 
                        src={admin.image} 
                        alt={admin.name} 
                        fill 
                        className="object-cover group-hover:scale-110 transition-transform duration-500" 
                        data-ai-hint="portrait teacher"
                      />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-bold text-primary leading-tight">{admin.name}</h4>
                      <p className="text-[10px] font-black text-accent uppercase tracking-widest">{admin.role}</p>
                      <p className="text-[10px] text-muted-foreground font-medium">{admin.qualification}</p>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-dashed flex items-center justify-between">
                    <span className="text-[10px] font-bold text-muted-foreground uppercase">{admin.department}</span>
                    <Button variant="ghost" size="sm" className="h-8 rounded-full text-[10px] font-black uppercase">View Profile</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
