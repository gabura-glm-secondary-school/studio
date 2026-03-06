
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
} from "lucide-center";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from "recharts";
import Link from "next/link";
import { LucideIcon } from "lucide-react";

// Helper to handle icons properly
const performanceData = [
  { month: "Jan", attendance: 95, homework: 80, rating: 7.5 },
  { month: "Feb", attendance: 98, homework: 90, rating: 8.2 },
  { month: "Mar", attendance: 92, homework: 85, rating: 8.0 },
  { month: "Apr", attendance: 100, homework: 95, rating: 9.1 },
];

export default function StudentDashboard({ user }: { user: any }) {
  return (
    <div className="pt-24 pb-12 min-h-screen bg-secondary/5">
      <div className="max-w-7xl mx-auto px-4 space-y-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1">
            <h1 className="text-3xl font-headline font-bold text-primary">Welcome Back, {user.displayName || "Student"}!</h1>
            <p className="text-muted-foreground flex items-center gap-2">
              <GraduationCap size={18} /> Class {user.class || "N/A"} • Section {user.section || "A"} • Roll {user.rollNumber || "00"}
            </p>
          </div>
          <div className="flex gap-3">
            <Link href="/notices">
              <Button variant="outline" className="rounded-full gap-2 shadow-sm active:scale-95 transition-transform">
                <Bell size={18} /> Notifications <Badge className="ml-1 bg-accent text-primary">3</Badge>
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
                  <p className="text-3xl font-black text-primary">94%</p>
                </div>
                <div className="p-2 bg-emerald-500/10 text-emerald-600 rounded-lg">
                  <CheckCircle2 size={20} />
                </div>
              </div>
              <Progress value={94} className="h-1.5 mt-4" />
            </CardContent>
          </Card>
          <Card className="glass-card">
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <p className="text-xs font-bold uppercase text-muted-foreground">Homework</p>
                  <p className="text-3xl font-black text-primary">18/20</p>
                </div>
                <div className="p-2 bg-blue-500/10 text-blue-600 rounded-lg">
                  <BookOpen size={20} />
                </div>
              </div>
              <Progress value={90} className="h-1.5 mt-4" />
            </CardContent>
          </Card>
          <Card className="glass-card">
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <p className="text-xs font-bold uppercase text-muted-foreground">Final Rating</p>
                  <p className="text-3xl font-black text-accent">8.9</p>
                </div>
                <div className="p-2 bg-accent/10 text-accent-foreground rounded-lg">
                  <Award size={20} />
                </div>
              </div>
              <p className="text-[10px] mt-2 text-muted-foreground font-medium">Top 5% of your class</p>
            </CardContent>
          </Card>
          <Card className="glass-card border-accent/20 bg-accent/5">
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <p className="text-xs font-bold uppercase text-primary/60">Teacher Rating</p>
                  <p className="text-3xl font-black text-primary">9.2</p>
                </div>
                <div className="p-2 bg-primary/10 text-primary rounded-lg">
                  <Users size={20} />
                </div>
              </div>
              <p className="text-[10px] mt-2 text-muted-foreground font-medium">Avg. from 6 teachers</p>
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
              <Badge variant="outline">Last 4 Months</Badge>
            </CardHeader>
            <CardContent className="h-[300px]">
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
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Clock className="text-accent" /> Today's Routine
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { time: "09:00 AM", sub: "Mathematics", teacher: "Teacher A" },
                { time: "10:00 AM", sub: "English", teacher: "Teacher B" },
                { time: "11:00 AM", sub: "Physics", teacher: "Teacher C" },
                { time: "12:00 PM", sub: "Lunch Break", type: "break" },
                { time: "01:00 PM", sub: "Biology", teacher: "Teacher D" },
              ].map((item, i) => (
                <div key={i} className={`flex items-center gap-4 p-3 rounded-xl border ${item.type === 'break' ? 'bg-muted/30 border-dashed' : 'bg-white shadow-sm border-border'}`}>
                  <div className="text-[10px] font-bold text-muted-foreground w-16 uppercase tracking-tighter">{item.time}</div>
                  <div className="flex-1">
                    <p className="font-bold text-sm text-primary">{item.sub}</p>
                    {item.teacher && <p className="text-[10px] text-muted-foreground">{item.teacher}</p>}
                  </div>
                </div>
              ))}
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
            { label: "Calendar", icon: "/events", color: "bg-orange-500" }, // fix type
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

import { LucideProps } from "lucide-react";
