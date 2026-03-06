
"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Calendar, 
  MapPin, 
  ArrowLeft, 
  Clock, 
  Search, 
  Filter,
  Sparkles,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const upcomingEvents = [
  {
    id: "e1",
    title: "Annual School Picnic 2024",
    date: "Dec 15, 2024",
    time: "08:00 AM",
    location: "Sundarbans Eco Park",
    description: "A fun-filled day at the world's largest mangrove forest for students and staff. Activities include boat rides, forest tours, and cultural games.",
    category: "Recreation",
    status: "Registration Open"
  },
  {
    id: "e2",
    title: "Annual Cultural Program",
    date: "Jan 20, 2025",
    time: "10:30 AM",
    location: "School Main Stage",
    description: "Showcasing the diverse talents of our students in music, dance, and drama. Special guest appearance by local artists.",
    category: "Culture",
    status: "Upcoming"
  },
  {
    id: "e3",
    title: "School Sports Day",
    date: "Feb 10, 2025",
    time: "09:00 AM",
    location: "School Grounds",
    description: "A day of athletic competition and sportsmanship for all classes. Multiple track and field events for boys and girls.",
    category: "Sports",
    status: "Upcoming"
  },
  {
    id: "e4",
    title: "Science Fair 2025",
    date: "Mar 05, 2025",
    time: "11:00 AM",
    location: "Science Lab & Corridors",
    description: "Students from all classes will present their innovative science projects and experiments.",
    category: "Academic",
    status: "Upcoming"
  }
];

export default function EventsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Academic", "Sports", "Culture", "Recreation"];

  const filteredEvents = upcomingEvents.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || event.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-48 pb-24 min-h-screen bg-secondary/5">
      <div className="max-w-7xl mx-auto px-4 space-y-12">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <Link href="/">
              <Button variant="ghost" className="gap-2 text-muted-foreground hover:text-primary px-0 active:scale-95 transition-transform">
                <ArrowLeft size={18} /> প্রচ্ছদ পাতায় ফিরে যান
              </Button>
            </Link>
            <div className="space-y-1">
              <span className="text-accent font-black uppercase tracking-[0.2em] text-[10px] flex items-center gap-2">
                <Sparkles size={12} /> School Highlights
              </span>
              <h1 className="text-4xl font-headline font-black text-primary">ইভেন্ট ক্যালেন্ডার</h1>
              <p className="text-muted-foreground font-medium max-w-xl">
                গাবুরা জি.এল.এম. মাধ্যমিক বিদ্যালয়ের সকল সাংস্কৃতিক, ক্রীড়া এবং একাডেমিক ইভেন্টের তালিকা।
              </p>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            <div className="relative flex-1 md:w-64 min-w-[200px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <Input 
                placeholder="ইভেন্ট খুঁজুন..." 
                className="pl-10 h-12 bg-white border-border rounded-2xl shadow-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-hide">
              {categories.map(cat => (
                <Button
                  key={cat}
                  variant={selectedCategory === cat ? "default" : "outline"}
                  onClick={() => setSelectedCategory(cat)}
                  className={cn(
                    "rounded-full h-10 px-4 text-[10px] font-black uppercase tracking-widest transition-all",
                    selectedCategory === cat ? "bg-primary text-white shadow-lg" : "bg-white/50"
                  )}
                >
                  {cat}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Event Card */}
        <Card className="border-none bg-primary shadow-2xl rounded-[3rem] overflow-hidden relative group">
          <div className="absolute top-0 right-0 p-12 opacity-10 rotate-12 scale-150 group-hover:rotate-0 transition-transform duration-1000 pointer-events-none">
            <Calendar size={180} className="text-white" />
          </div>
          
          <CardContent className="p-10 md:p-16 flex flex-col md:flex-row items-center gap-10 relative z-10">
            <div className="w-24 h-24 bg-accent text-primary rounded-[2.5rem] flex items-center justify-center shrink-0 shadow-2xl group-hover:scale-110 transition-transform duration-500">
              <Calendar size={40} fill="currentColor" />
            </div>
            
            <div className="flex-1 text-center md:text-left space-y-6">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                <Badge className="bg-emerald-500 text-white font-black uppercase text-[11px] px-4 py-1.5 rounded-full tracking-widest shadow-lg">
                  Next Featured Event
                </Badge>
                <span className="text-[11px] font-black text-white/80 uppercase tracking-[0.2em] flex items-center gap-2">
                  <Clock size={14} className="text-accent" /> Starts in 45 Days
                </span>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-headline font-black text-white leading-tight">
                {upcomingEvents[0].title}
              </h2>
              
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 text-white/90 text-sm font-bold">
                <span className="flex items-center gap-2"><Calendar size={16} className="text-accent" /> {upcomingEvents[0].date}</span>
                <span className="flex items-center gap-2"><MapPin size={16} className="text-accent" /> {upcomingEvents[0].location}</span>
              </div>
              
              <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
                <Button className="bg-white text-primary hover:bg-accent hover:text-white font-black rounded-2xl px-10 h-14 text-base shadow-xl transition-all active:scale-95">
                  Register for Picnic
                </Button>
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 rounded-2xl px-8 h-14 text-base transition-all">
                  Event Details
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.slice(1).map((event) => (
            <div 
              key={event.id} 
              className="glass-card p-8 space-y-6 hover-lift bg-white/80 group flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="text-[10px] font-black uppercase tracking-widest border-primary/20 text-primary px-3 py-1">
                    {event.category}
                  </Badge>
                  <span className="text-[10px] font-black text-muted-foreground uppercase">{event.status}</span>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-2xl font-headline font-black text-primary group-hover:text-accent transition-colors leading-tight">
                    {event.title}
                  </h3>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                      <Calendar size={12} className="text-primary" /> {event.date}
                    </div>
                    <div className="flex items-center gap-2 text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                      <Clock size={12} className="text-primary" /> {event.time}
                    </div>
                    <div className="flex items-center gap-2 text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                      <MapPin size={12} className="text-primary" /> {event.location}
                    </div>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground font-medium leading-relaxed line-clamp-3">
                  {event.description}
                </p>
              </div>

              <Button className="w-full h-12 rounded-2xl bg-primary text-white font-black uppercase tracking-widest text-[10px] shadow-lg group-hover:bg-accent transition-colors mt-6">
                Event Details <ChevronRight size={14} className="ml-2" />
              </Button>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredEvents.length === 0 && (
          <div className="py-32 text-center space-y-6 bg-white/30 rounded-[4rem] border-2 border-dashed border-muted-foreground/20">
            <div className="w-24 h-24 bg-primary/5 rounded-full flex items-center justify-center mx-auto">
              <Calendar size={56} className="text-primary/20" />
            </div>
            <p className="text-muted-foreground font-black uppercase tracking-[0.3em] text-sm">কোনো ইভেন্ট পাওয়া যায়নি</p>
            <Button variant="link" onClick={() => {setSearchTerm(""); setSelectedCategory("All");}}>Clear Filters</Button>
          </div>
        )}
      </div>
    </div>
  );
}
