
"use client";

import { ShieldCheck, ArrowLeft, Clock, Info, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function CitizensCharterPage() {
  const services = [
    { service: "নতুন ভর্তি প্রক্রিয়া", docs: "জন্ম সনদ, প্রত্যয়ন পত্র, ৪ কপি ছবি", time: "৩-৫ কার্যদিবস" },
    { service: "প্রশংসাপত্র প্রদান", docs: "আবেদন পত্র ও প্রবেশপত্র", time: "২ কার্যদিবস" },
    { service: "টিসি (Transfer Certificate)", docs: "নির্ধারিত ফরম ও ছাড়পত্রের কারণ", time: "৭ কার্যদিবস" },
    { service: "মার্কশিট/ফলাফল সংগ্রহ", docs: "রোল ও রেজিস্ট্রেশন নম্বর", time: "তাৎক্ষণিক" }
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-secondary/5">
      <div className="max-w-5xl mx-auto px-4 space-y-12">
        <div className="space-y-4">
          <Link href="/about">
            <Button variant="ghost" className="gap-2 text-primary font-black hover:bg-primary/10 px-0 active:scale-95 transition-transform">
              <ArrowLeft size={18} /> সম্পর্কে ফিরে যান
            </Button>
          </Link>
          <div className="space-y-1">
            <span className="text-accent font-black uppercase tracking-[0.2em] text-[10px] bg-primary/5 px-4 py-1 rounded-full">Service Standards</span>
            <h1 className="text-4xl font-headline font-black text-primary tracking-tight">সিটিজেন চার্টার</h1>
            <p className="text-slate-700 font-bold">আমাদের সেবার মান এবং প্রয়োজনীয় তথ্যাদি এখানে প্রদান করা হলো।</p>
          </div>
        </div>

        <Card className="bg-white border-2 border-white rounded-[2.5rem] shadow-2xl overflow-hidden">
          <CardContent className="p-0">
            <Table>
              <TableHeader className="bg-primary/5">
                <TableRow className="border-b-2 border-primary/10">
                  <TableHead className="font-black text-primary uppercase text-xs py-8 pl-10">সেবার নাম</TableHead>
                  <TableHead className="font-black text-primary uppercase text-xs py-8">প্রয়োজনীয় কাগজপত্র</TableHead>
                  <TableHead className="font-black text-primary uppercase text-xs py-8 text-right pr-10">প্রদানের সময়সীমা</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {services.map((s, i) => (
                  <TableRow key={i} className="hover:bg-secondary/5 transition-colors border-b border-dashed border-primary/10 group">
                    <TableCell className="font-black text-primary py-8 pl-10 text-lg">{s.service}</TableCell>
                    <TableCell className="text-slate-800 font-bold text-sm max-w-xs">{s.docs}</TableCell>
                    <TableCell className="text-right pr-10">
                      <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-xl text-[11px] font-black uppercase tracking-widest border-2 border-emerald-200 shadow-sm">
                        <Clock size={14} /> {s.time}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-10 space-y-6 rounded-[2.5rem] shadow-xl border-2 border-primary/5 hover:border-accent transition-all">
            <div className="flex items-center gap-4 text-primary font-black text-xl">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary shadow-inner">
                <Info size={24} />
              </div>
              গুরুত্বপূর্ণ নোট
            </div>
            <p className="text-base text-slate-800 leading-relaxed font-black">
              যেকোনো সেবার জন্য আবেদন অফিস চলাকালীন (সকাল ৯:০০ - বিকাল ৪:০০) সময়ের মধ্যে করতে হবে। সকল আবেদন প্রধান শিক্ষক বরাবর হতে হবে।
            </p>
          </div>
          
          <div className="bg-primary p-10 space-y-6 rounded-[2.5rem] shadow-xl text-white relative overflow-hidden group">
            <div className="absolute -bottom-4 -right-4 opacity-10 group-hover:rotate-12 transition-transform duration-700">
              <CheckCircle2 size={120} />
            </div>
            <div className="flex items-center gap-4 font-black text-xl relative z-10">
              <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center text-accent shadow-lg border border-white/20">
                <ShieldCheck size={24} />
              </div>
              আমাদের অঙ্গীকার
            </div>
            <p className="text-base text-white/90 leading-relaxed font-bold relative z-10">
              আমরা দ্রুততম সময়ে হয়রানি মুক্ত সেবা প্রদানে অঙ্গীকারবদ্ধ। কোনো অভিযোগ থাকলে সরাসরি প্রধান শিক্ষক অথবা অভিযোগ বক্সে জানাতে পারেন।
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
