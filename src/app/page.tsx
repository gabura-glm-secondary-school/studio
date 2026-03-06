import { Hero } from "@/components/home/Hero";
import { NewsTicker } from "@/components/home/NewsTicker";
import { Statistics } from "@/components/home/Statistics";
import { LatestNotices } from "@/components/home/LatestNotices";
import { PrincipalChairmanMessages } from "@/components/home/PrincipalChairmanMessages";
import { GalleryPreview } from "@/components/home/GalleryPreview";
import { QuickLinks } from "@/components/home/QuickLinks";
import { ContactPreview } from "@/components/home/ContactPreview";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-12">
      <NewsTicker />
      <Hero />
      
      {/* Statistics floating container */}
      <Statistics />
      
      {/* Notices Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <span className="text-accent font-black uppercase tracking-[0.2em] text-xs">Stay Updated</span>
            <h2 className="text-4xl lg:text-5xl font-headline font-black text-primary">Latest Announcements</h2>
          </div>
          <LatestNotices />
          <div className="mt-12 text-center">
            <Button variant="link" asChild className="text-primary font-black uppercase tracking-widest hover:text-accent">
              <Link href="/notices" className="flex items-center gap-2">
                View Notice Board <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
             <span className="text-accent font-black uppercase tracking-[0.2em] text-xs">Our Excellence</span>
             <h2 className="text-4xl lg:text-5xl font-headline font-black text-primary">School Highlights</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Quality Education", desc: "Equipped with modern teaching aids and experienced faculty members.", icon: "🎓", color: "from-blue-500/20 to-indigo-500/20" },
              { title: "Sundarbans Setting", desc: "Located in a unique natural environment promoting ecological awareness.", icon: "🌳", color: "from-green-500/20 to-emerald-500/20" },
              { title: "Cultural Heritage", desc: "Strong focus on local culture, traditions, and extra-curricular activities.", icon: "🎭", color: "from-purple-500/20 to-pink-500/20" }
            ].map((item, idx) => (
              <div key={idx} className={`glass-card p-12 space-y-6 hover-lift bg-gradient-to-br ${item.color}`}>
                <div className="text-6xl mb-6 drop-shadow-xl">{item.icon}</div>
                <h3 className="text-2xl font-headline font-black text-primary">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PrincipalChairmanMessages />

      {/* Student Achievements with Glass Cards */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="glass-card p-12 bg-primary/95 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative z-10">
              <div className="text-center mb-16 space-y-4">
                 <span className="text-accent font-black uppercase tracking-[0.2em] text-xs">Pride of Gabura</span>
                 <h2 className="text-4xl lg:text-5xl font-headline font-black">Student Achievements</h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-[2.5rem] space-y-4 hover-lift">
                    <div className="w-full aspect-square relative rounded-3xl overflow-hidden mb-4 shadow-xl">
                      <img src={`https://picsum.photos/seed/student${i}/300/300`} alt="Topper" className="object-cover w-full h-full" />
                    </div>
                    <div className="flex text-accent gap-1"><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /></div>
                    <h4 className="font-bold text-xl leading-tight">Top Rank SSC {2024 - i}</h4>
                    <p className="text-white/60 text-xs font-medium">Outstanding performance with GPA 5.00.</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <GalleryPreview />
      <QuickLinks />
      <ContactPreview />
    </div>
  );
}