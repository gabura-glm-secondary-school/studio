
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Calendar, 
  BookOpen, 
  GraduationCap, 
  Clock, 
  Bell, 
  Users, 
  Award, 
  CheckCircle2, 
  Download,
  LayoutDashboard,
  LineChart as LineChartIcon
} from "lucide-react";
import { 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  XAxis,
  YAxis,
  AreaChart,
  Area
} from "recharts";
import Link from "next/link";

const performanceData: any[] = [];

export default function StudentDashboard({ user }: { user: any }) {
  return (
    <div className="pt-24 pb-12 min-h-screen bg-secondary/5">
      <div className="max-w-7xl mx-auto px-4 space-y-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1">
            <h1 className="text-3xl font-headline font-black text-primary">Welcome Back, {user.displayName || "Student"}!</h1>
            <p className="text-muted-foreground flex items-center gap-2">
              <GraduationCap size={18} /> Class {user.classId || "N/A"} • Section {user.section || "A"} • Roll {user.rollNumber || "00"}
            </p>
          </div>
          <div className="flex gap-3">
            <Link href="/notices">
              <Button variant="outline" className="rounded-full gap-2 shadow-sm active:scale-95 transition-transform">
                <Bell size={18} /> Notifications <Badge className="ml-1 bg-accent text-primary">0</Badge>
              </Button>
            </Link>
            <Link href="/id-card">
              <Button className="rounded-full gap-2 shadow-lg bg-primary active:scale-95 transition-transform">
                <Download size={18} /> Digital ID
              </Button>
            </Link>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="glass-card">
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <p className="text-xs font-bold uppercase text-muted-foreground">Attendance</p>
                  <p className="text-3xl font-black text-primary">0%</p>
                </div>
                <div className="p-2 bg-emerald-500/10 text-emerald-600 rounded-lg">
                  <CheckCircle2 size={20} />
                </div>
              </div>
              <Progress value={0} className="h-1.5 mt-4" />
            </CardContent>
          </Card>
          <Card className="glass-card">
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <p className="text-xs font-bold uppercase text-muted-foreground">Homework</p>
                  <p className="text-3xl font-black text-primary">0/0</p>
                </div>
                <div className="p-2 bg-blue-500/10 text-blue-600 rounded-lg">
                  <BookOpen size={20} />
                </div>
              </div>
              <Progress value={0} className="h-1.5 mt-4" />
            </CardContent>
          </Card>
          <Card className="glass-card">
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <p className="text-xs font-bold uppercase text-muted-foreground">Final Rating</p>
                  <p className="text-3xl font-black text-accent">0.0</p>
                </div>
                <div className="p-2 bg-accent/10 text-accent-foreground rounded-lg">
                  <Award size={20} />
                </div>
              </div>
              <p className="text-[10px] mt-2 text-muted-foreground font-medium">Monthly Assessment</p>
            </CardContent>
          </Card>
          <Card className="glass-card border-accent/20 bg-accent/5">
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <p className="text-xs font-bold uppercase text-primary/60">Teacher Rating</p>
                  <p className="text-3xl font-black text-primary">0.0</p>
                </div>
                <div className="p-2 bg-primary/10 text-primary rounded-lg">
                  <Users size={20} />
                </div>
              </div>
              <p className="text-[10px] mt-2 text-muted-foreground font-medium">Performance Feedback</p>
            </CardContent>
          </Card>
        </div>

        {/* Performance Graph & Routine */}
        <div className="grid lg:grid-cols-3 gap-8">
          <Card className="lg:col-span-2 glass-card">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg flex items-center gap-2">
                <LineChartIcon className="text-accent" /> Performance Trends
              </CardTitle>
              <Badge variant="outline">Current Session</Badge>
            </CardHeader>
            <CardContent className="h-[300px]">
              {performanceData.length === 0 ? (
                <div className="h-full flex items-center justify-center flex-col gap-3 text-muted-foreground">
                  <LineChartIcon size={40} className="opacity-20" />
                  <p className="text-xs font-black uppercase tracking-widest">ডাটা আপডেট করা হচ্ছে...</p>
                </div>
              ) : (
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={performanceData}>
                    <defs>
                      <linearGradient id="colorRating" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(var(--accent))" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="hsl(var(--accent))" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />
                    <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fontSize: 12}} />
                    <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12}} />
                    <Tooltip 
                      contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                    />
                    <Area type="monotone" dataKey="attendance" stroke="hsl(var(--primary))" fillOpacity={0} strokeWidth={3} name="Attendance %" />
                    <Area type="monotone" dataKey="homework" stroke="#3b82f6" fillOpacity={0} strokeWidth={3} name="Homework %" />
                    <Area type="monotone" dataKey="rating" stroke="hsl(var(--accent))" fillOpacity={1} fill="url(#colorRating)" strokeWidth={3} name="Final Rating" />
                  </AreaChart>
                </ResponsiveContainer>
              )}
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Clock className="text-accent" /> Today's Routine
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="py-10 text-center space-y-3">
                <Calendar size={32} className="mx-auto text-muted-foreground/20" />
                <p className="text-[10px] font-black uppercase text-muted-foreground tracking-widest">রুটিন এখনো দেওয়া হয়নি।</p>
              </div>
              <Button variant="ghost" className="w-full text-xs text-accent font-bold" asChild>
                <Link href="/dashboard">View Weekly Routine</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Quick Access Menu */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {[
            { label: "Community", icon: Users, href: "/dashboard", color: "bg-purple-500" },
            { label: "Library", icon: BookOpen, href: "/library", color: "bg-blue-500" },
            { label: "Quizzes", icon: GraduationCap, href: "/dashboard", color: "bg-emerald-500" },
            { label: "Calendar", icon: Calendar, href: "/events", color: "bg-orange-500" },
            { label: "Leaderboard", icon: Award, href: "/leaderboard", color: "bg-amber-500" },
            { label: "Notices", icon: Bell, href: "/notices", color: "bg-rose-500" },
          ].map((item, i) => (
            <Link key={i} href={item.href || "/dashboard"}>
              <div className="group p-6 glass-card rounded-2xl flex flex-col items-center gap-3 hover:bg-primary hover:text-white transition-all text-center active:scale-95">
                <div className={`w-12 h-12 ${item.color} text-white rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                  <item.icon size={24} />
                </div>
                <span className="font-bold text-sm">{item.label}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
