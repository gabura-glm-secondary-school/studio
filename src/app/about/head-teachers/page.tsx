
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
  Filter, 
  User, 
  Calendar, 
  Briefcase,
  X,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const personnel = [
  {
    id: "HT001",
    name: "S. M. Easminur Rahman",
    bnName: "এস. এম. ইয়াসমিনুর রহমান",
    role: "Head Teacher",
    bnRole: "প্রধান শিক্ষক",
    image: "https://i.postimg.cc/NFZ1xd04/images-(1)-(13).jpg",
    category: "Leadership",
    dept: "Administration",
    subject: "Management",
    ein: "10293",
    joiningYear: "2010",
    bio: "A dedicated visionary leader committed to excellence in education and institutional development."
  },
  {
    id: "AHT001",
    name: "Md. Mamunul Hassan",
    bnName: "মোঃ মামুনুল হাসান",
    role: "Assistant Head Teacher",
    bnRole: "সহকারী প্রধান শিক্ষক",
    image: "https://i.postimg.cc/K4XMT49J/FB-IMG-1772769776462.jpg",
    category: "Leadership",
    dept: "Academic Oversight",
    subject: "Social Science",
    ein: "10294",
    joiningYear: "2012",
    bio: "Focusing on academic excellence and student discipline across all classes."
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
  },
  {
    id: "T003",
    name: "Muhammad Abul Bashar",
    bnName: "মুহাম্মদ আবুল বাশার",
    role: "Assistant Teacher",
    bnRole: "সহকারী শিক্ষক",
    image: "https://i.postimg.cc/hGqRYnYw/image-9.jpg",
    category: "Teacher",
    dept: "Arts",
    subject: "Bangla",
    ein: "10297",
    joiningYear: "2011"
  },
  {
    id: "T004",
    name: "Md. Shohel Rana",
    bnName: "মোঃ সোহেল রানা",
    role: "Assistant Teacher",
    bnRole: "সহকারী শিক্ষক",
    image: "https://picsum.photos/seed/teacher6/400/500",
    category: "Teacher",
    dept: "Science",
    subject: "Biology",
    ein: "10298",
    joiningYear: "2018"
  },
  {
    id: "T005",
    name: "Sushanta Kumar Mondal",
    bnName: "সুশান্ত কুমার মন্ডল",
    role: "Assistant Teacher",
    bnRole: "সহকারী শিক্ষক",
    image: "https://i.postimg.cc/FKTyCyFP/FB-IMG-1772773115291.jpg",
    category: "Teacher",
    dept: "Science",
    subject: "Mathematics",
    ein: "10299",
    joiningYear: "2013"
  },
  {
    id: "T006",
    name: "Md. Asaduzzaman",
    bnName: "মোঃ আসাদুজ্জামান",
    role: "Assistant Teacher",
    bnRole: "সহকারী শিক্ষক",
    image: "https://i.postimg.cc/kgfCHzxz/FB-IMG-1772772970031.jpg",
    category: "Teacher",
    dept: "Science",
    subject: "ICT",
    ein: "10300",
    joiningYear: "2016"
  },
  {
    id: "T007",
    name: "G. M. Kamrul Islam",
    bnName: "জি. এম. কামরুল ইসলাম",
    role: "Assistant Teacher",
    bnRole: "সহকারী শিক্ষক",
    image: "https://i.postimg.cc/xcxX5PG3/FB-IMG-1772773193321.jpg",
    category: "Teacher",
    dept: "Physical Education",
    subject: "Sports",
    ein: "10301",
    joiningYear: "2017"
  },
  {
    id: "T008",
    name: "Goutam Kumar Mondal",
    bnName: "গৌতম কুমার মন্ডল",
    role: "Assistant Teacher",
    bnRole: "সহকারী শিক্ষক",
    image: "https://i.postimg.cc/85CSDHb8/image-15.jpg",
    category: "Teacher",
    dept: "Library",
    subject: "Library Science",
    ein: "10302",
    joiningYear: "2012"
  },
  {
    id: "T009",
    name: "Saikat Kanti Halder",
    bnName: "সৈকত কান্তি হালদার",
    role: "Assistant Teacher",
    bnRole: "সহকারী শিক্ষক",
    image: "https://picsum.photos/seed/teacher11/400/500",
    category: "Teacher",
    dept: "Science",
    subject: "Agriculture",
    ein: "10303",
    joiningYear: "2019"
  },
  {
    id: "T010",
    name: "Abdul Kader",
    bnName: "আব্দুল কাদের",
    role: "Assistant Teacher",
    bnRole: "সহকারী শিক্ষক",
    image: "https://i.postimg.cc/KvCsJypW/FB-IMG-1772773368990.jpg",
    category: "Teacher",
    dept: "Arts",
    subject: "English",
    ein: "10304",
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
    id: "S002",
    name: "S. M. Afzal Hossain",
    bnName: "এস. এম. আফজাল হোসেন",
    role: "Office Assistant",
    bnRole: "অফিস সহকারী",
    image: "https://picsum.photos/seed/staff14/400/500",
    category: "Staff",
    dept: "Accounts",
    ein: "5002"
  },
  {
    id: "S003",
    name: "Md. Shah Alam",
    bnName: "মোঃ শাহ আলম",
    role: "Security Guard",
    bnRole: "নিরাপত্তা কর্মী",
    image: "https://picsum.photos/seed/staff15/400/500",
    category: "Staff",
    dept: "Security",
    ein: "5003"
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
  },
  {
    id: "S005",
    name: "Miss Suma Akter",
    bnName: "মিস সুমা আক্তার",
    role: "Aya",
    bnRole: "আয়া",
    image: "https://picsum.photos/seed/staff17/400/500",
    category: "Staff",
    dept: "Maintenance",
    ein: "5005"
  }
];

