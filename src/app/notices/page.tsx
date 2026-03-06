
"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { 
  Bell, 
  Search, 
  Calendar, 
  FileText, 
  ChevronRight, 
  ArrowLeft,
  Filter,
  Download,
  Pin,
  User,
  GraduationCap,
  Sparkles,
  LayoutGrid
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { useUser } from "@/firebase";

const mockMainNotices = [
  { 
    id: "1", 
    title: "SSC 2025 Test Examination Schedule Published", 
    date: "Oct 12, 2024", 
    type: "exam", 
    category: "main",
    isPinned: true,
    description: "The schedule for the upcoming SSC 2025 Test Examination has been finalized. All students are requested to collect their admit cards from the office.",
    hasAttachment: true,
    attachmentName: "SSC_Routine_2025.pdf"
  },
  { 
    id: "2", 
    title: "Annual Sports Day Registration Starts Tomorrow", 
    date: "Oct 10, 2024", 
    type: "important", 
    category: "main",
    isPinned: false,
    description: "Registration for the Annual Sports Day 2024 will begin from tomorrow. Students can sign up for various events including 100m sprint and long jump."
  },
  { 
    id: "3", 
    title: "Class 6 Admission Process 2025", 
    date: "Oct 08, 2024", 
    type: "admission", 
    category: "main",
    isPinned: false,
    description: "Admission for the academic year 2025 for Class 6 is now open. Please check the detailed requirements and collect forms."
  },
];

const mockTeacherNotices = [
  {
    id: "t1",
    title: "Physics Assignment Submission Reminder",
    teacher: "Md. Asaduzzaman",
    classes: ["9", "10"],
    date: "Oct 11, 2024",
    type: "important",
    category: "teacher",
    description: "Students of class 9 and 10 are reminded to submit their Physics lab reports by this Thursday. Late submissions will not be accepted."
  },
  {
    id: "t2",
    title: "Math Special Class for Class 10-A",
    teacher: "Sushanta Kumar Mondal",
    classes: ["10"],
    date: "Oct 09, 2024",
    type: "general",
    category: "teacher",
    description: "A special mathematics remedial class will be held on Saturday at 10:00 AM in Room 204. Attendance is mandatory for group A."
  }
];

