
"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { 
  GraduationCap, 
  ShieldCheck, 
  Mail, 
  Phone, 
  ArrowLeft, 
  Search, 
  User, 
  Calendar, 
  Briefcase,
  X,
  ArrowRight,
  Users2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent } from "@/components/ui/dialog";

// Personnel data simplified to only Teachers and Staff in serial order
const personnel = [
  {
    id: "HT001",
    name: "S. M. Easminur Rahman",
    bnName: "এস. এম. ইয়াসমিনুর রহমান",
    role: "Head Teacher",
    bnRole: "প্রধান শিক্ষক",
    image: "https://i.postimg.cc/NFZ1xd04/images-(1)-(13).jpg",
    category: "Teacher",
    dept: "Administration",
    subject: "Management",
    ein: "10293",
    joiningYear: "2010",
    bio: "প্রতিষ্ঠানের সার্বিক উন্নয়ন এবং শিক্ষার্থীদের মেধা বিকাশে নিরলসভাবে কাজ করে যাচ্ছেন।"
  },
  {
    id: "AHT001",
    name: "Md. Mamunul Hassan",
    bnName: "মোঃ মামুনুল হাসান",
    role: "Assistant Head Teacher",
    bnRole: "সহকারী প্রধান শিক্ষক",
    image: "https://i.postimg.cc/K4XMT49J/FB-IMG-1772769776462.jpg",
    category: "Teacher",
    dept: "Academic Oversight",
    subject: "Social Science",
    ein: "10294",
    joiningYear: "2012",
    bio: "একাডেমিক শৃঙ্খলা এবং পাঠদান পদ্ধতি তদারকির দায়িত্বে নিয়োজিত।"
  },
  {
    id: "T001",
    name: "Muhammad Sirajul Islam",
    bnName: "মুহাম্মদ সিরাজুল ইসলাম",
    role: "Assistant Teacher",
    bnRole: "সহকারী শিক্ষক",
    image: "https://picsum.photos/seed/teacher3/400/500",
    category: "Teacher",
    dept: "Arts",
    subject: "Islamic Studies",
    ein: "10295",
    joiningYear: "2015"
  },
  {
    id: "T002",
    name: "Md. Abdul Hannan",
    bnName: "মোঃ আব্দুল হান্নান",
    role: "Assistant Teacher",
    bnRole: "সহকারী শিক্ষক",
    image: "https://i.postimg.cc/cCG3grkh/FB-IMG-1772770012569.jpg",
    category: "Teacher",
    dept: "Arts",
    subject: "Social Science",
    ein: "10296",
    joiningYear: "2014"
  }
];

const staff = [
  {
    id: "S001",
    name: "Ariful Islam",
    bnName: "আরিফুল ইসলাম",
    role: "Office Assistant",
    bnRole: "অফিস সহায়ক",
    image: "https://i.postimg.cc/44qmL7Js/FB-IMG-1772773482000.jpg",
    category: "Staff",
    dept: "Office",
    ein: "5001"
  },
  {
    id: "S004",
    name: "Rokibul Islam",
    bnName: "রকিবুল ইসলাম",
    role: "Night Guard",
    bnRole: "নৈশ প্রহরী",
    image: "https://i.postimg.cc/Xq4nZCdV/FB-IMG-1772773975677.jpg",
    category: "Staff",
    dept: "Security",
    ein: "5004"
  }
];

