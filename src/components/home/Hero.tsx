import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, User, Phone } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Hero() {
  const bg = PlaceHolderImages.find(img => img.id === 'hero-bg');

  return (
    <section className="relative min-h-[95vh] flex items-center pt-24 pb-12 overflow-hidden px-4">
      {/* Background with Ambient Glow */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bg?.imageUrl || "https://picsum.photos/seed/sundar1/1920/1080"}
          alt="Sundarbans"
          fill
          priority
          className="object-cover scale-105 blur-[2px]"
          data-ai-hint="sundarbans forest"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-background/80 to-background"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="glass-card p-8 md:p-16 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom duration-1000">
            <div className="inline-flex items-center gap-3 bg-white/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/40 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
              <p className="text-[10px] font-black uppercase tracking-widest text-primary">Admission Open 2025</p>
            </div>

            <h1 className="text-4xl md:text-6xl font-headline font-black text-primary leading-[1.1]">
              Shaping <span className="gradient-text">Futures</span> <br />
              In Sundarbans
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Providing high-quality education since decades, we empower students to achieve excellence and contribute positively to society.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="btn-pill btn-gradient-primary group">
                Apply Now <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="btn-pill border-2 border-primary/20 bg-white/20 hover:bg-white/40">
                Explore Programs
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-8">
              {[
                { icon: FileText, label: "Notices", href: "/notices" },
                { icon: User, label: "Portal", href: "/auth/portal" },
                { icon: Phone, label: "Contact", href: "/contact" }
              ].map((item, i) => (
                <Link key={i} href={item.href} className="flex flex-col items-center gap-2 p-4 bg-white/30 backdrop-blur-lg rounded-3xl border border-white/40 hover:bg-white/50 transition-all group">
                  <item.icon className="text-primary group-hover:scale-110 transition-transform" size={20} />
                  <span className="text-[10px] font-black uppercase tracking-widest text-primary">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden lg:block relative aspect-square animate-in fade-in zoom-in duration-1000 delay-300">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-[3rem] -rotate-6"></div>
            <div className="relative w-full h-full rounded-[3rem] overflow-hidden rotate-3 shadow-2xl border-4 border-white/60">
              <Image
                src="https://picsum.photos/seed/school1/800/800"
                alt="Students"
                fill
                className="object-cover"
                data-ai-hint="happy students"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}