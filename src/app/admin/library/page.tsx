
"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  BookOpen, 
  Plus, 
  Search, 
  FileText, 
  Download, 
  Trash2, 
  Edit3, 
  Upload,
  Bookmark,
  Filter
} from "lucide-react";

const mockLibraryItems = [
  { id: "1", title: "Class 9 Mathematics Notes", category: "Notes", type: "PDF", downloads: 124 },
  { id: "2", title: "SSC 2024 Physics Questions", category: "Question Bank", type: "PDF", downloads: 89 },
  { id: "3", title: "Bangla Grammar Guide", category: "Textbook", type: "PDF", downloads: 56 },
];

export default function AdminLibraryPage() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-1">
          <h1 className="text-3xl font-headline font-bold text-primary flex items-center gap-3">
            <BookOpen className="text-accent" /> Digital Library Control
          </h1>
          <p className="text-muted-foreground text-sm font-medium">Upload and manage study materials for students.</p>
        </div>
        <Button className="rounded-xl gap-2 font-bold h-11 shadow-lg bg-primary">
          <Upload size={18} /> Upload Resource
        </Button>
      </div>

      <Card className="border-none shadow-sm">
        <CardHeader className="bg-secondary/10 border-b py-4">
          <div className="flex items-center justify-between">
            <div className="relative max-w-sm w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <Input placeholder="Search resources..." className="pl-10 h-10 rounded-xl" />
            </div>
            <Button variant="outline" size="sm" className="rounded-xl gap-2 h-10">
              <Filter size={16} /> Categories
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid gap-4">
            {mockLibraryItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between p-4 bg-secondary/5 rounded-2xl border border-border/50 group hover:border-accent transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm border border-primary/10">
                    <FileText size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">{item.title}</h4>
                    <div className="flex items-center gap-3 text-[10px] font-black uppercase text-muted-foreground tracking-widest mt-1">
                      <span className="text-accent">{item.category}</span>
                      <span>•</span>
                      <span>{item.type}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1"><Download size={10} /> {item.downloads} Downloads</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button variant="ghost" size="icon" className="rounded-xl hover:bg-white"><Edit3 size={16} /></Button>
                  <Button variant="ghost" size="icon" className="rounded-xl text-destructive hover:bg-destructive/10"><Trash2 size={16} /></Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
