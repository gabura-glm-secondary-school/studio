
"use client";

import Link from "next/link";
import { 
  History, 
  UserRound, 
  MessageSquare, 
  Star, 
  ArrowRight,
  ShieldCheck,
  GraduationCap,
  Users,
  Users2,
  FileText,
  Target,
  Building2,
  Sparkles,
  ChevronRight
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const aboutSections = [
  {
    title: "Our History",
    bnTitle: "আমাদের ইতিহাস",
    desc: "The glorious journey of GGLMSS since 1946 in the island of Gabura.",
    icon: History,
    href: "/about/history",
    color: "from-blue-500 to-indigo-600",
    shadow: "shadow-blue-500/20"
  },
  {
    title: "Administration",
    bnTitle: "শিক্ষক ও কর্মচারী",
    desc: "Meet our dedicated teachers and visionary administrative leadership.",
    icon: UserRound,
    href: "/about/head-teachers",
    color: "from-emerald-500 to-teal-600",
    shadow: "shadow-emerald-500/20"
  },
  {
    title: "Managing Committee",
    bnTitle: "ম্যানেজিং কমিটি",
    desc: "The policy-making board guiding our institution's growth and vision.",
    icon: Users2,
    href: "/about/committee",
    color: "from-indigo-500 to-purple-600",
    shadow: "shadow-indigo-500/20"
  },
  {
    title: "Vision & Mission",
    bnTitle: "ভিশন ও মিশন",
    desc: "Our core educational values and long-term goals for the students.",
    icon: Target,
    href: "/about/vision",
    color: "from-rose-500 to-red-600",
    shadow: "shadow-rose-500/20"
  },
  {
    title: "Citizen's Charter",
    bnTitle: "সিটিজেন চার্টার",
    desc: "Our public commitment to service quality and institutional standards.",
    icon: FileText,
    href: "/about/charter",
    color: "from-amber-500 to-orange-600",
    shadow: "shadow-amber-500/20"
  },
  {
    title: "Infrastructure",
    bnTitle: "ভৌত অবকাঠামো",
    desc: "Modern campus facilities, labs, and the learning environment.",
    icon: Building2,
    href: "/about/infrastructure",
    color: "from-teal-500 to-cyan-600",
    shadow: "shadow-teal-500/20"
  },
  {
    title: "Principal's Message",
    bnTitle: "প্রধান শিক্ষকের বাণী",
    desc: "A visionary leadership message for the new generation students.",
    icon: MessageSquare,
    href: "/about/principal",
    color: "from-purple-500 to-pink-600",
    shadow: "shadow-purple-500/20"
  },
  {
    title: "Chairman's Message",
    bnTitle: "সভাপতির বাণী",
    desc: "Policy insights and future directions from our Chairman (MP).",
    icon: Star,
    href: "/about/chairman",
    color: "from-orange-500 to-yellow-600",
    shadow: "shadow-orange-500/20"
  }
];

export default function AboutPortalPage() {
  return (
    <div className="pt-48 pb-24 min-h-screen bg-secondary/5">
      <div className="max-w-7xl mx-auto px-4 space-y-20">
        <div className="text-center space-y-6 animate-in fade-in duration-700">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-black uppercase text-[10px] tracking-[0.2em]">
            <Sparkles size={14} className="text-accent" /> Institutional Profile
          </div>
          <h1 className="text-5xl lg:text-7xl font-headline font-black text-primary leading-tight tracking-tighter">
            আমাদের সম্পর্কে <span className="gradient-text">জানুন</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto font-medium text-lg">
            গাবুরা গোপাল লক্ষ্মী মেমোরিয়াল মাধ্যমিক বিদ্যালয় মানসম্মত শিক্ষা এবং প্রতিটি শিক্ষার্থীর সুপ্ত মেধা বিকাশে প্রতিশ্রুতিবদ্ধ।
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {aboutSections.map((section, idx) => (
            <Link key={section.href} href={section.href} className="group">
              <Card className="glass-card h-full !rounded-[3rem] border-white/60 hover:border-primary/30 transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] group-hover:-translate-y-2 overflow-hidden">
                <CardContent className="p-8 md:p-10 flex flex-col md:flex-row items-center md:items-start gap-8">
                  <div className={cn(
                    "w-20 h-20 rounded-[2.5rem] flex items-center justify-center text-white shadow-2xl shrink-0 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-[15deg] bg-gradient-to-br",
                    section.color,
                    section.shadow
                  )}>
                    <section.icon size={36} strokeWidth={2.5} />
                  </div>
                  
                  <div className="space-y-4 flex-1 text-center md:text-left">
                    <div className="space-y-1">
                      <div className="flex items-center justify-center md:justify-between">
                        <h3 className="text-2xl font-headline font-black text-primary leading-tight group-hover:text-primary transition-colors">
                          {section.bnTitle}
                        </h3>
                        <ChevronRight className="hidden md:block opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all text-accent" size={24} />
                      </div>
                      <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.3em]">{section.title}</p>
                    </div>
                    <p className="text-muted-foreground font-medium leading-relaxed">
                      {section.desc}
                    </p>
                    <div className="pt-2 flex justify-center md:justify-start">
                      <span className="text-[10px] font-black uppercase text-primary tracking-widest flex items-center gap-2 group-hover:text-accent transition-colors">
                        Explore Section <div className="w-6 h-px bg-primary/20 group-hover:w-10 group-hover:bg-accent transition-all"></div>
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Quick Highlights with enhanced style */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-20 border-t-2 border-dashed border-primary/10">
          {[
            { label: "Established", val: "1946", icon: ShieldCheck, color: "text-blue-500" },
            { label: "Recognition", val: "MPO", icon: GraduationCap, color: "text-emerald-500" },
            { label: "Community", val: "5k+", icon: Users, color: "text-amber-500" },
            { label: "Success", val: "100%", icon: Star, color: "text-rose-500" },
          ].map((item, i) => (
            <div key={i} className="text-center space-y-4 group">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mx-auto shadow-sm border border-primary/5 group-hover:scale-110 transition-transform duration-500">
                <item.icon className={cn("opacity-40 group-hover:opacity-100 transition-opacity", item.color)} size={24} />
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-black text-primary tracking-tighter">{item.val}</p>
                <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
