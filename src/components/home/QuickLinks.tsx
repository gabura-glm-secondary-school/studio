import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function QuickLinks() {
  const links = [
    { name: "Admission Forms", href: "#", color: "hover:bg-blue-500" },
    { name: "Exam Routines", href: "/notices", color: "hover:bg-emerald-500" },
    { name: "Syllabus", href: "#", color: "hover:bg-amber-500" },
    { name: "Dress Code", href: "/about", color: "hover:bg-rose-500" },
    { name: "Code of Conduct", href: "/about", color: "hover:bg-indigo-500" },
    { name: "Batch Directory", href: "/ssc-batches", color: "hover:bg-purple-500" },
    { name: "Complaint Box", href: "/complaints", color: "hover:bg-orange-500" },
    { name: "Academic Calendar", href: "/events", color: "hover:bg-teal-500" },
  ];

  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="glass-card p-12">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1 space-y-6">
              <span className="text-accent font-black uppercase tracking-[0.2em] text-xs">Information Hub</span>
              <h2 className="text-4xl font-headline font-black text-primary leading-tight">Resources for Parents & Students</h2>
              <p className="text-muted-foreground leading-relaxed font-medium">
                Find essential resources and documentation easily. We provide all necessary information for a seamless academic journey.
              </p>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {links.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  className={`flex items-center justify-between p-6 glass-card !rounded-3xl transition-all duration-500 group ${link.color} hover:text-white shadow-sm hover:shadow-xl hover:-translate-y-1`}
                >
                  <span className="font-black text-base uppercase tracking-widest">{link.name}</span>
                  <div className="w-10 h-10 rounded-full bg-white/40 flex items-center justify-center group-hover:bg-white group-hover:text-primary transition-colors shadow-inner">
                    <ChevronRight size={20} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}