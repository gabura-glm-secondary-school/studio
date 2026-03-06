
"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GraduationCap, Briefcase, UserRound, Globe, ArrowRight, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

const portals = [
  {
    role: "student",
    title: "Student",
    bnTitle: "ছাত্র/ছাত্রী",
    description: "Access lessons and results",
    icon: GraduationCap,
    color: "bg-blue-500",
  },
  {
    role: "teacher",
    title: "Teacher",
    bnTitle: "শিক্ষক",
    description: "Manage classes and ratings",
    icon: Briefcase,
    color: "bg-emerald-500",
  },
  {
    role: "staff",
    title: "Office Staff",
    bnTitle: "অফিস স্টাফ",
    description: "Administration and operations",
    icon: UserRound,
    color: "bg-amber-500",
  },
  {
    role: "external",
    title: "External",
    bnTitle: "অন্যান্য",
    description: "Alumni and community access",
    icon: Globe,
    color: "bg-purple-500",
  }
];

export default function PortalPage() {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <div className="pt-32 pb-24 min-h-screen bg-secondary/5 flex flex-col items-center">
      <div className="max-w-4xl w-full px-4 space-y-12">
        <div className="text-center space-y-4">
          <span className="text-accent font-black uppercase tracking-[0.2em] text-[10px]">GGLMSS Identity Platform</span>
          <h1 className="text-4xl lg:text-6xl font-headline font-black text-primary leading-tight">অ্যাকাউন্টে প্রবেশ করুন</h1>
          <p className="text-muted-foreground max-w-xl mx-auto font-medium">
            আপনার সঠিক পোর্টালটি নির্বাচন করে লগইন অথবা রেজিস্ট্রেশন সম্পন্ন করুন।
          </p>
        </div>

        <Card className="glass-card border-none shadow-2xl overflow-hidden max-w-2xl mx-auto">
          <CardHeader className="bg-primary/5 p-0">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="w-full h-16 bg-transparent p-0 rounded-none border-b">
                <TabsTrigger 
                  value="login" 
                  className="flex-1 h-full rounded-none font-black uppercase tracking-widest text-xs data-[state=active]:bg-white data-[state=active]:text-primary border-r"
                >
                  Login / লগইন
                </TabsTrigger>
                <TabsTrigger 
                  value="register" 
                  className="flex-1 h-full rounded-none font-black uppercase tracking-widest text-xs data-[state=active]:bg-white data-[state=active]:text-primary"
                >
                  Register / রেজিস্ট্রেশন
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </CardHeader>
          
          <CardContent className="p-8 md:p-12 space-y-8">
            <div className="text-center space-y-2">
              <h3 className="text-2xl font-headline font-black text-primary">
                {activeTab === 'login' ? 'Select Your Portal' : 'Create New Account'}
              </h3>
              <p className="text-sm text-muted-foreground font-medium">আপনার পদবী অনুযায়ী নিচের যেকোনো একটি বাটনে ক্লিক করুন</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {portals.map((portal) => (
                <Link 
                  key={portal.role} 
                  href={`/auth/${activeTab}/${portal.role}`}
                  className="group"
                >
                  <div className="p-6 rounded-3xl border-2 border-primary/5 bg-white hover:border-accent hover:shadow-xl transition-all flex items-center gap-4 active:scale-95">
                    <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-lg shrink-0 group-hover:scale-110 transition-transform", portal.color)}>
                      <portal.icon size={24} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-black text-primary uppercase tracking-tighter leading-none">{portal.title}</h4>
                      <p className="font-bold text-accent text-[10px] mt-1">{portal.bnTitle}</p>
                    </div>
                    <ArrowRight className="text-primary/20 group-hover:text-accent group-hover:translate-x-1 transition-all" size={20} />
                  </div>
                </Link>
              ))}
            </div>

            <div className="pt-8 border-t border-dashed border-primary/10 text-center">
              <Link href="/auth/recovery" className="text-xs font-black text-muted-foreground hover:text-primary transition-colors flex items-center justify-center gap-2">
                <ShieldCheck size={14} className="text-accent" /> Password recovery / পাসওয়ার্ড ভুলে গেছেন?
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