export default function MeetOurTeachersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCat, setSelectedCat] = useState("All");
  const [selectedTeacher, setSelectedTeacher] = useState<any>(null);

  const categories = ["All", "Teacher", "Staff"];

  const filteredFaculty = useMemo(() => {
    const combined = [...personnel, ...staff];
    return combined.filter(p => {
      const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           p.bnName.includes(searchTerm) ||
                           p.subject?.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCat = selectedCat === "All" || p.category === selectedCat;
      return matchesSearch && matchesCat;
    });
  }, [searchTerm, selectedCat]);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-secondary/5">
      <div className="max-w-7xl mx-auto px-4 space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <Link href="/about">
              <Button variant="ghost" className="gap-2 text-muted-foreground hover:text-primary px-0 active:scale-95 transition-transform">
                <ArrowLeft size={18} /> সম্পর্কে ফিরে যান
              </Button>
            </Link>
            <div className="space-y-1">
              <span className="text-accent font-black uppercase tracking-[0.2em] text-[10px]">Institutional Human Resources</span>
              <h1 className="text-4xl lg:text-6xl font-headline font-black text-primary">আমাদের শিক্ষক ও কর্মচারী</h1>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            <div className="relative flex-1 md:w-64 min-w-[200px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <Input 
                placeholder="নাম বা বিষয় খুঁজুন..." 
                className="pl-10 h-12 bg-white border-border rounded-2xl shadow-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-hide">
              {categories.map(cat => (
                <Button
                  key={cat}
                  variant={selectedCat === cat ? "default" : "outline"}
                  onClick={() => setSelectedCat(cat)}
                  className={cn(
                    "rounded-full h-10 px-4 text-[10px] font-black uppercase tracking-widest whitespace-nowrap transition-all",
                    selectedCat === cat ? "bg-primary text-white shadow-lg" : "bg-white/50"
                  )}
                >
                  {cat === 'Teacher' ? 'শিক্ষক' : cat === 'Staff' ? 'কর্মচারী' : 'সব'}
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredFaculty.map((teacher) => (
            <div 
              key={teacher.id} 
              className="glass-card group hover:border-accent transition-all duration-500 cursor-pointer overflow-hidden hover:-translate-y-2 hover:shadow-2xl bg-white/80"
              onClick={() => setSelectedTeacher(teacher)}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image 
                  src={teacher.image} 
                  alt={teacher.name} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-1000" 
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                  <Button variant="secondary" className="w-full rounded-xl font-black uppercase tracking-widest text-[10px]">
                    প্রোফাইল দেখুন <ArrowRight size={14} className="ml-2" />
                  </Button>
                </div>
                <Badge className={cn(
                  "absolute top-4 right-4 text-white font-black uppercase text-[9px] px-3 py-1 shadow-sm rounded-full",
                  teacher.category === 'Teacher' ? 'bg-primary' : 'bg-accent text-primary'
                )}>
                  {teacher.category === 'Teacher' ? 'শিক্ষক' : 'কর্মচারী'}
                </Badge>
              </div>
              <div className="p-6 space-y-4">
                <div className="space-y-1">
                  <h4 className="font-headline font-black text-primary leading-tight text-lg group-hover:text-accent transition-colors">
                    {teacher.bnName}
                  </h4>
                  <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{teacher.name}</p>
                </div>
                
                <div className="pt-4 border-t border-dashed space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase text-accent tracking-widest">{teacher.subject || 'Administrative'}</span>
                    <Badge variant="outline" className="text-[8px] font-black uppercase border-primary/20 text-primary">{teacher.dept}</Badge>
                  </div>
                  <p className="text-[11px] font-bold text-primary italic leading-tight">{teacher.bnRole}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredFaculty.length === 0 && (
          <div className="py-24 text-center space-y-4 bg-white/30 rounded-[3rem] border-2 border-dashed border-muted-foreground/20">
            <div className="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center mx-auto">
              <User size={48} className="text-primary/20" />
            </div>
            <p className="text-muted-foreground font-bold uppercase tracking-widest text-xs">আপনার খোঁজা অনুযায়ী কাউকে পাওয়া যায়নি।</p>
          </div>
        )}
      </div>

      {selectedTeacher && (
        <Dialog open={!!selectedTeacher} onOpenChange={() => setSelectedTeacher(null)}>
          <DialogContent className="max-w-3xl glass-card border-none shadow-2xl p-0 overflow-hidden !rounded-[2.5rem]">
            <div className="grid md:grid-cols-2">
              <div className="relative h-80 md:h-full bg-secondary/10">
                <Image 
                  src={selectedTeacher.image} 
                  alt={selectedTeacher.name} 
                  fill 
                  className="object-cover" 
                  unoptimized
                />
                <button 
                  onClick={() => setSelectedTeacher(null)}
                  className="absolute top-4 left-4 bg-white/20 backdrop-blur-md rounded-full p-2 text-white hover:bg-white/40 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="p-8 md:p-12 space-y-8 max-h-[80vh] overflow-y-auto scrollbar-hide bg-white">
                <div className="space-y-4">
                  <Badge className="bg-accent text-primary font-black uppercase text-[10px] rounded-full">
                    {selectedTeacher.category === 'Teacher' ? 'Faculty Member' : 'Staff Member'}
                  </Badge>
                  <div className="space-y-1">
                    <h2 className="text-3xl font-headline font-black text-primary leading-tight">
                      {selectedTeacher.bnName}
                    </h2>
                    <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">
                      {selectedTeacher.name}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6 pt-4 border-t">
                  <div className="space-y-1">
                    <p className="text-[10px] font-black uppercase text-muted-foreground flex items-center gap-1">
                      <ShieldCheck size={10} className="text-accent" /> ID / EIN
                    </p>
                    <p className="font-bold text-primary">{selectedTeacher.ein}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] font-black uppercase text-muted-foreground flex items-center gap-1">
                      <Calendar size={10} className="text-accent" /> Joining
                    </p>
                    <p className="font-bold text-primary">{selectedTeacher.joiningYear || "N/A"}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] font-black uppercase text-muted-foreground flex items-center gap-1">
                      <Briefcase size={10} className="text-accent" /> Role
                    </p>
                    <p className="font-bold text-primary leading-tight">{selectedTeacher.bnRole}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] font-black uppercase text-muted-foreground flex items-center gap-1">
                      <GraduationCap size={10} className="text-accent" /> Specialist
                    </p>
                    <p className="font-bold text-primary">{selectedTeacher.subject || "General"}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-black uppercase text-[10px] text-primary tracking-widest">Biography / মিশন</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed font-medium">
                    {selectedTeacher.bio || `${selectedTeacher.bnName} প্রতিষ্ঠানের একজন নিবেদিতপ্রাণ সদস্য যিনি ${selectedTeacher.bnRole} হিসেবে দায়িত্ব পালন করছেন।`}
                  </p>
                </div>

                <div className="pt-6 flex gap-3">
                  <Button className="flex-1 rounded-2xl h-12 shadow-lg gap-2 bg-primary">
                    <Mail size={16} /> ইমেইল পাঠান
                  </Button>
                  <Button variant="outline" className="flex-1 rounded-2xl h-12 border-2 gap-2 text-primary">
                    <Phone size={16} /> কল করুন
                  </Button>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
