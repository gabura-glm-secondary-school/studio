import { FileText, Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";

const mockNotices = [
  { id: 1, title: "SSC 2025 Test Examination Schedule published", date: "Oct 12, 2024", category: "Academic" },
  { id: 2, title: "Annual Sports Day Registration starts tomorrow", date: "Oct 10, 2024", category: "Events" },
  { id: 3, title: "Class 6 Admission process and requirements", date: "Oct 08, 2024", category: "Admission" },
  { id: 4, title: "Half-yearly holiday announcement for students", date: "Oct 05, 2024", category: "Holiday" },
];

export function LatestNotices() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {mockNotices.map((notice) => (
        <Link key={notice.id} href={`/notices/${notice.id}`} className="group block">
          <div className="glass-card p-6 flex gap-6 items-start hover:border-accent transition-all duration-300">
            <div className="bg-primary/5 text-primary p-4 rounded-2xl group-hover:bg-accent group-hover:text-primary transition-colors shrink-0">
              <FileText size={32} />
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                <span className="text-accent">{notice.category}</span>
                <span className="flex items-center gap-1"><Calendar size={12} /> {notice.date}</span>
              </div>
              <h3 className="text-xl font-headline font-bold text-primary group-hover:text-accent transition-colors line-clamp-2 leading-tight">
                {notice.title}
              </h3>
              <div className="flex items-center gap-2 text-primary font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                Read Details <ArrowRight size={14} />
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}