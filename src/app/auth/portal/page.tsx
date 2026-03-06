
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
    description: "Lessons, results and digital ID.",
    icon: GraduationCap,
    color: "from-blue-500 to-indigo-600",
    shadow: "shadow-blue-500/20",
  },
  {
    role: "teacher",
    title: "Teacher Portal",
    bnTitle: "শিক্ষক পোর্টাল",
    description: "Manage classes and mark attendance.",
    icon: Briefcase,
    color: "from-emerald-500 to-teal-600",
    shadow: "shadow-emerald-500/20",
  },
  {
    role: "staff",
    title: "Office Staff",
    bnTitle: "অফিস স্টাফ",
    description: "Operations and administration tools.",
    icon: UserRound,
    color: "from-amber-500 to-orange-600",
    shadow: "shadow-amber-500/20",
  },
  {
    role: "external",
    title: "External / Alumni",
    bnTitle: "অন্যান্য / প্রাক্তন",
    description: "Community and alumni access.",
    icon: Globe,
    color: "from-purple-500 to-pink-600",
    shadow: "shadow-purple-500/20",
  }
];

export default function PortalPage() {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <div className="pt-40 pb-24 min-h-screen bg-secondary/5 flex flex-col items-center">
      <div className="max-w-4xl w-full px-4 space-y-12">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-black uppercase text-[9px] tracking-[0.2em]">
            <Sparkles size={12} className="text-accent" /> GGLMSS Digital Identity
          </div>
          <h1 className="text-4xl md:text-5xl font-headline font-black text-primary leading-tight tracking-tighter">
            অ্যাকাউন্টে <span className="gradient-text">প্রবেশ করুন</span>
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto font-medium text-sm">
            আপনার নির্দিষ্ট পোর্টালটি নির্বাচন করুন। প্রতিটি সেকশন আপনার ব্যবহারের জন্য অপ্টিমাইজ করা হয়েছে।
          </p>
        </div>

        <div className="space-y-8">
          <div className="flex justify-center">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full max-w-xs">
              <TabsList className="w-full h-12 bg-white/50 backdrop-blur-md p-1 rounded-full border border-white shadow-lg">
                <TabsTrigger 
                  value="login" 
                  className="flex-1 h-full rounded-full font-black uppercase tracking-widest text-[10px] data-[state=active]:bg-primary data-[state=active]:text-white transition-all"
                >
                  Login
                </TabsTrigger>
                <TabsTrigger 
                  value="register" 
                  className="flex-1 h-full rounded-full font-black uppercase tracking-widest text-[10px] data-[state=active]:bg-primary data-[state=active]:text-white transition-all"
                >
                  Register
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {portals.map((portal) => (
              <Link 
                key={portal.role} 
                href={`/auth/${activeTab}/${portal.role}`}
                className="group block"
              >
                <div className={cn(
                  "relative h-full glass-card !rounded-3xl p-5 overflow-hidden transition-all duration-300",
                  "hover:border-primary/30 hover:shadow-xl group-hover:-translate-y-1 group-active:scale-[0.98]",
                  "border-white/60 bg-white/80"
                )}>
                  <div className="relative z-10 flex items-center gap-5">
                    <div className={cn(
                      "w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-lg transition-transform duration-500 group-hover:rotate-[8deg] bg-gradient-to-br",
                      portal.color,
                      portal.shadow
                    )}>
                      <portal.icon size={22} strokeWidth={2.5} />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="text-base font-headline font-black text-primary uppercase tracking-tight truncate">
                          {portal.title}
                        </h3>
                        <ArrowRight size={16} className="text-primary/20 group-hover:text-primary transition-colors group-hover:translate-x-1" />
                      </div>
                      <p className="text-accent font-bold text-[9px] uppercase tracking-widest leading-none mb-1">{portal.bnTitle}</p>
                      <p className="text-[11px] text-muted-foreground font-medium truncate">
                        {portal.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="pt-8 text-center">
            <Link href="/auth/recovery" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/50 border border-white shadow-sm text-xs font-black text-primary hover:bg-white hover:shadow-md transition-all group">
              <ShieldCheck size={14} className="text-accent" /> 
              পাসওয়ার্ড রিকভারি / Recovery
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
