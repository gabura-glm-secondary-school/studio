import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Quote } from "lucide-react";

export function PrincipalChairmanMessages() {
  return (
    <section className="py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Principal Message */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative animate-in slide-in-from-left duration-500">
            <div className="absolute inset-0 bg-primary/10 rounded-[3rem] -rotate-3 scale-105"></div>
            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white/60">
              <Image 
                src="https://picsum.photos/seed/principal1/600/750" 
                alt="Principal" 
                fill 
                className="object-cover" 
                data-ai-hint="headteacher portrait"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 glass-card p-8 hidden md:block max-w-xs shadow-2xl border-white/60">
               <Quote className="text-accent mb-3" size={32} fill="currentColor" />
               <p className="text-primary font-black italic text-base leading-tight">"সুশিক্ষাই আমাদের অঙ্গীকার"</p>
            </div>
          </div>
          <div className="space-y-6 lg:pl-8">
            <div className="space-y-3">
              <span className="text-accent font-black uppercase tracking-[0.2em] text-[10px]">অধ্যক্ষের বাণী</span>
              <h2 className="text-3xl lg:text-5xl font-headline font-black text-primary">অধ্যক্ষের দূরদর্শী স্বপ্ন</h2>
            </div>
            <div className="glass-card p-8 space-y-4">
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-medium line-clamp-4">
                দ্বীপ ইউনিয়ন গাবুরার গাইন পরিবারের পৃষ্ঠপোষকতায় এলাকার একদল বিদ্যোৎসাহী ব্যক্তির নিরলস প্রচেষ্টার ফসল গাবুরা জি, এল, এম, মাধ্যমিক বিদ্যালয়। ১৯৪৬ সাল থেকে অদ্যাবধি গাবুরা ইউনিয়নের প্রাণকেন্দ্রে অবস্থিত এ বিদ্যালয়টি এলাকার শিক্ষার বাতিঘর হিসাবে স্বমহিমায় প্রজ্জলিত...
              </p>
              <div className="pt-2">
                <h4 className="font-headline font-black text-xl text-primary leading-none">মোঃ আশরাফুল আলম</h4>
                <p className="text-[10px] font-black text-accent uppercase tracking-widest mt-1">অধ্যক্ষ, গাবুরা জি.এল.এম. মাধ্যমিক বিদ্যালয়</p>
              </div>
              <Button size="lg" className="btn-pill btn-gradient-primary w-full md:w-auto h-12 active:scale-95 transition-transform" asChild>
                <Link href="/about/principal">বিস্তারিত পড়ুন</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Chairman Message */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 space-y-6 lg:pr-8">
             <div className="space-y-3 text-right lg:text-left">
              <span className="text-accent font-black uppercase tracking-[0.2em] text-[10px]">পরিচালনা পর্ষদ</span>
              <h2 className="text-3xl lg:text-5xl font-headline font-black text-primary text-right lg:text-left">সভাপতির বার্তা</h2>
            </div>
            <div className="glass-card p-8 space-y-4 bg-gradient-to-br from-white/60 to-accent/5">
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-medium line-clamp-4">
                প্রতিষ্ঠানের পরিচালকবৃন্দ, শিক্ষকবৃন্দ, অভিভাবকবৃন্দ, শিক্ষার্থীদের ও সর্বোপরি এলাকাবাসীর সমন্বিত প্রচেষ্টার ফল। এলাকাবাসীর সেবার মনোভাব নিয়ে মান সম্পন্ন শিক্ষা প্রসারে এবং কৃতিত্বপূর্ণ ফল অর্জন করে এই প্রতিষ্ঠানটি ইতিমধ্যে একটি স্থান করে নিয়েছে। প্রতিষ্ঠানের সার্বিক ক্ষেত্রে সফলতার জন্য মানুষের মাঝে এক ধরনের চাহিদা সৃষ্টি হওয়ায়...
              </p>
              <div className="pt-2 text-right lg:text-left">
                <h4 className="font-headline font-black text-xl text-primary leading-none">হাজী মোঃ মফিজুল হক</h4>
                <p className="text-[10px] font-black text-accent uppercase tracking-widest mt-1">সভাপতি, পরিচালনা পর্ষদ</p>
              </div>
              <div className="flex justify-end lg:justify-start">
                <Button size="lg" className="btn-pill btn-gradient-accent w-full md:w-auto h-12 active:scale-95 transition-transform" asChild>
                  <Link href="/about/chairman">সম্পূর্ণ গল্প</Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative animate-in slide-in-from-right duration-500">
             <div className="absolute inset-0 bg-accent/10 rounded-[3rem] rotate-3 scale-105"></div>
            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white/60">
              <Image 
                src="https://picsum.photos/seed/chairman1/600/750" 
                alt="Chairman" 
                fill 
                className="object-cover" 
                data-ai-hint="professional leader"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
