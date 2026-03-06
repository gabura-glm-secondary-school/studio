
"use client";

import { FileText, CheckCircle2, Clock, ShieldCheck, ArrowLeft, Info } from "lucide-react";
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
            <Button variant="ghost" className="gap-2 text-muted-foreground hover:text-primary px-0 active:scale-95 transition-transform">
              <ArrowLeft size={18} /> সম্পর্কে ফিরে যান
            </Button>
          </Link>
          <div className="space-y-1">
            <span className="text-accent font-black uppercase tracking-[0.2em] text-[10px]">Service Standards</span>
            <h1 className="text-4xl font-headline font-black text-primary">সিটিজেন চার্টার</h1>
            <p className="text-muted-foreground font-medium">আমাদের সেবার মান এবং প্রয়োজনীয় তথ্যাদি এখানে প্রদান করা হলো।</p>
          </div>
        </div>

        <Card className="glass-card overflow-hidden">
          <CardContent className="p-0">
            <Table>
              <TableHeader className="bg-primary/5">
                <TableRow>
                  <TableHead className="font-black text-primary uppercase text-xs py-6 pl-8">সেবার নাম</TableHead>
                  <TableHead className="font-black text-primary uppercase text-xs py-6">প্রয়োজনীয় কাগজপত্র</TableHead>
                  <TableHead className="font-black text-primary uppercase text-xs py-6 text-right pr-8">প্রদানের সময়সীমা</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {services.map((s, i) => (
                  <TableRow key={i} className="hover:bg-secondary/5 transition-colors group">
                    <TableCell className="font-bold text-primary py-6 pl-8">{s.service}</TableCell>
                    <TableCell className="text-muted-foreground font-medium text-sm">{s.docs}</TableCell>
                    <TableCell className="text-right pr-8">
                      <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-emerald-100">
                        <Clock size={12} /> {s.time}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass-card p-8 space-y-4">
            <div className="flex items-center gap-3 text-primary font-black text-lg">
              <Info className="text-accent" /> গুরুত্বপূর্ণ নোট
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed font-medium">
              যেকোনো সেবার জন্য আবেদন অফিস চলাকালীন (সকাল ৯:০০ - বিকাল ৪:০০) সময়ের মধ্যে করতে হবে। সকল আবেদন প্রধান শিক্ষক বরাবর হতে হবে।
            </p>
          </div>
          <div className="glass-card p-8 space-y-4">
            <div className="flex items-center gap-3 text-primary font-black text-lg">
              <ShieldCheck className="text-accent" /> আমাদের অঙ্গীকার
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed font-medium">
              আমরা দ্রুততম সময়ে হয়রানি মুক্ত সেবা প্রদানে অঙ্গীকারবদ্ধ। কোনো অভিযোগ থাকলে অভিযোগ বক্সে জানাতে পারেন।
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
