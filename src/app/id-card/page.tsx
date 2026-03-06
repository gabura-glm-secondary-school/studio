"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, GraduationCap, MapPin, Phone, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export default function IdCardPage() {
  const student = {
    name: "Abdur Rahman",
    id: "STU2024001",
    class: "9",
    section: "A",
    roll: "101",
    photo: "https://picsum.photos/seed/student1/300/300",
    motto: "সুশিক্ষাই আমাদের অঙ্গীকার"
  };

  const logoUrl = "https://i.postimg.cc/rwjdJqQK/1000144744-removebg-preview-(1).png";

  return (
    <div className="pt-24 pb-12 min-h-screen bg-secondary/10 flex flex-col items-center px-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-headline font-bold text-primary">Digital ID Card</h1>
          <p className="text-muted-foreground font-bold italic">Official identity document for GGLMSS Platform</p>
        </div>

        <div id="id-card-capture" className="relative w-full aspect-[1.6/1] bg-white rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
          {/* Card Header */}
          <div className="absolute top-0 left-0 right-0 h-24 bg-primary flex items-center px-6 gap-4">
            <div className="w-14 h-14 relative bg-white rounded-full p-1 shrink-0 overflow-hidden">
              <Image src={logoUrl} alt="Logo" fill className="object-contain" />
            </div>
            <div>
              <h2 className="text-white font-headline font-bold text-sm leading-tight uppercase tracking-tighter">
                Gabura Gopal Laxmi Memorial Secondary School
              </h2>
              <p className="text-accent text-[8px] font-black uppercase tracking-widest">{student.motto}</p>
            </div>
          </div>

          {/* Card Body */}
          <div className="mt-24 p-6 flex gap-6">
            <div className="w-32 h-40 relative rounded-xl overflow-hidden border-2 border-primary/10 shadow-md shrink-0">
              <Image src={student.photo} alt="Photo" fill className="object-cover" />
            </div>
            <div className="flex-1 space-y-3 py-2">
              <div>
                <p className="text-[8px] font-black text-muted-foreground uppercase">Full Name</p>
                <p className="text-lg font-black text-primary leading-none uppercase">{student.name}</p>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <p className="text-[8px] font-black text-muted-foreground uppercase">Class</p>
                  <p className="text-sm font-black text-primary">{student.class} - {student.section}</p>
                </div>
                <div>
                  <p className="text-[8px] font-black text-muted-foreground uppercase">Roll No</p>
                  <p className="text-sm font-black text-primary">{student.roll}</p>
                </div>
              </div>
              <div>
                <p className="text-[8px] font-black text-muted-foreground uppercase">Student ID</p>
                <p className="text-sm font-black text-accent font-mono">{student.id}</p>
              </div>
            </div>
          </div>

          {/* Watermark/Decor */}
          <div className="absolute bottom-0 right-0 p-4 opacity-5 rotate-[-15deg]">
            <ShieldCheck size={120} />
          </div>
          
          <div className="absolute bottom-4 left-6 flex items-center gap-2">
             <Badge className="bg-emerald-500 text-[8px] uppercase px-2 py-0.5 font-black">Verified</Badge>
             <span className="text-[8px] text-muted-foreground font-black italic font-mono tracking-widest uppercase">Valid Session 2024-25</span>
          </div>
        </div>

        <Button className="w-full h-12 rounded-xl gap-2 shadow-xl text-lg font-black" onClick={() => window.print()}>
          <Download size={20} /> Download PDF Version
        </Button>

        <Card className="glass-card bg-primary/5 border-dashed">
          <CardContent className="p-6 space-y-4">
            <h3 className="font-black text-primary flex items-center gap-2">
              <ShieldCheck size={18} className="text-accent" /> Card Usage Policy
            </h3>
            <ul className="text-xs text-muted-foreground font-bold space-y-2 list-disc ml-4">
              <li>This digital ID is valid for all internal school operations.</li>
              <li>Always carry this ID during exams and school events.</li>
              <li>In case of loss, report to your class teacher immediately.</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}