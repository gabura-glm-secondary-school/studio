
"use client";

import Image from "next/image";
import { ShieldCheck, ArrowLeft, Users2, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const boardMembers = [
  {
    name: "Gazi Nazrul Islam",
    bnName: "গাজী নজরুল ইসলাম",
    role: "Chairman",
    bnRole: "সভাপতি",
    subRole: "MP Satkhira 04",
    image: "https://i.postimg.cc/HsrPmKDM/FB-IMG-1772767240131.jpg"
  },
  {
    name: "S. M. Easminur Rahman",
    bnName: "এস. এম. ইয়াসমিনুর রহমান",
    role: "Member Secretary",
    bnRole: "সদস্য সচিব",
    subRole: "Head Teacher",
    image: "https://i.postimg.cc/NFZ1xd04/images-(1)-(13).jpg"
  },
  {
    name: "Member Name 1",
    bnName: "সদস্যের নাম ১",
    role: "Member",
    bnRole: "সদস্য",
    subRole: "Guardian Representative",
    image: "https://picsum.photos/seed/member1/400/500"
  },
  {
    name: "Member Name 2",
    bnName: "সদস্যের নাম ২",
    role: "Member",
    bnRole: "সদস্য",
    subRole: "Teacher Representative",
    image: "https://picsum.photos/seed/member2/400/500"
  }
];

export default function ManagingCommitteePage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-secondary/5">
      <div className="max-w-6xl mx-auto px-4 space-y-12">
        <div className="space-y-4">
          <Link href="/about">
            <Button variant="ghost" className="gap-2 text-primary font-black hover:bg-primary/10 px-0 active:scale-95 transition-transform">
              <ArrowLeft size={18} /> সম্পর্কে ফিরে যান
            </Button>
          </Link>
          <div className="space-y-1 border-l-4 border-accent pl-6">
            <span className="text-accent font-black uppercase tracking-[0.2em] text-[10px]">Governance & Policy</span>
            <h1 className="text-4xl font-headline font-black text-primary uppercase">ম্যানেজিং কমিটি</h1>
            <p className="text-muted-foreground font-bold max-w-xl">
              প্রতিষ্ঠানের সুশাসন এবং শিক্ষার মান নিশ্চিতকরণে নিয়োজিত পরিচালনা পর্ষদ।
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {boardMembers.map((member, idx) => (
            <Card key={idx} className="bg-white border-2 border-white overflow-hidden group hover:border-accent transition-all duration-500 shadow-xl hover:shadow-2xl">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-1000" 
                  data-ai-hint="portrait"
                />
                <Badge className="absolute top-4 right-4 bg-primary text-white font-black uppercase text-[9px] px-3 py-1 shadow-lg border border-white/20">
                  {member.role}
                </Badge>
              </div>
              <CardContent className="p-6 text-center space-y-3 bg-gradient-to-b from-white to-secondary/5">
                <div className="space-y-1">
                  <h3 className="font-headline font-black text-primary text-lg leading-tight group-hover:text-accent transition-colors">
                    {member.bnName}
                  </h3>
                  <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{member.name}</p>
                </div>
                <div className="pt-3 border-t-2 border-dashed border-primary/10">
                  <p className="text-xs font-black text-accent uppercase tracking-tighter">{member.bnRole}</p>
                  <p className="text-[9px] font-black text-primary/60 italic uppercase">{member.subRole}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Improved Contrast Section */}
        <div className="relative overflow-hidden rounded-[3rem] bg-primary shadow-2xl">
          <div className="absolute top-0 right-0 p-12 opacity-10 rotate-12 scale-150 text-white">
            <ShieldCheck size={150} />
          </div>
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-8 p-10 md:p-16">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-accent text-primary px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">
                <Star size={12} fill="currentColor" /> Strategic Mission
              </div>
              <h2 className="text-3xl md:text-4xl font-headline font-black text-white leading-tight">কমিটির লক্ষ্য ও উদ্দেশ্য</h2>
              <div className="h-1.5 w-24 bg-accent rounded-full"></div>
            </div>
            
            <div className="space-y-6">
              {[
                "প্রতিষ্ঠানের অবকাঠামোগত উন্নয়ন ও শিক্ষার পরিবেশ নিশ্চিত করা।",
                "শিক্ষক-শিক্ষার্থী এবং অভিভাবকদের মধ্যে সুসম্পর্ক বজায় রাখা।",
                "সরকারি নীতিমালা অনুযায়ী স্কুল পরিচালনা এবং আর্থিক স্বচ্ছতা নিশ্চিত করা।"
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/10 hover:bg-white/20 transition-all">
                  <div className="w-8 h-8 bg-accent text-primary rounded-full flex items-center justify-center shrink-0 shadow-lg">
                    <ShieldCheck size={16} />
                  </div>
                  <p className="text-white font-bold leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
