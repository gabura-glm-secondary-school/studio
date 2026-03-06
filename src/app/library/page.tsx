
"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Search, Download, FileText, Filter, Loader2, Bookmark } from "lucide-react";

const mockLibrary: any[] = [];

export default function LibraryPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCat, setSelectedCat] = useState("All");

  const categories = ["All", "Textbooks", "Academic Notes", "Question Bank", "General"];

  const filtered = mockLibrary.filter(item => 
    (selectedCat === "All" || item.cat === selectedCat) &&
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pt-48 pb-12 min-h-screen bg-secondary/5">
      <div className="max-w-7xl mx-auto px-4 space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1">
            <h1 className="text-3xl font-headline font-bold text-primary flex items-center gap-3">
              <BookOpen className="text-accent" /> Digital Library
            </h1>
            <p className="text-muted-foreground italic">Access study materials, notes, and question papers instantly.</p>
          </div>
          <div className="relative max-w-sm w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
            <Input 
              placeholder="Search by title..." 
              className="pl-10 h-11 rounded-xl shadow-sm border-primary/10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Categories */}
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={selectedCat === cat ? "default" : "outline"}
              className="rounded-full shrink-0"
              onClick={() => setSelectedCat(cat)}
            >
              {cat}
            </Button>
          ))}
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <Card key={item.id} className="glass-card group hover:border-accent transition-all">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-accent/10 transition-colors">
                    <FileText className="text-primary group-hover:text-accent" size={28} />
                  </div>
                  <div className="space-y-2 flex-1 min-w-0">
                    <Badge variant="secondary" className="text-[10px] uppercase font-bold">{item.cat}</Badge>
                    <h3 className="font-bold text-primary text-sm leading-tight line-clamp-2">{item.title}</h3>
                    <div className="flex items-center gap-3 text-[10px] text-muted-foreground font-bold">
                      <span className="flex items-center gap-1 uppercase tracking-widest"><Bookmark size={10} /> {item.type}</span>
                      <span>{item.size}</span>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-border flex gap-3">
                  <Button className="flex-1 rounded-xl gap-2 shadow-lg h-10 text-xs uppercase font-black tracking-widest">
                    <Download size={14} /> Download
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="py-32 text-center space-y-6 bg-white/30 rounded-[4rem] border-2 border-dashed border-muted-foreground/20">
            <BookOpen size={56} className="text-primary/20 mx-auto" />
            <p className="text-muted-foreground font-black uppercase tracking-[0.2em] text-xs">লাইব্রেরিতে কোনো রিসোর্স খুঁজে পাওয়া যায়নি</p>
            <Button variant="link" onClick={() => {setSearchTerm(""); setSelectedCat("All");}}>Clear Filters</Button>
          </div>
        )}
      </div>
    </div>
  );
}
