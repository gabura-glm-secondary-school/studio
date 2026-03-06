
"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Briefcase, UserRound, Globe, ArrowRight } from "lucide-react";

const portals = [
  {
    role: "student",
    title: "Student Portal",
    description: "Access your lessons, results, and student directory.",
    icon: GraduationCap,
    color: "bg-blue-500",
    href: "/auth/login/student"
  },
  {
    role: "teacher",
    title: "Teacher Portal",
    description: "Manage classes, student ratings, and schedules.",
    icon: Briefcase,
    color: "bg-emerald-500",
    href: "/auth/login/teacher"
  },
  {
    role: "staff",
    title: "Staff Portal",
    description: "Office administration and school operations.",
    icon: UserRound,
    color: "bg-amber-500",
    href: "/auth/login/staff"
  },
  {
    role: "external",
    title: "External User",
    description: "Alumni and community access to school resources.",
    icon: Globe,
    color: "bg-purple-500",
    href: "/auth/login/external"
  }
];

export default function PortalPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-secondary/5">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <span className="text-accent font-bold uppercase tracking-[0.2em] text-sm">GGLMSS Management</span>
          <h1 className="text-4xl lg:text-6xl font-headline font-bold text-primary">Select Your Portal</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose the appropriate portal to login or register for your account.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {portals.map((portal) => (
            <Link key={portal.role} href={portal.href} className="group">
              <Card className="glass-card hover:border-accent transition-all overflow-hidden border-2 border-transparent h-full">
                <CardContent className="p-8 flex items-start gap-6">
                  <div className={`w-16 h-16 ${portal.color} text-white rounded-2xl flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform`}>
                    <portal.icon size={32} />
                  </div>
                  <div className="space-y-2 flex-1">
                    <h3 className="text-2xl font-headline font-bold text-primary flex items-center justify-between">
                      {portal.title}
                      <ArrowRight className="opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all text-accent" />
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {portal.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-16 p-8 bg-primary/5 rounded-3xl border border-primary/10 text-center">
          <p className="text-sm font-medium text-primary/60">
            Having trouble accessing your account? 
            <Link href="/auth/recovery" className="ml-2 text-accent font-bold hover:underline">
              Request Account Recovery
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
