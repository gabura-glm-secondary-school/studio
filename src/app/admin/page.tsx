
"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Briefcase, 
  GraduationCap, 
  ShieldAlert, 
  Clock, 
  FileCheck,
  TrendingUp,
  AlertTriangle,
  UserCheck,
  Settings,
  BarChart3
} from "lucide-react";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
} from "recharts";
import { cn } from "@/lib/utils";
import Link from "next/link";

const attendanceData = [
  { day: "Sun", attendance: 92 },
  { day: "Mon", attendance: 95 },
  { day: "Tue", attendance: 88 },
  { day: "Wed", attendance: 94 },
  { day: "Thu", attendance: 96 },
];

export default function AdminDashboard() {
  const stats = [
    { label: "Total Students", val: "1,240", icon: GraduationCap, color: "text-blue-600", bg: "bg-blue-50" },
    { label: "Total Teachers", val: "48", icon: Briefcase, color: "text-emerald-600", bg: "bg-emerald-50" },
    { label: "Pending Approvals", val: "12", icon: UserCheck, color: "text-amber-600", bg: "bg-amber-50" },
    { label: "Security Alerts", val: "3", icon: ShieldAlert, color: "text-destructive", bg: "bg-destructive/5" },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-1">
          <h1 className="text-3xl font-headline font-bold text-primary">Admin Dashboard</h1>
          <p className="text-muted-foreground italic text-sm font-medium">Real-time platform insights and oversight.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="rounded-xl gap-2 font-bold h-11 border-2">
            <Clock size={18} /> View Logs
          </Button>
          <Button className="rounded-xl gap-2 font-bold h-11 shadow-lg bg-primary">
            <BarChart3 size={18} /> Generate Report
          </Button>
        </div>
      </div>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s, idx) => (
          <Card key={idx} className="border-none shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <p className="text-xs font-black uppercase text-muted-foreground tracking-widest">{s.label}</p>
                  <p className="text-3xl font-black text-primary">{s.val}</p>
                </div>
                <div className={cn("p-3 rounded-2xl", s.bg)}>
                  <s.icon className={s.color} size={24} />
                </div>
              </div>
              <div className="mt-4 pt-4 border-t flex items-center text-[10px] font-bold text-muted-foreground gap-1">
                <TrendingUp size={12} className="text-emerald-500" />
                <span className="text-emerald-600">+4.2%</span> from last month
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Attendance Trends */}
        <Card className="lg:col-span-2 border-none shadow-sm overflow-hidden">
          <CardHeader className="bg-primary/5 border-b py-4">
            <CardTitle className="text-lg flex items-center gap-2">
              <FileCheck className="text-accent" /> Attendance Overview
            </CardTitle>
            <CardDescription>Average student attendance for the current week.</CardDescription>
          </CardHeader>
          <CardContent className="h-[350px] pt-8">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={attendanceData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{fontSize: 12, fontWeight: 600}} />
                <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12}} />
                <Tooltip 
                  cursor={{fill: 'rgba(0,0,0,0.02)'}}
                  contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 30px -10px rgba(0,0,0,0.1)' }}
                />
                <Bar dataKey="attendance" fill="hsl(var(--primary))" radius={[8, 8, 0, 0]} barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Security Alerts */}
        <Card className="border-none shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg">Security & Activity</CardTitle>
            <CardDescription>Recent suspicious activities detected.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { type: "lock", msg: "Student STU202401 locked after 5 failed attempts", time: "12 min ago" },
              { type: "auth", msg: "Multiple login attempts from single IP (192.168...)", time: "1 hour ago" },
              { type: "update", msg: "Teacher profile EIN9088 updated by Admin", time: "3 hours ago" },
            ].map((alert, i) => (
              <div key={i} className="flex gap-4 p-4 rounded-2xl bg-secondary/30 border border-border/50">
                <div className="shrink-0 pt-1">
                  {alert.type === 'lock' ? <AlertTriangle className="text-destructive" size={18} /> : <Clock size={18} className="text-primary" />}
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-bold leading-tight">{alert.msg}</p>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-widest">{alert.time}</p>
                </div>
              </div>
            ))}
            <Button variant="ghost" className="w-full text-xs font-black uppercase text-accent hover:bg-accent/10">View Detailed Activity Log</Button>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Latest Complaints */}
        <Card className="border-none shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-lg">Recent Complaints</CardTitle>
              <CardDescription>Unreviewed feedback from students and parents.</CardDescription>
            </div>
            <Button size="sm" variant="outline" className="rounded-xl">View All</Button>
          </CardHeader>
          <CardContent className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-white rounded-2xl shadow-sm border border-border/50 group hover:border-accent transition-colors">
                <div className="space-y-1">
                  <p className="text-sm font-bold">Canteen water quality issue reported</p>
                  <p className="text-[10px] text-muted-foreground uppercase font-medium">Anonymous • 2 hours ago</p>
                </div>
                <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">Review</Button>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* System Settings Quick Access */}
        <Card className="border-none shadow-sm bg-primary text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 p-8 opacity-10 rotate-12 scale-150">
            <Settings size={120} />
          </div>
          <CardHeader>
            <CardTitle className="text-white">Quick Settings</CardTitle>
            <CardDescription className="text-white/60">Manage primary school website data.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 relative z-10">
            <div className="grid grid-cols-2 gap-4">
              {[
                { l: "Stats", href: "/admin/website" },
                { l: "Contact", href: "/admin/website" },
                { l: "Events", href: "/admin/events" },
                { l: "Notices", href: "/admin/academics/notices" },
              ].map((s, i) => (
                <Link key={i} href={s.href}>
                  <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 hover:bg-white/20 transition-all font-bold text-sm text-center">
                    {s.l} Management
                  </div>
                </Link>
              ))}
            </div>
            <Link href="/admin/website" className="block w-full">
              <Button className="w-full h-12 rounded-xl bg-accent text-primary hover:bg-accent/90 font-black shadow-xl">
                School Website Settings
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
