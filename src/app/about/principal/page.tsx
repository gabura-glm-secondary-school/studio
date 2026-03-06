
"use client";

import Image from "next/image";
import { Quote, ArrowLeft, GraduationCap, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PrincipalMessagePage() {
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
          {/* Principal Image & Basic Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white animate-in fade-in zoom-in duration-500">
              <Image 
                src="https://i.postimg.cc/44LFrGMs/images-(1)-(13).jpg" 
                alt="প্রধান শিক্ষক" 
                fill 
                className="object-cover" 
                data-ai-hint="headteacher portrait"
              />
            </div>
            <div className="glass-card p-6 text-center space-y-2">
              <h2 className="text-xl font-headline font-black text-primary uppercase">S.M EASMINUR RAHMAN LINKON</h2>
              <p className="text-xs font-bold text-accent uppercase tracking-widest">প্রধান শিক্ষক</p>
              <p className="text-[10px] text-muted-foreground font-medium">গাবুরা জি.এল.এম. মাধ্যমিক বিদ্যালয়</p>
            </div>
          </div>

          {/* Detailed Message */}
          <div className="lg:col-span-3 space-y-8 animate-in fade-in slide-in-from-right duration-500">
            <div className="space-y-4">
              <span className="text-accent font-black uppercase tracking-[0.2em] text-[10px]">প্রধান শিক্ষকের বাণী</span>
              <h1 className="text-4xl font-headline font-black text-primary leading-tight">সুশিক্ষাই আমাদের অঙ্গীকার</h1>
            </div>

            <div className="glass-card p-8 md:p-10 relative overflow-hidden">
              <Quote className="absolute -top-4 -left-4 text-primary/10 w-24 h-24 rotate-12" fill="currentColor" />
              
              <div className="relative z-10 space-y-6 text-muted-foreground leading-relaxed text-lg font-medium">
                <p>
                  দ্বীপ ইউনিয়ন গাবুরার গাইন পরিবারের পৃষ্ঠপোষকতায় এলাকার একদল বিদ্যোৎসাহী ব্যক্তির নিরলস প্রচেষ্টার ফসল গাবুরা জি, এল, এম, মাধ্যমিক বিদ্যালয়। ১৯৪৬ সাল থেকে অদ্যাবধি গাবুরা ইউনিয়নের প্রাণকেন্দ্রে অবস্থিত এ বিদ্যালয়টি এলাকার শিক্ষার বাতিঘর হিসাবে স্বমহিমায় প্রজ্জলিত, যা যুগের পরে যুগ বিভিন্ন প্রজন্মকে জ্ঞানদানে এক অনবদ্য ভূমিকা রেখে চলেছে।
                </p>
                <p>
                  আধুনিক সুযোগ-সুবিধা বঞ্চিত, অবকাঠামোগত অপ্রতুলতা ও বিভিন্ন সীমাবদ্ধতার মাঝেও জ্ঞানের মশাল হিসাবে অকাতরে জ্ঞান বিলিয়ে যাচ্ছে বিদ্যালয়টি। সক্রিয় ও শিক্ষাবান্ধব ম্যানেজিং কমিটির নির্দেশনায় ও একদল উদীয়মান শিক্ষকদের নিরলস প্রচেষ্টায় শত সীমাবদ্ধতার মাঝেও শিক্ষার্থীদের প্রতিযোগী মনোভাব সৃষ্টি, স্বপ্ন দেখানো, সমৃদ্ধ ক্যারিয়ার গঠন, নিজেকে জানা, সর্বোপরি পরিবার, সমাজ, ও দেশের একজন সচেতন ও নৈতিক নগরিক হিসবে গড়ে তোলার ক্ষেত্রে এ বিদ্যাপীঠের ভূমিকা অনস্বীকার্য।
                </p>
                <p>
                  ফলশ্রুতিতে বিদ্যালয় টি উপজেলা তথা জেলার প্রথম সারির প্রতিষ্ঠান হিসাবে স্বীকৃত। প্রতি বছর ট্যালেন্টপুল ও সাধারণ গ্রেডে বৃত্ত প্রাপ্তিসহ জে.এস.সি ও এস.এস.সি পরীক্ষায় গোল্ডেন এ+ পেয়ে শতভাগ পাশের স্বাক্ষর রেখে আসছে।
                </p>
                <p>
                  ছয় যুগেরও বেশী সময় ধরে এ বিদ্যাপীঠের হাজারো শিক্ষার্থী সমাজ সেবা ও শিক্ষা প্রচারের ব্রত নিয়ে ছড়িয়ে পড়েছে দেশের আনাচে কানাচে ও বহির্বিশ্বে। স্বপ্নের সেই বটবৃক্ষ আজ ফুলে ফলে সুশোভিত। এ বিদ্যাপিঠের প্রাক্তন শিক্ষার্থীদের মধ্যে রয়েছে খ্যাতিমান শিক্ষাবিদ, রাজনীতিবিদ, সরকারি কর্মকর্তা, ডাক্তার, ইঞ্জিনিয়ার, আইনজীবিসহ সমাজে নেতৃত্বদানকারী ব্যক্তিবর্গ।
                </p>
              </div>
            </div>

            {/* Success highlights */}
            <div className="grid grid-cols-3 gap-4">
              <div className="glass-card p-4 text-center space-y-1 hover:bg-white transition-colors cursor-default">
                <GraduationCap className="mx-auto text-primary mb-2" size={24} />
                <p className="text-xl font-black text-primary">১০০%</p>
                <p className="text-[8px] font-bold text-muted-foreground uppercase">পাশ হার</p>
              </div>
              <div className="glass-card p-4 text-center space-y-1 hover:bg-white transition-colors cursor-default">
                <Award className="mx-auto text-accent mb-2" size={24} />
                <p className="text-xl font-black text-primary">৩০০০+</p>
                <p className="text-[8px] font-bold text-muted-foreground uppercase">সফল গ্র্যাজুয়েট</p>
              </div>
              <div className="glass-card p-4 text-center space-y-1 hover:bg-white transition-colors cursor-default">
                <Users className="mx-auto text-primary mb-2" size={24} />
                <p className="text-xl font-black text-primary">৭০+</p>
                <p className="text-[8px] font-bold text-muted-foreground uppercase">অভিজ্ঞ শিক্ষক</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
