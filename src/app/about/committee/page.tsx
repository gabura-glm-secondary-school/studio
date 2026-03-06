
"use client";

import Image from "next/image";
import { Users2, ShieldCheck, ArrowLeft, Mail, Phone, UserCheck } from "lucide-react";
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
            <Button variant="ghost" className="gap-2 text-muted-foreground hover:text-primary px-0 active:scale-95 transition-transform">
              <ArrowLeft size={18} /> সম্পর্কে ফিরে যান
            </Button>
          </Link>
          <div className="space-y-1">
            <span className="text-accent font-black uppercase tracking-[0.2em] text-[10px]">Governance & Policy</span>
            <h1 className="text-4xl font-headline font-black text-primary uppercase">ম্যানেজিং কমিটি</h1>
            <p className="text-muted-foreground font-medium max-w-xl">
              প্রতিষ্ঠানের সুশাসন এবং শিক্ষার মান নিশ্চিতকরণে নিয়োজিত পরিচালনা পর্ষদ।
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {boardMembers.map((member, idx) => (
            <Card key={idx} className="glass-card overflow-hidden group hover:border-accent transition-all duration-500 shadow-sm hover:shadow-xl">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-1000" 
                  data-ai-hint="portrait"
                />
                <Badge className="absolute top-4 right-4 bg-white/90 text-primary font-black uppercase text-[9px] px-2 py-0.5 shadow-sm">
                  {member.role}
                </Badge>
              </div>
              <CardContent className="p-6 text-center space-y-3">
                <div className="space-y-1">
                  <h3 className="font-headline font-black text-primary text-lg leading-tight group-hover:text-accent transition-colors">
                    {member.bnName}
                  </h3>
                  <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{member.name}</p>
                </div>
                <div className="pt-3 border-t border-dashed border-primary/10">
                  <p className="text-xs font-black text-accent uppercase tracking-tighter">{member.bnRole}</p>
                  <p className="text-[9px] font-bold text-muted-foreground italic uppercase">{member.subRole}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="glass-card p-10 bg-primary text-white space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10 rotate-12">
            <ShieldCheck size={120} />
          </div>
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-2xl font-headline font-black mb-4">কমিটির লক্ষ্য ও উদ্দেশ্য</h2>
            <div className="space-y-4 opacity-90 text-sm leading-relaxed font-medium">
              <p>• প্রতিষ্ঠানের অবকাঠামোগত উন্নয়ন ও শিক্ষার পরিবেশ নিশ্চিত করা।</p>
              <p>• শিক্ষক-শিক্ষার্থী এবং অভিভাবকদের মধ্যে সুসম্পর্ক বজায় রাখা।</p>
              <p>• সরকারি নীতিমালা অনুযায়ী স্কুল পরিচালনা এবং আর্থিক স্বচ্ছতা নিশ্চিত করা।</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
