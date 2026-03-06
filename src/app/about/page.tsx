
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
    desc: "The glorious journey since 1946.",
    icon: History,
    href: "/about/history",
    color: "from-blue-500 to-indigo-600",
    shadow: "shadow-blue-500/20"
  },
  {
    title: "Administration",
    bnTitle: "শিক্ষক ও কর্মচারী",
    desc: "Meet our dedicated faculty members.",
    icon: UserRound,
    href: "/about/head-teachers",
    color: "from-emerald-500 to-teal-600",
    shadow: "shadow-emerald-500/20"
  },
  {
    title: "Managing Committee",
    bnTitle: "ম্যানেজিং কমিটি",
    desc: "The policy-making board of GGLMSS.",
    icon: Users2,
    href: "/about/committee",
    color: "from-indigo-500 to-purple-600",
    shadow: "shadow-indigo-500/20"
  },
  {
    title: "Vision & Mission",
    bnTitle: "ভিশন ও মিশন",
    desc: "Our educational goals and values.",
    icon: Target,
    href: "/about/vision",
    color: "from-rose-500 to-red-600",
    shadow: "shadow-rose-500/20"
  },
  {
    title: "Citizen's Charter",
    bnTitle: "সিটিজেন চার্টার",
    desc: "Service quality and standards.",
    icon: FileText,
    href: "/about/charter",
    color: "from-amber-500 to-orange-600",
    shadow: "shadow-amber-500/20"
  },
  {
    title: "Infrastructure",
    bnTitle: "ভৌত অবকাঠামো",
    desc: "Modern labs and campus facilities.",
    icon: Building2,
    href: "/about/infrastructure",
    color: "from-teal-500 to-cyan-600",
    shadow: "shadow-teal-500/20"
  },
  {
    title: "Principal's Message",
    bnTitle: "প্রধান শিক্ষকের বাণী",
    desc: "Visionary leadership for students.",
    icon: MessageSquare,
    href: "/about/principal",
    color: "from-purple-500 to-pink-600",
    shadow: "shadow-purple-500/20"
  },
  {
    title: "Chairman's Message",
    bnTitle: "সভাপতির বাণী",
    desc: "Insights from our Chairman (MP).",
    icon: Star,
    href: "/about/chairman",
    color: "from-orange-500 to-yellow-600",
    shadow: "shadow-orange-500/20"
  }
];

export default function AboutPortalPage() {
  return (
    <div className="pt-40 pb-20 min-h-screen bg-secondary/5">
      <div className="max-w-6xl mx-auto px-4 space-y-12">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-black uppercase text-[9px] tracking-[0.2em]">
            <Sparkles size={12} className="text-accent" /> Institutional Profile
          </div>
          <h1 className="text-4xl md:text-5xl font-headline font-black text-primary tracking-tighter">
            আমাদের সম্পর্কে <span className="gradient-text">জানুন</span>
          </h1>
          <p className="text-muted-foreground max-w-lg mx-auto font-medium text-sm leading-relaxed">
            গাবুরা জি.এল.এম. মাধ্যমিক বিদ্যালয়ের গৌরবময় ইতিহাস এবং প্রশাসনিক কাঠামোর বিস্তারিত তথ্য এখানে পাবেন।
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {aboutSections.map((section) => (
            <Link key={section.href} href={section.href} className="group">
              <Card className="glass-card h-full !rounded-2xl border-white/60 hover:border-primary/20 transition-all duration-300 hover:shadow-lg overflow-hidden">
                <CardContent className="p-5 flex items-center gap-4">
                  <div className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-md shrink-0 transition-all duration-500 group-hover:scale-110 bg-gradient-to-br",
                    section.color,
                    section.shadow
                  )}>
                    <section.icon size={22} strokeWidth={2.5} />
                  </div>
                  
                  <div className="flex-1 min-w-0 space-y-0.5">
                    <h3 className="text-[15px] font-headline font-black text-primary leading-tight group-hover:text-accent transition-colors truncate">
                      {section.bnTitle}
                    </h3>
                    <p className="text-[8px] font-black text-muted-foreground uppercase tracking-widest truncate">{section.title}</p>
                    <p className="text-[11px] text-muted-foreground/80 font-medium truncate">
                      {section.desc}
                    </p>
                  </div>
                  
                  <ChevronRight className="shrink-0 text-primary/10 group-hover:text-accent transition-all group-hover:translate-x-1" size={18} />
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Compact Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-12 border-t border-dashed border-primary/10">
          {[
            { label: "Established", val: "1946", icon: ShieldCheck, color: "text-blue-500" },
            { label: "Recognition", val: "MPO", icon: GraduationCap, color: "text-emerald-500" },
            { label: "Community", val: "5k+", icon: Users, color: "text-amber-500" },
            { label: "Success", val: "100%", icon: Star, color: "text-rose-500" },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-2 p-4 bg-white/40 rounded-2xl border border-white/60 shadow-sm">
              <item.icon className={cn("opacity-60", item.color)} size={18} />
              <div className="text-center">
                <p className="text-xl font-black text-primary tracking-tight">{item.val}</p>
                <p className="text-[8px] font-black text-muted-foreground uppercase tracking-widest">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
