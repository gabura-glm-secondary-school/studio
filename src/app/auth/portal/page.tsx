
"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GraduationCap, Briefcase, UserRound, Globe, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const portals = [
  {
    role: "student",
    title: "Student Portal",
    bnTitle: "ছাত্র/ছাত্রী পোর্টাল",
    description: "Access lessons, results and your digital ID card.",
    icon: GraduationCap,
    color: "from-blue-500 to-indigo-600",
    shadow: "shadow-blue-500/20",
  },
  {
    role: "teacher",
    title: "Teacher Portal",
    bnTitle: "শিক্ষক পোর্টাল",
    description: "Manage classes, mark attendance and student ratings.",
    icon: Briefcase,
    color: "from-emerald-500 to-teal-600",
    shadow: "shadow-emerald-500/20",
  },
  {
    role: "staff",
    title: "Office Staff",
    bnTitle: "অফিস স্টাফ",
    description: "Administrative tools and institutional operations.",
    icon: UserRound,
    color: "from-amber-500 to-orange-600",
    shadow: "shadow-amber-500/20",
  },
  {
    role: "external",
    title: "External / Alumni",
    bnTitle: "অন্যান্য / প্রাক্তন",
    description: "Community access for alumni and external members.",
    icon: Globe,
    color: "from-purple-500 to-pink-600",
    shadow: "shadow-purple-500/20",
  }
];

export default function PortalPage() {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <div className="pt-48 pb-24 min-h-screen bg-secondary/5 flex flex-col items-center">
      <div className="max-w-5xl w-full px-4 space-y-16">
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-black uppercase text-[10px] tracking-[0.2em] animate-pulse">
            <Sparkles size={14} /> GGLMSS Digital Identity
          </div>
          <h1 className="text-5xl lg:text-7xl font-headline font-black text-primary leading-tight tracking-tighter">
            অ্যাকাউন্টে <span className="gradient-text">প্রবেশ করুন</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto font-medium text-lg leading-relaxed">
            আপনার সঠিক পোর্টালটি নির্বাচন করে লগইন অথবা রেজিস্ট্রেশন সম্পন্ন করুন। প্রতিটি পোর্টাল আপনার নির্দিষ্ট প্রয়োজনে অপ্টিমাইজ করা।
          </p>
        </div>

        <div className="space-y-12">
          <div className="flex justify-center">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full max-w-md">
              <TabsList className="w-full h-16 bg-white/50 backdrop-blur-md p-1.5 rounded-full border border-white shadow-xl">
                <TabsTrigger 
                  value="login" 
                  className="flex-1 h-full rounded-full font-black uppercase tracking-widest text-xs data-[state=active]:bg-primary data-[state=active]:text-white transition-all"
                >
                  Login / লগইন
                </TabsTrigger>
                <TabsTrigger 
                  value="register" 
                  className="flex-1 h-full rounded-full font-black uppercase tracking-widest text-xs data-[state=active]:bg-primary data-[state=active]:text-white transition-all"
                >
                  Register / রেজিস্ট্রেশন
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portals.map((portal) => (
              <Link 
                key={portal.role} 
                href={`/auth/${activeTab}/${portal.role}`}
                className="group block"
              >
                <div className={cn(
                  "relative h-full glass-card !rounded-[3rem] p-8 overflow-hidden transition-all duration-500",
                  "hover:border-primary/40 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] group-hover:-translate-y-2 group-active:scale-[0.98]",
                  "border-white/60 bg-white/70"
                )}>
                  {/* Decorative background glow */}
                  <div className={cn(
                    "absolute -top-24 -right-24 w-64 h-64 rounded-full blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-1000 bg-gradient-to-br",
                    portal.color
                  )}></div>

                  <div className="relative z-10 flex flex-col h-full gap-8">
                    <div className="flex items-start justify-between">
                      <div className={cn(
                        "w-20 h-20 rounded-[2rem] flex items-center justify-center text-white shadow-2xl transition-transform duration-700 group-hover:rotate-[10deg] group-hover:scale-110 bg-gradient-to-br",
                        portal.color,
                        portal.shadow
                      )}>
                        <portal.icon size={36} strokeWidth={2.5} />
                      </div>
                      <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                        <ArrowRight size={24} />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="space-y-1">
                        <h3 className="text-2xl font-headline font-black text-primary uppercase tracking-tight group-hover:text-primary transition-colors">
                          {portal.title}
                        </h3>
                        <p className="text-accent font-bold text-sm tracking-widest">{portal.bnTitle}</p>
                      </div>
                      <p className="text-muted-foreground font-medium leading-relaxed">
                        {portal.description}
                      </p>
                    </div>

                    <div className="mt-auto pt-6 border-t border-dashed border-primary/10">
                      <span className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-primary/40 group-hover:text-primary transition-colors">
                        Enter Securely <div className="w-8 h-px bg-primary/20 group-hover:w-12 group-hover:bg-primary transition-all"></div>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="pt-12 text-center">
            <Link href="/auth/recovery" className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/50 border border-white shadow-sm text-sm font-black text-primary hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all active:scale-95 group">
              <ShieldCheck size={18} className="text-accent group-hover:rotate-12 transition-transform" /> 
              পাসওয়ার্ড ভুলে গেছেন? Password Recovery
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
