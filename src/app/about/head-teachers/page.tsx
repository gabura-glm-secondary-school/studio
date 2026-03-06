
"use client";

import Image from "next/image";
import { GraduationCap, Award, ShieldCheck, Mail, Phone, ArrowLeft, Users, Briefcase, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

const personnel = [
  {
    name: "S. M. Easminur Rahman",
    bnName: "এস. এম. ইয়াসমিনুর রহমান",
    role: "Head Teacher",
    bnRole: "প্রধান শিক্ষক",
    image: "https://i.postimg.cc/NFZ1xd04/images-(1)-(13).jpg",
    category: "Leadership",
    dept: "Administration"
  },
  {
    name: "Md. Mamunul Hassan",
    bnName: "মোঃ মামুনুল হাসান",
    role: "Assistant Head Teacher",
    bnRole: "সহকারী প্রধান শিক্ষক",
    image: "https://i.postimg.cc/K4XMT49J/FB-IMG-1772769776462.jpg",
    category: "Leadership",
    dept: "Academic Oversight"
  },
  {
    name: "Muhammad Sirajul Islam",
    bnName: "মুহাম্মদ সিরাজুল ইসলাম",
    role: "Assistant Teacher (Islamic Studies)",
    bnRole: "সহকারী শিক্ষক (ইসলাম শিক্ষা)",
    image: "https://picsum.photos/seed/teacher3/400/500",
    category: "Teacher",
    dept: "Islamic Studies"
  },
  {
    name: "Md. Abdul Hannan",
    bnName: "মোঃ আব্দুল হান্নান",
    role: "Assistant Teacher (Social Science)",
    bnRole: "সহকারী শিক্ষক (সমাজিক বিজ্ঞান)",
    image: "https://i.postimg.cc/cCG3grkh/FB-IMG-1772770012569.jpg",
    category: "Teacher",
    dept: "Social Science"
  },
  {
    name: "Muhammad Abul Bashar",
    bnName: "মুহাম্মদ আবুল বাশার",
    role: "Assistant Teacher (Bangla)",
    bnRole: "সহকারী শিক্ষক (বাংলা)",
    image: "https://i.postimg.cc/hGqRYnYw/image-9.jpg",
    category: "Teacher",
    dept: "Bangla"
  },
  {
    name: "Md. Shohel Rana",
    bnName: "মোঃ সোহেল রানা",
    role: "Assistant Teacher (Biology)",
    bnRole: "সহকারী শিক্ষক (জীববিজ্ঞান)",
    image: "https://picsum.photos/seed/teacher6/400/500",
    category: "Teacher",
    dept: "Biology"
  },
  {
    name: "Sushanta Kumar Mondal",
    bnName: "সুশান্ত কুমার মন্ডল",
    role: "Assistant Teacher (Mathematics)",
    bnRole: "সহকারী শিক্ষক (গণিত)",
    image: "https://i.postimg.cc/FKTyCyFP/FB-IMG-1772773115291.jpg",
    category: "Teacher",
    dept: "Mathematics"
  },
  {
    name: "Md. Asaduzzaman",
    bnName: "মোঃ আসাদুজ্জামান",
    role: "Assistant Teacher (ICT)",
    bnRole: "সহকারী শিক্ষক (তথ্য ও যোগাযোগ প্রযুক্তি)",
    image: "https://i.postimg.cc/kgfCHzxz/FB-IMG-1772772970031.jpg",
    category: "Teacher",
    dept: "ICT"
  },
  {
    name: "G. M. Kamrul Islam",
    bnName: "জি. এম. কামরুল ইসলাম",
    role: "Assistant Teacher (Physical Education)",
    bnRole: "সহকারী শিক্ষক (শারীরিক শিক্ষা)",
    image: "https://i.postimg.cc/xcxX5PG3/FB-IMG-1772773193321.jpg",
    category: "Teacher",
    dept: "Physical Education"
  },
  {
    name: "Goutam Kumar Mondal",
    bnName: "গৌতম কুমার মন্ডল",
    role: "Assistant Teacher & Assistant Librarian",
    bnRole: "সহকারী শিক্ষক ও সহকারী লাইব্রেরিয়ান",
    image: "https://i.postimg.cc/85CSDHb8/image-15.jpg",
    category: "Teacher",
    dept: "Library & Academic"
  },
  {
    name: "Saikat Kanti Halder",
    bnName: "সৈকত কান্তি হালদার",
    role: "Assistant Teacher (Agriculture)",
    bnRole: "সহকারী শিক্ষক (কৃষি)",
    image: "https://picsum.photos/seed/teacher11/400/500",
    category: "Teacher",
    dept: "Agriculture"
  },
  {
    name: "Abdul Kader",
    bnName: "আব্দুল কাদের",
    role: "Assistant Teacher (English)",
    bnRole: "সহকারী শিক্ষক (ইংরেজি)",
    image: "https://i.postimg.cc/KvCsJypW/FB-IMG-1772773368990.jpg",
    category: "Teacher",
    dept: "English"
  },
  {
    name: "Ariful Islam",
    bnName: "আরিফুল ইসলাম",
    role: "Office Assistant",
    bnRole: "অফিস সহায়ক",
    image: "https://i.postimg.cc/44qmL7Js/FB-IMG-1772773482000.jpg",
    category: "Staff",
    dept: "Office"
  },
  {
    name: "S. M. Afzal Hossain",
    bnName: "এস. এম. আফজাল হোসেন",
    role: "Office Assistant cum Accounts Assistant",
    bnRole: "অফিস সহকারী কাম হিসাব সহকারী",
    image: "https://picsum.photos/seed/staff14/400/500",
    category: "Staff",
    dept: "Accounts"
  },
  {
    name: "Md. Shah Alam",
    bnName: "মোঃ শাহ আলম",
    role: "Security Guard",
    bnRole: "নিরাপত্তা কর্মী",
    image: "https://picsum.photos/seed/staff15/400/500",
    category: "Staff",
    dept: "Security"
  },
  {
    name: "Rokibul Islam",
    bnName: "রকিবুল ইসলাম",
    role: "Night Guard",
    bnRole: "নৈশ প্রহরী",
    image: "https://i.postimg.cc/Xq4nZCdV/FB-IMG-1772773975677.jpg",
    category: "Staff",
    dept: "Security"
  },
  {
    name: "Miss Suma Akter",
    bnName: "মিস সুমা আক্তার",
    role: "Aya",
    bnRole: "আয়া",
    image: "https://picsum.photos/seed/staff17/400/500",
    category: "Staff",
    dept: "Maintenance"
  }
];

export default function AdministrationPage() {
  const leadership = personnel.filter(p => p.category === "Leadership");
  const teachers = personnel.filter(p => p.category === "Teacher");
  const staff = personnel.filter(p => p.category === "Staff");

  return (
    <div className="pt-32 pb-24 min-h-screen bg-secondary/5">
      <div className="max-w-7xl mx-auto px-4 space-y-16">
        {/* Header navigation */}
        <div className="flex items-center justify-between">
          <Link href="/">
            <Button variant="ghost" className="gap-2 text-muted-foreground hover:text-primary px-0 active:scale-95 transition-transform">
              <ArrowLeft size={18} /> প্রচ্ছদ পাতায় ফিরে যান
            </Button>
          </Link>
          <div className="text-right">
            <span className="text-accent font-black uppercase tracking-[0.2em] text-[10px]">Teachers & Staff</span>
            <h1 className="text-2xl font-headline font-black text-primary leading-tight">বিদ্যালয় প্রশাসন ও শিক্ষক মন্ডলী</h1>
          </div>
        </div>

        {/* Leadership Section */}
        <div className="space-y-12">
          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-border"></div>
            <h2 className="text-xl font-headline font-black text-primary uppercase tracking-widest flex items-center gap-2">
              <ShieldCheck className="text-accent" /> প্রশাসনিক পর্ষদ
            </h2>
            <div className="h-px flex-1 bg-border"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {leadership.map((admin, idx) => (
              <div key={idx} className="glass-card group hover:border-accent transition-all duration-300 overflow-hidden">
                <div className="flex flex-col sm:flex-row gap-8 p-8 items-center">
                  <div className="relative w-48 h-60 rounded-3xl overflow-hidden shrink-0 border-4 border-white shadow-xl bg-white">
                    <Image 
                      src={admin.image} 
                      alt={admin.name} 
                      fill 
                      className="object-cover group-hover:scale-105 transition-transform duration-500" 
                      unoptimized
                    />
                  </div>
                  <div className="space-y-4 text-center sm:text-left flex-1">
                    <div className="space-y-1">
                      <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-[10px] font-black uppercase">
                        {admin.category}
                      </div>
                      <h3 className="text-2xl font-headline font-black text-primary leading-tight uppercase">{admin.bnName}</h3>
                      <p className="text-sm font-bold text-accent uppercase tracking-wider">{admin.name}</p>
                    </div>
                    <div className="space-y-0.5">
                      <p className="text-lg font-bold text-muted-foreground leading-tight">{admin.bnRole}</p>
                      <p className="text-xs font-medium text-muted-foreground/60">{admin.role}</p>
                    </div>
                    <div className="flex gap-2 justify-center sm:justify-start">
                      <Button size="sm" variant="outline" className="rounded-full h-9 px-4 gap-2 border-2">
                        <Mail size={14} /> Contact
                      </Button>
                      <Button size="sm" variant="outline" className="rounded-full h-9 px-4 gap-2 border-2">
                        <Phone size={14} /> Call
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Teachers Grid */}
        <div className="space-y-12">
          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-border"></div>
            <h2 className="text-xl font-headline font-black text-primary uppercase tracking-widest flex items-center gap-2">
              <GraduationCap className="text-accent" /> শিক্ষক মন্ডলী
            </h2>
            <div className="h-px flex-1 bg-border"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {teachers.map((teacher, idx) => (
              <div key={idx} className="glass-card group hover:border-accent transition-all duration-300">
                <div className="p-6 space-y-6">
                  <div className="flex gap-4 items-center">
                    <div className="relative w-24 h-28 rounded-2xl overflow-hidden shrink-0 border-2 border-white shadow-md bg-white">
                      <Image 
                        src={teacher.image} 
                        alt={teacher.name} 
                        fill 
                        className="object-cover group-hover:scale-110 transition-transform duration-500" 
                        unoptimized
                      />
                    </div>
                    <div className="space-y-1 min-w-0">
                      <h4 className="font-bold text-primary leading-tight truncate" title={teacher.bnName}>{teacher.bnName}</h4>
                      <p className="text-[10px] font-black text-accent uppercase tracking-widest">{teacher.bnRole}</p>
                      <p className="text-[9px] text-muted-foreground font-medium truncate">{teacher.name}</p>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-dashed flex items-center justify-between">
                    <span className="text-[9px] font-black text-muted-foreground uppercase tracking-widest">{teacher.dept}</span>
                    <div className="flex gap-1">
                      <Button variant="ghost" size="icon" className="h-7 w-7 rounded-full text-muted-foreground hover:text-primary">
                        <Mail size={14} />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-7 w-7 rounded-full text-muted-foreground hover:text-primary">
                        <Phone size={14} />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Staff Grid */}
        <div className="space-y-12">
          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-border"></div>
            <h2 className="text-xl font-headline font-black text-primary uppercase tracking-widest flex items-center gap-2">
              <UserRound className="text-accent" /> কর্মচারী বৃন্দ
            </h2>
            <div className="h-px flex-1 bg-border"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {staff.map((s, idx) => (
              <div key={idx} className="glass-card group hover:border-accent transition-all duration-300 bg-white/40">
                <div className="p-6 space-y-4">
                  <div className="flex gap-4 items-center">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0 border-2 border-white shadow-sm bg-white">
                      <Image 
                        src={s.image} 
                        alt={s.name} 
                        fill 
                        className="object-cover group-hover:scale-110 transition-transform duration-500" 
                        unoptimized
                      />
                    </div>
                    <div className="space-y-0.5">
                      <h4 className="font-bold text-primary leading-tight text-sm">{s.bnName}</h4>
                      <p className="text-[9px] font-black text-accent uppercase tracking-widest">{s.bnRole}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Stats */}
        <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="glass-card p-6 text-center space-y-1">
            <Users className="mx-auto text-primary mb-2" size={24} />
            <p className="text-2xl font-black text-primary">{personnel.length}</p>
            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Total Staff</p>
          </div>
          <div className="glass-card p-6 text-center space-y-1">
            <GraduationCap className="mx-auto text-accent mb-2" size={24} />
            <p className="text-2xl font-black text-primary">{teachers.length}</p>
            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Teachers</p>
          </div>
          <div className="glass-card p-6 text-center space-y-1">
            <Briefcase className="mx-auto text-primary mb-2" size={24} />
            <p className="text-2xl font-black text-primary">{leadership.length}</p>
            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Leadership</p>
          </div>
          <div className="glass-card p-6 text-center space-y-1">
            <UserRound className="mx-auto text-accent mb-2" size={24} />
            <p className="text-2xl font-black text-primary">{staff.length}</p>
            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Support Staff</p>
          </div>
        </div>
      </div>
    </div>
  );
}
