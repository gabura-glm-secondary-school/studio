
"use client";

import { use, useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  GraduationCap, 
  Users, 
  Award, 
  Search, 
  Download,
  Filter,
  User
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const mockBatchDetails: Record<string, any> = {};
const mockStudents: any[] = [];

export default function SscBatchDetailPage({ params }: { params: Promise<{ batchId: string }> }) {
  const { batchId } = use(params);
  const [searchTerm, setSearchTerm] = useState("");
  
  const batch = mockBatchDetails[batchId] || { year: batchId.split("-")[1] || "N/A", total: 0, gpa5: 0, passRate: "N/A" };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-secondary/5">
      <div className="max-w-6xl mx-auto px-4 space-y-12">
        {/* Header navigation */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-4">
            <Link href="/ssc-batches">
              <Button variant="ghost" className="gap-2 text-muted-foreground hover:text-primary px-0 active:scale-95 transition-transform">
                <ArrowLeft size={18} /> ব্যাচ তালিকায় ফিরে যান
              </Button>
            </Link>
            <div className="space-y-1">
              <span className="text-accent font-black uppercase tracking-[0.2em] text-[10px]">Academic Records</span>
              <h1 className="text-4xl font-headline font-black text-primary uppercase">
                SSC Batch {batch.year}
              </h1>
            </div>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="rounded-xl h-11 border-2 gap-2 shadow-sm font-bold">
              <Download size={18} /> Export Results
            </Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="glass-card bg-primary text-white border-none">
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <p className="text-[10px] font-black uppercase opacity-60">Total Students</p>
                  <p className="text-3xl font-black">{batch.total}</p>
                </div>
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                  <Users size={20} />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="glass-card">
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <p className="text-[10px] font-black uppercase text-muted-foreground">GPA 5.00</p>
                  <p className="text-3xl font-black text-primary">{batch.gpa5}</p>
                </div>
                <div className="w-10 h-10 bg-accent/10 text-accent rounded-xl flex items-center justify-center">
                  <Award size={20} />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="glass-card">
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <p className="text-[10px] font-black uppercase text-muted-foreground">Pass Rate</p>
                  <p className="text-3xl font-black text-emerald-600">{batch.passRate}</p>
                </div>
                <div className="w-10 h-10 bg-emerald-500/10 text-emerald-600 rounded-xl flex items-center justify-center">
                  <GraduationCap size={20} />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="glass-card border-accent/20 bg-accent/5">
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <p className="text-[10px] font-black uppercase text-primary/60">Verified Records</p>
                  <p className="text-3xl font-black text-primary">0%</p>
                </div>
                <div className="w-10 h-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
                  <User size={20} />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Students Table */}
        <Card className="glass-card border-none overflow-hidden">
          <CardHeader className="bg-white/50 border-b flex flex-col md:flex-row md:items-center justify-between gap-4 py-6">
            <div>
              <CardTitle className="text-xl font-headline font-black text-primary">Student Directory</CardTitle>
              <p className="text-xs text-muted-foreground font-medium">List of students and their examination results.</p>
            </div>
            <div className="relative max-w-sm w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
              <Input 
                placeholder="Search students..." 
                className="pl-9 h-10 rounded-xl bg-white/50"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </CardHeader>
          <CardContent className="p-0">
            {mockStudents.length === 0 ? (
              <div className="py-20 text-center space-y-4">
                <Users size={48} className="mx-auto text-muted-foreground/20" />
                <p className="text-muted-foreground font-black uppercase tracking-widest text-xs">এই ব্যাচের কোনো শিক্ষার্থী তথ্য পাওয়া যায়নি।</p>
              </div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/30">
                    <TableHead className="w-16 text-center font-black uppercase text-[10px] tracking-widest">Roll</TableHead>
                    <TableHead className="font-black uppercase text-[10px] tracking-widest pl-6">Student Name</TableHead>
                    <TableHead className="text-center font-black uppercase text-[10px] tracking-widest">Result (GPA)</TableHead>
                    <TableHead className="text-center font-black uppercase text-[10px] tracking-widest">Profile Status</TableHead>
                    <TableHead className="w-24"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockStudents.map((student, idx) => (
                    <TableRow key={idx} className="group hover:bg-secondary/5 transition-colors">
                      <TableCell className="text-center font-black text-primary">{student.roll}</TableCell>
                      <TableCell className="pl-6">
                        <div className="flex items-center gap-3">
                          <Avatar className="h-9 w-9 border-2 border-white shadow-sm">
                            <AvatarImage src={`https://picsum.photos/seed/${student.name}/100/100`} />
                            <AvatarFallback>{student.name[0]}</AvatarFallback>
                          </Avatar>
                          <div className="font-bold text-primary">{student.name}</div>
                        </div>
                      </TableCell>
                      <TableCell className="text-center font-black text-accent">{student.gpa}</TableCell>
                      <TableCell className="text-center">
                        <Badge className="bg-emerald-500 rounded-lg text-[10px] uppercase font-black px-2 py-0.5">
                          {student.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right pr-6">
                        <Button variant="ghost" size="sm" className="rounded-lg text-[10px] font-black uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                          Details
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
