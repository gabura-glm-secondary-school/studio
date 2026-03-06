
"use client";

import { Target, Rocket, Heart, Lightbulb, ArrowLeft, ShieldCheck, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card } from "@/components/ui/card";

export default function VisionMissionPage() {
  const pillars = [
    { icon: Lightbulb, title: "মানসম্মত শিক্ষা", desc: "আধুনিক ও বিজ্ঞানভিত্তিক শিক্ষার মাধ্যমে শিক্ষার্থীদের মেধার বিকাশ ঘটানো।" },
    { icon: ShieldCheck, title: "নৈতিকতা", desc: "চরিত্র গঠন এবং দেশপ্রেমের চেতনায় শিক্ষার্থীদের উদ্বুদ্ধ করা।" },
    { icon: Heart, title: "সততা ও শৃঙ্খলা", desc: "প্রতিটি কাজে স্বচ্ছতা এবং কঠোর শৃঙ্খলার মাধ্যমে আদর্শ মানুষ হিসেবে গড়ে তোলা।" }
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-secondary/5">
      <div className="max-w-5xl mx-auto px-4 space-y-16">
        <div className="space-y-4">
          <Link href="/about">
            <Button variant="ghost" className="gap-2 text-primary font-black hover:bg-primary/10 px-0 active:scale-95 transition-transform">
              <ArrowLeft size={18} /> সম্পর্কে ফিরে যান
            </Button>
          </Link>
          <div className="text-center space-y-4">
            <span className="text-accent font-black uppercase tracking-[0.2em] text-[10px] bg-primary/5 px-4 py-1.5 rounded-full">Future Roadmap</span>
            <h1 className="text-4xl lg:text-6xl font-headline font-black text-primary tracking-tighter">ভিশন ও মিশন</h1>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="bg-white border-2 border-white !rounded-[3rem] p-10 md:p-12 space-y-8 shadow-2xl hover:border-primary/20 transition-all group">
            <div className="w-20 h-20 bg-primary/10 rounded-[2rem] flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-lg">
              <Rocket size={40} />
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-headline font-black text-primary">আমাদের ভিশন</h2>
              <div className="h-1.5 w-16 bg-primary rounded-full"></div>
              <p className="text-xl text-slate-800 leading-relaxed font-black">
                একটি প্রযুক্তিনির্ভর এবং নৈতিক মূল্যবোধ সম্পন্ন আলোকিত সমাজ গঠন করা, যেখানে প্রতিটি শিক্ষার্থী তার সুপ্ত প্রতিভার পূর্ণ বিকাশ ঘটিয়ে বিশ্ব নাগরিক হিসেবে গড়ে উঠবে।
              </p>
            </div>
          </Card>

          <Card className="bg-white border-2 border-white !rounded-[3rem] p-10 md:p-12 space-y-8 shadow-2xl hover:border-accent/20 transition-all group">
            <div className="w-20 h-20 bg-accent/10 rounded-[2rem] flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-primary transition-all duration-500 shadow-lg">
              <Target size={40} />
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-headline font-black text-primary">আমাদের মিশন</h2>
              <div className="h-1.5 w-16 bg-accent rounded-full"></div>
              <p className="text-xl text-slate-800 leading-relaxed font-black">
                মানসম্পন্ন পাঠদান, ডিজিটাল রিসোর্স এবং সহ-শিক্ষা কার্যক্রমের মাধ্যমে শিক্ষার্থীদের দক্ষ ও সৃজনশীল মানুষ হিসেবে প্রস্তুত করা। আমরা বিশ্বাস করি সুশিক্ষাই সাফল্যের মূল চাবিকাঠি।
              </p>
            </div>
          </Card>
        </div>

        <div className="space-y-12">
          <div className="flex flex-col items-center gap-4">
            <div className="h-px w-24 bg-primary/20"></div>
            <h3 className="text-2xl font-headline font-black text-primary text-center uppercase tracking-widest">আমাদের মূল স্তম্ভসমূহ</h3>
            <div className="h-px w-24 bg-primary/20"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((p, i) => (
              <div key={i} className="bg-white p-8 md:p-10 text-center space-y-6 rounded-[2.5rem] shadow-xl border-2 border-transparent hover:border-accent transition-all duration-500 group">
                <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto text-primary group-hover:scale-110 transition-transform">
                  <p.icon size={32} />
                </div>
                <div className="space-y-3">
                  <h4 className="font-black text-xl text-primary">{p.title}</h4>
                  <p className="text-slate-700 font-bold leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
