import { Hero } from "@/components/home/Hero";
import { Statistics } from "@/components/home/Statistics";
import { LatestNotices } from "@/components/home/LatestNotices";
import { PrincipalChairmanMessages } from "@/components/home/PrincipalChairmanMessages";
import { GalleryPreview } from "@/components/home/GalleryPreview";
import { QuickLinks } from "@/components/home/QuickLinks";
import { ContactPreview } from "@/components/home/ContactPreview";
import { EventHighlights } from "@/components/home/EventHighlights";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-0">
      {/* Hero section with floating statistics container */}
      <Hero />
      <Statistics />
      
      {/* Quick Access Grid */}
      <QuickLinks />

      {/* Latest Notice Preview Section */}
      <section className="py-24 px-4 bg-secondary/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <span className="text-accent font-black uppercase tracking-[0.2em] text-xs">Official Bulletins</span>
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

      {/* Principal & Chairman Messages */}
      <PrincipalChairmanMessages />

      {/* Event Highlights Section */}
      <EventHighlights />

      {/* Visual Journey - Gallery Preview */}
      <GalleryPreview />

      {/* Contact & Map Preview */}
      <ContactPreview />
    </div>
  );
}