export default function MeetOurTeachersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDept, setSelectedDept] = useState("All");
  const [selectedTeacher, setSelectedTeacher] = useState<any>(null);

  const departments = ["All", "Science", "Arts", "Physical Education", "Library", "Administration"];

  const headTeacher = personnel.find(p => p.role === "Head Teacher");
  const faculty = personnel.filter(p => p.role !== "Head Teacher");

  const filteredFaculty = useMemo(() => {
    return faculty.filter(p => {
      const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           p.subject?.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesDept = selectedDept === "All" || p.dept === selectedDept;
      return matchesSearch && matchesDept;
    });
  }, [searchTerm, selectedDept, faculty]);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-secondary/5">
      <div className="max-w-7xl mx-auto px-4 space-y-16">
        {/* Header navigation */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <Link href="/">
              <Button variant="ghost" className="gap-2 text-muted-foreground hover:text-primary px-0 active:scale-95 transition-transform">
                <ArrowLeft size={18} /> Back to Home
              </Button>
            </Link>
            <div className="space-y-1">
              <span className="text-accent font-black uppercase tracking-[0.2em] text-[10px]">Academic Excellence</span>
              <h1 className="text-4xl lg:text-6xl font-headline font-black text-primary">Meet Our Teachers</h1>
              <p className="text-muted-foreground font-medium max-w-xl">
                Dedicated educators guiding the future of our students with passion and expertise.
              </p>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            <div className="relative flex-1 md:w-64 min-w-[200px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <Input 
                placeholder="Search name or subject..." 
                className="pl-10 h-12 bg-white border-border rounded-2xl shadow-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-hide">
              {departments.map(dept => (
                <Button
                  key={dept}
                  variant={selectedDept === dept ? "default" : "outline"}
                  onClick={() => setSelectedDept(dept)}
                  className={cn(
                    "rounded-full h-10 px-4 text-xs font-bold whitespace-nowrap",
                    selectedDept === dept ? "bg-primary text-white" : "bg-white/50"
                  )}
                >
                  {dept}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Head Teacher Spotlight */}
        {headTeacher && (
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-[3rem] blur-3xl opacity-50"></div>
            <div className="glass-card overflow-hidden border-2 border-primary/10 relative z-10">
              <div className="flex flex-col lg:flex-row items-center gap-12 p-8 md:p-12">
                <div className="relative w-64 h-80 md:w-80 md:h-[450px] rounded-[2.5rem] overflow-hidden shrink-0 border-4 border-white shadow-2xl bg-white group-hover:scale-[1.02] transition-transform duration-500">
                  <Image 
                    src={headTeacher.image} 
                    alt={headTeacher.name} 
                    fill 
                    className="object-cover" 
                    unoptimized
                  />
                </div>
                <div className="space-y-8 flex-1 text-center lg:text-left">
                  <div className="space-y-4">
                    <Badge className="bg-primary text-white px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest shadow-lg">
                      Head Teacher / Principal
                    </Badge>
                    <h2 className="text-4xl md:text-6xl font-headline font-black text-primary leading-tight uppercase">
                      {headTeacher.bnName}
                    </h2>
                    <p className="text-xl font-bold text-accent uppercase tracking-widest">{headTeacher.name}</p>
                  </div>
                  
                  <div className="glass-card !bg-white/40 p-6 italic text-lg text-muted-foreground leading-relaxed font-medium">
                    "{headTeacher.bio || "Welcome to Gabura G.L.M Secondary School. We are dedicated to nurturing the next generation of leaders in the heart of Sundarbans."}"
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    <div className="space-y-1">
                      <p className="text-[10px] font-black uppercase text-muted-foreground tracking-widest">EIN Number</p>
                      <p className="text-xl font-black text-primary">{headTeacher.ein}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-[10px] font-black uppercase text-muted-foreground tracking-widest">Joined Year</p>
                      <p className="text-xl font-black text-primary">{headTeacher.joiningYear}</p>
                    </div>
                    <div className="hidden md:block space-y-1">
                      <p className="text-[10px] font-black uppercase text-muted-foreground tracking-widest">Department</p>
                      <p className="text-xl font-black text-primary">{headTeacher.dept}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                    <Button onClick={() => setSelectedTeacher(headTeacher)} size="lg" className="rounded-full px-8 gap-2 bg-primary shadow-xl">
                      <User size={18} /> View Full Profile
                    </Button>
                    <Button variant="outline" size="lg" className="rounded-full px-8 gap-2 border-2 bg-white/20">
                      <Mail size={18} /> Contact Office
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Faculty Grid */}
        <div className="space-y-12">
          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-border/50"></div>
            <h3 className="text-2xl font-headline font-black text-primary uppercase tracking-widest flex items-center gap-2">
              <GraduationCap className="text-accent" /> Academic Faculty
            </h3>
            <div className="h-px flex-1 bg-border/50"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredFaculty.map((teacher) => (
              <div 
                key={teacher.id} 
                className="glass-card group hover:border-accent transition-all duration-500 cursor-pointer overflow-hidden hover:-translate-y-2 hover:shadow-2xl"
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
                      View Profile <ArrowRight size={14} className="ml-2" />
                    </Button>
                  </div>
                  <Badge className="absolute top-4 right-4 bg-white/90 text-primary font-black uppercase text-[9px] px-2 py-0.5 shadow-sm">
                    {teacher.ein}
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
                      <span className="text-[10px] font-black uppercase text-accent tracking-widest">{teacher.subject}</span>
                      <Badge variant="outline" className="text-[8px] font-black uppercase border-primary/20">{teacher.dept}</Badge>
                    </div>
                    <p className="text-[10px] font-bold text-muted-foreground italic">{teacher.bnRole}</p>
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
              <p className="text-muted-foreground font-bold uppercase tracking-widest text-xs">No teachers found matching your search.</p>
              <Button variant="link" onClick={() => {setSearchTerm(""); setSelectedDept("All");}}>Clear Filters</Button>
            </div>
          )}
        </div>

        {/* Support Staff Section */}
        <div className="space-y-12 pt-16">
          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-border/50"></div>
            <h3 className="text-2xl font-headline font-black text-primary uppercase tracking-widest flex items-center gap-2">
              <Briefcase className="text-accent" /> Support Staff
            </h3>
            <div className="h-px flex-1 bg-border/50"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {staff.map((s) => (
              <div key={s.id} className="glass-card p-6 text-center space-y-4 hover:border-primary/20 transition-all group">
                <div className="relative w-20 h-20 mx-auto rounded-full overflow-hidden border-2 border-white shadow-md group-hover:scale-110 transition-transform">
                  <Image src={s.image} alt={s.name} fill className="object-cover" unoptimized />
                </div>
                <div>
                  <h5 className="font-bold text-primary text-sm leading-tight">{s.bnName}</h5>
                  <p className="text-[10px] font-bold text-accent uppercase tracking-tighter mt-1">{s.bnRole}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Teacher Profile Dialog */}
      {selectedTeacher && (
        <Dialog open={!!selectedTeacher} onOpenChange={() => setSelectedTeacher(null)}>
          <DialogContent className="max-w-3xl glass-card border-none shadow-2xl p-0 overflow-hidden">
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
              <div className="p-8 md:p-12 space-y-8 max-h-[80vh] overflow-y-auto scrollbar-hide">
                <div className="space-y-4">
                  <Badge className="bg-accent text-primary font-black uppercase text-[10px]">
                    {selectedTeacher.dept} Department
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

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <p className="text-[10px] font-black uppercase text-muted-foreground flex items-center gap-1">
                      <ShieldCheck size={10} className="text-accent" /> EIN Number
                    </p>
                    <p className="font-bold text-primary">{selectedTeacher.ein}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] font-black uppercase text-muted-foreground flex items-center gap-1">
                      <Calendar size={10} className="text-accent" /> Joining Year
                    </p>
                    <p className="font-bold text-primary">{selectedTeacher.joiningYear || "N/A"}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] font-black uppercase text-muted-foreground flex items-center gap-1">
                      <Briefcase size={10} className="text-accent" /> Designation
                    </p>
                    <p className="font-bold text-primary">{selectedTeacher.role}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] font-black uppercase text-muted-foreground flex items-center gap-1">
                      <GraduationCap size={10} className="text-accent" /> Specialist
                    </p>
                    <p className="font-bold text-primary">{selectedTeacher.subject || "Academic"}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-black uppercase text-[10px] text-primary tracking-widest">Professional Biography</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {selectedTeacher.bio || `${selectedTeacher.name} is a dedicated educator serving as an ${selectedTeacher.role} in the ${selectedTeacher.dept} department. With years of academic experience, they focus on providing quality education and fostering student growth.`}
                  </p>
                </div>

                <div className="pt-6 flex gap-3">
                  <Button className="flex-1 rounded-xl h-12 shadow-lg gap-2">
                    <Mail size={16} /> Send Email
                  </Button>
                  <Button variant="outline" className="flex-1 rounded-xl h-12 border-2 gap-2">
                    <Phone size={16} /> Call Faculty
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
