
"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  CheckCircle2, 
  ClipboardCheck, 
  PlusCircle, 
  BookOpen, 
  BarChart3,
  Calendar,
  MessageSquare,
  Settings,
  ShieldCheck
} from "lucide-react";
import Link from "next/link";

export default function TeacherDashboard({ user }: { user: any }) {
  return (
    <div className="pt-24 pb-12 min-h-screen bg-secondary/5">
      <div className="max-w-7xl mx-auto px-4 space-y-8">
        {/* Welcome Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Badge className="bg-emerald-500 text-white hover:bg-emerald-600">Active Session</Badge>
              <span className="text-xs text-muted-foreground font-bold uppercase tracking-widest">Faculty Portal</span>
            </div>
            <h1 className="text-4xl font-headline font-bold text-primary">Hello, {user.displayName || "Sir/Madam"}</h1>
            <p className="text-muted-foreground">{user.subject || "Academic"} Department • Senior Faculty</p>
          </div>
          <div className="flex gap-3">
            <Link href="/admin/website">
              <Button variant="outline" className="rounded-full shadow-sm h-10 w-10 p-0 hover:bg-primary hover:text-white transition-colors">
                <Settings size={18} />
              </Button>
            </Link>
            <Link href="/admin/academics/notices">
              <Button className="rounded-full gap-2 shadow-lg bg-primary px-6 active:scale-95 transition-transform">
                <PlusCircle size={18} /> Quick Action
              </Button>
            </Link>
          </div>
        </div>

        {/* Management Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Daily Operations */}
          <div className="md:col-span-2 space-y-8">
            <div className="grid sm:grid-cols-2 gap-6">
              <Link href="/attendance" className="block group">
                <Card className="glass-card hover:border-accent transition-all h-full group active:scale-95">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/5 text-primary rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                      <ClipboardCheck size={24} />
                    </div>
                    <CardTitle className="mt-4">Mark Attendance</CardTitle>
                    <CardDescription>Daily attendance for your assigned classes.</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
              <Link href="/dashboard" className="block group">
                <Card className="glass-card hover:border-accent transition-all h-full group active:scale-95">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/5 text-primary rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                      <PlusCircle size={24} />
                    </div>
                    <CardTitle className="mt-4">Assign Homework</CardTitle>
                    <CardDescription>Create new tasks and track completion status.</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
              <Link href="/dashboard" className="block group">
                <Card className="glass-card hover:border-accent transition-all h-full group active:scale-95">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/5 text-primary rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                      <BookOpen size={24} />
                    </div>
                    <CardTitle className="mt-4">Online Quizzes</CardTitle>
                    <CardDescription>Create MCQs and view instant results.</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
              <Link href="/leaderboard" className="block group">
                <Card className="glass-card hover:border-accent transition-all h-full group active:scale-95">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/5 text-primary rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                      <BarChart3 size={24} />
                    </div>
                    <CardTitle className="mt-4">Student Ratings</CardTitle>
                    <CardDescription>Confidential monthly performance assessment.</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            </div>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-xl">Quick Stats</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { label: "Assigned Classes", val: "04" },
                  { label: "Total Students", val: "180" },
                  { label: "Homework Pending", val: "12" },
                  { label: "Attendance Done", val: "02/04" },
                ].map((s, i) => (
                  <div key={i} className="space-y-1">
                    <p className="text-[10px] font-black uppercase text-muted-foreground">{s.label}</p>
                    <p className="text-2xl font-black text-primary">{s.val}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Side Panels */}
          <div className="space-y-8">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Class Routine</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { time: "09:00", class: "Class 9-A", sub: "Physics" },
                  { time: "11:00", class: "Class 10-B", sub: "Physics" },
                  { time: "01:00", class: "Class 8-A", sub: "General Science" },
                ].map((r, i) => (
                  <div key={i} className="flex items-center gap-4 p-3 bg-white rounded-xl shadow-sm border border-border">
                    <div className="text-xs font-bold text-accent">{r.time}</div>
                    <div>
                      <p className="font-bold text-sm text-primary">{r.class}</p>
                      <p className="text-[10px] text-muted-foreground">{r.sub}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="glass-card bg-primary text-white border-none shadow-2xl relative overflow-hidden">
              <div className="absolute -bottom-12 -right-12 opacity-10">
                <ShieldCheck size={150} />
              </div>
              <CardHeader className="relative z-10">
                <CardTitle className="text-lg flex items-center gap-2">
                  <ShieldCheck size={20} className="text-accent" /> Administration
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 relative z-10">
                <p className="text-sm opacity-90 italic font-medium leading-relaxed">You have permission to manage student achievement requests and academic records.</p>
                <Link href="/admin" className="block w-full">
                  <Button variant="secondary" className="w-full h-12 rounded-xl text-primary font-black shadow-xl hover:bg-accent hover:text-white transition-all active:scale-95">
                    Admin Dashboard
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
