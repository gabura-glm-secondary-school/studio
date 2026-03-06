"use client";

import Image from "next/image";
import { Quote, ArrowLeft, ShieldCheck, Users, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ChairmanMessagePage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-secondary/5">
      <div className="max-w-4xl mx-auto px-4 space-y-12">
        {/* Header navigation */}
        <Link href="/">
          <Button variant="ghost" className="gap-2 text-muted-foreground hover:text-primary mb-8 px-0 active:scale-95 transition-transform">
            <ArrowLeft size={18} /> প্রচ্ছদ পাতায় ফিরে যান
          </Button>
        </Link>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Chairman Image & Basic Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white animate-in fade-in zoom-in duration-500">
              <Image 
                src="https://picsum.photos/seed/chairman1/600/750" 
                alt="সভাপতি" 
                fill 
                className="object-cover" 
                data-ai-hint="professional leader"
              />
            </div>
            <div className="glass-card p-6 text-center space-y-2">
              <h2 className="text-xl font-headline font-black text-primary">হাজী মোঃ মফিজুল হক</h2>
              <p className="text-xs font-bold text-accent uppercase tracking-widest">সভাপতি</p>
              <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-tighter">পরিচালনা পর্ষদ</p>
            </div>
          </div>

          {/* Detailed Message */}
          <div className="lg:col-span-3 space-y-8 animate-in fade-in slide-in-from-right duration-500">
            <div className="space-y-4">
              <span className="text-accent font-black uppercase tracking-[0.2em] text-[10px]">সভাপতির বাণী</span>
              <h1 className="text-4xl font-headline font-black text-primary leading-tight">সমন্বিত প্রচেষ্টায় উন্নত ভবিষ্যৎ</h1>
            </div>

            <div className="glass-card p-8 md:p-10 relative overflow-hidden">
              <Quote className="absolute -top-4 -left-4 text-primary/10 w-24 h-24 rotate-12" fill="currentColor" />
              
              <div className="relative z-10 space-y-6 text-muted-foreground leading-relaxed text-lg font-medium">
                <p>
                  প্রতিষ্ঠানের পরিচালকবৃন্দ, শিক্ষকবৃন্দ, অভিভাবকবৃন্দ, শিক্ষার্থীদের ও সর্বোপরি এলাকাবাসীর সমন্বিত প্রচেষ্টার ফল। এলাকাবাসীর সেবার মনোভাব নিয়ে মান সম্পন্ন শিক্ষা প্রসারে এবং কৃতিত্বপূর্ণ ফল অর্জন করে এই প্রতিষ্ঠানটি ইতিমধ্যে একটি স্থান করে নিয়েছে।
                </p>
                <p>
                  প্রতিষ্ঠানের সার্বিক ক্ষেত্রে সফলতার জন্য মানুষের মাঝে এক ধরনের চাহিদা সৃষ্টি হওয়ায় তাঁরা তাঁদের কোমলমতি ছেলে মেয়েদের এই প্রতিষ্ঠানে পড়াশুনা করাতে যথেষ্ট আগ্রহী হয়ে উঠেছেন। প্রতিষ্ঠানের সাফল্যে অভিভাকগণের মধ্যে ইতিবাচক প্রভাব ছাড়াও বিভিন্ন পর্যায়ে বেশ প্রসংশনীয় অবদান রাখছে।
                </p>
                <p>
                  সবকিছুর মূলে রয়েছে প্রতিষ্ঠানের অটুট শৃঙ্খলা, শিক্ষকগণের একাগ্রতা, শিক্ষক-শিক্ষার্থী ও অভিভাবকগণের মধ্যে সমন্বয় সাধন। শিক্ষার্থীদেরকে উপযুক্তভাবে গড়ে তোলাই আমাদের লক্ষ্য। এই লক্ষ্য বাস্তবায়নের জন্য আমাদের রয়েছে বিরামহীন চেষ্টা ও পরিকল্পনা।
                </p>
              </div>
            </div>

            {/* Strategic Pillars */}
            <div className="grid grid-cols-3 gap-4">
              <div className="glass-card p-4 text-center space-y-1 hover:bg-white transition-colors cursor-default">
                <ShieldCheck className="mx-auto text-primary mb-2" size={24} />
                <p className="text-[10px] font-black text-primary uppercase leading-tight">অটুট শৃঙ্খলা</p>
              </div>
              <div className="glass-card p-4 text-center space-y-1 hover:bg-white transition-colors cursor-default">
                <Users className="mx-auto text-accent mb-2" size={24} />
                <p className="text-[10px] font-black text-primary uppercase leading-tight">সমন্বয় সাধন</p>
              </div>
              <div className="glass-card p-4 text-center space-y-1 hover:bg-white transition-colors cursor-default">
                <Target className="mx-auto text-primary mb-2" size={24} />
                <p className="text-[10px] font-black text-primary uppercase leading-tight">বিরামহীন চেষ্টা</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
