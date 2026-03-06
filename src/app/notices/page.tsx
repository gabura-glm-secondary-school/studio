"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Bell, 
  Search, 
  Calendar, 
  FileText, 
  ChevronRight, 
  ArrowLeft,
  Filter,
  Download
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const mockNotices = [
  { 
    id: "1", 
    title: "SSC 2025 Test Examination Schedule published", 
    date: "Oct 12, 2024", 
    category: "Academic",
    description: "The schedule for the upcoming SSC 2025 Test Examination has been finalized. All students are requested to collect their admit cards from the office."
  },
  { 
    id: "2", 
    title: "Annual Sports Day Registration starts tomorrow", 
    date: "Oct 10, 2024", 
    category: "Events",
    description: "Registration for the Annual Sports Day 2024 will begin from tomorrow. Students can sign up for various events including 100m sprint, long jump, and relay races."
  },
  { 
    id: "3", 
    title: "Class 6 Admission process and requirements", 
    date: "Oct 08, 2024", 
    category: "Admission",
    description: "Admission for the academic year 2025 for Class 6 is now open. Please check the detailed requirements and collect forms from the administrative block."
  },
  { 
    id: "4", 
    title: "Half-yearly holiday announcement for students", 
    date: "Oct 05, 2024", 
    category: "Holiday",
    description: "The school will remain closed for half-yearly holidays from October 15th to October 22nd. Classes will resume as per regular schedule from October 23rd."
  },
  { 
    id: "5", 
    title: "Parent-Teacher Meeting for Class 9 & 10", 
    date: "Oct 01, 2024", 
    category: "Meeting",
    description: "A mandatory Parent-Teacher Meeting will be held this Saturday for Class 9 and 10 students to discuss academic progress and preparation for board exams."
  },
];

const categories = ["All", "Academic", "Events", "Admission", "Holiday", "Meeting"];

export default function NoticeBoardPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredNotices = mockNotices.filter(notice => {
    const matchesSearch = notice.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || notice.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-32 pb-24 min-h-screen bg-secondary/5">
      <div className="max-w-5xl mx-auto px-4 space-y-12">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <Link href="/">
              <Button variant="ghost" className="gap-2 text-muted-foreground hover:text-primary px-0 active:scale-95 transition-transform">
                <ArrowLeft size={18} /> প্রচ্ছদ পাতায় ফিরে যান
              </Button>
            </Link>
            <div className="space-y-1">
              <span className="text-accent font-black uppercase tracking-[0.2em] text-[10px]">Official Bulletins</span>
              <h1 className="text-4xl font-headline font-black text-primary flex items-center gap-3">
                <Bell className="text-accent" /> নোটিশ বোর্ড
              </h1>
            </div>
          </div>
          
          <div className="relative max-w-sm w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
            <Input 
              placeholder="নোটিশ খুঁজুন..." 
              className="pl-10 h-12 bg-white border-border rounded-2xl shadow-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Categories Filter */}
        <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={selectedCategory === cat ? "default" : "outline"}
              onClick={() => setSelectedCategory(cat)}
              className={cn(
                "rounded-full h-10 px-6 text-xs font-bold uppercase tracking-widest transition-all shrink-0",
                selectedCategory === cat ? "shadow-lg bg-primary" : "bg-white/50 border-white/40"
              )}
            >
              {cat}
            </Button>
          ))}
        </div>

        {/* Notices List */}
        <div className="space-y-4">
          {filteredNotices.map((notice) => (
            <Link key={notice.id} href={`/notices/${notice.id}`} className="group block">
              <Card className="glass-card hover:border-accent transition-all duration-300 overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col sm:flex-row items-stretch">
                    <div className="p-6 sm:w-48 bg-primary/5 flex flex-col justify-center items-center text-center border-b sm:border-b-0 sm:border-r border-dashed border-primary/20">
                      <Calendar className="text-primary mb-2" size={24} />
                      <p className="text-[10px] font-black uppercase text-muted-foreground tracking-widest leading-tight">Published On</p>
                      <p className="font-bold text-primary text-sm">{notice.date}</p>
                    </div>
                    <div className="p-8 flex-1 space-y-4 relative">
                      <div className="flex items-center gap-3">
                        <Badge className="bg-accent text-primary uppercase font-black text-[9px]">
                          {notice.category}
                        </Badge>
                        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-headline font-bold text-primary group-hover:text-accent transition-colors leading-tight">
                        {notice.title}
                      </h3>
                      <p className="text-muted-foreground text-sm line-clamp-2 leading-relaxed">
                        {notice.description}
                      </p>
                      <div className="flex items-center gap-2 text-primary font-black text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0">
                        View Full Notice <ChevronRight size={14} />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}

          {filteredNotices.length === 0 && (
            <div className="py-32 text-center space-y-4 bg-white/40 rounded-[3rem] border-2 border-dashed border-muted-foreground/20">
              <FileText size={64} className="mx-auto text-muted-foreground/30" />
              <p className="text-muted-foreground font-medium">কোনো নোটিশ পাওয়া যায়নি।</p>
              <Button variant="link" onClick={() => { setSearchTerm(""); setSelectedCategory("All"); }}>
                ফিল্টার মুছুন
              </Button>
            </div>
          )}
        </div>

        {/* Bottom CTA */}
        <div className="glass-card p-12 bg-primary text-white relative overflow-hidden text-center">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Bell size={150} />
          </div>
          <div className="relative z-10 space-y-4">
            <h2 className="text-3xl font-headline font-black">সরাসরি আপডেট পেতে চান?</h2>
            <p className="text-white/70 max-w-xl mx-auto">
              আমাদের অফিসিয়াল নোটিশগুলো আপনার ইমেইলে সরাসরি পেতে সাবস্ক্রাইব করুন।
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto pt-4">
              <Input placeholder="আপনার ইমেইল দিন" className="bg-white/10 border-white/20 text-white placeholder:text-white/40 h-12 rounded-xl" />
              <Button className="bg-accent text-primary font-black h-12 px-8 rounded-xl hover:bg-white transition-colors">
                সাবস্ক্রাইব
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
