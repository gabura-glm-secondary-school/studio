import Link from "next/link";
import { 
  ChevronRight, 
  Bell, 
  GraduationCap, 
  Briefcase, 
  Library, 
  Calendar, 
  FileCheck 
} from "lucide-react";

export function QuickLinks() {
  const links = [
    { name: "Notice Board", href: "/notices", icon: Bell, color: "hover:bg-rose-500" },
    { name: "Student Portal", href: "/auth/login/student", icon: GraduationCap, color: "hover:bg-blue-500" },
    { name: "Teacher Portal", href: "/auth/login/teacher", icon: Briefcase, color: "hover:bg-emerald-500" },
    { name: "Library", href: "/library", icon: Library, color: "hover:bg-amber-500" },
    { name: "Events", href: "/events", icon: Calendar, color: "hover:bg-purple-500" },
    { name: "SSC Result", href: "/ssc-results", icon: FileCheck, color: "hover:bg-indigo-500" },
  ];

  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="glass-card p-12">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1 space-y-6">
              <span className="text-accent font-black uppercase tracking-[0.2em] text-xs">Quick Access</span>
              <h2 className="text-4xl font-headline font-black text-primary leading-tight">Digital Resources & Portals</h2>
              <p className="text-muted-foreground leading-relaxed font-medium">
                Easily access essential school services, academic records, and department portals through our unified digital platform.
              </p>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {links.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  className={`flex items-center justify-between p-6 glass-card !rounded-3xl transition-all duration-500 group ${link.color} hover:text-white shadow-sm hover:shadow-xl hover:-translate-y-1`}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white/40 flex items-center justify-center shadow-inner group-hover:bg-white/20">
                      <link.icon size={24} className="group-hover:scale-110 transition-transform" />
                    </div>
                    <span className="font-black text-base uppercase tracking-widest">{link.name}</span>
                  </div>
                  <ChevronRight size={20} className="transition-transform group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