export default function NoticeBoardPage() {
  const { user } = useUser();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedCategory] = useState("all");
  const [selectedClass, setSelectedClass] = useState("all");

  const filteredMain = mockMainNotices.filter(n => {
    const matchesSearch = n.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === "all" || n.type === selectedType;
    return matchesSearch && matchesType;
  });

  const filteredTeacher = mockTeacherNotices.filter(n => {
    const matchesSearch = n.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesClass = selectedClass === "all" || n.classes.includes(selectedClass);
    const matchesType = selectedType === "all" || n.type === selectedType;
    
    // Student sees only their class
    if (user?.role === 'student' && user?.class) {
      return matchesSearch && matchesType && n.classes.includes(user.class);
    }
    
    return matchesSearch && matchesType && matchesClass;
  });

  const pinnedNotice = mockMainNotices.find(n => n.isPinned);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-secondary/5">
      <div className="max-w-6xl mx-auto px-4 space-y-12">
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
                <Bell size={12} /> Official Bulletins
              </span>
              <h1 className="text-4xl font-headline font-black text-primary">নোটিশ বোর্ড</h1>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            <div className="relative flex-1 md:w-64 min-w-[200px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <Input 
                placeholder="নোটিশ খুঁজুন..." 
                className="pl-10 h-12 bg-white border-border rounded-2xl shadow-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Select value={selectedType} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-[140px] h-12 rounded-2xl bg-white border-border">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="important">Important</SelectItem>
                <SelectItem value="exam">Exam</SelectItem>
                <SelectItem value="holiday">Holiday</SelectItem>
                <SelectItem value="admission">Admission</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Latest Important Notice Highlight */}
        {pinnedNotice && (
          <Card className="glass-card border-none bg-primary text-white overflow-hidden relative group">
            <div className="absolute top-0 right-0 p-12 opacity-5 rotate-12 scale-150 group-hover:rotate-0 transition-transform duration-700">
              <Sparkles size={120} />
            </div>
            <CardContent className="p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 relative z-10">
              <div className="w-20 h-20 bg-accent text-primary rounded-[2rem] flex items-center justify-center shrink-0 shadow-xl shadow-black/20">
                <Pin size={32} fill="currentColor" />
              </div>
              <div className="flex-1 text-center md:text-left space-y-4">
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
                  <Badge className="bg-accent text-primary font-black uppercase text-[10px] px-3">Latest Important Notice</Badge>
                  <span className="text-[10px] font-bold opacity-60 uppercase tracking-widest">{pinnedNotice.date}</span>
                </div>
                <h2 className="text-2xl md:text-4xl font-headline font-black leading-tight">
                  {pinnedNotice.title}
                </h2>
                <p className="text-white/70 text-sm md:text-base max-w-2xl line-clamp-2">
                  {pinnedNotice.description}
                </p>
                <div className="flex gap-4 justify-center md:justify-start pt-2">
                  <Button asChild className="bg-white text-primary hover:bg-accent font-black rounded-xl px-8 h-12 shadow-lg">
                    <Link href={`/notices/${pinnedNotice.id}`}>Read More</Link>
                  </Button>
                  {pinnedNotice.hasAttachment && (
                    <Button variant="outline" className="border-white/20 hover:bg-white/10 rounded-xl px-6 h-12">
                      <Download size={18} className="mr-2" /> Download Routine
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        <Tabs defaultValue="main" className="space-y-8">
          <TabsList className="bg-white/50 p-1 border rounded-full h-auto flex gap-2 justify-start md:justify-center w-fit mx-auto shadow-sm">
            <TabsTrigger value="main" className="rounded-full px-8 py-3 font-bold data-[state=active]:bg-primary data-[state=active]:text-white transition-all">
              <LayoutGrid size={16} className="mr-2" /> Main Notice Board
            </TabsTrigger>
            <TabsTrigger value="teacher" className="rounded-full px-8 py-3 font-bold data-[state=active]:bg-primary data-[state=active]:text-white transition-all">
              <User size={16} className="mr-2" /> Teacher Notices
            </TabsTrigger>
          </TabsList>

          <TabsContent value="main" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="grid gap-6">
              {filteredMain.map((notice) => (
                <NoticeCard key={notice.id} notice={notice} />
              ))}
              {filteredMain.length === 0 && <EmptyNotices />}
            </div>
          </TabsContent>

          <TabsContent value="teacher" className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-8">
            <div className="flex items-center justify-between">
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                {user?.role === 'student' ? `Notices for Class ${user.class}` : "Class-specific academic updates"}
              </p>
              {user?.role !== 'student' && (
                <Select value={selectedClass} onValueChange={setSelectedClass}>
                  <SelectTrigger className="w-[140px] h-10 rounded-xl bg-white border-border">
                    <SelectValue placeholder="Select Class" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Classes</SelectItem>
                    {["6", "7", "8", "9", "10"].map(c => (
                      <SelectItem key={c} value={c}>Class {c}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            </div>
            <div className="grid gap-6">
              {filteredTeacher.map((notice) => (
                <NoticeCard key={notice.id} notice={notice} isTeacher />
              ))}
              {filteredTeacher.length === 0 && <EmptyNotices />}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

function NoticeCard({ notice, isTeacher = false }: { notice: any, isTeacher?: boolean }) {
  return (
    <Link href={`/notices/${notice.id}`} className="group block">
      <Card className="glass-card hover:border-accent transition-all duration-300 overflow-hidden border-2 border-transparent">
        <CardContent className="p-0">
          <div className="flex flex-col sm:flex-row items-stretch">
            <div className="p-6 sm:w-48 bg-primary/5 flex flex-col justify-center items-center text-center border-b sm:border-b-0 sm:border-r border-dashed border-primary/20">
              <Calendar className="text-primary mb-2" size={24} />
              <p className="text-[10px] font-black uppercase text-muted-foreground tracking-widest leading-tight">Published On</p>
              <p className="font-bold text-primary text-sm">{notice.date}</p>
            </div>
            <div className="p-8 flex-1 space-y-4 relative">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Badge className={cn(
                    "uppercase font-black text-[9px] px-3",
                    notice.type === 'important' ? 'bg-rose-500' : 
                    notice.type === 'exam' ? 'bg-blue-500' : 'bg-accent text-primary'
                  )}>
                    {notice.type}
                  </Badge>
                  {isTeacher && notice.classes && (
                    <div className="flex gap-1">
                      {notice.classes.map((c: string) => (
                        <Badge key={c} variant="outline" className="text-[9px] border-primary/20 text-primary">Cl {c}</Badge>
                      ))}
                    </div>
                  )}
                </div>
                {notice.hasAttachment && (
                  <Badge variant="outline" className="border-dashed border-accent text-accent font-black text-[9px]">
                    <FileText size={10} className="mr-1" /> Attachment
                  </Badge>
                )}
              </div>
              <div className="space-y-1">
                <h3 className="text-xl md:text-2xl font-headline font-bold text-primary group-hover:text-accent transition-colors leading-tight">
                  {notice.title}
                </h3>
                {isTeacher && (
                  <p className="text-[10px] font-bold text-muted-foreground uppercase flex items-center gap-1">
                    <User size={10} /> Posted by {notice.teacher}
                  </p>
                )}
              </div>
              <p className="text-muted-foreground text-sm line-clamp-2 leading-relaxed">
                {notice.description}
              </p>
              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center gap-2 text-primary font-black text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0">
                  View Full Notice <ChevronRight size={14} />
                </div>
                {notice.hasAttachment && (
                  <Button variant="ghost" size="sm" className="h-8 rounded-lg text-xs font-black text-accent hover:bg-accent/10">
                    <Download size={14} className="mr-2" /> PDF
                  </Button>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

function EmptyNotices() {
  return (
    <div className="py-24 text-center space-y-4 bg-white/30 rounded-[3rem] border-2 border-dashed border-muted-foreground/20">
      <div className="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center mx-auto">
        <FileText size={48} className="text-primary/20" />
      </div>
      <p className="text-muted-foreground font-bold uppercase tracking-widest text-xs">এই ট্যাবে কোনো নোটিশ পাওয়া যায়নি।</p>
    </div>
  );
}
