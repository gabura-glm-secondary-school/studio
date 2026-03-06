
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
  Building2
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const aboutSections = [
  {
    title: "Our History",
    bnTitle: "আমাদের ইতিহাস",
    desc: "The journey of GGLMSS from 1946 in the heart of Gabura.",
    icon: History,
    href: "/about/history",
    color: "bg-blue-500"
  },
  {
    title: "Administration",
    bnTitle: "শিক্ষক ও কর্মচারী",
    desc: "Meet our dedicated teachers and administrative staff.",
    icon: UserRound,
    href: "/about/head-teachers",
    color: "bg-emerald-500"
  },
  {
    title: "Managing Committee",
    bnTitle: "ম্যানেজিং কমিটি",
    desc: "The leadership board guiding our institution's growth.",
    icon: Users2,
    href: "/about/committee",
    color: "bg-indigo-500"
  },
  {
    title: "Vision & Mission",
    bnTitle: "ভিশন ও মিশন",
    desc: "Our core values and future educational goals.",
    icon: Target,
    href: "/about/vision",
    color: "bg-rose-500"
  },
  {
    title: "Citizen's Charter",
    bnTitle: "সিটিজেন চার্টার",
    desc: "Commitment to public service and institutional standards.",
    icon: FileText,
    href: "/about/charter",
    color: "bg-amber-600"
  },
  {
    title: "Infrastructure",
    bnTitle: "ভৌত অবকাঠামো",
    desc: "Our campus facilities and learning environment.",
    icon: Building2,
    href: "/about/infrastructure",
    color: "bg-teal-500"
  },
  {
    title: "Principal's Message",
    bnTitle: "প্রধান শিক্ষকের বাণী",
    desc: "A visionary message from S.M Easminur Rahman Linkon.",
    icon: MessageSquare,
    href: "/about/principal",
    color: "bg-purple-500"
  },
  {
    title: "Chairman's Message",
    bnTitle: "সভাপতির বাণী",
    desc: "Insight from our Chairman, Gazi Nazrul Islam (MP).",
    icon: Star,
    href: "/about/chairman",
    color: "bg-orange-500"
  }
];

export default function AboutPortalPage() {
  return (
    <div className="pt-48 pb-24 min-h-screen bg-secondary/5">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 space-y-4 animate-in fade-in duration-700">
          <span className="text-accent font-black uppercase tracking-[0.2em] text-[10px]">Institutional Profile</span>
          <h1 className="text-4xl lg:text-6xl font-headline font-black text-primary leading-tight">আমাদের সম্পর্কে জানুন</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto font-medium">
            Gabura G.L.M Secondary School is committed to providing quality education and fostering excellence in every student.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mb-16">
          {aboutSections.map((section, idx) => (
            <Link key={section.href} href={section.href} className="group">
              <Card className="glass-card hover:border-accent transition-all duration-300 overflow-hidden border-2 border-transparent h-full">
                <CardContent className="p-8 flex items-start gap-6">
                  <div className={`w-14 h-14 ${section.color} text-white rounded-2xl flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                    <section.icon size={28} />
                  </div>
                  <div className="space-y-1 flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-headline font-black text-primary leading-tight">
                        {section.bnTitle}
                      </h3>
                      <ArrowRight className="opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all text-accent" />
                    </div>
                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{section.title}</p>
                    <p className="text-sm text-muted-foreground font-medium leading-relaxed pt-2">
                      {section.desc}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Quick Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-dashed border-primary/20">
          {[
            { label: "Established", val: "1946", icon: ShieldCheck },
            { label: "Recognition", val: "MPO", icon: GraduationCap },
            { label: "Community", val: "5k+", icon: Users },
            { label: "Success", val: "100%", icon: Star },
          ].map((item, i) => (
            <div key={i} className="text-center space-y-2">
              <item.icon className="mx-auto text-primary/30" size={24} />
              <p className="text-2xl font-black text-primary">{item.val}</p>
              <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
