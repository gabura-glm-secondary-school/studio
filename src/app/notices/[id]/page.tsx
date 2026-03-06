
"use client";

import { use, useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  Calendar, 
  Tag, 
  Download, 
  Share2, 
  Printer, 
  FileText,
  Bookmark,
  ChevronRight,
  User,
  ShieldCheck
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const mockNotices = [
  { 
    id: "1", 
    title: "SSC 2025 Test Examination Schedule published", 
    date: "Oct 12, 2024", 
    type: "exam",
    category: "Academic",
    content: `This is to inform all students of Class 10 that the SSC 2025 Test Examination schedule has been officially published by the academic committee. 

Key Instructions:
1. Exams will begin from November 5th, 2024.
2. Students must arrive at the examination hall at least 30 minutes before the start time.
3. Admit cards will be distributed from the office starting October 25th.
4. No electronic devices (mobiles, smartwatches) are allowed in the hall.

Detailed routine is attached below in the PDF version. Please ensure all dues are cleared before collecting admit cards.`,
    author: "Academic Coordinator",
    authorRole: "School Administration",
    files: [{ name: "SSC_Test_Routine_2025.pdf", size: "1.2 MB" }]
  },
  {
    id: "t1",
    title: "Physics Assignment Submission Reminder",
    teacher: "Md. Asaduzzaman",
    classes: ["9", "10"],
    date: "Oct 11, 2024",
    type: "important",
    category: "Academic Update",
    content: `Dear students of Class 9 and 10,

Please be reminded that the final submission date for your Physics Lab Reports (Chapter 4 & 5) is this Thursday, October 14th. 

Reports should be neatly presented in the standard school practical notebook. Late submissions will result in a 20% mark deduction.

- Topic: Work, Power and Energy Practical
- Submission Venue: Physics Lab 1
- Time: Before 2:00 PM`,
    author: "Md. Asaduzzaman",
    authorRole: "Assistant Teacher (ICT & Physics)",
    files: []
  }
];

export default function NoticeDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [isSaved, setIsSaved] = useState(false);

  // For MVP, find or fallback
  const notice = mockNotices.find(n => n.id === id) || {
    id: id,
    title: "Notice Not Found",
    date: new Date().toLocaleDateString(),
    type: "general",
    category: "General",
    content: "The requested notice could not be found or has been removed from the directory.",
    author: "System Administrator",
    authorRole: "IT Department",
    files: []
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-secondary/5">
      <div className="max-w-4xl mx-auto px-4 space-y-8">
        {/* Navigation */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <Link href="/notices">
            <Button variant="ghost" className="gap-2 text-muted-foreground hover:text-primary px-0 active:scale-95 transition-transform">
              <ArrowLeft size={18} /> নোটিশ তালিকায় ফিরে যান
            </Button>
          </Link>
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              size="sm" 
              className={cn("rounded-full h-10 px-4 gap-2 border-2 transition-all", isSaved && "bg-primary/10 border-primary text-primary")}
              onClick={() => setIsSaved(!isSaved)}
            >
              <Bookmark size={16} fill={isSaved ? "currentColor" : "none"} /> {isSaved ? "Saved" : "Save"}
            </Button>
            <Button variant="outline" size="sm" className="rounded-full h-10 px-4 gap-2 border-2">
              <Share2 size={16} /> Share
            </Button>
          </div>
        </div>

        {/* Notice Content */}
        <Card className="glass-card border-none shadow-2xl overflow-hidden">
          <CardHeader className="bg-primary/5 p-8 md:p-12 border-b border-dashed border-primary/20 space-y-6">
            <div className="flex items-center gap-4">
              <Badge className={cn(
                "uppercase font-black text-[10px] px-3 py-1",
                notice.type === 'important' ? 'bg-rose-500' : 'bg-accent text-primary'
              )}>
                {notice.type}
              </Badge>
              <div className="flex items-center gap-2 text-muted-foreground text-xs font-bold uppercase tracking-widest">
                <Calendar size={14} className="text-primary" /> {notice.date}
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl font-headline font-black text-primary leading-tight">
              {notice.title}
            </h1>
            <div className="flex items-center gap-4 pt-4 border-t border-primary/10">
              <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-primary shadow-sm border border-primary/5">
                <User size={24} />
              </div>
              <div>
                <p className="text-sm font-black text-primary uppercase leading-none">{notice.author}</p>
                <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-tighter mt-1">{notice.authorRole}</p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-8 md:p-12 space-y-12">
            <div className="prose prose-lg max-w-none text-muted-foreground font-medium leading-relaxed whitespace-pre-wrap">
              {notice.content}
            </div>

            {/* Attachments */}
            {notice.files && notice.files.length > 0 && (
              <div className="space-y-4 pt-8 border-t border-dashed">
                <h3 className="font-headline font-black text-primary flex items-center gap-2">
                  <FileText size={20} className="text-accent" /> Attachments & Downloads
                </h3>
                <div className="grid gap-3">
                  {notice.files.map((file, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 bg-secondary/10 rounded-2xl border border-primary/10 group hover:border-accent transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm">
                          <Download size={18} />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-primary">{file.name}</p>
                          <p className="text-[10px] text-muted-foreground font-bold uppercase">{file.size}</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" className="rounded-xl font-black text-[10px] uppercase tracking-widest hover:text-accent">
                        Download Now
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="pt-8 flex flex-wrap gap-4 items-center justify-between">
              <div className="flex gap-4">
                <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-primary">
                  <Printer size={16} /> Print Notice
                </Button>
              </div>
              <div className="flex items-center gap-2 text-[10px] text-muted-foreground font-bold italic">
                <ShieldCheck size={14} className="text-emerald-500" /> Official GGLMSS Digital Document
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Related Notices (Quick View) */}
        <div className="space-y-6">
          <h3 className="text-xl font-headline font-black text-primary">Related Announcements</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {mockNotices.filter(n => n.id !== id).slice(0, 2).map((related) => (
              <Link key={related.id} href={`/notices/${related.id}`}>
                <div className="glass-card p-6 hover:border-accent transition-all group h-full flex flex-col justify-between">
                  <div className="space-y-2">
                    <Badge variant="outline" className="text-[9px] uppercase font-black">{related.type}</Badge>
                    <h4 className="font-bold text-primary leading-tight group-hover:text-accent transition-colors">{related.title}</h4>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-[9px] font-bold text-muted-foreground uppercase">{related.date}</span>
                    <ChevronRight size={14} className="text-primary group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
