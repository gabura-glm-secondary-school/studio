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
    <>
      <NewsTicker />
      <Hero />
      <Statistics />
      
      {/* Latest Notices Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="space-y-4">
              <span className="text-accent font-bold uppercase tracking-[0.2em] text-sm">Stay Updated</span>
              <h2 className="text-4xl lg:text-5xl font-headline font-bold text-primary">Latest From Notice Board</h2>
            </div>
            <Button variant="outline" asChild className="rounded-full border-primary/20 hover:bg-primary hover:text-white group">
              <Link href="/notices">
                View All Notices <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
          <LatestNotices />
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-24 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
             <span className="text-accent font-bold uppercase tracking-[0.2em] text-sm">Our Excellence</span>
             <h2 className="text-4xl lg:text-5xl font-headline font-bold text-primary">School Highlights</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Quality Education", desc: "Equipped with modern teaching aids and experienced faculty members.", icon: "🎓" },
              { title: "Sundarbans Setting", desc: "Located in a unique natural environment promoting ecological awareness.", icon: "🌳" },
              { title: "Cultural Heritage", desc: "Strong focus on local culture, traditions, and extra-curricular activities.", icon: "🎭" }
            ].map((item, idx) => (
              <div key={idx} className="glass-card p-10 rounded-3xl space-y-4 hover:shadow-2xl transition-all">
                <div className="text-5xl mb-6">{item.icon}</div>
                <h3 className="text-2xl font-headline font-bold text-primary">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PrincipalChairmanMessages />

      {/* Student Achievements */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px]"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16 space-y-4">
             <span className="text-accent font-bold uppercase tracking-[0.2em] text-sm">Pride of Gabura</span>
             <h2 className="text-4xl lg:text-5xl font-headline font-bold">Student Achievements</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl space-y-4">
                <div className="w-full aspect-square relative rounded-xl overflow-hidden mb-4">
                  <img src={`https://picsum.photos/seed/student${i}/300/300`} alt="Topper" className="object-cover w-full h-full" />
                </div>
                <div className="flex text-accent gap-1"><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /></div>
                <h4 className="font-bold text-xl">Top Rank in SSC {2024 - i}</h4>
                <p className="text-white/60 text-sm">Outstanding performance with GPA 5.00 in all subjects.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GalleryPreview />
      <QuickLinks />
      <ContactPreview />
    </>
  );
}