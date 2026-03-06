import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function QuickLinks() {
  const links = [
    { name: "Admission Forms", href: "#" },
    { name: "Exam Routines", href: "/notices" },
    { name: "Syllabus & Curriculum", href: "#" },
    { name: "School Dress Code", href: "/about" },
    { name: "Code of Conduct", href: "/about" },
    { name: "SSC Batch Directory", href: "/ssc-batches" },
    { name: "Complaint Box", href: "/complaints" },
    { name: "Academic Calendar", href: "/events" },
  ];

  return (
    <section className="py-24 bg-secondary/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-1 space-y-6">
            <span className="text-accent font-bold uppercase tracking-[0.2em] text-sm">Information Hub</span>
            <h2 className="text-4xl font-headline font-bold text-primary">Quick Links for Students & Parents</h2>
            <p className="text-muted-foreground leading-relaxed">
              Find essential resources and documentation easily. We provide all necessary information for a seamless academic journey.
            </p>
          </div>
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
            {links.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className="flex items-center justify-between p-6 glass-card rounded-2xl hover:bg-primary hover:text-white transition-all group"
              >
                <span className="font-bold text-lg">{link.name}</span>
                <ChevronRight className="text-accent group-hover:translate-x-1 transition-transform" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}