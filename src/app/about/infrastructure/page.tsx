
"use client";

import Image from "next/image";
import { Building2, BookOpen, Monitor, Award, ArrowLeft, Trees, Wifi, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

export default function InfrastructurePage() {
  const facilities = [
    { icon: BookOpen, title: "সমৃদ্ধ লাইব্রেরি", desc: "হাজারো বই এবং ডিজিটাল ই-বুক সমৃদ্ধ আধুনিক লাইব্রেরি।" },
    { icon: Monitor, title: "কম্পিউটার ল্যাব", desc: "উন্নত ইন্টারনাল কানেক্টিভিটি সহ আধুনিক পিসি ল্যাব।" },
    { icon: Zap, title: "বিজ্ঞানাগার", desc: "পদার্থ, রসায়ন এবং জীববিজ্ঞানের সকল আধুনিক সরঞ্জাম সহ ল্যাব।" },
    { icon: Trees, title: "খেলার মাঠ", desc: "শিক্ষার্থীদের শারীরিক বিকাশে বিশাল বিস্তৃত সবুজ মাঠ।" },
    { icon: Wifi, title: "ডিজিটাল ক্যাম্পাস", desc: "পুরো ক্যাম্পাস হাই-স্পিড ওয়াইফাই এবং সিসিটিভি দ্বারা নিয়ন্ত্রিত।" },
    { icon: Building2, title: "নিজস্ব ভবন", desc: "বহুতল বিশিষ্ট নিরাপদ এবং আধুনিক স্থাপত্যের সুসজ্জিত ভবন।" }
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-secondary/5">
      <div className="max-w-6xl mx-auto px-4 space-y-16">
        <div className="space-y-4">
          <Link href="/about">
            <Button variant="ghost" className="gap-2 text-muted-foreground hover:text-primary px-0 active:scale-95 transition-transform">
              <ArrowLeft size={18} /> সম্পর্কে ফিরে যান
            </Button>
          </Link>
          <div className="space-y-1">
            <span className="text-accent font-black uppercase tracking-[0.2em] text-[10px]">Campus & Facilities</span>
            <h1 className="text-4xl lg:text-6xl font-headline font-black text-primary">ভৌত অবকাঠামো</h1>
            <p className="text-muted-foreground font-medium max-w-xl">
              গাবুরা জি.এল.এম. মাধ্যমিক বিদ্যালয়ের আধুনিক ও সুসজ্জিত ক্যাম্পাসের এক নজরে চিত্র।
            </p>
          </div>
        </div>

        <div className="relative aspect-video rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
          <Image 
            src="https://picsum.photos/seed/infrastructure/1200/600" 
            alt="School Campus" 
            fill 
            className="object-cover" 
            data-ai-hint="school campus"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
          <div className="absolute bottom-10 left-10 text-white space-y-2">
            <h2 className="text-3xl font-headline font-black">আমাদের সবুজ ক্যাম্পাস</h2>
            <p className="text-sm font-bold opacity-80 uppercase tracking-widest">Environment for Excellence</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((f, i) => (
            <Card key={i} className="glass-card group hover:bg-white transition-all duration-500 overflow-hidden">
              <CardContent className="p-8 space-y-6">
                <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <f.icon size={28} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-headline font-black text-primary leading-tight uppercase">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed font-medium">{f.desc}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="glass-card p-12 bg-accent text-primary text-center space-y-6 relative overflow-hidden">
          <h2 className="text-3xl font-headline font-black">আগামীর পরিকল্পনা</h2>
          <p className="text-lg opacity-80 max-w-2xl mx-auto leading-relaxed font-bold">
            খুব শীঘ্রই আমরা একটি মাল্টিমিডিয়া অডিটোরিয়াম এবং নতুন হোস্টেল ভবন নির্মাণের কাজ শুরু করতে যাচ্ছি।
          </p>
        </div>
      </div>
    </div>
  );
}
