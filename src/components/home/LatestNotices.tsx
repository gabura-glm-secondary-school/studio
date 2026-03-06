
import { FileText, Calendar, ArrowRight, Bell } from "lucide-react";
import Link from "next/link";

const mockNotices: any[] = [];

export function LatestNotices() {
  if (mockNotices.length === 0) {
    return (
      <div className="py-20 text-center glass-card bg-white/50 border-dashed border-primary/10 w-full">
        <Bell size={48} className="text-primary/20 mx-auto mb-4" />
        <p className="text-muted-foreground font-black uppercase tracking-widest text-xs">নোটিশ বোর্ডে কোনো সাম্প্রতিক তথ্য নেই।</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-12">
      {mockNotices.map((notice) => (
        <Link key={notice.id} href={`/notices/${notice.id}`} className="group block">
          <div className="glass-card p-8 flex gap-6 items-start hover-lift">
            <div className="bg-primary/10 text-primary p-4 rounded-3xl group-hover:bg-primary group-hover:text-white transition-all duration-500 shrink-0">
              <FileText size={28} />
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                <span className="text-accent">{notice.category}</span>
                <span className="flex items-center gap-1"><Calendar size={12} /> {notice.date}</span>
              </div>
              <h3 className="text-xl font-headline font-bold text-primary group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                {notice.title}
              </h3>
              <div className="flex items-center gap-2 text-primary font-black text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                Details <ArrowRight size={14} />
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
