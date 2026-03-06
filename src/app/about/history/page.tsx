
"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { History as HistoryIcon, Map, Users, Award, Landmark, BookOpen } from "lucide-react";

export default function HistoryPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-secondary/5">
      <div className="max-w-5xl mx-auto px-4 space-y-16">
        {/* Hero Section */}
        <div className="text-center space-y-4 animate-in fade-in duration-700">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <HistoryIcon className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-4xl lg:text-6xl font-headline font-bold text-primary">আমাদের গৌরবময় ইতিহাস</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto font-medium">
            গাবুরা গোপাল লক্ষ্মী মেমোরিয়াল (জি. এল. এম.) মাধ্যমিক বিদ্যালয়ের প্রতিষ্ঠার পথচলা এবং দ্বীপ জনপদে শিক্ষার আলো ছড়ানোর গল্প।
          </p>
        </div>

        {/* Founding Context */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 order-2 lg:order-1">
            <h2 className="text-3xl font-headline font-bold text-primary flex items-center gap-3">
              <Map className="text-accent" /> দ্বীপ জনপদ গাবুরা
            </h2>
            <div className="glass-card p-8 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                গাবুরা একটি দ্বীপ ইউনিয়ন। পূর্ব পুরুষদের ঘাম ঝরানো কায়িক পরিশ্রম আর রক্ত ঝরানো অর্থ ব্যায়ের মাধ্যমে প্রায় দুইশ বছরেরও পূর্বে আবাদ হয়েছে গাবুরা। প্রাথমিক পর্যায়ে পূর্ব পুরুষদের একমাত্র চিন্তা ছিলো গাবুরায় বসতি স্থাপন করে অনাবাদি জমি আবাদ করে সাগর-নদীর লোনা পানি থেকে মুক্ত হয়ে বাল-বাচ্চা নিয়ে মোটা ভাত মোটা কাপড়ে দিন কাটানো।
              </p>
              <p>
                শিক্ষা-দীক্ষায় ও ছেলে-মেয়েদের পড়া-লেখায় তেমন কোন প্রচেষ্টা পরিলক্ষিত না হলেও ব্রিটিশ আমল থেকে তালপাতায় ঐ কালি-কলমের আঁচড় টেনে শিক্ষার্থীদের প্রাথমিক অক্ষর জ্ঞান দেওয়া হতো। গ্রামের দু-একজন স্বশিক্ষিত ব্যক্তি ঐ সব পাঠশালায় পন্ডিতের দায়িত্ব পালন করতেন।
              </p>
            </div>
          </div>
          <div className="relative aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl order-1 lg:order-2">
            <Image 
              src="https://picsum.photos/seed/island1/800/600" 
              alt="Gabura Island History" 
              fill 
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700" 
              data-ai-hint="river landscape"
            />
          </div>
        </div>

        {/* The Visionary Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white/60">
            <Image 
              src="https://picsum.photos/seed/visionary1/600/750" 
              alt="Legacy of Nur Ali Gain" 
              fill 
              className="object-cover" 
              data-ai-hint="portrait man"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-headline font-bold text-primary flex items-center gap-3">
              <Landmark className="text-accent" /> প্রতিষ্ঠার স্বপ্নদ্রষ্টা
            </h2>
            <div className="glass-card p-8 bg-primary/5 border-primary/10 space-y-4">
              <p className="font-bold text-primary text-xl">মরহুম নুর আলী গাইন</p>
              <p className="text-muted-foreground leading-relaxed">
                এলাকার শিক্ষা সম্প্রসারণে প্রথমে যে ব্যক্তিটির নাম উল্লেখ করতে হয় তিনি হলেন গাবুরার গাইন পরিবারের মরহুম নুর আলী গাইন। নকিপুর হরিচরণ পাইলট হাইস্কুলের শিক্ষার্থীদের পোষাক ও বই খাতা বগলে নিয়ে স্কুলে যাতাইয়াত তার মনে দাগ কাটে।
              </p>
              <p className="text-muted-foreground leading-relaxed italic">
                নিজের এলাকার ছেলে-মেয়েদেরও ঐ রূপ শিক্ষাদানে আকাঙ্খা সৃষ্টি হয়। বাড়ী এসে অন্যান্য সহোদর ভাইদের সাথে পরামর্শ করে গাইনবাড়ীতে একটি স্কুল প্রতিষ্ঠার যুগান্তকারী সিদ্ধান্ত নেন। সেই সিদ্ধান্তের ফসল বর্তমান গাবুরা গোপাল লক্ষী মেমোরিয়াল মাধ্যমিক বিদ্যালয়।
              </p>
            </div>
          </div>
        </div>

        {/* Collaborative Founders */}
        <Card className="glass-card overflow-hidden">
          <div className="p-12 space-y-8">
            <div className="text-center space-y-2">
              <Users className="w-12 h-12 text-accent mx-auto" />
              <h2 className="text-3xl font-headline font-bold text-primary">সম্মিলিত উদ্যোগ ও প্রতিষ্ঠাতা সদস্যবৃন্দ</h2>
              <p className="text-muted-foreground">গাবুরার শিক্ষা সম্প্রসারণে যারা অসামান্য অবদান রেখেছিলেন</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "মরহুম নুর আলী সরদার (সোরা)",
                "মরহুম জি.এম তোরাব আলী (চাঁদনীমুখা)",
                "মরহুম আব্দুল লতিফ খান (খোলপেটুয়া)",
                "মরহুম শেখ আহম্মদ আলী (খোলপেটুয়া)",
                "কার্তিক চন্দ্র মন্ডল (মাস্টার)",
                "নৃপেণ মৃধা (জেলেখালী)",
                "কেদার বিশ্বাস (জেলেখালী)",
                "খতিব উদ্দীন তরফদার (ডুমুরিয়া)",
                "এস. এম. তমিজ উদ্দিন আহম্মদ (চকবারা)",
                "মহতাব উদ্দীন মাস্টার (প্বার্শেমারী)"
              ].map((member, i) => (
                <div key={i} className="p-4 bg-white/40 rounded-2xl border border-white/60 text-sm font-bold text-primary hover:bg-accent/10 transition-colors">
                  • {member}
                </div>
              ))}
            </div>
            
            <p className="text-center text-xs text-muted-foreground italic">
              "যিনি বা যারা এই শিক্ষা প্রতিষ্ঠান গড়তে শ্রম, মেধা ও অর্থ ব্যয় করেছেন, আল্লাহ সকলের খেদমত কবুল করুন।"
            </p>
          </div>
        </Card>

        {/* Future Vision */}
        <div className="glass-card p-12 bg-primary text-white text-center space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <BookOpen size={150} />
          </div>
          <h2 className="text-4xl font-headline font-bold relative z-10">আধুনিক শিক্ষার দিগন্তে</h2>
          <p className="text-xl opacity-80 max-w-3xl mx-auto leading-relaxed relative z-10">
            আজ গাবুরা জি.এল.এম. মাধ্যমিক বিদ্যালয় তার দীর্ঘ পথচলা শেষে একটি আধুনিক শিক্ষা প্রতিষ্ঠানে রূপান্তরিত হয়েছে। আমাদের লক্ষ্য এখন বিজ্ঞান ও প্রযুক্তিনির্ভর সুশিক্ষা নিশ্চিত করা।
          </p>
          <div className="flex justify-center gap-12 relative z-10 pt-4">
            <div className="text-center">
              <div className="text-4xl font-black text-accent">১৯৭০+</div>
              <div className="text-[10px] uppercase font-bold tracking-widest opacity-60">প্রতিষ্ঠার সময়কাল</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-accent">৫০০০+</div>
              <div className="text-[10px] uppercase font-bold tracking-widest opacity-60">প্রাক্তন শিক্ষার্থী</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
